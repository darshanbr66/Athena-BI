import { useEffect, useState } from "react";

const messages = [

  "Understanding your question...",

  "Generating MongoDB aggregation pipeline...",

  "Validating aggregation pipeline...",

  "Connecting to MongoDB Atlas...",

  "Executing aggregation query...",

  "Preparing visualization...",

  "Building business insights..."

];

const ThinkingMessages = () => {

  const [index, setIndex] =
    useState(0);

  useEffect(() => {

    const timer =
      setInterval(() => {

        setIndex((prev) =>
          (prev + 1) % messages.length
        );

      }, 1800);

    return () =>
      clearInterval(timer);

  }, []);

  return (

    <div className="mt-3">

      <div className="text-xs uppercase tracking-widest text-cyan-400 mb-3">

        AI STATUS

      </div>

      <div
        className="
          h-8
          flex
          items-center
          text-slate-200
          font-medium
        "
      >

        {messages[index]}

      </div>

      <div
        className="
          mt-4
          h-2
          rounded-full
          overflow-hidden
          bg-slate-800
        "
      >

        <div
          className="
            h-full
            w-1/2
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-cyan-400
            animate-pulse
          "
        />

      </div>

    </div>

  );

};

export default ThinkingMessages;