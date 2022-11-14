import { useState } from "react";
import './FilterButton.css'

export const FilterButton = ({name, setFilter, id, isPressed}: {isPressed: boolean, name:string, setFilter: React.Dispatch<React.SetStateAction<number>>, id:number}) => {
    const [selected, setSelected] = useState(isPressed);
    
    const handleClick = () => {
        if (selected){
            setFilter(id)
            setSelected(false); 
        } else if (!selected){
            setFilter(0);
            setSelected(true)
        }
    }
    
    return(
        <button onClick={handleClick} className={`button ${isPressed ? 'selected' : 'not-selected'}`}>
            {name}
        </button>
    )
}