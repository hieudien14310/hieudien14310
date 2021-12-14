#include <vector>

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