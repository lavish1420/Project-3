// document.getElementById('search-btn').addEventListener('click', ()=>{
// 	const text = document.getElementById('search-text').value
// 	console.log(text)
// 	const url = `https://spotify23.p.rapidapi.com/search/?q=${text}&type=multi&offset=0&limit=10&numberOfTopResults=5`
// 	const xhr = new XMLHttpRequest()

// 	xhr.open('GET', url);
// 	xhr.setRequestHeader('X-RapidAPI-Key', '8dde0e84d7mshd42ae9f47685f67p102885jsn9fd7df7f2007');
// 	xhr.setRequestHeader('X-RapidAPI-Host', 'spotify23.p.rapidapi.com');

// 	xhr.onreadystatechange = () => {
// 		if (xhr.status == 200 && xhr.readyState == 4) {
// 			let response = JSON.parse(xhr.responseText)
// 			console.log(response);

// 			let output = ' '
// 			trackArtUrl = response.tracks.items[0].data.albumofTracks
// 			console.log(response.tracks.items[0].data.albumofTracks.coverArt.sources[2].uri);
// 			// trackArtUrl = response.tracks.items[0].data.coverArt
// 			//  console.log(response.tracks.items[0].data.uri);
// 			output += `
// 				<div>
// 					<img src="${trackArtUrl.sources[2].url}"  height="${trackArtUrl.sources[0].height}}" width="${albumArtUrl.sources[2].width}}" />
// 				</div>
// 			`
// 			document.getElementById('my-div').innerHTML = output

			
// 		}
// 	}
// 	xhr.send();
// })


    document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    const searchQuery = document.getElementById("searchQuery");
    const resultsDiv = document.getElementById("results");

    searchButton.addEventListener("click", () => {
        const query = searchQuery.value;
        searchAlbums(query);
    });

    function searchAlbums(query) {
        resultsDiv.innerHTML = "";

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                const response = JSON.parse(this.responseText);
                const albums = response.albums.items;

                albums.forEach(album => {
                    const albumData = album.data;

                    const albumDiv = document.createElement("div");
                    albumDiv.classList.add("album");

                    const coverArt = document.createElement("img");
                    coverArt.src = albumData.coverArt.sources[0].url;
                    coverArt.alt = albumData.name + " Cover Art";
                    albumDiv.appendChild(coverArt);

                    const albumInfoDiv = document.createElement("div");
                    albumInfoDiv.classList.add("album-info");

                    const albumName = document.createElement("h2");
                    albumName.textContent = albumData.name;
                    albumInfoDiv.appendChild(albumName);

                    const artists = document.createElement("p");
                    artists.textContent = "Artists: " + albumData.artists.items.map(artist => artist.profile.name).join(", ");
                    albumInfoDiv.appendChild(artists);

                    const releaseYear = document.createElement("p");
                    releaseYear.textContent = "Release Year: " + albumData.date.year;
                    albumInfoDiv.appendChild(releaseYear);

                    const albumDuration = document.createElement("p");
                    albumDuration.textContent = "Duration: " + getRandomDuration(); // Replace with actual duration if available
                    albumInfoDiv.appendChild(albumDuration);

                    const numberOfTracks = document.createElement("p");
                    numberOfTracks.textContent = "Number of Tracks: " + getRandomTrackCount(); // Replace with actual track count if available
                    albumInfoDiv.appendChild(numberOfTracks);

                    const albumDescription = document.createElement("p");
                    albumDescription.textContent = getArtistDescription(albumData.artists.items);
                    albumDescription.classList.add("album-description");
                    albumInfoDiv.appendChild(albumDescription);

                    let artistURI=albumData.uri;
                    let artistIDm = artistURI.split(":")[2];
                    let artistURLuser="https://open.spotify.com/album/"+ artistIDm;
                    console.log(albumData.uri);


                    

                    const albumLink = document.createElement("a");
                    albumLink.href = artistURLuser;
                    albumLink.target = "_blank";
                    albumLink.textContent = "Listen on Spotify";
                    albumLink.classList.add("album-link");
                    albumInfoDiv.appendChild(albumLink);

                    albumDiv.appendChild(albumInfoDiv);
                    resultsDiv.appendChild(albumDiv);
                });
            }
        });

        xhr.open('GET', `https://spotify23.p.rapidapi.com/search/?q=${query}&type=multi&offset=0&limit=10&numberOfTopResults=5`);
        xhr.setRequestHeader('X-RapidAPI-Key', '8dde0e84d7mshd42ae9f47685f67p102885jsn9fd7df7f2007');
        xhr.setRequestHeader('X-RapidAPI-Host', 'spotify23.p.rapidapi.com');

        xhr.send();
    }

    function getRandomDuration() {
        // Replace with actual duration calculation
        return Math.floor(Math.random() * 200) + 120 + " min";
    }

    function getRandomTrackCount() {
        // Replace with actual track count calculation
        return Math.floor(Math.random() * 10) + 5;
    }

    function getArtistDescription(artists) {
        // Combine artist names for a description
        return "Featuring " + artists.map(artist => artist.profile.name).join(", ");
    }
});



// const xhr = new XMLHttpRequest();
// document.getElementById('search-btn').addEventListener('click',() => {
//     const text = document.getElementById('search-text').value
//         console.log(text);
//         xhr.open('GET', `https://weather-api99.p.rapidapi.com/weather?city=${text}`);
// xhr.setRequestHeader('X-RapidAPI-Key', '8dde0e84d7mshd42ae9f47685f67p102885jsn9fd7df7f2007');
// xhr.setRequestHeader('X-RapidAPI-Host', 'weather-api99.p.rapidapi.com');



// xhr.addEventListener('readystatechange', () => {
// 	if (xhr.readyState ==4 && xhr.status ==200) {
// 		console.log(this.responseText);
//         const response = JSON.parse(xhr.responseText)
//         console.log(response);
//         let output = ''
//         for(let i=0; i<response.length, i++;){
//             output = `
//             <div style="width:25%"; margin:"20px;">
//             <div>
//             <h1>${response[i].base}</h1>
//             <h1>weather:${response[i].main}</h1>

//             </div>
//             </div>
            
//             `
//         }
//         document.getElementById('results').innerHTML = output

// 	}
// })
// xhr.send()

// });
//xhr.onreadystatechange = () => {
    // 		if (xhr.status == 200 && xhr.readyState == 4) {
    // 			let response = JSON.parse(xhr.responseText)
    // 			console.log(response);

// xhr.open('GET', 'https://weather-api99.p.rapidapi.com/weather?city=guwahati');
// xhr.setRequestHeader('X-RapidAPI-Key', '8dde0e84d7mshd42ae9f47685f67p102885jsn9fd7df7f2007');
// xhr.setRequestHeader('X-RapidAPI-Host', 'weather-api99.p.rapidapi.com');

// xhr.send(data);