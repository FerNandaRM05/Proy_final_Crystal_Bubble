import { useState } from "react";
import { FilterProps, Post } from "./Blog";
import './FilterButton.css'


export const FilterButton = (props: FilterProps) => {

    const {name, setFilter, id, isPressed, setCurrentPage, setInfiniteDisabled, setPosts} = props
    const [selected, setSelected] = useState(isPressed);
    
    const handleClick = () => {
        setCurrentPage(1);
        setPosts([] as Post[]);
        if (!selected){
            setFilter(id);
            setInfiniteDisabled(false)
            setSelected(true); 
        } else if (selected){
            setFilter(0);
            setSelected(false)
        }
    }
    
    return(
        <button onClick={handleClick} className={`button ${isPressed ? 'selected' : 'not-selected'}`}>
            {name}
        </button>
    )
}