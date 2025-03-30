const Marquee2 = () => {
  return (
    <div style={{ width: "100%", position: "relative", height: "100px" }}>
      {/* First Marquee (Now Second) */}
      <div
        style={{
          height: "50px",
          display: "flex",
          alignItems: "center",
          background: "#DEDEDEFF",
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
            minWidth: "200%",
          }}
        >
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              style={{ display: "flex", gap: "40px", marginRight: "40px" }}
            >
              {[...Array(20)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Reach Us
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Second Marquee (Now First) */}
      <div
        style={{
          height: "50px",
          display: "flex",
          alignItems: "center",
          background: "#000000FF",
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
            minWidth: "200%",
          }}
        >
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              style={{ display: "flex", gap: "40px", marginRight: "40px" }}
            >
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Reach Us
                </span>
              ))}
            </div>
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
