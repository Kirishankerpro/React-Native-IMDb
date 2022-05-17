import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const App = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={{ backgroundColor: "#161616" }}>
          <View style={{ backgroundColor: "#212121" }}>
            <View style={styles.container}>
              <Image
                source={require("./assets/img/logo.png")}
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
                marginBottom: 10,
                marginLeft: 3,
                flexDirection: "row",
              }}
            >
              <Image
                style={{
                  height: 180,
                  width: 150,
                  resizeMode: "contain",
                }}
                source={require("./assets/img/film.jpg")}
              ></Image>
              <View style={{ marginTop: 5 }}>
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
                <TouchableOpacity
                  style={{
                    backgroundColor: "#0177bd",
                    marginTop: 20,
                    width: 210,
                    height: 35,
                    borderRadius: 3,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => {
                    alert("Added in your watchlist");
                  }}
                >
                  <Text style={{ color: "white", fontSize: 14 }}>
                    + ADD TO WATCHLIST
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <View
                style={{
                  height: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 100,
                }}
              >
                <FontAwesome name="star" size={24} color="yellow" />
                <Text style={{ color: "lightgrey" }}> 8,6/10</Text>
                <Text
                  style={{ color: "lightgrey", fontSize: 10, marginTop: 3 }}
                >
                  {" "}
                  1.1M{" "}
                </Text>
              </View>
              <View
                style={{
                  width: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome name="star-o" size={24} color="white" />
                <Text style={{ color: "lightgrey", marginTop: 8 }}>
                  {" "}
                  RATE THIS{" "}
                </Text>
              </View>
              <View
                style={{
                  width: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#63c551",
                    borderRadius: 3,
                    height: 32,
                    width: 32,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white" }}> 74 </Text>
                </View>
                <Text style={{ color: "lightgrey", marginTop: 3 }}>
                  Metascore
                </Text>
                <Text
                  style={{ color: "lightgrey", fontSize: 10, marginTop: 3 }}
                >
                  46 critic reviews
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#212121",
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 40,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 30,
                marginLeft: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Top Billed Cast
            </Text>
            <View
              style={{
                marginRight: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                // style={{ color: "green" }}
                title="See All"
                onPress={() => {
                  alert("See All");
                }}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#2A2A2A",
              flexDirection: "row",
              height: 370,
              marginTop: 15,
            }}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={{ marginTop: 10, marginLeft: 10, marginRight: 5 }}>
                <View style={{ backgroundColor: "#383838", padding: 15 }}>
                  <Image
                    style={{ height: 250, width: 150, borderRadius: 5 }}
                    source={require("./assets/img/matthew.jpg")}
                  ></Image>
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={{ color: "white", marginTop: 5, width: 149 }}
                  >
                    Matthew McConaughey
                  </Text>
                  <Text style={{ color: "lightgrey", marginTop: 5 }}>
                    Cooper
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginTop: 10,
                  marginLeft: 5,
                  marginRight: 5,
                }}
              >
                <View style={{ backgroundColor: "#383838", padding: 15 }}>
                  <Image
                    style={{ height: 250, width: 150, borderRadius: 5 }}
                    source={require("./assets/img/anne.jpg")}
                  ></Image>
                  <Text style={{ color: "white", marginTop: 5 }}>
                    {" "}
                    Anne Hathaway{" "}
                  </Text>
                  <Text style={{ color: "lightgrey", marginTop: 5 }}>
                    {" "}
                    Brand{" "}
                  </Text>
                </View>
              </View>
              <View style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}>
                <View style={{ backgroundColor: "#383838", padding: 15 }}>
                  <Image
                    style={{ height: 250, width: 150, borderRadius: 5 }}
                    source={require("./assets/img/jessica.jpg")}
                  ></Image>
                  <Text style={{ color: "white", marginTop: 5 }}>
                    {" "}
                    Jessica Chastain{" "}
                  </Text>
                  <Text style={{ color: "lightgrey", marginTop: 5 }}>
                    {" "}
                    Murph{" "}
                  </Text>
                </View>
              </View>
              <View style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}>
                <View style={{ backgroundColor: "#383838", padding: 15 }}>
                  <Image
                    style={{ height: 250, width: 150, borderRadius: 5 }}
                    source={require("./assets/img/mackenzie.jpg")}
                  ></Image>
                  <Text style={{ color: "white", marginTop: 5 }}>
                    {" "}
                    Mackenzie Foy{" "}
                  </Text>
                  <Text style={{ color: "lightgrey", marginTop: 5 }}>
                    {" "}
                    Murph (10 Yrs.){" "}
                  </Text>
                </View>
              </View>
              <View style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}>
                <View style={{ backgroundColor: "#383838", padding: 15 }}>
                  <Image
                    style={{ height: 250, width: 150, borderRadius: 5 }}
                    source={require("./assets/img/ellen.jpg")}
                  ></Image>
                  <Text style={{ color: "white", marginTop: 5 }}>
                    Ellen Burstyn
                  </Text>
                  <Text style={{ color: "lightgrey", marginTop: 5 }}>
                    Murph (Older)
                  </Text>
                </View>
              </View>
              <View style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}>
                <View style={{ backgroundColor: "#383838", padding: 15 }}>
                  <Image
                    style={{ height: 250, width: 150, borderRadius: 5 }}
                    source={require("./assets/img/john.jpg")}
                  ></Image>
                  <Text style={{ color: "white", marginTop: 5 }}>
                    John Lithgow
                  </Text>
                  <Text style={{ color: "lightgrey", marginTop: 5 }}>
                    Donald
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={{ backgroundColor: "#2A2A2A" }}>
            <View>
              <Text style={{ color: "white", fontSize: 20, marginLeft: 10 }}>
                Director
              </Text>
              <Text style={{ color: "white", marginTop: 5, marginLeft: 10 }}>
                Christopher Nolan
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "white",
                  marginLeft: 10,
                  marginTop: 30,
                  fontSize: 20,
                }}
              >
                Writters
              </Text>
              <Text
                style={{
                  color: "white",
                  marginLeft: 10,
                  marginTop: 5,
                  marginBottom: 25,
                }}
              >
                Jonathan Nolan (written by) and Christopher Nolan (written by)
              </Text>
            </View>
            <View style={{ marginBottom: 15 }}>
              <Text style={{ color: "white", fontSize: 15 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur aliquid blanditiis corporis praesentium molestiae
                error vitae laboriosam ut soluta molestias, minima ducimus aut
                deleniti ipsa eius. Rerum aut recusandae ducimus voluptatem
                reiciendis perspiciatis voluptatibus quam libero. Cupiditate
                quaerat laudantium consectetur nisi quibusdam, explicabo laborum
                iste vitae voluptatem nobis sit culpa officia impedit error
                voluptatibus repellat! Consectetur, excepturi explicabo autem
                veritatis repellendus accusamus soluta accusantium vitae quis
                nesciunt porro rem aliquid ipsam ea adipisci itaque, cum, unde
                ex. Adipisci dolorum cupiditate cumque libero voluptatum aliquam
                officia repellendus nemo, beatae praesentium corrupti excepturi
                voluptates molestias minima deleniti aperiam qui laboriosam?
                Mollitia molestiae fugit minus inventore alias itaque. Dolorum
                magnam adipisci cumque harum quaerat eaque laudantium quidem
                voluptas rerum eum quas autem, ab veritatis ducimus voluptatem
                incidunt pariatur possimus perspiciatis! Optio magni quasi
                repellat architecto neque fugiat rerum iusto animi, quaerat
                accusantium quo aspernatur ipsam iure dolores temporibus ullam
                aliquam error dignissimos harum. Dolor culpa facilis ipsam nihil
                laudantium nisi eveniet soluta blanditiis aspernatur adipisci
                suscipit accusamus modi voluptates molestias quidem at excepturi
                voluptatibus ea, omnis id reprehenderit rem. Nam modi, maxime
                excepturi autem nostrum consequuntur reiciendis culpa provident
                dolor ex aliquam laudantium magnam assumenda fuga optio sequi
                quaerat impedit dolore aliquid obcaecati exercitationem
                dignissimos! Doloremque illum, cupiditate repudiandae,
                repellendus ad nobis doloribus repellat aperiam libero omnis
                culpa excepturi nihil nostrum ex ratione maxime aspernatur?
                Distinctio ipsa ab corrupti eaque sit saepe porro odit ex natus
                in incidunt quo, eligendi voluptatibus sequi. Totam
                exercitationem unde aperiam dicta distinctio recusandae culpa
                sapiente facilis doloribus dolores ut quod, expedita error
                voluptatum at neque sunt praesentium. Aliquam molestias
                inventore eaque explicabo modi, architecto tenetur numquam
                veniam eveniet placeat quae sunt itaque iure nesciunt saepe quam
                soluta voluptatem, dolores officiis. Voluptatibus excepturi
                ducimus mollitia, maxime vitae debitis ipsam, in assumenda quas
                sit impedit, cupiditate ipsa provident facere! Laboriosam,
                officiis dolore, autem quos doloribus rerum iure sapiente
                aperiam esse nihil voluptatem reprehenderit aliquam tempora
                explicabo soluta quae sunt commodi sit ad incidunt consequatur
                praesentium saepe numquam. Totam eaque, cumque nihil laborum
                laudantium animi eum molestiae corporis dolorum voluptas
                quisquam, ex, explicabo aut adipisci commodi sit fugiat! Aut
                optio voluptate facere laudantium incidunt accusamus enim non
                iure similique dignissimos ex hic dicta excepturi fugiat
                voluptatem praesentium, molestias rem ipsa odit placeat
                obcaecati labore! Quasi, aliquam. Deleniti impedit tenetur
                ipsam. Aspernatur eligendi velit dolores inventore a
                accusantium. At quibusdam, unde, deserunt optio asperiores
                dolores blanditiis, error ad quasi nemo sapiente?
              </Text>
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
