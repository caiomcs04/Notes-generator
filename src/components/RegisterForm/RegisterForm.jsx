import React, { Component } from "react";
import "./style.css"

class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
    this.category = "";
    this.state = { categorys: [] }
  }

  componentDidMount() {
    this.props.categorys.subscribe(this.newCategorys.bind(this))
  }

  newCategorys(categorys) {
    this.setState({ ...this.categorys, categorys })
  }

  _handleTitle(event) {
    event.stopPropagation()
    this.title = event.target.value
  }

  _handleText(event) {
    event.stopPropagation()
    this.text = event.target.value
  }


  _handleCategory(event) {
    event.stopPropagation()
    this.category = event.target.value
  }

  _handleCard(event) {
    event.preventDefault()
    event.stopPropagation()
    this.props.handleNote(this.title, this.text, this.category);
  }

  render() {
    return (
      <>
        <form className="register-form"
          onSubmit={this._handleCard.bind(this)}
        >
          <select className="register-form-input"
            onChange={this._handleCategory.bind(this)}>
            <option>Sem categoria</option>
            {this.state.categorys.map((category, index) => {
              return <option key={index} value={category}>{category}</option>
            })}
          </select>
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