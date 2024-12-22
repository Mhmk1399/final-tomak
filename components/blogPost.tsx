import Image from "next/image";
import { blogPosts } from "@/lib/blogData";
import Link from "next/link";
const BlogPost = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
        <div role="main" className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800">
            وبلاگ این هفته
          </h1>
        </div>
        <div className="lg:flex items-stretch md:mt-12 mt-8">
          <div className="lg:w-1/2 ">
            <div className="sm:flex items-center  justify-between xl:gap-x-8 gap-x-6">
              {blogPosts.slice(0, 2).map((post) => (
                <div
                  dir="rtl"
                  key={post.id}
                  className="sm:w-1/2 relative flex flex-col justify-center items-center gap-4  hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <div className="">
                    <p className="p-6 text-xs  font-medium leading-3 text-white absolute top-1 left-0">
                      {post.date}
                    </p>
                    <div className="absolute bottom-0 left-0 p-6 ">
                      <h2 className="text-md font-semibold  mt-4 text-white">
                        {post.title}
                      </h2>
                      <p className="text-xs leading-4 my-4 text-white/80 mt-2">
                        {post.summary}
                      </p>

                      <Link
                        href={post.link}
                        className="pr-2 text-sm font-medium leading-none"
                      >
                        اطلاعات بیشتر
                      </Link>
                    </div>
                  </div>
                  <Image
                    src="/assets/images/over.jpeg"
                    className="w-full"
                    alt={post.title}
                    width={500}
                    height={500}
                  />
                </div>
              ))}
            </div>
            {blogPosts.slice(2, 3).map((post) => (
              <div className="relative" dir="rtl" key={post.id}>
                <div>
                  <p className="p-6 text-xs  font-medium leading-3 text-white absolute top-2 left-0">
                    {post.date}
                  </p>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      {post.title}
                    </h2>
                    <p className="text-base my-4 leading-4 text-white/80 mt-2">
                      {post.summary}
                    </p>

                    <Link
                      href={post.link}
                      className=" text-sm  font-medium leading-none"
                    >
                      اطلاعات بیشتر
                    </Link>
                  </div>
                </div>
                <br />

                <Image
                  src="/assets/images/ai.jpg"
                  className="w-full"
                  alt="chair"
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>
          <div
            className="lg:w-1/2 xl:ml-8 lg:ml-4  lg:mt-12 lg:flex flex-col justify-between"
            dir="rtl"
          >
            {blogPosts.slice(3, 4).map((post) => (
              <div className="relative mt-4" dir="rtl" key={post.id}>
                <div>
                  <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    {post.date}
                  </p>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      {post.title}
                    </h2>
                    <p className="text-base leading-4 text-white/80 my-4 mt-2">
                      {post.summary}
                    </p>

                    <Link
                      href={post.link}
                      className="pr-2 text-sm font-medium leading-none"
                    >
                      اطلاعات بیشتر
                    </Link>
                  </div>
                </div>
                <Image
                  src={post.image}
                  className="w-full"
                  alt="chair"
                  width={500}
                  height={500}
                />
              </div>
            ))}
            <div className="sm:flex items-center  justify-between xl:gap-x-8 gap-x-6">
              {blogPosts.slice(0, 2).map((post) => (
                <div
                  dir="rtl"
                  key={post.id}
                  className="sm:w-1/2 relative flex flex-col justify-center items-center gap-4  hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <div className="">
                    <p className="p-6 text-xs  font-medium leading-3 text-white absolute top-1 left-0">
                      {post.date}
                    </p>
                    <div className="absolute bottom-0 left-0 p-6 ">
                      <h2 className="text-md font-semibold  mt-4 text-white">
                        {post.title}
                      </h2>
                      <p className="text-xs leading-4 my-4 text-white/80 mt-2">
                        {post.summary}
                      </p>

                      <Link
                        href={post.link}
                        className="pr-2 text-sm font-medium leading-none"
                      >
                        اطلاعات بیشتر
                      </Link>
                    </div>
                  </div>
                  <Image
                    src={post.image}
                    className="w-full"
                    alt={post.title}
                    width={500}
                    height={500}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
