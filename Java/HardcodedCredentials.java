import java.sql.*;

public class HardcodedCredentials {
    // Hardcoded credentials vulnerability
    private static final String DB_URL = "jdbc:mysql://localhost:3306/mydb";
    private static final String DB_USER = "admin";
    private static final String DB_PASSWORD = "P@ssw0rd123";
    
    public Connection getConnection() {
        Connection conn = null;
        try {
            conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return conn;
    }
    
    public static void main(String[] args) {
        HardcodedCredentials app = new HardcodedCredentials();
        Connection conn = app.getConnection();
        if (conn != null) {
            System.out.println("Connected to database");
        }
    }
}
