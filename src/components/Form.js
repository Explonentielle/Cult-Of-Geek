import React from 'react'

const Form = () => {
  return (
    <div className='container'>
      <form>
        <div class="text">
        <label for="mail">Email</label>
        <br></br>
        <input type="text" id="mail" placeholder="example@fournisseur.com"></input>
        </div>
        <div>
        <label for="categorie">Categorie de la demande :</label>
        <br></br>
        <select name="category" id="categorie">
          <option value="home">
              Accueil
          </option>
          <option value="inscription">
              Inscription
          </option>
          <option value="themes">
              Themes
          </option>
          <option value="createQuizz">
              Creation de quizz
          </option>
        </select>
        </div>
        <div>
          <label for="comment">Laisse le com que tu veux</label>
          <br></br>
          <textarea id="comment" placeholder="place ton texte ici"></textarea>
        </div>
      </form>
    </div>
  )
}

export default Form