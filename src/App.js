import NotesList from "./components/NotesList/NotesList"
import RegisterForm from "./components/RegisterForm/RegisterForm"
import CategoryList from "./components/CategoryList/CategoryList"
import "./assets/App.css"
import "./assets/index.css"
import React, { Component } from "react"
import Categorys from "./data/Categorys"
import NotesArray from "./data/Notes"



class App extends Component {

  constructor() {
    super()
    this.category = new Categorys
    this.notes = new NotesArray
  }


  render() {
    return (
      <section className="conteudo">
        <RegisterForm handleNote={this.notes.handleNote.bind(this.notes)}
        categorys={this.category} />
        <main className="conteudo-principal">
          <CategoryList categorys={this.category}
          handleCategory ={this.category.handleCategory.bind(this.category)}
          deleteCategory={this.notes.deleteNote.bind(this.notes)}/>
          <NotesList
            deleteNote={this.notes.deleteNote.bind(this.notes)}
            notes={this.notes} />
        </main>

      </section>
    )
  }
}

export default App;
