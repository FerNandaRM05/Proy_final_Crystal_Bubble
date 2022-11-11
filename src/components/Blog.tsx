
import React, { useEffect, useState, useRef } from 'react';
import { Post } from './Post';

export type Posts = {
    id: number,
    title: string,
    date: string,
    link: string,
    description: string,
    img: string,
    sticky: boolean,
    content: string,
}[]

export const Blog: React.FC = () => {

    const [posts, setPosts] = useState([] as Posts);
    const listInnerRef = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [previousPage, setPreviousPage] = useState(0); 
    const [isLastPage, setLastPage] = useState(false); 

    const onScroll = () => {

        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
            if (scrollTop + clientHeight === scrollHeight) {
                setCurrentPage(currentPage + 1)
            }
        }
    };
    ;

    useEffect(() => {
        const fetchData = async (page: number) => {
            await fetch(`https://crystalbubbleshop.com/wp-json/wp/v2/posts?page=${page}`)
                .then(response => {
                    if (response.status === 400) {
                        setLastPage(true);
                        return;
                    }
                    setPreviousPage(page)
                    return response.json()
                })
                .then(data => {
                    let newData = [] as Posts;

                    for (const item of data) {
                        let newItem = {
                            id: item.id,
                            title: item.title.rendered,
                            date: item.date,
                            link: item.link,
                            description: item.yoast_head_json.description,
                            img: item.featured_image_src,
                            sticky: item.sticky,
                            content: item.content.rendered,
                        }
                        newData = [...newData, newItem];
                    }
                    setPosts(newData);
                }
                )
        }
        if (!isLastPage && previousPage !== currentPage) {
            fetchData(currentPage);
        }
    }, [currentPage, isLastPage, previousPage, posts]);


    return (
        <>
            <div className='blog' onWheel={onScroll} onScroll={onScroll} ref={listInnerRef}>
                {posts.map((post) => {
                    return (
                        <Post
                            key={post.id}
                            link={post.link}
                            img={post.img}
                            title={post.title}
                            description={post.description}
                            date={post.date}
                        />
                    )
                })}

            </div>
        </>
    )
}


