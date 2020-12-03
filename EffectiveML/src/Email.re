// Since the Invoice.t type is exposed, the invoice can be manipulated by Email, as shown in the following code:

let invoice =
  Invoice.make(
    ~name="Raphael",
    ~email="persianturtle@gmail.com",
    ~date=Js.Date.make(),
    ~total=15.0,
  );
// let invoice = {...invoice, total: invoice.total *. 0.8};
// Js.log(invoice);

// using bs-platform>7 syntax since we have access to Invoice.t type
// let invoice: Invoice.t = {
//   name: "Raphael",
//   email: "persianturtle@gmail.com",
//   date: Js.Date.make(),
//   total: 15.0,
// };

// Despite the Invoice.t type being immutable, there is nothing preventing Email from shadowing the invoice binding with some altered fields. However, if we made the Invoice.t type abstract, this wouldn't be possible because Email wouldn't be able to manipulate the abstract type. None of the functions that the Email module has access to would work with an Invoice.t type.


// after adding Invoice.rei where `Invoice.t` is an `abstract` type, we cant do this anymore because the the only function from Invoice that we have access to is `make` so the invoice above created with `make` is still compiling

// let invoice: Invoice.t = {
//   name: "Raphael",
//   email: "persianturtle@gmail.com",
//   date: Js.Date.make(),
//   total: 15.0,
// };

// this doesnt compile because the `abstract` type only gives us access to make. We techinally dont know if what the fields are so we are getting an unbound type error when we uncomment.
// let invoice = {...invoice, total: invoice.total *. 0.8};
// Js.log(invoice);



let invoice =
 Invoice.make(
 ~name="Raphael",
 ~email="persianturtle@gmail.com",
 ~date=Js.Date.make(),
 ~total=15.0,
 );
Js.log(invoice);