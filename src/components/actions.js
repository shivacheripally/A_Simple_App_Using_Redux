function addColor(value){
  return{
    type: 'ADD',
    color: value
  }
}

function removeColor(value){
  return{
    type: 'REMOVE',
    color: value
  }
}

var actions = {addColor,removeColor};
export default actions;