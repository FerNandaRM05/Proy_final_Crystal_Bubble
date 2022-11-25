import { useCategories } from "../hooks/useCategories"

export const BlogCategories: React.FC = () =>{
    const categories = useCategories();
    return(
        <>
        {categories.map((category) =>{
            return (
                <div>
                    <a href={`/blog?filter=${category.id}`}>{category.name}</a>
                </div>
            )
        })}
        </>
    )
}