// import React, { useState, useRef, useEffect } from "react";
// import * as pdfjsLib from "pdfjs-dist";
// import pdfWorker from "pdfjs-dist/build/pdf.worker.min?url";

// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

// const PDF_URL = "/src/assets/HomeImg/Orange Multimedia Brochure - 2025.pdf";
// const FLIP_SOUND = "/src/assets/HomeImg/page-flip-47177.mp3";

// export default function RealisticMagazineViewer() {
//   const wrapperRef = useRef(null);
//   const animating = useRef(false);
//   const soundRef = useRef(null);

//   const [pages, setPages] = useState([]);
//   const [mode, setMode] = useState("front");
//   const [spreadIndex, setSpreadIndex] = useState(1);
//   const [flipFrom, setFlipFrom] = useState(null);
//   const [flipDir, setFlipDir] = useState(null);

//   const total = pages.length;

//   useEffect(() => {
//     soundRef.current = new Audio(FLIP_SOUND);
//     soundRef.current.volume = 0.6;
//   }, []);

//   const playSound = () => {
//     soundRef.current.currentTime = 0;
//     soundRef.current.play().catch(() => {});
//   };

//   useEffect(() => {
//     const load = async () => {
//       const pdf = await pdfjsLib.getDocument(PDF_URL).promise;
//       const imgs = [];

//       for (let i = 1; i <= pdf.numPages; i++) {
//         const page = await pdf.getPage(i);
//         const viewport = page.getViewport({ scale: 2 });
//         const canvas = document.createElement("canvas");
//         const ctx = canvas.getContext("2d");

//         canvas.width = viewport.width;
//         canvas.height = viewport.height;

//         await page.render({ canvasContext: ctx, viewport }).promise;
//         imgs.push(canvas.toDataURL("image/jpeg", 1));
//       }

//       setPages(imgs);
//     };
//     load();
//   }, []);

//   const toggleFullscreen = () => {
//     if (!document.fullscreenElement) {
//       wrapperRef.current.requestFullscreen();
//     } else {
//       document.exitFullscreen();
//     }
//   };

//   const openBook = () => {
//     if (animating.current) return;
//     animating.current = true;

//     playSound();
//     setFlipFrom(0);
//     setFlipDir("next");
//     setMode("open");
//     setSpreadIndex(1);

//     setTimeout(() => {
//       setFlipDir(null);
//       setFlipFrom(null);
//       animating.current = false;
//     }, 900);
//   };

//   const next = () => {
//     if (animating.current) return;

//     if (mode === "front") {
//       openBook();
//       return;
//     }

//     if (mode === "open" && spreadIndex >= total - 2) {
//       animating.current = true;
//       playSound();
//       setFlipFrom(spreadIndex);
//       setFlipDir("next");
      
//       // Update mode immediately so back cover shows right away
//       setTimeout(() => {
//         setMode("back");
//       }, 0);

//       setTimeout(() => {
//         setFlipDir(null);
//         setFlipFrom(null);
//         animating.current = false;
//       }, 900);
//       return;
//     }

//     if (mode !== "open") return;

//     animating.current = true;
//     playSound();

//     const newIndex = spreadIndex + 2;
//     setFlipFrom(spreadIndex);
//     setFlipDir("next");
    
//     // Update spread index immediately
//     setTimeout(() => {
//       setSpreadIndex(newIndex);
//     }, 0);

//     setTimeout(() => {
//       setFlipDir(null);
//       setFlipFrom(null);
//       animating.current = false;
//     }, 900);
//   };

//   const prev = () => {
//     if (animating.current) return;

//     if (mode === "back") {
//       animating.current = true;
//       playSound();
//       const newIndex = total - 3;
//       setFlipFrom(total - 1);
//       setFlipDir("prev");
      
//       // Update immediately
//       setTimeout(() => {
//         setMode("open");
//         setSpreadIndex(newIndex);
//       }, 0);

//       setTimeout(() => {
//         setFlipDir(null);
//         setFlipFrom(null);
//         animating.current = false;
//       }, 900);
//       return;
//     }

//     if (mode === "open" && spreadIndex <= 1) {
//       animating.current = true;
//       playSound();
//       setFlipFrom(1);
//       setFlipDir("prev");
      
//       // Update immediately
//       setTimeout(() => {
//         setMode("front");
//       }, 0);

//       setTimeout(() => {
//         setFlipDir(null);
//         setFlipFrom(null);
//         animating.current = false;
//       }, 900);
//       return;
//     }

//     if (mode !== "open") return;

//     animating.current = true;
//     playSound();

//     const newIndex = spreadIndex - 2;
//     setFlipFrom(spreadIndex);
//     setFlipDir("prev");
    
//     // Update spread index immediately
//     setTimeout(() => {
//       setSpreadIndex(newIndex);
//     }, 0);

//     setTimeout(() => {
//       setFlipDir(null);
//       setFlipFrom(null);
//       animating.current = false;
//     }, 900);
//   };

//   if (!pages.length) return null;

//   return (
//     <div className="wrapper" ref={wrapperRef}>
//       <div className="book">

//         {/* FRONT COVER */}
//         {mode === "front" && (
//           <div className="cover" onClick={openBook}>
//             <img src={pages[0]} />
//           </div>
//         )}

//         {/* BACK COVER */}
//         {mode === "back" && (
//           <div className="cover">
//             <img src={pages[total - 1]} />
//           </div>
//         )}

//         {/* OPEN BOOK */}
//         {mode === "open" && (
//           <>
//             <div className="page left">
//               <img src={pages[spreadIndex]} />
//             </div>
//             <div className="page right">
//               <img src={pages[spreadIndex + 1]} />
//             </div>
//           </>
//         )}

//         {/* FLIP OVERLAY */}
//         {flipDir && flipFrom !== null && (
//           <div className={`page flip ${flipDir}`}>
//             <img src={flipDir === "next" ? pages[flipFrom + 1] : pages[flipFrom]} />
//           </div>
//         )}
//       </div>

//       {/* CONTROLS */}
//       <div className="controls">
//         <button onClick={prev}>◀</button>
//         <span>
//           {mode === "open"
//             ? `${spreadIndex + 1}-${spreadIndex + 2} / ${total}`
//             : mode === "front"
//             ? "Cover"
//             : "Back Cover"}
//         </span>
//         <button onClick={next}>▶</button>
//         <button onClick={toggleFullscreen}>⛶</button>
//       </div>

//       <style>{`
//         .wrapper{
//           width:100%;
//           height:60vh;
//           display:flex;
//           flex-direction:column;
//           justify-content:center;
//           align-items:center;
//           // background:#111;
//           position:relative;
//         }
//         .book{
//           width:560px;
//           height:280px;
//           position:relative;
//           perspective:2200px;
//         }
//         .wrapper:fullscreen .book{
//           width:90vw;
//           height:90vh;
//         }
//         .cover{
//           position:absolute;
//           inset:0;
//           display:flex;
//           justify-content:center;
//           align-items:center;
//           cursor:pointer;
//         }
//         .cover img,
//         .page img{
//           width:100%;
//           height:100%;
//           object-fit:contain;
//         }
//         .page{
//           position:absolute;
//           top:0;
//           width:50%;
//           height:100%;
//           backface-visibility:hidden;
//         }
//         .left{ left:0; }
//         .right{ right:0; }

//         .flip{
//           z-index:10;
//         }
//         .next{
//           left:50%;
//           transform-origin:left center;
//           animation:flipNext .9s forwards;
//         }
//         .prev{
//           right:50%;
//           transform-origin:right center;
//           animation:flipPrev .9s forwards;
//         }
//         @keyframes flipNext{
//           to{transform:rotateY(-180deg);}
//         }
//         @keyframes flipPrev{
//           to{transform:rotateY(180deg);}
//         }
//         .controls{
//           position:absolute;
//           bottom:30px;
//           display:flex;
//           gap:16px;
//           align-items:center;
//           color:#fff;
//         }
//         .controls button{
//           padding:6px 14px;
//           cursor:pointer;
//         }
//       `}</style>
//     </div>
//   );
// }


// import React, { useState, useRef, useEffect } from "react";
// import * as pdfjsLib from "pdfjs-dist";
// import pdfWorker from "pdfjs-dist/build/pdf.worker.min?url";

// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

// const PDF_URL = "/src/assets/HomeImg/Orange Multimedia Brochure - 2025.pdf";
// const FLIP_SOUND = "/src/assets/HomeImg/page-flip-47177.mp3";

// export default function RealisticMagazineViewer() {
//   const wrapperRef = useRef(null);
//   const animating = useRef(false);
//   const soundRef = useRef(null);

//   const [pages, setPages] = useState([]);
//   const [mode, setMode] = useState("front"); // front | open | back
//   const [spreadIndex, setSpreadIndex] = useState(1);
//   const [flipFrom, setFlipFrom] = useState(null);
//   const [flipDir, setFlipDir] = useState(null);

//   const total = pages.length;

//   /* ---------------- SOUND ---------------- */
//   useEffect(() => {
//     soundRef.current = new Audio(FLIP_SOUND);
//     soundRef.current.volume = 0.6;
//   }, []);

//   const playSound = () => {
//     if (!soundRef.current) return;
//     soundRef.current.currentTime = 0;
//     soundRef.current.play().catch(() => {});
//   };

//   /* ---------------- LOAD PDF ---------------- */
//   useEffect(() => {
//     const load = async () => {
//       const pdf = await pdfjsLib.getDocument(PDF_URL).promise;
//       const imgs = [];

//       for (let i = 1; i <= pdf.numPages; i++) {
//         const page = await pdf.getPage(i);
//         const viewport = page.getViewport({ scale: 2 });
//         const canvas = document.createElement("canvas");
//         const ctx = canvas.getContext("2d");

//         canvas.width = viewport.width;
//         canvas.height = viewport.height;

//         await page.render({ canvasContext: ctx, viewport }).promise;
//         imgs.push(canvas.toDataURL("image/jpeg", 1));
//       }

//       setPages(imgs);
//     };

//     load();
//   }, []);

//   /* ---------------- FULLSCREEN ---------------- */
//   const toggleFullscreen = () => {
//     if (!document.fullscreenElement) {
//       wrapperRef.current.requestFullscreen();
//     } else {
//       document.exitFullscreen();
//     }
//   };

//   /* ---------------- OPEN BOOK ---------------- */
//   const openBook = () => {
//     if (animating.current) return;
//     animating.current = true;

//     playSound();
//     setMode("open");
//     setSpreadIndex(1); // 2–3
//     setFlipFrom(0);
//     setFlipDir("next");

//     setTimeout(() => {
//       setFlipDir(null);
//       setFlipFrom(null);
//       animating.current = false;
//     }, 900);
//   };

//   /* ---------------- NEXT ---------------- */
//   const next = () => {
//     if (animating.current) return;

//     // From front cover
//     if (mode === "front") {
//       openBook();
//       return;
//     }

//     // 🔥 If next spread would cross last page → go to back cover
//     if (mode === "open" && spreadIndex + 2 >= total - 1) {
//       animating.current = true;
//       playSound();

//       setFlipFrom(spreadIndex);
//       setFlipDir("next");

//       setTimeout(() => {
//         setMode("back"); // only page 12
//         setFlipDir(null);
//         setFlipFrom(null);
//         animating.current = false;
//       }, 900);

//       return;
//     }

//     if (mode !== "open") return;

//     // Normal spread
//     animating.current = true;
//     playSound();

//     const old = spreadIndex;
//     setSpreadIndex(old + 2); // instant update
//     setFlipFrom(old);
//     setFlipDir("next");

//     setTimeout(() => {
//       setFlipDir(null);
//       setFlipFrom(null);
//       animating.current = false;
//     }, 900);
//   };

//   /* ---------------- PREV ---------------- */
//   const prev = () => {
//     if (animating.current) return;

//     // From back cover → last spread
//     if (mode === "back") {
//       animating.current = true;
//       playSound();

//       const lastSpread = total - 3; // 10–11
//       setMode("open");
//       setSpreadIndex(lastSpread);
//       setFlipFrom(total - 1);
//       setFlipDir("prev");

//       setTimeout(() => {
//         setFlipDir(null);
//         setFlipFrom(null);
//         animating.current = false;
//       }, 900);

//       return;
//     }

//     // From first spread → front cover
//     if (mode === "open" && spreadIndex <= 1) {
//       animating.current = true;
//       playSound();

//       setFlipFrom(1);
//       setFlipDir("prev");

//       setTimeout(() => {
//         setMode("front");
//         setFlipDir(null);
//         setFlipFrom(null);
//         animating.current = false;
//       }, 900);

//       return;
//     }

//     if (mode !== "open") return;

//     // Normal prev spread
//     animating.current = true;
//     playSound();

//     const old = spreadIndex;
//     setSpreadIndex(old - 2); // instant
//     setFlipFrom(old);
//     setFlipDir("prev");

//     setTimeout(() => {
//       setFlipDir(null);
//       setFlipFrom(null);
//       animating.current = false;
//     }, 900);
//   };

//   if (!pages.length) return null;

//   return (
//     <div className="wrapper" ref={wrapperRef}>
//       <div className="book">

//         {/* FRONT COVER */}
//         {mode === "front" && (
//           <div className="cover" onClick={openBook}>
//             <img src={pages[0]} alt="Front Cover" />
//           </div>
//         )}

//         {/* BACK COVER (PAGE 12 ONLY) */}
//         {mode === "back" && (
//           <div className="cover">
//             <img src={pages[total - 1]} alt="Back Cover" />
//           </div>
//         )}

//         {/* OPEN BOOK */}
//         {mode === "open" && (
//           <>
//             <div className="page left">
//               <img src={pages[spreadIndex]} alt="Left Page" />
//             </div>
//             <div className="page right">
//               <img src={pages[spreadIndex + 1]} alt="Right Page" />
//             </div>
//           </>
//         )}

//         {/* FLIP OVERLAY */}
//         {flipDir && flipFrom !== null && (
//           <div className={`page flip ${flipDir}`}>
//             <img
//               src={
//                 flipDir === "next"
//                   ? pages[flipFrom + 1]
//                   : pages[flipFrom]
//               }
//               alt="Flip"
//             />
//           </div>
//         )}
//       </div>

//       {/* CONTROLS */}
//       <div className="controls">
//         <button onClick={prev}>◀</button>

//         <span>
//           {mode === "open"
//             ? `${spreadIndex + 1}-${spreadIndex + 2} / ${total}`
//             : mode === "front"
//             ? "Cover"
//             : `Page ${total} / ${total}`}
//         </span>

//         <button onClick={next}>▶</button>
//         <button onClick={toggleFullscreen}>⛶</button>
//       </div>

//       {/* STYLES */}
//       <style>{`
//         .wrapper{
//           width:100%;
//           height:60vh;
//           display:flex;
//           flex-direction:column;
//           justify-content:center;
//           align-items:center;
//           position:relative;
//         }
//         .book{
//           width:560px;
//           height:280px;
//           position:relative;
//           perspective:2200px;
//         }
//         .wrapper:fullscreen .book{
//           width:90vw;
//           height:90vh;
//         }
//         .cover{
//           position:absolute;
//           inset:0;
//           display:flex;
//           justify-content:center;
//           align-items:center;
//           cursor:pointer;
//         }
//         .cover img,
//         .page img{
//           width:100%;
//           height:100%;
//           object-fit:contain;
//         }
//         .page{
//           position:absolute;
//           top:0;
//           width:50%;
//           height:100%;
//           backface-visibility:hidden;
//         }
//         .left{ left:0; }
//         .right{ right:0; }

//         .flip{
//           z-index:10;
//         }
//         .next{
//           left:50%;
//           transform-origin:left center;
//           animation:flipNext .9s forwards;
//         }
//         .prev{
//           right:50%;
//           transform-origin:right center;
//           animation:flipPrev .9s forwards;
//         }
//         @keyframes flipNext{
//           to{transform:rotateY(-180deg);}
//         }
//         @keyframes flipPrev{
//           to{transform:rotateY(180deg);}
//         }
//         .controls{
//           position:absolute;
//           bottom:20px;
//           display:flex;
//           gap:16px;
//           align-items:center;
//           color:#fff;
//         }
//         .controls button{
//           padding:6px 14px;
//           cursor:pointer;
//         }
//       `}</style>
//     </div>
//   );
// }


import React, { useState, useRef, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min?url";
import pdf from '../../assets/HomeImg/Orange Multimedia Brochure - 2025.pdf'
import audio from '../../assets/HomeImg/page-flip-47177.mp3'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const PDF_URL = pdf;
const FLIP_SOUND = audio;

export default function RealisticMagazineViewer() {
  const wrapperRef = useRef(null);
  const animating = useRef(false);
  const soundRef = useRef(null);

  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);

  const [mode, setMode] = useState("front"); // front | open | back
  const [spreadIndex, setSpreadIndex] = useState(1);
  const [flipFrom, setFlipFrom] = useState(null);
  const [flipDir, setFlipDir] = useState(null);

  const total = pages.length;

  /* ---------------- SOUND ---------------- */
  useEffect(() => {
    soundRef.current = new Audio(FLIP_SOUND);
    soundRef.current.volume = 0.6;
  }, []);

  const playSound = () => {
    if (!soundRef.current) return;
    soundRef.current.currentTime = 0;
    soundRef.current.play().catch(() => {});
  };

  /* ---------------- LOAD PDF ---------------- */
  useEffect(() => {
    const load = async () => {
      try {
        const pdf = await pdfjsLib.getDocument(PDF_URL).promise;
        const imgs = [];

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 2 });
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({ canvasContext: ctx, viewport }).promise;
          imgs.push(canvas.toDataURL("image/jpeg", 1));
        }

        setPages(imgs);
      } catch (err) {
        console.error("PDF load error:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  /* ---------------- FULLSCREEN ---------------- */
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      wrapperRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  /* ---------------- OPEN BOOK ---------------- */
  const openBook = () => {
    if (animating.current) return;
    animating.current = true;

    playSound();
    setMode("open");
    setSpreadIndex(1);
    setFlipFrom(0);
    setFlipDir("next");

    setTimeout(() => {
      setFlipDir(null);
      setFlipFrom(null);
      animating.current = false;
    }, 900);
  };

  /* ---------------- NEXT ---------------- */
  const next = () => {
    if (animating.current) return;

    if (mode === "front") {
      openBook();
      return;
    }

    if (mode === "open" && spreadIndex + 2 >= total - 1) {
      animating.current = true;
      playSound();

      setFlipFrom(spreadIndex);
      setFlipDir("next");

      setTimeout(() => {
        setMode("back");
        setFlipDir(null);
        setFlipFrom(null);
        animating.current = false;
      }, 900);

      return;
    }

    if (mode !== "open") return;

    animating.current = true;
    playSound();

    const old = spreadIndex;
    setSpreadIndex(old + 2);
    setFlipFrom(old);
    setFlipDir("next");

    setTimeout(() => {
      setFlipDir(null);
      setFlipFrom(null);
      animating.current = false;
    }, 900);
  };

  /* ---------------- PREV ---------------- */
  const prev = () => {
    if (animating.current) return;

    if (mode === "back") {
      animating.current = true;
      playSound();

      const lastSpread = total - 3;
      setMode("open");
      setSpreadIndex(lastSpread);
      setFlipFrom(total - 1);
      setFlipDir("prev");

      setTimeout(() => {
        setFlipDir(null);
        setFlipFrom(null);
        animating.current = false;
      }, 900);

      return;
    }

    if (mode === "open" && spreadIndex <= 1) {
      animating.current = true;
      playSound();

      setFlipFrom(1);
      setFlipDir("prev");

      setTimeout(() => {
        setMode("front");
        setFlipDir(null);
        setFlipFrom(null);
        animating.current = false;
      }, 900);

      return;
    }

    if (mode !== "open") return;

    animating.current = true;
    playSound();

    const old = spreadIndex;
    setSpreadIndex(old - 2);
    setFlipFrom(old);
    setFlipDir("prev");

    setTimeout(() => {
      setFlipDir(null);
      setFlipFrom(null);
      animating.current = false;
    }, 900);
  };

  /* ---------------- LOADING SCREEN ---------------- */
  if (loading) {
    return (
      <div className="wrapper loading-screen">
        <div className="loader"></div>
        <p>Loading brochure...</p>

        <style>{`
          .loading-screen{
            width:100%;
            height:60vh;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            color:#fff;
          }
          .loader{
            width:48px;
            height:48px;
            border:4px solid #555;
            border-top:4px solid #fff;
            border-radius:50%;
            animation:spin 1s linear infinite;
            margin-bottom:12px;
          }
          @keyframes spin{
            to{transform:rotate(360deg);}
          }
        `}</style>
      </div>
    );
  }

  if (!pages.length) return null;

  return (
    <div className="wrapper" ref={wrapperRef}>
      <div className="book">

        {/* FRONT COVER */}
        {mode === "front" && (
          <div className="cover" onClick={openBook}>
            <img src={pages[0]} alt="Front Cover" />
          </div>
        )}

        {/* BACK COVER */}
        {mode === "back" && (
          <div className="cover">
            <img src={pages[total - 1]} alt="Back Cover" />
          </div>
        )}

        {/* OPEN BOOK */}
        {mode === "open" && (
          <>
            <div className="page left">
              <img src={pages[spreadIndex]} alt="Left Page" />
            </div>
            <div className="page right">
              <img src={pages[spreadIndex + 1]} alt="Right Page" />
            </div>
          </>
        )}

        {/* FLIP OVERLAY */}
        {flipDir && flipFrom !== null && (
          <div className={`page flip ${flipDir}`}>
            <img
              src={
                flipDir === "next"
                  ? pages[flipFrom + 1]
                  : pages[flipFrom]
              }
              alt="Flip"
            />
          </div>
        )}
      </div>

      {/* CONTROLS */}
      <div className="controls">
        <button onClick={prev}>◀</button>

        <span>
          {mode === "open"
            ? `${spreadIndex + 1}-${spreadIndex + 2} / ${total}`
            : mode === "front"
            ? "Cover"
            : `Page ${total} / ${total}`}
        </span>

        <button onClick={next}>▶</button>
        <button onClick={toggleFullscreen}>⛶</button>
      </div>

      {/* STYLES */}
      <style>{`
        .wrapper{
          width:100%;
          height:61vh;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          position:relative;
        }
        .book{
          width:560px;
          height:280px;
          position:relative;
          perspective:2200px;
        }
        .wrapper:fullscreen .book{
          width:90vw;
          height:90vh;
        }
        .cover{
          position:absolute;
          inset:0;
          display:flex;
          justify-content:center;
          align-items:center;
          cursor:pointer;
        }
        .cover img,
        .page img{
          width:100%;
          height:100%;
          object-fit:contain;
        }
        .page{
          position:absolute;
          top:0;
          width:50%;
          height:100%;
          backface-visibility:hidden;
        }
        .left{ left:0; }
        .right{ right:0; }

        .flip{
          z-index:10;
        }
        .next{
          left:50%;
          transform-origin:left center;
          animation:flipNext .9s forwards;
        }
        .prev{
          right:50%;
          transform-origin:right center;
          animation:flipPrev .9s forwards;
        }
        @keyframes flipNext{
          to{transform:rotateY(-180deg);}
        }
        @keyframes flipPrev{
          to{transform:rotateY(180deg);}
        }
        .controls{
          position:absolute;
          bottom:20px;
          display:flex;
          gap:16px;
          align-items:center;
          color:#fff;
        }
        .controls button{
          padding:6px 14px;
          cursor:pointer;
        }
      `}</style>
    </div>
  );
}
