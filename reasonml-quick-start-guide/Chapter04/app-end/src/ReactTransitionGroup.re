// this is the binding in Jsx2. Instructive for when updating old bindings

/**
 *  [@bs.module "react-transition-group"]
external transitionGroup: ReasonReact.reactClass = "TransitionGroup";

[@bs.module "react-transition-group"]
external cssTransition: ReasonReact.reactClass = "CSSTransition";

// then you have to use the binding like this:
module TransitionGroup = {
  let make = children =>
    ReasonReact.wrapJsForReason(
      ~reactClass=transitionGroup,
      ~props=Js.Obj.empty(),
      children,
    );
};
This all happens in the same step in Jsx3 as seen below.

 */

// this is what it looks like updated. `external cssTransition: ReasonReact.reactClass` becomes `[@react.component] external make:...`


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