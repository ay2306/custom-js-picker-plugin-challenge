const $ = require('jquery');
var current_element = 0;

$(document).ready(() => {
    $('#getNewQuote').on('click', (event) => {
        event.preventDefault();
        addQuotes();
    });
})

function addQuotes() {
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
    $.getJSON(url, (data) => {
        if (current_element % 3 == 0) {
            var col = parseInt(current_element / 3);
            $('body').append(`<center><div class = 'row' id = _id_${col}></div></center>`);
        }
        $('#_id_' + parseInt(current_element / 3).toString()).append(`<div class="outer-box col-md-4"><div class = 'quote-box'>${data.quoteText}</div></div>`);
        current_element++;
    }, 'jsonp');
}