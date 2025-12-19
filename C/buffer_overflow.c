#include <stdio.h>
#include <string.h>

void vulnerable_function(char *user_input) {
    char buffer[64];
    // Buffer overflow vulnerability - no bounds checking
    strcpy(buffer, user_input);
    printf("Buffer contains: %s\n", buffer);
}

int main(int argc, char *argv[]) {
    if (argc < 2) {
        printf("Usage: %s <input>\n", argv[0]);
        return 1;
    }
    
    vulnerable_function(argv[1]);
    return 0;
}
