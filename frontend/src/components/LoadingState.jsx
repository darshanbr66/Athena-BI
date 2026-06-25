const LoadingState = () => {
return ( <div
   className="
     mt-10
     bg-slate-900
     border
     border-slate-800
     rounded-2xl
     p-8
     shadow-xl
   "
 >


  <div className="flex items-center gap-3 mb-6">

    <div
      className="
        w-3
        h-3
        rounded-full
        bg-green-500
        animate-pulse
      "
    />

    <h2
      className="
        text-2xl
        font-bold
        tracking-wide
      "
    >
      ATHENA AGENT
    </h2>

  </div>

  <div className="space-y-4">

    <div
      className="
        flex
        items-center
        gap-3
      "
    >
      <span className="text-green-400">
        ✓
      </span>

      <span>
        Understanding Intent
      </span>
    </div>

    <div
      className="
        flex
        items-center
        gap-3
      "
    >
      <span className="text-green-400">
        ✓
      </span>

      <span>
        Generating MQL Pipeline
      </span>
    </div>

    <div
      className="
        flex
        items-center
        gap-3
        animate-pulse
      "
    >
      <span className="text-yellow-400">
        ⏳
      </span>

      <span>
        Querying MongoDB Atlas
      </span>
    </div>

    <div
      className="
        flex
        items-center
        gap-3
        text-slate-500
      "
    >
      <span>
        ◻
      </span>

      <span>
        Building Visualization
      </span>
    </div>

  </div>

  <div
    className="
      mt-8
      text-sm
      text-slate-400
    "
  >
    Processing live attorney analytics...
  </div>

</div>


);
};

export default LoadingState;
