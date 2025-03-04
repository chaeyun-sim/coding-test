function solution(skill, skill_trees) {
    let cnt = 0;

    for (const tree of skill_trees) {
        let str = '';

        for (const t of tree) {
            if (skill.includes(t)) str += t;
        }

        if (skill.startsWith(str)) cnt++;
    }

    return cnt;
}
