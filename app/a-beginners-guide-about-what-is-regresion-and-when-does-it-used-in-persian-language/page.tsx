"use client";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const tableOfContents = [
    {
      id: "section1",
      title: "تحلیل رگرسیون ها یا Regression Analysis چیست",
    },
    { id: "section2", title: " مدل چیست ؟ تفاوت مدل و طبقه بندی کننده متن" },
    { id: "section3", title: "نمونه تمرینی یا traning sample" },
    { id: "section4", title: "تابع هدف یا target function" },
    { id: "section5", title: " Hypothesis یا فرضیه در یادگیری ماشین " },
    { id: "section6", title: " learning algorithm یا الگوریتم یادگیری" },
    { id: "section7", title: "مشخص کردن هدف " },
    { id: "section8", title: "انتخاب الگوریتم مناسب" },
    { id: "section9", title: "رگرسیون لجستیک (Logistic Regression)" },
    { id: "section10", title: "نایو بیز (Naïve Bayes)" },
    {
      id: "section11",
      title: " گرادیان نزولی تصادفی (Stochastic Gradient Descent)",
    },
    {
      id: "section12",
      title: " الگوریتم K-نزدیک‌ترین همسایه (K-Nearest Neighbors)",
    },
    {
      id: "section13",
      title: "درخت تصمیم (Decision Tree)",
    },
    {
      id: "section14",
      title: "جنگل تصادفی (Random Forest)",
    },
    {
      id: "section15",
      title: "ماشین بردار پشتیبان (Support Vector Machine)",
    },
    {
      id: "section16",
      title:
        " ارزیابی عملکرد مدل طبقه‌بندی متن (Evaluation of Text Classification Models)",
    },
    {
      id: "section17",
      title: "جمع بندی و خلاصه مطالب",
    },
    {
      id: "section18",
      title: "مقاله های مرتبط و منابع",
    },
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
              <h1 className="text-2xl font-bold border-b-2 py-2 border-sky-100 text-sky-900 mb-4">
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
                <Link
                  href="https://www.linkedin.com/in/mohamad-hosein-mohamad-khani-a52373189

"
                  className="text-sky-600 hover:underline"
                >
                  محمدحسین محمدخانی
                </Link>
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
          className="sticky  mb-12 sm:overflow-y-auto sm:h-100vh  lg:top-[8rem] lg:left-4 z-50 bg-white/10 backdrop-blur-xs p-4 rounded-lg shadow-lg border border-sky-100 w-full lg:w-48 lg:overflow-y-auto   lg:max-h-[calc(100vh-12rem)]"
          dir="rtl"
        >
          <h4 className="text-lg font-bold text-sky-900 mb-4 border-b pb-2">
            فهرست مطالب
          </h4>
          <ul className="space-y-1">
            {tableOfContents.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-sky-600 text-xs hover:text-sky-900 transition-colors duration-300 border-b border-gray-200 text-right w-full hover:bg-gray-100 p-3 rounded-lg"
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
              className="text-xl text-gray-800 text-right font-bold"
            >
              طبقه بندی کننده متن یا (text classifier) چیست ؟
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
              id="section2"
              className="text-xl text-gray-800 text-right font-bold"
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
              ) نیز برای انجام این عمل لیبل زنی استفاده کنید در اصل یک مدل مثل
              یک تخته سیاه هوشمند است که هر چه روی ان بنویسید برای شما تحلیل
              میکنید بر اساس دسته ای از قوانین که یک از ان ها طبقه بندی کنندگان
              می باشد
            </p>

            <Image
              src="/assets/images/overview.jpg"
              alt="Description"
              width={800}
              height={500}
              className="shadow-lg"
            />
          </div>
        </div>
        {/* نمونه تمرینی چیست */}
        <div className=" container max-w-3xl mx-auto" dir="rtl">
          <div className="px-4 py-16  flex flex-col  justify-center gap-8 ">
            <h3
              id="section3"
              className="text-xl text-gray-800 text-right font-bold"
            >
              نمونه تمرینی یا traning sample
            </h3>
            <p className=" text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              نمونه آموزشی در یادگیری ماشین به یک واحد داده اشاره دارد که برای
              آموزش مدل استفاده می‌شود. این نمونه می‌تواند شامل ورودی (x) و
              خروجی (y) باشد، مانند ویژگی‌های یک خانه و قیمت آن در یادگیری
              نظارت‌شده(
              <Link
                href="https://www.oracle.com/nl/artificial-intelligence/machine-learning/supervised-learning/#:~:text=Supervised%20learning%20is%20a%20form,relationships%20between%20inputs%20and%20outputs."
                className="text-blue-500 hover:border-b px-1 py-0 font-bold "
              >
                supervisied learning
              </Link>
              )در مسائل بدون نظارت (
              <Link
                href="https://cloud.google.com/discover/what-is-unsupervised-learning"
                className="text-blue-500 hover:border-b px-1 py-0 font-bold "
              >
                unsupervisied learning
              </Link>
              )نمونه آموزشی معمولاً شامل داده‌های بدون برچسب است که مدل از آن‌ها
              برای کشف الگوها یا ساختارها استفاده می‌کند. هر نمونه آموزشی ممکن
              است به شکل یک نقطه داده چندبعدی، دنباله‌ای از داده‌های زمانی، یا
              حتی داده‌ای مصنوعی و افزوده‌شده باشد. علاوه بر این، در یادگیری
              تقویتی (
              <Link
                href="https://en.wikipedia.org/wiki/Reinforcement_learning"
                className="text-blue-500 hover:border-b px-1 py-0 font-bold "
              >
                reinforcement learning
              </Link>
              )نمونه‌ها به صورت حالت، عمل، پاداش، تعریف می‌شوند. این نمونه‌ها،
              واحدهای اساسی یادگیری مدل هستند و نقش کلیدی در عملکرد و
              تعمیم‌پذیری آن دارند.{" "}
            </p>
          </div>
        </div>
        {/* تابع هدف چیست */}
        <div className=" container max-w-3xl mx-auto" dir="rtl">
          <div className="px-4 py-16  flex flex-col  justify-center gap-8 ">
            <h3
              id="section4"
              className="text-xl text-gray-800 text-right font-bold"
            >
              target function یا تابع هدف
            </h3>
            <p className=" text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              این تابع، ایده‌آل یا تابع حقیقی است که توصیف‌کننده دقیق رابطه بین
              داده‌هاست، اگرچه معمولاً ناشناخته است. مدل یادگیری ماشین تلاش
              می‌کند تا تابع هدف را از طریق داده‌های آموزشی تقریب بزند. در
              یادگیری نظارت‌شده، این تابع به صورت f(x) = yتعریف می‌شود، اما در
              دیگر روش‌ها مانند یادگیری تقویتی یا بدون نظارت، ممکن است به صورت
              ضمنی یا بر اساس اهداف دیگر تعریف شود. تفاوت بین خروجی نهایی مدل و
              خروجی تابع هدف معیار سنجش مدل میباشد
            </p>
          </div>
        </div>
        {/* Hypothesis یا فرضیه در یادگیری ماشین */}
        <div className=" container max-w-3xl mx-auto" dir="rtl">
          <div className="px-4 py-16  flex flex-col  justify-center gap-8 ">
            <h3
              id="section5"
              className="text-xl text-gray-800 text-right font-bold"
            >
              Hypothesis یا فرضیه در یادگیری ماشین
            </h3>
            <p className=" text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              فرضیه در یادگیری ماشین تابعی پیشنهادی است که مدل بر اساس داده‌های
              آموزشی یاد می‌گیرد و به عنوان تقریب تابع هدف ( 𝑓 ( 𝑥 )) عمل
              می‌کند. این تابع مجموعه‌ای از قواعد یا مرزهای تصمیم‌گیری است که
              مدل برای پیش‌بینی‌ها از آن استفاده می‌کند. برای مثال، در طبقه‌بندی
              ایمیل‌های اسپم، فرضیه همان قاعده‌ای است که پیش‌بینی می‌کند یک
              ایمیل اسپم است یا خیر عملکرد فرضیه با معیارهایی مانند دقت یا خطا
              سنجیده می‌شود و طی فرآیندهای بهینه‌سازی اصلاح می‌گردد تا به تابع
              هدف نزدیک‌تر شود.
            </p>
            {/* الگوریتم */}
            <h3
              id="section6"
              className="text-xl text-gray-800 text-right font-bold"
            >
              learning algorithm یا الگوریتم یادگیری
            </h3>
            <p className=" text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              الگوریتم یادگیری در یادگیری ماشین مجموعه‌ای از دستورالعمل‌ها است
              که با استفاده از داده‌های آموزشی تلاش می‌کند تا{" "}
              <Link href="#section5" className="text-indigo-600">
                تابع هدف
              </Link>{" "}
              (رابطه بین ورودی و خروجی) را پیدا کند یا تقریب بزند. این الگوریتم
              از دو بخش اصلی تشکیل شده است:{" "}
              <strong className="text-green-700">تابع خطا</strong>(
              <Link
                href="https://www.geeksforgeeks.org/ml-common-loss-functions/"
                className="text-blue-600"
              >
                Loss Function
              </Link>
              ) که مشخص می‌کند پیش‌بینی مدل تا چه حد با نتایج واقعی فاصله دارد.{" "}
              <strong className="text-green-700">روش بهینه‌سازی</strong> (
              <Link
                className="text-blue-600"
                href="https://www.geeksforgeeks.org/optimization-algorithms-in-machine-learning/"
              >
                Optimization Technique
              </Link>
              )که پارامترهای مدل را طوری تنظیم می‌کند که این فاصله (خطا) کمتر
              شود. هدف اصلی الگوریتم این است که مدلی بسازد که نه‌تنها داده‌های
              آموزشی را به‌خوبی یاد بگیرد، بلکه بتواند روی داده‌های جدید هم
              عملکرد خوبی داشته باشد.(
              <Link
                className="text-blue-600"
                href="https://www.geeksforgeeks.org/machine-learning-algorithms/"
              >
                Hypothesis Space
              </Link>
              )<strong className="text-green-700"> فضای فرضیه</strong> مجموعه‌ای
              از تمام مدل‌های ممکن است که الگوریتم می‌تواند برای یادگیری انتخاب
              کند. این فضا نشان می‌دهد که الگوریتم چه نوع روابطی را می‌تواند
              بررسی کند. اگر این فضا بزرگ‌تر باشد، مدل می‌تواند روابط پیچیده‌تری
              را یاد بگیرد، اما پیدا کردن بهترین مدل در این فضا برای اینکه
              بتواند روی داده‌های جدید خوب عمل کند، خیلی مهم است.
            </p>
          </div>

          <div className="flex flex-col bg-sky-100 hover:bg-sky-50 transition-all duration-300 ease-in-out gap-2 p-4 border-r-4 border-sky-500">
            <div className="text-right text-black">نکته</div>
            <p className="text-right text-gray-500 leading-relaxed">
              هرجا که یک فرضیه ای برای پیش بینی یا تخمین یک چیزی در حال اجرا
              باشه اون مدل شماست در یادگیری ماشینی که شم طراجی کردید
            </p>
          </div>
        </div>
        <div className=" container max-w-3xl mx-auto" dir="rtl">
          <div className="px-4 py-16  flex flex-col  justify-center gap-8 ">
            <h3
              id="section7"
              className="text-xl text-gray-800 text-right font-bold"
            >
              مشخص کردن اهداف
            </h3>
            <p className=" text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              در پروژه های طیقه بندی متن ها اولین قدم تعیین هدف ها نسبت به پروژه
              ی خودتون هستش برای مثال دسته بندی یک باشگاه مشتریان را در نظر
              بگیرید انواع پیام های ورودی مانند تصویر زیر خواهد بود{" "}
            </p>
            <Image
              src="/assets/images/textclasifierexample.png"
              alt="Description"
              width={800}
              height={500}
              className="shadow-lg"
            />
            <p className=" text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              در این برنامه ابتدا تمام ورودی ها را بین سه بخش اول دسته بندی و
              برچسب زنی میکنیم یعد از هر کدام از بخش ها یک طبقه کننده مخصوص خود
              برای متغیر های درون خود ایجاد میکنند که بتوانم هذ داده را در درست
              ترین طبقه بدست بیاوریم در این بخش باید مراقب افتادن داده ها روی هم
              (
              <Link href="" className="text-blue-600">
                overlapin
              </Link>
              ) باشید یعنی اگر طبقه های شما معنی های مشابهی داشته باشند مدل شما
              به اشتباه تصمیم گیری خواهد کرد برای مثال در تصویر بالا یک شکایت
              درمورد دیر ارسال کردن در دو بخش از طبقه بندی های ما جای میگیرد که
              این باعث اورلپینگ میشود
            </p>
            <h3
              id="section8"
              className="text-xl text-gray-800 text-right font-bold"
            >
              انتخاب الگوریتم مناسب
            </h3>

            <p className=" text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              <Link href="https://www.python.org/" className="text-blue-600">
                پایتون{" "}
              </Link>
              محبوب‌ترین زبان برای طبقه‌بندی متن با استفاده از یادگیری ماشین
              است. زبان پایتون به دلیل ساده بودن و کتابخانه‌هایمتعددی که برای
              ایجاد الگوریتم‌ها در دسترس دارد بسیار مورد استفاده قرار می‌گیرد.
              در ادامه، الگوریتم‌های استانداردی آورده شده‌اند که به شما کمک کنیم
              بهترین الگوریتم را برای پروژه طبقه‌بندی متن خود انتخاب کنید.
            </p>
          </div>
        </div>
        {/* رگرسیون لجستیک */}
        <div className="container max-w-3xl mx-auto" dir="rtl">
          <div className="px-4 py-16 flex flex-col justify-center gap-8">
            <h3
              id="section9"
              className="text-xl text-gray-800 text-right font-bold"
            >
              رگرسیون لجستیک (Logistic Regression)
            </h3>
            <Image
              src="/assets/images/linearModel.png"
              alt="Logistic regression"
              width={800}
              height={500}
              className="shadow-lg"
            />
            <p className="text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              رگرسیون لجستیک، علی‌رغم داشتن کلمه (
              <Link
                href="https://spss-iran.ir/what-regression/"
                className="text-blue-600"
              >
                رگرسیون
              </Link>
              ) در نام خود، یک روش یادگیری با نظارت (supervised)است که عمدتاً
              برای حل مسائل طبقه‌بندی دودویی (
              <Link
                href="https://en.wikipedia.org/wiki/Binary_classification"
                className="text-blue-600"
              >
                باینری
              </Link>
              ) استفاده می‌شود، مانند تشخیص ایمیل‌های اسپم از غیر اسپم یا
              پیش‌بینی نتیجه بله یا خیر. اگرچه رگرسیون و طبقه‌بندی به نظر
              می‌رسند مفاهیمی متضاد باشند، اما رگرسیون لجستیک در واقع یک روش
              طبقه‌بندی است. تمرکز اصلی این روش بر روی کلمه لجستیک است که به
              تابع لجستیک یا (
              <Link
                href="https://virgool.io/@alifallahi/%D8%AA%D8%A7%D8%A8%D8%B9-%D8%B3%DB%8C%DA%AF%D9%85%D9%88%DB%8C%DB%8C%D8%AF-sigmoid-function-%DA%86%DB%8C%D8%B3%D8%AA-yajru8hnavmq"
                className="text-blue-600"
              >
                سیگموئید
              </Link>
              ) اشاره دارد. این تابع ریاضی مقدار ورودی‌ها را به یک بازه بین ۰ و
              ۱ نشانمی دهد، که به مدل اجازه می‌دهد احتمال تعلق داده‌ها به یک
              کلاس خاص را پیش‌بینی کند. رگرسیون لجستیک به دلیل سادگی و کارایی
              بالا در مسائلی که رابطه بین ویژگی‌ها و خروجی به صورت خطی قابل
              توصیف است، بسیار پرکاربرد است. علاوه بر طبقه‌بندی دودویی، نسخه‌های
              توسعه‌یافته رگرسیون لجستیک، مانند رگرسیون لجستیک چندکلاسه (
              <Link
                href="https://resources.nu.edu/statsresources/Multinomiallogisticregression"
                className="text-blue-600"
              >
                Multinomial Logistic Regression
              </Link>
              )، برای مسائل طبقه‌بندی چندکلاسه نیز به کار می‌روند. این ویژگی‌ها
              باعث می‌شود که رگرسیون لجستیک یکی از ابزارهای پایه و قدرتمند در
              یادگیری ماشین و تحلیل داده باشد.
            </p>

            <div className="flex flex-col bg-sky-100 hover:bg-sky-50 transition-all duration-300 ease-in-out gap-2 p-4 border-r-4 border-sky-500">
              <div className="text-right text-black">کاربردهای عملی</div>
              <p className="text-right text-gray-500 leading-relaxed">
                از این الگوریتم در موارد متعددی استفاده می‌شود، از جمله: •
                پیش‌بینی ریزش مشتریان • تشخیص ایمیل‌های اسپم • پیش‌بینی کلیک بر
                روی تبلیغات و وب‌سایت‌ها • به عنوان تابع فعال‌سازی در لایه‌های
                شبکه عصبی
              </p>
            </div>
          </div>
        </div>
        {/* نایو بیز (Naïve Bayes) */}
        <div className="container max-w-3xl mx-auto" dir="rtl">
          <div className="px-4 py-16 flex flex-col justify-center gap-8">
            <h3
              id="section10"
              className="text-xl text-gray-800 text-right font-bold"
            >
              نایو بیز (Naïve Bayes)
            </h3>
            <p className="text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              طبقه‌بندی کننده نایو بیز بر اساس({" "}
              <Link
                href="https://blog.faradars.org/bayesian-theorem/"
                className="text-blue-600"
              >
                قضیه بیز
              </Link>
              ) ساخته شده است. این الگوریتم با یک فرض ساده‌انگارانه (Naïve) کار
              می‌کند: وجود یک ویژگی در یک دسته، مستقل از وجود سایر ویژگی‌هاست.
              این طبقه‌بندی‌کننده از نوع احتمالاتی است، یعنی برای هر متن ورودی،
              احتمال تعلق به هر دسته را محاسبه کرده و دسته‌ای با بالاترین احتمال
              را انتخاب می‌کند.
            </p>

            <div className="flex flex-col bg-sky-100 hover:bg-sky-50 transition-all duration-300 ease-in-out gap-2 p-4 border-r-4 border-sky-500">
              <div className="text-right text-black">مثال کاربردی</div>
              <p className="text-right text-gray-500 leading-relaxed">
                فرض کنید می‌خواهیم طبقه‌بندی‌کننده‌ای بسازیم که تشخیص دهد آیا یک
                متن درباره ورزش است یا خیر. برای جمله یک بازی بسیار نزدیک
                می‌خواهیم احتمال اینکه این جمله درباره ورزش باشد و احتمال اینکه
                درباره موضوع دیگری باشد را محاسبه کنیم. به زبان ریاضی، این را به
                صورت P(ورزش | یک بازی بسیار نزدیک) نمایش می‌دهیم.
              </p>
              <p className="text-right text-gray-500 leading-relaxed">
                در الگوریتم نایو بیز، از قضیه بیز استفاده می‌کنیم تا این احتمال
                را محاسبه کنیم. به صورت زیر عمل می‌کنیم:
                <br />
                <span dir="ltr">
                  P(ورزش | جمله) = [P(جمله | ورزش) * P(ورزش)] / P(جمله)
                </span>
              </p>
              <p className="text-right text-gray-500 leading-relaxed">
                در اینجا:
                <br />
                <span dir="ltr">P(ورزش)</span> احتمال پیشینی است که یک متن به
                طور کلی درباره ورزش باشد (مثلاً ۳۰٪ از متن‌ها در مجموعه داده ما
                درباره ورزش هستند).
                <br />
                <span dir="ltr">P(جمله | ورزش)</span> احتمال اینکه جمله یک بازی
                بسیار نزدیک در دسته ورزش ظاهر شود (با استفاده از داده‌های آموزشی
                محاسبه می‌شود).
                <br />
                <span dir="ltr">P(جمله)</span> احتمال اینکه جمله یک بازی بسیار
                نزدیک به طور کلی ظاهر شود، که می‌تواند به عنوان مجموع احتمال‌های
                هر دسته محاسبه شود.
              </p>
              <p className="text-right text-gray-500 leading-relaxed">
                فرض کنید در داده‌های آموزشی، کلمات بازی و نزدیک به احتمال بیشتری
                در متن‌های ورزشی ظاهر شده‌اند. با فرض استقلال کلمات (فرض نایو
                بودن)، محاسبه <span dir="ltr">P(جمله | ورزش)</span> به صورت زیر
                انجام می‌شود:
                <br />
                <span dir="ltr">P(بازی | ورزش) * P(نزدیک | ورزش)</span>
              </p>
              <p className="text-right text-gray-500 leading-relaxed">
                با جایگذاری مقادیر و انجام محاسبات، می‌توانیم احتمال نهایی را به
                دست آورده و تصمیم بگیریم که جمله به کدام دسته تعلق دارد.
                الگوریتم نایو بیز به دلیل سرعت بالا و سادگی، به ویژه در
                طبقه‌بندی متن‌ها، بسیار محبوب است.
              </p>
            </div>

            <p className="text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              کلمه ساده‌انگارانه (Naïve) از این واقعیت می‌آید که تمام ویژگی‌های
              جمله به طور مستقل در تعیین موضوع ورزشی بودن یا نبودن آن نقش دارند.
              با وجود این ساده‌سازی، مدل نایو بیز به دلیل سادگی در ساخت و
              توانایی کار با مجموعه داده‌های بزرگ، بسیار محبوب است و در بسیاری
              موارد حتی از سیستم‌های طبقه‌بندی پیشرفته‌تر نیز عملکرد بهتری نشان
              می‌دهد.
            </p>
          </div>
        </div>
        {/* گرادیان نزولی تصادفی (Stochastic Gradient Descent) */}
        <div className="container max-w-3xl mx-auto" dir="rtl">
          <div className="px-4 py-16 flex flex-col justify-center gap-8">
            <h3
              id="section11"
              className="text-xl text-gray-800 text-right font-bold"
            >
              گرادیان نزولی تصادفی (Stochastic Gradient Descent)
            </h3>
            <p className="text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              گرادیان نزولی یک فرآیند تکرارشونده است که از یک نقطه تصادفی روی
              شیب تابع شروع می‌شود و تا رسیدن به پایین‌ترین نقطه حرکت می‌کند.
              این الگوریتم زمانی کاربرد پیدا می‌کند که نتوان نقاط بهینه را صرفاً
              با برابر صفر قرار دادن شیب تابع به دست آورد.
            </p>

            <div className="flex flex-col bg-sky-100 hover:bg-sky-50 transition-all duration-300 ease-in-out gap-2 p-4 border-r-4 border-sky-500">
              <div className="text-right text-black">چالش اصلی</div>
              <p className="text-right text-gray-500 leading-relaxed">
                تصور کنید مجموعه داده‌ای با میلیون‌ها نمونه دارید. در روش
                گرادیان نزولی سنتی، باید از تمام این نمونه‌ها برای تکمیل یک
                مرحله استفاده کنید و این کار را تا رسیدن به نقطه کمینه تکرار
                کنید. این فرآیند از نظر محاسباتی بسیار سنگین و زمان‌بر خواهد
                بود.
              </p>
            </div>

            <p className="text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              برای حل این مشکل، از گرادیان نزولی تصادفی (SGD) استفاده می‌شود. در
              این روش، هر تکرار با یک نمونه منفرد (اندازه دسته برابر با یک)
              انجام می‌شود. انتخاب نمونه‌ها به صورت تصادفی و درهم‌ریخته انجام
              می‌شود که این امر باعث می‌شود الگوریتم بتواند با سرعت بیشتری به
              نتیجه برسد و در عین حال منابع محاسباتی کمتری مصرف کند.
            </p>
            <div className="flex flex-col bg-emerald-50 hover:bg-emerald-100 transition-all duration-300 ease-in-out gap-2 p-4 border-r-4 border-emerald-500 mt-6">
              <div className="text-right text-black font-bold">
                مثال کاربردی در دنیای واقعی
              </div>
              <p className="text-right text-gray-700 leading-relaxed">
                فرض کنید می‌خواهید سیستمی برای پیش‌بینی قیمت خانه بر اساس
                ویژگی‌های آن طراحی کنید. شما یک میلیون رکورد از معاملات مسکن
                دارید. به جای اینکه در هر مرحله تمام یک میلیون داده را پردازش
                کنید، SGD به طور تصادفی یک معامله را انتخاب می‌کند، مدل را بر
                اساس آن به‌روزرسانی می‌کند و به سراغ معامله بعدی می‌رود. این
                روش: • سرعت یادگیری را افزایش می‌دهد • مصرف حافظه را کاهش می‌دهد
                • امکان یادگیری آنلاین (real-time) را فراهم می‌کند
              </p>
            </div>
          </div>
        </div>
        {/* الگوریتم K-نزدیک‌ترین همسایه (K-Nearest Neighbors) */}
        <div className="container max-w-3xl mx-auto" dir="rtl">
          <div className="px-4 py-16 flex flex-col justify-center gap-8">
            <h3
              id="section12"
              className="text-xl text-gray-800 text-right font-bold"
            >
              الگوریتم K-نزدیک‌ترین همسایه (K-Nearest Neighbors)
            </h3>

            <p className="text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              در این الگوریتم، همسایگی نمونه‌های داده بر اساس نزدیکی و مجاورت
              آنها تعیین می‌شود. روش‌های متعددی برای محاسبه فاصله بین نقاط داده
              وجود دارد که معروف‌ترین آنها فاصله مستقیم (
              <Link
                className="text-blue-600"
                href="https://fa.wikipedia.org/wiki/%D9%81%D8%A7%D8%B5%D9%84%D9%87_%D8%A7%D9%82%D9%84%DB%8C%D8%AF%D8%B3%DB%8C#:~:text=%D8%AF%D8%B1%20%D8%B1%DB%8C%D8%A7%D8%B6%DB%8C%D8%A7%D8%AA%D8%8C%20%D9%81%D8%A7%D8%B5%D9%84%D9%87%20%D8%A7%D9%82%D9%84%DB%8C%D8%AF%D8%B3%DB%8C%20%D9%81%D8%A7%D8%B5%D9%84%D9%87%D9%94,%D8%AA%D9%88%D8%B3%D8%B7%20%D9%82%D8%B6%DB%8C%D9%87%20%D9%81%DB%8C%D8%AB%D8%A7%D8%BA%D9%88%D8%B1%D8%B3%20%D8%A8%D8%AF%D8%B3%D8%AA%20%D9%85%DB%8C%E2%80%8C%D8%A2%DB%8C%D8%AF.&text=%D8%AF%D8%B1%20%D8%B1%DB%8C%D8%A7%D8%B6%DB%8C%D8%A7%D8%AA%D8%8C%20%D9%81%D8%A7%D8%B5%D9%84%D9%87%20%D8%A7%D9%82%D9%84%DB%8C%D8%AF%D8%B3%DB%8C%20%D8%A8%DB%8C%D9%86,%DA%AF%D8%A7%D9%87%DB%8C%20%D9%81%D8%A7%D8%B5%D9%84%D9%87%20%D9%81%DB%8C%D8%AB%D8%A7%D8%BA%D9%88%D8%B1%D8%B3%20%D9%86%D8%A7%D9%85%DB%8C%D8%AF%D9%87%20%D9%85%DB%8C%E2%80%8C%D8%B4%D9%88%D8%AF."
              >
                فاصله اقلیدسی
              </Link>
              ) است. همسایه‌ها معمولاً ویژگی‌ها و رفتارهای مشابهی دارند که باعث
              می‌شود در یک گروه طبقه‌بندی شوند.
            </p>

            <div className="flex flex-col bg-sky-100 hover:bg-sky-50 transition-all duration-300 ease-in-out gap-2 p-4 border-r-4 border-sky-500">
              <div className="text-right text-black">نحوه عملکرد</div>
              <p className="text-right text-gray-500 leading-relaxed">
                ایده اصلی این روش ساده است: برای هر داده جدید، K همسایه نزدیک آن
                را بررسی می‌کنیم و آن را به گروهی که بیشترین فراوانی را در بین
                این K همسایه دارد، نسبت می‌دهیم. برای مثال، اگر K=1 باشد، داده
                جدید به گروه نزدیک‌ترین همسایه‌اش تعلق می‌گیرد.
              </p>
            </div>

            <div className="flex flex-col bg-emerald-50 hover:bg-emerald-100 transition-all duration-300 ease-in-out gap-2 p-4 border-r-4 border-emerald-500 mt-6">
              <div className="text-right text-black font-bold">
                مثال کاربردی در طبقه‌بندی متن
              </div>
              <p className="text-right text-gray-700 leading-relaxed">
                فرض کنید می‌خواهیم یک مقاله خبری را دسته‌بندی کنیم. الگوریتم
                KNN: • کلمات کلیدی مقاله را استخراج می‌کند • فاصله این کلمات را
                با کلمات مقالات موجود در پایگاه داده محاسبه می‌کند • K مقاله با
                نزدیک‌ترین محتوا را پیدا می‌کند • دسته‌بندی که بیشترین تکرار را
                در این K مقاله دارد را انتخاب می‌کند
              </p>
            </div>

            <p className="text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              برخلاف روش‌های دیگر مانند طبقه‌بندی کننده بیز، KNN به احتمالات
              پیشین نیاز ندارد و از نظر محاسباتی کارآمد است. عملیات اصلی در این
              روش، مرتب‌سازی اسناد آموزشی برای یافتن K همسایه نزدیک به سند مورد
              آزمایش است.
            </p>
          </div>
        </div>
        {/* درخت تصمیم (Decision Tree) */}
        <div className="container max-w-3xl mx-auto" dir="rtl">
          <div className="px-4 py-16 flex flex-col justify-center gap-8">
            <h3
              id="section13"
              className="text-xl text-gray-800 text-right font-bold"
            >
              درخت تصمیم (Decision Tree)
            </h3>

            <p className="text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              یکی از چالش‌های اصلی در شبکه‌های عصبی و معماری‌های عمیق، درک
              فرآیند تصمیم‌گیری الگوریتم است. در یادگیری عمیق، ما می‌توانیم به
              دقت طبقه‌بندی فوق‌العاده‌ای دست پیدا کنیم، اما نمی‌دانیم دقیقاً چه
              عواملی در این تصمیم‌گیری نقش داشته‌اند. درخت تصمیم این مزیت را
              دارد که می‌تواند تصویری گرافیکی از نحوه تصمیم‌گیری طبقه‌بندی‌کننده
              را به ما نشان دهد.
            </p>

            <div className="flex flex-col bg-sky-100 hover:bg-sky-50 transition-all duration-300 ease-in-out gap-2 p-4 border-r-4 border-sky-500">
              <div className="text-right text-black">ویژگی‌های کلیدی</div>
              <p className="text-right text-gray-500 leading-relaxed">
                • قابل درک بودن برای کاربران نهایی • نیاز به آماده‌سازی حداقلی
                داده‌ها • امکان مشاهده مستقیم روند تصمیم‌گیری • حساسیت به
                تغییرات کوچک در داده‌ها
              </p>
            </div>
            <Image
              src="/assets/images/decision-tree-terminology.webp"
              alt="decision-tree-terminology.webp from https://spotintelligence.com/2024/05/22/decision-trees-in-ml/"
              width={800}
              height={500}
              className="shadow-lg"
            />

            <div className="flex flex-col bg-emerald-50 hover:bg-emerald-100 transition-all duration-300 ease-in-out gap-2 p-4 border-r-4 border-emerald-500 mt-6">
              <div className="text-right text-black font-bold">
                مثال کاربردی در طبقه‌بندی متن
              </div>
              <p className="text-right text-gray-700 leading-relaxed">
                در تحلیل نظرات مشتریان، درخت تصمیم می‌تواند این‌گونه عمل کند: •
                آیا کلمه عالی در متن وجود دارد؟ اگر بله -{">"} نظر مثبت • آیا
                کلمه بد وجود دارد؟ اگر بله -{">"} نظر منفی • آیا قیمت ذکر شده؟
                اگر بله -{">"} بررسی مقدار قیمت این ساختار درختی به راحتی قابل
                فهم و پیگیری است.
              </p>
            </div>
          </div>
        </div>
        {/* جنگل تصادفی (Random Forest) */}
        <div className="container max-w-3xl mx-auto" dir="rtl">
          <div className="px-4 py-16 flex flex-col justify-center gap-8">
            <h3
              id="section14"
              className="text-xl text-gray-800 text-right font-bold"
            >
              جنگل تصادفی (Random Forest)
            </h3>

            <p className="text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              جنگل تصادفی یک تکنیک یادگیری ماشین است که از روش یادگیری گروهی (
              <Link
                className="text-blue-500 hover:text-blue-700"
                href="https://www.ibm.com/think/topics/ensemble-learning#:~:text=Ensemble%20learning%20is%20a%20machine,than%20a%20single%20model%20alone."
              >
                Ensemble Learning
              </Link>
              ) استفاده می‌کند. این الگوریتم با ترکیب چندین درخت تصمیم‌گیری
              مختلف، که هر کدام به صورت مستقل آموزش دیده‌اند، به حل مسائل پیچیده
              می‌پردازد. هر درخت در این جنگل، با استفاده از نمونه‌گیری تصادفی از
              داده‌ها و ویژگی‌های متفاوت ساخته می‌شود.
            </p>

            <div className="flex flex-col bg-sky-100 hover:bg-sky-50 transition-all duration-300 ease-in-out gap-2 p-4 border-r-4 border-sky-500">
              <div className="text-right text-black">مزایای کلیدی</div>
              <p className="text-right text-gray-500 leading-relaxed">
                • مقاومت در برابر Over-fitting • توانایی کار با داده‌های پرت
                (Outliers) • دقت بالا در پیش‌بینی • قابلیت تشخیص اهمیت ویژگی‌ها
                • عملکرد مناسب با داده‌های با ابعاد بالا
              </p>
            </div>

            <p className="text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              در طبقه‌بندی متن، هر درخت در جنگل تصادفی با زیرمجموعه‌ای از کلمات
              و عبارات کار می‌کند. برای مثال، یک درخت ممکن است روی کلمات ابتدای
              متن تمرکز کند، درخت دیگر روی کلمات کلیدی خاص، و درخت سوم روی
              ساختار جملات. تصمیم نهایی با رأی‌گیری بین تمام درخت‌ها گرفته
              می‌شود.
            </p>

            <div className="flex flex-col bg-emerald-50 hover:bg-emerald-100 transition-all duration-300 ease-in-out gap-2 p-4 border-r-4 border-emerald-500 mt-6">
              <div className="text-right text-black font-bold">
                مثال عملی در تحلیل متن
              </div>
              <p className="text-right text-gray-700 leading-relaxed">
                فرض کنید می‌خواهیم اخبار را دسته‌بندی کنیم: • درخت اول: بررسی
                کلمات کلیدی سیاسی • درخت دوم: تحلیل لحن متن • درخت سوم: بررسی
                نام‌های خاص و مکان‌ها • درخت چهارم: تحلیل طول جملات و ساختار متن
                هر درخت رأی خود را می‌دهد و تصمیم نهایی بر اساس بیشترین رأی
                گرفته می‌شود. با افزایش تعداد درخت‌ها، دقت پیش‌بینی افزایش
                می‌یابد.
              </p>
            </div>

            <div className="flex flex-col bg-yellow-50 hover:bg-yellow-100 transition-all duration-300 ease-in-out gap-2 p-4 border-r-4 border-yellow-500 mt-6">
              <div className="text-right text-black font-bold">نکته مهم</div>
              <p className="text-right text-gray-700 leading-relaxed">
                برخلاف یک درخت تصمیم تنها، جنگل تصادفی به دلیل استفاده از چندین
                درخت و میانگین‌گیری از نتایج آنها، در برابر نویز و تغییرات کوچک
                در داده‌ها مقاوم‌تر است. این ویژگی باعث می‌شود که برای کاربردهای
                دنیای واقعی، مانند تحلیل نظرات مشتریان یا دسته‌بندی اسناد، گزینه
                بسیار مناسبی باشد.
              </p>
            </div>
          </div>
        </div>
        {/* ماشین بردار پشتیبان (Support Vector Machine) */}
        <div className="container max-w-3xl mx-auto" dir="rtl">
          <div className="px-4 py-16 flex flex-col justify-center gap-8">
            <h3
              id="section15"
              className="text-xl text-gray-800 text-right font-bold"
            >
              ماشین بردار پشتیبان (Support Vector Machine)
            </h3>

            <p className="text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              ماشین بردار پشتیبان یک مدل یادگیری با نظارت است که برای مسائل
              طبقه‌بندی دوگانه طراحی شده است. این الگوریتم با ایجاد یک ابَرصفحه
              (Hyperplane) بهینه، داده‌ها را به دو دسته تقسیم می‌کند. در فضای
              طبقه‌بندی متن، SVM می‌تواند کلمات و عبارات را در یک فضای چندبعدی
              نگاشت کرده و بهترین مرز تصمیم‌گیری را بین دسته‌های مختلف پیدا کند.
            </p>

            <div className="flex flex-col bg-sky-100 hover:bg-sky-50 transition-all duration-300 ease-in-out gap-2 p-4 border-r-4 border-sky-500">
              <div className="text-right text-black">ویژگی‌های کلیدی</div>
              <p className="text-right text-gray-500 leading-relaxed">
                • عملکرد عالی در فضاهای با ابعاد بالا • حافظه کارآمد •
                انعطاف‌پذیری با توابع کرنل مختلف • دقت بالا در طبقه‌بندی متون •
                مقاومت در برابر Over-fitting
              </p>
            </div>

            <div className="flex flex-col bg-emerald-50 hover:bg-emerald-100 transition-all duration-300 ease-in-out gap-2 p-4 border-r-4 border-emerald-500 mt-6">
              <div className="text-right text-black font-bold">
                مثال کاربردی در تحلیل متن
              </div>
              <p className="text-right text-gray-700 leading-relaxed">
                در تشخیص ایمیل‌های اسپم: • هر ایمیل به برداری از کلمات تبدیل
                می‌شود • SVM یک مرز تصمیم‌گیری بین ایمیل‌های اسپم و عادی ایجاد
                می‌کند • کلمات کلیدی نزدیک به مرز تصمیم‌گیری به عنوان بردارهای
                پشتیبان شناخته می‌شوند • ایمیل‌های جدید بر اساس موقعیتشان نسبت
                به این مرز طبقه‌بندی می‌شوند
              </p>
            </div>

            <p className="text-lg text-justify text-gray-700 leading-relaxed lg:py-4 lg:px-0 px-4">
              در طبقه‌بندی متن، SVM به‌ویژه در مواردی که تعداد ویژگی‌ها (کلمات)
              زیاد و تعداد نمونه‌ها کم است، عملکرد بسیار خوبی از خود نشان
              می‌دهد. این الگوریتم با استفاده از توابع کرنل می‌تواند روابط
              غیرخطی بین کلمات را نیز در نظر بگیرد.
            </p>
          </div>
        </div>
        {/* ارزیابی عملکرد مدل طبقه‌بندی متن */}
        <div className="container max-w-3xl mx-auto" dir="rtl">
          <div className="px-4 py-16 flex flex-col justify-center gap-8">
            <h2 className="text-2xl text-indigo-900 text-right font-bold border-b-2 border-indigo-200 pb-4">
              ارزیابی عملکرد مدل طبقه‌بندی متن
            </h2>

            <p className="text-lg text-justify text-gray-700 leading-relaxed">
              پس از ساخت مدل، مهم‌ترین سؤال این است: مدل ما چقدر خوب کار می‌کند؟
              ارزیابی دقیق مدل، تعیین‌کننده میزان دقت پیش‌بینی‌های ماست.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
                <h3 className="text-lg font-bold text-blue-900 mb-4">
                  حالت‌های پیش‌بینی
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• مثبت درست (True Positive)</li>
                  <li>• منفی درست (True Negative)</li>
                  <li>• مثبت نادرست (False Positive)</li>
                  <li>• منفی نادرست (False Negative)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
                <h3 className="text-lg font-bold text-green-900 mb-4">
                  معیارهای اصلی ارزیابی
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• دقت کلی (Accuracy)</li>
                  <li>• صحت (Precision)</li>
                  <li>• فراخوانی (Recall)</li>
                  <li>• معیار F1 (F1 Score)</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8 mt-6">
              <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-lg">
                <h4 className="text-lg font-bold text-purple-900 mb-3">
                  دقت کلی (Accuracy)
                </h4>
                <p className="text-gray-700">
                  نسبت پیش‌بینی‌های درست به کل پیش‌بینی‌ها. این معیار زمانی مفید
                  است که داده‌ها متوازن باشند.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg">
                <h4 className="text-lg font-bold text-blue-900 mb-3">
                  صحت (Precision)
                </h4>
                <p className="text-gray-700">
                  نسبت پیش‌بینی‌های مثبت درست به کل پیش‌بینی‌های مثبت. این معیار
                  نشان می‌دهد چه تعداد از موارد مثبت پیش‌بینی شده واقعاً درست
                  بوده‌اند.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-lg">
                <h4 className="text-lg font-bold text-green-900 mb-3">
                  فراخوانی (Recall)
                </h4>
                <p className="text-gray-700">
                  نسبت پیش‌بینی‌های مثبت درست به کل موارد مثبت واقعی. این معیار
                  نشان می‌دهد چه نسبتی از موارد مثبت واقعی را توانسته‌ایم
                  شناسایی کنیم.
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-white p-6 rounded-lg">
                <h4 className="text-lg font-bold text-indigo-900 mb-3">
                  معیار F1
                </h4>
                <p className="text-gray-700">
                  میانگین هارمونیک صحت و فراخوانی. فرمول:
                  <span className="bg-white p-3 mt-2 rounded text-center font-mono">
                    F1 = 2 × (Precision × Recall) / (Precision + Recall)
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg mt-6 border-r-4 border-yellow-500">
              <h4 className="text-lg font-bold text-yellow-900 mb-3">
                نکته مهم
              </h4>
              <p className="text-gray-700">
                انتخاب معیار مناسب برای ارزیابی به هدف پروژه و هزینه‌های خطاهای
                مثبت و منفی نادرست بستگی دارد. در مواردی که داده‌ها نامتوازن
                هستند، معیار F1 معمولاً انتخاب بهتری نسبت به دقت کلی است.
              </p>
            </div>
          </div>
        </div>
        {/* جمع بندی و نتیجه گیری */}
        <div className="container max-w-3xl mx-auto" dir="rtl">
          <div className="px-4 py-16 flex flex-col justify-center gap-8">
            <h2 className="text-2xl text-indigo-900 text-right font-bold border-b-2 border-indigo-200 pb-4">
              جمع‌بندی و نتیجه‌گیری
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg">
              <h3
                id="section17"
                className="text-xl font-bold text-blue-900 mb-4"
              >
                مروری بر مفاهیم کلیدی
              </h3>
              <p className="text-gray-700 leading-relaxed">
                در این مقاله، با مفاهیم اساسی طبقه‌بندی متن آشنا شدیم. از تعریف
                اولیه طبقه‌بندی‌کننده متن تا الگوریتم‌های پیشرفته و روش‌های
                ارزیابی را بررسی کردیم. دیدیم که چگونه هر الگوریتم با رویکرد
                منحصر به فرد خود به حل مسئله طبقه‌بندی می‌پردازد.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
                <h4 className="text-lg font-bold text-green-900 mb-4">
                  الگوریتم‌های اصلی
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• رگرسیون لجستیک برای طبقه‌بندی دودویی</li>
                  <li>• نایو بیز برای تحلیل احتمالاتی</li>
                  <li>• درخت تصمیم برای قوانین شفاف</li>
                  <li>• جنگل تصادفی برای دقت بالاتر</li>
                  <li>• SVM برای داده‌های با ابعاد بالا</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500">
                <h4 className="text-lg font-bold text-purple-900 mb-4">
                  معیارهای ارزیابی
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• دقت برای داده‌های متوازن</li>
                  <li>• صحت برای کیفیت پیش‌بینی‌های مثبت</li>
                  <li>• فراخوانی برای پوشش موارد مثبت</li>
                  <li>• معیار F1 برای تعادل بین صحت و فراخوانی</li>
                </ul>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg mt-6 border-r-4 border-emerald-500">
              <h4 className="text-lg font-bold text-emerald-900 mb-3">
                توصیه‌های کاربردی
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• انتخاب الگوریتم مناسب بر اساس نوع داده و هدف پروژه</li>
                <li>• اهمیت پیش‌پردازش و آماده‌سازی داده‌ها</li>
                <li>• استفاده از معیارهای ارزیابی متناسب با مسئله</li>
                <li>• توجه به مصالحه بین سرعت، دقت و قابلیت تفسیر</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-bold text-indigo-900 mb-3">
                نگاه به آینده
              </h4>
              <p className="text-gray-700 leading-relaxed">
                با گسترش روزافزون داده‌های متنی در دنیای دیجیتال، اهمیت
                طبقه‌بندی متن همچنان رو به افزایش است. ترکیب این تکنیک‌ها با
                یادگیری عمیق و پردازش زبان طبیعی، افق‌های جدیدی را در تحلیل و
                درک متون باز می‌کند.
              </p>
            </div>
          </div>
        </div>
        {/* منابع */}
        <div className="container max-w-3xl mx-auto" dir="rtl">
          <div className="px-4 py-16 flex flex-col justify-center gap-8">
            <h2
              id="section18"
              className="text-2xl text-indigo-900 text-right font-bold border-b-2 border-indigo-200 pb-4"
            >
              منابع و مراجع
            </h2>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                منابع اصلی
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <Link
                    href="https://scikit-learn.org/stable/supervised_learning.html"
                    className="hover:text-blue-600"
                  >
                    Scikit-learn Documentation - Text Classification
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <Link
                    href="https://www.deeplearning.ai/"
                    className="hover:text-blue-600"
                  >
                    DeepLearning.AI - Natural Language Processing Specialization
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <Link
                    href="https://www.tensorflow.org/text"
                    className="hover:text-blue-600"
                  >
                    TensorFlow Text - Official Documentation
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <Link
                    href="https://web.stanford.edu/~jurafsky/slp3/"
                    className="hover:text-blue-600"
                  >
                    Speech and Language Processing - Stanford NLP Group
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <Link
                    href="https://www.nltk.org/"
                    className="hover:text-blue-600"
                  >
                    Natural Language Toolkit (NLTK) Documentation
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <Link
                    href="https://levity.ai/blog/text-classifiers-in-machine-learning-a-practical-guide"
                    className="hover:text-blue-600"
                  >
                    Levity AI Blog - Text Classifiers in Machine Learning
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <Link
                    href="https://www.ibm.com/think/topics/machine-learning-algorithms"
                    className="hover:text-blue-600"
                  >
                    IBM - Machine Learning Algorithms
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <Link
                    href="https://docs.aws.amazon.com/machine-learning/latest/dg/learning-algorithm.html"
                    className="hover:text-blue-600"
                  >
                    AWS Documentation - Learning Algorithms
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <Link
                    href="https://www.javatpoint.com/hypothesis-in-machine-learning"
                    className="hover:text-blue-600"
                  >
                    Javatpoint - Hypothesis in Machine Learning
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                یادداشت پایانی
              </h4>
              <p className="text-gray-700 leading-relaxed">
                تمامی مطالب این مقاله با استفاده از منابع معتبر علمی و آکادمیک
                گردآوری و تألیف شده است. مفاهیم و مثال‌های ارائه شده بر اساس
                آخرین پژوهش‌ها و بهترین شیوه‌های موجود در حوزه طبقه‌بندی متن
                می‌باشد.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
