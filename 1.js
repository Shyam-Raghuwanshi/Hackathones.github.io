const url = 'https://kontests.net/api/v1/all'
const fetchFun = async () => {
  const respones = await fetch(url)
  let json = await respones.json()
  json.map((val) => {
    let btn = document.getElementById('btn').style.display = 'none'
    let container = document.querySelector('#container')
    let card = `<div class="p-4 lg:w-1/3">
    <div class="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Project Name</h2>
      <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">${val.name}</h1>
      <p class="leading-relaxed mb-3">This is the free Hackathone. You can participate. Visit the following site for more information.</p>
      <a href="${val.url}" class="text-green-400 inline-flex font-bold items-center border border-gray-400 mt-2 rounded-full p-2">Visit site
        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </a>
      <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
        <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
          Start Time : ${val.start_time}
        </span>
        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
          End Time : ${val.end_time}
        </span>
      </div>
    </div>
  </div>`
    container.innerHTML += card
  })
}

fetchFun()
// "name": "ProjectEuler+",
// "url": "https://hackerrank.com/contests/projecteuler",
// "start_time": "2014-07-07T15:38:00.000Z",
// "end_time": "2024-07-30T18:30:00.000Z",
// "duration": "317616720.0",
// "site": "HackerRank",
// "in_24_hours": "No",
// "status": "CODING"