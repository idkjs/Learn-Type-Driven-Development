/* Reason */
[@bs.scope "Math"] [@bs.val] [@bs.variadic]
external max: array('a) => 'a = "max";

[@bs.scope "Math"] [@bs.val] external random: unit => float = "random";
let many = Js.Math.maxMany_int([|1, 2|]);
let many2 = Js.Math.maxMany_int([|1, 2, 3, 4|]);
Js.log2("max2 ", max([|1, 2|]));
Js.log2("max4 ", max([|1, 2, 3, 4|]));
Js.log2("many ", many);
Js.log2("many2 ", many2);