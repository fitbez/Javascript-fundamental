// var colors = ["red", "yellow", "orange"];

// alert(colors[2]);

// var colors = new Array("red", "yellow", "orange");

// alert(colors[2]);

// colors.push("green");

// colors.reverse();

// alert(colors[colors.length - 2]);

// var promise = {
//   var: "text",
//   array: [1, 2, 3, 4]
// };

// alert(promise.var);

function changeBackground(x) {
  console.log("Hello");
  var body = document.getElementById("body");
  body.style.backgroundColor = x.value;
}

function validateForm() {
  var firstName = document.forms["myForm"]["firstName"].value;
  if (firstName == null || firstName == "") {
    alert("first name is required");
  }

  if (firstName.length < 3) {
    alert("First name should at least be three letters");
  }
}
