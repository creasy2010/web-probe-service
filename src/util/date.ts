


export function getCurrentWeek(){
    // https://stackoverflow.com/questions/5210376/how-to-get-first-and-last-day-of-the-current-week-in-javascript
    var curr = new Date(); // get current date
    var startDate = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    var endDate = startDate + 6; // last day is the first day + 6
    // return {startDate: new Date(2023,0,29),endDate:new Date(2023,1,7)}
    return  {startDate:new Date(curr.setDate(startDate)),endDate:new Date(curr.setDate(endDate))};
}
