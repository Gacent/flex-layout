var htsized = 100
var isRemed = true
export function px2rem(px) {
  if (isRemed) {
    // px/html的fontSize=rem
    const rem = htsized
    return (px / rem) + 'rem'
  } else {
    return px + 'px'
  }
}

export const use = function(opt) {
  const { isRem, htsize } = opt
  htsized = htsize
  isRemed = isRem
}

export default { use }
