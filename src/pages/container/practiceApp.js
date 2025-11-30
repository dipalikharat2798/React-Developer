// import React from "react";
// import { createRoot } from "react-dom/client";


// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   [
//     React.createElement(
//       "div",
//       { id: "child", key: "child-1" },
//       [
//         React.createElement("h1", { key: "h1-1" }, "hello h1!!!!!!!!!!!!"),
//         React.createElement("h2", { key: "h2-1" }, "hello h2!")
//       ]
//     ),
//     React.createElement(
//       "div",
//       { id: "child", key: "child-2" },
//       [
//         React.createElement("h1", { key: "h1-2" }, "hello h1!"),
//         React.createElement("h2", { key: "h2-2" }, "hello h2!")
//       ]
//     )
//   ]
// );

// const Heading = () => <h1>Hello world from JSX!</h1>
// const Title = <div>
//     <h1>React Course</h1>
//     {Heading()}
// </div>


// /**
//  * Simple Header component:
//  * - Left: Logo (clickable)
//  * - Middle: Search form (accessible)
//  * - Right: User icon (button)
//  */
// const Header1 = () => {
//   const handleSearch = (e) => {
//     e.preventDefault();
//     const q = new FormData(e.target).get("q") || "";
//     // For now just log — in real app, navigate or call API
//     console.log("Search query:", q);
//   };

//   return (
//     <header className="site-header">
//       <div className="header-inner">
//         {/* Left: Logo */}
//         <a href="/" className="logo" aria-label="Homepage">
//           {/* Use an <img> or emoji/span for quick demo */}
//           <span role="img" aria-label="music" className="logo-emoji">🎶</span>
//           <span className="brand">MyMusic</span>
//         </a>

//         {/* Middle: Search */}
//         <form className="search-form" onSubmit={handleSearch}>
//           <label htmlFor="site-search" className="visually-hidden">Search</label>
//           <input
//             id="site-search"
//             name="q"
//             className="search-input"
//             type="search"
//             placeholder="Search songs, artists, albums..."
//             aria-label="Search"
//           />
//         </form>

//         {/* Right: User icon */}
//         <button className="user-btn" aria-label="Open user menu">
//           {/* Could be an <img src="avatar.png" /> */}
//           <span role="img" aria-label="user" className="user-emoji">👤</span>
//         </button>
//       </div>
//     </header>
//   );
// };

// const Main = () =>(
//     <>
//     <Header/>
//     <main style={{padding: '20px'}}>
//         <p>Main content goes here...</p>
//     </main>
//     </>
// )

// const layout=()=>(
//   <>
  
//   </>
// )
// const root = createRoot(document.getElementById("root"));
// root.render(<Main/>);

//style.css
// :root{
//   --header-height: 64px;
//   --bg: #ffffff;
//   --accent: #0ea5a4; /* teal-ish */
//   --muted: #6b7280;
//   --border: #e6e9ee;
//   --shadow: 0 2px 6px rgba(21, 30, 43, 0.06);
// }

// * { box-sizing: border-box; }
// body { margin: 0; font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; background: #f7fafc; color:#0f172a; }

// /* visually-hidden utility for labels */
// .visually-hidden {
//   position: absolute !important;
//   height: 1px; width: 1px;
//   overflow: hidden;
//   clip: rect(1px, 1px, 1px, 1px);
//   white-space: nowrap;
// }

// /* Header */
// .site-header {
//   background: var(--bg);
//   border-bottom: 1px solid var(--border);
//   box-shadow: var(--shadow);
//   position: sticky;
//   top: 0;
//   z-index: 50;
// }

// .header-inner {
//   height: var(--header-height);
//   display: flex;
//   align-items: center;
//   gap: 16px;
//   max-width: 1100px;
//   margin: 0 auto;
//   padding: 0 16px;
// }

// /* Logo */
// .logo {
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   text-decoration: none;
//   color: inherit;
//   font-weight: 600;
// }
// .logo-emoji { font-size: 22px; }
// .brand { font-size: 18px; letter-spacing: 0.2px; }

// /* Search takes available space */
// .search-form {
//   flex: 1 1 auto;        /* grows */
//   display: flex;
//   justify-content: center;
// }
// .search-input {
//   width: 100%;
//   max-width: 700px;
//   height: 40px;
//   padding: 8px 12px;
//   border-radius: 999px;
//   border: 1px solid var(--border);
//   outline: none;
//   font-size: 14px;
//   background: #fff;
//   box-shadow: 0 1px 0 rgba(16,24,40,0.02);
// }
// .search-input:focus {
//   border-color: var(--accent);
//   box-shadow: 0 0 0 4px rgba(14,165,164,0.08);
// }

// /* User button */
// .user-btn {
//   border: none;
//   background: transparent;
//   cursor: pointer;
//   height: 40px;
//   width: 40px;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   border-radius: 10px;
// }
// .user-btn:focus { box-shadow: 0 0 0 4px rgba(14,165,164,0.08); outline: none; }
// .user-emoji { font-size: 20px; }

// /* Responsive: on narrow screens reduce padding and shrink search */
// @media (max-width: 640px) {
//   .header-inner { padding: 0 12px; gap: 8px; }
//   .brand { display: none; } /* hide text label to save space */
//   .search-input { max-width: 320px; height: 36px; font-size: 13px; }
// }


