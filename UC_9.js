const Is_part_time = 1;
const Is_full_time = 2;
const Part_time_hours = 4;
const full_time_hours = 8;
const Wage_per_hours = 20;
const Max_hr_in_month = 160;
const Num_of_working_Days = 20;
let totalworkingDays = 0;
empDailyWageArr = new Array();
empDailyWagemap = new Map();
empDailyHrsmap = new Map();
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
    empDailyWagemap.set(totalworkingDays, CalcDailyWage(empHrs));
    empDailyHrsmap.set(totalworkingDays, empHrs);
}
console.log(empDailyWagemap);
console.log(empDailyHrsmap);

const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let count = 0;
let totalHour = Array.from(empDailyHrsmap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("UC9: Emp wage with Arrow.: "+ "Total Hours: "+ totalHour + "total wage: " + totalSalary);
let NonworkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsmap.forEach((value, key, map) => {
   if (value == 8) fullWorkingDays.push(key);
   else if (value == 4) partWorkingDays.push(key);
   else NonworkingDays.push(key);
});

console.log("Full Working Days: "+fullWorkingDays);
console.log("Part Working Days: "+partWorkingDays);
console.log("Non Working Days: "+NonworkingDays);
