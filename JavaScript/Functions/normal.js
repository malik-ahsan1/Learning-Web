function greet() {
  console.log("Hello Ahsan");
  const test = () => {
    console.log(arguments);
  };

  test();
}

greet(1, 2, 3);
