import NotesList from "./components/NotesList/NotesList"
import RegisterForm from "./components/RegisterForm/RegisterForm"
import "./assets/App.css"
import "./assets/index.css"
import React, { Component } from "react"



class App extends Component {

  constructor() {
    super()
    this.state = {
      notes:[]
    }
  }

  handleNote(title, text) {
    const newNote = { title, text }
    const newNotes = [...this.state.notes,newNote]
    const newState = {
      notes: newNotes
    }
    this.setState(newState)
  }
  render() {
    return (
      <section className="conteudo">
        aaaaaaaaa
        <RegisterForm handleNote={this.handleNote.bind(this)} />
        <NotesList notes={this.state.notes}/>
      </section>
    )
  }
}

export default App;
