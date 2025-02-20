//package com.bank;
//
//public class Account {
//
//}


package com.bank;

public class Account {
    private int accountNumber;
    private String name;
    private double balance;
    private String password;

    public Account(int accountNumber, String name, double balance, String password) {
        this.accountNumber = accountNumber;
        this.name = name;
        this.balance = balance;
        this.password = password;
    }

    public int getAccountNumber() { return accountNumber; }
    public String getName() { return name; }
    public double getBalance() { return balance; }
    public String getPassword() { return password; }

    public void setBalance(double balance) { this.balance = balance; }
    public void setPassword(String password) { this.password = password; }
}
