import { hslToRgb, parseColorString } from "../src/helpers/color-conversion";

test("returns correct arguments", () => {
  expect(parseColorString("rgb(200, 5, 7")).toEqual([200, 5, 7]);
});

test("converts HSL to RGB", () => {
  expect(hslToRgb("hsl(217, 91, 60)")).toEqual([60, 131, 246]);
});
