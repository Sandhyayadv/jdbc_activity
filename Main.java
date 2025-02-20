
//
//package com.bank;
//
//import com.bank.dao.AccountDAO;
//import com.bank.dao.AccountDAOImpl;
//import java.util.Scanner;
//
//public class Main {
//    public static void main(String[] args) {
//        Scanner scanner = new Scanner(System.in);
//        AccountDAO accountDAO = new AccountDAOImpl();
//
//        while (true) {
//            System.out.println("\nBank Management System");
//            System.out.println("1. Create Account");
//            System.out.println("2. Check Balance");
//            System.out.println("3. Deposit Money");
//            System.out.println("4. Withdraw Money");
//            System.out.println("5. Update Password");
//            System.out.println("6. Exit");
//            System.out.print("Choose an option: ");
//
//            int choice = scanner.nextInt();
//            switch (choice) {
//                case 1:
//                    System.out.print("Enter name: ");
//                    String name = scanner.next();
//                    System.out.print("Enter initial balance: ");
//                    double balance = scanner.nextDouble();
//                    System.out.print("Set password: ");
//                    String password = scanner.next();
//                    if (accountDAO.createAccount(name, balance, password)) {
//                        System.out.println("Account created successfully!");
//                    }
//                    break;
//                case 2:
//                    System.out.print("Enter account number: ");
//                    int accNum = scanner.nextInt();
//                    System.out.print("Enter password: ");
//                    String pass = scanner.next();
//                    Account acc = accountDAO.getAccount(accNum, pass);
//                    if (acc != null) {
//                        System.out.println("Balance: " + acc.getBalance());
//                    } else {
//                        System.out.println("Invalid account number or password.");
//                    }
//                    break;
//                case 3:
//                    System.out.print("Enter account number: ");
//                    int depositAcc = scanner.nextInt();
//                    System.out.print("Enter amount: ");
//                    double amount = scanner.nextDouble();
//                    if (accountDAO.deposit(depositAcc, amount)) {
//                        System.out.println("Amount deposited successfully!");
//                    } else {
//                        System.out.println("Failed to deposit amount. Please check your account number.");
//                    }
//                    break;
////                case 4:
////                    System.out.print("Enter account number: ");
////                    int withdrawAcc = scanner.nextInt();
////                    System.out.print("Enter amount to withdraw: ");
////                    double withdrawAmount = scanner.nextDouble();
////                    if (accountDAO.withdraw(withdrawAcc, withdrawAmount)) {
////                        System.out.println("Amount withdrawn successfully!");
////                    } else {
////                        System.out.println("Insufficient balance or invalid account number.");
////                    }
////                    break;
//                    
//                    
//                case 4:
//                    System.out.print("Enter account number: ");
//                    int withdrawAcc = scanner.nextInt();
//                    System.out.print("Enter amount to withdraw: ");
//                    double withdrawAmount = scanner.nextDouble();
//                    if (accountDAO.withdraw(withdrawAcc, withdrawAmount)) {
//                        System.out.println("Withdrawal successful!");
//                    } else {
//                        System.out.println("Insufficient balance or invalid account number.");
//                    }
//                    break;
//
//                    
//                    
//                case 5:
//                    System.out.print("Enter account number: ");
//                    int updateAccNum = scanner.nextInt();
//                    System.out.print("Enter current password: ");
//                    String oldPassword = scanner.next();
//                    System.out.print("Enter new password: ");
//                    String newPassword = scanner.next();
//                    if (accountDAO.updatePassword(updateAccNum, oldPassword, newPassword)) {
//                        System.out.println("Password updated successfully!");
//                    } else {
//                        System.out.println("Failed to update password. Please check your account number and current password.");
//                    }
//                    break;
//                case 6:
//                    System.out.println("Exiting...");
//                    System.out.println("Thanks for visiting!");
//                    System.exit(0);
//            }
//        }
//    }
//}
//






















package com.bank;

import com.bank.dao.AccountDAO;
import com.bank.dao.AccountDAOImpl;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        AccountDAO accountDAO = new AccountDAOImpl();

        while (true) {
            System.out.println("\nBank Management System");
            System.out.println("1. Create Account");
            System.out.println("2. Check Balance");
            System.out.println("3. Deposit Money");
            System.out.println("4. Withdraw Money");
            System.out.println("5. Update Password");
            System.out.println("6. Exit");
            System.out.print("Choose an option: ");

            int choice = scanner.nextInt();
            switch (choice) {
                case 1:
                	System.out.print("Enter account number: ");
                	int accountNumber=scanner.nextInt();
                    System.out.print("Enter name: ");
                    String name = scanner.next();
                    System.out.print("Enter initial balance: ");
                    double balance = scanner.nextDouble();
                    System.out.print("Set password: ");
                    String password = scanner.next();
                    if (accountDAO.createAccount(accountNumber, name, balance, password)) {
                        System.out.println("Account created successfully!");
                    }
                    break;
                case 2:
                    System.out.print("Enter account number: ");
                    int accNum = scanner.nextInt();
                    System.out.print("Enter password: ");
                    String pass = scanner.next();
                    Account acc = accountDAO.getAccount(accNum, pass);
                    if (acc != null) {
                        System.out.println("Balance: " + acc.getBalance());
                    } else {
                        System.out.println("Invalid account number or password.");
                    }
                    break;
                case 3:
                    System.out.print("Enter account number: ");
                    int depositAcc = scanner.nextInt();
                    System.out.print("Enter amount: ");
                    double amount = scanner.nextDouble();
                    if (accountDAO.deposit(depositAcc, amount)) {
                        System.out.println("Amount deposited successfully!");
                    } else {
                        System.out.println("Failed to deposit amount. Please check your account number.");
                    }
                    break;
//                case 4:
//                    System.out.print("Enter account number: ");
//                    int withdrawAcc = scanner.nextInt();
//                    System.out.print("Enter amount to withdraw: ");
//                    double withdrawAmount = scanner.nextDouble();
//                    if (accountDAO.withdraw(withdrawAcc, withdrawAmount)) {
//                        System.out.println("Amount withdrawn successfully!");
//                    } else {
//                        System.out.println("Insufficient balance or invalid account number.");
//                    }
//                    break;
                    
                    
                case 4:
                    System.out.print("Enter account number: ");
                    int withdrawAcc = scanner.nextInt();
                    System.out.print("Enter amount to withdraw: ");
                    double withdrawAmount = scanner.nextDouble();
                    if (accountDAO.withdraw(withdrawAcc, withdrawAmount)) {
                        System.out.println("Withdrawal successful!");
                    } else {
                        System.out.println("Insufficient balance or invalid account number.");
                    }
                    break;

                    
                    
                case 5:
                    System.out.print("Enter account number: ");
                    int updateAccNum = scanner.nextInt();
                    System.out.print("Enter current password: ");
                    String oldPassword = scanner.next();
                    System.out.print("Enter new password: ");
                    String newPassword = scanner.next();
                    if (accountDAO.updatePassword(updateAccNum, oldPassword, newPassword)) {
                        System.out.println("Password updated successfully!");
                    } else {
                        System.out.println("Failed to update password. Please check your account number and current password.");
                    }
                    break;
                case 6:
                    System.out.println("Exiting...");
                    System.out.println("Thanks for visiting!");
                    System.exit(0);
            }
        }
    }
}

