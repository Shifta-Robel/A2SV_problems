function findOriginalArray(changed: number[]): number[]{
    changed.sort((a,b) => a-b);
    let original = [];
    let map = new Map();
    
    for(let item of changed){
        console.log(item)
        if(item % 2 === 1 || !map.get(item/2))
            map.set(item, (map.get(item) ?? 0) + 1);
        else{
            original.push(item/2);
            map.set(item/2, map.get(item/2) - 1);
        }
    }
 
    return changed.length / original.length === 2 ? original : [];
};
