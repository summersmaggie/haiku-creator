import { Entry } from './entry';
import './styles.css';

$(document).ready(function() {
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var time = Date.now().toString();
    var timestamp = Date(time);
    var entry = new Entry(title, body, timestamp);

    $('#solution').append("<h2>Title: " + entry.title + "</h2><p>Body: " + entry.body + "</p>" + "<li>Word Count: " + entry.word_count() + "</li><li>Vowel Count: " + entry.vowel_count() + "</li><li>Consonant Count: " + entry.consonant_count() + "</li><li>Time Stamp: " + entry.timestamp);
    console.log(entry.word_count);
  });
});
