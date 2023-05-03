package com.backend.ToDo.model;

import java.sql.Date;

import jakarta.persistence.*;

@Entity
public class task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String title;
    private String description;
    private Date due_date;
    private Boolean done = false;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private user user;

    public task() {
    }

    public task(String title, String description, Date due_date, user user) {
        this.title = title;
        this.description = description;
        this.due_date = due_date;
        this.user = user;
    }

    @Override
    public String toString() {
        return String.valueOf(user.getId());
    }

    public Long getId() {
        return this.Id;
    }

    public void setId(Long Id) {
        this.Id = Id;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDue_date() {
        return this.due_date;
    }

    public void setDue_date(Date due_date) {
        this.due_date = due_date;
    }

    public Boolean isDone() {
        return this.done;
    }

    public Boolean getDone() {
        return this.done;
    }

    public void setDone(Boolean done) {
        this.done = done;
    }

    public user getUser() {
        return user;
    }

    public void setUser(user user) {
        this.user = user;
    }
}