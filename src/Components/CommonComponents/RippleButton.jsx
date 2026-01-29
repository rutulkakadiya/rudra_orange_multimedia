import React from "react";

export default function RippleButton({
  children,
  className = "",
  onClick,
}) {
  // Mouse Move Handler
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = e.currentTarget.querySelector(".ripple-bg");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
  };

  return (
    <>
      {/* INLINE CSS */}
      <style>{`
        .ripple-btn {
          position: relative;
          overflow: hidden;
          border: 2px solid var(--first);
          color: white;
          padding: 14px 32px;
          border-radius: 12px;
          cursor: pointer;
          background: transparent;
          transition: color 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }

        .ripple-btn:hover {
        //   color: black;
        }

        .ripple-btn .btn-text {
          position: relative;
          z-index: 2;
        }

        .ripple-btn .ripple-bg {
          position: absolute;
          width: 0;
          height: 0;
          background: var(--first);
          border-radius: 999px;
          transform: translate(-50%, -50%);
          transition: width 0.45s ease, height 0.45s ease;
          z-index: 1;
          pointer-events: none;
        }

        .ripple-btn:hover .ripple-bg {
          width: 350%;
          height: 350%;
        }
      `}</style>

      {/* BUTTON */}
      <button
        className={`ripple-btn ${className}`}
        onMouseMove={handleMove}
        onClick={onClick}
      >
        <span className="ripple-bg"></span>
        <span className="btn-text">{children}</span>
      </button>
    </>
  );
}
