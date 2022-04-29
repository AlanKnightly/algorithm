/*
 * @Author: your name
 * @Date: 2022-04-28 10:32:00
 * @LastEditTime: 2022-04-28 14:20:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /algorithm/leetcode/SearchInRotatedSortedArray.js
 */

const log = console.log


var search = function(nums, target) {
    // const len = nums.length
    // if(target===nums[0]) return 0
    // if(target > nums[0]){
    //   let i = 1;
    //   while(nums[i]>nums[i-1]){
    //     if(target === nums[i]) return i
    //     i++
    //   }
    //   return -1
    // }
    // if(target===nums[len-1]) return len-1
    // if(target < nums[len-1]){
    //   let i = len-2;
    //   while(nums[i]<nums[i+1]){
    //     if(target === nums[i]) return i
    //     i--
    //   }
    //   return -1
    // }
    // return -1

    const biSearch = (arr,lo,hi) =>{
      while(lo <= hi){
        const mid=  Math.floor((lo + hi)/2)
        if(target === arr[mid]) return mid
        else if(target < arr[mid]) {
          hi = mid-1
        }else{
          lo = mid+1
        }
      }
      return -1
    }
    if(!nums || nums.length ===0) return -1
    if( nums.length ===1) return nums[0] === target ? 0 : -1
    let left = 0, right=nums.length-1
    while(left < right){
      const mid =  Math.floor((left+right)/2)
      if(nums[mid]>nums[right]){
        // 左段有序
        const hasTargetIndex = biSearch(nums,left,mid)
        if(hasTargetIndex !== -1) return hasTargetIndex
        left = mid+1
      }else{
        // 右段有序
        const hasTargetIndex = biSearch(nums,mid,right)
        if(hasTargetIndex !== -1) return hasTargetIndex
        right = mid
      }
    }
      return target === nums[left] ? left: -1
};


const input = [4,5,6,7,0,1,2]
console.log(search(input,6))