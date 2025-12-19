# CxAssistant-Playbook

This repository contains intentionally vulnerable code examples in C, Java, and JavaScript to showcase security vulnerabilities that can be detected by Checkmarx SAST (Static Application Security Testing) tool.

## ⚠️ Warning

**DO NOT use this code in production environments!** All code in this repository contains intentional security vulnerabilities for educational and demonstration purposes only.

## Repository Structure

### C/ - C Language Vulnerabilities

- **buffer_overflow.c** - Buffer Overflow vulnerability
  - Uses `strcpy()` without bounds checking, allowing buffer overflow attacks
  - User input can overflow the 64-byte buffer

- **command_injection.c** - Command Injection vulnerability
  - User input is directly passed to `system()` call
  - Allows arbitrary command execution through shell metacharacters

- **sql_injection.c** - SQL Injection vulnerability
  - User input is concatenated directly into SQL query using `sprintf()`
  - No parameterized queries or input validation

### Java/ - Java Language Vulnerabilities

- **SQLInjection.java** - SQL Injection vulnerability
  - User input concatenated directly into SQL query string
  - Uses Statement instead of PreparedStatement
  - No input validation or sanitization

- **XSS.java** - Cross-Site Scripting (XSS) vulnerability
  - User input written directly to HTTP response without encoding
  - Allows injection of malicious JavaScript code

- **PathTraversal.java** - Path Traversal vulnerability
  - User-supplied filename used directly in file path construction
  - No validation to prevent directory traversal attacks (e.g., `../../etc/passwd`)

- **HardcodedCredentials.java** - Hardcoded Credentials vulnerability
  - Database credentials stored as plaintext constants in source code
  - Exposes sensitive authentication information

### JavaScript/ - JavaScript/Node.js Vulnerabilities

- **sql_injection.js** - SQL Injection vulnerability
  - User input interpolated directly into SQL query using template literals
  - No parameterized queries or prepared statements

- **xss.js** - Cross-Site Scripting (XSS) vulnerability
  - User input rendered directly in HTML response without sanitization
  - Multiple endpoints with reflected XSS vulnerabilities

- **command_injection.js** - Command Injection vulnerability
  - User input passed directly to `exec()` function
  - Allows arbitrary command execution on the server

- **path_traversal.js** - Path Traversal vulnerability
  - User-supplied filenames used directly in file system operations
  - No validation to prevent directory traversal attacks

- **hardcoded_secrets.js** - Hardcoded Secrets vulnerability
  - Database passwords and API keys stored as plaintext in source code
  - Multiple hardcoded credentials exposed

## Vulnerability Types Covered

1. **SQL Injection** - Improper neutralization of special elements in SQL commands
2. **Cross-Site Scripting (XSS)** - Improper neutralization of input during web page generation
3. **Command Injection** - Improper neutralization of special elements in OS commands
4. **Path Traversal** - Improper limitation of pathname to a restricted directory
5. **Buffer Overflow** - Improper restriction of operations within memory buffer bounds
6. **Hardcoded Credentials** - Use of hard-coded passwords and secrets

## Purpose

This repository is designed to demonstrate the capabilities of Checkmarx SAST in identifying common security vulnerabilities across multiple programming languages. Each file contains clear comments indicating the vulnerability type and the specific insecure coding practice.

## Usage

Run Checkmarx SAST against this repository to see how it detects and reports these vulnerabilities. This can be used for:
- Training and education on secure coding practices
- Demonstrating SAST tool capabilities
- Testing security scanning pipelines
- Understanding common vulnerability patterns

## License

This code is provided for educational purposes only.
