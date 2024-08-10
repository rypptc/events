import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Platform, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <Text style={{fontSize:32}}>hello world</Text>
      <Text style={{fontSize:24}}>Platform: {Platform.OS === 'ios' ? 'iOS' : 'Android'}</Text>
      <ScrollView>
        <View style={{backgroundColor: 'pink', height: 1600, padding: 20}}>
          <Text>hello world</Text>
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
