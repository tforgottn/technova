import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return(
    <div className="Login">
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <div className="desc">
          <h1>Bienvenido a TechNova CRM</h1>
          <h2>Administración de visitas y clientes</h2>
        </div>
        <button onClick={() => loginWithRedirect()} class="btn">
        <span>Login</span>
        </button>
      </section>
    </div>
    
  ) 
}
<button class="btn">
    <span class="icon">
        <svg viewBox="0 0 175 80" width="40" height="40">
            <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
        </svg>
    </span>
    <span class="text">MENU</span>
</button>


export default LoginButton;