export default class DB {
  static async getAllProducts() {
    try {
      const response = await fetch("http://localhost:3001/burgers");
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }
  static async getAllCartItem() {
    try {
      const response = await fetch("http://localhost:3001/cart");
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }
  static async setProductCartItem(data) {
    try {
      const response = await fetch("http://localhost:3001/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }
  static async updateProductCartItem(id, data) {
    try {
      const response = await fetch("http://localhost:3001/cart/${id}", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }
}
