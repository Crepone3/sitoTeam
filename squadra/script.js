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
    matches: 0,
	instagram: "federico.sdogati",
	captain: false,
    img: "img/FefoPresentazione.jpeg"
  },
  {
    name: "Riccardo Petrucci",
    role: "Difensore",
    number: 6,
    value: 0,
    matches: 0,
	instagram: "riccardopetrucci__",
	captain: false,
    img: "img/RiccardinoPresentazione.jpeg"
  },
  {
    name: "Gabriele Collina",
    role: "Difensore",
    number: 4,
    value: 0,
    matches: 0,
	instagram: "gabriele_collina__",
	captain: false,
    img: "img/GabryPresentazione.jpeg"
  },
  {
    name: "Alessio Sinato",
    role: "Ala",
    number: 15,
    value: 0,
    matches: 0,
	instagram: "alessiosinato",
	captain: false,
    img: "img/SicPresentazione.jpeg"
  },
  {
    name: "Gioele Di Giosia",
    role: "Ala",
    number: 10,
    value: 0,
    matches: 0,
	instagram: "_giioele_",
	captain: false,
    img: "img/GioelePresentazione.jpeg"
  },
  {
    name: "Alessandro Pinti",
    role: "Ala",
    number: 9,
    value: 0,
    matches: 0,
	instagram: "alessandro_pinti",
	captain: false,
    img: "img/peppinoPresentazione.jpeg"
  },
  {
    name: "Gabriele D'Ulisse",
    role: "Attacante",
    number: 11,
    value: 0,
    matches: 0,
	instagram: "gamba17._",
	captain: true,
    img: "img/GambaPresentazione.jpeg"
  },
  {
    name: "Valentino Tocci",
    role: "Attaccante",
    number: 17,
    value: 0,
    matches: 0,
	instagram: "_valentino.tocci_",
	captain: false,
    img: "img/ValentinoPresentazione.jpeg"
  }
  
];

const matches = [
  {
    date: "10 Maggio 2026 • 22:00",
    location: "USR, Via Nomentana 858, Roma",
    home: "Nuova Zelanda",
    away: "Polonia",
    type: "Girone",
	status: "upcoming" // oppure "upcoming"
  }
];


const results = [
  /*{
    date: "10 Maggio 2026 • 22:00",
    home: "Nuova Zelanda",
    away: "Polonia",
    score: "? - ?",
	status: "draw", // win | loss | draw
    scorers: [
      "Giocatore 1 (2)",
      "Giocatore 4 (1)",
      "Giocatore 6 (2)"
    ]
  }
  */
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
      openPlayer(p.name, p.role, p.number, p.value, p.matches);
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
    div.className = "match " + (m.status || "upcoming");

    div.innerHTML = `
      <div style="font-size:13px; color:#ffb3b3;">
        📅 ${m.date}
      </div>

      <div style="margin:8px 0; font-size:14px; color:#ccc;">
        📍 ${m.location}
      </div>

      <div style="font-size:20px; font-weight:bold;">
        ${m.home} <span style="color:crimson;">VS</span> ${m.away}
      </div>

      <div style="margin-top:8px; font-size:12px; color:#aaa;">
        🏟️ ${m.type}
      </div>
    `;

    container.appendChild(div);
  });
}

function renderResults() {
  const container = document.getElementById("resultsContainer");
  if (!container) return;

  container.innerHTML = "";

  results.forEach(r => {
    const div = document.createElement("div");
    div.className = "match";

    // 🔥 aggiunge classe stato (win / loss / draw)
    div.classList.add(r.status);

    div.innerHTML = `
      <div style="font-size:13px; color:#ffb3b3;">
        📅 ${r.date}
      </div>

      <div style="font-size:20px; font-weight:bold; margin-top:6px;">
        ${r.home} <span class="score">${r.score}</span> ${r.away}
      </div>

      <div class="details">
        ${r.scorers.map(s => "⚽ " + s).join("<br>")}
      </div>
    `;

    // toggle apertura dettagli
    div.addEventListener("click", () => {
      div.classList.toggle("open");
    });

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

window.addEventListener("load", () => {
  renderStaff();
  renderPlayers();
  renderCalendar();
  renderResults();
  renderMedia();
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

  let tabs = ["giocatori", "calendario", "risultati", "media"];

  let currentIndex = tabs.findIndex(id =>
    document.getElementById(id).classList.contains("active")
  );

  if (diff > 0) {
    // swipe sinistra
    if (currentIndex < tabs.length - 1) {
      openTabById(tabs[currentIndex + 1]);
    }
  } else {
    // swipe destra
    if (currentIndex > 0) {
      openTabById(tabs[currentIndex - 1]);
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
function openPlayer(name, role, numeroMaglietta, value, matches) {
  document.getElementById("popup").style.display = "flex";

  const roleLower = role.toLowerCase();

  document.getElementById("name").innerText = name;

  document.getElementById("roleLine").innerHTML =
    `${getRoleIcon(role)} Ruolo: <b>${role}</b>`;

  document.getElementById("numeroMaglietta").innerText = numeroMaglietta;
  document.getElementById("matches").innerText = matches;

  if (roleLower === "portiere") {
    document.getElementById("statLine").innerHTML =
      `🥅 Gol subiti: <b>${value}</b>`;
  } else {
    document.getElementById("statLine").innerHTML =
      `⚽ Gol fatti: <b>${value}</b>`;
  }
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
