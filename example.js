function describe_object_array_manipulation_from_obj_values() {
  const obj_old = { uname: 'frank', value1: 9, value2: 12 }
  let obj_new = {}
  
  // check if uname key exists in object.
  console.log(!('uname' in obj_new)) // false

  // create an empty array of 2 for the values to eventually land.
  obj_new['uname'] = new Array(2)

  // now uname key should exist
  console.log(!('uname' in obj_new)) // true  
}

describe_object_array_manipulation_from_obj_values()

function describe_object_array_manipulation() {
  const obj_old = { uname: 'frank', value1: 9, value2: 12 }
  let obj_new = {}
  
  // check if uname key exists in object.
  console.log(!(obj_old.uname in obj_new)) // false

  // create an empty array of 2 for the values to eventually land.
  obj_new[obj_old.uname] = new Array(2)

  // now uname key should exist
  console.log(!(obj_old.uname in obj_new)) // true  
}

describe_object_array_manipulation()



function merge_an_array_of_objects_into_an_object_with_arrays() {
  const obj_old = [
    { uname: 'frank', value1: 9, value2: 12}, 
    { uname: 'susan', value1: 9, value2: 12}
  ]
  let obj_new = {}
  iterate_array(obj_old, obj_new) 
  
}
function iterate_array() {

}
  // check if the obj_new has the key 'uname' if no create with an array.
  if (!('uname' in obj_new)) { obj_new[]
