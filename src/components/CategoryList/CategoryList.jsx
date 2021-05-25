import { render } from '@testing-library/react';
import React, { Component } from 'react';
import "./style.css"

class CategoryList extends Component {
  
  handleInputEvent(e){
    if(e.key === "Enter"){
    console.log("opa")
    }
  }

  render() {
    return (
      <section className="category">
        <ul className="category-list">
          <li className="category-item">ALALALA</li>
        </ul>
        <input type="text"
         className="category-input" 
         placeholder="Adicionar Categoria"
         onKeyUp={this.handleInputEvent.bind(this)}/>
      </section>
    )
  }
}

export default CategoryList