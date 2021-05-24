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
              <NotesCards noteTitle={title}
              noteText={text}/>
            </li>
            )
          })}
       
        </ul>
      </>
    )
  }
}

export default NotesList