import AiThinkingAnimation from "./AiThinkingAnimation";
import ThinkingMessages from "./ThinkingMessages";

const LoadingState = () => {

  return (

    <div
      className="
        mt-6
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-gradient-to-br
        from-slate-900
        via-slate-950
        to-slate-900
        shadow-2xl
      "
    >

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          min-h-auto
          lg:min-h-[460px]
        "
      >

        {/* ===========================
              LEFT PANEL
        =========================== */}

        <div
          className="
            relative
            p-4
            sm:p-6
            lg:p-8
            border-b
            lg:border-b-0
            lg:border-r
            border-slate-800
          "
        >

          {/* Header */}

          <div
            className="
              flex
              items-center
              gap-4
              mb-6
            "
          >

            <div
              className="
                relative
                flex
                items-center
                justify-center
                w-10
                h-10
                sm:w-12
                sm:h-12
                rounded-full
                bg-cyan-500/20
                flex-shrink-0
              "
            >

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-cyan-400/20
                  animate-ping
                "
              />

              <span
                className="
                  text-xl
                  sm:text-2xl
                "
              >
                A
              </span>

            </div>

            <div>

              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  tracking-wide
                "
              >
                ATHENA AGENT
              </h2>

              <p
                className="
                  mt-1
                  text-sm
                  sm:text-base
                  text-slate-400
                "
              >
                Autonomous Business Intelligence
              </p>

            </div>

          </div>

          {/* Steps */}

          <div className="space-y-3">

            <StepCard
              status="success"
              title="Understanding Intent"
              description="Analyzing your business question."
            />

            <StepCard
              status="success"
              title="Generating MQL Pipeline"
              description="Building MongoDB aggregation."
            />

            <StepCard
              status="loading"
              title="Querying MongoDB Atlas"
              description="Fetching live attorney records."
            />

            <StepCard
              status="pending"
              title="Building Visualization"
              description="Preparing charts and insights."
            />

          </div>

          {/* Bottom */}

          <div
            className="
              mt-6
              rounded-2xl
              border
              border-cyan-500/20
              bg-slate-800/40
              p-4
              sm:p-5
            "
          >

            <div
              className="
                flex
                justify-between
                text-xs
                sm:text-sm
              "
            >

              <span className="text-slate-400">
                AI MODEL
              </span>

              <span className="text-cyan-400 text-right">
                Gemma 4 31B
              </span>

            </div>

            <div
              className="
                mt-4
                flex
                justify-between
                text-xs
                sm:text-sm
              "
            >

              <span className="text-slate-400">
                DATABASE
              </span>

              <span className="text-green-400">
                MongoDB Atlas
              </span>

            </div>

            <div
              className="
                mt-4
                flex
                justify-between
                text-xs
                sm:text-sm
              "
            >

              <span className="text-slate-400">
                STATUS
              </span>

              <span className="text-yellow-400 animate-pulse">
                Processing...
              </span>

            </div>

          </div>

        </div>

        {/* ===========================
              RIGHT PANEL
        =========================== */}

        <div
          className="
            relative
            overflow-hidden
            flex
            flex-col
            items-center
            justify-center
            p-6
            sm:p-8
            lg:p-10
            min-h-[360px]
            lg:min-h-0
            bg-gradient-to-br
            from-slate-900
            via-blue-950
            to-slate-950
          "
        >

          {/* Decorative Glow */}

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.10),transparent_70%)]
            "
          />

          <AiThinkingAnimation />

          <ThinkingMessages />

        </div>

      </div>

    </div>

  );

};

const StepCard = ({
  status,
  title,
  description
}) => {

  let icon = "○";
  let color = "text-slate-500";
  let bg = "bg-slate-800";

  if (status === "success") {

    icon = "✓";
    color = "text-green-400";
    bg = "bg-green-500/10";

  }

  if (status === "loading") {

    icon = "⟳";
    color = "text-yellow-400";
    bg = "bg-yellow-500/10";

  }

  return (

    <div
      className="
        flex
        items-start
        gap-4
        sm:gap-5
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/50
        p-4
        sm:p-5
        hover:border-cyan-500/30
        transition-all
      "
    >

      <div
        className={`
          w-10
          h-10
          sm:w-12
          sm:h-12
          rounded-xl
          flex
          items-center
          justify-center
          flex-shrink-0
          ${bg}
        `}
      >

        {

          status === "loading"

            ? (

              <div
                className="
                  w-5
                  h-5
                  sm:w-6
                  sm:h-6
                  rounded-full
                  border-[3px]
                  border-yellow-500/20
                  border-t-yellow-400
                  animate-spin
                "
              />

            )

            : (

              <span
                className={`
                  text-lg
                  sm:text-xl
                  ${color}
                `}
              >
                {icon}
              </span>

            )

        }

      </div>

      <div className="flex-1 min-w-0">

        <h3
          className="
            text-base
            sm:text-lg
            font-semibold
          "
        >

          {title}

        </h3>

        <p
          className="
            mt-1
            text-xs
            sm:text-sm
            text-slate-400
          "
        >

          {description}

        </p>

      </div>

    </div>

  );

};

export default LoadingState;