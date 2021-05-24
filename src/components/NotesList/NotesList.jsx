import React, { Component } from "react";
import NotesCards from "../NotesCards/NotesCards";
import "./style.css"



class NotesList extends Component {
  render() {
    return (
      <>
        <ul className="notes-list">
          {this.props.notes.map((note,index) =>{
            let title = note.title
            let text = note.text
            return(
              <li className="notes-list-item" key={index}>
              <NotesCards 
              deleteNote={this.props.deleteNote}
              noteTitle={title}
              noteText={text}
              noteIndex = {index}/>
            </li>
            )
          })}
       
        </ul>
      </>
    )
  }
}

export default NotesList