let circlesCount = 0;
const circlesMetaData = [];
function handleClick({ x, y }) {
  if (circlesCount === 2) {
    document.body.querySelectorAll('div').forEach((div) => div.remove());
    circlesCount = 0;
    circlesMetaData.length = 0;
  }
  const RADIUS = { lower: 100, upper: 150 };
  const radius = Math.floor(Math.random() * (RADIUS.upper - RADIUS.lower + 1)) + RADIUS.lower;
  const circle = document.createElement('div');
  circle.style = `height: ${2 * radius}px; width: ${2 * radius}px; border: 1px solid blue; position: absolute; top:${y}px; left:${x}px; translate: -${radius}px -${radius}px; border-radius:100%;`;
  document.body.appendChild(circle);
  circlesCount++;
  circlesMetaData.push({
    radius,
    x: x - radius,
    y: y - radius,
  });
  if (circlesCount === 2) {
    const intersect =
      (circlesMetaData[1].x - circlesMetaData[0].x) ** 2 +
        (circlesMetaData[1].y - circlesMetaData[0].y) ** 2 <=
      (circlesMetaData[1].radius + circlesMetaData[0].radius) ** 2;
    if (intersect) alert('Circles are intersecting !!!');
  }
}
//coordinates -(x-radius, y-radius)
//distance b/w both coordinates < sum of their radius ? intersects : doesn't intersects
//Math.sqrt((x2-x1)**2 + (y2-y1)**2) < r1+r2
document.body.addEventListener('click', handleClick);
