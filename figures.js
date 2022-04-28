//This is the code of the square

console.group("Square");

function squarePerimeter(side) {
  return side * 4;
}

function squareArea(side) {
  return side * side;
}

console.groupEnd();

//This is the code of the triangle

console.group("Triangle");

function trianglePerimeter(side1, side2, base) {
  return side1 + side2 + base;
}

function triangleArea(base, height) {
  return (base * height) / 2;
}

console.groupEnd();

//This is the code of the circle
console.group("Circle");

//Diameter
function circleDiameter(radio) {
  return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI of the circle is: " + PI);

//Circumference
function circlePerimeter(radio) {
  const diameter = circleDiameter(radio);
  return diameter * PI;
}

//Area
function circleArea(radio) {
  return radio * radio * PI;
}

console.groupEnd();

// Square functions

function calculateSquarePerimeter() {
  const input = document.getElementById("squareInput");
  const value = input.value;
  const perimeter = squarePerimeter(value);
  alert(perimeter);
}

function calculateSquareArea() {
  const input = document.getElementById("squareInput");
  const value = input.value;
  const area = squareArea(parseInt(value));
  alert(area);
}

// Triangle functions

function calculateTrianglePerimeter() {
  const input1 = document.getElementById("triangleSide1Input");
  const input2 = document.getElementById("triangleSide2Input");
  const input3 = document.getElementById("triangleBaseInput");
  const value1 = input1.value;
  const value2 = input2.value;
  const value3 = input3.value;
  const perimeter = trianglePerimeter(
    parseInt(value1),
    parseInt(value2),
    parseInt(value3)
  );
  alert(perimeter);
}

function calculateTriangleArea() {
  const input1 = document.getElementById("triangleHeightInput");
  const input2 = document.getElementById("triangleBase2Input");
  const value1 = input1.value;
  const value2 = input2.value;
  const area = triangleArea(parseInt(value1), parseInt(value2));
  alert(area);
}

// Circle functions

function calculateCirclePerimeter() {
  const input = document.getElementById("circleInput");
  const value = input.value;
  const perimeter = circlePerimeter(value);
  alert(perimeter);
}

function calculateCircleArea() {
  const input = document.getElementById("circleInput");
  const value = input.value;
  const area = circleArea(value);
  alert(area);
}
