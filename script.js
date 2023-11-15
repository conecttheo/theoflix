var listaFilmes = ['https://images.justwatch.com/poster/88798607/s718/de-volta-para-o-futuro.jpg', 
'https://img.elo7.com.br/product/zoom/264E8DC/big-poster-filme-de-volta-para-o-futuro-2-lo002-tam-90x60-cm-de-volta-para-o-futuro-2.jpg',
'https://upload.wikimedia.org/wikipedia/pt/8/8c/BackFuture3Poster.jpg', 
'https://img.elo7.com.br/product/original/26793BD/big-poster-x-men-dias-de-um-futuro-esquecido-lo01-90x60-cm-geek.jpg',
'https://cinepop.com.br/wp-content/uploads/2018/07/f%C3%AAnix-negra1.jpg' , 
'https://www.themoviedb.org/t/p/original/rUQwrXDckrdbyu2IaaAeSp02j4W.jpg' ,
'https://img.elo7.com.br/product/original/2C25D05/big-poster-filme-star-wars-o-despertar-da-forca-tam-90x60-cm-poster-star-wars.jpg' , 
'https://cdn.ome.lt/legacy/images/galerias/Guardioes-da-Galaxia/Guardioes-da-Galaxia-27Jun2014-Cartaz.jpg' , 
'https://img.elo7.com.br/product/original/267708A/big-poster-filme-guardioes-da-galaxia-2-lo02-tam-90x60-cm-guardioes-da-galaxia.jpg' , 
'https://m.media-amazon.com/images/I/71Yuz8foP7L._AC_UF894,1000_QL80_.jpg' , 
'https://br.web.img3.acsta.net/medias/nmedia/18/87/24/97/19873543.jpg' ,
'https://br.web.img2.acsta.net/medias/nmedia/18/71/72/07/19770156.jpg'];

var nomeFilmes = ['De volta para o futuro', 'De volta para o futuro ||', 'De volta para o futuro |||', 'X-men: Dias de um futuro esquecido',
'X-men: Fênix Negra', 'Logan', 'Star Wars - O Despertar da força', 'Guardiões da Galáxia Vol.1', 'Guardiões da Galáxia Vol.2','Guardiões da Galáxia Vol.3',
'Tarzan', 'Carros 2'];

document.write('<div class="container_todosFilmes">')

var i = 0;
while(i < listaFilmes.length){
    if((listaFilmes[i].endsWith('jpg')) || (listaFilmes[i].endsWith('jpeg'))){
        document.write('<div class="container_filme">')
        document.write('<img src='+ listaFilmes[i] +'>');
        document.write('<p>'+ nomeFilmes[i] +'</p>');
        document.write('</div>')
    }else{
        document.write('<p> A imagem ' + i + ' não foi lida pois não é um arquivo do tipo jpeg ou jpg </p>');
    }
    i++;
}
document.write('</div>');



