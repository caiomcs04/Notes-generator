import NotesList from "./components/NotesList/NotesList"
import RegisterForm from "./components/RegisterForm/RegisterForm"
import "./assets/App.css"
import "./assets/index.css"


function App() {
  return (
    <section className="conteudo">
      <RegisterForm />
      <NotesList />
    </section>
  )

}

export default App;
