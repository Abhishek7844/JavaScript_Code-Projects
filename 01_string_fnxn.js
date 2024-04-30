function dogs(animal, adjective, verb, adverb)
{
  var result ="";
  result = 'The '+ adjective+ " "+animal+" ran to the forest "+adverb+'.';
  return result;
}
console.log(dogs('Puppy', 'big','ran','quickly'));