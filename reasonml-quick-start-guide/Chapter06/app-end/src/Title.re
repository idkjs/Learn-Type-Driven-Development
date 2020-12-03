%bs.raw
{|const styled = require("styled-components").default|};
type props = {
  .
  "center": bool,
  "underline": bool,
};
// [@bs.deriving abstract]
// type jsProps = {
//   center: bool,
//   underline: bool,
// };
let title = [%bs.raw
  {|
     styled.h1`
       text-align: props => props.center ? "center" : "left";
       text-decoration: props => props.underline ? "underline" : "none";
       color: white;
       background-color: coral;
     `
   |}
];

[@react.component]
let make = (~center=false, ~underline=false, ~children) => {
  let props = {"center":center, "underline":underline};
  let title = title(props);
  children(title);
};