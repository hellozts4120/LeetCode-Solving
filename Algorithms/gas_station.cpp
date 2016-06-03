class Solution {
public:
    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
        int curSum = 0, allSum = 0, startPoint = 0;
        for (int i = 0; i < gas.size(); i++) {
            allSum += gas[i] - cost[i];
            curSum += gas[i] - cost[i];
            if (curSum < 0) {
                startPoint = i + 1;
                curSum = 0;
            }
        }
        return allSum < 0 ? -1 : startPoint;
    }
};