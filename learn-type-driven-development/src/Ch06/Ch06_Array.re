/* src/Ch06/Ch06_Array.re */
/**This expression's type contains type variables that can't be generalized:
  array('_weak1) */
// let empty = [||]; /* (1) */
type any;
let empty: array(any) = [||];
let singleton = [|1|];
let multi = [|false, true, true|];

multi[1] = false; /* (2) */
Js.log(multi[1]); /* (3) */
