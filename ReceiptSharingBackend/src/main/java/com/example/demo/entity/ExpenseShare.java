package com.example.demo.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "expense_shares")
public class ExpenseShare {

    @EmbeddedId
    private ExpenseShareId id = new ExpenseShareId();

    @ManyToOne
    @MapsId("expenseId")
    private Expense expense;

    @ManyToOne
    @MapsId("userId")
    private User user;

    private BigDecimal amount;

    // Конструкторы
    public ExpenseShare() {
    }

    public ExpenseShare(Expense expense, User user, BigDecimal amount) {
        this.expense = expense;
        this.user = user;
        this.amount = amount;
        this.id = new ExpenseShareId(expense.getId(), user.getId());
    }

    // Геттеры и сеттеры
    public ExpenseShareId getId() {
        return id;
    }

    public Expense getExpense() {
        return expense;
    }

    public User getUser() {
        return user;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setId(ExpenseShareId id) {
        this.id = id;
    }

    public void setExpense(Expense expense) {
        this.expense = expense;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    // equals и hashCode на основе id
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ExpenseShare that = (ExpenseShare) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
