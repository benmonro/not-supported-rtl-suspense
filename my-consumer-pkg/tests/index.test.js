import React from "react";

import { render, waitForElement, cleanup } from "react-testing-library";
import MyOtherPackageThing from "my-package/lib/my-thing";
import LazyThing from "../src/index";

afterEach(cleanup);

test("it works", async () => {
  const { getByText, debug } = render(<MyOtherPackageThing />);

  await waitForElement(() => getByText("my thing"));

  expect(getByText("my thing"));
});

test("it lazy loads a local component", async () => {
  const LazyLocalThing = React.lazy(() => import("../src/LocalThing"));
  const { getByText, debug } = render(
    <React.Suspense fallback="Loading...">
      <LazyLocalThing />
    </React.Suspense>
  );
  debug();
  await waitForElement(() => getByText("my local thing"));
  debug();
  expect(getByText("my local thing"));
});

test("it says not supported, like wtf", async () => {
  const { getByText, debug } = render(<LazyThing />);
  debug();
  await waitForElement(() => getByText("my thing"));
  debug();
  expect(getByText("my thing"));
});
