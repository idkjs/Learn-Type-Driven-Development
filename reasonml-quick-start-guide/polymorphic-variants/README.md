# [Polymorphic Variants](https://subscription.packtpub.com/book/application_development/9781789340785/5/ch05lvl1sec33/polymorphic-variants)

## [@bs.unwrap discussed here](https://subscription.packtpub.com/book/application_development/9781789340785/4/ch04lvl1sec27/javascript-interoperability)

## Polymorphic Variants

We've already briefly looked at polymorphic variants in the previous chapter. To recap, we learned about them when we used the [@bs.unwrap] decorator to bind to some existing JavaScript. The idea was that [@bs.unwrap] can be used to bind to an existing JavaScript function where its arguments can be of different types. For example, let's say we want to bind to the following function:

```js
function dynamic(a) {
  switch (typeof a) {
    case "string":
      return "String: " + a;
    case "number":
      return "Number: " + a;
  }
}
```

Let's say this function should only accept arguments of the `string` type or `int` type and nothing else. We could bind to this example function as follows:

```reason
[@bs.val] external dynamic : 'a => string = "dynamic";
```

However, our binding would then allow invalid argument types (such as `bool`). It would be better if our compiler could help us out by preventing invalid argument types. One way to do this is to use [@bs.unwrap] with a `polymorphic variant`. Our binding would then appear as follows:

```reason
[@bs.val] external dynamic : ([@bs.unwrap] [
  | `Str(string)
  | `Int(int)
]) => string = "dynamic";
```

We'd use the binding like so:

```reason
dynamic(`Int(42));
dynamic(`Str("foo"));
```

