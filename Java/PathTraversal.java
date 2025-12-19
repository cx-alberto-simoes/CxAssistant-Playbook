import java.io.*;
import javax.servlet.http.*;
import javax.servlet.*;

public class PathTraversal extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        // Path traversal vulnerability - user input used directly in file path
        String filename = request.getParameter("file");
        File file = new File("/var/www/files/" + filename);
        
        if (file.exists()) {
            FileInputStream fis = new FileInputStream(file);
            BufferedReader reader = new BufferedReader(new InputStreamReader(fis));
            
            response.setContentType("text/plain");
            PrintWriter out = response.getWriter();
            
            String line;
            while ((line = reader.readLine()) != null) {
                out.println(line);
            }
            
            reader.close();
        } else {
            response.getWriter().println("File not found");
        }
    }
}
