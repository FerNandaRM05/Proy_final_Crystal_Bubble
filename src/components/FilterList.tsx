import { FilterButton } from "./FiterButton"
import { useEffect, useState } from "react"
import './FilterList.css'


// const FilterList = ({ setFilter, filter, categories, setCurrentPage, setInfiniteDisabled }: { setFilter: React.Dispatch<React.SetStateAction<number>>, filter: number, categories: Categories[], setCurrentPage : React.Dispatch<React.SetStateAction<number>>, setInfiniteDisabled: React.Dispatch<React.SetStateAction<boolean>> }) => {
 
    

//     return (
//         <div className="filterContainer">
//             {categories.map((item) => {
//                 console.log(item.id === filter);
//                 return (<FilterButton
//                 setInfiniteDisabled={setInfiniteDisabled}
//                     setCurrentPage={setCurrentPage}
//                     name={item.name}
//                     setFilter={setFilter}
//                     id={item.id}
//                     isPressed={item.id === filter}
//                 />)
//             })

//             }
//         </div>
//     )
// }