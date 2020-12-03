[@bs.val] external require: string => string = "require";

require("../../../src/App.scss");

type state = {isOpen: bool};

type action =
  | ToggleMenu(bool);

let initialState = {isOpen: false};
let reducer = (_state, action) =>
  switch (action) {
  | ToggleMenu(isOpen) => {isOpen: isOpen}
  };
[@react.component]
let make = () => {
  let (state, dispatch) = React.useReducer(reducer, initialState);
  <div
    className={"App" ++ (state.isOpen ? " overlay" : "")}
    onClick={_event =>
      if (state.isOpen) {
        dispatch(ToggleMenu(false));
      }
    }>
    <header>
      <a
        onClick={event => {
          ReactEvent.Mouse.stopPropagation(event);
          dispatch(ToggleMenu(true));
        }}>
        <img src={require("../../../src/img/icon/hamburger.svg")} />
      </a>
      <h1> {React.string("Home")} </h1>
    </header>
    <nav
      className={state.isOpen ? "active" : ""}
      onClick={event => ReactEvent.Mouse.stopPropagation(event)}>
      <header>
        <a onClick={_event => dispatch(ToggleMenu(false))}>
          <img src={require("../../../src/img/icon/arrow.svg")} />
          {React.string("Home")}
        </a>
      </header>
      <label> {React.string("home")} </label>
      <ul> <li> <a> {React.string("Home")} </a> </li> </ul>
      <label> {React.string("pages")} </label>
      <ul>
        <li> <a> {React.string("Page1")} </a> </li>
        <li> <a> {React.string("Page2")} </a> </li>
        <li> <a> {React.string("Page3")} </a> </li>
      </ul>
    </nav>
    <main> React.null </main>
  </div>;
};