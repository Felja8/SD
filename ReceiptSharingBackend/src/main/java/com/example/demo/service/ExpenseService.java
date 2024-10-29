package com.example.demo.service;

import com.example.demo.entity.Expense;
import com.example.demo.entity.ExpenseShare;
import com.example.demo.entity.User;
import com.example.demo.repository.ExpenseRepository;
import com.example.demo.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Map;

@Service
public class ExpenseService {

    private final ExpenseRepository expenseRepository;
    private final UserRepository userRepository;

    public ExpenseService(ExpenseRepository expenseRepository, UserRepository userRepository) {
        this.expenseRepository = expenseRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public Expense createExpense(Long payerId, BigDecimal totalAmount, Map<Long, BigDecimal> userAmounts) {
        User payer = userRepository.findById(payerId)
                .orElseThrow(() -> new RuntimeException("Payer not found"));

        Expense expense = new Expense(totalAmount, payer);

        for (Map.Entry<Long, BigDecimal> entry : userAmounts.entrySet()) {
            Long userId = entry.getKey();
            BigDecimal amount = entry.getValue();

            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));

            ExpenseShare share = new ExpenseShare(expense, user, amount);
            expense.addShare(share);
        }

        return expenseRepository.save(expense);
    }

    public Long getUserIdByUsername(String username) {
        return userRepository.findByUsername(username)
                .map(User::getId)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
}
