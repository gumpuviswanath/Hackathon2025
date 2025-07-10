package com.db.hackathon.credit_api.dto;

public record LoanInitializeResponse(
    Long userId,
    String status
) {}
