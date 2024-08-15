import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import EventList from "../components/events/event-list";

const HomeScreen = () => {
  const [data, setData] = useState([]);

  // Fetch data from the API
  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/events/");
    const data = await response.json();
    setData(data);
  };

  // Run fetchData when the component mounts
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.screen}>
      <EventList data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});

export default HomeScreen;