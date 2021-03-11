$(document).ready(function () {
    $('.backupbutton').on('click', function () {
        $('.dropdown-contentbackup').css('display', 'block');
    });

    $('.doctorbutton').on('click', function () {
        $('.dropdown-contentdoctor').css('display', 'block');
    });

    $('.reportbutton').on('click', function () {
        $('.dropdown-contentreport').css('display', 'block');
    });


});