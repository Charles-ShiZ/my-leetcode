# 力扣提交记录：
+ 执行用时：128 ms, 在所有 TypeScript 提交中击败了98.61%的用户
+ 内存消耗：47.9 MB, 在所有 TypeScript 提交中击败了55.56%的用户
# 思路：
假设测试字符串为`s`

首先分为三种情况：

1. 字符串长度小于2；
2. 字符串长度等于2；
3. 字符串长度大于2；⭐️

其中，情况3为最关键。

情况1时，直接返回`s`，

情况2时，判断字符串中的两个字符是否相等，如不相等，返回`s`和`s`的倒转字符串，否则直接返回`s`，

情况3时，结合缓存遍历字符串，得到非重复的字符以及除这个字符以外的字符串(others)，将others放入递归函数，循环判断三种情况，最终都会在情况2时返回结果。


