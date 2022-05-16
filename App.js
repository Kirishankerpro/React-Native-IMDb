import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
} from "react-native";

const App = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={{ backgroundColor: "#212121" }}>
          <View style={styles.container}>
            <Image
              source={require("./assets/logo.png")}
              style={{ height: 50, width: 50, marginLeft: 15 }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 25,
                marginLeft: 30,
              }}
            >
              Welcome to IMDb
            </Text>
            <StatusBar style="auto" />
          </View>
          <View style={{ marginTop: 15 }}>
            <View>
              <Text
                style={{
                  fontSize: 35,
                  color: "lightgrey",
                  marginBottom: 12,
                  marginLeft: 10,
                }}
              >
                Intersellar
              </Text>
              <Text style={{ color: "lightgrey", marginLeft: 10 }}>
                2014 PG-13 2h49min Adventure, Drama, Sci-Fi
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 30,
              marginBottom: 30,
              marginLeft: 3,
              flexDirection: "row",
            }}
          >
            <Image
              style={{ height: 180, width: 150, resizeMode: "contain" }}
              source={require("./assets/film.jpg")}
            ></Image>
            <View>
              <Text
                style={{
                  color: "white",
                  width: 210,
                  fontSize: 13,
                }}
              >
                A team of explorers travel through wormhole in space in an
                attempt to ensure humanity's survival.
              </Text>
              <Text style={{ color: "white", marginTop: 30 }}></Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 80,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "left",
    backgroundColor: "#393939",
  },
});
