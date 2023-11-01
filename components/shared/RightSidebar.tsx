import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const hotQuestions = [
  { _id: 1, title: 'How do I use express as a custom server in NextJS?' },
  { _id: 2, title: 'Question 2' },
  { _id: 3, title: 'Question 3' },
  { _id: 4, title: 'Question 4' },
  { _id: 5, title: 'Question 5' },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div className="">
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              key={question._id}
              href={`/questions/${question._id}`}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="chevron right"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16"></div>
    </section>
  );
};

export default RightSidebar;
