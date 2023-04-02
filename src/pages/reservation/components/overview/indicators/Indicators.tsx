import { useContext } from "react";
import { Text, View } from "react-native";
import { RestaurantOverviewContext } from "../../../../../context/RestaurantOverviewContext";
import { styles } from "./IndicatorsStyles";

const Indicators = () => {
  const { indicators } = useContext(RestaurantOverviewContext);
  const {
    ratings: { score, denom, quantity },
    cuisines,
    price: { price, currency, partySize },
  } = indicators;
  return (
    <View style={styles.body}>
      <Text>
        Rating: {score} / {denom} ⭐️ {quantity} Reviews
      </Text>
      <Text>Cuisines: {cuisines.slice(0, 3).join(", ")}</Text>
      <Text>
        Price: {currency}
        {price} for {partySize}
      </Text>
    </View>
  );
};

export default Indicators;
