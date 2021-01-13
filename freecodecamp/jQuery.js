//When you disabled a button, it will become grayed-out and can no longer ve clicked.
//jQuery has a function called .prop() that allows you to adjust thr properties of elements.
$('button').prop('disabled', true);
//jQurey uses CSS Selectors to target elements. The targer:nth-child(n) CSS Selector allows you to select all the nth elements with the target class or element type.
$('.target:nth-child(3)').addClass('animated bounce');
$('body').addClass(animated fadeOut);
