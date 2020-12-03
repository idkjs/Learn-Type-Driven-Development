// note here the editor tells us the type is `undiscounted`. Check the next invoice and it shows the type as `discounted` because that is what is returned from the `discount` function
//  ```re
// Invoice.t(
//   Invoice.undiscounted
// )
// type t('a)
// ```
let invoice =
  Invoice.make(
    ~name="Raphael",
    ~email="persianturtle@gmail.com",
    ~date=Js.Date.make(),
    ~total=15.0,
  );
let invoice = Invoice.(discount(~invoice, ~discount=Ten));
Js.log2("invoice", invoice);
// let invoice = Invoice.(discount(~invoice, ~discount=Ten));
/* discounted twice throws error because of how we set up `.rei` where `Invoice` can only accept an undiscounted invoice, so on the second call, its been discounted, can no longer be discounted and so its the wrong type.
   ```
    7 │   );
      8 │ let invoice = Invoice.(discount(~invoice, ~discount=Ten));
      9 │ let invoice = Invoice.(discount(~invoice, ~discount=Ten));
     10 │ /* discounted twice */
     11 │ Js.log(invoice);

     This has type:
       PhantomTypes.Invoice.t(PhantomTypes.Invoice.discounted) (defined as
         PhantomTypes.Invoice.t(PhantomTypes.Invoice.discounted))
     But somewhere wanted:
       PhantomTypes.Invoice.t(PhantomTypes.Invoice.undiscounted) (defined as
         PhantomTypes.Invoice.t(PhantomTypes.Invoice.undiscounted))

     The incompatible parts:
       PhantomTypes.Invoice.discounted (defined as
         PhantomTypes.Invoice.discounted)
       vs
       PhantomTypes.Invoice.undiscounted (defined as
         PhantomTypes.Invoice.undiscounted)

   FAILED: subcommand failed.
   >>>> Finish compiling(exit: 1)
   ```
    */