import { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const NewEventScreen = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [alert, setAlert] = useState({
    isVisible: false,
    msg: '',
  });

  const handleAddEvent = async () => {
    const formattedDate = date.toISOString().slice(0, 10);
    const data = {
      name,
      description,
      date: formattedDate,
    };

    try {
      // const response = await fetch('http://127.0.0.1:8000/api/events/', {
      const response = await fetch('http://192.168.100.12:8000/api/events/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Event added successfully');
        // Optionally reset the form here
        setName('');
        setDescription('');
        setDate(new Date());
      } else {
        console.error('Failed to add event');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.screen}>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="name"
        style={styles.input}
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="description"
        multiline={true}
        style={styles.input}
      />
      <TextInput
        value={date.toLocaleString()}
        onChangeText={setDate}
        placeholder="event date"
        style={styles.input}
      />
      <Button onPress={handleAddEvent} title="Add Event" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
  },
});

export default NewEventScreen;
