var merge = function (nums1, m, nums2, n) {
    let p = m + n - 1, p1 = m - 1, p2 = n - 1
    while (p) {
        console.log('p1', p1, 'p2', p2)
        if (nums1[p1] >= nums2[p2]) {
            nums1[p] = nums1[p1]
            p1--
        } else {
            nums1[p] = nums2[p2]
            p2--
        }
        p--
    }
    return nums1
};

const nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
console.log(merge(nums1, m, nums2, n))

