'use strict';

let table = document.getElementById('table');
let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let branches = [];

function Stores (storeName, maxHoursCustomers, minHoursCustomer, avgCookiesByCustomer){
  this.storeName = storeName;
  this.maxHoursCustomers = maxHoursCustomers;
  this.minHoursCustomer = minHoursCustomer;
  this.avgCookiesByCustomer = avgCookiesByCustomer;
  this.DailyLocationTotal = 0;
  this.AllSalesPerHour = [];
  this.random();
  branches.push(this);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min));
}

Stores.prototype.random = function () {
  for (let i = 0; i < hours.length; i++) {
    let SalesPerHour = Math.ceil((getRandom(this.minHoursCustomer, this.maxHoursCustomers)) * this.avgCookiesByCustomer);
    this.AllSalesPerHour.push(SalesPerHour);
    this.DailyLocationTotal += SalesPerHour;
  }
};

new Stores('Seattle', 65, 23, 6.3);
new Stores('Tokyo', 24, 3, 1.2);
new Stores('Dubai', 38, 11, 3.7);
new Stores('Paris', 38, 20, 2.3);
new Stores('Lima', 16, 2, 4.6);

function tableheader(){
  let tableRow = document.createElement('tr');
  table.appendChild(tableRow);
  let tableData1 = document.createElement('td');
  tableRow.appendChild(tableData1);
  tableData1.textContent = ' ';

  for(let i = 0; i < hours.length; i++){
    let tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent = hours[i];
  }

  let tableData2 = document.createElement('td');
  tableRow.appendChild(tableData2);
  tableData2.textContent = 'Daily Location Total';
}
tableheader();

Stores.prototype.content = function(){
  let tableRow = document.createElement('tr');
  table.appendChild(tableRow);
  let td = document.createElement('td');
  tableRow.appendChild(td);
  td.textContent = this.storeName;

  for(let i = 0; i < hours.length; i++){
    let td = document.createElement('td');
    tableRow.appendChild(td);
    td.textContent = this.AllSalesPerHour[i];
  }

  let tableData = document.createElement('td');
  tableRow.appendChild(tableData);
  tableData.textContent = this.DailyLocationTotal;
};

for(let i = 0; i < branches.length; i++){
  branches[i].content();
}

function tableFooter(){
  let tableRow = document.createElement('tr');
  table.appendChild(tableRow);
  let totalCell = document.createElement('td');
  tableRow.appendChild(totalCell);
  totalCell.textContent = 'Totals';

  let hourlyTotal;
  let totalOfTotal = 0;
  for (let i = 0; i < hours.length; i++){
    hourlyTotal = 0;
    for (let j = 0; j < branches.length; j++){
      hourlyTotal += branches[j].AllSalesPerHour[i];
    }
    let hourlyTd = document.createElement('td');
    tableRow.appendChild(hourlyTd);
    hourlyTd.textContent = hourlyTotal;
    totalOfTotal += hourlyTotal;
  }

  let finalTotal = document.createElement('td');
  tableRow.appendChild(finalTotal);
  finalTotal.textContent = totalOfTotal;
}
tableFooter();
