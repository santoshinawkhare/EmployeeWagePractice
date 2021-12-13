const Is_part_time = 1;
const Is_full_time = 2;
const Part_time_hours = 4;
const full_time_hours = 8;
const Wage_per_hours = 20;
const Max_hr_in_month = 160;
const Num_of_working_Days = 20;
let totalworkingDays = 0;
empDailyWageArr = new Array();
function getWorkingHr(empCheck)
{
    switch(empCheck)
    {
       case Is_part_time:
           return Part_time_hours;
       case Is_full_time:
           return full_time_hours; //2
       default:
           return 0;  
    }
}

function CalcDailyWage(empHrs)
{
    return empHrs * Wage_per_hours;
}
let totalempHr = 0;
while (totalempHr <= Max_hr_in_month && totalworkingDays < Num_of_working_Days)
{
    totalworkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3; 
    empHrs =  getWorkingHr(empCheck);
    totalempHr += empHrs;
    empDailyWageArr.push(CalcDailyWage(empHrs));
}
let empWage = CalcDailyWage(totalempHr);
console.log("UC6 - total Days:-" +totalworkingDays + " Total Hr:-" + totalempHr + " Emp Wage:-" + empWage);

// Array helper function

let totalWage = 0;
function Sum(dailyWage)
{
    totalWage += dailyWage; 
}
empDailyWageArr.forEach(Sum);
console.log("UC7A - total Days:-" +totalworkingDays + " Total Hr:-" + totalempHr + " Emp Wage:-" + empWage);

function totalWages(totalWage, dailyWage)
{
    return totalWage += dailyWage;
}
console.log("UC7A- Emp Wage with reduce:-" + empDailyWageArr.reduce(totalWages, 0));

//7B show the day along daily wages using array map helper function

let dailyCntr = 0;
function mapDayWithWage(dailyWage)
{
    dailyCntr++;
    return dailyCntr + " " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B- Daily Wage map :-");
console.log(mapDayWithWageArr);

//7C- show days when full time wage of 160 where earned

function fullTimeWage(dailyWage)
{
   return dailyWage.includes("160");
}
let fullDayWagearr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C- Daily Wage Filter When Fulftime Wage Earned");
console.log(fullDayWagearr);

// UC7D- find the first occurence when full time wage was earned using find function

function findfullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log ("UC7D- first Time full time Wage was earned on says :" +mapDayWithWageArr.find(findfullTimeWage))

//UC7E- check if there is full time wage

function isFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log ("UC7E-  checkall element have full time wage :" + fullDayWagearr.every(isFulltimeWage));

//7F check there is any part time Wage

function isZanyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("UC7F- Check if any part time Wage : "+mapDayWithWageArr.some(isZanyPartTimeWage));

//UC7G- find the number of day the employee worked
function totalDayWorked(numofDays, dailyWage)
{
    if(dailyWage > 0)
    return numofDays+1;
    return numofDays;
}
console.log("UC7G: No of day employee work :" + empDailyWageArr.reduce(totalDayWorked, 0));