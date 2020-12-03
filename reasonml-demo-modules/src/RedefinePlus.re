module DifferentPlus = {
    let (+) = (x, y) => x * y;
};
open !DifferentPlus;
// DifferentPlus.(
  print_int(3 + 6) /* 18 */
// );
