[%bs.raw {|require('../../../src/Index.scss')|}];

ReactDOMRe.renderToElementWithId(
  <Router.WithRouter>
    ...{(~currentRoute) => <AppHooks currentRoute />}
  </Router.WithRouter>,
  "root",
);