
import { useState } from "react";

const FORMSPREE_ID = "mjgqprdk";

const profile = {
  name: "Raushan Kumar",
  role: "Full Stack MERN Developer",
  tagline:
    "I build modern, scalable and responsive web applications using the MERN Stack.",
  email: "raushank7460@gmail.com",
  github: "https://github.com/raushank7460",
  linkedin: "https://www.linkedin.com/in/raushan-kumar-aaa146333/",
  resume: "/resume.pdf",
  photo: "src/my.jpeg",
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
  github: "#",
  live: "#"
},
{
  title: "TaskFlow",
  desc: "A MERN-based task management application that enables users to create, update, organize, and track tasks with secure authentication and a responsive user interface.",
  tech: "React • Node.js • Express.js • MongoDB • JWT • REST API",
  github: "#",
  live: "#"
},
];

export default function App() {
  const [status, setStatus] = useState("idle");
  const [open, setOpen] = useState(false);

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
*{
margin:0;
padding:0;
box-sizing:border-box;
scroll-behavior:smooth;
font-family:Inter,sans-serif;
}

body{
background:#0b1120;
color:#fff;
}

a{
text-decoration:none;
color:inherit;
}

.nav{
position:sticky;
top:0;
display:flex;
justify-content:space-between;
align-items:center;
padding:18px 8%;
background:#0b1120ee;
backdrop-filter:blur(10px);
z-index:100;
}

.logo{
font-size:28px;
font-weight:700;
color:#38bdf8;
}

.links{
display:flex;
gap:30px;
}

.links a:hover{
color:#38bdf8;
}

.menu{
display:none;
font-size:28px;
cursor:pointer;
}

@media(max-width:768px){

.links{
position:absolute;
left:0;
top:70px;
width:100%;
background:#111827;
flex-direction:column;
text-align:center;
padding:20px;
display:none;
}

.links.show{
display:flex;
}

.menu{
display:block;
}

}

.hero{
display:grid;
grid-template-columns:1fr 1fr;
align-items:center;
padding:70px 8%;
gap:50px;
min-height:90vh;
}

@media(max-width:900px){

.hero{
grid-template-columns:1fr;
text-align:center;
}

}

.hero img{
width:320px;
height:320px;
border-radius:50%;
object-fit:cover;
border:5px solid #38bdf8;
max-width:100%;
}

.hero h1{
font-size:55px;
margin-bottom:15px;
}

.hero h2{
color:#38bdf8;
margin-bottom:20px;
}

.hero p{
color:#cbd5e1;
line-height:1.8;
}

.btns{
display:flex;
gap:15px;
margin-top:30px;
flex-wrap:wrap;
}

.btn{
padding:14px 28px;
border-radius:8px;
background:#38bdf8;
color:#000;
font-weight:700;
}

.btn.outline{
background:none;
border:2px solid #38bdf8;
color:#38bdf8;
}

@media(max-width:900px){

.btns{
justify-content:center;
}

}
      `}</style>

      <nav className="nav">
        <div className="logo">RK.</div>

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

        <div>

          <h1>{profile.name}</h1>

          <h2>{profile.role}</h2>

          <p>{profile.bio}</p>

          <div className="btns">

            <a href="#projects" className="btn">
              Projects
            </a>

            <a href={profile.resume} download className="btn outline">
              Download Resume
            </a>

          </div>

        </div>

        <div style={{display:"flex",justifyContent:"center"}}>

          <img src={profile.photo} alt={profile.name}/>

        </div>

      </section>
            {/* ================= ABOUT ================= */}

      <section id="about" className="section">

        <h2>About Me</h2>

        <p className="text">
          Hi, I'm a Full Stack Developer passionate about creating modern, responsive, and scalable web applications. I specialize in the MERN Stack (MongoDB, Express.js, React.js, Node.js) and Java, with a strong foundation in Data Structures & Algorithms. I enjoy turning ideas into real-world products, solving complex problems, and continuously exploring new technologies. My goal is to build impactful software that delivers great user experiences while maintaining clean, efficient, and maintainable code.

        </p>

      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="section">

        <h2>Skills</h2>

        <div className="skillBox">

          {skills.map((item) => (

            <span key={item} className="skill">
              {item}
            </span>

          ))}

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section">

        <h2>Projects</h2>

        <div className="projectGrid">

          {projects.map((p) => (

            <div className="card" key={p.title}>

              <h3>{p.title}</h3>

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

      {/* ===== CSS ===== */}

      <style>{`

.section{

padding:80px 8%;

}

.section h2{

font-size:40px;

margin-bottom:35px;

text-align:center;

color:#38bdf8;

}

.text{

max-width:900px;

margin:auto;

text-align:center;

line-height:1.8;

color:#cbd5e1;

font-size:18px;

}

.skillBox{

display:flex;

justify-content:center;

flex-wrap:wrap;

gap:15px;

margin-top:35px;

}

.skill{

padding:12px 22px;

background:#111827;

border:1px solid #38bdf8;

border-radius:30px;

transition:.3s;

}

.skill:hover{

background:#38bdf8;

color:#000;

transform:translateY(-4px);

}

.projectGrid{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(300px,1fr));

gap:25px;

margin-top:40px;

}

.card{

background:#111827;

padding:25px;

border-radius:15px;

transition:.3s;

border:1px solid transparent;

}

.card:hover{

transform:translateY(-8px);

border-color:#38bdf8;

}

.card h3{

margin-bottom:15px;

font-size:24px;

}

.card p{

line-height:1.7;

color:#cbd5e1;

margin-bottom:15px;

}

.card small{

display:block;

margin-bottom:20px;

color:#38bdf8;

}

.cardBtns{

display:flex;

gap:15px;

flex-wrap:wrap;

}

.cardBtns a{

padding:10px 18px;

background:#38bdf8;

color:#000;

border-radius:8px;

font-weight:600;

}

.cardBtns a:last-child{

background:none;

border:2px solid #38bdf8;

color:#38bdf8;

}

@media(max-width:768px){

.section{

padding:60px 6%;

}

.section h2{

font-size:32px;

}

.text{

font-size:16px;

}

.card{

text-align:center;

}

.cardBtns{

justify-content:center;

}

}

`}</style>
      {/* ================= CONTACT ================= */}

      <section id="contact" className="section">

        <h2>Contact Me</h2>

        <form className="contactForm" onSubmit={submit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Write your message..."
            required
          />

          <button
            type="submit"
            className="btn"
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "Sending..."
              : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="success">
              ✅ Message Sent Successfully.
            </p>
          )}

          {status === "error" && (
            <p className="error">
              ❌ Something went wrong.
            </p>
          )}

        </form>

        <div className="social">

          <a href={`mailto:${profile.email}`}>
            Email
          </a>

          <a
            href={profile.github}
            target="_blank"
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
          >
            LinkedIn
          </a>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer>

        <h3>{profile.name}</h3>

        <p>
          Built with ❤️ using React
        </p>

        <span>
          © {new Date().getFullYear()} All Rights Reserved.
        </span>

      </footer>

      {/* ================= REMAINING CSS ================= */}

      <style>{`

.contactForm{

max-width:650px;

margin:auto;

display:flex;

flex-direction:column;

gap:18px;

margin-top:35px;

}

.contactForm input,
.contactForm textarea{

padding:16px;

background:#111827;

border:1px solid #334155;

border-radius:10px;

font-size:16px;

color:#fff;

outline:none;

}

.contactForm input:focus,
.contactForm textarea:focus{

border-color:#38bdf8;

}

.contactForm button{

cursor:pointer;

border:none;

}

.success{

color:#22c55e;

font-weight:600;

}

.error{

color:#ef4444;

font-weight:600;

}

.social{

display:flex;

justify-content:center;

gap:30px;

margin-top:45px;

flex-wrap:wrap;

}

.social a{

font-size:18px;

transition:.3s;

}

.social a:hover{

color:#38bdf8;

transform:translateY(-4px);

}

footer{

padding:40px 8%;

text-align:center;

border-top:1px solid #1e293b;

margin-top:60px;

}

footer h3{

color:#38bdf8;

margin-bottom:10px;

font-size:28px;

}

footer p{

color:#cbd5e1;

margin-bottom:12px;

}

footer span{

color:#94a3b8;

font-size:14px;

}

@media(max-width:768px){

.contactForm{

width:100%;

}

.contactForm input,
.contactForm textarea{

font-size:15px;

}

.social{

gap:18px;

}

footer{

padding:30px 6%;

}

}

`}</style>

    </>
  );
}