"use client";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const tableOfContents = [
    { id: "section1", title: "متن سربرگ وبلاگ" },
    { id: "section2", title: "متن سربرگ وبلاگ 2" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  return (
    <>
      <div className="relative min-h-screen w-full py-12 bg-sky-50" dir="rtl">
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-32 transform -translate-y-1"
            preserveAspectRatio="none"
          >
            <path
              fill="#0369a1"
              fillOpacity="0.1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
            <path
              fill="#0284c7"
              fillOpacity="0.2"
              d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,176C672,192,768,192,864,176C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
        <div className=" px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-evenly gap-8">
            <div className="md:w-1/2 lg:mr-6">
              <h1 className="text-5xl font-bold border-b-2 py-2 border-sky-100 text-sky-900 mb-4">
                راهنمای جامع طبقه بندی متون یا (text classification)
              </h1>
              <p className="text-sky-700 mb-2 text-lg leading-relaxed">
                بیش از ۸۰ درصد از داده های موجود در دنیای دیجیتال به صورت داده
                های متنی هستند تحلیل کردن و فهمیدن این داده های متنی امتیاز
                مهمیست که از طریق هوش مصنوعی و یادگیری ماشین برای بیزینس های
                مختلف امکان پذیر شده است بیزینس ها میتوانند با تحلیل و نتیجه
                گیری از این داده ها در فضا های مجازی ، مقالات ،اسناد و مدارک
                و... مقرون به صرفگی و بازدهی تبلیغات  و تمام روند هایی که در کسب
                و کارشان از طریق مکالمات متنی انجام میشود را افزایش دهند ما در
                این مقاله سعی کردیم یک دیدگاه کلی از این تکنولوژی به شما بدیم و
                چند مورد از مهمترین مدل های تحلیل این داده ها را معرفی کنیم در
                ابتدا به معرفی چند تا از اصطلاحات پرتکرار میپردازیم که میتوانید
                از فهرست مطالب هرکدام را به صورت جداگانه برسی کنید میتونید برای
                یادگیری بیشتر نیز از ویدیو این مطلب در یوتوب در انتهای صفحه
                استفاده کنید
              </p>
              <Image
                src="/assets/images/proftestimonial.png"
                alt="Description"
                width={30}
                height={30}
                className="rounded-full shadow-lg inline-block"
              />
              <span className="text-black font-medium mr-2">
                نویسنده :{" "}
                <strong className="text-sky-600 hover:underline">
                  محمدحسین محمدخانی
                </strong>
              </span>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/assets/images/textclassificationBanner.jpeg"
                alt=" photo made by AI about text classification"
                width={800}
                height={500}
                className=" shadow-lg shadow-gray-400 hover:shadow-none transition-shadow duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          className="sticky lg:top-[8rem] lg:left-4 z-50 bg-white/10 backdrop-blur-xs p-4 rounded-lg shadow-lg border border-sky-100 w-full lg:w-48"
          dir="rtl"
        >
          <h4 className="text-lg font-bold text-sky-900 mb-4 border-b pb-2">
            فهرست مطالب
          </h4>
          <ul className="space-y-2">
            {tableOfContents.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-sky-600 hover:text-sky-900 transition-colors duration-300 border-b border-gray-200 text-right w-full hover:bg-gray-100 p-3 rounded-lg"
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* طبقه بندی کننده متن یا "text classifier" چیست ؟ */}
        <div className=" container max-w-3xl mx-auto" dir="rtl">
          <div className="px-4 py-16  flex flex-col  justify-center gap-8 ">
            <h2
              id="section1"
              className="text-4xl text-gray-800 text-right font-bold"
            >
              طبقه بندی کننده متن یا t(ext classifier) چیست ؟
            </h2>
            <p className=" text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              یکی از حیاتی ترین عمل ها در پروژه هایی مانند پردازش زبان های طبیعی
              (
              <Link
                href="https://www.deeplearning.ai/resources/natural-language-processing/"
                className="text-blue-500 hover:border-b px-1 py-0 font-bold "
              >
                NLP
              </Link>
              ) ،تحلیل جملات (
              <Link
                href="https://aws.amazon.com/what-is/sentiment-analysis/#:~:text=Sentiment%20analysis%20is%20the%20process,social%20media%20comments%2C%20and%20reviews."
                className="text-blue-500 hover:border-b px-1 py-0 font-bold "
              >
                Sentiment Analysis
              </Link>
              )، تشخیص نیت و اهداف (
              <Link
                href="https://paperswithcode.com/task/intent-detection"
                className="text-blue-500 hover:border-b px-1 py-0 font-bold "
              >
                intent detection
              </Link>
              ) برچسب زنی یا لیبل گذاری هر کدام از داده های ورودی میباشد طبقه
              بندی کنندگان هر داده ی ورودی را تحلیل می کنند و با توجه به معیار
              های درونی برنامه و یا کسب و کار شما برچسب زنی میکنند و به شما
              تحویل میدهند برای مثال شما 10000 پیام ورودی از مشتریان خود بعد از
              یک تبلیغات پیامکی داشته اید و نظرات آنها را در مورد برند خود
              خواسته اید شما معیار های خوب بد و خنثی را برای این طبقه بندی
              استفاده می کنید جمله (من برند شما را خیلی دوست دارم) وارد طبقه
              بندی کننده (text classifier) شما میشود و بعد از تحلیل برچسب خوب را
              به خود میگیرد و میتواند در دیگر قسمت های این برنامه تحلیل شود
            </p>
            <div className="flex flex-col bg-sky-100 hover:bg-sky-50 transition-all duration-300 ease-in-out gap-2 p-4 border-r-4 border-sky-500">
              <div className="text-right text-black">بیشتر بخوانید ...</div>
              <p className="text-right text-gray-500 leading-relaxed">
                لینک توضیحات کامل برنامه های ذکر شده در متن بالا با رنگ ابی مشخص
                شده است با کلیک بر روی این کلمات میتوانید تمام اطلاعات لازم را
                بدست بیاورید
              </p>
            </div>

            {/* مدل چیست ؟ تفاوت مدل و طبقه بندی کننده متن */}

            <h2
              id="section1"
              className="text-4xl text-gray-800 text-right font-bold"
            >
              مدل چیست ؟ تفاوت مدل و طبقه بندی کننده متن
            </h2>
            <p className=" text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              خیلی از جاها ممکنه این دو به عنوان هم معنی معرفی بشند امادر اصل
              اتفاقی که در قلب مدل یادگیری ماشین شما اتفاق میافتد لیبل زنی این
              اطلاعات است درصورتی که شما میتواندی حتی از شبکه های عصبی (
              <Link
                href="https://en.wikipedia.org/wiki/Neural_network_(machine_learning)"
                className="text-blue-500 hover:border-b px-1 py-0 font-bold "
              >
                Neural Network
              </Link>
              ) نیز برای انجام این عمل لیبل زنی استفاده کنید در اصل یک مدل مثل یک تخته سیاه هوشمند است که هر چه روی ان بنویسید برای شما تحلیل میکنید بر اساس دسته ای از قوانین که یک از ان ها طبقه بندی کنندگان می باشد 
            </p>

            <div className="flex flex-col bg-sky-100 hover:bg-sky-50 transition-all duration-300 ease-in-out gap-2 p-4 border-r-4 border-sky-500">
              <div className="text-right text-black">بیشتر بخوانید ...</div>
              <p className="text-right text-gray-500 leading-relaxed">
                موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
            <Image
              src="/assets/images/overview.jpg"
              alt="Description"
              width={800}
              height={500}
              className="shadow-lg"
            />
          </div>
        </div>
        <div className=" container max-w-3xl mx-auto" dir="rtl">
          <div className="px-4 py-16  flex flex-col  justify-center gap-8 ">
            <h3
              id="section2"
              className="text-6xl text-gray-800 text-right font-bold"
            >
              متن سربرگ وبلاگ 2
            </h3>
            <p className=" text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با{" "}
              <Link
                href="/"
                className="text-blue-500 hover:border-b px-1 py-0 font-bold "
              >
                هدف بهبود
              </Link>{" "}
              ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال
              و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
              افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
              خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
              امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت
              تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی،
              و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
              قرار گیرد.
            </p>
            <p className=" text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و
              <strong className="text-blue-500">
                فرهنگ پیشرو در زبان فارسی
              </strong>{" "}
              ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در
              ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
              شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
              موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <div className="flex flex-col bg-sky-100 hover:bg-sky-50 transition-all duration-300 ease-in-out gap-2 p-4 border-r-4 border-sky-500">
              <h3 className="text-right text-black">بیشتر بخوانید ...</h3>
              <p className="text-right text-gray-500 leading-relaxed">
                موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
            <Image
              src="/assets/images/ai.jpg"
              alt="Description"
              width={800}
              height={500}
              className="shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
