import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import { CheckBox } from "react-native-elements";
import axios from "axios";
const Today = () => {
  const [tasks, setTasks] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [isSelected, setSelection] = useState(false);
  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8080/api/tasks?id=${user.id}`
      );
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const deletE = async (task) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/tasks/delete/${task.id}`
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleCheckBoxClick = async (task) => {
    const data = {
      id: task.id,
      title: task.title,
      description: task.description,
      done: !task.done,
    };
    try {
      const response = await axios.put(
        `http://localhost:8080/api/tasks/update/${task.id}`,
        data
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <View style={styles.container}>
      {tasks.length > 0 ? (
        tasks.map((task) =>
          task.user.id === user.id ? (
            <View key={task.id} style={styles.row}>
              <Text style={styles.title}>{task.title}</Text>
              <Text style={styles.description}>{task.description}</Text>
              <Text style={styles.date}>{task.due_date}</Text>
              <CheckBox
                value={task.done}
                onValueChange={!task.done}
                onPress={() => handleCheckBoxClick(task)}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: "red",
                  margin: 20,
                }}
                onPress={() => deletE(task)}
              >
                <Text
                  style={{ fontSize: 18, color: "white", fontWeight: "600" }}
                >
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          ) : null
        )
      ) : (
        <Text>No tasks to display</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
  },
  date: {
    fontSize: 14,
    color: "#999",
  },
});

export default Today;
