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
          lg:grid-cols-2
          min-h-[460px]
        "
      >

        {/* ===========================
              LEFT PANEL
        =========================== */}

        <div
          className="
            relative
            p-4
            border-b
            lg:border-b-0
            lg:border-r
            border-slate-800
            mt-0
            mb-0
          "
        >

          {/* Header */}

          <div
            className="
              flex
              items-center
              gap-4
              mb-4
            "
          >

            <div
              className="
                relative
                flex
                items-center
                justify-center
                w-12
                h-12
                rounded-full
                bg-cyan-500/20
              "
            >

              <div
                className="
                  absolute
                  w-12
                  h-12
                  rounded-full
                  bg-cyan-400/20
                  animate-ping
                "
              />

              <span className="text-2xl">
                A
              </span>

            </div>

            <div>

              <h2
                className="
                  text-3xl
                  font-bold
                  tracking-wide
                "
              >
                ATHENA AGENT
              </h2>

              <p
                className="
                  mt-0
                  text-slate-400
                "
              >
                Autonomous Business Intelligence
              </p>

            </div>

          </div>

          {/* Steps */}

          <div className="space-y-1">

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
              mt-2
              mb-0
              rounded-2xl
              border
              border-cyan-500/20
              bg-slate-800/40
              p-4
            "
          >

            <div
              className="
                flex
                justify-between
                text-sm
              "
            >

              <span className="text-slate-400">
                AI MODEL
              </span>

              <span className="text-cyan-400">
                Gemma 4 31B
              </span>

            </div>

            <div
              className="
                mt-4
                flex
                justify-between
                text-sm
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
                text-sm
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
            p-8
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
              top-0
              left-0
              w-full
              h-full
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
        gap-5
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/50
        p-5
        hover:border-cyan-500/30
        transition-all
      "
    >

      <div
        className={`
          w-12
          h-12
          rounded-xl
          flex
          items-center
          justify-center
          ${bg}
        `}
      >

        {

          status === "loading"

            ? (

              <div
                className="
                  w-6
                  h-6
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
                  text-xl
                  ${color}
                `}
              >
                {icon}
              </span>

            )

        }

      </div>

      <div className="flex-1">

        <h3
          className="
            text-lg
            font-semibold
          "
        >

          {title}

        </h3>

        <p
          className="
            mt-1
            text-sm
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