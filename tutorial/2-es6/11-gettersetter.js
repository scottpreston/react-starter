class Hello {
  set name  (name)  {
    this._name = name;
  }
  get name  ()       {
    return this._name;
  }
  hello() {
    console.log(`hello ${this._name}!`);
  }
}

let a = new Hello();
a.name = "scott";
a.hello();
console.log(a.name);
