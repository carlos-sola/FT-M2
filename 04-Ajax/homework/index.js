$('#boton').click(function(){
$.get('http://localhost:5000/amigos', function(responder){
    $('#lista').empty() ;
    responder.forEach((friend) => {
        $('#lista').append(`<li>${friend.name}</li>`)
    });
})
})

$('#search').click(function(){
    $.get(
        `http://localhost:5000/amigos/${$('#input').val()}`,
    function (responder) {
        $('#amigo').empty()  
        $('#amigo').append(`<h4>${responder.name}</h4>`)
    }
    )
})

$('#delete').click(function () {
    $.ajax ({
        method: 'DELETE' ,
        url: `http://localhost:5000/amigos/${$('#inputDelete').val()}`,  
    }).done(function () {
        $('#success').empty()
        $('#success').append(`<p>Amigo eliminado</p>`)
    })
})