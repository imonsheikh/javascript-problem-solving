// method 1 
function count_zero(binStr){

    // const length = binStr.length
    // console.log(length);

    let totalZero = 0
    for(let i=0; i<binStr.length; i++){
        // console.log(binStr[i]);
        
        if(binStr[i] === "0"){
            totalZero = totalZero + 1
        }
    }
    // console.log(binStr[2]);
    // binStr[0]
    return totalZero 
     
}

const binaryString = "110011001100"

const result = count_zero(binaryString)
console.log(result)