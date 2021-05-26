export default class NotesArray{
  constructor(){
    this.notes =[]
    this._subscribers =[]
  }

  subscribe(func){
    this._subscribers.push(func);
  }

  unSubscribe(func){
    this._subscribers = this._subscribers.filter(f => f!== func)
  }

  notifeSubscribe(){
    this._subscribers.forEach(func => func(this.notes));
  }

  handleNote(title,text,category) {
    const newNote = new Note(title,text,category,true)
    this.notes.push(newNote)
    this.notifeSubscribe()
  }


  deleteNote(index) {
    this.notes.splice(index, 1);
    this.notifeSubscribe()
  }
}

class Note{
  constructor(title,text,category, display){
    this.title = title
    this.text = text
    this.display = display
    this.category = category
  }
}