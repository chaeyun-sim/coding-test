function checkEqual(needToBuy, map) {
    for (const [key, value] of needToBuy.entries()) {
        if (map.get(key) !== value) return false;
    }
    return true
}

function solution(want, number, discount) {
    const needToBuy = new Map(want.map((el, i) => [el, number[i]]))
    const n = 10
    const map = new Map()
    
    
    for (let i = 0; i < n; i++) {
        map.set(discount[i], (map.get(discount[i]) || 0) + 1)
    }
    
    let count = +checkEqual(needToBuy, map)
    
    let left = 0
    let right = n
    // 0 ~ 9, 1 ~ 10
    while (right < discount.length) {
        const removedItem = discount[left]
        const addedItem = discount[right]
        
        if (map.get(removedItem) === 1) {
            map.delete(removedItem);
        } else {
            map.set(removedItem, map.get(removedItem) - 1);
        }
        map.set(addedItem, (map.get(addedItem) || 0) + 1)
        
        count += (+checkEqual(needToBuy, map))
        
        left++
        right++
    }
    
    return count
}