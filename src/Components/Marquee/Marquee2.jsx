const Marquee2 = () => {
  const marqueeText = Array(50).fill("Reach Us");

  return (
    <div style={{ width: "100%", position: "relative", height: "100px" }}>
      {/* Top Rotated Marquee (black) */}
      <div
        style={{
          height: "50px",
          display: "flex",
          alignItems: "center",
          background: "#000",
          whiteSpace: "nowrap",
          overflow: "hidden",
          position: "absolute",
          top: "25px",
          left: 0,
          right: 0,
          transform: "rotate(3deg)",
        }}
      >
        <div
          style={{
            display: "flex",
            animation: "marquee-left 20s linear infinite",
            minWidth: "100%",
            gap: "40px",
          }}
        >
          {marqueeText.map((text, i) => (
            <span
              key={`left-${i}`}
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Rotated Marquee (grey) */}
      <div
        style={{
          height: "50px",
          display: "flex",
          alignItems: "center",
          background: "#DEDEDE",
          whiteSpace: "nowrap",
          overflow: "hidden",
          position: "absolute",
          top: "25px",
          left: 0,
          right: 0,
          transform: "rotate(-3deg)",
        }}
      >
        <div
          style={{
            display: "flex",
            animation: "marquee-right 20s linear infinite",
            minWidth: "100%",
            gap: "40px",
          }}
        >
          {marqueeText.map((text, i) => (
            <span
              key={`right-${i}`}
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "black",
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes marquee-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }

          @keyframes marquee-right {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0%); }
          }
        `}
      </style>
    </div>
  );
};

export default Marquee2;
