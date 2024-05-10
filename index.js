function isValidBST(root) {
  return isValid(root, null, null);
  function isValid(node, min, max) {
    if (!node) return true;
    if ((min !== null && node.val <= min) || (max !== null && node.val >= max))
      return false;
    return (
      isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
    );
  }
}
