import React from 'react';
import gifLogo from '../assets/gifLogo.gif'

const NewsList = ({ articles, status, error }) => {
  let content;

  if (status === 'loading') {
    content = <div className='flex justify-center items-center w-full'>
                <img src={gifLogo} alt="" />
              </div>;
  } else if (status === 'succeeded') {
    const filteredArticles = articles.filter(article => article.urlToImage);

    content = (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:w-[70%] mx-auto mt-5">
        <div className="col-span-1 lg:sticky lg:top-5 lg:self-start lg:h-screen">
          {filteredArticles[0] && (
            <div className="border rounded overflow-hidden">
              <img src={filteredArticles[0].urlToImage} alt={filteredArticles[0].title} className="w-full h-64 object-cover" />
              <a 
                href={filteredArticles[0].url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline p-4 flex flex-col justify-between"
              >
                <h3 className="text-lg font-semibold mb-2">{filteredArticles[0].title}</h3>
                <p className="text-sm">{filteredArticles[0].description}</p>
              </a>
            </div>
          )}
        </div>
        <div className="col-span-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredArticles.slice(1).map((article, index) => (
            <div key={index} className="border rounded overflow-hidden">
              <img src={article.urlToImage} alt={article.title} className="w-full h-64 lg:h-32 object-cover" />
              <a 
                href={article.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline p-4 flex flex-col justify-between"
              >
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-sm">{article.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return <div>{content}</div>;
};

export default NewsList;


