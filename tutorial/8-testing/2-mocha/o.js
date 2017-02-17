export class Foo {
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

export class Hello {
  constructor() {
    console.log('hello world!');
  }
  world() {
    console.log('same here!')
  }
}

export class Fetcher {
    static get(callback) {
        var fetch = require('node-fetch');
        // Simple response handling
        fetch('http://scottpreston.github.io/html/data.json').then(function(response) {   
            response.json().then(function(data) {  
            callback(data); 
            }); 
        });
    }
}
