export default function getPartOfObject({ special = [] }) {
  special.forEach((element) => {
    if (!Object.prototype.hasOwnProperty.call(element, 'description')) {
    // if (!element.hasOwnProperty('description')) {
       element.description = 'Описание недоступно';
    }
  });
  return special;
}
