# Phantom Types

source: <https://subscription.packtpub.com/book/application_development/9781789340785/5/ch05lvl1sec32/phantom-types>

Phantom types are types that have a type variable, but this type variable isn't used in its definition.

To better understand, let's look again at the option type, as shown in the following code:

```reason
type option('a) =
  | None
  | Some('a);
```

The `option` type has a type variable, `'a`, and the type variable is being used in its definition. As we've already learned, option is a `polymorphic` type because it has a type variable. On the other hand, a `phantom type` doesn't use the type variable in its definition. Let's see how this is useful with our invoice management example.

Let's change the Invoice module's signature to use a phantom type, as follows:

```re
/* Invoice.rei */
type t('a);

type discounted;
type undiscounted;

type discount =
  | Ten
  | Fifteen
  | Twenty;

let make:
  (~name: string, ~email: string, ~date: Js.Date.t, ~total: float) =>
  t(undiscounted);

let discount:
  (~invoice: t(undiscounted), ~discount: discount) => t(discounted);
```

The abstract `type t` is now type `t('a)`. We also have two more abstract types, as shown in the following code:

```re
// need to add to both `.rei` and `.re`
type discounted;
type undiscounted;
```

Also, note that the `make` function now returns `t(undiscounted)` (instead of just `t`) and the `discount` function now accepts `t(undiscounted)` and returns `t(discounted)`. Remember that the abstract `t('a)` accepts a type variable, and that the type variable just so happens to be either the `discounted` type or the `undiscounted` type.

In the implementation, we can now get rid of the runtime check we had previously, as shown in the following code:

```re
if (isDiscounted) {
  ...
} else {
  ...
}
// previous code
let discount = (~invoice, ~discount) => {
  let (name, email, date, total, isDiscounted) = invoice;
  // this is what we are getting rid of.
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
```

Now, this check is done at compile time since the `discount` function only accepts `undiscounted` invoices, as shown in the following code:

```re
/* Invoice.re */
type t('a) = {
  name: string,
  email: string,
  date: Js.Date.t,
  total: float,
};

type discount =
  | Ten
  | Fifteen
  | Twenty;

let make = (~name, ~email, ~date, ~total) => {name, email, date, total};

let discount = (~invoice, ~discount) => {
  ...invoice,
  total:
    invoice.total
    *. (
      switch (discount) {
      | Ten => 0.9
      | Fifteen => 0.85
      | Twenty => 0.8
      }
    ),
};
```

This is just one more way that a type system can help us focus more on logic and less on error handling. Previously, trying to discount an invoice twice would just return the original invoice unchanged. Let's now try to discount an invoice twice in `Email.re` using the following code:

```re
/* Email.re */
let invoice =
  Invoice.make(
    ~name="Raphael",
    ~email="persianturtle@gmail.com",
    ~date=Js.Date.make(),
    ~total=15.0,
  );
let invoice = Invoice.(discount(~invoice, ~discount=Ten));
let invoice = Invoice.(discount(~invoice, ~discount=Ten)); /* discounted twice */
Js.log(invoice);
```

Now, trying to discount an invoice twice will result in a lovely compile-time error, as follows:

```re
We've found a bug for you!

   7 │ );
   8 │ let invoice = Invoice.(discount(~invoice, ~discount=Ten));
   9 │ let invoice = Invoice.(discount(~invoice, ~discount=Ten));
  10 │ Js.log(invoice);

  This has type:
    Invoice.t(Invoice.discounted)
  But somewhere wanted:
    Invoice.t(Invoice.undiscounted)
```

This is absolutely beautiful. Suppose, however, that you'd like to be able to email any invoice—discounted or not. Does our use of phantom types cause a problem? How would we write a function that takes any invoice type? We'll, remember that our invoice type is `Invoice.t('a)` and if we want to accept any invoice, we keep the type parameter, as shown in the following code:

```re
/* Email.re */
let invoice =
  Invoice.make(
    ~name="Raphael",
    ~email="persianturtle@gmail.com",
    ~date=Js.Date.make(),
    ~total=15.0,
  );

let send: Invoice.t('a) => unit = invoice => {
 /* send invoice email */
 Js.log(invoice);
};

send(invoice);
```
