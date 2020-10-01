
exports.min = (array)=> {
  if(array){
  if(array.length !== 0){
  array.sort(function(a,b){
    return a-b;
  })
  return array[0];
}else {
  return 0;
}
  }else {
    return 0;
  }
}

exports.max = (array)=> {
  if(array){
  if(array.length !== 0){
 array.sort(function(a,b){
    return a-b;
  })
  return array[array.length-1];
}else{
  return 0;
}
}else{
  return 0;
}

}

exports.avg =  (array)=> {
  if(array){
  if(array.length !== 0){
  array.sort(function(a,b){
    return a-b;
  })
    let summa=0;
  for(let i=0; i<=array.length-1;i++){
    summa += array[i];
    }
    let mid = summa/array.length;

  return mid;
  }else{
    return 0;
  }
}else{
  return 0;
}

}
