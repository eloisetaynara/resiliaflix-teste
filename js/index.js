$.ajax({
    url: 'http://www.omdbapi.com/?i=tt3896198&apikey=1c22c5f3&t=star wars',

    success: function(req){
        console.log(req)
        $('#principal').append(`<img src="${req.Poster}" alt='poster' id='poster'>`)
        $('#principal').append(`<P>${req.Plot}</p>`)
    }
})

$.ajax({
    url: 'http://viacep.com.br/ws/24240670/json/',

    success: function(req){
        console.log(req)
        $('#endereco').append(`<p id='logradouro'>${req.logradouro}`)
    }
})