/* Your Code Here */

function createEmployeeRecord(arr){

    let employeeObj = {
        firstName : arr[0],
        familyName : arr[1],
        title : arr[2],
        payPerHour : arr[3],
        timeInEvents : [],
        timeOutEvents : []
    }
    return employeeObj
}


function createEmployeeRecords(arrs){
        return arrs.map(e => { return createEmployeeRecord(e)})   
}


function createTimeInEvent(dateStamp){

    const [date, hour] = dateStamp.split(" ")
    
    
     this.timeInEvents.push({
        type : "TimeIn",
        hour : parseInt(hour, 10),
        date : date
    })

    return this


    //return createEmployeeRecord.call(this.timeInEvents, timeObj)
    
}
//"YYYY-MM-DD HHMM"


function createTimeOutEvent(dateStamp){

    const [date, hour] = dateStamp.split(" ")

     this.timeOutEvents.push ({
        type : "TimeOut",
        hour : parseInt(hour),
        date : date
    })
    return this

}


function hoursWorkedOnDate(date){

    let timeIn = this.timeInEvents.find(e=>{return e.date === date})

    let timeOut = this.timeOutEvents.find(e=>{return e.date === date})

    return (timeOut.hour - timeIn.hour)/ 100

    }
//"YYYY-MM-DD"

function wagesEarnedOnDate(date){

     return hoursWorkedOnDate.call(this, date) * this.payPerHour

}



function findEmployeeByFirstName(srcArray, firstName){

    return srcArray.find(e=> {return e.firstName === firstName})

}


function calculatePayroll(arr){

    
    return arr.reduce((wages, cb) => { 
        return wages + allWagesFor.call(cb)
    }, 0)

//     return employees.reduce((wages, employee) => {
//     return wages + allWagesFor.call(employee)
//   }, 0)
   
}






















/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

