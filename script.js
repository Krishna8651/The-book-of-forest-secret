// ========== SCRIPT.JS — ADVENTURE, GLORY, 100% WORKING ==========
// THE BOOK OF FOREST SECRETS — now more EPIC than ever
// EVERY INTERACTION TRIGGERS WONDER, GLOWING DOOR, ANCIENT VOICES

(function() {
  "use strict";

  // ---------- HEROIC DOM ELEMENTS ----------
  const book = document.getElementById('sacredBook');
  const door = document.getElementById('gleamingDoor');
  const epicPoem = document.getElementById('forestEpic');
  const oracle = document.getElementById('oracleMessage');
  const streamShrine = document.getElementById('streamShrine');
  const heroCards = document.querySelectorAll('.hero-card');
  const treatButtons = document.querySelectorAll('.relic-treat');

  // ---------- FORBIDDEN TALES — now with deeper lore, ADVENTUROUS ----------
  const epicTales = {
    fox: [
      "🦊⚡ 'I stole a cinder from the dying sun and hid it in my brush — now I light forgotten paths.'",
      "🦊🔥 'Beneath the oldest oak, I buried a star-seed. At the next eclipse, a new forest will rise.'",
      "🦊🌠 Fox whispers: 'The door you entered? It only appears to those who dream in GOLDEN LEAVES.'"
    ],
    bear: [
      "🐻🌿 'I carry the memory of the first earthquake in my claws. The mountains still bow to me.'",
      "🐻🍯 'Deep in my cave grows a crystal honeycomb — each taste reveals a lost ancestor’s name.'",
      "🐻🗻 Bear rumbles: 'Long ago, I taught the rivers how to bend. They still sing my name at dawn.'"
    ],
    deer: [
      "🦌✨ 'I pour tea from the stream where the first star fell. One sip — you’ll speak the tongue of ferns.'",
      "🦌🌀 'The sparkles on the water are messages from the sunken kings. I have deciphered three.'",
      "🦌🌌 Deer bows: 'You carry an ancient scent — perhaps you are the one from the prophecy.'"
    ]
  };

  // ---------- RELIC TREAT RESPONSES — GLORIOUS ----------
  const relicResponses = {
    fox: "🔥🍪 FOX gives you an EMBER COOKIE. It pulses with warm light — you feel brave.",
    bear: "🏔️🍯 BEAR shares CRYSTAL HONEY from the elder hive. Your spirit grows ROOT-STRONG.",
    deer: "🌌🫖 DEER pours TEA OF VISIONS. Ripples of starlight dance in the cup — you see hidden truths."
  };

  // ---------- RADIANT DOOR — MAXIMUM GLOW ----------
  function glorifyDoor() {
    door.style.transition = '0.25s';
    door.style.boxShadow = '0 0 100px #fff2b0, 0 0 60px #ffecb0, inset 0 0 40px #ffffea';
    door.style.background = 'rgba(200, 180, 30, 0.6)';
    door.style.borderColor = '#fffed8';
    door.style.color = '#fffeda';
    door.textContent = '🚪✨🌀 DOOR BLAZES WITH PRIMAL LIGHT 🌀✨🚪';
    // after 2.8 sec, return but keep the gleam
    setTimeout(() => {
      door.style.boxShadow = '0 0 50px #ffdd77, 0 0 30px #ffeab0, inset 0 0 18px #ffffcc';
      door.style.background = 'rgba(189, 161, 15, 0.4)';
      door.textContent = '🚪✨ RADIANT DOOR ✨🚪';
    }, 2800);
  }

  // ---------- SHIMMER POEM — CALL TO ELDERS ----------
  function awakenPoem() {
    epicPoem.style.background = '#1a402ae0';
    epicPoem.style.boxShadow = 'inset 0 0 130px #baf0a0, 0 0 90px #f5ffb0';
    epicPoem.style.borderLeftColor = '#ffe087';
    setTimeout(() => {
      epicPoem.style.background = '#0d281be0';
      epicPoem.style.boxShadow = 'inset 0 0 60px #2b572b, 0 20px 40px black';
      epicPoem.style.borderLeftColor = '#ffea8a';
    }, 600);
  }

  // ---------- ORACLE SPEAKS — set random epic tale ----------
  function speakForbiddenTale(animal) {
    const talesArray = epicTales[animal] || ["✨ The ancient forest listens... try again ✨"];
    const randomIndex = Math.floor(Math.random() * talesArray.length);
    const tale = talesArray[randomIndex];
    oracle.innerHTML = `📜 FORBIDDEN TALE · <span>${tale}</span>`;
    // oracle epic flash
    oracle.style.background = '#113311f0';
    oracle.style.transition = '0.2s';
    setTimeout(() => { oracle.style.background = '#051007f0'; }, 350);
    glorifyDoor();
    awakenPoem();
  }

  // ---------- SHARE RELIC TREAT — WITH MAXIMUM EFFECT ----------
  function shareRelic(animal) {
    let treatMsg = relicResponses[animal] || "🐾 The hero offers you a gift of ancient kindness.";
    oracle.innerHTML = `🌀 RELIC SHARED · <span>${treatMsg}</span>`;

    // SPECIAL STREAM GLORY IF DEER
    if (animal === 'deer') {
      streamShrine.style.background = '#206640e0';
      streamShrine.style.boxShadow = '0 0 100px #bef0b0, inset 0 0 70px #dbffb0';
      streamShrine.style.borderColor = '#fffec0';
      setTimeout(() => {
        streamShrine.style.background = 'linear-gradient(145deg, #1f4a2a, #0c2b15)';
        streamShrine.style.boxShadow = 'inset 0 0 60px #326a42, 0 0 70px #7fef9f';
        streamShrine.style.borderColor = '#aaffcc';
      }, 900);
    }

    // ANIMATE HERO CARD (relic pulse)
    const targetCard = Array.from(heroCards).find(card => card.dataset.animal === animal);
    if (targetCard) {
      targetCard.style.background = 'linear-gradient(165deg, #4a7840, #2b552b)';
      targetCard.style.borderColor = '#fff3a0';
      targetCard.style.boxShadow = '0 0 90px #f5ffa0';
      setTimeout(() => {
        targetCard.style.background = 'linear-gradient(165deg, #1c3922, #0a1f0e)';
        targetCard.style.borderColor = '#eaf0a0';
        targetCard.style.boxShadow = '0 0 40px #89c489, inset 0 -10px 20px #000000b0';
      }, 450);
    }

    glorifyDoor();
    awakenPoem();
  }

  // ---------- GLORIOUS INIT ON PAGE LOAD ----------
  window.addEventListener('load', function() {
    // initial explosion of light
    glorifyDoor();
    awakenPoem();
    oracle.innerHTML = '🌳✨ "THE BOOK OF FOREST SECRETS AWAKENS — SEEK THE HEROES, CLAIM THEIR TALES" ✨🌳';
    // stream shrine initial pulse
    streamShrine.style.boxShadow = '0 0 120px #b6ffb0';
    setTimeout(() => {
      streamShrine.style.boxShadow = 'inset 0 0 60px #326a42, 0 0 70px #7fef9f';
    }, 1000);
  });

  // ---------- CARD CLICK — HERO TELLS EPIC TALE ----------
  heroCards.forEach(card => {
    card.addEventListener('click', function(e) {
      if (e.target.classList.contains('relic-treat') || e.target.closest('.relic-treat')) {
        return;   // let treat button handle itself
      }
      const animal = this.dataset.animal;
      if (animal) speakForbiddenTale(animal);
      awakenPoem();
    });
  });

  // ---------- RELIC TREAT BUTTONS ----------
  treatButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const parent = this.closest('.hero-card');
      if (!parent) return;
      const animal = parent.dataset.animal;
      shareRelic(animal);
    });
  });

  // ---------- DOUBLE CLICK POEM — UNLOCK ELDER SPIRIT ----------
  epicPoem.addEventListener('dblclick', function() {
    const animals = ['fox', 'bear', 'deer'];
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    speakForbiddenTale(randomAnimal);
    oracle.innerHTML = oracle.innerHTML + ' ⚡ (ANCIENT SUMMONS)';
    glorifyDoor();
    // extra stream shimmer
    streamShrine.style.background = '#2e6a3ee0';
    setTimeout(() => {
      streamShrine.style.background = 'linear-gradient(145deg, #1f4a2a, #0c2b15)';
    }, 500);
  });

  // ---------- STREAM SHRINE — DEER'S ETERNAL OFFERING ----------
  streamShrine.addEventListener('click', function() {
    shareRelic('deer');
    oracle.innerHTML = '🦌🌀 ' + oracle.innerHTML + ' — THE STREAM SHOWS VISIONS OF FORGOTTEN WORLDS';
  });

  // ---------- DOOR GLOW ENHANCE ON HOVER OVER PORTAL ----------
  const portalHead = document.querySelector('.portal-header');
  if (portalHead) {
    portalHead.addEventListener('mouseenter', () => {
      door.style.boxShadow = '0 0 120px #ffefb0, inset 0 0 50px #ffffd0';
      door.style.background = 'rgba(220, 200, 20, 0.7)';
    });
    portalHead.addEventListener('mouseleave', () => {
      door.style.boxShadow = '0 0 50px #ffdd77, 0 0 30px #ffeab0, inset 0 0 18px #ffffcc';
      door.style.background = 'rgba(189, 161, 15, 0.4)';
      door.textContent = '🚪✨ RADIANT DOOR ✨🚪';
    });
  }

  // ---------- ADD EXTRA MYSTERY: TRIPLE CLICK ON DOOR (EASTER EGG) ----------
  let doorClickCount = 0;
  door.addEventListener('click', function() {
    doorClickCount++;
    if (doorClickCount === 3) {
      oracle.innerHTML = '🌀✨ "YOU HAVE FOUND THE DOOR OF ALL SECRETS — THE FOREST BLESSES YOU" ✨🌀';
      door.style.boxShadow = '0 0 200px gold, 0 0 150px #fff0b0';
      door.style.background = 'radial-gradient(#ffe878, #dbaa33)';
      door.textContent = '🚪✨🚪 INFINITE DOOR 🚪✨🚪';
      doorClickCount = 0;
      glorifyDoor(); // reset later
    }
  });

})();
