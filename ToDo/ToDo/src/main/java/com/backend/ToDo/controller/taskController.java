package com.backend.ToDo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.backend.ToDo.service.taskService;
import com.backend.ToDo.model.task;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class taskController {
    @Autowired
    taskService service;

    @GetMapping
    public List<task> getAllTasks() {
        return service.getAll();
    }

    @PostMapping("/add")
    @CrossOrigin(origins = "*", methods = { RequestMethod.POST })
    public task createTask(@RequestBody task task, @RequestParam Long Id) {

        return service.addTask(task, Id);
    }

    @GetMapping("/get/{id}")
    public task getTaskById(@PathVariable Long id) {
        return service.getTaskById(id);
    }

    @PutMapping("/update/{id}")
    public task updateTask(@RequestBody task task) {
        return service.updateTask(task);
    }

    @DeleteMapping("delete/{id}")
    public void deleteTask(@PathVariable Long id) {
        service.deleteTask(id);
    }
}
