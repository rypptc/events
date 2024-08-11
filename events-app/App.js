import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform, ScrollView, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = useState("");
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={{ fontSize: 32 }}>hello world</Text>
      <Text style={{ fontSize: 24 }}>Platform: {Platform.OS === 'ios' ? 'iOS' : 'Android'}</Text>
      <ScrollView>
        <View style={{ backgroundColor: 'pink', height: 1600, padding: 20 }}>
          <TextInput 
            defaultValue={text}
            onChangeText={txt => setText(txt)}
          />
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
});
