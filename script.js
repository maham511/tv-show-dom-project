//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;

//create ul and append to body
//render one episode
//loop through all episodes and render names of all 73


let episodeList = document.createElement('ul');
document.body.appendChild(episodeList);
//-----------------------------------------------
    // //test for 1 episode frm getOneEpisode function
    // let oneEpisode = document.createElement('li');
    // episodeList.appendChild(oneEpisode);
    // oneEpisode.innerText = getOneEpisode().season;

    // //create, append img elem with medium img url frm getOneEpisode
    // let img1 = document.createElement('img');
    // document.body.appendChild(img1);
    // img1.src = getOneEpisode().image.medium;
//---------------------------------------

// getAllEpisodes().forEach(episode => {
//  let episodes = document.createElement('li');
//   episodeList.appendChild(episodes);

// })


//-------------------------------------------
//GETALLEPISODES TEST
//creates & appends li to ul from allEpisodes fcntin, & original img from same episode 
    // let oneEpisodeFrmArr = document.createElement("li");
    // episodeList.appendChild(oneEpisodeFrmArr);
    // oneEpisodeFrmArr.innerText = getAllEpisodes()[2].name;

    // //create, append img elem with medium img url frm getOneEpisode
    // let img2 = document.createElement("img");
    // document.body.appendChild(img2);
    // img2.src = getAllEpisodes()[2].image.original;
    // //-----------------------------

// getAllEpisodes().forEach((episode) => {
//   let episodes = document.createElement("li");
//   episodeList.appendChild(episodes);
//   episodes.innerText = episode.name; //renders ep name per li
//   // console.log(`I'm ep${episode.number}`); //renders 'hi' x7
// });


getAllEpisodes().forEach((episode) => {
  let epDiv = document.createElement("div");
  document.body.appendChild(epDiv);

  //Episode Name
  let epName = document.createElement("h2");
  epDiv.appendChild(epName);
  epName.innerText = episode.name; //renders ep name in h2 tag

  //Season
  let season = document.createElement("h2");
  epDiv.appendChild(season);
  season.innerText = episode.season; //renders season in h2 tag

  //Episode number
  let epNumber = document.createElement("h2");
  epDiv.appendChild(epNumber);
  epNumber.innerText = episode.number; //renders season in h2 tag

  // console.log(`I'm ep${episode.number}`); //renders 'hi' x7
});