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

//Bugs
//<p></p> shows in summary
  //--Create a div instead of p?
//season and ep nums need padding and in same line

const wrapDiv = document.createElement('div');
document.body.appendChild(wrapDiv);
wrapDiv.id = 'wrapper';
// wrapDiv.appendChild(epDiv);


getAllEpisodes().forEach((episode) => {
  let epDiv = document.createElement("div");
  wrapDiv.appendChild(epDiv);
  epDiv.className = "episode";

  //Episode Name, Season & Ep number
  let epName = document.createElement("h2");
  epDiv.appendChild(epName);

  //innertext renders ep name, season & ep number
  epName.innerText = `${episode.name} - S${episode.season
    .toString()
    .padStart(2, "0")}E${episode.number.toString().padStart(2, "0")}`; //season & ep num changed to string to add zero-padding

  // //Season & Episode Number
  // let seasonEpisode = document.createElement("h2");
  // epDiv.appendChild(seasonEpisode);
  // seasonEpisode.innerText = `S${episode.season
  //   .toString()
  //   .padStart(2, "0")} E${episode.number.toString().padStart(2, "0")}`; //season no. changed to string to add padding, then rendered as h2 elem

  //Medium Image
  let imgMed = document.createElement("img");
  epDiv.appendChild(imgMed);
  imgMed.src = episode.image.medium; //renders medium img

  //Summary
  let epSummary = document.createElement("p");
  epDiv.appendChild(epSummary);
  epSummary.innerHTML = episode.summary; //innerHTML removes all tags in summary string

  //Episode Link
  let epLink = document.createElement("a");
  epDiv.appendChild(epLink);
  epLink.innerHTML = `<a href= ${episode.url} target="_blank" rel="noopener noreferrer">Original episode info</a>`;
});

// const wrapDiv = document.createElement("div");
// document.body.appendChild(wrapDiv);
// wrapDiv.appendChild(".episode");
// wrapDiv.appendChild(epDiv);


//Link to TV Maze
 let tvMazeLink = document.createElement("p");
 document.body.appendChild(tvMazeLink);
 tvMazeLink.innerHTML =
   'All data from <a href="https://tvmaze.com/" target="_blank" rel="noopener noreferrer">TVMaze.com</a>';

// wrapDiv.appendChild(".episode");
