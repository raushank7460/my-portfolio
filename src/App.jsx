// import { useState, useEffect } from "react";

// const FORMSPREE_ID = "mjgqprdk";

// const profile = {
//   name: "Raushan Kumar",
//   role: "Full Stack MERN Developer",
//   tagline:
//     "I build modern, scalable and responsive web applications using the MERN Stack.",
//   email: "raushank7460@gmail.com",
//   github: "https://github.com/raushank7460",
//   linkedin: "https://www.linkedin.com/in/raushan-kumar-aaa146333/",
//   resume: "src/Raushan_Kumar_Resumes.pdf",
//   photo: "#",
//   bio:
//     "💻 Full Stack Developer | Java & MERN Stack | DSA Enthusiast | Building scalable web applications | Open Source Learner | Always learning, always building 🚀."

// };

// const skills = [
//   "React",
//   "JavaScript",
//   "Node.js",
//   "Express",
//   "MongoDB",
//   "Tailwind CSS",
//   "REST API",
//   "Git",
//   "GitHub",
//   "Java",
//   "DSA"
// ];

// const projects = [
//   {
//   title: "ShopNest",
//   desc: "A full-stack MERN e-commerce platform with secure authentication, product browsing, shopping cart, order management, and an admin dashboard for managing products and orders.",
//   tech: "React • Node.js • Express.js • MongoDB • JWT • REST API",
//   github: "#",
//   live: "#"
// },
//   {
//   title: "Expense Tracker",
//   desc: "A MERN-based expense tracking application that helps users manage income and expenses, view transaction history, and monitor their financial balance through an intuitive dashboard.",
//   tech: "React • Node.js • Express.js • MongoDB • JWT • REST API",
//   github: "https://github.com/raushank7460/track-expanse",
//   live: "https://track-expanse.vercel.app/"
// },
// {
//   title: "TaskFlow",
//   desc: "A MERN-based task management application that enables users to create, update, organize, and track tasks with secure authentication and a responsive user interface.",
//   tech: "React • Node.js • Express.js • MongoDB • JWT • REST API",
//   github: "https://github.com/raushank7460/TaskFlow",
//   live: "https://task-flow-six-alpha-29.vercel.app/"
// },
// ];

// export default function App() {
//   const [status, setStatus] = useState("idle");
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const els = document.querySelectorAll(".reveal");
//     const obs = new IntersectionObserver(
//       (entries) =>
//         entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
//       { threshold: 0.15 }
//     );
//     els.forEach((el) => obs.observe(el));
//     return () => obs.disconnect();
//   }, []);

//   async function submit(e) {
//     e.preventDefault();
//     setStatus("sending");

//     try {
//       const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
//         method: "POST",
//         headers: {
//           Accept: "application/json"
//         },
//         body: new FormData(e.target)
//       });

//       if (res.ok) {
//         setStatus("sent");
//         e.target.reset();
//       } else {
//         setStatus("error");
//       }
//     } catch {
//       setStatus("error");
//     }
//   }

//   return (
//     <>
//       <style>{`
// @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

// :root{
// --bg:#0c0d12;
// --surface:#14161d;
// --surface2:#1b1e27;
// --border:#262a35;
// --text:#eceef4;
// --muted:#8d93a3;
// --accent:#8b7cff;
// --accent2:#f5b041;
// }

// *{margin:0;padding:0;box-sizing:border-box;scroll-behavior:smooth;}
// body{background:var(--bg);color:var(--text);font-family:'Inter',sans-serif;}
// h1,h2,h3{font-family:'Space Grotesk',sans-serif;}
// a{text-decoration:none;color:inherit;}

// @media (prefers-reduced-motion:reduce){
// *{animation:none !important;transition:none !important;}
// }

// ::selection{background:var(--accent);color:#000;}

// :focus-visible{outline:2px solid var(--accent2);outline-offset:3px;}

// /* ===== keyframes ===== */
// @keyframes fadeInUp{from{opacity:0;transform:translateY(28px);}to{opacity:1;transform:translateY(0);}}
// @keyframes blink{50%{opacity:0;}}
// @keyframes floatGlow{0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(20px,-15px) scale(1.08);}}
// @keyframes popIn{from{opacity:0;transform:scale(.8) translateY(10px);}to{opacity:1;transform:scale(1) translateY(0);}}

// .eyebrow{
// font-family:'JetBrains Mono',monospace;
// color:var(--accent2);
// font-size:13px;
// letter-spacing:.5px;
// margin-bottom:10px;
// display:inline-block;
// }

// /* ===== nav ===== */
// .nav{
// position:sticky;top:0;z-index:100;
// display:flex;justify-content:space-between;align-items:center;
// padding:16px 8%;
// background:rgba(12,13,18,.85);
// backdrop-filter:blur(12px);
// border-bottom:1px solid var(--border);
// }
// .navLeft{display:flex;align-items:center;gap:10px;}
// .dot{width:10px;height:10px;border-radius:50%;display:inline-block;}
// .dot.red{background:#ff5f57;}
// .dot.yellow{background:#febc2e;}
// .dot.green{background:#28c840;}
// .logo{
// font-family:'JetBrains Mono',monospace;
// font-size:16px;
// color:var(--text);
// margin-left:8px;
// }
// .links{display:flex;gap:34px;font-size:15px;}
// .links a{position:relative;color:var(--muted);transition:color .3s;padding-bottom:4px;}
// .links a::after{
// content:'';position:absolute;left:0;bottom:0;height:2px;width:0;
// background:var(--accent);transition:width .3s;
// }
// .links a:hover{color:var(--text);}
// .links a:hover::after{width:100%;}
// .menu{display:none;font-size:26px;cursor:pointer;color:var(--text);}

// @media(max-width:768px){
// .links{
// position:absolute;left:0;top:64px;width:100%;
// background:var(--surface);flex-direction:column;text-align:center;
// padding:20px;display:none;gap:20px;border-bottom:1px solid var(--border);
// }
// .links.show{display:flex;}
// .menu{display:block;}
// }

// /* ===== hero ===== */
// .hero{
// position:relative;
// display:grid;grid-template-columns:1.1fr .9fr;align-items:center;
// padding:100px 8% 80px;gap:60px;min-height:88vh;overflow:hidden;
// }
// .heroGlow{
// position:absolute;width:420px;height:420px;border-radius:50%;
// background:radial-gradient(circle,rgba(139,124,255,.28),transparent 70%);
// top:-100px;right:10%;
// animation:floatGlow 9s ease-in-out infinite;
// pointer-events:none;
// }
// @media(max-width:900px){.hero{grid-template-columns:1fr;text-align:center;padding-top:70px;}.heroGlow{display:none;}}

// .heroText{animation:fadeInUp .8s ease both;}
// .heroText h1{font-size:50px;font-weight:700;margin-bottom:10px;line-height:1.15;}
// .heroText h2{
// font-size:20px;font-weight:500;color:var(--muted);margin-bottom:22px;
// font-family:'JetBrains Mono',monospace;
// }
// .cursor{border-right:2px solid var(--accent2);padding-right:4px;animation:blink 1s step-end infinite;}
// .bioText{color:var(--muted);line-height:1.8;max-width:520px;}
// @media(max-width:900px){.bioText{margin:0 auto;}}

// .btns{display:flex;gap:16px;margin-top:34px;flex-wrap:wrap;}
// @media(max-width:900px){.btns{justify-content:center;}}

// .btn{
// padding:14px 26px;border-radius:10px;font-weight:600;font-size:15px;
// transition:transform .3s,box-shadow .3s,background .3s;display:inline-block;
// }
// .btn.primary{background:var(--accent);color:#0c0d12;}
// .btn.primary:hover{transform:translateY(-3px);box-shadow:0 10px 26px rgba(139,124,255,.35);}
// .btn.outline{border:1.5px solid var(--border);color:var(--text);}
// .btn.outline:hover{border-color:var(--accent2);transform:translateY(-3px);}

// /* ===== hero code card ===== */
// .heroVisual{display:flex;justify-content:center;animation:fadeInUp .8s ease .15s both;}
// .codeCard{
// width:100%;max-width:380px;background:var(--surface);
// border:1px solid var(--border);border-radius:14px;overflow:hidden;
// box-shadow:0 24px 60px rgba(0,0,0,.45);
// transition:transform .4s;
// }
// .codeCard:hover{transform:translateY(-6px);}
// .codeCardHeader{
// display:flex;align-items:center;gap:10px;
// padding:12px 16px;background:var(--surface2);border-bottom:1px solid var(--border);
// }
// .avatar{
// width:20px;height:20px;border-radius:50%;
// border:1px solid var(--border);background:var(--bg);object-fit:cover;
// }
// .fileName{
// margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--muted);
// }
// .codeBody{
// padding:22px 20px;font-family:'JetBrains Mono',monospace;font-size:13.5px;
// line-height:1.9;color:#c9d1ec;white-space:pre-wrap;
// }

// /* ===== sections ===== */
// .section{padding:90px 8%;}
// .section h2{font-size:36px;margin-bottom:30px;font-weight:700;}
// .reveal{opacity:0;transform:translateY(40px);transition:opacity .8s ease,transform .8s ease;}
// .reveal.visible{opacity:1;transform:translateY(0);}

// .text{max-width:820px;line-height:1.9;color:var(--muted);font-size:17px;}

// /* ===== skills ===== */
// .skillBox{display:flex;flex-wrap:wrap;gap:14px;margin-top:10px;}
// .skill{
// font-family:'JetBrains Mono',monospace;font-size:14px;
// padding:10px 18px;background:var(--surface);border:1px solid var(--border);
// border-radius:8px;transition:.3s;opacity:0;
// animation:popIn .5s ease forwards;
// }
// .reveal.visible .skill{opacity:1;}
// .skill:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-3px);}

// /* ===== projects ===== */
// .projectGrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:26px;margin-top:10px;}
// .card{
// background:var(--surface);border:1px solid var(--border);border-radius:14px;
// padding:26px;transition:.35s;opacity:0;animation:fadeInUp .6s ease forwards;
// }
// .reveal.visible .card{opacity:1;}
// .card:hover{transform:translateY(-8px);border-color:var(--accent);box-shadow:0 16px 34px rgba(139,124,255,.18);}
// .cardTop{display:flex;align-items:baseline;gap:10px;margin-bottom:14px;}
// .cardIndex{font-family:'JetBrains Mono',monospace;color:var(--accent2);font-size:14px;}
// .card h3{font-size:22px;}
// .card p{color:var(--muted);line-height:1.75;margin-bottom:14px;font-size:15px;}
// .card small{display:block;font-family:'JetBrains Mono',monospace;font-size:12.5px;color:var(--accent);margin-bottom:18px;}
// .cardBtns{display:flex;gap:12px;flex-wrap:wrap;}
// .cardBtns a{
// padding:9px 16px;border-radius:8px;font-size:14px;font-weight:600;
// border:1.5px solid var(--border);transition:.3s;
// }
// .cardBtns a:first-child{background:var(--accent);color:#0c0d12;border-color:var(--accent);}
// .cardBtns a:hover{transform:translateY(-2px);}

// /* ===== contact ===== */
// .contactForm{max-width:640px;display:flex;flex-direction:column;gap:16px;margin-top:10px;}
// .contactForm input,.contactForm textarea{
// padding:15px 16px;background:var(--surface);border:1px solid var(--border);
// border-radius:10px;font-size:15px;color:var(--text);outline:none;
// font-family:'Inter',sans-serif;transition:border-color .3s;
// }
// .contactForm input:focus,.contactForm textarea:focus{border-color:var(--accent);}
// .contactForm button{cursor:pointer;border:none;width:fit-content;}
// .success{color:#7ee787;font-weight:600;font-size:14px;}
// .error{color:#ff6b6b;font-weight:600;font-size:14px;}

// .social{display:flex;gap:26px;margin-top:36px;flex-wrap:wrap;}
// .social a{
// font-family:'JetBrains Mono',monospace;font-size:14px;color:var(--muted);
// transition:.3s;
// }
// .social a:hover{color:var(--accent);transform:translateY(-3px);}

// footer{padding:40px 8%;border-top:1px solid var(--border);margin-top:40px;color:var(--muted);}
// footer h3{color:var(--text);font-family:'Space Grotesk',sans-serif;margin-bottom:8px;}
// footer p{margin-bottom:10px;font-size:14px;}
// footer span{font-size:13px;color:#5f6577;}

// @media(max-width:768px){
// .section{padding:60px 6%;}
// .section h2{font-size:28px;}
// .card{text-align:left;}
// }
//       `}</style>

//       <nav className="nav">
//         <div className="navLeft">
//           <span className="dot red"></span>
//           <span className="dot yellow"></span>
//           <span className="dot green"></span>
//           <span className="logo">~/{profile.name.split(" ")[0].toLowerCase()}</span>
//         </div>

//         <div className={`links ${open ? "show" : ""}`}>
//           <a href="#about">About</a>
//           <a href="#skills">Skills</a>
//           <a href="#projects">Projects</a>
//           <a href="#contact">Contact</a>
//         </div>

//         <div className="menu" onClick={() => setOpen(!open)}>
//           ☰
//         </div>
//       </nav>

//       <section className="hero">
//         <div className="heroGlow"></div>

//         <div className="heroText">
//           <span className="eyebrow">$ whoami</span>
//           <h1>{profile.name}</h1>
//           <h2>
//             <span className="cursor">{profile.role}</span>
//           </h2>
//           <p className="bioText">{profile.bio}</p>

//           <div className="btns">
//             <a href="#projects" className="btn primary">
//               View Projects
//             </a>
//             <a href={profile.resume} download className="btn outline">
//               Download Resume
//             </a>
//           </div>
//         </div>

//         <div className="heroVisual">
//           <div className="codeCard">
//             <div className="codeCardHeader">
//               <span className="dot red"></span>
//               <span className="dot yellow"></span>
//               <span className="dot green"></span>
//               <img className="avatar" src={profile.photo} alt={profile.name} />
//               <span className="fileName">profile.json</span>
//             </div>
//             <pre className="codeBody">{`{
//   "name": "${profile.name}",
//   "role": "${profile.role}",
//   "stack": ["React", "Node.js", "MongoDB"],
//   "status": "available_for_hire"
// }`}</pre>
//           </div>
//         </div>
//       </section>

//       {/* ================= ABOUT ================= */}
//       <section id="about" className="section reveal">
//         <span className="eyebrow">$ cat about.md</span>
//         <h2>About Me</h2>
//         <p className="text">
//           Hi, I'm a Full Stack Developer passionate about creating modern, responsive, and scalable web applications. I specialize in the MERN Stack (MongoDB, Express.js, React.js, Node.js) and Java, with a strong foundation in Data Structures & Algorithms. I enjoy turning ideas into real-world products, solving complex problems, and continuously exploring new technologies. My goal is to build impactful software that delivers great user experiences while maintaining clean, efficient, and maintainable code.
//         </p>
//       </section>

//       {/* ================= SKILLS ================= */}
//       <section id="skills" className="section reveal">
//         <span className="eyebrow">$ ls skills/</span>
//         <h2>Skills</h2>
//         <div className="skillBox">
//           {skills.map((item, i) => (
//             <span key={item} className="skill" style={{ animationDelay: `${i * 0.06}s` }}>
//               {item}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* ================= PROJECTS ================= */}
//       <section id="projects" className="section reveal">
//         <span className="eyebrow">$ cat projects.json</span>
//         <h2>Projects</h2>
//         <div className="projectGrid">
//           {projects.map((p, i) => (
//             <div className="card" key={p.title} style={{ animationDelay: `${i * 0.12}s` }}>
//               <div className="cardTop">
//                 <span className="cardIndex">0{i + 1}</span>
//                 <h3>{p.title}</h3>
//               </div>
//               <p>{p.desc}</p>
//               <small>{p.tech}</small>
//               <div className="cardBtns">
//                 <a href={p.github} target="_blank">
//                   GitHub
//                 </a>
//                 <a href={p.live} target="_blank">
//                   Live Demo
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= CONTACT ================= */}
//       <section id="contact" className="section reveal">
//         <span className="eyebrow">$ send --message</span>
//         <h2>Contact Me</h2>

//         <form className="contactForm" onSubmit={submit}>
//           <input type="text" name="name" placeholder="Your Name" required />
//           <input type="email" name="email" placeholder="Your Email" required />
//           <textarea name="message" rows="6" placeholder="Write your message..." required />

//           <button type="submit" className="btn primary" disabled={status === "sending"}>
//             {status === "sending" ? "Sending..." : "Send Message"}
//           </button>

//           {status === "sent" && <p className="success">✅ Message Sent Successfully.</p>}
//           {status === "error" && <p className="error">❌ Something went wrong.</p>}
//         </form>

//         <div className="social">
//           <a href={`mailto:${profile.email}`}>Email</a>
//           <a href={profile.github} target="_blank">
//             GitHub
//           </a>
//           <a href={profile.linkedin} target="_blank">
//             LinkedIn
//           </a>
//         </div>
//       </section>

//       {/* ================= FOOTER ================= */}
      
//     </>
//   );
// }
// --------------------
// -------------------------------------------------
import { useState, useEffect } from "react";

const FORMSPREE_ID = "mjgqprdk";

const profile = {
  name: "Raushan Kumar",
  role: "Full Stack MERN Developer",
  tagline:
    "I build modern, scalable and responsive web applications using the MERN Stack.",
  email: "raushank7460@gmail.com",
  github: "https://github.com/raushank7460",
  linkedin: "https://www.linkedin.com/in/raushan-kumar-aaa146333/",
  instagram: "https://www.instagram.com/your_username",
  facebook: "https://www.facebook.com/your_username",
  resume: "src/Raushan_Kumar_Resumes.pdf",
  photo: "#",
  bio:
    "💻 Full Stack Developer | Java & MERN Stack | DSA Enthusiast | Building scalable web applications | Open Source Learner | Always learning, always building 🚀."

};

const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "REST API",
  "Git",
  "GitHub",
  "Java",
  "DSA"
];

const projects = [
  {
  title: "ShopNest",
  desc: "A full-stack MERN e-commerce platform with secure authentication, product browsing, shopping cart, order management, and an admin dashboard for managing products and orders.",
  tech: "React • Node.js • Express.js • MongoDB • JWT • REST API",
  github: "#",
  live: "#"
},
  {
  title: "Expense Tracker",
  desc: "A MERN-based expense tracking application that helps users manage income and expenses, view transaction history, and monitor their financial balance through an intuitive dashboard.",
  tech: "React • Node.js • Express.js • MongoDB • JWT • REST API",
  github: "https://github.com/raushank7460/track-expanse",
  live: "https://track-expanse.vercel.app/"
},
{
  title: "TaskFlow",
  desc: "A MERN-based task management application that enables users to create, update, organize, and track tasks with secure authentication and a responsive user interface.",
  tech: "React • Node.js • Express.js • MongoDB • JWT • REST API",
  github: "https://github.com/raushank7460/TaskFlow",
  live: "https://task-flow-six-alpha-29.vercel.app/"
},
];

export default function App() {
  const [status, setStatus] = useState("idle");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  async function submit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: new FormData(e.target)
      });

      if (res.ok) {
        setStatus("sent");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

:root{
--bg:#0c0d12;
--surface:#14161d;
--surface2:#1b1e27;
--border:#262a35;
--text:#eceef4;
--muted:#8d93a3;
--accent:#8b7cff;
--accent2:#f5b041;
}

*{margin:0;padding:0;box-sizing:border-box;scroll-behavior:smooth;}
body{background:var(--bg);color:var(--text);font-family:'Inter',sans-serif;}
h1,h2,h3{font-family:'Space Grotesk',sans-serif;}
a{text-decoration:none;color:inherit;}

@media (prefers-reduced-motion:reduce){
*{animation:none !important;transition:none !important;}
}

::selection{background:var(--accent);color:#000;}

:focus-visible{outline:2px solid var(--accent2);outline-offset:3px;}

/* ===== keyframes ===== */
@keyframes fadeInUp{from{opacity:0;transform:translateY(28px);}to{opacity:1;transform:translateY(0);}}
@keyframes blink{50%{opacity:0;}}
@keyframes floatGlow{0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(20px,-15px) scale(1.08);}}
@keyframes popIn{from{opacity:0;transform:scale(.8) translateY(10px);}to{opacity:1;transform:scale(1) translateY(0);}}

.eyebrow{
font-family:'JetBrains Mono',monospace;
color:var(--accent2);
font-size:13px;
letter-spacing:.5px;
margin-bottom:10px;
display:inline-block;
}

/* ===== nav ===== */
.nav{
position:sticky;top:0;z-index:100;
display:flex;justify-content:space-between;align-items:center;
padding:16px 8%;
background:rgba(12,13,18,.85);
backdrop-filter:blur(12px);
border-bottom:1px solid var(--border);
}
.navLeft{display:flex;align-items:center;gap:10px;}
.dot{width:10px;height:10px;border-radius:50%;display:inline-block;}
.dot.red{background:#ff5f57;}
.dot.yellow{background:#febc2e;}
.dot.green{background:#28c840;}
.logo{
font-family:'JetBrains Mono',monospace;
font-size:16px;
color:var(--text);
margin-left:8px;
}
.links{display:flex;gap:34px;font-size:15px;}
.links a{position:relative;color:var(--muted);transition:color .3s;padding-bottom:4px;}
.links a::after{
content:'';position:absolute;left:0;bottom:0;height:2px;width:0;
background:var(--accent);transition:width .3s;
}
.links a:hover{color:var(--text);}
.links a:hover::after{width:100%;}
.menu{display:none;font-size:26px;cursor:pointer;color:var(--text);}

@media(max-width:768px){
.links{
position:absolute;left:0;top:64px;width:100%;
background:var(--surface);flex-direction:column;text-align:center;
padding:20px;display:none;gap:20px;border-bottom:1px solid var(--border);
}
.links.show{display:flex;}
.menu{display:block;}
}

/* ===== hero ===== */
.hero{
position:relative;
display:grid;grid-template-columns:1.1fr .9fr;align-items:center;
padding:100px 8% 80px;gap:60px;min-height:88vh;overflow:hidden;
}
.heroGlow{
position:absolute;width:420px;height:420px;border-radius:50%;
background:radial-gradient(circle,rgba(139,124,255,.28),transparent 70%);
top:-100px;right:10%;
animation:floatGlow 9s ease-in-out infinite;
pointer-events:none;
}
@media(max-width:900px){.hero{grid-template-columns:1fr;text-align:center;padding-top:70px;}.heroGlow{display:none;}}

.heroText{animation:fadeInUp .8s ease both;}
.heroText h1{font-size:50px;font-weight:700;margin-bottom:10px;line-height:1.15;}
.heroText h2{
font-size:20px;font-weight:500;color:var(--muted);margin-bottom:22px;
font-family:'JetBrains Mono',monospace;
}
.cursor{border-right:2px solid var(--accent2);padding-right:4px;animation:blink 1s step-end infinite;}
.bioText{color:var(--muted);line-height:1.8;max-width:520px;}
@media(max-width:900px){.bioText{margin:0 auto;}}

.btns{display:flex;gap:16px;margin-top:34px;flex-wrap:wrap;}
@media(max-width:900px){.btns{justify-content:center;}}

.btn{
padding:14px 26px;border-radius:10px;font-weight:600;font-size:15px;
transition:transform .3s,box-shadow .3s,background .3s;display:inline-block;
}
.btn.primary{background:var(--accent);color:#0c0d12;}
.btn.primary:hover{transform:translateY(-3px);box-shadow:0 10px 26px rgba(139,124,255,.35);}
.btn.outline{border:1.5px solid var(--border);color:var(--text);}
.btn.outline:hover{border-color:var(--accent2);transform:translateY(-3px);}

/* ===== hero code card ===== */
.heroVisual{display:flex;justify-content:center;animation:fadeInUp .8s ease .15s both;}
.codeCard{
width:100%;max-width:380px;background:var(--surface);
border:1px solid var(--border);border-radius:14px;overflow:hidden;
box-shadow:0 24px 60px rgba(0,0,0,.45);
transition:transform .4s;
}
.codeCard:hover{transform:translateY(-6px);}
.codeCardHeader{
display:flex;align-items:center;gap:10px;
padding:12px 16px;background:var(--surface2);border-bottom:1px solid var(--border);
}
.avatar{
width:20px;height:20px;border-radius:50%;
border:1px solid var(--border);background:var(--bg);object-fit:cover;
}
.fileName{
margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--muted);
}
.codeBody{
padding:22px 20px;font-family:'JetBrains Mono',monospace;font-size:13.5px;
line-height:1.9;color:#c9d1ec;white-space:pre-wrap;
}

/* ===== sections ===== */
.section{padding:90px 8%;}
.section h2{font-size:36px;margin-bottom:30px;font-weight:700;}
.reveal{opacity:0;transform:translateY(40px);transition:opacity .8s ease,transform .8s ease;}
.reveal.visible{opacity:1;transform:translateY(0);}

.text{max-width:820px;line-height:1.9;color:var(--muted);font-size:17px;}

/* ===== skills ===== */
.skillBox{display:flex;flex-wrap:wrap;gap:14px;margin-top:10px;}
.skill{
font-family:'JetBrains Mono',monospace;font-size:14px;
padding:10px 18px;background:var(--surface);border:1px solid var(--border);
border-radius:8px;transition:.3s;opacity:0;
animation:popIn .5s ease forwards;
}
.reveal.visible .skill{opacity:1;}
.skill:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-3px);}

/* ===== projects ===== */
.projectGrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:26px;margin-top:10px;}
.card{
background:var(--surface);border:1px solid var(--border);border-radius:14px;
padding:26px;transition:.35s;opacity:0;animation:fadeInUp .6s ease forwards;
}
.reveal.visible .card{opacity:1;}
.card:hover{transform:translateY(-8px);border-color:var(--accent);box-shadow:0 16px 34px rgba(139,124,255,.18);}
.cardTop{display:flex;align-items:baseline;gap:10px;margin-bottom:14px;}
.cardIndex{font-family:'JetBrains Mono',monospace;color:var(--accent2);font-size:14px;}
.card h3{font-size:22px;}
.card p{color:var(--muted);line-height:1.75;margin-bottom:14px;font-size:15px;}
.card small{display:block;font-family:'JetBrains Mono',monospace;font-size:12.5px;color:var(--accent);margin-bottom:18px;}
.cardBtns{display:flex;gap:12px;flex-wrap:wrap;}
.cardBtns a{
padding:9px 16px;border-radius:8px;font-size:14px;font-weight:600;
border:1.5px solid var(--border);transition:.3s;
}
.cardBtns a:first-child{background:var(--accent);color:#0c0d12;border-color:var(--accent);}
.cardBtns a:hover{transform:translateY(-2px);}

/* ===== contact ===== */
.contactForm{max-width:640px;display:flex;flex-direction:column;gap:16px;margin-top:10px;}
.contactForm input,.contactForm textarea{
padding:15px 16px;background:var(--surface);border:1px solid var(--border);
border-radius:10px;font-size:15px;color:var(--text);outline:none;
font-family:'Inter',sans-serif;transition:border-color .3s;
}
.contactForm input:focus,.contactForm textarea:focus{border-color:var(--accent);}
.contactForm button{cursor:pointer;border:none;width:fit-content;}
.success{color:#7ee787;font-weight:600;font-size:14px;}
.error{color:#ff6b6b;font-weight:600;font-size:14px;}

.social{display:flex;gap:26px;margin-top:36px;flex-wrap:wrap;}
.social a{
font-family:'JetBrains Mono',monospace;font-size:14px;color:var(--muted);
transition:.3s;
}
.social a:hover{color:var(--accent);transform:translateY(-3px);}

footer{padding:40px 8%;border-top:1px solid var(--border);margin-top:40px;color:var(--muted);}
footer h3{color:var(--text);font-family:'Space Grotesk',sans-serif;margin-bottom:8px;}
footer p{margin-bottom:10px;font-size:14px;}
footer span{font-size:13px;color:#5f6577;}

.footerSocial{display:flex;gap:16px;margin:18px 0;}
.footerSocial a{
width:38px;height:38px;border-radius:50%;
display:flex;align-items:center;justify-content:center;
background:var(--surface);border:1px solid var(--border);
color:var(--muted);transition:.3s;
}
.footerSocial a svg{width:18px;height:18px;}
.footerSocial a:hover{
color:var(--bg);background:var(--accent);border-color:var(--accent);
transform:translateY(-4px);
}

@media(max-width:768px){
.section{padding:60px 6%;}
.section h2{font-size:28px;}
.card{text-align:left;}
}
      `}</style>

      <nav className="nav">
        <div className="navLeft">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="logo">~/{profile.name.split(" ")[0].toLowerCase()}</span>
        </div>

        <div className={`links ${open ? "show" : ""}`}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="menu" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </nav>

      <section className="hero">
        <div className="heroGlow"></div>

        <div className="heroText">
          <span className="eyebrow">$ whoami</span>
          <h1>{profile.name}</h1>
          <h2>
            <span className="cursor">{profile.role}</span>
          </h2>
          <p className="bioText">{profile.bio}</p>

          <div className="btns">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href={profile.resume} download className="btn outline">
              Download Resume
            </a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="codeCard">
            <div className="codeCardHeader">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <img className="avatar" src={profile.photo} alt={profile.name} />
              <span className="fileName">profile.json</span>
            </div>
            <pre className="codeBody">{`{
  "name": "${profile.name}",
  "role": "${profile.role}",
  "stack": ["React", "Node.js", "MongoDB"],
  "status": "available_for_hire"
}`}</pre>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section reveal">
        <span className="eyebrow">$ cat about.md</span>
        <h2>About Me</h2>
        <p className="text">
          Hi, I'm a Full Stack Developer passionate about creating modern, responsive, and scalable web applications. I specialize in the MERN Stack (MongoDB, Express.js, React.js, Node.js) and Java, with a strong foundation in Data Structures & Algorithms. I enjoy turning ideas into real-world products, solving complex problems, and continuously exploring new technologies. My goal is to build impactful software that delivers great user experiences while maintaining clean, efficient, and maintainable code.
        </p>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="section reveal">
        <span className="eyebrow">$ ls skills/</span>
        <h2>Skills</h2>
        <div className="skillBox">
          {skills.map((item, i) => (
            <span key={item} className="skill" style={{ animationDelay: `${i * 0.06}s` }}>
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section reveal">
        <span className="eyebrow">$ cat projects.json</span>
        <h2>Projects</h2>
        <div className="projectGrid">
          {projects.map((p, i) => (
            <div className="card" key={p.title} style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="cardTop">
                <span className="cardIndex">0{i + 1}</span>
                <h3>{p.title}</h3>
              </div>
              <p>{p.desc}</p>
              <small>{p.tech}</small>
              <div className="cardBtns">
                <a href={p.github} target="_blank">
                  GitHub
                </a>
                <a href={p.live} target="_blank">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="section reveal">
        <span className="eyebrow">$ send --message</span>
        <h2>Contact Me</h2>

        <form className="contactForm" onSubmit={submit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="6" placeholder="Write your message..." required />

          <button type="submit" className="btn primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && <p className="success">✅ Message Sent Successfully.</p>}
          {status === "error" && <p className="error">❌ Something went wrong.</p>}
        </form>

        <div className="social">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.github} target="_blank">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank">
            LinkedIn
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <h3>{profile.name}</h3>
        <p>Built with ❤️ using React</p>

        <div className="footerSocial">
          <a href={profile.github} target="_blank" aria-label="GitHub" title="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.14c-3.2.35-3.87-1.34-4.12-1.93-.14-.35-.74-1.43-1.26-1.72-.43-.23-1.05-.8-.02-.82.97-.02 1.66.89 1.89 1.26 1.1 1.85 2.87 1.33 3.57 1.01.11-.79.45-1.33.82-1.64-2.85-.32-5.83-1.42-5.83-6.32 0-1.39.5-2.53 1.31-3.42-.13-.32-.57-1.63.13-3.39 0 0 1.07-.34 3.5 1.3a12 12 0 0 1 6.38 0c2.43-1.64 3.5-1.3 3.5-1.3.7 1.76.26 3.07.13 3.39.81.89 1.31 2.02 1.31 3.42 0 4.91-3 5.99-5.86 6.31.46.4.86 1.17.86 2.37v3.51c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
          </a>
          <a href={profile.linkedin} target="_blank" aria-label="LinkedIn" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.93v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>
          </a>
          <a href={profile.instagram} target="_blank" aria-label="Instagram" title="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.24 2.23.41.56.21.96.47 1.38.89.42.42.68.82.89 1.38.17.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.8-.41 2.23-.21.56-.47.96-.89 1.38-.42.42-.82.68-1.38.89-.42.17-1.06.36-2.23.41-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.24-2.23-.41a3.72 3.72 0 0 1-1.38-.89 3.72 3.72 0 0 1-.89-1.38c-.17-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.24-1.8.41-2.23.21-.56.47-.96.89-1.38.42-.42.82-.68 1.38-.89.42-.17 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.8.31-1.48.72-2.14 1.38a5.9 5.9 0 0 0-1.38 2.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.48 1.38 2.14a5.9 5.9 0 0 0 2.14 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.8-.31 1.48-.72 2.14-1.38a5.9 5.9 0 0 0 1.38-2.14c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.14A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-10.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z"/></svg>
          </a>
          <a href={profile.facebook} target="_blank" aria-label="Facebook" title="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.79c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z"/></svg>
          </a>
        </div>

        <span>© {new Date().getFullYear()} All Rights Reserved.</span>
      </footer>
    </>
  );
}