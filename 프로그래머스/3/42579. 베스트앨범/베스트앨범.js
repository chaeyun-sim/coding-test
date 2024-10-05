function solution(genres, plays) {
    const map = new Map();

    plays.forEach((play, i) => {
        const genre = genres[i];
        if (!map.has(genre)) {
            map.set(genre, []);
        }
        map.get(genre).push([i, play]);
    });

    map.forEach((songs, genre) => {
        songs.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
    });

    const genreOrder = [...map.entries()].sort((a, b) => {
        const totalA = a[1].reduce((acc, cur) => acc + cur[1], 0);
        const totalB = b[1].reduce((acc, cur) => acc + cur[1], 0);
        return totalB - totalA;
    });

    const result = [];
    genreOrder.forEach(([genre, songs]) => {
        result.push(...songs.slice(0, 2).map(song => song[0]));
    });

    return result;
}
