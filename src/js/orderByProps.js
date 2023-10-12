export default function orderByProps(obj, sort) {
  const result = [];
  sort.forEach((element) => {
    // if (obj.hasOwnProperty(element)) { lint не пропускал этот код
    if (Object.prototype.hasOwnProperty.call(obj, element)) {
      result.push({
        key: element,
        value: obj[element],
      });
    }
  });

  const keys = Object.keys(obj).sort();
  keys.forEach((element) => {
    if (sort.indexOf(element) === -1) {
      result.push({
        key: element,
        value: obj[element],
      });
    }
  });

  return result;
}
