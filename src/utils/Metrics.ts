import { Dimensions } from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("screen");

const guidelineBaseWidth = 100;
const guidelineBaseHeight = 100;

const horizontalScale = (size: number, width: number = windowWidth): number =>
  (width / guidelineBaseWidth) * size;
const verticalScale = (size: number, height: number = windowHeight): number =>
  (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (horizontalScale(size) - size) * factor;

export { horizontalScale, verticalScale, moderateScale };
