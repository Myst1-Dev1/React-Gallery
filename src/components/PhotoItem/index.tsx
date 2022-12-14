import * as C from './styles';
import { FaTrashAlt } from 'react-icons/fa';

interface PhotoItemProps {
    url: string;
    name: string;
    onDelete: (name:string) => void;
}

export function PhotoItem({url, name, onDelete} : PhotoItemProps) {
    return (
        <C.Container>
            <img src={url} alt={name} />
            {name}
            <FaTrashAlt className='delete' onClick={()=>onDelete(name)} />
        </C.Container>
    )
}