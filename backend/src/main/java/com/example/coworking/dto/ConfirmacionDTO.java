package com.example.coworking.dto;

public class ConfirmacionDTO {
    private String message;

    // Constructor
    public ConfirmacionDTO(String message) {
        this.message = message;
    }

    // Getter y setter
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
