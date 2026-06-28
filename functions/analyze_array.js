export default function (array) {
  return {
    average:
      array.reduce((accumulator, current) => accumulator + current, 0) /
      array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}
