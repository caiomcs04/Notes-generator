import React, { Component } from "react";
import NotesCards from "../NotesCards/NotesCards";
import "./style.css"



class NotesList extends Component {

  constructor(){
    super()
    this.state = {notes:[]}
    this.newNotes = this.newNotes.bind(this)
  }

  componentDidMount() {
    this.props.notes.subscribe(this.newNotes)
  }

  componentWillUnmount(){
    this.props.notes.subscribe(this.newNotes)
  }

  newNotes(notes){
    this.setState({...this.state, notes})
  }

  render() {
    return (
      <>
        <ul className="notes-list">
          {this.state.notes.map((note,index) =>{
            let title = note.title
            let text = note.text
            let category = note.category
            return(
              <li className="notes-list-item" key={index}>
              <NotesCards 
              deleteNote={this.props.deleteNote}
              noteTitle={title}
              noteText={text}
              noteIndex = {index}
              category = {category}/>
            </li>
            )
          })}
       
        </ul>
      </>
    )
  }
}

export default NotesList