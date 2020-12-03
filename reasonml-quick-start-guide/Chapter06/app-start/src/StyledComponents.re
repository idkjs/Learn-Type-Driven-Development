// module TransitionGroup = {
//   [@bs.module "react-transition-group"] [@react.component]
//   external make: (~children: React.element) => React.element =
//     "TransitionGroup";
// };
/* StyledComponents.re */
[@bs.module "styled-components"]
[@bs.scope "default"]
[@bs.variadic]
[@react.component]
external h1: (array(string), array('a)) => React.element = "h1";

module Title = {
  [@react.component]
  let title =
    h1(
      [|
        "text-align: ",
        "; text-decoration: ",
        "; color: white; background-color: coral;",
      |],
      [|
        props => props##center ? "center" : "left",
        props => props##underline ? "underline" : "none",
      |],
    );

  [@bs.deriving abstract]
  type jsProps = {
    center: bool,
    underline: bool,
  };

  let make = (~center=false, ~underline=false, ~children) =>
    ReasonReact.wrapJsForReason(
      ~reactClass=title,
      ~props=jsProps(~center, ~underline),
      children,
    );
};