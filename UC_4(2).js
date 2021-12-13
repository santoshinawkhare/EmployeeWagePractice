const Is_part_time = 1;
const Is_full_time = 2;
const Part_time_hours = 4;
const full_time_hours = 8;
const Wage_per_hours = 20;
let empHrs = 0;
const Num_of_working_days = 20;
//let empCheck = Math.floor(Math.random() * 10) % 3;
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
for (let day = 0; day < Num_of_working_days; day++)
{
  let empCheck = Math.floor(Math.random() * 10) % 3; //2
  empHrs += getWorkingHr(empCheck);//2
  
}
let empWage = empHrs * Wage_per_hours;
console.log("Total Hrs: " + empHrs +  "Emp Wage: " + empWage);