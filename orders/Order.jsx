import { Image, StyleSheet, Text, ToastAndroid, View } from "react-native";
import { theme } from "../../style/Theme";
import { ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { getOrders } from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Iconify } from "react-native-iconify";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    const id = await AsyncStorage.getItem("token");
    if (id) {
      try {
        const result = await getOrders(id);
        console.log(result);
        let temp = [];
        result.map((item) => {
          if (item.status === "Delivered" || item.status === "Cancel") {
            temp = [...temp, item];
          } else {
            temp = [item, ...temp];
          }
        });
        setOrders(temp);
        ToastAndroid.show("Order Refreshed", ToastAndroid.SHORT);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  const OrderCard = (data) => (
    <View
      style={{
        ...styles.orderBox,
        backgroundColor:
          data?.status === "Delivered" || data?.status === "Cancel"
            ? theme.colors.tertiary
            : theme.colors.white,
        opacity:
          data?.status === "Delivered" || data?.status === "Cancel" ? 0.5 : 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <View>
            <Image
              style={{ width: 70, height: 70, borderRadius: 5 }}
              source={{
                uri: data?.restaurant.logoUrl,
              }}
            />
          </View>
          <View>
            <Text style={{ color: theme.colors.tertiary }}>
              {data?.quantity.reduce((a, b) => a + b, 0)} Items
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              {data?.restaurant.name}
            </Text>
          </View>
        </View>

        <View style={{ marginRight: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Date</Text>
          <Text>
            {data?.createdDateTime &&
              new Date(data?.createdDateTime).toDateString()}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          {data?.itemNames.map((item, index) => (
            <Text key={index}>
              {item.substring(0, 20)}.... x {data?.quantity[index]}
            </Text>
          ))}
        </View>
        <View style={{ flexDirection: "row", width: "30%", gap: 10 }}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>Price</Text>
            <Text>{data?.totalPrice}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>Status</Text>
            <Text>{data?.status}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <Text style={styles.head}>My Orders</Text>
        <Iconify
          icon="ic:baseline-refresh"
          size={30}
          color={theme.colors.tertiary}
          onPress={fetchOrders}
        />
      </View>
      <ScrollView>
        {orders.map((item, index) => (
          <OrderCard key={index} {...item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: 10,
  },
  head: {
    fontSize: theme.font.fontSize.subTitle,
    fontWeight: "bold",
    color: theme.colors.tertiary,
    marginVertical: 10,
    textAlign: "center",
  },
  orderBox: {
    borderWidth: 1,
    borderColor: theme.colors.tertiary,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
});

export default Order;
