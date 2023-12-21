"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [keys, setKeys] = useState([
    {
      id: 1,
      title: "DEL",
    },
    {
      id: 2,
      title: "LOG",
    },
    {
      id: 3,
      title: "=",
    },
    {
      id: 4,
      title: "÷",
    },
    {
      id: 5,
      title: "1",
    },
    {
      id: 6,
      title: "2",
    },
    {
      id: 7,
      title: "3",
    },
    {
      id: 8,
      title: "×",
    },
    {
      id: 9,
      title: "4",
    },
    {
      id: 10,
      title: "5",
    },
    {
      id: 11,
      title: "6",
    },
    {
      id: 12,
      title: "+",
    },
    {
      id: 13,
      title: "7",
    },
    {
      id: 14,
      title: "8",
    },
    {
      id: 15,
      title: "9",
    },
    {
      id: 16,
      title: "-",
    },
    {
      id: 17,
      title: "RESULT",
    },
    {
      id: 18,
      title: "0",
    },
    {
      id: 19,
      title: ".",
    },
  ]);
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="h-5/6 w-80 bg-yellowish rounded-xl border-4 border-black shadow-[20px_20px_0px_0px_#000000]">
        <div className="text-right px-5 py-7">
          <p className="text-4xl font-bold">600</p>
          <p className="text-sm pt-3">400 + 200</p>
        </div>
        <div className="bg-seaGreen h-auto rounded-xl pt-5 pl-4 pb-6">
          {keys.map((item) => {
            return (
              <button
                key={item.id}
                className="mr-4 mt-4 h-14 w-14 bg-yellowish border-2 rounded-md border-black text-xs font-bold shadow-[2px_2px_0px_0px_#000000]"
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}
