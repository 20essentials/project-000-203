const d = document;
d.designMode = 'on';
const $circlePointer = d.querySelector('.circle-pointer');

d.addEventListener('mousemove', e => {
  const { pageX, pageY } = e;
  $circlePointer.style.left = `${pageX}px`;
  $circlePointer.style.top = `${pageY}px`;
});

d.addEventListener('touchmove', e => {
  const { pageX, pageY } = e.touches[0];
  $circlePointer.style.left = `${pageX}px`;
  $circlePointer.style.top = `${pageY}px`;
});
