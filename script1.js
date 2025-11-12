// Index.html script:
/* ==== CODEPEN-PROOF QUIZ INIT (3 questions only, same visuals) ==== */
(function () {
  var tries = 0;

  function boot() {
    var viewport = document.getElementById("viewport");
    var backBtn = document.getElementById("backBtn");
    var nextBtn = document.getElementById("nextBtn");

    // Retry until DOM ready
    if (!viewport || !backBtn || !nextBtn) {
      if (++tries < 80) return setTimeout(boot, 50);
      return;
    }

    /* --- Data (ONLY 3 QUESTIONS) --- */
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

    /* --- TOURS (unchanged) --- */
    var TOURS = [
      {
        id: "tangkoko",
        name: "Tangkoko Wildlife & Culture",
        img: "https://www.civitatis.com/f/indonesia/manado/tour-3-dias-tangkoko-589x392.jpg",
        location: "Tangkoko • Bitung",
        days: 4,
        priceUSD: 500,
        priceDisplay: "$500",
        tags: ["nature", "wildlife", "family", "culture", "balanced", "access"],
        highlights: [
          "Tarsier night walk",
          "Black macaques tracking",
          "Batik workshop",
        ],
      },
      {
        id: "minahasa",
        name: "Minahasa Highlands Explorer",
        img: "https://www.ganggaisland.com/wp-content/uploads/2018/09/Jetty-Pool-Aerial-1200x800.jpg",
        location: "Minahasa Highlands",
        days: 5,
        priceUSD: 650,
        priceDisplay: "$650",
        tags: [
          "adventure",
          "mountain",
          "volcano",
          "culture",
          "budget",
          "active",
        ],
        highlights: [
          "Mahawu crater hike",
          "Tondano & Linow lakes",
          "Village food tour",
        ],
      },
      {
        id: "bunaken",
        name: "Bunaken Reef & Relax",
        img: "https://murexdive.com/wp-content/uploads/2016/03/Green-Sea-Turtle-Portrait-at-Bunaken-National-Park-with-Murex-Manado.jpg",
        location: "Bunaken Marine Park",
        days: 6,
        priceUSD: 750,
        priceDisplay: "From $750",
        tags: ["underwater", "snorkel", "relax", "nature", "comfort", "beach"],
        highlights: [
          "2 days guided snorkeling",
          "Sunset cruise & beach picnic",
          "Seaside spa hour",
        ],
      },
      {
        id: "siladen",
        name: "Siladen Sanctuary Luxe Escape",
        img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1600&auto=format&fit=crop",
        location: "Siladen Island",
        days: 4,
        priceUSD: 1190,
        priceDisplay: "From $1,190",
        tags: ["luxury", "relax", "beach", "wellness", "underwater", "comfort"],
        highlights: [
          "Private villa",
          "Chef’s tasting dinner",
          "Private reef snorkel",
        ],
      },
    ];

    /* --- State --- */
    var step = 0;
    var answers = {};

    /* --- Functions --- */
    function renderStep() {
      var q = QUESTIONS[step];
      var selected = answers[q.id] && answers[q.id].label;

      var html =
        '<div class="q-head">' +
        '<div class="q-index">Question ' +
        (step + 1) +
        " of " +
        QUESTIONS.length +
        "</div>" +
        '<h3 class="q-title">' +
        q.title +
        "</h3>" +
        '<p class="q-sub">' +
        (q.subtitle || "") +
        "</p>" +
        "</div>" +
        '<div class="choice-grid" role="list">';
      for (var i = 0; i < q.choices.length; i++) {
        var c = q.choices[i];
        html +=
          '<button class="choice-card ' +
          (selected === c.label ? "is-selected" : "") +
          '" role="listitem" data-idx="' +
          i +
          '" aria-pressed="' +
          (selected === c.label ? "true" : "false") +
          '">' +
          '<img alt="' +
          c.label +
          '" loading="lazy" src="' +
          c.img +
          '">' +
          '<span class="choice-card__label">' +
          c.label +
          "</span>" +
          '<span class="choice-card__check" aria-hidden="true">✓</span>' +
          "</button>";
      }
      html += "</div>";
      viewport.innerHTML = html;

      backBtn.disabled = step === 0;
      nextBtn.disabled = !selected;

      var cards = viewport.querySelectorAll(".choice-card");
      for (var j = 0; j < cards.length; j++) {
        (function (btn, idx) {
          btn.addEventListener("click", function () {
            var all = viewport.querySelectorAll(".choice-card");
            for (var k = 0; k < all.length; k++) {
              all[k].classList.remove("is-selected");
              all[k].setAttribute("aria-pressed", "false");
            }
            btn.classList.add("is-selected");
            btn.setAttribute("aria-pressed", "true");

            var choice = QUESTIONS[step].choices[idx];
            answers[QUESTIONS[step].id] = {
              label: choice.label,
              tags: choice.tags,
            };
            nextBtn.disabled = false;
          });

          // tilt effect
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
        })(cards[j], j);
      }
    }

    function computeAndRenderResults() {
      var weights = {};
      Object.keys(answers).forEach(function (k) {
        answers[k].tags.forEach(function (t) {
          weights[t] = (weights[t] || 0) + 1;
        });
      });
      if (weights.luxury) weights.luxury += 1;
      if (weights.comfort) weights.comfort += 1;
      if (weights.budget) weights.budget += 1;

      var scored = TOURS.map(function (t) {
        var s = 0;
        t.tags.forEach(function (tag) {
          if (weights[tag]) s += weights[tag];
        });
        if (
          (weights.family && t.tags.indexOf("family") > -1) ||
          (weights.couple &&
            (t.tags.indexOf("relax") > -1 || t.tags.indexOf("comfort") > -1))
        )
          s += 0.5;
        t.score = s;
        return t;
      }).sort(function (a, b) {
        return b.score - a.score;
      });

      var top3 = scored.slice(0, 3).sort(function (a, b) {
        return a.priceUSD - b.priceUSD;
      });

      var html =
        '<div class="results__head">' +
        '<h3 class="q-title">Your Matches</h3>' +
        '<div class="results__actions">' +
        '<button class="btn btn--light-outline" id="retake">Retake Quiz</button>' +
        '<a class="btn  brn" href="#tours">Browse All Tours</a>' +
        "</div>" +
        "</div>" +
        '<p class="q-sub">You can retake the quiz anytime.</p>' +
        '<div class="results__grid" role="list">';
      for (var i = 0; i < top3.length; i++) {
        var t = top3[i];
        html +=
          '<article class="tour-card" role="listitem">' +
          '<div class="tour-media"><img src="' +
          t.img +
          '" alt="' +
          t.name +
          '"><div class="tour-badge">' +
          t.days +
          " days</div></div>" +
          '<div class="tour-body">' +
          '<h3 class="tour-title">' +
          t.name +
          "</h3>" +
          '<p class="tour-meta">' +
          t.location +
          " • <strong>" +
          t.priceDisplay +
          "</strong></p>" +
          '<ul class="tour-highlights">' +
          t.highlights
            .map(function (h) {
              return "<li>" + h + "</li>";
            })
            .join("") +
          "</ul>" +
          '<div class="tour-actions"><a href="#tours" class="btn btn--primary aa">Learn more</a></div>' +
          "</div>" +
          "</article>";
      }
      html += "</div>";
      viewport.innerHTML = html;

      var r = document.getElementById("retake");
      if (r)
        r.addEventListener("click", function () {
          answers = {};
          step = 0;
          goTo(0);
        });

      backBtn.disabled = true;
      nextBtn.disabled = true;
    }

    function next() {
      if (step < QUESTIONS.length - 1) {
        step++;
        renderStep();
      } else {
        step = QUESTIONS.length;
        computeAndRenderResults();
      }
    }

    function back() {
      if (step > 0) {
        step--;
        renderStep();
      }
    }

    function goTo(i) {
      step = Math.max(0, Math.min(i, QUESTIONS.length));
      if (step === QUESTIONS.length) {
        computeAndRenderResults();
        return;
      }
      renderStep();
    }

    backBtn.addEventListener("click", back);
    nextBtn.addEventListener("click", next);

    goTo(0);
  }

  boot();
})();

// All Tours Script:
