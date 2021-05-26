import React, { Component } from "react";
import "./style.css"
import { ReactComponent as DeleteSVG } from "../../assets/img/delete-icon.svg"
class NotesCards extends Component {

	delete() {
		const index = this.props.noteIndex;
		this.props.deleteNote(index)
	}

	showNotes() {
		if (this.props.displayNote) {
			return (
				<section className="card-note">
					<header className="category-header">
						<h1>{this.props.category}</h1>
					</header>
					<header className="header-card-note">
						<h3 className="title-card-note">
							{this.props.noteTitle}
						</h3>
						<DeleteSVG className="delete-icon"
							onClick={this.delete.bind(this)} />
					</header>
					<body>
						<p className="body-card-note">
							{this.props.noteText}
						</p>
					</body>
				</section>
			)
		}
	}

	render() {
		return (
			<>
				{this.showNotes()}
			</>
		)
	}
}

export default NotesCards