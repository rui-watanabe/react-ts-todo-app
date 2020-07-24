export const moveItem = <T,>(
  listArray: T[],
  fromIndex: number,
  toIndex: number
) => {
  const startIndex = toIndex < 0 ? listArray.length + toIndex : toIndex
  const item = listArray.splice(fromIndex, 1)[0]
  listArray.splice(startIndex, 0, item)
  return listArray
}
