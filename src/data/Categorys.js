import { findRenderedComponentWithType } from "react-dom/test-utils";

export default class Categorys{
  constructor(){
    this.categorys = [];
    this._subscribers = [];
  }

  subscribe(func){
    this._subscribers.push(func);
  }

  notifeSubscribe(){
    this._subscribers.forEach(func => func(this.categorys));
  }

  handleCategory(newCategory){
    this.categorys.push(newCategory)
    this.notifeSubscribe()
  }

}