import javax.servlet.http.*;
import javax.servlet.*;
import java.io.*;

public class XSS extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        // XSS vulnerability - user input directly written to response without encoding
        String userInput = request.getParameter("name");
        
        out.println("<html><body>");
        out.println("<h1>Welcome " + userInput + "</h1>");
        out.println("</body></html>");
    }
}
