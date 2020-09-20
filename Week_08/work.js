/**
 *  1. 位1的个数
 *  解题思路： 使用n & (n - 1) 可以使最右边一位为0， 其他位数保持不变，然后让与运算之后的数，再次n & (n - 1)一直到0
 */

var hammingWeight = function(n) {
  let count = 0
  while (n) {
      count++
      n &= (n - 1)
  }
  return count
};

/**
 * 2. 2的幂
 * 解题思路：使用n & (-n) 可以使最右边的1保留，其他位请0， 如果之后还与原数相等就是2的幂
 */
var isPowerOfTwo = function(n) {
  if (n <= 0) return false
  // 保留最右边的1，清楚其他位的1.判断是否相等
  return (n & (-n)) === n
  // 清楚最右边的1为0， 看是否等于0
  // return (n & (n - 1)) === 0
};

/**
 * 3. 有效的字母异位词
 * 先通过排序，然后比较是否一致
 */

function isAnagram(s: string, t: string): boolean {
  return s.split('').sort().join('') === t.split('').sort().join('')
};

/**
 * LRU缓存机制
 * 解题思路：使用Map, 如果是新值存入就校验是不是和超过了缓存最大数，如果key存在就删除,然后再set，
 * 取值，如果存在就删除重新存入，可以保证最近使用了。
 */
class LRUCache {
  private capacity:number
  private map: Map<number, number> = new Map()
  constructor(capacity: number) {
      this.capacity = capacity
  }

  get(key: number): number {
      // 保证有的话，就是使用了，放到最前面去
      if (this.map.has(key)) {
          let temp: number | undefined = this.map.get(key)
          this.map.delete(key)
          if (temp) this.map.set(key, temp)
          return temp || temp === 0 ? temp : -1
      } else {
          return -1
      }
  }

  put(key: number, value: number): void {
      if (this.map.has(key)) {
          // 这个时候回自动放入最新操作中吗
          this.map.delete(key)
      } else if (this.map.size >= this.capacity) { // 如果是新值的话，注意是不是已经超过缓存最大数了
          // 如果超过了就删除最少最早使用的,前面的值
          this.map.delete(this.map.keys().next().value)
      }
      this.map.set(key, value)
  }
}