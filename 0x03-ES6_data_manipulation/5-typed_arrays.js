export default function createInt8TypedArray(length, position, value) {
  try {
    const arrayBuffer = new ArrayBuffer(length);
    const int8Array = new Int8Array(arrayBuffer);

    int8Array[position] = value;

    return arrayBuffer;
  } catch (error) {
    throw new Error('Position outside range');
  }
}