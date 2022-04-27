//This is the code of the square

console.group("Square");
const squareSide = 5;
console.log("the sides of the square measure is: " + squareSide + "cm");

const squarePerimeter = squareSide * 4;
console.log(
  "the perimeter of the square measure is: " + squarePerimeter + "cm"
);

const squareArea = squareSide * squareSide;
console.log("the area of the square measure is: " + squareArea + "cm^2");

console.groupEnd();
//This is the code of the triangle
console.group("Triangle");
const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;

console.log(
  "The measure of the side of the triangle is: " +
    triangleSide1 +
    "cm, " +
    triangleSide2 +
    "cm, " +
    triangleBase +
    "cm"
);

const triangleHeight = 5.5;
console.log("the height of the triangle is: " + triangleHeight + "cm");

const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase;
console.log("the perimeter of the triangle is: " + trianglePerimeter + "cm");

const triangleArea = (triangleBase * triangleHeight) / 2;
console.log("the area of the triangle is: " + triangleArea + "cm^2");

console.groupEnd();

//Circle
console.group("Circle");

//Radio
const circleRadio = 4;
console.log("the radio of the circle is: " + circleRadio + "cm");

//Diameter
const circleDiameter = circleRadio * 2;
console.log("the diameter of the circle is: " + circleDiameter + "cm");

//PI
const PI = Math.PI;
console.log("PI of the circle is: " + PI);

//Circumference
const circlePerimeter = circleDiameter * PI;
console.log("the perimeter of the circle is: " + circlePerimeter + "cm");

//Area
const circleArea = circleRadio * circleRadio * PI;
console.log("the area of the circle is: " + circleArea + "cm^2");

console.groupEnd();
