const Max_hrs_in_month = 100;
const Num_of_working_days = 10;
let totalempHrs = 0;
let totalWorkingDays = 0;
while (totalempHrs <=Max_hrs_in_month && totalWorkingDays < Num_of_working_days)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() *10) % 3;
    totalempHrs += getWorkingHr(empCheck);
}
let empWage = totalempHrs * Wage_per_hours;
console.log("UC5 - Total Days:" + totalWorkingDays + "Total Hrs:" + totalempHrs + "Emp Wage:" +empWage);