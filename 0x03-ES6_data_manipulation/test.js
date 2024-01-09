function createArrayBufferWithInt8AtPosition(position, value) {
  // Create an ArrayBuffer with a specific length
  const bufferLength = 10; // Adjust the length as needed
  const arrayBuffer = new ArrayBuffer(bufferLength);

  // Create an Int8Array view on the ArrayBuffer
  const int8Array = new Int8Array(arrayBuffer);

  // Set the int8 value at the specified position
  int8Array[position] = value;

  // Return the modified ArrayBuffer
  return arrayBuffer;
}

// Example: Set int8 value 42 at position 3
const resultArrayBuffer = createArrayBufferWithInt8AtPosition(3, 42);

// Display the result
console.log(resultArrayBuffer);
