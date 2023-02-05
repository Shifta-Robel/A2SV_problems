function totalFruit(fruits: number[]): number {
    var map = new Map();
    var l, r;
    l = r = 0;
    while(r < fruits.length){
        if(!map.get(fruits[r])) {
            map.set(fruits[r], 1)
        }else{ 
            map.set(fruits[r], map.get(fruits[r]) + 1)
        }

        if(map.size > 2){
            if(map.get(fruits[l]) !== 1) map.set(fruits[l], map.get(fruits[l]) - 1) 
            else map.delete(fruits[l])
            l++
        }
        r++
    }
    return r - l
};
