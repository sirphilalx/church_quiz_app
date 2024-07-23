import { hotNews, tags } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderedTag from "../RenderedTag";
// import RenderedTag from "../RenderedTag";

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border sticky right-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[330px]">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotNews.map((question) => (
            <Link
              href={`/questions/${question.id}`}
              key={question.id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.question}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {tags.map((tag) => (
            <RenderedTag
              key={tag.id}
              _id={tag.id}
              name={tag.tag}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
  //   return (
  // <section className="background-light900_dark200 light-border sticky right-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[330px]">
  //   <div className="flex flex-1 flex-col gap-6">
  //     <h3 className="h3-bold text-dark200_light900">Hot Network</h3>
  //     {hotNews.map((item) => {
  //       return (
  //         <section key={item.id}>
  //           <ul className="flex cursor-pointer items-center justify-between gap-7">
  //             <li>
  //               <p className="text-dark500_light700 body-medium">
  //                 {item.question}
  //               </p>
  //             </li>
  //             <Image
  //               src={item.image}
  //               width={20}
  //               height={20}
  //               alt="chevron"
  //               className="invert-colors"
  //             />
  //           </ul>
  //         </section>
  //       );
  //     })}
  //   </div>
  //   <div className="mt-16 flex flex-1 flex-col gap-6">
  //     <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
  //     {tags.map((item) => {
  //       return (
  //         <section key={item.id}>
  //           <ul>
  //             <li className="flex justify-between gap-2">
  //               <p className="background-light800_dark300 rounded px-4 py-2 text-light-500">
  //                 {item.tag.toUpperCase()}
  //               </p>
  //               <p className="text-dark500_light700"> {item.number}</p>
  //             </li>
  //           </ul>
  //         </section>
  //       );
  //     })}
  //   </div>
  // </section>
  //   );
};

export default RightSidebar;
