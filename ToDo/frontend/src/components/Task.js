import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TaskService from "./TaskService";

class Task extends React.Component {
  handleDelete = () => {
    TaskService.deleteTask(this.props.task.id)
      .then(() =>
        console.log(`Task "${this.props.task.title}" deleted successfully.`)
      )
      .catch((error) => console.error(error));
  };

  render() {
    const { task } = this.props;

    return (
      <View style={styles.task}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.description}>{task.description}</Text>
        <TouchableOpacity onPress={this.handleDelete}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  task: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    marginBottom: 5,
  },
  deleteButton: {
    color: "red",
    textDecorationLine: "underline",
  },
});

export default Task;
