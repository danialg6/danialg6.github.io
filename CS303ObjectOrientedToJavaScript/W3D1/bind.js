let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };
  
  setTimeout(user.sayHi, 1000); // Hello, undefined!
  setTimeout(user.sayHi.bind(user), 1000); // Hello, john!
  setTimeout(user.sayHi(), 1000); // Hello, john!