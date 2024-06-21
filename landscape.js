console.log('3-landscape-portrait');

function isLandscape(width, height){
  // 3. ternary short syntax
  return (width > height);
}

let checkWidthHeight1 = isLandscape(200, 400);
console.log('Landscape:',checkWidthHeight1);

let checkWidthHeight2 = isLandscape(500, 700);
console.log('Landscape:',checkWidthHeight2);

let checkWidthHeight3 = isLandscape(800, 1000);
console.log('Landscape:',checkWidthHeight3);