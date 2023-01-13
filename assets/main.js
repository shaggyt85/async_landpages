const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UClsE9uzyhCsda3TDeGAf9Vw&part=snippet%2Cid&order=date&maxResults=9"

const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '06db7515cfmsh4365766fea3801fp179b82jsnec0f36c8bce2',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
            <div class="videos">
                <div class="">
                    <img src="${video.snippet.thumbnails.medium.url}" class="card-img-top" alt="${video.snippet.title}">        
                    <div class="card-body">
                        <h5 class="card-title">${video.snippet.title}</h5>
                        <p class="card-text">${video.snippet.description}</p>
                        <a href="https://www.youtube.com/watch?v=${video.id.videoId}" class="btn btn-primary">Ver video</a>
                    </div>
                </div>
            </div>
        `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})(); 