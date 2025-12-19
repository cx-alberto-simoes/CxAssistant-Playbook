import java.sql.*;

public class SQLInjection {
    public static void main(String[] args) {
        if (args.length < 1) {
            System.out.println("Usage: java SQLInjection <username>");
            return;
        }
        
        String username = args[0];
        
        try {
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb", "user", "password");
            Statement stmt = conn.createStatement();
            
            // SQL Injection vulnerability - user input directly concatenated
            String query = "SELECT * FROM users WHERE username = '" + username + "'";
            ResultSet rs = stmt.executeQuery(query);
            
            while (rs.next()) {
                System.out.println("User: " + rs.getString("username"));
            }
            
            rs.close();
            stmt.close();
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
