//You can edit ALL of the code here
//global variable
// let allEpisodes = [];
  const allEpisodes = getAllEpisodes();


function setup() {
  // const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes); //calls makePageForEpisodes function using allEpisodes var as parameter
  
}

//function creates cards for each episode
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = "";
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;

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

    // //-----------------Test for live search
    // let epNameTest = epDiv.getElementsByTagName("h2");
    // console.log(epNameTest.length); //logs 1 x73

    // console.log(epName.length); //logs undefined x73
    // //------------------------------------------

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

//do search for just h2 elem 1st
//get all h2 elems stored in var(already stored in epName??)

//-----------------------LIVE SEARCH
//TEst for oneEpisode live search
// let h2ElTest = document.createElement("li");
// document.body.appendChild(h2ElTest);
// h2ElTest.innerHTML = "amazing grace howww";
// h2ElTest.id = "testh2";

  let searchBar = document.getElementById("searchbar");

searchBar.addEventListener("input", searchFilter);

function searchFilter(event) {
  // event.preventDefault();
  let displayNumber = document.getElementById("display-number"); //p elem 
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
   displayNumber.innerText = `Displaying ${filteredEpisodes.length}/${allEpisodes.length} episodes`;


};

// function search_ep() {

//   input2 = input2.toLowerCase();



//   // let epH2 = document.querySelectorAll("h2"); //episode names
//   // let summaryPara = document.getElementsByTagName("p"); //episode summary
//   // let divEl = document.querySelectorAll(".episode");  //episode div
//   // //-----LIVE SEARCH FOR EP NAMES(H2)
//   // epH2.forEach((episode, index) => {
//   //   if (
//   //     !episode.innerHTML.toLowerCase().includes(input2)
//   //     // || !summaryPara[i].innerHTML.toLowerCase().includes(input2)
//   //   ) {
//   //     divEl[index].style.display = "none";
//   //     //  summaryPara[i].style.display="none"  ;
//   //   } else {
//   //     divEl[index].style.display = "initial";
//   //   }
//   // });
// }
//------------

//TEST FOR BOTH
//try displaying relevant divs for h2 search

//   for (i = 0; i < epH2.length; i++) {
//     if (
//       !epH2[i].innerHTML.toLowerCase().includes(input2)
//       // || !summaryPara[i].innerHTML.toLowerCase().includes(input2)
//     ) {
//       divEl[i].style.display = "none";
//       //  summaryPara[i].style.display="none"  ;
//     } else {
//       divEl[i].style.display = "initial";
//     }
//   }
// }

//--------------------------------------------------
window.onload = setup;
