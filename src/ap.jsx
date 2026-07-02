
// import { useState } from "react";

// // ── Get your form ID from formspree.io (free) and paste it below ──
// const FORMSPREE_ID = "mjgqprdk";

// const profile = {
//   name: "Raushan Kumar",
//   role: "Full Stack Developer",
//   tagline: "I build things for the web with React, Node & MongoDB.",
//   email: "raushank7460@gmail.com",
//   github: "https://github.com/raushank7460",
//   linkedin: "https://www.linkedin.com/in/raushan-kumar-aaa146333/",
//   bio: "Hi, I'm a Full Stack Developer passionate about creating modern, responsive, and scalable web applications. I specialize in the MERN Stack (MongoDB, Express.js, React.js, Node.js) and Java, with a strong foundation in Data Structures & Algorithms. I enjoy turning ideas into real-world products, solving complex problems, and continuously exploring new technologies. My goal is to build impactful software that delivers great user experiences while maintaining clean, efficient, and maintainable codee",

//   photo: "src/my.jpeg", // paste YOUR image URL here before deploying — this is the only place the photo can be changed
// };
// const skills = ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Tailwind", "Git", "REST APIs","Data Structure And Alogrithm"];
// const projects = [
//   { title: "Project One", desc: "Short description of what it does and the problem it solves.", tech: "React · Node · MongoDB", github: "#", live: "#" },
//   { title: "Project Two", desc: "Short description of what it does and the problem it solves.", tech: "React · Express", github: "#", live: "#" },
// ];
// const navItems = ["about", "skills", "projects", "contact"];

// export default function App() {
//   const [status, setStatus] = useState("idle");

//   const submit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");
//     const form = e.target;
//     try {
//       const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
//         method: "POST",
//         headers: { Accept: "application/json" },
//         body: new FormData(form),
//       });
//       if (res.ok) { setStatus("sent"); form.reset(); }
//       else setStatus("error");
//     } catch {
//       setStatus("error");
//     }
//   };
//   const initials = profile.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

//   return (
//     <div className="pf">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Inter:wght@400;500;600&display=swap');
//         * { box-sizing:border-box; margin:0; }
//         .pf { background:#0c0d11; color:#ece9e2; font-family:'Inter',sans-serif; min-height:100vh; }
//         a { color:inherit; text-decoration:none; }
//         .serif { font-family:'Fraunces',serif; }
//         .nav { position:sticky; top:0; z-index:10; display:flex; justify-content:space-between; align-items:center;
//           padding:22px 6%; backdrop-filter:blur(10px); background:rgba(12,13,17,.8); border-bottom:1px solid #1e2026; }
//         .brand { font-family:'Fraunces',serif; font-weight:700; letter-spacing:.02em; }
//         .brand span { color:#5ee6c8; }
//         .nav .links { display:flex; gap:28px; }
//         .nav .links a { font-size:.82rem; color:#8d8f97; transition:color .2s; }
//         .nav .links a:hover { color:#5ee6c8; }

//         .hero { display:grid; grid-template-columns:1fr 1.35fr; gap:56px; align-items:center;
//           padding:100px 6% 90px; border-bottom:1px solid #1e2026; }
//         @media (max-width:780px){ .hero{ grid-template-columns:1fr; padding-top:60px; } }
//         .photo-wrap { position:relative; width:min(320px,80%); aspect-ratio:1; margin:0 auto; }
//         .photo-ring { position:absolute; inset:-14px; border:1.5px solid #5ee6c8; border-radius:50%; opacity:.5; }
//         .photo-frame { width:100%; height:100%; border-radius:50%; overflow:hidden; background:linear-gradient(160deg,#1c2f2b,#14161b);
//           display:flex; align-items:center; justify-content:center; }
//         .photo-frame img { width:100%; height:100%; object-fit:cover; filter:grayscale(.15) contrast(1.05); }
//         .photo-frame .initials { font-family:'Fraunces',serif; font-size:4rem; color:#5ee6c8; }

//         .eyebrow { color:#5ee6c8; font-size:.78rem; letter-spacing:.08em; text-transform:uppercase; margin-bottom:16px; }
//         h1 { font-family:'Fraunces',serif; font-size:clamp(2.4rem,5.5vw,4rem); font-weight:700; line-height:1.05; letter-spacing:-.01em; }
//         .role { font-size:1.05rem; color:#5ee6c8; margin-top:12px; }
//         .muted { color:#9a9ca4; max-width:520px; line-height:1.65; margin-top:16px; }
//         .btns { display:flex; gap:14px; margin-top:32px; flex-wrap:wrap; }
//         .btn { font-size:.85rem; padding:14px 24px; border-radius:30px; font-weight:600; transition:.2s; display:inline-block; }
//         .btn:hover { transform:translateY(-2px); }
//         .btn.p { background:#5ee6c8; color:#0c0d11; }
//         .btn.p:hover { box-shadow:0 0 26px rgba(94,230,200,.35); }
//         .btn.g { border:1px solid #2a2d35; color:#c9cbd3; }
//         .btn.g:hover { border-color:#5ee6c8; color:#5ee6c8; }

//         section.block { padding:80px 6%; border-bottom:1px solid #1e2026; max-width:1000px; margin:0 auto; }
//         h2 { font-family:'Fraunces',serif; font-size:1.9rem; font-weight:700; margin:6px 0 26px; }

//         .tags { display:flex; flex-wrap:wrap; gap:10px; }
//         .tag { font-size:.82rem; color:#5ee6c8; background:rgba(94,230,200,.08); border:1px solid rgba(94,230,200,.25);
//           padding:9px 16px; border-radius:20px; }

//         .grid { display:grid; grid-template-columns:1fr 1fr; gap:18px; }
//         @media (max-width:640px){ .grid{ grid-template-columns:1fr; } }
//         .card { background:#14161b; border:1px solid #1e2026; border-radius:10px; padding:26px; transition:border-color .2s; }
//         .card:hover { border-color:#5ee6c840; }
//         .card h3 { font-size:1.08rem; font-weight:600; }
//         .card p { color:#9a9ca4; margin-top:8px; font-size:.92rem; line-height:1.55; }
//         .card .tech { margin-top:16px; font-size:.75rem; color:#5c5e66; }
//         .card .cardlinks { display:flex; gap:20px; margin-top:16px; font-size:.82rem; }
//         .card .cardlinks a { color:#c9cbd3; }
//         .card .cardlinks a:hover { color:#5ee6c8; }

//         form { display:flex; flex-direction:column; gap:12px; max-width:440px; }
//         input, textarea { background:#14161b; border:1px solid #1e2026; border-radius:8px; padding:13px 16px;
//           color:#ece9e2; font-size:.95rem; font-family:inherit; transition:border-color .2s; }
//         input:focus, textarea:focus { outline:none; border-color:#5ee6c8; }
//         .send { align-self:flex-start; border:none; cursor:pointer; }
//         .send:disabled { opacity:.6; cursor:default; }
//         .ok { color:#5ee6c8; font-size:.85rem; }
//         .err { color:#ff8a7a; font-size:.85rem; }
//         .social { display:flex; gap:22px; margin-top:30px; }
//         .social a { color:#9a9ca4; font-size:.85rem; }
//         .social a:hover { color:#5ee6c8; }
//         .foot { padding:28px 6%; color:#5c5e66; font-size:.78rem; display:flex; justify-content:space-between; flex-wrap:wrap; gap:10px; }
//       `}</style>

//       <nav className="nav">
//         <span className="brand">{profile.name.split(" ")[0]}<span>.</span></span>
//         <div className="links">{navItems.map(s => <a key={s} href={`#${s}`}>{s}</a>)}</div>
//       </nav>

//       <section className="hero">
//         <div className="photo-wrap">
//           <div className="photo-ring" />
//           <div className="photo-frame">
//             {profile.photo ? <img src={profile.photo} alt={profile.name} /> : <span className="initials">{initials}</span>}
//           </div>
//         </div>
//         <div>
//           <p className="eyebrow">Hello, I'm</p>
//           <h1>{profile.name}</h1>
//           <p className="role">{profile.role}</p>
//           <p className="muted">{profile.tagline}</p>
//           <div className="btns">
//             <a href="#projects" className="btn p">View projects →</a>
//             <a href="#contact" className="btn g">Get in touch</a>
//           </div>
//         </div>
//       </section>

//       <section id="about" className="block">
//         <p className="eyebrow">About</p>
//         <h2>A bit about me</h2>
//         <p className="muted">{profile.bio}</p>
//       </section>

//       <section id="skills" className="block">
//         <p className="eyebrow">Skills</p>
//         <h2>What I work with</h2>
//         <div className="tags">{skills.map(s => <span key={s} className="tag">{s}</span>)}</div>
//       </section>

//       <section id="projects" className="block">
//         <p className="eyebrow">Projects</p>
//         <h2>Things I've built</h2>
//         <div className="grid">
//           {projects.map(p => (
//             <div key={p.title} className="card">
//               <h3>{p.title}</h3>
//               <p>{p.desc}</p>
//               <p className="tech">{p.tech}</p>
//               <div className="cardlinks">
//                 <a href={p.github}>↗ Source</a>
//                 <a href={p.live}>↗ Live demo</a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section id="contact" className="block" style={{ borderBottom: "none" }}>
//         <p className="eyebrow">Contact</p>
//         <h2>Let's talk</h2>
//         <form onSubmit={submit}>
//           <input required name="name" placeholder="Name" />
//           <input required name="email" type="email" placeholder="Email" />
//           <textarea required name="message" placeholder="Message" rows={4} />
//           <button className="btn p send" disabled={status === "sending"}>
//             {status === "sending" ? "Sending..." : "Send message →"}
//           </button>
//           {status === "sent" && <p className="ok">✓ Message sent!</p>}
//           {status === "error" && <p className="err">✗ Something went wrong, try again.</p>}
//         </form>
//         <div className="social">
//           <a href={`mailto:${profile.email}`}>Email</a>
//           <a href={profile.github}>GitHub</a>
//           <a href={profile.linkedin}>LinkedIn</a>
//         </div>
//       </section>

//       <footer className="foot">
//         <span>© {new Date().getFullYear()} {profile.name}</span>
//         <span>Built with React</span>
//       </footer>
//     </div>
//   );
// }
// --------------------------------------------