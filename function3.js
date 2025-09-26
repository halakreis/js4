//Function Code CIRCLE
//Task1
function findSmallest(...nums){
    return Math.min(...nums);
}
console.log(findSmallest(3,4,5,6))
//Task2
function alphabeticalOrder(string){
    let arr = []
    for(let i = 0; i < string.length;i++){
      arr = arr.concat(string[i])
    }
    arr.sort()
    console.log(arr.join(""))
}
alphabeticalOrder("hello")
//Task3
function  oddOrEven(num){
    if(num%2 == 0){
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
}
oddOrEven(9)
//Task4
function evenNum(array){
   let arrayTwo = []
    for(let i =0; i < array.length; i++){
        if(array[i]%2 == 0){
            arrayTwo= arrayTwo.concat(array[i])
        }
        else{
            continue;
        }
    }
    return arrayTwo;
}
console.log(evenNum([1,2,3,4,5,6,7,8,9]))
//Task5
function getAbsSum(array2){
    let sum = 0;
    for(let i =0; i < array2.length; i++){
        if (array2[i] < 0){
            sum += -array2[i]
        }
        else{
            sum += array2[i]
         }
   
}
 return sum;
}
console.log(getAbsSum([-1,-3,-5,-4,-10,0]))
//Task6
function factorial(number){
   let fac = 1;
   for(let i = number; i >0; i--){
    fac = fac * i ;
   }
   return fac;
}
console.log(factorial(8))
//Task7
function numbersOnly(array3){
    let arr2 = [];
    for(let i = 0; i < array3.length; i++){
        if (typeof array3[i] == "number"){
           arr2 = arr2.concat(array3[i])
        }
        else{
            continue;
        }
    }
    return arr2;
}
console.log(numbersOnly(["Ayham",3,7,"Alaa",13,"coding"]))
//Task8
function addUp(number2){
    let add = 0;
   for(let i = number2; i >= 0; i--){
     add +=i;
   }
   return add;
}
console.log(addUp(8))
//Task9
function minMaxLengthAverage(array4){
    let w = 0;
    let indexZero = array4[0]
for(let i = 0; i < array4.length; i++){ 
  if(array4[i]<array4[0]){
    indexZero= array4[i]
  }
}
   let indexOne = array4[0]
for(let i = 0; i < array4.length; i++){
    if(array4[i]>array4[0]){
    indexOne = array4[i]
  }
}
    let indexTwo = array4.length;
    let addition = 0;
    for(let i = 0; i < array4.length; i++){
      addition += array4[i]
    }
    let indexThree = addition/array4.length;
    return [indexZero,indexOne,indexTwo,indexThree]
}
console.log(minMaxLengthAverage([7,13,3,77,100]))
//Task10
function romanNumber(numberr){
   let stringg = numberr.toString()
   let arrayray= stringg.split()
   let arrayray2 = [];
   for (let i = 0; i < arrayray[0].length; i++){
    arrayray2 = arrayray2.concat(arrayray[0][i])
   }
   
  if (arrayray2.length == 1){
    let ones = arrayray2.pop()
    switch(ones){
        case 1:
            return "I"
        case 2:
            return "II"
        case 3:
            return "III"
        case 4:
            return "IV"
        case 5:
            return "V"
        case 6:
            return "VI"
        case 7:
            return "VII"
        case 8:
            return "VIII"
        case 9:
            return "IX"
    }
  }
  else if(arrayray2.length == 2){
    let ones = arrayray2.pop()
    let tens = arrayray2.pop()
    let first = "";
    let second = "";
    switch(ones){
       case 1:
         first = "I"
       case 2:
         first = "II"
         case 3:
             first ="III"
         case 4:
             first = "IV"
         case 5:
             first = "V"
        case 6:
            first = "VI"
        case 7:
             first ="VII"
        case 8:
            first ="VIII"
        case 9:
            first ="IX"
            }
    switch(tens){
      case 1:
         second = "X"
       case 2:
         second = "XX"
         case 3:
         second ="XXX"
         case 4:
             second = "XL"
         case 5:
             second = "L"
        case 6:
            second = "LX"
        case 7:
             second ="LXX"
        case 8:
            second ="LXXX"
        case 9:
            second ="XC"
            }
        return second+first;
    }
    else if (arrayray2.length == 3){
         let ones = arrayray2.pop()
         let tens = arrayray2.pop()
         let huns = arrayray2.pop()
         let first = "";
         let second = "";
         let third = "";
          switch(ones){
       case 1:
         first = "I"
       case 2:
         first = "II"
         case 3:
             first ="III"
         case 4:
             first = "IV"
         case 5:
             first = "V"
        case 6:
            first = "VI"
        case 7:
             first ="VII"
        case 8:
            first ="VIII"
        case 9:
            first ="IX"
            }
    switch(tens){
      case 1:
         second = "X"
       case 2:
         second = "XX"
         case 3:
         second ="XXX"
         case 4:
             second = "XL"
         case 5:
             second = "L"
        case 6:
            second = "LX"
        case 7:
             second ="LXX"
        case 8:
            second ="LXXX"
        case 9:
            second ="XC"
            }
        switch(huns){
        case 1:
            third ="C"
        case 2:
            third = "CC"
        case 3:
            third ="CCC"
        case 4:
            third = "CD"
        case 5:
            third = "D"
        case 6:
            third = "DC"
        case 7:
            third ="DCC"
        case 8:
            third ="DCCC"
        case 9:
            third ="CM"
            }
        return third+second+first;
    }
    else if (arrayray2.length== 4){
         let ones = arrayray2.pop()
         let tens = arrayray2.pop()
         let huns = arrayray2.pop()
         let thous = arrayray2.pop()
         let first = "";
         let second = "";
         let third = "";
         let fourth = "";
          switch(ones){
       case 1:
         first = "I"
       case 2:
         first = "II"
         case 3:
             first ="III"
         case 4:
             first = "IV"
         case 5:
             first = "V"
        case 6:
            first = "VI"
        case 7:
             first ="VII"
        case 8:
            first ="VIII"
        case 9:
            first ="IX"
            }
    switch(tens){
      case 1:
         second = "X"
       case 2:
         second = "XX"
         case 3:
         second ="XXX"
         case 4:
             second = "XL"
         case 5:
             second = "L"
        case 6:
            second = "LX"
        case 7:
             second ="LXX"
        case 8:
            second ="LXXX"
        case 9:
            second ="XC"
            }
        switch(huns){
        case 1:
            third ="C"
        case 2:
            third = "CC"
        case 3:
            third ="CCC"
        case 4:
            third = "CD"
        case 5:
            third = "D"
        case 6:
            third = "DC"
        case 7:
            third ="DCC"
        case 8:
            third ="DCCC"
        case 9:
            third ="CM"
            }
        switch(thous){
        case 1:
            fourth ="M"
        }
        return fourth + third + second + first;
  }
}
console.log(romanNumber(1989))
  
//Task11
function countWords(str){
    let w = 1;
    for (let i =0; i < str.length; i++){
        
        if(str[i] == " "){
          w += 1;
        }
        else{
            continue;
        }
    }
   return w;
}
console.log(countWords("hello from codingacadmy"))
//Task12
function multiplyByLength (arr3){
    let arr4 = [];
    for(let i = 0; i < arr3.length ; i++){
       arr4 = arr4.concat(arr3[i]*arr3.length) 
    }
    return arr4;
}
console.log(multiplyByLength([4,2,5]))
//Task13
function checkEnding(str1,str2){
    let arrayThree= str1.split()
    let arrayFour = str2.split()
    let m = []
    for(let i = arrayFour.length; i > 0 ; i--){
      m = m.concat(arrayThree.pop())
    }
    if (m == str2){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkEnding("CodingSchool","Ac"))
//Task14
function doubleChar(string2){
     let ssttrriinngg = ""
     for (let i = 0; i < string2.length ; i++){
       ssttrriinngg = ssttrriinngg.concat(string2[i]+string2[i])
     }
     return ssttrriinngg;
}
console.log(doubleChar("Coding"))
//Task15
function findIndex (array5,element){
    for(let i =0; i < array5.length; i++){
        if(array5[i] == element){
            return i;
        }
        else{
            continue;
        }
    }
}
console.log(findIndex(["Ali","Mazen","Ayham","Murad"], "Ali"))