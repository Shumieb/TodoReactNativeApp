import { Link } from "expo-router";
import { Text, View, Pressable, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.pageHeading}>
        Welcome to the Todos App
      </Text>
      <Link href="/todos" asChild>
        <Pressable style={styles.viewBtn}>
          <Text style={styles.viewBtnText}>View Todos</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pageHeading: {
    fontSize: 20,
    paddingVertical: 4,
    marginBottom: 8,
  },
  viewBtn: {
    borderStyle: "solid",
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#042326",
    borderWidth: 2,
    borderColor: "#042326",
    borderRadius: 8,
  },
  viewBtnText: {
    fontSize: 16,
    color: "white",
  }
});
