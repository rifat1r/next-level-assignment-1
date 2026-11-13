# Type Narrowing in TypeScript

Type narrowing is an important concept in TypeScript. Sometimes a variable can have more than one possible type. For example, it can be a string or a number. In those situations, we need to check the actual type before using it. This process is called type narrowing.

### Why Do We Need Type Narrowing?

Let's say we have a function that accepts a string or a number. We cannot directly use string methods on that value because it might be a number. TypeScript needs us to check its type first.

### Type Narrowing Using typeof

We can use the `typeof` operator to check primitive types like string, number, and boolean.

```ts
function processValue(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value.toFixed(2);
  }
}
```

Here, TypeScript understands that `value` is a string inside the first block. In the `else` block, it understands that the value is a number. So we can safely use methods for those types.

### Type Narrowing Using instanceof

We can also use `instanceof` to check whether an object belongs to a particular class.

```ts
function printDate(value: Date | string) {
  if (value instanceof Date) {
    console.log(value.getFullYear());
  } else {
    console.log(value.toUpperCase());
  }
}
```

Here, if the value is a Date object, we can use Date methods. Otherwise, TypeScript knows that it is a string.

### Type Narrowing Using the in Operator

Another way to narrow types is by using the `in` operator. It checks whether a property exists in an object.

```ts
type Bird = { fly: () => void };
type Fish = { swim: () => void };

function move(animal: Bird | Fish) {
  if ("fly" in animal) {
    animal.fly();
  } else {
    animal.swim();
  }
}
```

Here, TypeScript checks whether the `fly` property exists in the animal object. If it exists, TypeScript treats it as a Bird. Otherwise, it treats it as a Fish.

### Conclusion

Type narrowing helps us work safely with different types in TypeScript. We can use `typeof`, `instanceof`, and the `in` operator to check types and properties. I think it is a very useful concept because it helps prevent errors and makes our code easier to understand. I will probably use it a lot when working with TypeScript.