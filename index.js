let averagePrice = document.getElementById("average")
averagePrice.innerHTML = "The average starting price is"

const freelancers = [
  {name: "Denji", occupation: "hunter", price: 150},
  {name: "Luke", occupation: "cook", price: 30},
  {name: "Clare", occupation: "bounty hunter", price: 2000},
  {name: "Paul", occupation: "plumber", price: 25},
  {name: "Kyle", occupation: "programmer", price: 50},
  {name: "Samwise Gamgee", occupation: "gardener", price: 20},
  {name: "Harald Hardrada", occupation: "viking", price: 1000},
  {name: "Johnny", occupation: "painter", price: 15},
  {name: "Shirou Emiya", occupation: "sword maker", price: "Free"},
  {name: "Walter White", occupation: "chemist", price: 400}
];

function renderFreelancers() {
  let freelancersList = document.getElementById("freelancer-list")

  for (let i = 0; i < freelancers.length; i++) {
    let currentFreelancers = freelancers[i]

    let freelancerDiv = document.createElement("div")
    freelancerDiv.className = "freelancer"

    freelancerDiv.innerHTML = `<h1>${currentFreelancers.name}</h1>
                               <h3>${currentFreelancers.occupation}</h3>
                               <h3>${currentFreelancers.price}</h3>`
    freelancersList.appendChild(freelancerDiv)
  }
}

renderFreelancers()