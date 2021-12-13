const Is_part_time = 1;
const Is_full_time = 2;
const Part_time_hours = 4;
const full_time_hours = 8;
const Wage_per_hours = 20;
const Max_hr_in_month = 160;
const Num_of_working_Days = 20;
let totalEmpHr = 0;
let totalworkingDays = 0;
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
while (totalEmpHr <= Max_hr_in_month && totalworkingDays < Num_of_working_Days)
{
    totalworkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3; 
    totalEmpHr +=  getWorkingHr(empCheck);
}

let empWage = totalEmpHr *  Wage_per_hours;
console.log("UC5 - total Days:-" +totalworkingDays + " Total Hr:-" + totalEmpHr + " Emp Wage:-" + empWage);