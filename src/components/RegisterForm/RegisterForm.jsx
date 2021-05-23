import React, { Component } from "react";
import "./style.css"

class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }

  _handleTitle(event) {
    event.stopPropagation()
    this.title = event.target.value
  }

  _handleText(event) {
    event.stopPropagation()
    this.text = event.target.value
  }

  _handleCard(event) {
    event.preventDefault()
    event.stopPropagation()
   this.props.handleNote(this.title, this.text);
  }

  render() {
    return (
      <>
        <form className="register-form"
          onSubmit={this._handleCard.bind(this)}
        >
          <input type="text"
            placeholder="Título"
            className="register-form-input"
            onChange={this._handleTitle.bind(this)} />
          <textarea
            rows={15}
            placeholder="Escreva sua nota"
            className="register-form-input"
            onChange={this._handleText.bind(this)} />
          <button className="register-form-input register-form-submit">
            Criar nota
        </button>
        </form>
      </>
    )
  }
}

export default RegisterForm