type route = {
  href: string,
  title: string,
  component: ReasonReact.reactElement,
};

let routes = [
  {href: "/", title: "Home", component: <Home />},
  {href: "/page1", title: "Page1", component: <Page1 />},
  {href: "/page2", title: "Page2", component: <Page2 />},
  {href: "/page3", title: "Page3", component: <Page3 />},
];

let hrefToPath = href =>
  Js.String.replaceByRe([%bs.re "/(^\\/)|(\\/$)/"], "", href)
  |> Js.String.split("/")
  |> Belt.List.fromArray;

let urlToRoute = (url: ReasonReact.Router.url) =>
  switch (
    Belt.List.getBy(routes, route => url.path == hrefToPath(route.href))
  ) {
  | None => Belt.List.headExn(routes)
  | Some(route) => route
  };

module WithRouter = {
  type state = route;
  type action =
    | ChangeRoute(route);
  [@react.component]
  let make = (~children) => {
    let (state, dispatch) =
      React.useReducer(
        (_state, action) =>
          switch (action) {
          | ChangeRoute(route) => route
          },
        {
          ReasonReact.Router.dangerouslyGetInitialUrl() |> urlToRoute;
        },
      );

    React.useEffect1(
      () => {
        let watcherID =
          ReasonReact.Router.watchUrl(url =>
            ChangeRoute(urlToRoute(url)) |> dispatch
          );
        Some(() => ReasonReact.Router.unwatchUrl(watcherID));
      },
      [|dispatch|],
    );

    children(~currentRoute=state);
  };
};

module Link = {
  [@react.component]
  let make = (~href, ~className="", ~children) => {
    <a
      href
      className
      onClick={event => {
        ReactEvent.Mouse.preventDefault(event);
        ReasonReact.Router.push(href);
      }}>
      children
    </a>;
  };
};

module NavLink = {
  [@react.component]
  let make = (~href, ~children) => {
    <WithRouter>
      ...{(~currentRoute) =>
        <Link href className={currentRoute.href == href ? "active" : ""}>
          children
        </Link>
      }
    </WithRouter>;
  };
};