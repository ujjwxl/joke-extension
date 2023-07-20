
fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=single")
    .then((response)=> response.json())
    .then((data)=>{
        const joke = data.joke;
        document.getElementById("joke").innerHTML=joke;
    })