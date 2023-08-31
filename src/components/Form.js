import React from "react";

function FormBlur() {
  let url = "#";
  return (
    <div className="blurContainer bodyBlur">
      {/* Formulaire */}
      
      <div className="flex">
        <form className="flex">
        <p>Bienvenue</p>
          <input type="email" placeholder="Email" /> <br />
          <input type="password" placeholder="Password" /> <br />
          <input type="button" value="Submit" /> <br />
          <a href={url}>Mot de passe oublié</a>
        </form>
      </div>
      {/* Ombre */}
      <div class="drop drop-1"></div>
      <div class="drop drop-2"></div>
      <div class="drop drop-3"></div>
      <div class="drop drop-4"></div>
      <div class="drop drop-5"></div>
    </div>
  );
}

export default FormBlur;