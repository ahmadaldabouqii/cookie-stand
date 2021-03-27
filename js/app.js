'use strict';

let total = 0;

let seattle = document.createElement('h1');
seattle.innerHTML = 'seattle';

let main = document.getElementById('demo');
let unOrderedList = document.createElement('ul');
let avg = document.createElement('li');

let seattleData = {
  seattle: [],
  hours: function () {

    for (let i = 6; i < 20; i++) {
      if (i < 12) {
        total += hourlyCustomers(23, 65);
        this.seattle.push(i + 'am: ' + hourlyCustomers(23, 65) + ' cookies');
      } else {
        total += hourlyCustomers(23, 65);
        this.seattle.push(i + 'pm: ' + hourlyCustomers(23, 65) + ' cookies');
      }
    }
  },

  avgCookiesSales: function () {
    return 'Avg Cookie / Sale: ' + total / 365;
  }
};

seattleData.hours();
function hourlyCustomers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 0; i < seattleData.seattle.length; i++) {
  let li = document.createElement('li');
  li.innerHTML = seattleData.seattle[i];
  unOrderedList.appendChild(li);
}

main.appendChild(seattle);
avg.innerHTML = 'Total: ' + total + ' cookies';
unOrderedList.appendChild(avg);
main.appendChild(unOrderedList);

// ===========================================================================================================

total = 0;

let tokyo = document.createElement('h1');
tokyo.innerHTML = 'tokyo';
main.appendChild(tokyo);

let tokyo_ul = document.createElement('ul');
let tokyo_avg = document.createElement('li');


let tokyoData = {
  tokyo: [],
  hours: function () {

    for (let i = 6; i < 20; i++) {
      if (i < 12) {
        total += hourlyCustomers(3, 24);
        this.tokyo.push(i + 'am: ' + hourlyCustomers(3, 24) + ' cookies');
      } else {
        total += hourlyCustomers(3, 24);
        this.tokyo.push(i + 'pm: ' + hourlyCustomers(3, 24) + ' cookies');
      }
    }
  },

  avgCookiesSales: function () {
    return 'Avg Cookie / Sale: ' + total / 365;
  }
};

tokyoData.hours();

for (let i = 0; i < tokyoData.tokyo.length; i++) {
  let li = document.createElement('li');
  li.innerHTML = tokyoData.tokyo[i];
  tokyo_ul.appendChild(li);
}

tokyo_avg.innerHTML = 'Total: ' + total + ' cookies';
tokyo_ul.appendChild(tokyo_avg);
main.appendChild(tokyo_ul);

// ===========================================================================================================

total = 0;

let Dubai = document.createElement('h1');
Dubai.innerHTML = 'Dubai';
main.appendChild(Dubai);

let Dubai_ul = document.createElement('ul');
let Dubai_avg = document.createElement('li');

let DubaiData = {
  Dubai: [],
  hours: function () {

    for (let i = 6; i < 20; i++) {
      if (i < 12) {
        total += hourlyCustomers(11, 38);
        this.Dubai.push(i + 'am: ' + hourlyCustomers(11, 38) + ' cookies');
      } else {
        total += hourlyCustomers(11, 38);
        this.Dubai.push(i + 'pm: ' + hourlyCustomers(11, 38) + ' cookies');
      }
    }
  },

  avgCookiesSales: function () {
    return 'Avg Cookie / Sale: ' + total / 365;
  }
};

DubaiData.hours();

for (let i = 0; i < DubaiData.Dubai.length; i++) {
  let li = document.createElement('li');
  li.innerHTML = DubaiData.Dubai[i];
  Dubai_ul.appendChild(li);
}

Dubai_avg.innerHTML = 'Total: ' + total + ' cookies';
Dubai_ul.appendChild(Dubai_avg);
main.appendChild(Dubai_ul);

// ===========================================================================================================

total = 0;

let Paris = document.createElement('h1');
Paris.innerHTML = 'Paris';
main.appendChild(Paris);

let Paris_ul = document.createElement('ul');
let Paris_avg = document.createElement('li');

let ParisData = {
  Paris: [],
  hours: function () {

    for (let i = 6; i < 20; i++) {
      if (i < 12) {
        total += hourlyCustomers(20, 38);
        this.Paris.push(i + 'am: ' + hourlyCustomers(20, 38) + ' cookies');
      } else {
        total += hourlyCustomers(20, 38);
        this.Paris.push(i + 'pm: ' + hourlyCustomers(20, 38) + ' cookies');
      }
    }
  },

  avgCookiesSales: function () {
    return 'Avg Cookie / Sale: ' + total / 365;
  }
};

ParisData.hours();

for (let i = 0; i < ParisData.Paris.length; i++) {
  let li = document.createElement('li');
  li.innerHTML = ParisData.Paris[i];
  Paris_ul.appendChild(li);
}

Paris_avg.innerHTML = 'Total: ' + total + ' cookies';
Paris_ul.appendChild(Paris_avg);
main.appendChild(Paris_ul);

// ===========================================================================================================

total = 0;

let Lima = document.createElement('h1');
Lima.innerHTML = 'Lima';
main.appendChild(Lima);

let Lima_ul = document.createElement('ul');
let Lima_avg = document.createElement('li');

let LimaData = {
  Lima: [],
  hours: function () {

    for (let i = 6; i < 20; i++) {
      if (i < 12) {
        total += hourlyCustomers(2, 16);
        this.Lima.push(i + 'am: ' + hourlyCustomers(2, 16) + ' cookies');
      } else {
        total += hourlyCustomers(2, 16);
        this.Lima.push(i + 'pm: ' + hourlyCustomers(2, 16) + ' cookies');
      }
    }
  },

  avgCookiesSales: function () {
    return 'Avg Cookie / Sale: ' + total / 365;
  }
};

LimaData.hours();

for (let i = 0; i < LimaData.Lima.length; i++) {
  let li = document.createElement('li');
  li.innerHTML = LimaData.Lima[i];
  Lima_ul.appendChild(li);
}

Lima_avg.innerHTML = 'Total: ' + total + ' cookies';
Lima_ul.appendChild(Lima_avg);
main.appendChild(Lima_ul);

// ===========================================================================================================

