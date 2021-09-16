//You can edit ALL of the code here

//global variables
const allEpisodes = getAllEpisodes();

function setup() {
  //makes cards for all episodes
  makePageForEpisodes(allEpisodes);
}

// creates cards for given episodes list
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  //element empty onload
  rootElem.innerHTML = "";

  //creates & appends div, h2, img, p & a elements for each episode
  episodeList.forEach((episode) => {
    //Episode card
    let epCard = document.createElement("div");
    epCard.className = "epCard";
    rootElem.appendChild(epCard);

    //Episode Name, Season & Number
    let epHeading = document.createElement("h2");
    let epName = episode.name;
    let epSeason = episode.season.toString().padStart(2, "0");
    let epNumber = episode.number.toString().padStart(2, "0");

    epHeading.innerText = `${epName} - S${epSeason}E${epNumber}`;

    //Medium Image
    let epImg = document.createElement("img");
    epImg.src = episode.image.medium;

    //Summary
    let epSummary = document.createElement("p");
    epSummary.className = "summary";
    epSummary.innerHTML = episode.summary; //innerHTML removes all p tags in summary obj property

    //Episode Link
    let epLink = document.createElement("p");
    epLink.innerHTML = `<a href= ${episode.url} target="_blank" rel="noopener noreferrer">Original episode</a>`;

    //Child elems appended to epCard
    epCard.append(epHeading, epImg, epSummary, epLink);

    //Select menu options created and appended for all eps
    let option = document.createElement("option");
    selectMenu.appendChild(option);
    option.innerText = `S${epSeason}E${epNumber} - ${episode.name}`;
  });
}

// Level 200 - Searchbar
let searchBar = document.getElementById("searchbar");
let displayNumber = document.getElementById("display-number"); //p elem

searchBar.addEventListener("input", searchFilter);

function searchFilter(event) {
  //toLowerCase makes search case-insensitive
  let searchInput = event.target.value.toLowerCase();

  //filters for eps with matching name or summary
  let filteredEpisodes = allEpisodes.filter((episode) => {
    return (
      episode.name.toLowerCase().includes(searchInput) ||
      episode.summary.toLowerCase().includes(searchInput)
    );
  });

  //creates filtered cards
  makePageForEpisodes(filteredEpisodes);

  //updates para showing number of matching episodes
  displayNumber.innerText = `Showing ${filteredEpisodes.length}/${allEpisodes.length} episodes`;
}

//LEVEL 300 - Select Menu
let selectMenu = document.getElementById("selectMenu");
selectMenu.addEventListener("change", showSelectedEpisode);

function showSelectedEpisode(event) {
  //Filter condition for selectMenu
  let selectedEpisode = allEpisodes.filter((episode) => {
    //can also use return selectMenu.value.includes(episode.name);
    return event.target.value.includes(episode.name);
  });

  if (selectMenu.value === "All episodes") {
    makePageForEpisodes(allEpisodes);
  } else {
    makePageForEpisodes(selectedEpisode);
  }
  //clears displayNumber text when user selects any option
  displayNumber.innerText = "";
}

window.onload = setup;
