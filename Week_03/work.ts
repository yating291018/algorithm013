/***
  从前序与中序遍历序列构造二叉树
  作业能想明白的就这一道，先交一道。后面的都搞明白了，再补全。
 */
 function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0 || inorder.length === 0) {
      return null
  }
  // 前序遍历中，第一个节点就是root节点，遍历前序，找到中序遍历中根节点的位置，
  let root: TreeNode | null = new TreeNode(preorder[0])
  for (let i = 0; i < preorder.length; i++) {
      if (preorder[0] === inorder[i]) {
          // 分为左右子树
          let pre_left = preorder.slice(1, i + 1)
          let pre_right = preorder.slice(i + 1)
          let in_left = inorder.slice(0, i)
          let in_right = inorder.slice(i + 1)
          // 左节点就是两个左子树
          root.left = buildTree(pre_left, in_left)
          // 右节点就是右子树
          root.right = buildTree(pre_right, in_right)
          break
      }
  }
  return root
};