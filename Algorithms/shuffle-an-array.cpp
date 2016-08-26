class Solution {
public:
    Solution(vector<int> nums) {
        origin = solver = nums;
    }
    
    /** Resets the array to its original configuration and return it. */
    vector<int> reset() {
        return solver = origin;
    }
    
    /** Returns a random shuffling of the array. */
    vector<int> shuffle() {
        for (int i = 0, len = origin.size(); i < len; i++) {
            int j = rand() % (len - i);
            int temp = solver[j];
            solver[j] = solver[len - i - 1];
            solver[len - i - 1] = temp;
        }
        return solver;
    }
private:
    vector<int> origin,solver;
};

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(nums);
 * vector<int> param_1 = obj.reset();
 * vector<int> param_2 = obj.shuffle();
 */