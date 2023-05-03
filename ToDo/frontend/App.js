import React, { Component } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Navigation from "./navigation";
import { UserProvider } from "./src/components/UserContext";
export default function App() {
  return (
    <UserProvider>
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
});
