var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaur = dinosaur.toUpperCase();
var textAfter = text.replace('Velociraptor', 'TRICERATOPS');

console.log(textAfter.substr(0, textAfter.length / 2));