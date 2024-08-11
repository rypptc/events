import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
export default function App() {
  const [text, setText] = useState("");
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.titleText}>hello world</Text>
      <Text style={styles.platformText}>Platform: {Platform.OS === 'ios' ? 'iOS' : 'Android'}</Text>
      <ScrollView>
        <View style={styles.contentContainer}>
          <TextInput 
            defaultValue={text}
            onChangeText={txt => setText(txt)}
            style={styles.textInput}
          />
          <Button title="press me" onPress={() => console.log("Hello World!!")} />
          <TouchableOpacity 
            style={styles.touchable}
            onPress={() => console.log("Hello World 2")}
          >
            <Text style={styles.touchableText}>Click me too</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,  // Adds padding for Android devices
  },
  titleText: {
    fontSize: 32,
  },
  platformText: {
    fontSize: 24,
  },
  contentContainer: {
    backgroundColor: 'pink',
    height: 1600,
    padding: 20,
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
  },
  touchable: {
    padding: 10,
    backgroundColor: "purple",
    width: 150,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  touchableText: {
    color: "white",
  },
});
