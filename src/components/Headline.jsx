import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHeadline } from '../redux/newsSlice';
import NewsList from './NewsList';

const Headline = () => {
    const dispatch = useDispatch();
    const headlineArticles = useSelector((state) => state.news.headlineArticles);
    const headlineStatus = useSelector((state) => state.news.headlineStatus);
    const error = useSelector((state) => state.news.error);

    useEffect(() => {
        if (headlineStatus === 'idle') {
            dispatch(fetchHeadline());
        }
    }, [headlineStatus, dispatch]);

    return (
        <div>
            <section className='container mx-auto px-4 py-8'>
                <h2 className="text-3xl font-bold mb-8 capitalize text-center">headlines</h2>
                <NewsList articles={headlineArticles} status={headlineStatus} error={error} />
            </section>
        </div>
    );
};

export default Headline;
