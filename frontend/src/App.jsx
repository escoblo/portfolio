import { useState } from "react";
import "./style.css";

function App() {

  const [form, setForm] = useState({
    name:"",
    email:"",
    message:""
  });

  async function sendMessage(e){
    e.preventDefault();

    await fetch("http://localhost:5000/contact", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(form)
    });

    alert("Message envoyé !");
  }


  return (
    <div className="container">

      <header>
        <h1>AeroCode</h1>
        <p>Développeur Web Full-Stack</p>
      </header>


      <section>
        <h2>À propos</h2>
        <p>
          Je crée des sites web modernes et des applications
          sur mesure avec React, JavaScript et Node.js.
        </p>
      </section>


      <section>
        <h2>Compétences</h2>

        <div className="cards">
          <div>React / JSX</div>
          <div>JavaScript</div>
          <div>Node.js</div>
          <div>HTML / CSS</div>
          <div>API Web</div>
        </div>

      </section>


      <section>

        <h2>Projets</h2>

        <article className="project">
          <h3>Système de gestion aéroportuaire</h3>

          <p>
            Application web permettant de gérer
            des opérations aéroportuaires avec une interface moderne.
          </p>

          <span>
            React • Node.js • JavaScript
          </span>

        </article>

      </section>


      <section>

        <h2>Contact</h2>

        <form onSubmit={sendMessage}>

          <input
          placeholder="Nom"
          onChange={(e)=>setForm({...form,name:e.target.value})}
          />

          <input
          placeholder="Email"
          onChange={(e)=>setForm({...form,email:e.target.value})}
          />

          <textarea
          placeholder="Votre message"
          onChange={(e)=>setForm({...form,message:e.target.value})}
          />

          <button>
            Envoyer
          </button>

        </form>

      </section>


    </div>
  )
}

export default App;
