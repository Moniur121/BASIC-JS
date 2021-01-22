/**Kilometer to Meter Converter */
function kilometerToMeter(km){
    let meter=km*1000;
    if (km==0 || km==-1) {
        return "Sorry! Please try again,km is starting Positive value";
    }
    return meter;
}
let meterResult=kilometerToMeter(7);
console.log(meterResult);

/**Budget Calculator Elements of Watch, Mobile, Laptop */
function budgetCalculator(watch, mobile,laptop){
    let sum=0;
    let watchCounting=watch*50
    let mobileCounting=mobile*100;
    let laptopCounting=laptop*500;
    sum=watchCounting+mobileCounting+laptopCounting;
    if (watch==-1 ||mobile==-1 ||laptop==-1) {
         return "Sorry your input value is invalid, please try again";
    }
    return sum;
    
}
let result=budgetCalculator(2,4,5);
console.log(result);
 
/** hotelCost perDays Amount */
function hotelCost(days){
    let daysCount=0;
    if (days==-1) {
        return "your keyword isn't positive value";
    }
   else if(days<=10){
        daysCount=days*100;
    }
    else if(days<=20){
        let firstDays=10*100;
        let discount=days-10;
        let secondDays=discount*80;
        daysCount=firstDays+secondDays;
    }
    else{
        let firstDays=10*100;
        let secondDays=10*80;
        let discount=days-20;
        let  thirdDays=discount*50;
        daysCount=firstDays+secondDays+thirdDays;
    }
    return daysCount;
}
let moneyOfPayment=hotelCost(12);
console.log(moneyOfPayment);

/**megaFriend function output value of Maximum Character length */
function megaFriend(stringChar){
    let largestChar=[0];
    for (let i = 0; i < stringChar.length; i++) {
        const index=stringChar[i].length
         if(largestChar.length<index){
             largestChar=stringChar[i];
         }
         else if(largestChar>=0 && largestChar<=9){
             return "Sorry! your input is Number,please enter a char value";
         }
    }
    return largestChar;
}
let element= ["rahim","helal","rayhanislam","moniurrahman"];
let result=megaFriend(element);
console.log(result);