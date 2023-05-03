package com.backend.ToDo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.ToDo.exceptions.ResourceNotFoundException;
import com.backend.ToDo.model.user;
import com.backend.ToDo.repository.userRepository;
import java.util.Optional;

@Service
public class userServiceImp implements userService {
    @Autowired
    private userRepository userRepo;

    @Override
    public user addUser(user user) {
        Optional<user> optionalUser = userRepo.findByEmail(user.getEmail());
        if (!optionalUser.isPresent()) {
            return userRepo.save(user);
        } else {
            user vide = new user();
            return vide;
        }
    }

    @Override
    public user updateUser(user user) {
        Optional<user> optionalUser = userRepo.findById(user.getId());
        if (optionalUser.isPresent()) {
            user existinguser = optionalUser.get();
            existinguser.setUsername(user.getUsername());
            existinguser.setEmail(user.getEmail());
            existinguser.setPassword(user.getPassword());
            return userRepo.save(existinguser);
        } else {
            throw new ResourceNotFoundException("User", "id", user.getId());
        }
    }

    @Override
    public Boolean testUser(user user) {
        Optional<user> existing = userRepo.findByEmail(user.getEmail());
        if (existing.isPresent()) {
            String pass = existing.get().getPassword();
            return (pass.equals(user.getPassword()));
        } else
            return false;
    }

    @Override
    public user getUser(String email) {
        Optional<user> existing = userRepo.findByEmail(email);
        return existing.get();

    };

}
