
import { IonInfiniteScroll, IonInfiniteScrollContent, IonLoading, IonSpinner } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { FilterButton } from './FiterButton';
import { Post } from './Post';
import './Blog.css'
import { useCategories } from '../hooks/useCategories';

export interface Post {
    id: number,
    title: string,
    date: string,
    link: string,
    description: string,
    img: string,
    sticky: boolean,
    content: string,
    category: number,
}


export interface FilterProps {
    setFilter: React.Dispatch<React.SetStateAction<number>>,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
    setInfiniteDisabled: React.Dispatch<React.SetStateAction<boolean>>
    isPressed: boolean,
    name: string,
    id: number,
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>
}


export const Blog: React.FC = () => {

    const [posts, setPosts] = useState([] as Post[]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
    const categories = useCategories();
    const [filter, setFilter] = useState(0);

    useEffect(() => {

            if (filter === 0) {
                fetchData(currentPage)
            } else {
                fetchData(currentPage, filter)
            }
        
    }, [filter, currentPage]);

    const fetchData = async (page: number, filter?: number) => {
        let totalWpPosts = 0;

        setLoading(true);
        let categoryQuery = filter ? `&categories=${filter}` : "";
        await fetch(`https://crystalbubbleshop.com/wp-json/wp/v2/posts?page=${page}${categoryQuery}`)
            .then(response => {
                if (response.status === 400) {
                    setInfiniteDisabled(true);
                    setLoading(false);
                    return;
                } else {
                    response.headers.forEach(function (value, key) {
                        if (key === "x-wp-totalpages") {
                            totalWpPosts = parseInt(value)
                        }
                    })
                    return response.json()
                }
            })
            .then(data => {
                let newData =  posts;
                for (const item of data) {
                    let newItem: Post = {
                        id: item.id,
                        title: item.title.rendered,
                        date: item.date,
                        link: item.link,
                        description: item.yoast_head_json.description,
                        img: item.featured_image_src,
                        sticky: item.sticky,
                        content: item.content.rendered,
                        category: item.categories[0],
                    }
                    newData = [...newData, newItem];
                }
                setPosts(newData);
                if (totalWpPosts <= page) {
                    setInfiniteDisabled(true)
                }
                setLoading(false);
            })
    }

    const nextPage = (event: CustomEvent<void>) => {
        if (!isInfiniteDisabled) {
            setCurrentPage(currentPage + 1);
            (event.target as HTMLIonInfiniteScrollElement).complete();
        }
    }

    return (
        <>
            <div className="filterContainer">
                {categories.map((item) => {
                    return (<FilterButton
                        isPressed={item.id === filter}
                        id={item.id}
                        name={item.name}
                        setFilter={setFilter}
                        setCurrentPage={setCurrentPage}
                        setInfiniteDisabled={setInfiniteDisabled}
                        setPosts={setPosts}
                    />)
                })
                }
            </div>

            {
                loading && posts.length === 0
                    ?
                    <IonInfiniteScrollContent
                                loadingSpinner="bubbles"
                                loadingText="Cargando posts..."
                            />
                    :
                    <>
                        <div id="scrollableContent">
                            {
                                posts.map((post) => {
                                    return (
                                        <Post
                                            key={post.id}
                                            link={post.link}
                                            img={post.img}
                                            title={post.title}
                                            description={post.description}
                                            date={post.date}
                                            category={post.category}
                                        />
                                    )
                                })
                            }
                        </div>

                        <IonInfiniteScroll
                            onIonInfinite={(e: CustomEvent<void>) => nextPage(e)}
                            threshold="100px"
                            disabled={isInfiniteDisabled}
                            position="bottom"
                        >
                            <IonInfiniteScrollContent
                                loadingSpinner="bubbles"
                                loadingText="Cargando posts..."
                            />
                        </IonInfiniteScroll>
                        {isInfiniteDisabled 
                        ?  
                        <p className='message'>
                            {posts.length === 0 ? "No hay ningún post en esta cagetoría":"No hay más  posts"}
                        </p> 
                        : ""}
                    </>
            }
        </>
    )
}


