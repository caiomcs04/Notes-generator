import React, { Component } from "react";
import "./style.css"

class NotesCards extends Component {
	render() {
		return (
			<>
				<section className="card-note">
					<header className="header-card-note">
						<h3 className="title-card-note">
							Título
          				</h3>
					</header>
					<header>
						<p className="body-card-note">
							Escreva sua nota
            			</p>
					</header>
				</section>
			</>
		)
	}
}

export default NotesCards