
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

// task 6
for(let i=2014;i<=2050;i++){
    var date=new Date(i,1-1,1)
    var day=date.getDay()
    if(day==0){
        console.log(`On first januray of ${i} day is sunday `)
    }
}

// task 10
function task10(){
    var celsius=Number(document.getElementById('celsius').value)
    var farhenheit=Number(document.getElementById('farhenheit').value)
    var cal =document.getElementById('celsius')
    var far=document.getElementById('farhenheit')
    if(farhenheit!=0){
        console.log("far",farhenheit)
        var result=(farhenheit-32)*5/9
        cal.value=result
        console.log(celsius)
    }
    else if(celsius!=0){
        var result=(9*(celsius/5))+32
        far.value=result
        console.log(farhenheit)
    
    }
    
}


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
// task 20
var num=[1,2,3,4,2,5,6,7,2,4,2]
console.log(num)
var replaceIt=2
var replaceBy=5
for(let i=0;i<num.length;i++){
    if(num[i]==replaceIt){
        num[i]=replaceBy
    }
}
console.log(num)

