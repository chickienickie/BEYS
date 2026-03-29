function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}
  const ageFilter = document.getElementById("ageFilter");
  const teamFilter = document.getElementById("teamFilter");
  
  function loadSchedule(){
  
  const age = ageFilter.value;
  const team = teamFilter.value;
  const table = document.getElementById("scheduleTable");
  
  table.innerHTML = "";
  
  schedules[age].forEach(game => {
  
  if (team === "all" || game.home === team || game.away === team){
  
  table.innerHTML += `
  <tr>
  <td>${game.date}</td>
  <td>${game.home}</td>
  <td>${game.away}</td>
  <td>${game.field}</td>
  </tr>
  `;
  
  }
  
  });
  
  }
  
  ageFilter.addEventListener("change", loadSchedule);
  teamFilter.addEventListener("change", loadSchedule);
  
  loadSchedule();