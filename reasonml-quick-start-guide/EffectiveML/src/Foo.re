let foo = "string";
let%private x = "private value";
let y = x;

// Abstract types

// Abstract types are type declarations that don't have a definition. Let's explore why this would be useful. In addition to bindings, module signatures can include types. In the following code, you'll notice that the module signature of Foo includes aperson type, and now Foo must include this type declaration:

type person = {
  firstName: string,
  lastName: string
};