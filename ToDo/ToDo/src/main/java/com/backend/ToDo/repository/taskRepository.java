package com.backend.ToDo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.ToDo.model.task;

public interface taskRepository extends JpaRepository<task, Long> {

}
