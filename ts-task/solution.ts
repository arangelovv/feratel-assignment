interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

class ShoppingCart {
  private items: CartItem[] = [];

  public addItem(item: CartItem): boolean {
    if (item.price < 0 || item.quantity <= 0 || !item.name) {
      return false;
    }

    const existing = this.items.find((i) => i.id === item.id);

    if (existing) {
      existing.quantity += item.quantity;
      return true;
    }
    this.items.push(item);
    return true;
  }

  public removeItem(id: number): boolean {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
      return true;
    } else {
      return false;
    }
  }

  public decreaseItemQuantity(id: number): boolean {
    const item = this.items.find((item) => item.id === id);
    if (!item) {
      return false;
    }

    item.quantity -= 1;
    return true;
  }

  public calculateTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  public displayItems(): void {
    console.log("Shopping Cart:");
    for (const [index, item] of this.items.entries()) {
      console.log(`${index + 1} - ${item.name} - ${item.price} (${item.quantity})`);
    }
  }

  public checkout(): boolean {
    if (this.items.length === 0) {
      return false;
    }
    const total = this.calculateTotalPrice();
    console.log(`Total cart price: ${total}`);
    console.log("Processing payment...");
    this.items = [];
    console.log("Payment processed successfully. Thank you for your purchase!");
    return true;
  }
}

const cart = new ShoppingCart();
const item1: CartItem = { id: 1, name: "shirt", price: 100, quantity: 1 };
const item2: CartItem = { id: 2, name: "jeans", price: 25, quantity: 2 };
const item3: CartItem = { id: 2, name: "jeans", price: 25, quantity: 1 };
const item4: CartItem = { id: 3, name: "skirt", price: -10, quantity: 4 };
const item5: CartItem = { id: 4, name: "shoes", price: 150, quantity: 0 };

console.log(cart.addItem(item1)); //valid item
cart.displayItems();
console.log(`Current price: ${cart.calculateTotalPrice()}`);

console.log(cart.addItem(item4)); //invalid item
cart.displayItems();
console.log(`Current price: ${cart.calculateTotalPrice()}`);

console.log(cart.addItem(item2)); //valid item
cart.displayItems();
console.log(`Current price: ${cart.calculateTotalPrice()}`);

console.log(cart.addItem(item3)); //valid item; addding more of item with id: 3
cart.displayItems();
console.log(`Current price: ${cart.calculateTotalPrice()}`);

console.log(cart.addItem(item5)); //invalid item
cart.displayItems();
console.log(`Current price: ${cart.calculateTotalPrice()}`);

console.log(cart.decreaseItemQuantity(2));
cart.displayItems();
console.log(`Current price: ${cart.calculateTotalPrice()}`);

console.log(cart.removeItem(1));
cart.displayItems();
console.log(`Current price: ${cart.calculateTotalPrice()}`);

cart.checkout();
