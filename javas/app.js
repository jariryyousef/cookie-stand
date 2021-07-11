'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let TotalCookies=0;
let totalavgarr=0;
let location1 = {

    

    name: "Seattle",
    min: 23,
    max: 65,
    avg: 6.3,
    
    
    randomCustomers: [],
    avgCookiesperHour: [],


    getrandomCustomers: function () {

        for (let i = 0; i < hours.length; i++) {

            function random(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            this.randomCustomers.push(random(this.min, this.max));
            this.avgCookiesperHour.push(Math.round(this.randomCustomers[i] * this.avg));

           


        }
        

    },

    render: function () {

        let elemantdiv = document.getElementById('yousef');
        let txtelements = document.createElement('p');
        elemantdiv.appendChild(txtelements);
        txtelements.textContent = this.name;
        let listelements = document.createElement('ul');
        elemantdiv.appendChild(listelements);
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');

            this.avgCookiesperHour[i] = this.getrandomCustomers();

            // let totalavgarr = Math.round(this.avg * this.avgCookiesperHour[i]);
            
            listelements.appendChild(liElement);
            
           
            liElement.textContent = `${hours[i]}` + this.randomCustomers[i] + ' Cookies';

            // this.avgCookiesperHour.push(Math.round(this.randomCustomers[i] * this.avg));

            TotalCookies += totalavgarr;
            if (i === 14) {
                let liElement = document.createElement('li');

                listelements.appendChild(liElement);

                liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
                
                }

     }

    },
 };

location1.getrandomCustomers();
location1.render();




let location2 = {

    

    name: "tokyo",
    min: 3,
    max: 24,
    avg: 1.2,
    
    
    randomCustomers: [],
    avgCookiesperHour: [],


    getrandomCustomers: function () {

        for (let i = 0; i < hours.length; i++) {

            function random(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            this.randomCustomers.push(random(this.min, this.max));
            this.avgCookiesperHour.push(Math.round(this.randomCustomers[i] * this.avg));

           


        }
        

    },

    render: function () {

        let elemantdiv = document.getElementById('yousef');
        let txtelements = document.createElement('p');
        elemantdiv.appendChild(txtelements);
        txtelements.textContent = this.name;
        let listelements = document.createElement('ul');
        elemantdiv.appendChild(listelements);
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');

            this.avgCookiesperHour[i] = this.getrandomCustomers();

            // let totalavgarr = Math.round(this.avg * this.avgCookiesperHour[i]);
            
            listelements.appendChild(liElement);
            
           
            liElement.textContent = `${hours[i]}` + this.randomCustomers[i] + ' Cookies';

            // this.avgCookiesperHour.push(Math.round(this.randomCustomers[i] * this.avg));

            TotalCookies += totalavgarr;
            if (i === 14) {
                let liElement = document.createElement('li');

                listelements.appendChild(liElement);

                liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
                
                }

     }

    },
 };

location2.getrandomCustomers();
location2.render();





let location3 = {

    

    name: "dubai",
    min: 11,
    max: 38,
    avg: 2.3,
    
    
    randomCustomers: [],
    avgCookiesperHour: [],


    getrandomCustomers: function () {

        for (let i = 0; i < hours.length; i++) {

            function random(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            this.randomCustomers.push(random(this.min, this.max));
            this.avgCookiesperHour.push(Math.round(this.randomCustomers[i] * this.avg));

           


        }
        

    },

    render: function () {

        let elemantdiv = document.getElementById('yousef');
        let txtelements = document.createElement('p');
        elemantdiv.appendChild(txtelements);
        txtelements.textContent = this.name;
        let listelements = document.createElement('ul');
        elemantdiv.appendChild(listelements);
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');

            this.avgCookiesperHour[i] = this.getrandomCustomers();

            // let totalavgarr = Math.round(this.avg * this.avgCookiesperHour[i]);
            
            listelements.appendChild(liElement);
            
           
            liElement.textContent = `${hours[i]}` + this.randomCustomers[i] + ' Cookies';

            // this.avgCookiesperHour.push(Math.round(this.randomCustomers[i] * this.avg));

            TotalCookies += totalavgarr;
            if (i === 14) {
                let liElement = document.createElement('li');

                listelements.appendChild(liElement);

                liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
                
                }

     }

    },
 };

location3.getrandomCustomers();
location3.render();



let location4 = {

    

    name: "paris",
    min: 20,
    max: 38,
    avg: 2.3,
    
    
    randomCustomers: [],
    avgCookiesperHour: [],


    getrandomCustomers: function () {

        for (let i = 0; i < hours.length; i++) {

            function random(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            this.randomCustomers.push(random(this.min, this.max));
            this.avgCookiesperHour.push(Math.round(this.randomCustomers[i] * this.avg));

           


        }
        

    },

    render: function () {

        let elemantdiv = document.getElementById('yousef');
        let txtelements = document.createElement('p');
        elemantdiv.appendChild(txtelements);
        txtelements.textContent = this.name;
        let listelements = document.createElement('ul');
        elemantdiv.appendChild(listelements);
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');

            this.avgCookiesperHour[i] = this.getrandomCustomers();

            // let totalavgarr = Math.round(this.avg * this.avgCookiesperHour[i]);
            
            listelements.appendChild(liElement);
            
           
            liElement.textContent = `${hours[i]}` + this.randomCustomers[i] + ' Cookies';

            // this.avgCookiesperHour.push(Math.round(this.randomCustomers[i] * this.avg));

            TotalCookies += totalavgarr;
            if (i === 14) {
                let liElement = document.createElement('li');

                listelements.appendChild(liElement);

                liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
                
                }

     }

    },
 };

location4.getrandomCustomers();
location4.render();





let location5 = {

    

    name: "lima",
    min: 2,
    max: 16,
    avg: 4.6,
    
    
    randomCustomers: [],
    avgCookiesperHour: [],


    getrandomCustomers: function () {

        for (let i = 0; i < hours.length; i++) {

            function random(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            this.randomCustomers.push(random(this.min, this.max));
            this.avgCookiesperHour.push(Math.round(this.randomCustomers[i] * this.avg));

           


        }
        

    },

    render: function () {

        let elemantdiv = document.getElementById('yousef');
        let txtelements = document.createElement('p');
        elemantdiv.appendChild(txtelements);
        txtelements.textContent = this.name;
        let listelements = document.createElement('ul');
        elemantdiv.appendChild(listelements);
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');

            this.avgCookiesperHour[i] = this.getrandomCustomers();

            // let totalavgarr = Math.round(this.avg * this.avgCookiesperHour[i]);
            
            listelements.appendChild(liElement);
            
           
            liElement.textContent = `${hours[i]}` + this.randomCustomers[i] + ' Cookies';

            // this.avgCookiesperHour.push(Math.round(this.randomCustomers[i] * this.avg));

            TotalCookies += totalavgarr;
            if (i === 14) {
                let liElement = document.createElement('li');

                listelements.appendChild(liElement);

                liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
                
                }

     }

    },
 };

location5.getrandomCustomers();
location5.render();

// let time = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ',];
// let TotalCookies = 0;
// function random(mincust, maxcust) {
//     return Math.floor(Math.random() * (maxcust - mincust + 1)) + mincust;
// }

// let Seattle = {
//     name: 'Seattle',
//     mincust: 23,
//     maxcust: 65,
//     cust: 0,
//     avgAllcookies: 6.3,

//     seattleCookiesArr: [0],

//     getCust: function () {
//         return this.cust = random(23, 65);
//         // console .log(this.cust);
//     },
//     // console.log(Seattle.getCust());
//     render: function () {
        
//         let elemantdiv = document.getElementById('storesid');
//         let txtelements = document.createElement('p');
//         elemantdiv.appendChild(txtelements);
//         txtelements.textContent = this.name;
//         let listelements = document.createElement('ul');
//         elemantdiv.appendChild(listelements);
//         for (let i = 0; i < time.length; i++) {
//             let liElement = document.createElement('li');
//             this.seattleCookiesArr[i] = this.getCust();
//             let totalavgarr = Math.round(this.avgAllcookies * this.seattleCookiesArr[i]);
//             listelements.appendChild(liElement);
//             liElement.textContent = ${time[i]} + totalavgarr + ' Cookies';
//             TotalCookies += totalavgarr;
//             if (i === 14) {
//                 let liElement = document.createElement('li');
//                 listelements.appendChild(liElement);
//                 liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
//             }
//         }
//     },
// };
// // console.log(Seattle.seattleCookiesArr);
// Seattle.render();