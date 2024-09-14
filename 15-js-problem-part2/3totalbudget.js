/**
 * Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */

function calculateElectronicsBudget(laptopsQuantity, tabletsQuantity, mobilesQuantity){

    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const totalLaptops = laptopPrice * laptopsQuantity;
    const totalTablets = tabletPrice * tabletsQuantity;
    const totalMobiles = mobilePrice * mobilesQuantity;

    const totalBudget = totalLaptops + totalTablets + totalMobiles 

    return totalBudget
}

console.log(calculateElectronicsBudget(2, 1, 5));
