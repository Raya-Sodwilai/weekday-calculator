import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './weekday-calculator';
// import Calculator from 'weekday-calculator.js';

$(document).ready(function() {
  $('#calculator').submit(function(event) {
    event.preventDefault();
      const month = parseInt($('#month').val());
      const day = parseInt($('#day').val());
      const year = parseInt($('#year').val());
      const calculator = new Calculator(month, day, year);
      const response = calculator.calculate();

      console.log('response', response);
      
      $('#result').append(`<p>${response}</p>`);
  });
});
