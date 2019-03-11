import React from "react";

import { render, waitForElement, cleanup } from "react-testing-library";
import MyPackageThing from "my-package/lib/my-thing";
import LazyThing from "../src/index";

afterEach(cleanup);

test("it works", async () => {
  const { getByText, debug } = render(<MyPackageThing />);

  await waitForElement(() => getByText("my thing"));

  expect(getByText("my thing"));
});

test("it says not suported, like wtf", async () => {
  const { getByText, debug } = render(<LazyThing />);
  debug();
  await waitForElement(() => getByText("my thing"));
  debug();
  expect(getByText("my thing"));
});
