const OrbitNode = ({
  size,
  duration,
  delay
}) => {

  return (

    <div
      className="absolute inset-0"
      style={{
        animation: `spin ${duration}s linear infinite`,
        animationDelay: delay
      }}
    >

      <div
        className="absolute left-1/2 top-0"
        style={{
          transform: "translateX(-50%)"
        }}
      >

        <div
          className="rounded-full bg-cyan-400 shadow-[0_0_16px_#22d3ee]"
          style={{
            width: size,
            height: size
          }}
        />

      </div>

    </div>

  );

};

const Particle = ({
  top,
  left,
  delay
}) => {

  return (

    <div
      className="
        absolute
        w-1.5
        h-1.5
        rounded-full
        bg-cyan-300
        animate-ping
      "
      style={{
        top,
        left,
        animationDelay: delay
      }}
    />

  );

};

const AiThinkingAnimation = () => {

  return (

    <div
      className="
        relative
        w-full
        h-[280px]
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >

      {/* Glow */}

      <div
        className="
          absolute
          w-72
          h-72
          rounded-full
          bg-cyan-500/10
          blur-3xl
          animate-pulse
        "
      />

      {/* Particles */}

      <Particle top="15%" left="25%" delay="0s" />
      <Particle top="20%" left="75%" delay=".5s" />
      <Particle top="70%" left="18%" delay="1s" />
      <Particle top="82%" left="80%" delay="1.5s" />
      <Particle top="50%" left="92%" delay="2s" />
      <Particle top="40%" left="8%" delay="2.5s" />

      {/* Outer Ring */}

      <div
        className="
          absolute
          w-56
          h-56
          rounded-full
          border
          border-cyan-500/20
        "
      />

      {/* Orbit 1 */}

      <div
        className="
          absolute
          w-56
          h-56
        "
      >

        <OrbitNode
          size={12}
          duration={8}
          delay="0s"
        />

      </div>

      {/* Orbit 2 */}

      <div
        className="
          absolute
          w-44
          h-44
        "
      >

        <OrbitNode
          size={10}
          duration={6}
          delay="1s"
        />

      </div>

      {/* Orbit 3 */}

      <div
        className="
          absolute
          w-32
          h-32
        "
      >

        <OrbitNode
          size={8}
          duration={4}
          delay=".3s"
        />

      </div>

      {/* AI Core */}

      <div
        className="
          relative
          w-24
          h-24
          rounded-full
          bg-gradient-to-br
          from-cyan-400
          via-blue-500
          to-indigo-600
          shadow-[0_0_45px_#38bdf8]
          flex
          items-center
          justify-center
          animate-pulse
        "
      >

        <div
          className="
            absolute
            inset-2
            rounded-full
            border
            border-cyan-300/40
          "
        />

        <div
          className="
            absolute
            inset-4
            rounded-full
            border
            border-cyan-300/20
          "
        />

        <div
          className="
            text-xl
            font-black
            tracking-[0.25em]
            text-white
          "
        >
          AI
        </div>

      </div>

      {/* Horizontal Data */}

      <div
        className="
          absolute
          w-56
          h-px
          bg-cyan-500/20
        "
      >

        <div
          className="
            w-2
            h-2
            rounded-full
            bg-cyan-300
            shadow-[0_0_14px_#22d3ee]
            animate-bounce
          "
        />

      </div>

      {/* Vertical Data */}

      <div
        className="
          absolute
          h-56
          w-px
          bg-cyan-500/20
        "
      >

        <div
          className="
            w-2
            h-2
            rounded-full
            bg-cyan-300
            shadow-[0_0_14px_#22d3ee]
            animate-bounce
          "
        />

      </div>

      {/* Title */}

      <div
        className="
          absolute
          bottom-0
          text-center
        "
      >

        <div
          className="
            text-cyan-300
            text-base
            font-semibold
            tracking-widest
          "
        >
          AI THINKING ENGINE
        </div>

        <div
          className="
            mt-1
            text-sm
            text-slate-400
          "
        >
          Autonomous reasoning...
        </div>

      </div>

    </div>

  );

};

export default AiThinkingAnimation;