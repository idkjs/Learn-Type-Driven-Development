let component = ReasonReact.statelessComponent("Home");
[@react.component]
let make = () => {
  <Title center=true underline=true> {ReasonReact.string("Page1")} </Title>;
};