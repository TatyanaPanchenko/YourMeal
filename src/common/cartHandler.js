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

export function getItemsCount(cartElements, price = false) {
  let allTotalCount = 0;
  let allTotalPrice = 0;
  cartElements.forEach((item) => {
    allTotalCount += item.count;
    allTotalPrice += item.price * item.count;
  });
  return price ? allTotalPrice : allTotalCount;
}

export function changeCountCartItem(flag, item, upload) {
  let newItem;
  if (flag) {
    newItem = { ...item, count: item.count + 1 };
  } else {
    newItem = { ...item, count: item.count - 1 };
  }
  DB.updateProductCartItem(item.id, newItem).then(() =>
    upload.setStatus((prev) => !prev)
  );
}
