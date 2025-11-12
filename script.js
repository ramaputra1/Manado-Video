// Index.html script:
/* ==== Quiz (QUESTIONS with images) + 3 results from window.allTours ==== */
(function () {
  var tries = 0;

  function boot() {
    var viewport = document.getElementById("viewport");
    var backBtn = document.getElementById("backBtn");
    var nextBtn = document.getElementById("nextBtn");
    var progressEl = document.getElementById("progress");

    // Retry until DOM ready
    if (!viewport || !backBtn || !nextBtn) {
      if (++tries < 80) return setTimeout(boot, 50);
      return;
    }

    /* --- Data: 3 QUESTIONS (2 choices each) --- */
    var QUESTIONS = [
      {
        id: "vibe",
        title: "Beach or Mountain?",
        subtitle: "Choose the mood that excites you most.",
        choices: [
          {
            label: "Beach",
            img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.1.0&fm=jpg&q=60&w=3000",
            tags: ["adventure", "volcano", "mountain", "active"],
          },
          {
            label: "Mountain",
            img: "https://th-thumbnailer.cdn-si-edu.com/ULMVK0k9tuy13xSsDRi03U11p3I=/1280x1280/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/19/00/19000e55-a414-4fde-b790-5e5f9f4ff28b/hehuanshan-main-peak-istock-1148778056.jpg",
            tags: ["culture", "foodie", "city", "market"],
          },
        ],
      },
      {
        id: "water",
        title: "Comfort or Adventure?",
        subtitle: "Choose the mood that excites you most.",
        choices: [
          {
            label: "Comfort",
            img: "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/what_happens_to_your_body_when_you_relax_slideshow/1800ss_getty_rf_woman_in_hammock_reading_book.jpg?resize=728px:*&output-quality=75",
            tags: ["underwater", "dive", "active"],
          },
          {
            label: "Adventure",
            img: "https://e1.pxfuel.com/desktop-wallpaper/192/148/desktop-wallpaper-travel-nature-advanture.jpg",
            tags: ["relax", "scenic"],
          },
        ],
      },
      {
        id: "pace",
        title: "Social or Solo?",
        subtitle: "Choose the mood that excites you most.",
        choices: [
          {
            label: "Social",
            img: "https://cdn.hometogo.net/assets/media/pics/1200_628/6118c797221e8.jpg",
            tags: ["balanced", "culture", "nature"],
          },
          {
            label: "Solo",
            img: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1349106162-65a130757390f.jpg?crop=0.668xw:1.00xh;0.0459xw,0&resize=640:*",
            tags: ["active", "adventure"],
          },
        ],
      },
    ];

    // State
    var i = 0; // current index
    var answers = Array(QUESTIONS.length).fill(null); // 0 for first choice, 1 for second
    var pickedTags = {}; // aggregated tags by question id

    // Helpers
    function clamp(x, min, max) {
      return Math.max(min, Math.min(max, x));
    }

    function renderStep() {
      if (i >= QUESTIONS.length) return renderResult();

      var q = QUESTIONS[i];
      var selected = answers[i]; // 0/1 or null

      var html = `
        <div class="quiz-step">
          <div class="quiz-head">
            <div class="quiz-progress">${i + 1} / ${QUESTIONS.length}</div>
            <h3 class="quiz-title">${q.title}</h3>
            ${q.subtitle ? `<p class="q-sub">${q.subtitle}</p>` : ""}
          </div>

          <div class="choice-grid" role="list">
            ${q.choices
              .map(function (c, idx) {
                var isSel = selected === idx ? "is-selected" : "";
                return `
                <button class="choice-card ${isSel}" role="listitem"
                        data-choice="${idx}" aria-pressed="${isSel ? "true" : "false"}">
                  <img alt="${c.label}" loading="lazy" src="${c.img}">
                  <span class="choice-card__label">${c.label}</span>
                  <span class="choice-card__check" aria-hidden="true">✓</span>
                </button>`;
              })
              .join("")}
          </div>
        </div>
      `;
      viewport.innerHTML = html;

      // Enable/disable nav
      backBtn.disabled = i === 0;
      nextBtn.disabled = selected == null;

      // Bind choice clicks
      viewport.querySelectorAll(".choice-card").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          var val = Number(e.currentTarget.getAttribute("data-choice")); // 0 or 1
          answers[i] = val;

          // Mark selection
          viewport.querySelectorAll(".choice-card").forEach(function (b) {
            var isSel = Number(b.getAttribute("data-choice")) === val;
            b.classList.toggle("is-selected", isSel);
            b.setAttribute("aria-pressed", isSel ? "true" : "false");
          });

          // save tags for scoring (optional future use)
          pickedTags[q.id] = (q.choices[val] && q.choices[val].tags) || [];
          nextBtn.disabled = false;
        });

        // small tilt effect (optional)
        btn.addEventListener("mousemove", function (e) {
          var r = btn.getBoundingClientRect();
          var rx = ((e.clientX - r.left) / r.width - 0.5) * 6;
          var ry = ((e.clientY - r.top) / r.height - 0.5) * -6;
          btn.style.transform =
            "perspective(700px) rotateX(" +
            ry +
            "deg) rotateY(" +
            rx +
            "deg) translateY(-6px)";
        });
        btn.addEventListener("mouseleave", function () {
          btn.style.transform = "";
        });
      });

      // Progress bar
      if (progressEl) {
        var pct = Math.round((i / QUESTIONS.length) * 100);
        progressEl.style.width = pct + "%";
      }
    }

    function goTo(idx) {
      i = clamp(idx, 0, QUESTIONS.length);
      renderStep();
    }
    function back() {
      if (i > 0) goTo(i - 1);
    }
    function next() {
      if (i < QUESTIONS.length && answers[i] == null) return;
      goTo(i + 1);
    }

    backBtn.addEventListener("click", back);
    nextBtn.addEventListener("click", next);

    // --- Result mapping based on bit pattern (A=0, B=1) ---
    function bitIndex() {
      var idx = 0;
      for (var k = 0; k < answers.length; k++) {
        idx = (idx << 1) | (answers[k] || 0);
      }
      return idx; // 0..(2^n - 1)
    }

    function getAllTours() {
      // ONLY read user's manual data
      if (Array.isArray(window.allTours) && window.allTours.length > 0)
        return window.allTours;
      return null;
    }

    function renderResult() {
      var totalOutcomes = Math.pow(2, QUESTIONS.length);
      var idx = bitIndex();

      var tours = getAllTours();
      if (!tours) {
        viewport.innerHTML = `
          <div class="quiz-result">
            <h3>Set up your tours data</h3>
            <p class="muted">
              Hasil kuis diambil <strong>hanya</strong> dari <code>window.allTours</code> di <code>tours.js</code>.<br>
              Definisikan <code>window.allTours = [ ... ]</code> dulu.
            </p>
            <div class="result-actions">
              <a href="allTours.html" class="btn btn--primary">Buka All Tours</a>
            </div>
          </div>`;
        backBtn.disabled = true;
        nextBtn.disabled = true;
        if (progressEl) progressEl.style.width = "100%";
        return;
      }

      // Ambil 3 rekomendasi tersebar
      var picks = [];
      var offsets = [0, 7, 13]; // spread
      for (var p = 0; p < 3; p++) {
        var which = (idx + offsets[p]) % tours.length;
        picks.push(tours[which]);
      }

      var explainBits = answers
        .map(function (v) {
          return v === 1 ? "1" : "0";
        })
        .join("");
      var cards = picks
        .map(function (pick) {
          return `
          <article class="tour-card rec-card">
            <div class="tour-media">
              <img src="${pick.image}" alt="${pick.title}">
              ${pick.badge ? `<div class="tour-badge">${pick.badge}</div>` : ""}
            </div>
            <div class="tour-body">
              <h4 class="tour-title">${pick.title}</h4>
              <p class="tour-meta">
                ${pick.duration ? `⏱ ${pick.duration}` : ""}
                ${
                  pick.price
                    ? (pick.duration ? " • " : "") + `${pick.price}`
                    : ""
                }
              </p>
              <div class="tour-actions">
                <a href="#" class="btn btn--primary">Book Now</a>
                <a href="allTours.html" class="btn btn--ghost">Explore all</a>
              </div>
            </div>
          </article>`;
        })
        .join("");

      var html = `
        <div class="quiz-result">
          <h3>Your matches are ready</h3>
          <div class="results__grid">${cards}</div>
          <div class="result-actions">
            <button id="restartBtn" class="btn btn--light-outline">Restart quiz</button>
            <a href="allTours.html" class="btn btn--primary">Browse All Tours</a>
          </div>
        </div>`;
      viewport.innerHTML = html;

      backBtn.disabled = true;
      nextBtn.disabled = true;
      var restart = document.getElementById("restartBtn");
      if (restart)
        restart.addEventListener("click", function () {
          answers = Array(QUESTIONS.length).fill(null);
          i = 0;
          goTo(0);
          backBtn.disabled = true;
          nextBtn.disabled = true;
        });

      if (progressEl) progressEl.style.width = "100%";
    }

    // Start
    goTo(0);
  }

  boot();
})();
