package com.example.demo.controller.dto;

import java.math.BigDecimal;
import java.util.Map;

public class ExpenseRequest {

    private BigDecimal totalAmount;
    private Map<Long, BigDecimal> userAmounts;

    // Геттеры и сеттеры
    public BigDecimal getTotalAmount() {
        return totalAmount;
    }

    public Map<Long, BigDecimal> getUserAmounts() {
        return userAmounts;
    }

    public void setTotalAmount(BigDecimal totalAmount) {
        this.totalAmount = totalAmount;
    }

    public void setUserAmounts(Map<Long, BigDecimal> userAmounts) {
        this.userAmounts = userAmounts;
    }
}
