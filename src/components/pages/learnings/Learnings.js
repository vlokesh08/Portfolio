import React from "react";
import posts from "./posts";
const Learnings = () => {
  const MAX_DISPLAY = 5;
  return (
    <div className="m-12 lg:m-12 min-h-screen" id="dabba">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Learnings
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My Daily Learnings and Experiences.
          </p>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-5 p-4">
          {Object.entries(posts).map(([month, entries]) => (
            <div key={month}>
              <div>
                <a
                  href={`/learnings/${month}`}
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {month}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the Learning for the month of {month}
                  </p>
                </a>
              </div>
              {/* {entries.map((entry, index) => (
                        <div key={index}>
                            <h3>{entry.date}</h3>
                            <p>{entry.summary}</p>
                            <ul>
                                {entry.tags.map(tag => <li key={tag}>{tag}</li>)}
                            </ul>
                        </div>
                    ))} */}
            </div>
          ))}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <a
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </a>
        </div>
      )}
    </div>
  );
};

export default Learnings;
