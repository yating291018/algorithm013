/**
 * 151. 翻转字符串里的单词
 * 先分割出单词，然后进行翻转
 */
function reverseWords(s: string): string {
  return s.trim().split(/\s+/).reverse().join(' ')
};


/**
 * 557. 反转字符串中的单词 III
 * 记录空格位置和单词的开始位置
 */
function reverseWords(s: string): string {
  let length: number = s.length,
      i: number = 0,
      res: string[] = []
  while (i < length) {
      let start = i
      while (i < length && s.charAt(i) !== ' ') {
          i++
      }
      for (let p = start; p < i; p++) {
          res.push(s.charAt(start + i - 1 - p))
      }
      while (i < length && s.charAt(i) === ' ') {
          i++
          res.push(' ')
      }
  }
  return res.join('')
};