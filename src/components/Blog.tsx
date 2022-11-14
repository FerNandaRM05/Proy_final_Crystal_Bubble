
import { IonInfiniteScroll, IonInfiniteScrollContent, IonSpinner } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { FilterList } from './FilterList';
import { Post } from './Post';
import './Blog.css'

export type Post = {
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



export const Blog: React.FC = () => {

    const [posts, setPosts] = useState([] as Post[]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);

    const [filter, setFilter] = useState(0);
    const [filteredPost, setFilteredPost] = useState(posts)


    useEffect(() => {
        if (filter === 0) {
            setFilteredPost(posts);
        } else {
            const filtered = posts.filter((post) => post.category === filter);
            setFilteredPost(filtered);
        }
    }, [filter, posts]);

    useEffect(() => {
        if (!isInfiniteDisabled) fetchData(currentPage)
    }, [currentPage, isInfiniteDisabled]);

    const fetchData = async (page: number) => {
        await fetch(`https://crystalbubbleshop.com/wp-json/wp/v2/posts?page=${page}`)
            .then(response => {
                if (response.status === 400) {
                    setInfiniteDisabled(true);
                    return;
                } else {
                    return response.json()
                }
            })
            .then(data => {
                let newData = posts;
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
            {
                loading && posts.length === 0
                    ?
                    <IonSpinner />
                    :
                    <>
                    <FilterList
                    setFilter={setFilter}
                    filter={filter}
                    />
                        <div id="scrollableContent">
                    {
                                filteredPost.map((post) => {
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
                        {isInfiniteDisabled ? <p className='message'>No hay más posts</p> : ""}
                    </>
            }
        </>
    )
}


