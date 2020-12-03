// Module types

// A module signature can also be defined using the module type keyword instead of using a separate .rei file. The module type must start with a capital letter. Once defined, a module can be constrained by a module type using the module <Name> : <Type> syntax, as follows:

// We can think of module signatures as interfaces in the object-oriented sense. The interface defines the properties and methods that a module must define. In Reason, however, module signatures also hide bindings and types. But perhaps one of the most useful features of module signatures is the ability to expose abstract types.

module type FooT = {let foo: (~a: int, ~b: int) => int;};

module Foo: FooT = {
  let foo = (~a, ~b) => a + b;
};
// The same module type can be used for multiple modules, as follows:
// module Bar: FooT = {
//   let bar = (~a, ~b) => a - b;
// };
module Bar: FooT = {
  let foo = (~a, ~b) => a + b;
};