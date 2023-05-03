package com.backend.ToDo.service;

import java.util.List;

import com.backend.ToDo.model.task;

public interface taskService {
    public task addTask(task task, Long id);

    public List<task> getAll();

    public task updateTask(task task);

    public void deleteTask(Long id);

    public task getTaskById(Long id);
}
