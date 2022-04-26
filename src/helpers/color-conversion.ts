import convert from "color-convert";

const parsedRegEx = /\d+/g

function parseColorString(colorString: string) {
  return colorString.match(parsedRegEx).map((color) => parseInt(color));
}

function hslToRgb(hslString: string) {
  const colorArray = parseColorString(hslString);
  return convert.hsl.rgb(colorArray[0], colorArray[1], colorArray[2])
}

export { hslToRgb, parseColorString };
