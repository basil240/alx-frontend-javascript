console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
<h1>Clean set</h1>

const char* getString() {
    return "test";

}

int main (int argc, char *argv[]) {
    const char* s = getString();
    s[0] = 'p';
    printf("%s\n", s);
    return 0;
}