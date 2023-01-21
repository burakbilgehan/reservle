import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 100;
const guidelineBaseHeight = 100;

const horizontalScale = (size: number): number =>
  (width / guidelineBaseWidth) * size;
const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (horizontalScale(size) - size) * factor;

export { horizontalScale, verticalScale, moderateScale };
