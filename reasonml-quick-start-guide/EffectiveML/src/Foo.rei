let foo: string;
let y: string;

// The `person` type is exposed in the same way as if there were no module signature defined. As you'd expect, if a signature is defined and the type is not listed, the type isn't exposed to other modules.

// type person = {
//   firstName: string,
//   lastName: string
// };

// There is also the option to leave the type abstract. We only keep what's left of the equals sign. **Now, the person type is exposed to other modules, but no other modules can directly create or manipulate a value of the person type. The person type is required to be defined inFoo, but it can have any definition. This means that thepersontype can change over time, and no modules outside ofFoowould ever know the difference**.

type person;