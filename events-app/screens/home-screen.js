import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import EventList from "../components/events/event-list";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    console.log("refreshing");
    setRefresh((prevState) => !prevState);
    fetchData();
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const response = await fetch("http://127.0.0.1:8000/api/events/");
    const response = await fetch("http://192.168.100.12:8000/api/events/");
    const data = await response.json();
    setData(data);
  };


  return (
    <View style={styles.screen}>
      <EventList data={data} onRefresh={handleRefresh} refreshing={refresh} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});

export default HomeScreen;