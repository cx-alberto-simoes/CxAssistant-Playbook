#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sqlite3.h>

int main(int argc, char *argv[]) {
    sqlite3 *db;
    char *err_msg = 0;
    int rc;
    
    rc = sqlite3_open("test.db", &db);
    
    if (rc != SQLITE_OK) {
        fprintf(stderr, "Cannot open database: %s\n", sqlite3_errmsg(db));
        sqlite3_close(db);
        return 1;
    }
    
    // SQL Injection vulnerability - user input directly concatenated into query
    char query[256];
    char *username = argv[1];
    sprintf(query, "SELECT * FROM users WHERE username = '%s'", username);
    
    rc = sqlite3_exec(db, query, 0, 0, &err_msg);
    
    if (rc != SQLITE_OK) {
        fprintf(stderr, "SQL error: %s\n", err_msg);
        sqlite3_free(err_msg);
        sqlite3_close(db);
        return 1;
    }
    
    sqlite3_close(db);
    return 0;
}
