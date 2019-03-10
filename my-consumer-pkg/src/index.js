import React from "react";

export function LazyThing() {
  const MyLazyThing = React.lazy(() => import("my-package/lib/my-thing"));

  return (
    <React.Suspense fallback="Loading...">
      <MyLazyThing />
    </React.Suspense>
  );
}
