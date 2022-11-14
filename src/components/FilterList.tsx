import { FilterButton } from "./FiterButton"
import { useEffect, useState } from "react"
import './FilterList.css'

export type Categories = {
    id: number,
    name: string
}


export const FilterList = ({ setFilter, filter }: { setFilter: React.Dispatch<React.SetStateAction<number>>, filter: number }) => {
    const [categories, setCategories] = useState([] as Categories[]);

    useEffect(() => {
        fetch('https://crystalbubbleshop.com/wp-json/wp/v2/categories')
            .then(response => response.json())
            .then(data => {
                let categories = [] as Categories[];
                for (const item of data) {
                    let newCategory: Categories = {
                        id: item.id,
                        name: item.name
                    }
                    categories = [...categories, newCategory];
                }
                setCategories(categories);
            })
    }, [])


    return (
        <div className="filterContainer">
            {categories.map((item) => {
                return (<FilterButton
                
                    name={item.name}
                    setFilter={setFilter}
                    id={item.id}
                    isPressed={item.id === filter}
                />)
            })

            }
        </div>
    )
}
