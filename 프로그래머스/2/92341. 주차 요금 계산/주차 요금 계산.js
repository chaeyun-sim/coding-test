function getTimeDiff(startTime, endTime) {
    const [startH, startM] = startTime.split(':').map(Number);
    const [endH, endM] = endTime.split(':').map(Number);
    return (endH * 60 + endM) - (startH * 60 + startM);
}

function calculateFee(totalTime, fees) {
    const [basicTime, basicFee, unitTime, unitFee] = fees;
    if (totalTime <= basicTime) return basicFee;
    return basicFee + Math.ceil((totalTime - basicTime) / unitTime) * unitFee;
}

function solution(fees, records) {
    const enterMap = new Map(), totalTimeMap = new Map();
    
    records.forEach(record => {
        const [time, car, type] = record.split(' ');
        if (type === 'IN') enterMap.set(car, time);
        else {
            const parkedTime = getTimeDiff(enterMap.get(car), time);
            totalTimeMap.set(car, (totalTimeMap.get(car) || 0) + parkedTime);
            enterMap.delete(car);
        }
    });

    enterMap.forEach((time, car) => {
        const parkedTime = getTimeDiff(time, '23:59');
        totalTimeMap.set(car, (totalTimeMap.get(car) || 0) + parkedTime);
    });

    return [...totalTimeMap.entries()]
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([car, totalTime]) => calculateFee(totalTime, fees));
}
