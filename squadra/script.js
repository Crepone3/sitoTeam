const staff = [
  {
    name: "Marco Calabresi",
    role: "Allenatore",
    instagram: "er_cala",
    img: "img/MarcoMister_Squadra.jpeg"
  },
  {
    name: "Gabriele Coscarella",
    role: "Vice Allenatore",
    instagram: "gabriele_coscarella",
    img: "img/CoscaViceMister_Squadra.jpeg"
  },
  {
    name: "Emanuele Racalbuto",
    role: "Presidente",
    instagram: "ema_racalbuto",
    img: "img/PresidentePresentazione.jpeg"
  }
];

const players = [
  {
    name: "Federico Sdogati",
    role: "Portiere",
    number: 99,
    value: 0,
    matches: 1,
	instagram: "federico.sdogati",
	captain: false,
    img: "img/FefoPresentazione.jpeg",
	yellow: 0,
	red: 0
  },
  {
    name: "Riccardo Petrucci",
    role: "Difensore",
    number: 6,
    value: 0,
    matches: 1,
	instagram: "riccardopetrucci__",
	captain: false,
    img: "img/RiccardinoPresentazione.jpeg",
	yellow: 0,
	red: 0
  },
  {
    name: "Gabriele Collina",
    role: "Difensore",
    number: 4,
    value: 0,
    matches: 1,
	instagram: "gabriele_collina__",
	captain: false,
    img: "img/GabryPresentazione.jpeg",
	yellow: 0,
	red: 0
  },
  {
    name: "Alessio Sinato",
    role: "Ala",
    number: 15,
    value: 0,
    matches: 1,
	instagram: "alessiosinato",
	captain: false,
    img: "img/SicPresentazione.jpeg",
	yellow: 0,
	red: 1
  },
  {
    name: "Gioele Di Giosia",
    role: "Ala",
    number: 10,
    value: 0,
    matches: 1,
	instagram: "_giioele_",
	captain: false,
    img: "img/GioelePresentazione.jpeg",
	yellow: 0,
	red: 0
  },
  {
    name: "Alessandro Pinti",
    role: "Ala",
    number: 9,
    value: 0,
    matches: 1,
	instagram: "alessandro_pinti",
	captain: false,
    img: "img/peppinoPresentazione.jpeg",
	yellow: 0,
	red: 0
  },
  {
    name: "Gabriele D'Ulisse",
    role: "Attacante",
    number: 11,
    value: 1,
    matches: 1,
	instagram: "gamba17._",
	captain: true,
    img: "img/GambaPresentazione.jpeg",
	yellow: 0,
	red: 0
  },
  {
    name: "Valentino Tocci",
    role: "Attaccante",
    number: 17,
    value: 0,
    matches: 1,
	instagram: "_valentino.tocci_",
	captain: false,
    img: "img/ValentinoPresentazione.jpeg",
	yellow: 0,
	red: 0
  }
  
];

const matches = [
   {
    date: "Da definire",
    location: "Da definire",
    home: "Paraguay",
    away: "Polonia",
    type: "2° Partita Girone A",
	status: "upcoming" // upcoming | played
  },
  {
    date: "10 Maggio 2026 • 22:00",
    location: "USR, Via Nomentana 858, Roma",
    home: "Nuova Zelanda",
    away: "Polonia",
    score: "3 - 1",
    result: "loss", // win | loss | draw
    scorers: [
      "⚽ Gabriele D'Ulisse",
	  "🟥 Alessio Sinato",
    ],
    type: "1° Partita Girone A",
    status: "played"
  }
  
];

const media = [
  {
    img: "img/MisterPresentazione.jpeg",
    title: "Presentazione",
    desc: "Mister Calabresi & Coscarella"
  },
  {
    img: "img/PresidentePresentazione.jpeg",
    title: "Presentazione",
    desc: "Presidente Racalbuto"
  },
  {
    img: "img/ScudettoPresentazione.jpeg",
    title: "Presentazione",
    desc: "Scudetto"
  }
];

function renderStaff() {
  const container = document.getElementById("staffContainer");
  if (!container) return;

  container.innerHTML = "";

  staff.forEach(s => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${s.img}">

      <h3 style="display:flex; align-items:center; justify-content:center; gap:8px; margin:8px 0;">
        ${s.name}

        <a href="https://www.instagram.com/${s.instagram}" target="_blank"
           onclick="event.stopPropagation()"
           style="display:flex; align-items:center;">
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
               style="width:18px; height:18px;">
        </a>
      </h3>

      <p>${s.role}</p>
    `;

    container.appendChild(card);
  });
}

function renderPlayers() {
  const container = document.getElementById("playersContainer");
  if (!container) return;

  container.innerHTML = "";

  players.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    const inner = document.createElement("div");
    inner.style.cursor = "pointer";
    inner.style.padding = "10px";

    inner.innerHTML = `
      <img src="${p.img}">

      <h3 style="display:flex; align-items:center; justify-content:center; gap:8px; margin:8px 0;">
        ${p.name}
        <a href="https://www.instagram.com/${p.instagram}" target="_blank"
           onclick="event.stopPropagation()"
           style="display:flex; align-items:center;">
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" style="width:18px; height:18px;">
        </a>
      </h3>
	  
	  <p class="role-line">
		  ${p.role}
		  ${p.captain ? '<span class="captain-band-mini">C</span>' : ""}
		</p>
    `;

    // 👇 CLICK DINAMICO
    inner.addEventListener("click", () => {
      openPlayer(p);
    });

    card.appendChild(inner);
    container.appendChild(card);
  });
}

function renderCalendar() {
  const container = document.getElementById("calendarContainer");

  container.innerHTML = "";

  matches.forEach(m => {

    const div = document.createElement("div");

    div.className = "match";

    // PARTITA GIOCATA
    if (m.status === "played") {

      div.classList.add(m.result);

      div.innerHTML = `
        <div style="font-size:13px; color:#ffb3b3;">
          📅 ${m.date}
        </div>

        <div style="margin:8px 0; font-size:14px; color:#ccc;">
          📍 ${m.location}
        </div>

        <div style="font-size:22px; font-weight:bold;">
          ${m.home}
          <span class="score">${m.score}</span>
          ${m.away}
        </div>

        <div style="margin-top:8px; font-size:12px; color:#aaa;">
          🏟️ ${m.type}
        </div>

        <div class="details">
          ${m.scorers.map(s => s).join("<br>")}
        </div>
      `;

      // CLICK APRI DETTAGLI
      div.addEventListener("click", () => {
        div.classList.toggle("open");
      });

    }

    // PARTITA FUTURA
    else {

	  div.classList.add("upcoming");
	  
      div.innerHTML = `
        <div style="font-size:13px; color:#ffb3b3;">
          📅 ${m.date}
        </div>

        <div style="margin:8px 0; font-size:14px; color:#ccc;">
          📍 ${m.location}
        </div>

        <div style="font-size:20px; font-weight:bold;">
          ${m.home}
          <span style="color:crimson;">VS</span>
          ${m.away}
        </div>

        <div style="margin-top:8px; font-size:12px; color:#aaa;">
          🏟️ ${m.type}
        </div>
      `;
    }

    container.appendChild(div);
  });
}

function renderMedia() {
  const container = document.getElementById("mediaContainer");

  container.innerHTML = "";

  media.forEach(m => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${m.img}" onclick="openImg('${m.img}')">
      <h3>${m.title}</h3>
      <p>${m.desc}</p>
    `;

    container.appendChild(card);
  });
}

let currentStat = "matches";

function renderStats() {

  const container = document.getElementById("statsTable");
  if (!container) return;

let sorted = [...players].sort((a, b) => {

  let valA = Number(a[sortState.key]) || 0;
  let valB = Number(b[sortState.key]) || 0;

  // 1️⃣ confronto principale
  let diff =
    sortState.dir === "desc"
      ? valB - valA
      : valA - valB;

  // 2️⃣ tie-breaker: gol → poi presenze → poi nome
  if (diff === 0) {
    if (sortState.key !== "value") {
      return (b.value || 0) - (a.value || 0);
    }

    if ((b.matches || 0) !== (a.matches || 0)) {
      return (b.matches || 0) - (a.matches || 0);
    }

    return a.name.localeCompare(b.name);
  }

  return diff;
});

  container.innerHTML = sorted.map((p, i) => `

    <div class="stats-row">

      <span>${i + 1}</span>
      <span class="player-name">${p.name}</span>

      <span>${p.matches}</span>
      <span>${p.value}</span>
      <span>${p.yellow}</span>
      <span>${p.red}</span>

    </div>

  `).join("");

  updateSortIcons();
}

function updateSortIcons() {

  const keys = ["matches", "value", "yellow", "red"];

  keys.forEach(k => {
    const el = document.getElementById("icon-" + k);
    if (!el) return;

    if (sortState.key !== k) {
      el.innerHTML = "";
    } else {
      el.innerHTML = sortState.dir === "desc" ? " ↓" : " ↑";
    }
  });

}

function getStatIcon(type) {

  switch(type) {

    case "value":
      return "⚽";

    case "matches":
      return "🏟️";

    case "yellow":
      return "🟨";

    case "red":
      return "🟥";

    default:
      return "📊";
  }
}

function sortStats(type) {

  currentStat = type;

  renderStats(type);

  document.querySelectorAll(".stats-btn")
    .forEach(btn => btn.classList.remove("active-stat"));

  event.target.classList.add("active-stat");
}

let sortState = {
  key: "matches",
  dir: "desc"
};

function sortTable(key) {

  if (sortState.key === key) {
    // se clicchi stessa colonna → cambia direzione
    sortState.dir = sortState.dir === "desc" ? "asc" : "desc";
  } else {
    sortState.key = key;
    sortState.dir = "desc";
  }

  renderStats();
}

window.addEventListener("load", () => {
  renderStaff();
  renderPlayers();
  renderCalendar();
  renderStats();
  //renderMedia();
});



// ===== FIX CLICK TAB (MIGLIORATO) =====

function openTab(tabId, el) {
  let contents = document.querySelectorAll('.content');
  let tabs = document.querySelectorAll('.tab');

  contents.forEach(c => c.classList.remove('active'));
  tabs.forEach(t => t.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  el.classList.add('active');
};

// ===== SWIPE TOUCH =====
let startX = 0;
let endX = 0;

document.addEventListener("touchstart", function(e) {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", function(e) {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {

  let diff = startX - endX;

  if (Math.abs(diff) < 50) return;

  let tabs = ["giocatori", "calendario", "statistiche"];

  let currentIndex = tabs.findIndex(id =>
    document.getElementById(id)?.classList.contains("active")
  );

  // ❌ sicurezza: se non trova la tab, esce
  if (currentIndex === -1) return;

  if (diff > 0) {
    // swipe sinistra
    if (currentIndex < tabs.length - 1) {
      openTabSafe(tabs[currentIndex + 1]);
    }
  } else {
    // swipe destra
    if (currentIndex > 0) {
      openTabSafe(tabs[currentIndex - 1]);
    }
  }
}

function openTabById(tabId) {
  let contents = document.querySelectorAll('.content');
  let tabsEl = document.querySelectorAll('.tab');

  contents.forEach(c => c.classList.remove('active'));
  tabsEl.forEach(t => t.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');

  tabsEl.forEach(t => {
    if (t.getAttribute("onclick").includes(tabId)) {
      t.classList.add("active");
    }
  });
}

// ===== IL RESTO DEL TUO JS IDENTICO =====
function toggle(el) {
  let d = el.querySelector(".details");
  d.style.display = (d.style.display === "block") ? "none" : "block";
}

function getRoleIcon(role) {
  switch (role.toLowerCase()) {
    case "portiere":
      return "🧤";
    case "difensore":
      return "🛡️";
    case "ala":
      return "🏃‍♂️";
    case "attaccante":
      return "⚔️";
    default:
      return "👤";
  }
}
function openPlayer(player) {
  document.getElementById("popup").style.display = "flex";

  const roleLower = player.role.toLowerCase();

  document.getElementById("name").innerText = player.name;

  document.getElementById("roleLine").innerHTML =
    `${getRoleIcon(player.role)} Ruolo: <b>${player.role}</b>`;

  document.getElementById("numeroMaglietta").innerText = player.number;
  document.getElementById("matches").innerText = player.matches;

  if (roleLower === "portiere") {
    document.getElementById("statLine").innerHTML =
      `🥅 Gol subiti: <b>${player.value}</b>`;
  } else {
    document.getElementById("statLine").innerHTML =
      `⚽ Gol fatti: <b>${player.value}</b>`;
  }
  
  document.getElementById("yellowCards").innerText = player.yellow;

  document.getElementById("redCards").innerText = player.red;
  
}

function closePopup(e) {
  if (!e || e.target.id === "popup") {
    document.getElementById("popup").style.display = "none";
  }
}

function openImg(src) {
  document.getElementById("imgPopup").style.display = "flex";
  document.getElementById("bigImg").src = src;
}

function closeImg(e) {
  if (!e || e.target.id === "imgPopup") {
    document.getElementById("imgPopup").style.display = "none";
  }
}
