import { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { RestaurantOverviewContext } from "../../../../../context/RestaurantOverviewContext";
import { styles } from "./DetailsStyles";
import { RestaurantDetailsInfoType } from "../../../../../types/domain/reservation/restaurant/overview/RestaurantOverviewTypes";

const detailsNormalizer: (details: RestaurantDetailsInfoType) => string[] = (
  details
) => {
  const {
    address,
    website,
    phone,
    cuisines,
    paymentOptions,
    workingTimes,
    features,
    tags,
  } = details;
  const normalizedFeatures = [
    ...[
      features?.map(
        (feature) => `${feature.name}: ${feature.enabled ? "✅" : "🚫"}`
      ),
    ],
  ];
  return [
    `Address: ${address}`,
    `Website: ${website}`,
    `Phone: ${phone}`,
    `Cuisines: ${cuisines.slice(0, 3).join(", ")}`,
    `Payment Options: ${paymentOptions.slice(0, 3).join(", ")}`,
    `Working hours: ${
      workingTimes.friday?.slice(0, 2).join(" - ") || "CLOSED"
    }`,
    tags,
    ...normalizedFeatures,
  ].flat();
};

const Details = () => {
  const { details } = useContext(RestaurantOverviewContext);

  const arr = detailsNormalizer(details);

  return (
    <View style={styles.body}>
      <Text>Restaurant Details</Text>
      <FlatList
        data={arr}
        renderItem={({ item }) => (
          <View style={{ paddingVertical: 8 }}>
            <Text>🟢 {item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Details;
