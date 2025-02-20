

package com.bank.dao;

import com.bank.Account;

public interface AccountDAO {
    boolean createAccount(int accountNumber, String name, double initialBalance, String password);
    Account getAccount(int accountNumber, String password);
    boolean deposit(int accountNumber, double amount);
    boolean withdraw(int accountNumber, double amount);
    boolean updatePassword(int accountNumber, String oldPassword, String newPassword);
}
