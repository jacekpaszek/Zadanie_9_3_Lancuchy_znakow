var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first'
 + ' appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var textAfter = text.replace('Velociraptor', dinosaur.toUpperCase());

console.log(textAfter.substr(0, textAfter.length / 2));