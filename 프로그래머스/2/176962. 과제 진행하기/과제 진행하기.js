function timeToMin(time) {
  const [hh, mm] = time.split(':').map(Number);
  return hh * 60 + mm;
}

function solution(plans) {
  const pausedWorks = [];

  const sortedPlans = plans
    .map(([subject, time, work]) => [subject, timeToMin(time), Number(work)])
    .sort((a, b) => b[1]- a[1]);

  while (sortedPlans.length) {
    const [subject, time, work] = sortedPlans.pop();

    pausedWorks.forEach((val, idx) => {
      if (time < val[1]) {
          pausedWorks[idx][1] += work
      };
    });
    pausedWorks.push([subject, time + work]);
  }

  const answer = pausedWorks.sort((a, b) => a[1] - b[1]).map(val => val[0]);
  return answer;
}