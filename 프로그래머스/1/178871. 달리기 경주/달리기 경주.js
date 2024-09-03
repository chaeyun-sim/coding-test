function solution(players, callings) {
    const map = new Map(players.map((player, index) => [player, index]));
    
    callings.forEach(name => {
        const idx = map.get(name)
        
        if (idx > 0) {
            const prev = players[idx - 1]
            let [a, b] = [players[idx], players[idx - 1]]
            players[idx - 1] = a
            players[idx] = b
            map.set(name, idx - 1)
            map.set(prev, idx)
        }
    })
    
    return [...map.entries()].sort((a, b) => a[1] - b[1]).map(el => el[0])
}