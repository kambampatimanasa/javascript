console.log('16-circle-area-object-read-only-property');

const CIRCLE = {
  name: 'mainCircle',
  lineColor: 'blue',
  bgColor: 'yellow',
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
}

console.log('CIRCLE.area:', CIRCLE.area);