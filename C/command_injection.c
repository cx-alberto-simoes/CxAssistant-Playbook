#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[]) {
    if (argc < 2) {
        printf("Usage: %s <filename>\n", argv[0]);
        return 1;
    }
    
    char command[256];
    // Command injection vulnerability - user input in system call
    sprintf(command, "cat %s", argv[1]);
    system(command);
    
    return 0;
}
