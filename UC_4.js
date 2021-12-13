const Is_part_time = 1;
const Is_full_time = 2;
const Part_time_hours = 4;
const full_time_hours = 8;
const Wage_per_hours = 20;
const Num_of_working_days = 20;
let empHrs = 0;
function getWorkingHr(emppresent)
{
    switch(emppresent)
    {
       case Is_part_time:
           return Part_time_hours;
       case Is_full_time:
           return full_time_hours;
       default:
           return 0;  
    }
}
function CalcEmpWage(empWorkHrs)
{
    return empWorkHrs * Wage_per_hours;
}
 let totalempHr = 0;
for (let day = 0; day < Num_of_working_days; day++)
{
  let empCheck = Math.floor(Math.random() * 10) % 3;
  empHrs = getWorkingHr(empCheck);
  let dailyWages = CalcEmpWage(empHrs);
  console.log("dailyWages:" +dailyWages);
  totalempHr += empHrs;
}
let empWage = CalcEmpWage(totalempHr);
console.log("empWage:" +empWage);
console.log("Total Hrs: " + totalempHr + "Emp Wage: " +empWage);