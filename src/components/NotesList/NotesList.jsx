import React, { Component } from "react";
import NotesCards from "../NotesCards/NotesCards";
import "./style.css"



class NotesList extends Component {
  render() {
    return (
      <>
        <ul className="notes-list">
          {Array.of("trabalho","trabalho","estudos").map((categoria,index) =>{
            return(
              <li className="notes-list-item" key={index}>
              <NotesCards />
            </li>
            )
          })}
       
        </ul>
      </>
    )
  }
}

export default NotesList