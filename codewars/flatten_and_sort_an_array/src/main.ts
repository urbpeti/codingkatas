export function flattenAndSort(inputArray: number[][]): number[] {
  return inputArray
    .reduce((acc : number[], curr: number[]): number[] => acc.concat(curr),[])
    .sort((a:number, b:number):number => a - b)
}
