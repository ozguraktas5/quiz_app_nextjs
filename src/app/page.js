import Image from "next/image";

export default function Home() {
  return (
    <main className="wrapper flex justify-center items-center h-screen">
      <div className="bg-white p-3 rounded-md md:w-[90%] lg:w-[70%] w-full h-full md:h-[70%] lg:h-[70%] shadow-lg max-w-4xl">
        <h1 className="text-center p-2 text-blue-600 text-3xl tracking-wider font-bold">Welcome to QuizQuest</h1>
        <div className="w-full h-[2px] bg-border bg-slate-200"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-9 gap-3">
          <div className="h-full relative">
            <Image src="/quiz.png" width="350" height="350" className="object-cover object-center vertical-middle" />
          </div>
          <div></div>
        </div>
      </div>
    </main>
    
  );
}
