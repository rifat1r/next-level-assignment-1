# Type vs Interface in TypeScript

In TypeScript, we can use both `type` and `interface` to define the structure of an object. They look very similar, especially when we are working with objects. As a beginner, I was also confused about when to use which one. So, let's understand them with some examples.

### What is Type Alias?

We use `type` to create a custom type. For example:

```ts
type User = {
  name: string;
  age: number;
};
```

Now we can use `User` as a type whenever we need this structure. We can also use type aliases for union types, primitive types, and other types.

```ts
type Status = "active" | "inactive";
```

### What is Interface?

An interface is also used to describe the structure of an object. For example:

```ts
interface User {
  name: string;
  age: number;
}
```

As you can see, it looks almost the same as the type alias example. We can use both to define an object structure.

### Differences Between Type and Interface

One important difference is that interfaces can be extended using the `extends` keyword.

```ts
interface Admin extends User {
  role: string;
}
```

We can also do something similar with type aliases using intersection types.

```ts
type Admin = User & {
  role: string;
};
```

Another difference is declaration merging. If we declare the same interface more than once, TypeScript combines their properties. But we cannot do the same with type aliases because duplicate type declarations are not allowed.

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}
```

Now the `User` interface has both `name` and `age` properties.

### When Should We Use Them?

I think both are useful and the choice depends on what we are trying to do. If I am defining an object structure, I can use either one. But if I need union types or other advanced type combinations, I would use `type`.

### Conclusion

Both type aliases and interfaces help us write better TypeScript code. They have some differences, but they are also very similar in many situations. As I learn more TypeScript, I am getting a better understanding of when to use them.