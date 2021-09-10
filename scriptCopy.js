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
const wrapDiv = document.createElement("div");
document.body.appendChild(wrapDiv);
wrapDiv.id = "wrapper";
let epName;

//creates & appends div, h2, img, p & a element for each episode
getAllEpisodes().forEach((episode) => {
  let epDiv = document.createElement("div");
  wrapDiv.appendChild(epDiv);
  epDiv.className = "episode";

  //Episode Name, Season & Ep number
  epName = document.createElement("h2");
  epDiv.appendChild(epName);

  //innertext renders ep name, season & ep number
  epName.innerText = `${episode.name} - S${episode.season
    .toString()
    .padStart(2, "0")}E${episode.number.toString().padStart(2, "0")}`; //season & ep num changed to string to add zero-padding

  //-----------------Test for live search
  let epNameTest = epDiv.getElementsByTagName("h2");
  console.log(epNameTest.length); //logs 1 x73

  console.log(epName.length); //logs undefined x73
  //------------------------------------------

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

//Level 200
//Add search
//needs a 'live' search input
//1. only display eps whose summary OR name match search term
//2. be case insensitive
//3. Update display asap after each keystroke
//4. Display how many episodes match search. eg. displaying 12/73 episodes
//5. If search empty, show all eps

//found example on w3s,uses ul, li and for loop
//I'm using div, h2, img, p, a, elements
//Need to update summary(<p>) & name(<h2>) elements
//h2, p elems already stored in js
//create vars for input, filter, i, txtValue

//do search for just h2 elem 1st
//get all h2 elems stored in var(already stored in epName??)

//-----------------------LIVE SEARCH
//TEst for oneEpisode live search
let h2ElTest = document.createElement("li");
document.body.appendChild(h2ElTest);
h2ElTest.innerHTML = "amazing grace howww";
h2ElTest.id = "testh2";

function search_ep() {
  let input2 = document.getElementById("searchbar2").value;

  input2 = input2.toLowerCase();
  let epH2 = document.getElementsByTagName("h2");
  let summaryPara = document.getElementsByTagName("p");

  for (i = 0; i < epH2.length; i++) {
    if (
      !epH2[i].innerHTML.toLowerCase().includes(input2)
      // || !summaryPara[i].innerHTML.toLowerCase().includes(input2)
    ) {
      epH2[i].style.display = "none";
      //  summaryPara[i].style.display="none"  ;
    } else {
      epH2[i].style.display = "initial";
    }
  }
}

//--------------------------------------------------
//test for epName length
console.log(epName.length); //logs undefined
console.log(getAllEpisodes().length); //logs 73

