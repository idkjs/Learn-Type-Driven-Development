let printEnveloppeLabel =
    (
      ~firstname: string,
      ~lastname: string,
      ~address: string,
      ~country: string,
    )
    : unit => {
  print_newline();
  print_endline(firstname ++ " " ++ lastname);
  print_endline(address);
  print_endline(country);
};

printEnveloppeLabel(
  ~firstname="John",
  ~lastname="Doe",
  ~address="Some address in the US",
  ~country="USA",
);

let printEnveloppeLabelUS = printEnveloppeLabel(~country="USA");
printEnveloppeLabelUS(
  ~firstname="John",
  ~lastname="Doe",
  ~address="Some address in the US",
);

let printEnveloppeLabelDoeFamily =
  printEnveloppeLabelUS(~lastname="Doe", ~address="Some address in the US");
printEnveloppeLabelDoeFamily(~firstname="Jane");
