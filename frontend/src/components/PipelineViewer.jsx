const PipelineViewer = ({ pipeline }) => {

  if (!pipeline) {
    return null;
  }

  return (

    <details
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        overflow-hidden
      "
    >

      <summary
        className="
          cursor-pointer
          list-none
          px-4
          sm:px-6
          py-4
          text-lg
          sm:text-xl
          font-semibold
          hover:bg-slate-800
          transition
          flex
          items-center
          justify-between
        "
      >

        <span>
          Generated MongoDB Pipeline
        </span>

        <span
          className="
            text-slate-400
            text-sm
          "
        >
          Click to Expand
        </span>

      </summary>

      <div
        className="
          border-t
          border-slate-800
          p-4
          sm:p-6
        "
      >

        <pre
          className="
            overflow-x-auto
            rounded-xl
            bg-black
            p-4
            sm:p-5
            text-xs
            sm:text-sm
            text-green-400
            whitespace-pre
          "
        >
{JSON.stringify(
  pipeline,
  null,
  2
)}
        </pre>

      </div>

    </details>

  );

};

export default PipelineViewer;