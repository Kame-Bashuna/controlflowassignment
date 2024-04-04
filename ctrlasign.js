//no1
function newArray(arr){
  const firstFour =arr.slice(0,4).map(item=>item*item)
  console.log(firstFour)
  const lastTwo=arr.slice(-2).map(item=>item+10)
  console.log(lastTwo)
  const newArray1=firstFour+lastTwo

}
newArray([10,10,10,10,10,10,10])

 
  //no2
  let arrNum=[1,2,3,4,5,6,7,8,9]
  let x=0
  while(x<arrNum.length){
    if(arrNum[x]===arrNum[3]){
      break;
    }
    console.log(arrNum[x]);x++;
  }
  
  //no3
  let fruits=["apple","plum","banana","strawberry","kiwi"]
  for (let y=1; y<=5; y++){
    if (y==3){
      continue;
    }
    console.log(fruits)
  }

  //no4
 function newArray(arr){
  for (let w=0; w<arr.length;w++){
    console.log(`cars:${arr[w]}`)
  }
 }
 let cars=["Audi","Mazda","Bmw"]
 newArray(cars)

  //no5
  function string(str){
    let string=""
    let v=str.length-1
    while(v>=0){
      string +=str.substring(v,v+1)
      v--
    }
    console.log(string)
  }
  string("Hope")