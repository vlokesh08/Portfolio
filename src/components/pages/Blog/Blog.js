import React from "react";
import { useParams } from 'react-router-dom';
import posts from "../learnings/posts";
const Blog = () => {
    const { id } = useParams();
  return (
    <div className="container py-10">
      <div className="flex justify-center">
        <h1 className="font-normal text-gray-300 text-3xl md:text-6xl lg:text-7xl mb-10 md:mb-15 lg:mb-25">
          Daily Learnings of month {id}<br></br>
        </h1>
      </div>
      <div className="flex flex-col" >
          <h3 className="text-2xl my-5">2024 </h3>
          <br></br>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {
                Object.entries(posts).map(([month, entries]) => (
                    month === id && entries.map((entry, index) => (
                        <div key={index} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{entry.date}</h3>
                            <ul className="flex flex-wrap gap-2 my-2">
                                {entry.tags.map((tag, tagIndex) => (
                                    <li key={tagIndex} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                            <p>{entry.summary}</p>
                        </div>
                    ))
                ))
                
            }
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
