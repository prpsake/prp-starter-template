export const ensureArray = 
  x => 
  Array.isArray(x) ? 
  x.filter(x => (typeof x === "number") || x) : 
  [x].filter(x => (typeof x === "number") || x)



export const emptyArray =
  xs =>
  xs.length === 0



export const notEmptyArray =
  x =>
  !emptyArray(x)



export const mapx = 
  (fn, arr) => 
  arr.map(
    ( x, i, arr,
      extra = {
        first: i === 0,
        last: i === arr.length - 1,
        even: i%2 === 0,
        odd: i%2 === 1
      }
    ) => fn(extra, x, i, arr)
  )