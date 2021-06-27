/** 合并两个正序数据成为一个新的正序数组 */
/*
  给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

  初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

  示例 1:
  输入:nums1 =    [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
  输出:[1,2,2,3,5,6]

  示例 2:
  输入:nums1 = [1], m = 1, nums2 = [], n = 0
  输出:[1]
*/
function CombineTwoSortedArrays(nums1, m, nums2, n) {
  let p1 = 0,
    p2 = 0,
    i = 0;
  const _nums1 = nums1.slice(0, m),
    _nums2 = nums2;
  while (p1 < m || p2 < n) {
    console.log(i);
    if (_nums1[p1] < _nums2[p2]) nums1[i++] = _nums1[p1++];
    else nums1[i++] = _nums2[p2++];

    if (p1 === m) {
      nums1.splice(i, m + n, ..._nums2.slice(p2));
      break;
    }
    if (p2 === n) {
      nums1.splice(i, m + n, ..._nums1.slice(p1));
      break;
    }
  }
}
const res = CombineTwoSortedArrays([1, 3, 5, 0, 0, 0], 3, [2, 4, 6], 3);
console.log(res);
