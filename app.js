document.write(`<h1>Select an option:</h1><br>
    <h3>a. Option 1</h3> <br>
    <h3>b. Option 2</h3> <br>
    <h3>c. Option 3 </h3><br>
    `);

var choice = prompt("Select an option: ");

var text;

switch (choice) {
  case "a":
    text = "Option 1 selected!";
    break;
  case "b":
    text = "Option 2 Selected!";
    break;
  case "c":
    text = "Option 3 Selected!";
    break;

  default:
    text = "No Option is Selected";
    break;
}

document.write(`<h2>${text}</h2>`);
