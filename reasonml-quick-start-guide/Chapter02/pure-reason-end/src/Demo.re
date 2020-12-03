[@bs.val] [@bs.scope "document"]
external createElement: string => Dom.element = "createElement";

[@bs.set] external setInnerText: (Dom.element, string) => unit = "innerText";

[@bs.val] [@bs.scope "document.body"]
external appendChild: Dom.element => Dom.element = "appendChild";

let div = createElement("div");
setInnerText(div, Greeting.greeting("world"));
appendChild(div);
