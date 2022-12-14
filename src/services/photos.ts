import { Photo } from "../types/photo";
import { storage } from '../libs/firebase';
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { v4  as createId} from 'uuid';

export async function getAll () {
    let list: Photo[] = [];

    const imagesFolder = ref(storage, "Galeria de imagens");
    const photoList = await listAll(imagesFolder);

    for(let i in photoList.items) {
        let photoURL = await getDownloadURL(photoList.items[i]);

        list.push({
            name: photoList.items[i].name,
            url: photoURL
        });
    }

    return list;
}

export async function Insert(file: File) {
    if(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
        
        let randomName = createId();
        let newFile = ref(storage, `Galeria de imagens/${randomName}`);

        let upload = await uploadBytes(newFile, file);
        let photourl = await getDownloadURL(upload.ref);

        return { name: upload.ref.name , url: photourl } as Photo;
    } else {
        return new Error('Tipo de arquivo não suportado.');
    }
}

export async function deleteImage(name: string) {
    let photoRef = ref(storage, `Galeria de imagens/${name}`)
    await deleteObject(photoRef);
}