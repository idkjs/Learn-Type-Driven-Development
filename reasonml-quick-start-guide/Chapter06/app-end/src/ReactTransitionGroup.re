[@bs.val] external require: string => string = "require";
require("../../../src/ReactTransitionGroup.scss");


module TransitionGroup = {
  [@bs.module "react-transition-group"] [@react.component]
  external make: (~children: React.element) => React.element =
    "TransitionGroup";
};

module CSSTransition = {
  [@bs.module "react-transition-group"] [@react.component]
  external make:
    (
      ~_in: bool,
      ~timeout: int,
      ~classNames: string,
      ~children: React.element
    ) =>
    React.element =
    "CSSTransition";
};