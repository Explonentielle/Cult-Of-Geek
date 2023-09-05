import React from "react";

function FormBlur() {

  return (
    <div className="blurContainer bodyBlur">
      {/* Formulaire */}
      
      <div className="flex">
        <form className="flex">
        <p>Contact</p>
          <input type="email" placeholder="Email" /> <br />
          <textarea name="content" id="content" cols="30" rows="10" placeholder='Votres demande'></textarea>
          <input className="submitContact" type="button" value="Envoyer" /> <br />
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