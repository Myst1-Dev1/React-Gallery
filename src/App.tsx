import { FormEvent, useEffect, useState } from 'react';
import * as C from './App.styles';
import { PhotoItem } from './components/PhotoItem';
import * as Photos from './services/photos';
import { Photo } from './types/photo';

function App() {
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(()=>{
    getPhotos();
  }, []);

  async function getPhotos() {
    setLoading(true);
    setPhotos(await Photos.getAll());
    setLoading(false);
  }

  useEffect(() => {
    async function getPhotos() {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    }
    getPhotos();
  }, []);


  async function handleFormSubmit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;
    if(file && file.size > 0) {
      setUploading(true);
      let result = await Photos.Insert(file);
      setUploading(false);

      if(result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  }

  async function handleDelete(name: string) {
    await Photos.deleteImage(name);
    getPhotos();
  }

  return (
    <>
      <C.Container>
        <C.Area>
          <C.Header><h1>Galeria de fotos</h1></C.Header>

          <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
              <input type="file" name="image"/>
              <input type="submit" value = "Enviar" />
              {uploading && "Enviando..."}
          </C.UploadForm>
          
          {loading && 
            <C.ScreenWarning>
              <div className='emoji'>✋</div>
              <div>Carregando....</div>
            </C.ScreenWarning>
          }

          {!loading && photos.length > 0 &&
            <C.PhotoList>
              {photos.map((item, index) => (
                <PhotoItem key={index} url={item.url} name={item.name} onDelete={handleDelete} />
              ))}
            </C.PhotoList>
          }

          {!loading && photos.length === 0 &&
            <C.ScreenWarning>
              <div className='emoji'>😞</div>
              <div>Não há fotos cadastradas</div>
            </C.ScreenWarning>
          }
        </C.Area>
      </C.Container>
    </>
    
  );
}

export default App;
