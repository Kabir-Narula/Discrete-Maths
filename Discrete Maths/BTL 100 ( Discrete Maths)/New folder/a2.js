// Function to calculate the magnitude of a vector
function magnitude(vec) {
  let sumOfSquares = 0;
  for (let i = 0; i < vec.length; i++) {
      sumOfSquares += vec[i] * vec[i];
  }
  return Math.sqrt(sumOfSquares);
}

// Function to normalize a vector
function normalize(vec) {
  const mag = magnitude(vec);
  if (mag === 0) return vec; // Prevent division by zero
  const normalizedVec = [];
  for (let i = 0; i < vec.length; i++) {
      normalizedVec.push(vec[i] / mag);
  }
  return normalizedVec;
}

// Function to scale a vector by a constant magnitude
function scaledVector(unitVector, magnitude) {
  const scaledVec = [];
  for (let i = 0; i < unitVector.length; i++) {
      scaledVec.push(magnitude * unitVector[i]);
  }
  return scaledVec;
}

// Function to calculate a new position based on original position, heading, and amount
function getNewPosition(original, heading, amount) {
  const scaledHeading = scaledVector(heading, amount);
  const newPosition = [];
  for (let i = 0; i < original.length; i++) {
      newPosition.push(original[i] + scaledHeading[i]);
  }
  return newPosition;
}

// Function to rotate a vector by a given angle (in radians)
function rotateVector(vec, angle) {
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);
  const rotatedVec = [
      vec[0] * cosA - vec[1] * sinA,
      vec[0] * sinA + vec[1] * cosA
  ];
  return rotatedVec;
}

// Function to turn a vector to the left by a given angle (in degrees)
function turnLeft(heading, amount) {
  const radians = (amount * Math.PI) / 180;
  return rotateVector(heading, -radians);
}

// Function to turn a vector to the right by a given angle (in degrees)
function turnRight(heading, amount) {
  const radians = (amount * Math.PI) / 180;
  return rotateVector(heading, radians);
}

// Your additional code for drawing shapes and testing goes here...
