$('.tab').click(function () {
    $('.tab').removeClass('selected');
    $(this).addClass('selected');
    $('.tab-section').toggle();
});