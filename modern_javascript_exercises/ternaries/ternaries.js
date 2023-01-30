// Instructions can be found in ternaries.md

export function sayHello(name) {

  return (name === undefined ? 'Hello you!' : "Hello, " + name + "!");

  // if (name === undefined) :
  //   return "Hello you!";
  // } else return "Hello, " + name + "!";
}
