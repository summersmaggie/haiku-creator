import { Haiku } from  '../src/haiku.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#haiku-form').submit(function(event) {
    event.preventDefault();
    let lineOne = $("input#lineone").val();
    let lineTwo = $("input#linetwo").val();
    let lineThree = $("input#linethree").val();

    let newHaiku = new Haiku(lineOne, lineTwo, lineThree);

    var lineOneSyllables = newHaiku.vowelCounter(lineOne);
    // var lineTwoSyllables = newHaiku.lineTwo.vowelCounter();
    // var lineThreeSyllables = newHaiku.lineThree.vowelCounter();

    $("#show-output").show();      $(".lineone").text(newHaiku.lineOne);
    $(".line-one-syllables").text(lineOneSyllables);
  });
});
