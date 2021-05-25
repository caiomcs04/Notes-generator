import React, { Component } from "react";
import "./style.css"
import {ReactComponent as DeleteSVG} from "../../assets/img/delete-icon.svg"
class NotesCards extends Component {

	delete(){
		const index = this.props.noteIndex;
		this.props.deleteNote(index)
	}

	render() {
		return (
			<>
				<section className="card-note">
					<header className="header-card-note">
						<h3 className="title-card-note">
							{this.props.noteTitle}
          	</h3>
						<DeleteSVG className="delete-icon"
						 onClick={this.delete.bind(this)}/>
						 <h4>{this.props.category}</h4>
					</header>
					<header>
						<p className="body-card-note">
							{this.props.noteText}
            </p>
					</header>
				</section>
			</>
		)
	}
}

export default NotesCards