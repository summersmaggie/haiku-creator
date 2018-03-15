import { Haiku } from '../src/haiku.js';
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
    var lineTwoSyllables = newHaiku.vowelCounter(lineTwo);
    var lineThreeSyllables = newHaiku.vowelCounter(lineThree);

    $("#show-output").show();      $(".lineone").text(newHaiku.lineOne);
    $(".linetwo").text(newHaiku.lineTwo);
    $(".linethree").text(newHaiku.lineThree);
    $(".line-one-syllables").text(lineOneSyllables);
    $(".line-two-syllables").text(lineTwoSyllables);
    $(".line-three-syllables").text(lineThreeSyllables);
  });
});
