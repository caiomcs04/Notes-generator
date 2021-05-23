import React, { Component } from "react";
import "./style.css"

class RegisterForm extends Component {

  constructor() {
    super()
    this.title = ""
  }

  handleTitle(event) {
    this.title = event.target.value
  }

  render() {
    return (
      <>
      {console.log()}
        <form className="register-form"
        >
          <input type="text"
            placeholder="Título"
            className="register-form-input"
            onChange={this.handleTitle} />
          <textarea placeholder="Escreva sua nota" className="register-form-input" />
          <button className="register-form-input register-form-submit">
            Criar nota
        </button>
        </form>
      </>
    )
  }
}

export default RegisterForm