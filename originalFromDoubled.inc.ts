function findOriginalArray(changed: number[]): number[] {
    if(changed.length % 2 != 0) return []
    let map = new Map()
    let num: number

    for(let item of changed){
        if (item % 2 == 0 && map.has(item/2)){
            num = item / 2
        }else if(map.has(item * 2)){
            num = item * 2
        }else{
            num = item
            map.set(num, 1)
            continue
        }
        console.log(map)
        // if(num == 0 && map.has(num) && map.get(num) == 0) map.set(num, 1)

        else map.set(num, map.has(num) ? map.get(num) - 1 : 1)
    }

    console.log(map)
    for(let [key, val] of map)
        if(val != 0) return []

    return Array.from(map.keys())
}
