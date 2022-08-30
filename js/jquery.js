jQuery(function() {

    /*************** START FONCTIONS ***************/
    function verif() {
        if($('#nom' && '#prenom' && '#age' && '#mail').val() != "") {
            $('#btn').prop('disabled', false);
        } else {
            $('#btn').prop('disabled', true);
        };
    };
    /*************** END FONCTIONS ***************/

    $('#nom').on('keyup', function() {
        var valeurNom = $(this).val();
        $('#nameFromJquery').text(valeurNom); 
        verif();
    });
    $('#prenom').on('keyup', function(){
        var valeurPrenom = $(this).val();
        $('#firstnameFromJquery').text(valeurPrenom);
        verif();
    });
    $('#age').on('keyup', function(){
        var valeurAge = $(this).val();
        $('#ageFromJquery').text(valeurAge);
        if($('#age').val() < 18) {
            $('#error').addClass('true');
        } else {
            $('#error').removeClass('true');
        };
        verif();
    });
    $('#mail').on('keyup', function(){
        var valeurMail = $(this).val();
        $('#mailFromJquery').text(valeurMail);
        verif();
    });
});