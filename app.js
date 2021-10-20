
// task 2
var date= new Date()
var month=date.getMonth()+1
var day=date.getDate()
var year =date.getFullYear()
console.log(`${month}-${day}-${year}`)
console.log(`${day}-${month}-${year}`)
console.log(`${day}/${month}/${year}`)


// task 4
var string="Saylani"
var arr=[]
for(var i=string.length-1;i>=0;i--){
    arr.push(string[i])
}
console.log(arr.join(''))



// task 12
function task12(){
    var inp=Number(document.getElementById('task12').value)
    if((inp>20 && inp<100) || inp==400 ){
        console.log("The given Number is within 20 of 100 or 400.")
    }
    else{
        console.log("The given Number is not in 20 of 100 or 400.")

    }
}
//task13
var array=[5,7,2]
if(array[0]>array[1] && array[0]>array[2] ){
    console.log(`The greatest number is ${array[0]}`)
}else if(array[1]>array[2] && array[1]>array[0] ){
    console.log(`The greatest number is ${array[1]}`)
}else if(array[2]>array[1] && array[2]>array[0] ){
    console.log(`The greatest number is ${array[2]}`)
}

// task 14
var sample="my name is asad ali khan"
var string=sample.split(' ')

for(let i=0;i<string.length;i++){
   string[i]=string[i][0].toUpperCase()+string[i].substr(1)
}
console.log(string.join(' '))


// task 16
var string=['This','is','sample','array']
var arr=[]
for(var i=string.length-1;i>=0;i--){
    arr.push(string[i])
}
console.log(arr)


// TASK 18
function task18(){
    var kth=Number(document.getElementById('task18').value)
    var array=[1,10,2,3,88,44,64,37,22,19,55,56,63,24]
    var sortedArray=array.sort(function(a, b){return b-a})
    console.log(sortedArray)
    console.log(sortedArray[kth-1])
}


