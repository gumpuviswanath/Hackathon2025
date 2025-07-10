package com.db.hackathon.credit_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.db.hackathon.credit_api.entity.Transaction;

import java.util.List;


public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    
    List<Transaction> findByUserId(Long userId);
    
}
