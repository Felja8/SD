package com.example.demo.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "expenses")
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal totalAmount;

    @ManyToOne
    @JoinColumn(name = "payer_id")
    private User payer;

    @OneToMany(mappedBy = "expense", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<ExpenseShare> shares = new HashSet<>();

    // Конструкторы
    public Expense() {
    }

    public Expense(BigDecimal totalAmount, User payer) {
        this.totalAmount = totalAmount;
        this.payer = payer;
    }

    // Методы
    public void addShare(ExpenseShare share) {
        shares.add(share);
        share.setExpense(this);
    }

    // Геттеры и сеттеры
    public Long getId() {
        return id;
    }

    public BigDecimal getTotalAmount() {
        return totalAmount;
    }

    public User getPayer() {
        return payer;
    }

    public Set<ExpenseShare> getShares() {
        return shares;
    }

    public void setTotalAmount(BigDecimal totalAmount) {
        this.totalAmount = totalAmount;
    }

    public void setPayer(User payer) {
        this.payer = payer;
    }

    public void setShares(Set<ExpenseShare> shares) {
        this.shares = shares;
    }
}
