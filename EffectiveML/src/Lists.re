type list('a) =
  | Empty
  | Head('a, list('a));

Head("first", Head("second", Head("third", Empty)));

// Recursion
// Since list is a recursive data structure, we typically use recursion when working with it.

// To get warmed up, let's write a (naive) function that sums a list of integers:
let rec sum = list => switch(list) {
  | [] => 0
  | [hd, ...tl] => hd + sum(tl)
};
sum([1, 2, 3])->Js.log
// does this;
// 1 + sum([2, 3])
// 1 + 2 + sum([3])
// 1 + 2 + 3
// and returns this:
// 6

// Let's get a bit more comfortable with lists and recursion by analyzing another (naive) function that reverses a list:
// Again, we use rec to define a recursive function
// Again, we use pattern matching on the list—if it's empty, stop recursion; otherwise, continue with a smaller list
// The @ operator appends the second list to the end of the first list
// This implementation of reverse is naive for two reasons:

// It's not tail call optimized (nor is our sum function)
// It uses append (@), which is slower than prepend
let rec reverse = list => switch(list) {
  | [] => []
  | [hd, ...tl] => reverse(tl) @ [hd]
};

// Passing in the previously defined list (["first", "second", "third"]) results in the following steps:

// reverse(["first", "second", "third"])
// reverse(["second", "third"]) @ ["first"]
// reverse(["third"]) @ ["second"] @ ["first"]
// reverse([]) @ ["third"] @ ["second"] @ ["first"]
// [] @ ["third"] @ ["second"] @ ["first"]
// ["third", "second", "first"]
reverse(["first", "second", "third"])|>Js.log

//  A better implementation would be to use a local helper function with an accumulator:

// Now, its tail call is optimized and it uses prepend instead of append. In Reason, you prepend to a list using the `...` syntax:
let reverse = list => {
  // this is the local helper function
  let rec aux = (list, acc) => switch(list) {
    | [] => acc
    | [hd, ...tl] => aux(tl, [hd, ...acc])
  };
  aux(list, []);
};

let list = ["first", "second", "third"]
let list = ["prepended", ...list]|>Js.log;

// Pipes

// Withoug piping
Belt.List.(reduce(map([1, 2, 3], e => e + 1), 0, (+)))

// with piping doesn't require the reader to read it inside out:
Belt.List.(
 [1, 2, 3]
 ->map(e => e + 1)
 ->reduce(0, (+))
);
//  using fast pipe looks similar to chaining in JavaScript. Unlike JavaScript, we can pass reduce the + function, since it is just a normal function that accepts two arguments and adds them. The parentheses are necessary to tell Reason to treat the infix operator (+) as an identifier.

