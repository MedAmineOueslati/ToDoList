class TaskService {
  async getAllTasks() {
    const response = await fetch("http://localhost:8080/task/getAll");
    const tasks = await response.json();
    return tasks;
  }

  async getTaskById(id) {
    const response = await fetch("http://localhost:8080/task/get/${id}");
    const task = await response.json();
    if (!task) {
      throw new Error("Task with ID ${id} not found.");
    }
    return task;
  }

  async addTask(task) {
    const response = await fetch("http://localhost:8080/task/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const createdTask = await response.json();
    return createdTask;
  }

  async updateTask(task) {
    const response = await fetch(
      "http://localhost:8080/task/update/${task.id}",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );
    const updatedTask = await response.json();
    return updatedTask;
  }

  async deleteTask(id) {
    const response = await fetch("http://localhost:8080/task/delete/${id}", {
      method: "DELETE",
    });
    if (response.status === 404) {
      throw new Error("Task with ID ${id} not found.");
    }
  }
}

export default new TaskService();
