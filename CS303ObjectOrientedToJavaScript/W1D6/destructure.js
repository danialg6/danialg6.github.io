"use strict";

//Create a date
//module.exports = {getWeekDay}
//new Date(year, month, date, hour, minute, second, millisecond)
let date = new Date(2012, 1, 20, 3, 12);
console.log( date );
//or
//new Date(datastring)
// let d2 = new Date("February 20, 2012 03:12:00");
// alert( d2 );


// Show a weekday 
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()];
  }
  let datee = new Date(2014, 0, 3); // 3 Jan 2014
  console.log( getWeekDay(datee) ); // FR

  //European weekday
  function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) { // weekday 0 (sunday) is 7 in european
      day = 7;
    }
    return day;
  }
  let dateee = new Date(2014, 0, 3); 
  console.log( getLocalDay(dateee) ); 
  
  //Which day of month was many days ago?
  function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
  }
  
  let datte = new Date(2015, 0, 2);
  
  console.log( getDateAgo(datte, 1) ); // 1, (1 Jan 2015)
  console.log( getDateAgo(datte, 2) ); // 31, (31 Dec 2014)
  console.log( getDateAgo(datte, 365) ); // 2, (2 Jan 2014)

  //• Last day of the month?
  function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  
  console.log( getLastDayOfMonth(2012, 0) ); // 31
  console.log( getLastDayOfMonth(2012, 1) ); // 29
  console.log( getLastDayOfMonth(2013, 1) ); // 28

  //How many seconds has passed today?

  function getSecondsToTomorrow() {
    let now = new Date();
  
    // tomorrow date
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = tomorrow - now; // difference in ms
    return Math.round(diff / 1000); // convert to seconds
  }
  console.log(getSecondsToTomorrow());

  ///Format the relative date
  function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
  
    // formatting
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    if (diffSec < 1) {
      return 'right now';
    } else if (diffMin < 1) {
      return `${diffSec} sec. ago`
    } else if (diffHour < 1) {
      return `${diffMin} min. ago`
    } else {
      return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
  }
  let ddate= new Date();
  console.log(formatDate(ddate));

  //////Destructuring assignment

  let user = {
    namee: "John",
    years: 30
  };
  
  let {namee, years: age, isAdmin = false} = user;
  
  console.log( namee ); // John
  console.log( age ); // 30
  console.log( isAdmin ); // false


  //The maximal salary

  function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  console.log(topSalary(salaries));
