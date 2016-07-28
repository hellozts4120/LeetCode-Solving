class Solution {
public:
    vector<int> countBits(int num) {
        vector<int> arr;
        for (int i = 0; i <= num; i++) {
            int m1 = 0x11 | (0x11 << 8);
          	int mask = m1 | (m1 << 16);
          	int s = i & mask;
          	s += (i >> 1) & mask;
          	s += (i >> 2) & mask;
          	s += (i >> 3) & mask;
        
          	s = s + (s >> 16);
          
          	mask = 0xF | (0xF << 8);
          	s = (s & mask) + ((s >> 4) & mask);
          	arr.push_back((s + (s >> 8)) & 0x3F);
        }
        return arr;
    }
};