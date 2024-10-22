import DB from "../services/DB";

export function addItemCart(item, cartElements, upload) {
  const checkedItem = cartElements.find((el) => el.id === item.id);
  if (!checkedItem) {
    DB.setProductCartItem(item).then(() => {
      upload.setStatus((prev) => !prev);
    });
    return;
  }
  const newItem = { ...checkedItem, count: checkedItem.count + 1 };
  DB.updateProductCartItem(item.id, newItem).then(() => {
    upload.setStatus((prev) => !prev);
    return;
  });
}
