$(document).ready(function() {

    /*************** START FONCTIONS ***************/
    function verif() {
        if($('#nom' && '#prenom' && '#age' && '#mail').val() != "") {
            $('#btn').prop('disabled', false);
        } else {
            $('#btn').prop('disabled', true);
        };
    };
    /*************** END FONCTIONS ***************/

    $('#nom').keyup(function() {
        var valeurNom = $(this).val();
        $('#nameFromJquery').text(valeurNom); 
        verif();
    });
    $('#prenom').keyup(function(){
        var valeurPrenom = $(this).val();
        $('#firstnameFromJquery').text(valeurPrenom);
        verif();
    });
    $('#age').keyup(function(){
        var valeurAge = $(this).val();
        $('#ageFromJquery').text(valeurAge);
        if($('#age').val() < 19) {
            $('#error').addClass('true');
        } else {
            $('#error').removeClass('true');
        };
        verif();
    });
    $('#mail').keyup(function(){
        var valeurMail = $(this).val();
        $('#mailFromJquery').text(valeurMail);
        verif();
    });
});