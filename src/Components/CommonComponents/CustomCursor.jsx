import React, { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector("#cursor");
    const cursorBorder = document.querySelector("#cursor-border");
    const cursorPos = { x: 0, y: 0 };
    const cursorBorderPos = { x: 0, y: 0 };

    // Mouse Move
    document.addEventListener("mousemove", (e) => {
      cursorPos.x = e.clientX;
      cursorPos.y = e.clientY;

      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    // Border Animation Frame
    function loop() {
      const easing = 8;
      cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easing;
      cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easing;

      cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
      requestAnimationFrame(loop);
    }
    loop();

    // Hover Effects
    document.querySelectorAll("[data-cursor]").forEach((item) => {
      item.addEventListener("mouseover", () => {
        if (item.dataset.cursor === "pointer") {
          cursorBorder.style.backgroundColor = "rgba(255,255,255,0.6)";
          cursorBorder.style.setProperty("--size", "30px");
        }
        if (item.dataset.cursor === "pointer2") {
          cursorBorder.style.backgroundColor = "white";
          cursorBorder.style.mixBlendMode = "difference";
          cursorBorder.style.setProperty("--size", "80px");
        }
      });

      item.addEventListener("mouseout", () => {
        cursorBorder.style.backgroundColor = "unset";
        cursorBorder.style.mixBlendMode = "unset";
        cursorBorder.style.setProperty("--size", "50px");
      });
    });
  }, []);

  return (
    <>
      {/* Cursor Elements */}
      <div id="cursor"></div>
      <div id="cursor-border"></div>

      {/* Buttons for testing */}
      

      <style>{`
   

        #cursor {
          position: fixed;
          top: -5px;
          left: -5px;
          width: 10px;
          height: 10px;
          background-color: #E95E0E ;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
        }

        #cursor-border {
          --size: 50px;
          position: fixed;
          top: calc(var(--size) / -2);
          left: calc(var(--size) / -2);
          width: var(--size);
          height: var(--size);
          border-radius: 50%;
          box-shadow: 0 0 0 1px white;
          pointer-events: none;
          transition: 
            top 0.15s ease-out, 
            left 0.15s ease-out, 
            width 0.15s ease-out,
            height 0.15s ease-out, 
            background-color 0.15s ease-out;
          z-index: 9999;
        }

       
      `}</style>
    </>
  );
}
