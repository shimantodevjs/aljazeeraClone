import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../redux/newsSlice';
import NewsList from '../components/NewsList';
import { useParams } from 'react-router-dom';

const CategoryNews = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { articles, status, error, category: currentCategory } = useSelector((state) => state.news);

  useEffect(() => {
    if (status === 'idle' || category !== currentCategory) {
      dispatch(fetchNews(category));
    }
  }, [status, dispatch, category, currentCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 capitalize text-center">{category} News</h2>
      <NewsList articles={articles} status={status} error={error} />
    </div>
  );
};

export default CategoryNews;

