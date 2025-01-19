import React from 'react';  

const Blog = () => {  
  return (  
    <div className='px-4 py-5'>  
      <h1 className='text-2xl font-semibold mb-4 text-center'>Blog Video</h1>  
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>  
        {/* Video 1 */}  
        <div className='relative w-full pb-[56.25%] h-0'>  
          <iframe  
            className='absolute top-0 left-0 w-full h-full rounded-md'  
            src='https://www.youtube.com/embed/CY7W6AFxzF0?si=TcjI85htMY_XmTdz'  
            title='YouTube video player'  
            frameBorder='0'  
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'  
            referrerPolicy='strict-origin-when-cross-origin'  
            allowFullScreen  
          ></iframe>  
        </div>  

        {/* Repeat for each video */}  
        <div className='relative w-full pb-[56.25%] h-0'>  
          <iframe  
            className='absolute top-0 left-0 w-full h-full rounded-md'  
            src='https://www.youtube.com/embed/CY7W6AFxzF0?si=TcjI85htMY_XmTdz'  
            title='YouTube video player'  
            frameBorder='0'  
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'  
            referrerPolicy='strict-origin-when-cross-origin'  
            allowFullScreen  
          ></iframe>  
        </div>  

        <div className='relative w-full pb-[56.25%] h-0'>  
          <iframe  
            className='absolute top-0 left-0 w-full h-full rounded-md'  
            src='https://www.youtube.com/embed/CY7W6AFxzF0?si=TcjI85htMY_XmTdz'  
            title='YouTube video player'  
            frameBorder='0'  
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'  
            referrerPolicy='strict-origin-when-cross-origin'  
            allowFullScreen  
          ></iframe>  
        </div>  

        <div className='relative w-full pb-[56.25%] h-0'>  
          <iframe  
            className='absolute top-0 left-0 w-full h-full rounded-md'  
            src='https://www.youtube.com/embed/CY7W6AFxzF0?si=TcjI85htMY_XmTdz'  
            title='YouTube video player'  
            frameBorder='0'  
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'  
            referrerPolicy='strict-origin-when-cross-origin'  
            allowFullScreen  
          ></iframe>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Blog;  
