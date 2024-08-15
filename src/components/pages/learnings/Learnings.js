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
        <div className="flex flex-col gap-5 py-5">
          <h1>
            Over the past few months, I have learnt a lot of things. Here are
            they:
          </h1>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
            <div className="flex gap-2">
              <ListItem />
              <h2>Postgres SQL</h2>
            </div>
            <div className="flex gap-2">
              <ListItem />
              <h2>Prisma ORM</h2>
            </div>
            <div className="flex gap-2">
              <ListItem />
              <h2>Hono Framework</h2>
            </div>
            <div className="flex gap-2">
              <ListItem />
              <h2>Socket.io</h2>
            </div>
            <div className="flex gap-2">
              <ListItem />
              <h2>Solidity</h2>
            </div>
            <div className="flex gap-2">
              <ListItem />
              <h2>AWS EC2 Instance</h2>
            </div>
            <div className="flex gap-2">
              <ListItem />
              <h2>Nginx</h2>
            </div>
          </div>
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

const ListItem = () => {
  return (
    <span className="mr-2.5 mt-0.5 text-primary">
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_980_24852)">
          <path
            d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
            fill="currentColor"
          />
          <path
            d="M12.6875 7.09375L8.96875 10.7188L7.28125 9.0625C7 8.78125 6.5625 8.8125 6.28125 9.0625C6 9.34375 6.03125 9.78125 6.28125 10.0625L8.28125 12C8.46875 12.1875 8.71875 12.2813 8.96875 12.2813C9.21875 12.2813 9.46875 12.1875 9.65625 12L13.6875 8.125C13.9688 7.84375 13.9688 7.40625 13.6875 7.125C13.4063 6.84375 12.9688 6.84375 12.6875 7.09375Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_980_24852">
            <rect width={20} height={20} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

export default Learnings;
