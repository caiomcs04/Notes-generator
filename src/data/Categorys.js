import { findRenderedComponentWithType } from "react-dom/test-utils";

export default class Categorys{
  constructor(){
    this.categorys = [];
    this._subscribers = [];
  }

  subscribe(func){
    this._subscribers.push(func);
  }

  unSubscribe(func){
    this._subscribers = this._subscribers.filter(f => f!== func)
  }

  notifeSubscribe(){
    this._subscribers.forEach(func => func(this.categorys));
  }

  handleCategory(category){
    const newCategory = new Category(category,true)
    this.categorys.push(newCategory)
    this.notifeSubscribe()
  }

  deleteCategory(index) {
    this.categorys.splice(index, 1);
    this.notifeSubscribe()
  }

}

class Category{
  constructor(category, display){
    this.display = display
    this.category = category
  }
}