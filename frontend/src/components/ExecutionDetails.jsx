import { useState } from "react";

const ExecutionDetails = ({
  execution,
  pipeline,
  totalRecords
}) => {

  const [open, setOpen] =
    useState(false);

  if (!execution) {
    return null;
  }

  const formatTime = (ms) => {

    if (ms >= 1000) {
      return `${(ms / 1000).toFixed(2)} sec`;
    }

    return `${ms} ms`;

  };

  return (

    <div
      className="
        mt-10
        bg-slate-900
        rounded-2xl
        border
        border-slate-700
        overflow-hidden
      "
    >

      <button

        onClick={() =>
          setOpen(!open)
        }

        className="
          w-full
          px-6
          py-5
          flex
          justify-between
          items-center
          text-left
          hover:bg-slate-800
          transition
        "

      >

        <div>

          <h2
            className="
              text-xl
              font-semibold
            "
          >
            ⚙ AI Execution Details
          </h2>

          <p
            className="
              text-sm
              text-slate-400
              mt-1
            "
          >
            View how Athena generated
            and executed this query
          </p>

        </div>

        <span
          className="
            text-2xl
          "
        >
          {open ? "−" : "+"}
        </span>

      </button>

      {

        open && (

          <div
            className="
              p-6
              border-t
              border-slate-700
            "
          >

            <div
              className="
                grid
                grid-cols-2
                md:grid-cols-4
                gap-4
              "
            >

              <MetricCard
                title="AI Model"
                value={execution.model}
              />

              <MetricCard
                title="AI Time"
                value={formatTime(
                  execution.queryGenerationMs
                )}
              />

              <MetricCard
                title="DB Time"
                value={formatTime(
                  execution.databaseExecutionMs
                )}
              />

              <MetricCard
                title="Total Time"
                value={formatTime(
                  execution.totalExecutionMs
                )}
              />

            </div>

            <div
              className="
                mt-5
              "
            >

              <MetricCard
                title="Records Returned"
                value={totalRecords}
              />

            </div>

            <div
              className="
                mt-8
              "
            >

              <h3
                className="
                  text-lg
                  font-semibold
                  mb-3
                "
              >
                Generated MongoDB Pipeline
              </h3>

              <pre
                className="
                  bg-black
                  rounded-xl
                  p-5
                  overflow-auto
                  text-sm
                  text-green-400
                "
              >

{JSON.stringify(
pipeline,
null,
2
)}

              </pre>

            </div>

          </div>

        )

      }

    </div>

  );

};

const MetricCard = ({
  title,
  value
}) => {

  return (

    <div
      className="
        bg-slate-800
        rounded-xl
        p-4
      "
    >

      <p
        className="
          text-sm
          text-slate-400
        "
      >
        {title}
      </p>

      <p
        className="
          mt-2
          text-lg
          font-semibold
          break-all
        "
      >
        {value}
      </p>

    </div>

  );

};

export default ExecutionDetails;