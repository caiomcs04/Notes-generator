import { render } from '@testing-library/react';
import React, { Component } from 'react';
import "./style.css"

class CategoryList extends Component {

  constructor(){
    super();
    this.state={categorys:[]}
  }

  componentDidMount(){
    this.props.categorys.subscribe(this.newCategorys.bind(this))
  }

  newCategorys(categorys){
    this.setState({...this.state,categorys})
  }

  handleInputEvent(e) {
    if (e.key === "Enter") {
      let category = e.target.value
      this.props.handleCategory(category);
    }
  }

  render() {
    return (
      <section className="category">
        <ul className="category-list">
          {this.state.categorys.map((category, index) => {
            return <li key={index} className="category-item">{category}</li>
          })
          }
        </ul>
        <input type="text"
          className="category-input"
          placeholder="Adicionar Categoria"
          onKeyUp={this.handleInputEvent.bind(this)} />
      </section>
    )
  }
}

export default CategoryList