/* =========================
   All Tours (placeholder generator + modal)
   ========================= */

(function () {
  // Config: how many placeholder tours to generate
  const COUNT = 120;

  // Utility: pad numbers like 003
  const pad = (n, size = 3) => String(n).padStart(size, "0");

  // Utility: build placeholder image (unique but lightweight)
  const imgFor = (id) => `https://picsum.photos/seed/tour${id}/800/600`;

  // Generate empty tours the user can edit later.
  // Fields left intentionally blank/null so you can fill them in:
  // title, badge, duration, price, highlights, description
  // const allTours = Array.from({ length: COUNT }, (_, i) => {
  //   const id = i + 1;
  //   return {
  //     id,
  //     slug: `tour-${pad(id)}`,
  //     title: `Tour ${pad(id)}`, // Edit me
  //     badge: "", // Edit me (e.g., "Most Popular", "New", "Family")
  //     duration: "", // Edit me (e.g., "Full Day", "3 Hours")
  //     price: "", // Edit me (e.g., "$79 / person")
  //     image: imgFor(id), // You can replace with your own image URL
  //     highlights: [], // Edit me (e.g., ["Snorkeling", "Island Hopping", "Local Lunch"])
  //     description: "", // Edit me – full paragraph of details
  //   };
  // });

  window.allTours = [
    // 🏔 MOUNTAIN • ADVENTURE • GUIDED

    {
      id: 1,

      slug: "tangkoko-wildlife-culture-5d",

      title: "Tangkoko Wildlife & Culture",

      duration: "5 days",

      price: "$650",

      image:
        "https://www.civitatis.com/f/indonesia/manado/tour-3-dias-tangkoko-589x392.jpg",

      highlights: [
        "Tarsier night walk",
        "Black macaques",
        "Batik workshop",
        "Village dinner",
      ],

      description:
        "Guided rainforest walks in Tangkoko plus hands-on culture and village hospitality.",
    },

    {
      id: 2,

      slug: "mahawu-crater-expedition-6d",

      title: "Mahawu Crater Expedition",

      duration: "6 days",

      price: "$720",

      image:
        "https://www.manadosafaris.com/wp/wp-content/uploads/2024/01/Mahawu-2023.jpg",

      highlights: [
        "Volcano rim hike",
        "Hot springs",
        "Tomohon markets",
        "Lakeside lunch",
      ],

      description:
        "Climb Mahawu, soak in hot springs, and sample highland flavors with a local guide.",
    },

    {
      id: 3,

      slug: "minahasa-highlands-explorer-6d",

      title: "Minahasa Highlands Explorer",

      duration: "6 days",

      price: "$780",

      image:
        "https://res.cloudinary.com/tourhq/image/upload/fl_progressive,f_auto,h_507,w_900,g_auto,c_fill,q_auto/j39ci7mca7rz5urddu0o",

      highlights: [
        "Tondano & Linow",
        "Crater paths",
        "Village food tour",
        "Craft stops",
      ],

      description:
        "A guided circuit of lakes, ridges, and Minahasan cuisine across the highlands.",
    },

    // 🏔 MOUNTAIN • ADVENTURE • INDEPENDENT

    {
      id: 4,

      slug: "klabat-sunrise-ascent-5d",

      title: "Klabat Sunrise Ascent",

      duration: "5 days",

      price: "$620",

      image:
        "https://www.wandernesia.com/wp-content/uploads/2019/10/Klabat-Trekking-source-@meilanyrawung.jpg",

      highlights: [
        "Summit sunrise",
        "Base homestay",
        "Porter support",
        "Trail maps",
      ],

      description:
        "Self-paced ascent of North Sulawesi’s highest peak with local support and homestay nights.",
    },

    {
      id: 5,

      slug: "soputan-volcano-camp-5d",

      title: "Soputan Volcano Camp",

      duration: "5 days",

      price: "$690",

      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/54/18/c2/aeseput-in-front-soputan.jpg?w=900&h=500&s=1",

      highlights: [
        "Active cone trek",
        "Wilderness camp",
        "Scout guide",
        "Stargazing",
      ],

      description:
        "Backcountry nights and volcanic views on a lightly guided, independence-friendly route.",
    },

    {
      id: 6,

      slug: "minahasa-trekking-loop-6d",

      title: "Minahasa Trekking Loop",

      duration: "6 days",

      price: "$740",

      image:
        "https://www.alltrails.com/mugen/image/location-app-router?url=https%3A%2F%2Fimages.alltrails.com%2FeyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTA5OTczODQ1L2QzYjBkMWU5NTRkYjhhYzM5ZGNkNDQ5ZTkzM2E4MzUwLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6MTA4MCwiaGVpZ2h0Ijo3MDAsImZpdCI6ImNvdmVyIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19&w=3840&q=90",

      highlights: [
        "Lake circuits",
        "Plantation trails",
        "Local stays",
        "Flexible pace",
      ],

      description:
        "Village-to-village hiking linking lakes and farms; your schedule, our logistics.",
    },

    // 🏔 MOUNTAIN • COMFORT • GUIDED

    {
      id: 7,

      slug: "tomohon-spa-nature-5d",

      title: "Tomohon Spa & Nature Retreat",

      duration: "5 days",

      price: "$700",

      image:
        "https://www.highlandresort.info/wp/wp-content/uploads/2019/03/HighlandSuite03b.jpg",

      highlights: [
        "Mountain resort",
        "Hot springs",
        "Tea tasting",
        "Scenic walks",
      ],

      description:
        "Unwind in cool mountain air with gentle guided outings and restorative spa time.",
    },

    {
      id: 8,

      slug: "minahasa-culture-escape-6d",

      title: "Minahasa Culture Escape",

      duration: "6 days",

      price: "$760",

      image:
        "https://images.hive.blog/1200x630/https://images.hive.blog/DQmZ83uC3YXVDJFtBwCa311yFkrzJj22dWubbwkPvUdRTEp/IMG_7999.jpg",

      highlights: [
        "Woloan houses",
        "Cooking class",
        "Lake Linow café",
        "Craft villages",
      ],

      description:
        "Comfortable touring through heritage sites and kitchens of the Minahasan heartland.",
    },

    {
      id: 9,

      slug: "highland-heritage-stay-6d",

      title: "Highland Heritage Stay",

      duration: "6 days",

      price: "$820",

      image:
        "https://www.manadosafaris.com/wp/wp-content/uploads/2016/01/Highland-Resort-Main-Picture.png",

      highlights: [
        "Boutique eco-lodge",
        "Traditional dance",
        "Market strolls",
        "Countryside drives",
      ],

      description:
        "Slow-travel comforts, culture evenings, and curated nature walks from a cozy base.",
    },

    // 🏔 MOUNTAIN • COMFORT • INDEPENDENT

    {
      id: 10,

      slug: "linow-lake-hideaway-5d",

      title: "Lake Linow Hideaway",

      duration: "5 days",

      price: "$600",

      image:
        "https://images.hive.blog/DQmS9Ky79aeneoNh66qu22Lje36XAYissVttTLeXvAmTue9/428365616_837859075055336_7950079373387204889_n.jpg",

      highlights: [
        "Color-changing lake",
        "Café terrace",
        "Short hikes",
        "Private transfers",
      ],

      description:
        "A restful highland base with optional strolls and coffee stops overlooking Lake Linow.",
    },

    {
      id: 11,

      slug: "tomohon-slow-week-5d",

      title: "Tomohon Slow Week",

      duration: "5 days",

      price: "$620",

      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/65/65/94/kali-waterfall.jpg?w=1200&h=700&s=1",

      highlights: [
        "Flower market",
        "Sunset viewpoints",
        "Local dining",
        "Driver on call",
      ],

      description:
        "Lightly structured days to relax, sightsee, and eat well—on your own rhythm.",
    },

    {
      id: 12,

      slug: "mountain-cafe-trail-5d",

      title: "Mountain Café Trail",

      duration: "5 days",

      price: "$650",

      image:
        "https://bobocabin-bunaken-hills-wori.manado-hotels.com/data/Pics/OriginalPhoto/15083/1508314/1508314897/bobocabin-bunaken-hills-manado-manado-pic-1.JPEG",

      highlights: [
        "Coffee farms",
        "Artisan stops",
        "Scenic drives",
        "Curated map",
      ],

      description:
        "Self-drive or driver-assisted café-hopping and handicraft browsing across the hills.",
    },

    // 🏖 BEACH • ADVENTURE • GUIDED

    {
      id: 13,

      slug: "bunaken-reef-relax-6d",

      title: "Bunaken Reef & Relax",

      duration: "6 days",

      price: "$880",

      image:
        "https://images.unsplash.com/photo-1696855179895-207976ec1a97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVuYWtlbnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",

      highlights: [
        "2 days guided snorkeling",
        "Sunset cruise",
        "Seaside spa",
        "Beach picnic",
      ],

      description:
        "Two reef days in Bunaken Marine Park, a golden-hour cruise, and a restorative spa session.",
    },

    {
      id: 14,

      slug: "likupang-island-hop-5d",

      title: "Likupang Island Hop Adventure",

      duration: "5 days",

      price: "$820",

      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2021/02/26/0a6e841f-29b6-4a87-9134-53591b14b50b-1614317637981-6d65a76d734e5a87fe9733f8946a37f5.jpg",

      highlights: [
        "Lihaga Island",
        "Pulisan cliffs",
        "Boat day",
        "Beach picnic",
      ],

      description:
        "Skippered island days with snorkeling, cliff walks, and quiet bays along the Likupang coast.",
    },

    {
      id: 15,

      slug: "discovery-dive-bunaken-5d",

      title: "Bunaken Discovery Dive Week",

      duration: "5 days",

      price: "$900",

      image:
        "https://sharkiesdivers.com/wp-content/uploads/2025/07/pexels-tomfisk-4610203.jpg",

      highlights: [
        "Intro scuba course",
        "Wall dives",
        "Marine briefing",
        "Boat lunches",
      ],

      description:
        "Beginner-friendly dive progression with pro instructors on Bunaken’s famous walls.",
    },

    // 🏖 BEACH • ADVENTURE • INDEPENDENT

    {
      id: 16,

      slug: "lihaga-private-island-5d",

      title: "Lihaga Private Island Days",

      duration: "5 days",

      price: "$640",

      image:
        "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/10/7d/3e/46.jpg",

      highlights: [
        "Chartered boat",
        "DIY snorkel time",
        "Cooler & gear",
        "Flexible schedule",
      ],

      description:
        "Your boat, your timetable—snorkel and lounge on powder-sand Lihaga with light support.",
    },

    {
      id: 17,

      slug: "pulisan-hike-swim-5d",

      title: "Pulisan Hike & Swim",

      duration: "5 days",

      price: "$610",

      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/51/20/09/the-surounding.jpg?w=900&h=500&s=1",

      highlights: [
        "Clifftop trails",
        "Paal Beach swims",
        "Rustic cabin",
        "Local seafood",
      ],

      description:
        "Independent coastal trekking balanced with lazy beach time and simple seaside stays.",
    },

    {
      id: 18,

      slug: "manado-bay-kayak-5d",

      title: "Manado Bay Kayak Circuit",

      duration: "5 days",

      price: "$590",

      image:
        "https://thumb.viva.id/vivabali/1265x711/2025/10/29/6901ef9eeab89-view-sunset-terbaik-di-manado-bay-kawasan-mega-mas_bali.jpg",

      highlights: ["Mangrove paddling", "Lagoons", "Birdwatching", "Route app"],

      description:
        "A mellow kayak-forward itinerary with mapped routes and optional guide check-ins.",
    },

    // 🏖 BEACH • COMFORT • GUIDED

    {
      id: 19,

      slug: "seaside-serenity-5d",

      title: "Seaside Serenity Retreat",

      duration: "5 days",

      price: "$920",

      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/11/22/2b/86/mercure-manado-tateli.jpg",

      highlights: [
        "Oceanfront villa",
        "Daily spa",
        "Private bay cruise",
        "Chef dinner",
      ],

      description:
        "Soft-adventure touches wrapped in villa comfort, spa rituals, and sunset sailing.",
    },

    {
      id: 20,

      slug: "luxury-likupang-escape-6d",

      title: "Luxury Likupang Escape",

      duration: "6 days",

      price: "$1,050",

      image:
        "https://i0.wp.com/pinterpoin.com/wp-content/uploads/2023/05/image-12.png?ssl=1",

      highlights: [
        "Private villa",
        "Butler service",
        "Island tour",
        "Gourmet meals",
      ],

      description:
        "A polished coastal stay with curated day trips and unhurried beachfront downtime.",
    },

    {
      id: 21,

      slug: "siladen-resort-long-weekend-5d",

      title: "Siladen Resort Long Weekend",

      duration: "5 days",

      price: "$890",

      image:
        "https://d2p1cf6997m1ir.cloudfront.net/media/thumbnails/e1/ec/e1ec2a7525d3bbb2bad02b02eb26024d.webp?s=789c0dcc811183200c00c089628028c1712221ad5e4bb8cafe577f80ff363d05c7dba7df982aae82ca286c116b211f138841026c47a544c6a99069dc8be51692b150b403eef323da3ae8cf7b831c28c390eef0dc13e29e79b9c6eb0fce102083&g=31393230&p=789c3d8cb10a42310c45ff25aedd5ca4e3037115174789692a0f6253d31614f1df0d05bddbb9f772de40a615221097ce0601b2da1dbb37e7fd72747e0c94b5bf20eeb6014845ad5524f6c3e9b0f83e6a2314e76e83c3d45df509b10c9100a6a3244e3fac98d25a6e10334ae33f5fa6d7959b3c039f2fedb9330c&sign=39a59afd59c0c92c7de4377a9b7178d140164a8e49a3e3d837e2dd8ae32708adeaf207dbc9eb766f987445c7a5f6cdf8112ef4d51da491e907dad800cc5354f6",

      highlights: [
        "Boutique island resort",
        "Infinity pool",
        "Beach dining",
        "Optional dives",
      ],

      description:
        "Island comforts with reef access at your doorstep and candlelit dinners in the sand.",
    },

    // 🏖 BEACH • COMFORT • INDEPENDENT

    {
      id: 22,

      slug: "north-sulawesi-coastal-roadtrip-5d",

      title: "North Sulawesi Coastal Road Trip",

      duration: "5 days",

      price: "$680",

      image:
        "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/79000/79888-Manado-And-Vicinity.jpg",

      highlights: [
        "Self-drive or driver",
        "Hidden coves",
        "Seafood stops",
        "Curated playlist & map",
      ],

      description:
        "A flexible coastal loop linking quiet beaches, village cafés, and scenic headlands.",
    },

    {
      id: 23,

      slug: "benteng-bay-chill-5d",

      title: "Benteng Bay Chill Week",

      duration: "5 days",

      price: "$560",

      image:
        "https://www.kelanabykayla.com/wp-content/uploads/2016/05/IMG_8681.jpg",

      highlights: [
        "Cozy homestay",
        "Beach hammocks",
        "Evening BBQ",
        "Coffee spots",
      ],

      description:
        "Settle into a friendly bay community—lazy days, easy swims, and sunset grills.",
    },

    {
      id: 24,

      slug: "sunset-scooter-coast-5d",

      title: "Sunset Scooter Coast",

      duration: "5 days",

      price: "$570",

      image:
        "https://t3.ftcdn.net/jpg/04/69/96/78/360_F_469967892_bOPit1N1Z7d1yIeoTQKqqAxA8sg349rr.jpg",

      highlights: [
        "Scooter rental",
        "Café hopping",
        "Coastal viewpoints",
        "Photo stops",
      ],

      description:
        "Light-touch logistics and a great route for independent sunset chasers along the shore.",
    },
  ];

  // window.allTours = [
  //   {
  //     id: 1,
  //     slug: "bunaken-snorkeling",
  //     title: "Bunaken Snorkeling Adventure 1",
  //     // badge: "Best Seller",
  //     duration: "Full Day",
  //     price: "$75 / person",
  //     image: "img/bunaken.jpg",
  //     highlights: ["Boat Trip", "Coral Reefs", "Lunch Included"],
  //     description:
  //       "Nikmati pengalaman snorkeling di Bunaken dengan pemandu lokal.",
  //   },
  //   {
  //     id: 2,
  //     slug: "tangkoko-wildlife",
  //     title: "Tangkoko Wildlife & Culture2",
  //     // badge: "Wildlife Lovers",
  //     duration: "Half Day",
  //     price: "$60 / person",
  //     image: "img/tangkoko.jpg",
  //     highlights: ["Tarsius spotting", "Jungle Trek", "Local Guide"],
  //     description: "Jelajahi hutan Tangkoko untuk melihat Tarsius.",
  //   },
  //   {
  //     id: 3,
  //     slug: "bunaken-snorkeling",
  //     title: "Bunaken Snorkeling Adventure3",
  //     // badge: "Best Seller",
  //     duration: "Full Day",
  //     price: "$75 / person",
  //     image: "img/bunaken.jpg",
  //     highlights: ["Boat Trip", "Coral Reefs", "Lunch Included"],
  //     description:
  //       "Nikmati pengalaman snorkeling di Bunaken dengan pemandu lokal.",
  //   },
  //   {
  //     id: 4,
  //     slug: "tangkoko-wildlife",
  //     title: "Tangkoko Wildlife & Culture4",
  //     // badge: "Wildlife Lovers",
  //     duration: "Half Day",
  //     price: "$60 / person",
  //     image: "img/tangkoko.jpg",
  //     highlights: ["Tarsius spotting", "Jungle Trek", "Local Guide"],
  //     description: "Jelajahi hutan Tangkoko untuk melihat Tarsius.",
  //   },
  //   {
  //     id: 5,
  //     slug: "bunaken-snorkeling",
  //     title: "Bunaken Snorkeling Adventure5",
  //     badge: "Best Seller",
  //     duration: "Full Day",
  //     price: "$75 / person",
  //     image: "img/bunaken.jpg",
  //     highlights: ["Boat Trip", "Coral Reefs", "Lunch Included"],
  //     description:
  //       "Nikmati pengalaman snorkeling di Bunaken dengan pemandu lokal.",
  //   },
  //   {
  //     id: 6,
  //     slug: "tangkoko-wildlife6",
  //     title: "Tangkoko Wildlife & Culture",
  //     badge: "Wildlife Lovers",
  //     duration: "Half Day",
  //     price: "$60 / person",
  //     image: "img/tangkoko.jpg",
  //     highlights: ["Tarsius spotting", "Jungle Trek", "Local Guide"],
  //     description: "Jelajahi hutan Tangkoko untuk melihat Tarsius.",
  //   },
  //   {
  //     id: 7,
  //     slug: "tangkoko-wildlife",
  //     title: "Tangkoko Wildlife & Culture7",
  //     badge: "Wildlife Lovers",
  //     duration: "Half Day",
  //     price: "$60 / person",
  //     image: "img/tangkoko.jpg",
  //     highlights: ["Tarsius spotting", "Jungle Trek", "Local Guide"],
  //     description: "Jelajahi hutan Tangkoko untuk melihat Tarsius.",
  //   },
  //   {
  //     id: 8,
  //     slug: "tangkoko-wildlife",
  //     title: "Tangkoko Wildlife & Culture8",
  //     badge: "Wildlife Lovers",
  //     duration: "Half Day",
  //     price: "$60 / person",
  //     image: "img/tangkoko.jpg",
  //     highlights: ["Tarsius spotting", "Jungle Trek", "Local Guide"],
  //     description: "Jelajahi hutan Tangkoko untuk melihat Tarsius.",
  //   },
  // ];

  // Expose for manual editing in the console if desired
  window.allTours = allTours;

  // Rendering
  function renderAllTours(gridId = "allToursGrid") {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    const frag = document.createDocumentFragment();

    allTours.forEach((t) => {
      const card = document.createElement("article");
      card.className = "tour-card";
      card.setAttribute("role", "listitem");
      card.setAttribute("tabindex", "0");
      card.innerHTML = `
        <div class="tour-media">
          <img src="${t.image}" alt="${t.title}">
          ${t.badge ? `<div class="tour-badge">${t.badge}</div>` : ""}
        </div>
        <div class="tour-body">
          <h3 class="tour-title">${t.title || "Untitled Tour"}</h3>
          <p class="tour-meta">
            ${t.duration ? `⏱ ${t.duration}` : ""}
            ${t.price ? (t.duration ? " • " : "") + `${t.price}` : ""}
          </p>
          ${
            Array.isArray(t.highlights) && t.highlights.length
              ? `<ul class="tour-highlights">${t.highlights
                  .map((h) => `<li>${h}</li>`)
                  .join("")}</ul>`
              : ""
          }
          <div class="tour-actions">
            <button class="btn btn--primary">View details</button>
            <button class="btn btn--ghost">Add to wishlist</button>
          </div>
        </div>
      `;

      const open = () => openModal(t);
      card.addEventListener("click", (e) => {
        // Avoid double opening when clicking the close button inside modal
        const tag = (e.target && e.target.tagName) || "";
        if (tag.toLowerCase() === "button") e.preventDefault();
        open();
      });
      card.addEventListener("keypress", (e) => {
        if (e.key === "Enter") open();
      });

      frag.appendChild(card);
    });

    grid.innerHTML = "";
    grid.appendChild(frag);
  }

  // Modal
  function openModal(tour) {
    closeModal(); // ensure only one is open

    const modal = document.createElement("div");
    modal.className = "modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.innerHTML = `
      <div class="modal__backdrop" data-close="true"></div>
      <div class="modal__panel">
        <button class="modal__close" aria-label="Close" title="Close">&times;</button>
        <div class="modal__media">
          <img src="${tour.image}" alt="${tour.title}">
        </div>
        <div class="modal__body">
          <h3>${tour.title || "Untitled Tour"}</h3>
          <p class="tour-meta">
            ${tour.duration ? `⏱ ${tour.duration}` : ""}
            ${tour.price ? (tour.duration ? " • " : "") + `${tour.price}` : ""}
          </p>
          <div class="muted" style="margin: .5rem 0 1rem;">
            ${
              tour.description && tour.description.trim()
                ? tour.description
                : "Add your full tour description here in <code>tours.js</code> (look for <strong>description</strong>)."
            }
          </div>
          ${
            Array.isArray(tour.highlights) && tour.highlights.length
              ? `<h4 style="margin:.4rem 0 .2rem;">Highlights</h4>
                 <ul class="tour-highlights">
                   ${tour.highlights.map((h) => `<li>${h}</li>`).join("")}
                 </ul>`
              : ""
          }
          <div class="modal__actions">
            <a href="#" class="btn btn--primary">Book now</a>
            <a href="#" class="btn btn--ghost">Contact us</a>
          </div>
        </div>
      </div>
    `;

    // Close interactions
    modal.addEventListener("click", (e) => {
      if (e.target.matches("[data-close], .modal__close")) {
        closeModal();
      }
    });
    document.addEventListener("keydown", escToClose);
    function escToClose(e) {
      if (e.key === "Escape") closeModal();
    }
    modal._cleanup = () => document.removeEventListener("keydown", escToClose);

    document.body.appendChild(modal);
  }

  function closeModal() {
    const m = document.querySelector(".modal");
    if (m) {
      if (m._cleanup) m._cleanup();
      m.remove();
    }
  }

  // Auto-run on the All Tours page
  document.addEventListener("DOMContentLoaded", () => {
    renderAllTours("allToursGrid");
  });
})();
