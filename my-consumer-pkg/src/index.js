import React from "react";

const MyLazyThing = React.lazy(() => import("my-package/lib/my-thing"));

export default function LazyThing() {
  return (
    <React.Suspense fallback="Loading...">
      <MyLazyThing />
    </React.Suspense>
  );
}
