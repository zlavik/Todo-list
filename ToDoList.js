class Todo {
  static DONE_MARKER = 'X';
  static UNDONE_MARKER = ' ';

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add(todo) {
    if (!(todo instanceof Todo)) throw new TypeError("can only add Todo objects");
    this.todos.push(todo);
  }

  size() {
    return this.todos.length
  }

  first() {
    return this.todos[0]
  }

  last() {
    return this.todos[(this.todos.length - 1)]
  }

  itemAt(index) {
    this._validateindex(index);
    return this.todos[index];
  }
  _validateindex(index) {
    if (!(this.todos[index])) throw new ReferenceError(`invalid index: ${index}`)
  }

  markDoneAt(index) {
    this.itemAt(index).markDone();
  }

  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }

  isDone() {
    return this.todos.every((element) => element.done === true);
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  removeAt(index) {
    this._validateindex(index);
    return this.todos.splice(index, 1);
  }

  toString() {
    let title = `==== ${this.title} ====`;
    let list = this.todos.map(todo => todo.toString()).join('\n');
    return `${title}\n${list}`;
  }

  forEach(callback) {
    this.todos.forEach(callback);
  }
}

let list = new TodoList("Today's Todos");
let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
list.add(todo5);
list.add(todo6);

list.forEach(todo => console.log(todo.toString()));
