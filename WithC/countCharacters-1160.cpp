#include <vector>
#include <iostream>
int countCharacters(std::vector<std::string> &words, std::string chars);
int main()
{
    std::vector<std::string> words = {"zaq", "qwe", "tyuiop", "gtrf"};
    std::string chars = "zsweqadrtfgbdawthpjyr";
    int sum = countCharacters(words, chars);
    std::cout << sum << std::endl;
    return 0;
}
int countCharacters(std::vector<std::string> &words, std::string chars)
{
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