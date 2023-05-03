package com.backend.ToDo.service;

import com.backend.ToDo.model.user;

public interface userService {
    public user addUser(user user);

    public user updateUser(user user);

    public Boolean testUser(user user);

    public user getUser(String email);
}
