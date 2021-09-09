//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;

//wrapper div
const wrapDiv = document.createElement('div');
document.body.appendChild(wrapDiv);
wrapDiv.id = 'wrapper';

//creates & appends div, h2, img, p & a element for each episode
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

//Link to TV Maze
 let tvMazeLink = document.createElement("p");
 document.body.appendChild(tvMazeLink);
 tvMazeLink.innerHTML =
   'All data from <a href="https://tvmaze.com/" target="_blank" rel="noopener noreferrer">TVMaze.com</a>';

