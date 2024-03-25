import React from "react";
import "../app/globals.css";
export default function QuestionsPage() {
  return (
    <main className="wrapper flex justify-center items-center h-screen">
      <div className="bg-white p-3 rounded-md md:w-[90%] w-full h-full md:h-[90%] lg:h-[90%] shadow-lg max-w-4xl">
        <h1 className="text-center p-2 text-blue-600 text-5xl tracking-wider font-bold">
          Quizy
        </h1>
        <div className="w-full h-[2px] bg-border bg-slate-200 mt-1"></div>
        Questions
      </div>
    </main>
  );
}
