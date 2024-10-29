package com.example.demo.controller;

import com.example.demo.entity.Expense;
import com.example.demo.service.ExpenseService;
import com.example.demo.service.UserService;
import com.example.demo.controller.dto.ExpenseRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    private final ExpenseService expenseService;
    private final UserService userService;

    public ExpenseController(ExpenseService expenseService, UserService userService) {
        this.expenseService = expenseService;
        this.userService = userService;
    }

    @PostMapping("/add")
    public ResponseEntity<?> addExpense(@RequestBody ExpenseRequest expenseRequest, Principal principal) {
        Long payerId = userService.getUserIdByUsername(principal.getName());

        Expense expense = expenseService.createExpense(payerId, expenseRequest.getTotalAmount(), expenseRequest.getUserAmounts());

        return ResponseEntity.ok("Expense added successfully");
    }
}
