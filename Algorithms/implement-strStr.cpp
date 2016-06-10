class Solution {
public:
    vector<int> findNext(string str) {
        int len = str.length();
        vector<int> next(len);
        next[0] = -1;
        for (int i = 0; i < len; ++i) {
            int j = i - 1;
            while (j >= 0 && str[i] != str[next[j] + 1]) {
                j = next[j];
            }
            if (j >= 0) {
                next[i] = next[j] + 1;
            } 
            else {
                next[i] = -1;
            }
        }
        for (int i = len - 1; i > 0; i--) { 
            next[i] = next[i - 1] + 1;
        }
        next[0] = 0;
        return next;
    }

    int strStr(string haystack, string needle) {
        if (!needle.length()) return 0;
        if (!haystack.length()) return -1;
        int x = 0, y = 0;
        vector<int> next = findNext(needle);
        while (x < haystack.size() && y < needle.size()) {
            if (haystack[x] != needle[y]) {
                if (!y) {
                    x++;
                } 
                else {
                    y = next[y];
                }
            } 
            else {
                x++; 
                y++;
                if (y == needle.size()) {
                    return (x - needle.size());
                }
            }
        }
        return -1;
    }
};