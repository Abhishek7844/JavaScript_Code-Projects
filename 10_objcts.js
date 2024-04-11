const obj = {

  name : 'Abhi',
  class : 12,
  Section : 'A',
  Clg : 'Creative Convent Inter College'

}

//Object.seal(obj)
Object.freeze(obj)

//----->   Object.seal(object_name)  /   Object.freeze(object_name)
/*

1.  Object. seal() allows modification of existing properties, but does not permit addition or deletion of          properties.
2.  Object. freeze(), on the other hand, prevents any modifications, additions, or deletions properties.
3.  (delete obj_name.key) ---------> to delete any key through obj
4.  (key_name in obj_name) -------->  in-keywork to check a key is available in obj

*/


console.log(obj)
console.log(obj.name)  // to access a particular value of obj