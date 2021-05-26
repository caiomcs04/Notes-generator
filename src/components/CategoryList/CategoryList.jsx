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
    this.props.notes.subscribe(this.newCategorys)
  }

  newCategorys(categorys) {
    this.setState({ ...this.state, categorys })
  }

  handleInputEvent(e) {
    let category = document.getElementById("category")
    if (e.key === "Enter" || e.type === "click") {
      if (category.value.length > 0) {
        console.log(category.value)
        this.props.handleCategory(category.value);
        category.value = ""
      }
    }
  }

  delete() {
    let index = 
    this.props.deleteCategory(index)
  }

  render() {
    return (
      <article className="">
        <section className="category">
          <ul className="category-list">
            {this.state.categorys.map((category, index) => {
              let index
              return (
                <section className="div-li">
                  <li key={index} className="category-item">
                    <p>{category}</p>
                    <DeleteSVG className="category-delete-icon"
                      onClick={console.log(this)} />
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