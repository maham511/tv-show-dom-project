//You can edit ALL of the code here

//global variable
  const allEpisodes = getAllEpisodes();


function setup() {
  // const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes); //calls makePageForEpisodes function using allEpisodes var as parameter 
}

//function creates cards for each episode
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = "";

  //wrapper div
  // const wrapDiv = document.createElement("div");
  // rootElem.appendChild(wrapDiv);
  // wrapDiv.id = "wrapper";

  //creates & appends div, h2, img, p & a element for each episode
  episodeList.forEach((episode) => {
    let epDiv = document.createElement("div");
    rootElem.appendChild(epDiv);
    epDiv.className = "episode";

    //Episode Name, Season & Ep number
  let epName;
    epName = document.createElement("h2");
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
}

//Level 200
//Add search
//needs a 'live' search input
//1. only display eps whose summary OR name match search term
//2. be case insensitive
//3. Update display asap after each keystroke
//4. Display how many episodes match search. eg. displaying 12/73 episodes
//5. If search empty, show all eps


  let searchBar = document.getElementById("searchbar");
  let displayNumber = document.getElementById("display-number"); //p elem 

searchBar.addEventListener("input", searchFilter);

function searchFilter(event) {
  let userSearch = event.target.value.toLowerCase();
   let filteredEpisodes = allEpisodes.filter((episode) => {
     return (
       episode.name.toLowerCase().includes(userSearch) ||
       episode.summary.toLowerCase().includes(userSearch)
     );
   });

   //creates filtered episodes' cards
   makePageForEpisodes(filteredEpisodes);

   //eg displaying 10/73 episodes
   displayNumber.innerText = `Showing ${filteredEpisodes.length}/${allEpisodes.length} episodes`;
};

//-------------------------------------
//LEVEL 300

//Selectmenu stored
let selectMenu = document.getElementById("select-episode");

//add all eps to drop down options
allEpisodes.forEach(episode => {
  let option = document.createElement('option');
  selectMenu.appendChild(option);
  // option.value = `S${episode.season
  //     .toString()
  //     .padStart(2, "0")}E${episode.number.toString().padStart(2, "0")}`;
  option.innerText = `S${episode.season
    .toString()
    .padStart(2, "0")}E${episode.number.toString().padStart(2, "0")} - ${
    episode.name
  }`;
//  console.log(option.value); //logs each episode's innerText value
});

//only show selected episode
//Add eventlistenter for select elem
//use 'change'
//test if can update p elem on change
selectMenu.addEventListener('change', showSelectedEpisode);  


function showSelectedEpisode(event){
 
  //Filter condition for selectMenu
  let selectedEpisode = allEpisodes.filter((episode) => {
    //can also use return selectMenu.value.includes(episode.name);
    return event.target.value.includes(episode.name);
  });
 
  //shows selected episode
  makePageForEpisodes(selectedEpisode);
  //clears displayNumber text when user selects any option
  displayNumber.innerText = "";

  if (selectMenu.value === "All episodes") {
    // console.log("ye"); //logs ye
    makePageForEpisodes(allEpisodes);
    // displayNumber.innerText = "";
  }
};

window.onload = setup;
