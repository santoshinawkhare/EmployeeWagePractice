const Is_part_time = 1;
const Is_full_time = 2;
const Part_time_hours = 4;
const full_time_hours = 8;
const Wage_per_hours = 20;

let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck)
{
  case Is_part_time:
      empHrs = Part_time_hours;
      break;
  case Is_full_time:
        empHrs = full_time_hours;
        break;    
  default:
    empHrs = 0;     
}

let empWages = empHrs * Wage_per_hours;
console.log("Emp Wage:" +empWages);
