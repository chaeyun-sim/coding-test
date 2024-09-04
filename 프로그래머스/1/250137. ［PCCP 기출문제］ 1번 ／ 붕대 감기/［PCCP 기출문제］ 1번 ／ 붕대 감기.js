function solution(bandage, health, attacks) {
    const maxHealth = health
    const max = attacks[attacks.length - 1][0]
    let cnt = 0

    for (let i = 1; i <= max; i++) {
        const idx = attacks.findIndex(el => el[0] === i)
        
        if (idx === -1) {
            health += bandage[1];
            cnt++
        } else {
            health -= attacks[idx][1]
            cnt = 0
        }
        
        if (cnt === bandage[0]) {
            health += (bandage[2])
            cnt = 0
        }
        
        if (health >= maxHealth) health = maxHealth
        
        if (health <= 0) return -1
    }

    return health <= 0 ? -1 : health;   
}