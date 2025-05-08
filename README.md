## 🎯  Questions - Blog

### 1. What is the use of the `keyof` keyword in TypeScript? Provide an example.
✅ **Answer:** 'keyof' is an operator that takes an object type and produces a string or numeric literal union of its keys. For example:

```ts
type Fruits = {
    name: string;
    shape: string;
    color: string;
}

type FruitKeys  = keyof Fruits;

const getFruitProperty = (fruit : Fruits, key: FruitKeys ): string => {
    return fruit[key];
}

const apple : Fruits = {
    name: "Apple",
    shape: "Round",
    color: "Green"
}

console.log(getFruitProperty(apple, "color"));
```
Here `FruitKeys` creating a union of string literal with the keys (`name`, `shape` and `color`) of `Fruit` type. It's like `FruitKeys = "name" | "shape" | "color"`
And we can do the same thing with `keyof` operator except writing it manually.
---


### 2. Provide an example of using **union** and **intersection** types in TypeScript.
✅ **Answer:**  An example of using `union` and `intersection` types is given below:

```ts
type Order = { 
    productId: number;
    quantity: number;
 };
type Guest = { 
    isGuest: true;
    email: string;
 };
type RegisteredUser = {
    isGuest: false;
    userId: number;
};
type User = Guest | RegisteredUser;
type UserOrder = User & Order;

const order1: UserOrder = {
    isGuest: true,
    email: "abc@gmail.com",
    productId: 123,
    quantity: 50
};

const order2: UserOrder = {
    isGuest: false,
    userId: 12,
    productId: 456,
    quantity: 1
};

const processOrder = (order: UserOrder) => {
    if (order.isGuest) {
        console.log(`Guest order from ${order.email}`);
    } else {
        console.log(`Registered user ${order.userId} placed the order`);
    }
}

processOrder(order1);
processOrder(order2);

```
Here,
* `User = Guest | RegisteredUser` → **Union type**: one of two possible type.
* `UserOrder = User & Order` → **Intersection type**: combines user details with order details.