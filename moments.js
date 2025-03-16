
import moment from 'moment';
console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); // March 12th 2025, 3:48:35 pm
moment().format('dddd');                    // Wednesday
moment().format("MMM Do YY");               // Mar 12th 25
moment().format('YYYY [escaped] YYYY');     // 2025 escaped 2025
moment().format();     