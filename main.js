$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    })
})

$('#reset-button').click(function () {
    $('form').slideUp();
})

$('form').on('submit', function (e) {
    e.preventDefault();

    const newTask = $('#task').val();
    const newItem = $('<li class="tarefa"></li>');
    $(`<span>${newTask}</span>`).appendTo(newItem);
    $(newItem).appendTo('ul');
    $('#task').val('')

})

$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
});

