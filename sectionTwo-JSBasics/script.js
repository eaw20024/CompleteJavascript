// Whats your BMI //

// var ericsNewMass = 113.3980925;
// var ericsOldMass = 127.0058636;

// var ericsHeight = 1.9;

// var ericsOldBMI = ericsOldMass / (ericsHeight * ericsHeight);
// var ericsNewBMI = ericsNewMass / (ericsHeight * ericsHeight);

// console.log(ericsOldBMI);
// console.log(ericsNewBMI);

// var isHigher = ericsNewBMI > ericsOldBMI;
// console.log(isHigher)

// if(ericsNewBMI < ericsOldBMI){
//     console.log("You lost weight")
// } else {
//     console.log("You gained weight! Oh no!")
// }

var person1 = {
    fullName: 'EricW',
    height: 1.9,
    mass: 113.3980925,
    bmiCalc: function(){
        this.bmi = this.mass / (this.height * this.height);
    }
}

// person1.bmiCalc();
// console.log(person1);

var person2 = {
    fullName: 'JohnD',
    height: 1.6,
    mass: 105,
    bmiCalc: function(){
        this.bmi = this.mass / (this.height * this.height);
    }
}

// person2.bmiCalc();
// console.log(person2);

// Loops and Iterations //

var eric = {
    bills: [124, 48, 268, 180, 42],
    calcTips: function(){
        this.tips = [];
        this.finalBill = [];

        for(var i = 0; i < this.bills.length; i++){

            var percentage;
            var bill = this.bills[i];

            if(bill < 50){
                percentage = 0.20;
            } else if(bill >= 50 && bill <= 200){
                percentage = 0.15;
            } else if(bill > 200){
                percentage = 0.10;
            }

            this.tips[i] = Math.floor(bill * percentage);
            this.finalBill[i] = bill + bill * percentage;
        }
    }
};  

eric.calcTips();
console.log(eric);

var mark = {
    bills: [77, 375, 110, 45],
    calcTips: function(){
        this.tips = [];
        this.finalBill = [];

        for(var i = 0; i < this.bills.length; i++){

            var percentage;
            var bill = this.bills[i];

            if(bill < 100){
                percentage = 0.20;
            } else if(bill >= 100 && bill <= 300){
                percentage = 0.15;
            } else if(bill > 300){
                percentage = 0.10;
            }

            this.tips[i] = Math.floor(bill * percentage);
            this.finalBill[i] = bill + bill * percentage;
        }
    }
};

function avgTipCalc(tips){
    var sum = 0;
    for(var i = 0; i < tips.length; i++){
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

mark.calcTips();
console.log(mark);

eric.average = avgTipCalc(eric.tips);
mark.average = avgTipCalc(mark.tips);
console.log(eric.average, mark.average);

if(eric.average > mark.average){
    console.log("Eric's family pays a higher average of tips with: " + eric.average + " per meal");
} else {
    console.log("Mark's family pays a higher average of tips with: $" + mark.average + " per meal");
}