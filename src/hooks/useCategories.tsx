import { useState, useEffect } from "react";

export interface Categories {
    id: number,
    name: string
}

export const useCategories = () => {
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

return(
   categories
)
}


