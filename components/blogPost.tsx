import Image from "next/image";
// interface Blog {
//   _id: string;
//   title: string;
//   description: string;
//   date: string;
//   image: string;
// }

const BlogPost = () => {
  // const [blogs, setBlogs] = useState<Blog[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       const response = await fetch('/api/blogs');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch blogs');
  //       }
  //       const data = await response.json();
  //       setBlogs(data);
  //       setLoading(false);
  //     } catch (err) {
  //       setError(err instanceof Error ? err.message : 'An unknown error occurred');
  //       setLoading(false);
  //     }
  //   };

  //   fetchBlogs();
  // }, []);

  // if (loading) return <div>Loading blogs...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex justify-center items-center">
      <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
        <div role="main" className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
            وبلاگ این هفته
          </h1>
          <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
            اگر به دنبال پاراگراف‌های تصادفی هستید، به جای درستی آمده‌اید. زمانی
            که یک کلمه یا جمله تصادفی به اندازه کافی نیست
          </p>
        </div>
        <div className="lg:flex items-stretch md:mt-12 mt-8">
          <div className="lg:w-1/2 ">
            <div className="sm:flex items-center  justify-between xl:gap-x-8 gap-x-6">
              <div className="sm:w-1/2 relative  hover:scale-105 transition-all duration-300 ease-in-out">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    12 April 2021
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      The Decorated Ways
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      Dive into minimalism
                    </p>
                    <a
                      href="#"
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <Image
                  src="/assets/images/over.jpeg"
                  className="w-full"
                  alt="chair"
                  width={500}
                  height={500}
                />
              </div>
              <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    12 April 2021
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      The Decorated Ways
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      Dive into minimalism
                    </p>
                    <a
                      href="#"
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <Image
                  src="/assets/images/ai.jpg"
                  className="w-full"
                  alt="chair"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="relative">
              <div>
                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  12 April 2021
                </p>
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                    The Decorated Ways
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                    Dive into minimalism
                  </p>
                  <a
                    href="#"
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <br />
              {/* <Image
                  src="/assets/images/ai.jpg"    
                  className="w-full"
                  alt="chair"
                  width={500}
                  height={500}
                /> */}
              <Image
                src="/assets/images/ai.jpg"
                className="w-full"
                alt="chair"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
            <div className="relative">
              <div>
                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  12 April 2021
                </p>
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                    The Decorated Ways
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                    Dive into minimalism
                  </p>
                  <a
                    href="#"
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <Image
                src="/assets/images/soft.jpeg"
                className="w-full"
                alt="chair"
                width={500}
                height={500}
              />
              {/* <Image
                  src="/assets/images/ai.jpg"    
                  className="w-full"
                  alt="chair"
                  width={500}
                  height={500}
                /> */}
            </div>
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
              <div className="relative w-full">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    12 April 2021
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      The Decorated Ways
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      Dive into minimalism
                    </p>
                    <a
                      href="#"
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <Image
                  src="/assets/images/overview.jpg"
                  className="w-full"
                  alt="chair"
                  width={500}
                  height={500}
                />
              </div>
              <div className="relative w-full sm:mt-0 mt-4">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    12 April 2021
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      The Decorated Ways
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      Dive into minimalism
                    </p>
                    <a
                      href="#"
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <Image
                  src="/assets/images/ai.jpg"
                  className="w-full"
                  alt="chair"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
