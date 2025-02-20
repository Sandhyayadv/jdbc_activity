//
//
//package com.bank.dao;
//import com.bank.Account;
//import com.bank.DatabaseConnection;
//import java.sql.*;
//
//public class AccountDAOImpl implements AccountDAO {
//
//    @Override
//    public boolean createAccount(String name, double initialBalance, String password) {
//        String sql = "INSERT INTO accounts (name, balance, password) VALUES (?, ?, ?)";
//        try (Connection conn = DatabaseConnection.getConnection();
//             PreparedStatement stmt = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
//            stmt.setString(1, name);
//            stmt.setDouble(2, initialBalance);
//            stmt.setString(3, password);
//            int affectedRows = stmt.executeUpdate();
//            return affectedRows > 0;
//        } catch (SQLException e) { e.printStackTrace(); }
//        return false;
//    }
//
//    @Override
//    public Account getAccount(int accountNumber, String password) {
//        String sql = "SELECT * FROM accounts WHERE account_number = ? AND password = ?";
//        try (Connection conn = DatabaseConnection.getConnection();
//             PreparedStatement stmt = conn.prepareStatement(sql)) {
//            stmt.setInt(1, accountNumber);
//            stmt.setString(2, password);
//            ResultSet rs = stmt.executeQuery();
//            if (rs.next()) {
//                return new Account(rs.getInt("account_number"), rs.getString("name"),
//                                   rs.getDouble("balance"), rs.getString("password"));
//            }
//        } catch (SQLException e) { e.printStackTrace(); }
//        return null;
//    }
//
//    @Override
//    public boolean deposit(int accountNumber, double amount) {
//        String sql = "UPDATE accounts SET balance = balance + ? WHERE account_number = ?";
//        return updateBalance(sql, accountNumber, amount);
//    }
//
////    @Override
////    public boolean withdraw(int accountNumber, double amount) {
////        String sql = "UPDATE accounts SET balance = balance - ? WHERE account_number = ? AND balance >= ?";
////        return updateBalance(sql, accountNumber, amount);
////    }
//    
//    
//    @Override
//    public boolean withdraw(int accountNumber, double amount) {
//        String sql = "UPDATE accounts SET balance = balance - ? WHERE account_number = ? AND balance >= ?";
//        try (Connection conn = DatabaseConnection.getConnection();
//             PreparedStatement stmt = conn.prepareStatement(sql)) {
//            stmt.setDouble(1, amount); // The amount to withdraw
//            stmt.setInt(2, accountNumber); // The account number
//            stmt.setDouble(3, amount); // Check that there is enough balance
//            return stmt.executeUpdate() > 0; // Returns true if the update was successful
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }
//        return false; // If no rows are updated or an error occurs
//    }
//
//    
//
//    @Override
//    public boolean updatePassword(int accountNumber, String oldPassword, String newPassword) {
//        String sql = "UPDATE accounts SET password = ? WHERE account_number = ? AND password = ?";
//        try (Connection conn = DatabaseConnection.getConnection();
//             PreparedStatement stmt = conn.prepareStatement(sql)) {
//            stmt.setString(1, newPassword);
//            stmt.setInt(2, accountNumber);
//            stmt.setString(3, oldPassword);
//            return stmt.executeUpdate() > 0;
//        } catch (SQLException e) { e.printStackTrace(); }
//        return false;
//    }
//
//    private boolean updateBalance(String sql, int accountNumber, double amount) {
//        try (Connection conn = DatabaseConnection.getConnection();
//             PreparedStatement stmt = conn.prepareStatement(sql)) {
//            stmt.setDouble(1, amount);
//            stmt.setInt(2, accountNumber);
//            return stmt.executeUpdate() > 0;
//        } catch (SQLException e) { e.printStackTrace(); }
//        return false;
//    }
//}









package com.bank.dao;
import com.bank.Account;
import com.bank.DatabaseConnection;
import java.sql.*;

public class AccountDAOImpl implements AccountDAO {

	@Override
	public boolean createAccount(int accountNumber, String name, double initialBalance, String password) {
	    String sql = "INSERT INTO accounts (account_number, name, balance, password) VALUES (?, ?, ?, ?)";
	    try (Connection conn = DatabaseConnection.getConnection();
	         PreparedStatement stmt = conn.prepareStatement(sql)) {  // ✅ Closing parenthesis fixed
	        stmt.setInt(1, accountNumber);
	        stmt.setString(2, name);
	        stmt.setDouble(3, initialBalance);
	        stmt.setString(4, password);
	        
	        int affectedRows = stmt.executeUpdate();
	        return affectedRows > 0;
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	    return false;
	}


    @Override
    public Account getAccount(int accountNumber, String password) {
        String sql = "SELECT * FROM accounts WHERE account_number = ? AND password = ?";
        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, accountNumber);
            stmt.setString(2, password);
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                return new Account(rs.getInt("account_number"), rs.getString("name"),
                                   rs.getDouble("balance"), rs.getString("password"));
            }
        } catch (SQLException e) { e.printStackTrace(); }
        return null;
    }

    @Override
    public boolean deposit(int accountNumber, double amount) {
        String sql = "UPDATE accounts SET balance = balance + ? WHERE account_number = ?";
        return updateBalance(sql, accountNumber, amount);
    }

//    @Override
//    public boolean withdraw(int accountNumber, double amount) {
//        String sql = "UPDATE accounts SET balance = balance - ? WHERE account_number = ? AND balance >= ?";
//        return updateBalance(sql, accountNumber, amount);
//    }
    
    
    @Override
    public boolean withdraw(int accountNumber, double amount) {
        String sql = "UPDATE accounts SET balance = balance - ? WHERE account_number = ? AND balance >= ?";
        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setDouble(1, amount); // The amount to withdraw
            stmt.setInt(2, accountNumber); // The account number
            stmt.setDouble(3, amount); // Check that there is enough balance
            return stmt.executeUpdate() > 0; // Returns true if the update was successful
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false; // If no rows are updated or an error occurs
    }

    

    @Override
    public boolean updatePassword(int accountNumber, String oldPassword, String newPassword) {
        String sql = "UPDATE accounts SET password = ? WHERE account_number = ? AND password = ?";
        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, newPassword);
            stmt.setInt(2, accountNumber);
            stmt.setString(3, oldPassword);
            return stmt.executeUpdate() > 0;
        } catch (SQLException e) { e.printStackTrace(); }
        return false;
    }

    private boolean updateBalance(String sql, int accountNumber, double amount) {
        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setDouble(1, amount);
            stmt.setInt(2, accountNumber);
            return stmt.executeUpdate() > 0;
        } catch (SQLException e) { e.printStackTrace(); }
        return false;
    }
}

