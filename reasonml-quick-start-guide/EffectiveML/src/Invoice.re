// Let's imagine that we're building an invoice-management system and we have an Invoice module that defines an invoice type along with a function that other modules can use to create values of that type. This arrangement is shown in the following code:

// type t = {
//   name: string,
//   email: string,
//   date: Js.Date.t,
//   total: float
// };

// let make = (~name, ~email, ~date, ~total) => {
//   name,
//   email,
//   date,
//   total
// };

// If we decide to allow other modules to add discounts to invoices, we would need to create a function and include it in the module signature of Invoice. Let's suppose we want to only allow one discount per invoice and also restrict the discount amount to ten, fifteen, or twenty percent. We could implement this in the following way:

/* Invoice.re */
// type t = {
//   name: string,
//   email: string,
//   date: Js.Date.t,
//   total: float,
//   isDiscounted: bool,
// };

// type discount =
//   | Ten
//   | Fifteen
//   | Twenty;

// let make = (~name, ~email, ~date, ~total) => {
//   name,
//   email,
//   date,
//   total,
//   isDiscounted: false,
// };

// let discount = (~invoice, ~discount) =>
//   if (invoice.isDiscounted) {
//     invoice;
//   } else {
//     {
//       ...invoice,
//       isDiscounted: true,
//       total:
//         invoice.total
//         *. (
//           switch (discount) {
//           | Ten => 0.9
//           | Fifteen => 0.85
//           | Twenty => 0.8
//           }
//         ),
//     };
//   };

// function signature to tuple without changing .rei and `Email.re` still works. The output format will change from this:
// ```reason
// ➜  EffectiveML [master*]node src/Email.bs.js
// {
//   name: 'Raphael',
//   email: 'persianturtle@gmail.com',
//   date: 2020-03-11T20:05:43.481Z,
//   total: 15,
//   isDiscounted: false
// }
// ```
// to this
// ```reason
// ➜  EffectiveML [master*]node src/Email.bs.js
// [
//   'Raphael',
//   'persianturtle@gmail.com',
//   2020-03-11T20:10:22.290Z,
//   15,
//   false
// ]
// ```
/* Invoice.re */
type t = (string, string, Js.Date.t, float, bool);

type discount =
  | Ten
  | Fifteen
  | Twenty;

let make = (~name, ~email, ~date, ~total) => (
  name,
  email,
  date,
  total,
  false,
);

let discount = (~invoice, ~discount) => {
  let (name, email, date, total, isDiscounted) = invoice;
  if (isDiscounted) {
    invoice;
  } else {
    (
      name,
      email,
      date,
      total
      *. (
        switch (discount) {
        | Ten => 0.9
        | Fifteen => 0.85
        | Twenty => 0.8
        }
      ),
      true,
    );
  };
};

