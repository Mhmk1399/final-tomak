import React from 'react'

const Options = () => {
  return (
    <div>
       <div>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 '>
                مواردی که توی تمام خدمات تومک تجربه خواهید کرد
        </h2>
      <div className="container mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between">
        <div className="grid gap-4 justify-items-center text-center md:flex-1">
          <div className=" rounded-full border-8 border-blue-500 p-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#3B82F6"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFFFFF"
              className="w-14 h-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              ></path>
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-blue-600">امنیت بالا</h3>
          <p className="text-blue-800">دنیای امروز دنیای اطلاعات پس مهمتر از هرچیزی حفاظت از این اطلاعات که شما میتونید با خیال راخت از امنیت این اطلاعات ایده های خودتون عملی کنید </p>
        </div>
        <div className="grid gap-4 justify-items-center text-center md:flex-1">
          <div className=" rounded-full border-8 border-amber-400 p-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#F59E0B"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFFFFF"
              className="w-14 h-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              ></path>
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-amber-500">مقرون به صرفه</h3>
          <p className="text-amber-700">با توجه به مهندسی های استفاده شده در تمام اپلیکشن های ساخته شده توسط تومک شما با پرداخت یک هزینه اولیه خداقل به مدت 5 سال نیاز به هیچگونه اپدیت ی ندارید</p>
        </div>
        <div className="grid gap-4 justify-items-center text-center md:flex-1">
          <div className=" rounded-full border-8 border-green-500 p-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#22C55E"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFFFFF"
              className="w-14 h-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              ></path>
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-green-600">گارانتی کیفیت</h3>
          <p className="text-green-800">تمامی خدمات مجموعه تومک گارانتی پشتیبانی دو ساله رایگان دارن چرا که مطنیم که هیچ مشکلی در هنگتم لانچ اپلیکشن هاتون نخواهید داشت </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Options
