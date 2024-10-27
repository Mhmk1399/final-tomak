"use client";
import dynamic from 'next/dynamic';
import Head from 'next/head';

const ThreeScene = dynamic(() => import('@/components/ThreeScene'), { ssr: false });
const TypingEffect = dynamic(() => import('@/components/(sercices)/typingHeroSection'), { ssr: false });
const MusicPlayer = dynamic(() => import('@/components/musicPlayer'), { ssr: false });
const BaseScene = dynamic(() => import('@/components/BaseScene'), { ssr: false });

const Page = () => (
  <>
    <Head>
      <title>تومک | بهترین سرویس های حرفه ای برای کسب و کارهای آنلاین</title>
      <meta
        name="description"
        content="در تومک، ما به شما کمک می‌کنیم تا در دنیای دیجیتال بدرخشید! با ارائه خدمات جامع شامل طراحی وب، سئو، تولید محتوا، گرافیک و آنالیز داده، تیم ما آماده است تا با راهکارهای نوآورانه و تخصصی، نیازهای کسب‌وکار شما را برآورده کند."
      />
    </Head>
    <div dir="rtl">
      <ThreeScene />
      <div className="relative z-1 text-dark mt-8 px-8 justify-center"></div>
      <h1 className="mx-auto text-base font-thin text-center text-white mt-32 lg:text-base">
        <TypingEffect
          pause={1500}
          speed={50}
          words={["تا فروش دیجیتال فقط یک کلیک بر روی تاس زیر فاصله دارید !"]}
        />
      </h1>
      <div
        className="flex justify-center z-1 items-center my-44"
        style={{ height: "50px", width: "100%" }}
      >
        <BaseScene modelPath={"/assets/models/scene33.gltf"} redirectUrl={"/servicess"} />
      </div>
      <MusicPlayer />
    </div>
  </>
);

export default Page;
