var apiUrl = 'https://api.themoviedb.org/3/movie/'; //537061?api_key=27cce8dda57d4682e97a5c311d19c986
const image_url='https://image.tmdb.org/t/p/w500/';
var siteUrl = window.location.href;
var movieId = siteUrl.split('?')[1].split('=')[1];
console.log(movieId)


fetch(apiUrl + movieId + '?api_key=27cce8dda57d4682e97a5c311d19c986' + '&append_to_response=videos')
     .then((res) => res.json())
     .then((data)=> {
         console.log(data)
         var movieImgNode = document.createElement('IMG');
         movieImgNode.src = `${image_url + data['poster_path']}`;
         movieImgNode.classList.add('movie-details-img');
         document.getElementById('movie-picture').appendChild(movieImgNode);
         var title = document.createElement('H3');
         var text = document.createTextNode(data['title']);
         title.appendChild(text);
         document.querySelector('.title-container').appendChild(title);

         data['genres'].forEach(element => {
            var title = document.createElement('span');
            var text = document.createTextNode(element['name'] + ' ,');
            title.appendChild(text);
            document.querySelector('.genres-container').appendChild(title);
         });

         
            var videoElement = document.createElement('IFRAME');
            videoElement.height = 500;
            videoElement.width = 500;
            videoElement.src = "https://www.youtube.com/embed/" + data['videos']['results'][0]['key'];
            document.querySelector('.trailer-container').appendChild(videoElement);
         
         
     })
     .catch((error) =>{
         console.log('Error:',error);
     })