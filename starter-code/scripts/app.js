
(function loadInitialContent(){
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=8JIWan2gomImYIS6z7DKsEcRbV7UN6u3&limit=25&rating=G', {
    })

    .then(function(response) {
        return response.json()
    })
    .then(onSuccess)
    .catch(onError);
    
    function onSuccess(response) {
       let e = document.querySelector(".gif-gallery");

    for (let i=0; i < response.data.length; i++){
       let elem = document.createElement("img");
       elem.setAttribute("src", response.data[i].images.fixed_height.url);

       e.appendChild(elem);
       }
    }  
    function onError(error) {
      alert("Sorry, there was a problem!");
      console.dir(error);
    }
})();


window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector(".btn-primary").addEventListener('click', function(e){
    e.preventDefault();
    let baseUrl = "https://api.giphy.com/v1/gifs";
    let search = document.querySelector(".gif-input").value;
    let key = "8JIWan2gomImYIS6z7DKsEcRbV7UN6u3";
    let responses = 25;
    
    let fullUrl = `${baseUrl}/search?api_key=${key}&q=${search}&limit=${responses}&offset=0&rating=G&lang=en`;
    
    fetch(fullUrl, {
    })

    .then(function(response) {
        return response.json()
    })
    .then(onSuccess)
    .catch(onError);
    
    function onSuccess(response) {
       let e = document.querySelector(".gif-gallery");

      //  clear the gif gallery
       e.innerHTML = "";

    for (let i=0; i < response.data.length; i++){
       let elem = document.createElement("img");
       elem.setAttribute("src", response.data[i].images.fixed_height.url);

       e.appendChild(elem);
       }
    }  
    function onError(error) {
      alert("Sorry, there was a problem!");
      console.dir(error);
    }
  });
});
