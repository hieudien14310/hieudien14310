#include <iostream>
#include <vector>

int findPeakElement(std::vector<int> &nums);
int binarySearch(std::vector<int> &nums, int left, int right);

int main()
{
    std::vector<int> nums = {1};
    int output = findPeakElement(nums);
    std::cout << output << std::endl;
    return 0;
}
int findPeakElement(std::vector<int> &nums)
{
    return binarySearch(nums, 0, nums.size());
};
int binarySearch(std::vector<int> &nums, int left, int right)
{
    int middle = (left + right) / 2;
    if (nums[middle] < nums[middle - 1])
        return binarySearch(nums, left, middle);
    else if (nums[middle] < nums[middle + 1])
        return binarySearch(nums, middle, right);
    else
        return middle;
}