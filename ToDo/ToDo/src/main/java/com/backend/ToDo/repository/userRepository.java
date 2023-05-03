package com.backend.ToDo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.ToDo.model.user;

public interface userRepository extends JpaRepository<user, Long> {
    Optional<user> findByEmail(String email);

}
