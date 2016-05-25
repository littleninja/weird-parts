var y = y$('bloop', 'en');

var $lang = $('#language');
var $word = $('#word');

$('#say').click(function() {

    var yipper = y$($word.val(), $lang.val());

    yipper.HTMLExclaim('#exclamation');

});