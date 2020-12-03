[@bs.val] external require: string => string = "require";
[@bs.val] [@bs.scope "performance"] external now: unit => float = "now";
[@bs.val]
external addEventListener: (string, unit => unit) => unit = "addEventListener";
[@bs.val]
external removeEventListener: (string, unit => unit) => unit =
  "removeEventListener";
require("../../../src/App.scss");

type touches = {
  first: option((float, float)),
  last: option((float, float)),
};

type state = {
  isOpen: bool,
  touches,
};

type action =
  | ToggleMenu(bool)
  | TouchStart(float)
  | TouchMove(float)
  | TouchEnd;

let initialState = {
  isOpen: false,
  touches: {
    first: None,
    last: None,
  },
};

[@react.component]
let make = (~currentRoute: Router.route) => {
  let (isOpen, setIsOpen) = React.useState(_ => false);
  let (touches, setTouches) = React.useState(_ => {first: None, last: None});
  let divRef = React.useRef(Js.Nullable.null);
  let width =
    switch (Js.Nullable.toOption(React.Ref.current(divRef))) {
    | None => 0.0
    | Some(nav) => ReactDOMRe.domElementToObj(nav)##clientWidth
    };

  let toggleMenu = isOpen => setIsOpen(_ => isOpen);
  let touchStart = clientX =>
    if (isOpen) {
      setTouches(_ => {first: Some((clientX, now())), last: None});
    } else {
      ();
    };
  let touchMove = clientX =>
    if (isOpen) {
      setTouches(_ => {...touches, last: Some((clientX, now()))});
    } else {
      ();
    };
  let touchEnd = () =>
    if (isOpen) {
      let (x, t) = Belt.Option.getWithDefault(touches.first, (0.0, 0.0));
      let (x', t') = Belt.Option.getWithDefault(touches.last, (0.0, 0.0));
      let velocity = (x' -. x) /. (t' -. t);
      setTouches(_ => {first: None, last: None});
      if (velocity < (-0.3) || x' < width /. 2.0) {
        toggleMenu(false);
      } else {
        ();
      };
    };
  React.useEffect(() => {
    let handler = () => toggleMenu(false);
    addEventListener("popstate", handler);
    Some(() => removeEventListener("popstate", handler));
  });
  <div
    className={"App" ++ (isOpen ? " overlay" : "")}
    onClick={_event =>
      if (isOpen) {
        toggleMenu(false);
      }
    }
    onTouchStart={event =>
      touchStart(ReactEvent.Touch.changedTouches(event)##item(0)##clientX)
    }
    onTouchMove={event =>
      touchMove(ReactEvent.Touch.changedTouches(event)##item(0)##clientX)
    }
    onTouchEnd={_event => touchEnd()}>
    <header>
      <a
        onClick={event => {
          ReactEvent.Mouse.stopPropagation(event);
          toggleMenu(true);
        }}>
        <img src={require("../../../src/img/icon/hamburger.svg")} />
      </a>
      <h1> {ReasonReact.string(currentRoute.title)} </h1>
    </header>
    <nav
      className={isOpen ? "active" : ""}
      onClick={event => ReactEvent.Mouse.stopPropagation(event)}
      style={
        switch (touches) {
        | {first: Some((x, _)), last: Some((x', _))} =>
          ReactDOMRe.Style.make(
            ~transform=
              "translateX("
              ++ Js.Float.toString(x' -. x > 0.0 ? 0.0 : x' -. x)
              ++ "0px)",
            ~transition="none",
            (),
          )
        | _ => ReactDOMRe.Style.make()
        }
      }
      ref={ReactDOMRe.Ref.domRef(divRef)}>
      <header>
        <a onClick={_event => toggleMenu(false)}>
          <img src={require("../../../src/img/icon/arrow.svg")} />
          {ReasonReact.string(currentRoute.title)}
        </a>
      </header>
      <label> {ReasonReact.string("home")} </label>
      <ul>
        <li>
          <Router.NavLink href="/">
            {ReasonReact.string("Home")}
          </Router.NavLink>
        </li>
      </ul>
      <label> {ReasonReact.string("pages")} </label>
      <ul>
        <li>
          <Router.NavLink href="/page1">
            {ReasonReact.string("Page1")}
          </Router.NavLink>
        </li>
        <li>
          <Router.NavLink href="/page2">
            {ReasonReact.string("Page2")}
          </Router.NavLink>
        </li>
        <li>
          <Router.NavLink href="/page3">
            {ReasonReact.string("Page3")}
          </Router.NavLink>
        </li>
      </ul>
    </nav>
    <main> {currentRoute.component} </main>
  </div>;
};