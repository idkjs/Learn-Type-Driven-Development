function dynamic(a) {
  switch (typeof a) {
    case "string":
      return "String: " + a;
    case "number":
      return "Number: " + a;
  }
}
module.exports.dynamic = dynamic;