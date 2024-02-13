import React, { useEffect, useState } from 'react';
import NewsData from "./NewsData/NewsData";

const NewsDisplay = (props) => {
    const { state, setState } = props;
    const [loadedPosts, setLoadedPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5; // Количество постов на странице

    const fetchData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/albums/1/photos?_page=${currentPage}&_limit=${postsPerPage}`);
            const newPosts = await response.json();
            setLoadedPosts((prevPosts) => [...prevPosts, ...newPosts]);
            setCurrentPage((prevPage) => prevPage + 1);
        } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
        }
    };

    useEffect(() => {
        fetchData().then();
    }, []);

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight - 10) {
            fetchData().then();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className=' '>
            <NewsData data={loadedPosts} state={state} setState={setState} />
        </div>
    );
};

export default NewsDisplay;
