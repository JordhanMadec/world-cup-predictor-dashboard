var activeTab = 'Prediction';

$('.tab').click(function () {
    if ($(this).html() !== activeTab) {
        activeTab = $(this).html();
        $('.tab').removeClass('selected');
        $(this).addClass('selected');
        $('.tab-section').toggle();
    }
});