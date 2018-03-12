export function Entry(title, body, timestamp) {
  this.title = title;
  this.body = body;
  this.timestamp = timestamp;
}

Entry.prototype.word_count = function() {
  var count = this.body.split(" ");
  return count.length;
};

Entry.prototype.vowel_count = function() {
  var count = this.body.match(/[aeiouAEIOU]/gi);
  return count.length;
};

Entry.prototype.consonant_count = function() {
  var count = this.body.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/gi);
  return count.length;
};
