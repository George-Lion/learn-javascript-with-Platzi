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
