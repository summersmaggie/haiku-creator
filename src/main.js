import { Entry } from './entry';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var time = Date.now().toString();
    var timestamp = Date(time);
    var entry = new Entry(title, body, timestamp);

    $('#solution').append("<div class='well'><p>" + entry.timestamp + "</p><h2>" + entry.title + "</h2>" +  "<p> " + entry.body + "</p>" + "<li>Word Count: " + entry.word_count() + "</li><li>Vowel Count: " + entry.vowel_count() + "</li><li>Consonant Count: " + entry.consonant_count() + "</li>");
  });
});
