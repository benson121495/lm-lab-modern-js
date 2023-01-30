// Instructions can be found in default_parameters.md

export const sayHello = (person = "you") => {
  return "Hello, " + person+ "!";

  // return `Hello, ${person === undefined ? "you!" : person + "!"}`;
};
