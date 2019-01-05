let app = require("./index");

test("add", () => {
  let x = 3;
  let y = 3;
  let result = app.add(x, y);
  expect(result).toEqual(3 + 3);
});

test("sub", () => {
  let x = 3;
  let y = 2;
  let result = app.sub(x, y);
  expect(result).toEqual(3 - 2);
});

test("mul", () => {
  let x = 2;
  let y = 2;
  let result = app.mul(x, y);
  expect(result).toEqual(2 * 2);
});

test("div", () => {
  let x = 2;
  let y = 2;
  let result = app.div(x, y);
  expect(result).toEqual(2 / 2);
});
