import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { ReactComponent as DeleteSVG } from "../../assets/img/delete-icon-white.svg"
import "./style.css"

class CategoryList extends Component {

  constructor() {
    super();
    this.state = { categorys: [] }
    this.newCategorys = this.newCategorys.bind(this)
  }

  componentDidMount() {
    this.props.categorys.subscribe(this.newCategorys)
  }

  componentWillUnmount() {
    this.props.categorys.subscribe(this.newCategorys)
  }

  newCategorys(categorys) {
    this.setState({ ...this.state, categorys })
  }

  handleInputEvent(e) {
    let category = document.getElementById("category")
    if (e.key === "Enter" || e.type === "click") {
      if (category.value.length > 0) {
        this.props.handleCategory(category.value);
        category.value = ""
      }
    }
  }

  delete(index) {
    this.props.deleteCategory(index)
  }

  teste(){
    alert("ok")
  }

  render() {
    return (
      <article className="">
        <section className="category">
          <ul className="category-list">
            {this.state.categorys.map((category, index) => {
              return (
                <section className="div-li"
                onClick={() => this.teste()}
                >
                  <li key={index} className="category-item"
                  >
                    <p>{category.category}</p>
                    <DeleteSVG className="category-delete-icon"
                      onClick={() => this.delete(index)} />
                  </li>
                  <li></li>
                </section>
              )
            })
            }
          </ul>
          <section className="input-buttom-containner">
            <input type="text"
              className="category-input"
              placeholder="Adicionar Categoria"
              id="category"
              onKeyUp={this.handleInputEvent.bind(this)} />
            <button className="register-category-submit"
              onClick={this.handleInputEvent.bind(this)}>
              Adicionar Categoria
            </button>
          </section>
        </section>
      </article>
    )
  }
}

export default CategoryList