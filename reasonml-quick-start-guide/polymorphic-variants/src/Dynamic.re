Js.log("Hello, BuckleScript and Reason!");

[@bs.module "./dynamic.js"]
external dynamic: ([@bs.unwrap] [ | `Str(string) | `Int(int)]) => string =
  "dynamic";

dynamic(`Int(42)) |> Js.log;

dynamic(`Str("foo")) |> Js.log;

// normal reason variant, not a `polymorphic variant`. polymorphic variants have a "`" backtick
type validArgs =
  | Int(int)
  | Str(string);

[@bs.module "./dynamic.js"] external dynamic: validArgs => string = "dynamic";
// The problem with the preceding implementation is that Int(1) does not compile to a JavaScript number. Normal variants are compiled to an array and our dynamic function returns undefined instead of "Number: 42". The function returns undefined because no cases on the switch statement were matched.

// With polymorphic variants, BuckleScript compiles dynamic(`Int(42)) to dynamic(42) and the function works as expected.


dynamic(Int(1)) |> Js.log /*undefined when using a normal variant*/;
