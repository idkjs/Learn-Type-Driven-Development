
// type t;
// let make:
//  (~name: string, ~email: string, ~date: Js.Date.t, ~total: float) => t;

 type t;

type discount =
 | Ten
 | Fifteen
 | Twenty;

let make:
 (~name: string, ~email: string, ~date: Js.Date.t, ~total: float) => t;

let discount: (~invoice: t, ~discount: discount) => t;