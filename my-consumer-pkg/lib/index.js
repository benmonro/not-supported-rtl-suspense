import React from "react";
export function LazyThing() {
  var MyLazyThing = React.lazy(function () {
    return import("my-package/lib/my-thing");
  });
  return React.createElement(React.Suspense, {
    fallback: "Loading..."
  }, React.createElement(MyLazyThing, null));
}