#include <iostream>
#include <vector>

int findMin(std::vector<int> &nums);

int main()
{
    std::vector<int> nums = {4, 5, 6, 7, -1, 1, 2, 3};
    std::cout << "Min: " << findMin(nums) << std::endl;
    return 0;
}
int findMin(std::vector<int> &nums)
{
    int left = 0,
        right = nums.size() - 1;
    while (left < right)
    {
        const int middle = (left + right) / 2;
        if (nums[middle] > nums[right])
            left = middle + 1;
        else
            right = middle;
    }
    return nums[left];
}
