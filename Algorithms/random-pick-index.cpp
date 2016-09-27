class Solution {
private:
    vector<int> num;
public:
    Solution(vector<int> nums): num(nums) {}
    
    int pick(int target) {
        int len = num.size();
        int index = -1, count = 0;
        for (int i = 0; i < len; i++) {
            if (num[i] == target) {
                count++;
                int temp = rand() % count;
                if (!temp) {
                    index = i;
                }
            }
        }
        return index;
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(nums);
 * int param_1 = obj.pick(target);
 */