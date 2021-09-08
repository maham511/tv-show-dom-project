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

  //Season & Episode Number
  let seasonEpisode = document.createElement("h2");
  epDiv.appendChild(seasonEpisode);
  seasonEpisode.innerText = `S${episode.season
    .toString()
    .padStart(2, "0")} E${episode.number.toString().padStart(2, "0")}`; //season no. changed to string to add padding, then rendered as h2 elem

  //Medium Image
  let imgMed = document.createElement("img");
  epDiv.appendChild(imgMed);
  imgMed.src = episode.image.medium; //renders medium img

  //Summary
  let epSummary = document.createElement("p");
  epDiv.appendChild(epSummary);
  epSummary.innerText = episode.summary.replace(/<([^>]+>)/g, ""); //removes all tags in summary string, then renders as p

});