const teamNameEl = document.getElementById("teamName");
const fullNameEl = document.getElementById("fullName");
const captainEl = document.getElementById("captain");
const trophiesEl = document.getElementById("trophies");

const btn = document.getElementById("switchBtn");

const mainEl = document.querySelector(".container");


const pslTeams = [
  {
    team: "KK",
    fullName: "Karachi Kings",
    primary: "#0057e7",
    secondary: "#ffd700",
    trophies: 1,
    captain: "Shan Masood"
  },
  {
    team: "LQ",
    fullName: "Lahore Qalandars",
    primary: "#00a94f",
    secondary: "#000",
    trophies: 2,
    captain: "Shaheen Afridi"
  },
  {
    team: "IU",
    fullName: "Islamabad United",
    primary: "#e63946",
    secondary: "#f1c40f",
    trophies: 2,
    captain: "Shadab Khan"
  },
  {
    team: "PZ",
    fullName: "Peshawar Zalmi",
    primary: "#f1c40f",
    secondary: "#000",
    trophies: 1,
    captain: "Babar Azam"
  },
  {
    team: "QG",
    fullName: "Quetta Gladiators",
    primary: "#4b2e83",
    secondary: "#d4af37",
    trophies: 1,
    captain: "Rilee Rossouw"
  },
  {
    team: "MS",
    fullName: "Multan Sultans",
    primary: "#0fb9b1",
    secondary: "#1a1a2e",
    trophies: 1,
    captain: "Mohammad Rizwan"
  }
];

let random = 0;
teamNameEl.innerText = pslTeams[random].team;
fullNameEl.innerText = pslTeams[random].fullName;
captainEl.innerText = "Captain: " + pslTeams[random].captain;
trophiesEl.innerText = "Trophies: " + pslTeams[random].trophies;
mainEl.style.backgroundColor = pslTeams[random].primary;
mainEl.style.color = pslTeams[random].secondary;


btn.addEventListener("click", function(){
    random = Math.floor(Math.random() * pslTeams.length);
    
    teamNameEl.innerText = pslTeams[random].team;
    fullNameEl.innerText = pslTeams[random].fullName;
    captainEl.innerText = "Captain: " + pslTeams[random].captain;
    trophiesEl.innerText = "Trophies: " + pslTeams[random].trophies;

    mainEl.style.backgroundColor = pslTeams[random].primary;
    mainEl.style.color = pslTeams[random].secondary;    
})



 
    


