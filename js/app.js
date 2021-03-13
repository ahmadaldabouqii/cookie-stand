'use strict';
let total = 0;

let table = document.getElementById('table');
let avg = document.createElement('td');

function Data(min, max) {
    this.min = min;
    this.max = max;
}

function hourlyCustomers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let seattleData = {
    seattle: [],
    hours: function () {

        for (let i = 6; i < 20; i++) {
            if (i < 12) {
                total += hourlyCustomers(23, 65);
                // this.seattle.push(i + 'am: ' + hourlyCustomers(23, 65) + ' cookies');
            } else {
                total += hourlyCustomers(23, 65);
                // this.seattle.push(i + 'pm: ' + hourlyCustomers(23, 65) + ' cookies');
            }
        }
    },

    avgCookiesSales: function () {
        return Math.ceil(total / 365);
    }
}
seattleData.hours();

let sea = new Data(23, 65);

let hoursWork = [];
let Country = ['seattle', 'tokyo', 'Dubai', 'paris', 'Lima'];


for (let i = 5; i < 21; i++) {
    if (i === 5) {
        hoursWork.push("Country");
    }
    else if (i < 12) {
        hoursWork.push(i + 'am');

    }
    else if (i === 20) {
        hoursWork.push("Daily Loction Toatal");
    }
    else {
        hoursWork.push(i + 'pm');
    }
}



let tr = document.createElement('tr');

(function addRow() {
    for (let i = 0; i < hoursWork.length; i++) {
        let td = document.createElement('td');
        td.innerHTML = hoursWork[i];
        tr.appendChild(td);
        table.appendChild(tr);
    }

    for (let i = 0; i < Country.length; i++) {
        let tr2 = document.createElement('tr');
        let td2 = document.createElement('td');
        td2.innerHTML = Country[i];
        tr2.appendChild(td2);
        table.appendChild(tr2);

        for (let z = 0; z < 15; z++) {
            let td2 = document.createElement('td');
            td2.innerHTML = hourlyCustomers(23, 65);
            tr2.appendChild(td2);
            table.appendChild(tr2);

            if (z === 14) {
                td2.innerHTML = total;
                tr2.appendChild(td2);
                table.appendChild(tr2);
            }
        }
    }
})();
let tr4 = document.createElement('tr');

for (let i = 0; i < hoursWork.length; i++) {
    let td4 = document.createElement('td');
    td4.innerHTML = seattleData.avgCookiesSales();
    tr4.appendChild(td4);
    table.appendChild(tr4);
    if (i === 0) {
        td4.innerHTML = "Total Daily";
        tr4.appendChild(td4);
        table.appendChild(tr4);
    }
}

let form = document.getElementById('form');
let submit_btn = document.getElementById('submit_btn');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let st_location = e.target.StoreLocation.value;
    let min = e.target.min.value;
    let max = e.target.max.value;
    let avg = e.target.avg.value;

    if ((min || max || avg) === "" || (min || max || avg) === null) {
        alert('Please Enter Correct!');
    } else {
        Country.push(st_location);
        let td = document.createElement('td');
        td.innerHTML = Country[5];
        table.appendChild(td);
        hourlyCustomers(min, max);
    }
})


function setColor() {
    document.body.style.backgroundColor = '#ffff94';
}


avg.innerHTML = 'Total: ' + total + ' cookies';

// table.appendChild(td);

// // ===========================================================================================================

// total = 0;

// let tokyo = document.createElement('h1');
// tokyo.innerHTML = 'tokyo';
// main.appendChild(tokyo);

// let tokyo_ul = document.createElement('ul');
// let tokyo_avg = document.createElement('li');


// let tokyoData = {
//     tokyo: [],
//     hours: function () {

//         for (let i = 6; i < 20; i++) {
//             if (i < 12) {
//                 total += hourlyCustomers(3, 24);
//                 this.tokyo.push(i + 'am: ' + hourlyCustomers(3, 24) + ' cookies');
//             } else {
//                 total += hourlyCustomers(3, 24);
//                 this.tokyo.push(i + 'pm: ' + hourlyCustomers(3, 24) + ' cookies');
//             }
//         }
//     },

//     avgCookiesSales: function () {
//         return 'Avg Cookie / Sale: ' + total / 365;
//     }
// }

// tokyoData.hours();

// for (let i = 0; i < tokyoData.tokyo.length; i++) {
//     let li = document.createElement('li');
//     li.innerHTML = tokyoData.tokyo[i];
//     tokyo_ul.appendChild(li);
// }

// tokyo_avg.innerHTML = 'Total: ' + total + ' cookies';
// tokyo_ul.appendChild(tokyo_avg);
// main.appendChild(tokyo_ul);

// // ===========================================================================================================

// total = 0;

// let Dubai = document.createElement('h1');
// Dubai.innerHTML = 'Dubai';
// main.appendChild(Dubai);

// let Dubai_ul = document.createElement('ul');
// let Dubai_avg = document.createElement('li');

// let DubaiData = {
//     Dubai: [],
//     hours: function () {

//         for (let i = 6; i < 20; i++) {
//             if (i < 12) {
//                 total += hourlyCustomers(11, 38);
//                 this.Dubai.push(i + 'am: ' + hourlyCustomers(11, 38) + ' cookies');
//             } else {
//                 total += hourlyCustomers(11, 38);
//                 this.Dubai.push(i + 'pm: ' + hourlyCustomers(11, 38) + ' cookies');
//             }
//         }
//     },

//     avgCookiesSales: function () {
//         return 'Avg Cookie / Sale: ' + total / 365;
//     }
// }

// DubaiData.hours();

// for (let i = 0; i < DubaiData.Dubai.length; i++) {
//     let li = document.createElement('li');
//     li.innerHTML = DubaiData.Dubai[i];
//     Dubai_ul.appendChild(li);
// }

// Dubai_avg.innerHTML = 'Total: ' + total + ' cookies';
// Dubai_ul.appendChild(Dubai_avg);
// main.appendChild(Dubai_ul);

// // ===========================================================================================================

// total = 0;

// let Paris = document.createElement('h1');
// Paris.innerHTML = 'Paris';
// main.appendChild(Paris);

// let Paris_ul = document.createElement('ul');
// let Paris_avg = document.createElement('li');

// let ParisData = {
//     Paris: [],
//     hours: function () {

//         for (let i = 6; i < 20; i++) {
//             if (i < 12) {
//                 total += hourlyCustomers(20, 38);
//                 this.Paris.push(i + 'am: ' + hourlyCustomers(20, 38) + ' cookies');
//             } else {
//                 total += hourlyCustomers(20, 38);
//                 this.Paris.push(i + 'pm: ' + hourlyCustomers(20, 38) + ' cookies');
//             }
//         }
//     },

//     avgCookiesSales: function () {
//         return 'Avg Cookie / Sale: ' + total / 365;
//     }
// }

// ParisData.hours();

// for (let i = 0; i < ParisData.Paris.length; i++) {
//     let li = document.createElement('li');
//     li.innerHTML = ParisData.Paris[i];
//     Paris_ul.appendChild(li);
// }

// Paris_avg.innerHTML = 'Total: ' + total + ' cookies';
// Paris_ul.appendChild(Paris_avg);
// main.appendChild(Paris_ul);

// // ===========================================================================================================

// total = 0;

// let Lima = document.createElement('h1');
// Lima.innerHTML = 'Lima';
// main.appendChild(Lima);

// let Lima_ul = document.createElement('ul');
// let Lima_avg = document.createElement('li');

// let LimaData = {
//     Lima: [],
//     hours: function () {

//         for (let i = 6; i < 20; i++) {
//             if (i < 12) {
//                 total += hourlyCustomers(2, 16);
//                 this.Lima.push(i + 'am: ' + hourlyCustomers(2, 16) + ' cookies');
//             } else {
//                 total += hourlyCustomers(2, 16);
//                 this.Lima.push(i + 'pm: ' + hourlyCustomers(2, 16) + ' cookies');
//             }
//         }
//     },

//     avgCookiesSales: function () {
//         return 'Avg Cookie / Sale: ' + total / 365;
//     }
// }

// LimaData.hours();

// for (let i = 0; i < LimaData.Lima.length; i++) {
//     let li = document.createElement('li');
//     li.innerHTML = LimaData.Lima[i];
//     Lima_ul.appendChild(li);
// }

// Lima_avg.innerHTML = 'Total: ' + total + ' cookies';
// Lima_ul.appendChild(Lima_avg);
// main.appendChild(Lima_ul);

// // ===========================================================================================================