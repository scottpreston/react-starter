class Foo {
    constructor(bar="bar") {
        this.bar = bar;
    }
    print() {
        console.log(this.bar);
    }
    getIt() {
        return this.bar;
    }
}

// how do you test Foo without a framework?

class Hello {
  constructor() {
    console.log('hello world!');
  }
  world() {
    console.log('same here!')
  }
}

// how do you test Foo without a framework?
