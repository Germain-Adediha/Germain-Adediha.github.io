
// the main converter function //основная функция //

function intToRoman(number){
    let neededValues = {
            M:1000,CM:900,D:500,CD:400, C:100,XC:90,
            L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1   
    } ;
    let romanNumber= "";

    for (var i in neededValues){
        while(number >= neededValues[i]){
            romanNumber +=i;
            number -= neededValues[i];
        }
    }
    return romanNumber;
}

            // execution - выполнение //
//console.log(intToRoman(03));
//console.log(intToRoman(82));
//console.log(intToRoman(1999)); 
//console.log(intToRoman(2023)); 