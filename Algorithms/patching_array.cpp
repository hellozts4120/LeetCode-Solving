class Solution {
public:
    int minPatches(vector<int>& nums, int n) {
        int ans = 0, i = 0;
        for (long sum = 1; sum <= n;) {
            if (i < nums.size() && nums[i] <= sum) {
                sum += nums[i++];
            }
            else {
                sum *= 2;
                ans++;
            }
        }
        return ans;
    }
};