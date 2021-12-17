#include <iostream>
#include <vector>
#include "main.h"
class Leetcode
{
public:
    int findMiddleIndex()
    {
        std::cout << "concac" << std::endl;
        return 0;
    }
    int countCharacters()
    {
        std::vector<std::string> words = {"zaq", "qwe", "tyuiop", "gtrf"};
        std::string chars = "zsweqadrtfgbdawthpjyr";
        std::vector<int> count(26);
        int total = 0;
        for (auto ch : chars)
        {
            ++count[ch - 'a'];
        }
        for (auto &word : words)
        {
            std::vector<int> wCount(26);
            bool canConstruct = true;
            for (auto ch : word)
            {
                auto index = ch - 'a';
                if (++wCount[index] > count[index])
                {
                    canConstruct = false;
                    break;
                }
            }
            if (canConstruct)
                total += word.size();
        }
        return total;
    }
    int findMin()
    {
        std::vector<int> nums = {4, 5, 6, 7, -3, 1, 2, 3};
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
    int findPeakElement()
    {
        std::vector<int> nums = {1, 2, 3, 4, 5, 6, 5, 4};
        int LEFT = 0;
        int RIGHT = nums.size();
        return binarySearch(nums, LEFT, RIGHT);
    }
    bool validMountainArray()
    {
        std::vector<int> arr = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
        if (arr.size() < 3)
            return false;
        int index = 1;
        while (index < arr.size())
        {
            if (arr[index - 1] < arr[index])
                index++;
            else
                break;
        }
        if (index == arr.size() || index == 1)
            return false;
        while (index < arr.size())
        {
            if (arr[index - 1] > arr[index])
                index++;
            else
                break;
        }
        if (index == arr.size())
            return true;
        return false;
    }
};

int main()
{
    Leetcode lt;
    // std::cout << "Answer 153: " << lt.findMin() << std::endl;
    // std::cout << "Answer 162: " << lt.findPeakElement() << std::endl;
    std::cout << "Answer 941: " << lt.validMountainArray() << std::endl;
    // std::cout << "Answer 1160: " << lt.countCharacters() << std::endl;
    return 0;
}