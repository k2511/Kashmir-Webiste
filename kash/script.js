// Panel and Content
const panel = document.getElementById("panel");
const panelContent = document.getElementById("panelContent");
const closePanelBtn = document.getElementById("closePanel");
const overlay = document.getElementById("overlay");

const pages = [
  {
    title: "✨ Incredible Views",
    details: `<p>Explore breathtaking scenic landscapes across Kashmir.</p>`,
  },
  {
    title: `<span style="font-size:13px;font-weight:bold;color:#2c3e50;display:flex;align-items:center;border:1px solid red;padding:13px 0px 1px 46px ;width:55%;">🍽️ Kashmiri Wazwan Spots</span>`,
    details: `
      <div class="panel-item">
        <img src="images/ah1.jpg" alt="Ahdoos Restaurant">
        <div class="panel-info">
          <h3>Ahdoos Restaurant</h3>
          <p>⭐ 4.1 (3.9K) · ₹₹ · Kashmiri</p>
          <p>Residency Road · Cosy eatery for Kashmiri cuisine</p>
          <a href="https://www.google.com/maps/place/Ahdoos+Restaurant/@34.0734,74.8195,17z" target="_blank" class="map-btn">📍 View on Maps</a>
        </div>
      </div>
      <div class="panel-item">
        <img src="images/ah2.jpg" alt="Ahdoos Hotel">
        <div class="panel-info">
          <h3>Ahdoos Hotel</h3>
          <p>⭐ 4.1 (2K) · Hotel</p>
          <p>Residency Road · Riverside option with elegant rooms</p>
          <a href="https://www.google.com/maps/place/Ahdoos+Hotel/@34.0732,74.8194,17z" target="_blank" class="map-btn">📍 View on Maps</a>
        </div>
      </div>
      <div class="panel-item">
        <img src="images/Shanaya.jpg" alt="Shanaya Restaurant">
        <div class="panel-info">
          <h3>Shanaya Restaurant</h3>
          <p>⭐ 4.3 (3.9K) · ₹₹ · Kashmiri</p>
          <p>Ghat No.2, boulevard, Srinagar, Jammu and Kashmir 190001</p>
          <a href="https://www.google.com/maps/place/Shanaya+Restaurant/@34.0734,74.8195,17z" target="_blank" class="map-btn">📍 View on Maps</a>
        </div>
      </div>
      <div class="panel-item">
        <img src="images/kar.jpg" alt="Kareema Restaurant">
        <div class="panel-info">
          <h3>Kareema Restaurant</h3>
          <p>⭐ 4.0 (3.9K) · ₹₹ · Kashmiri</p>
          <p>Residency Road, Regal Chowk, Munshi Bagh, Srinagar, Jammu and Kashmir 190001</p>
          <a href="https://www.google.com/maps/place/Kareema+Restaurant/@34.0734,74.8195,17z" target="_blank" class="map-btn">📍 View on Maps</a>
        </div>
      </div>
      <div class="panel-item">
        <img src="images/sal.jpg" alt="Salam E Wazwan">
        <div class="panel-info">
          <h3>SALAM E WAZWAN</h3>
          <p>⭐ 4.2 (3.9K) · ₹₹ · Kashmiri</p>
          <p>garden, Shalimar, Srinagar, Jammu and Kashmir 190025</p>
          <a href="https://www.google.com/maps/place/Salam+E+Wazwan/@34.0734,74.8195,17z" target="_blank" class="map-btn">📍 View on Maps</a>
        </div>
      </div>
      <div class="panel-item">
        <img src="images/mug.png" alt="Mughal Darbar">
        <div class="panel-info">
          <h3>Mughal Darbar</h3>
          <p>⭐ 3.7 (3.9K) · ₹₹ · Kashmiri</p>
          <p>ground floor, Residency Road, near gpo, Munshi Bagh, Srinagar, Jammu and Kashmir 190001</p>
          <a href="https://www.google.com/maps/place/Mughal+Darbar/@34.0734,74.8195,17z" target="_blank" class="map-btn">📍 View on Maps</a>
        </div>
      </div>
    `,
  },
  {
    title: "🚗 Family Road Trip",
    details: `<p>Plan the perfect adventure with kids in Kashmir.</p>`,
  },
  {
    title: "🎭 Arts & Culture",
    details: `<p>Visit Kashmir’s cultural and heritage hotspots.</p>`,
  },
];

// Open panel with specific content
function openPanel(index) {
  const page = pages[index];
  panelContent.innerHTML = `<h2>${page.title}</h2><div>${page.details}</div>`;
  panel.classList.add("active");
  overlay.classList.add("active");
}

// Close panel
function closePanel() {
  panel.classList.remove("active");
  overlay.classList.remove("active");
}

closePanelBtn.addEventListener("click", closePanel);
overlay.addEventListener("click", closePanel);

// Hero Background Slider
const hero = document.querySelector(".hero");
const heroImages = [
  "images/hello1.jpg",
  "images/hel6.jpg",
  "images/her1.jpg",
  "images/her2.jpg",
  "images/her3.jpg",
  "images/her4.jpg",
  "images/her5.jpg",
];

let heroIndex = 0;
hero.style.backgroundImage = `url(${heroImages[heroIndex]})`;

setInterval(() => {
  heroIndex = (heroIndex + 1) % heroImages.length;
  hero.style.backgroundImage = `url(${heroImages[heroIndex]})`;
}, 4000);

// Word Fade-in Animation
const text = `Kashmir, hailed as “Paradise on Earth," is a spectacular destination for families looking to spend holidays together amidst the calm and beauty of nature. 
Perched in the mountainous regions of the Himalayas, this beautiful land is blessed with lush greenery, pine trees, lakes, religious sites, valleys, and majestic mountains.`;

const words = text.split(" ");
const container = document.getElementById("animatedText");
container.innerHTML = words.map((word) => `<span class="word">${word}</span>`).join(" ");
const wordSpans = document.querySelectorAll(".word");

let i = 0;
function showWords() {
  if (i < wordSpans.length) {
    wordSpans[i].classList.add("visible");
    i++;
    setTimeout(showWords, 400);
  }
}

// Visa Info Alert
function showVisaInfo() {
  alert("Here you will find Visa & Entry details (replace with your page link).");
}

// Tours Carousel
const track = document.querySelector(".carousel-track");
// const slides = document.querySelectorAll(".card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const visibleSlides = 4;

function isMobile() {
  return window.innerWidth <= 600;
}

function showSlide(idx) {
  if (isMobile()) return;
  index = Math.max(0, Math.min(idx, slides.length - visibleSlides));
  track.style.transform = `translateX(-${index * (100 / visibleSlides)}%)`;
}

nextBtn.addEventListener("click", () => {
  showSlide(index + 1);
});

prevBtn.addEventListener("click", () => {
  showSlide(index - 1);
});

window.addEventListener("resize", () => {
  if (isMobile()) {
    track.style.transform = "none";
  } else {
    showSlide(index);
  }
});

// Map Setup
// Restrict map only to Jammu & Kashmir bounds
const jkBounds = [
  [32.3, 73.5], // Southwest
  [35.5, 79.0], // Northeast
];

const map = L.map('map', {
  zoomControl: false,
  maxBounds: jkBounds,
  maxBoundsViscosity: 1.0,
}).setView([34.1, 75.0], 8);

L.control.zoom({ position: 'bottomright' }).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
  minZoom: 7,
  maxZoom: 14,
}).addTo(map);

const locationIcon = L.divIcon({
  html: '<i class="fa-solid fa-location-dot"></i>',
  className: '',
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

const places = {
  srinagar_dal: [34.1136819, 74.8135449],
  srinagar_gardens: [34.1289417, 74.8562618],
  gulmarg: [34.0484, 74.3805],
  pahalgam: [34.0159, 75.3156],
  sonmarg: [34.3021, 75.2936],
  yusmarg: [33.7516, 74.5205],
  doodhpathri: [33.9126, 74.8499],
  kupwara: [34.5311, 74.2566],
  patnitop: [33.0845, 75.3090],
  gurez: [34.6345, 74.7953],
};

let activeMarker = null;

// Menu toggle
const menuBox = document.getElementById('menuBox');
const toggleMenuBtn = document.getElementById('toggleMenu');

toggleMenuBtn.addEventListener('click', () => {
  menuBox.style.display = (menuBox.style.display === 'none') ? 'block' : 'none';
});

// Handle place selection
document.querySelectorAll('input[name="place"]').forEach((input) => {
  input.addEventListener('change', function () {
    const place = this.value;
    const coords = places[place];

    if (coords) {
      if (activeMarker) {
        map.removeLayer(activeMarker);
      }
      activeMarker = L.marker(coords, { icon: locationIcon })
        .bindPopup("📍 " + this.nextSibling.textContent.trim())
        .addTo(map);

      map.setView(coords, 11);
      activeMarker.openPopup();

      // Auto-hide menu after selection
      menuBox.style.display = 'none';
    }
  });
});



// Travel Carousel
class TravelCarousel {
  constructor() {
    this.track = document.querySelector('.tc-track');
    this.cards = document.querySelectorAll('.tc-card');
    this.prev = document.querySelector('.tc-arrow.left');
    this.next = document.querySelector('.tc-arrow.right');
    this.count = document.getElementById('image-count');
    this.currentSlide = 0;
    this.cardsPerView = this.getCardsPerView();
    this.maxSlides = Math.max(0, this.cards.length - this.cardsPerView);

    // Touch variables
    this.startX = 0;
    this.currentX = 0;
    this.isDragging = false;
    this.startTransform = 0;

    this.init();
  }

  getCardsPerView() {
    const width = window.innerWidth;
    if (width <= 600) return 1;
    if (width <= 1000) return 2;
    return 3;
  }

  init() {
    this.setupEventListeners();
    this.updateCarousel();
    this.startAutoSlide();
  }

  setupEventListeners() {
    // Touch events
    this.track.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: false });
    this.track.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: false });
    this.track.addEventListener('touchend', (e) => this.handleTouchEnd(e));

    // Mouse events
    this.track.addEventListener('mousedown', (e) => this.handleMouseStart(e));
    this.track.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.track.addEventListener('mouseup', (e) => this.handleMouseEnd(e));
    this.track.addEventListener('mouseleave', (e) => this.handleMouseEnd(e));

    // Navigation buttons
    this.next.addEventListener('click', () => this.nextSlide());
    this.prev.addEventListener('click', () => this.prevSlide());

    // Resize handler
    window.addEventListener('resize', () => this.handleResize());

    // Prevent context menu on long press
    this.track.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  handleTouchStart(e) {
    this.isDragging = true;
    this.startX = e.touches ? e.touches[0].clientX : e.clientX;
    this.startTransform = this.currentSlide;
    this.track.style.cursor = 'grabbing';
    this.pauseAutoSlide();
  }

  handleTouchMove(e) {
    if (!this.isDragging) return;
    e.preventDefault();
    this.currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = this.startX - this.currentX;
    const movePercent = (diff / this.track.offsetWidth) * 100;
    const newTransform = (this.startTransform * (100 / this.cardsPerView)) + movePercent;
    this.track.style.transform = `translateX(-${newTransform}%)`;
  }

  handleTouchEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    const diff = this.startX - this.currentX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && this.currentSlide < this.maxSlides) {
        this.nextSlide();
      } else if (diff < 0 && this.currentSlide > 0) {
        this.prevSlide();
      } else {
        this.updateCarousel();
      }
    } else {
      this.updateCarousel();
    }
    this.track.style.cursor = 'grab';
    this.startAutoSlide();
  }

  handleMouseStart(e) {
    this.handleTouchStart(e);
  }

  handleMouseMove(e) {
    if (this.isDragging) {
      this.handleTouchMove({ touches: [{ clientX: e.clientX }], preventDefault: () => {} });
    }
  }

  handleMouseEnd(e) {
    this.currentX = e.clientX;
    this.handleTouchEnd();
  }

  nextSlide() {
    if (this.currentSlide < this.maxSlides) {
      this.currentSlide++;
      this.updateCarousel();
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.updateCarousel();
    }
  }

  updateCarousel() {
    const translateX = this.currentSlide * (100 / this.cardsPerView);
    this.track.style.transform = `translateX(-${translateX}%)`;
    this.count.textContent = `${this.currentSlide + 1} / ${this.cards.length}`;
  }

  handleResize() {
    this.cardsPerView = this.getCardsPerView();
    this.maxSlides = Math.max(0, this.cards.length - this.cardsPerView);
    if (this.currentSlide > this.maxSlides) {
      this.currentSlide = this.maxSlides;
    }
    this.updateCarousel();
  }

  startAutoSlide() {
    this.pauseAutoSlide();
    this.autoSlideInterval = setInterval(() => {
      if (this.currentSlide >= this.maxSlides) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
      this.updateCarousel();
    }, 5000);
  }

  pauseAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
}

// FAQ Data
const faqData = {
  general: {
    title: "General FAQs",
    questions: [
      {
        q: "How can I book a tour with Mapstop Travels?",
        a: 'You can book your tour directly on our website or contact us via email at <a href="mailto:support@mapstoptravels.com">support@mapstoptravels.com</a>. Our team will assist you with booking confirmation and customization.'
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept credit/debit cards, net banking, UPI, and digital wallets. You can also opt for EMI options for high-value bookings."
      },
      {
        q: "Do I need travel insurance for my trip?",
        a: "While not mandatory, we highly recommend travel insurance to cover medical emergencies, trip cancellations, or baggage loss."
      },
      {
        q: "What is your cancellation and refund policy?",
        a: "Please refer to our Cancellation Policy and Refund Policy for detailed terms. Refunds depend on the cancellation date relative to your travel date."
      },
      {
        q: "Do you offer customized tour packages?",
        a: "Yes, we provide fully customizable tour packages based on your travel preferences, budget, and duration."
      }
    ]
  },
  kashmir: {
    title: "Kashmir & Ladakh Tour FAQs",
    questions: [
      { q: "What is the best time to visit Kashmir?", a: "For Snow Lovers: December to February. For Pleasant Weather: April to June (Spring & Summer). For Autumn Beauty: September to November." },
      { q: "Is it safe to travel to Kashmir?", a: "Yes, Kashmir is safe for tourists, and we ensure secure accommodations and transportation. We also monitor travel advisories to keep travelers informed." },
      { q: "What clothing should I pack for a Kashmir trip?", a: "Winter (Oct–Feb): Heavy woolens, thermals, snow boots. Summer (Mar–Aug): Light woolens, comfortable clothing. Monsoon (July–Sept): Waterproof jackets, umbrellas." },
      { q: "What are the must-visit places in Ladakh?", a: "Pangong Lake, Nubra Valley, Magnetic Hill, Leh Palace, and Hemis Monastery are the top attractions in Ladakh." },
      { q: "Do I need a permit for Ladakh?", a: "Yes, Indian and foreign tourists need permits for Pangong Lake, Nubra Valley, and Tso Moriri. We assist with permit processing." },
    ]
  },
  shimla: {
    title: "Shimla & Manali Tour FAQs",
    questions: [
      { q: "What are the top attractions in Shimla?", a: "The Ridge & Mall Road, Jakhoo Temple, Kufri Adventure Park, and Christ Church are the main attractions in Shimla." },
      { q: "What adventure activities are available in Manali?", a: "Skiing & Snowboarding (Solang Valley, Rohtang Pass), River Rafting (Beas River), Paragliding (Solang Valley), and Trekking (Hampta Pass, Bhrigu Lake)." },
      { q: "How many days are ideal for a Manali trip?", a: "A 4-5 day trip is ideal to cover Manali, Solang Valley, and nearby attractions." },
    ]
  },
  goa: {
    title: "Goa Tour FAQs",
    questions: [
      { q: "What are the top beaches to visit in Goa?", a: "North Goa: Baga Beach, Anjuna Beach, Vagator Beach. South Goa: Palolem Beach, Colva Beach, Butterfly Beach." },
      { q: "What is the best season to visit Goa?", a: "Peak Season (Oct–March) – Ideal for beach activities & nightlife. Monsoon (June–Sept) – Perfect for scenic beauty & trekking." },
      { q: "Is Goa suitable for family vacations?", a: "Yes, South Goa is perfect for families, offering serene beaches and water sports." },
    ]
  }
};

// Injects FAQ questions
function showFaqCategory(cat) {
  document.querySelectorAll('#faq-categories li').forEach(li => li.classList.remove('active'));
  const activeIdx = { general: 0, kashmir: 1, shimla: 2, goa: 3 }[cat];
  document.querySelectorAll('#faq-categories li')[activeIdx].classList.add('active');
  const faqs = faqData[cat];
  let html = `<h1>${faqs.title}</h1>`;
  faqs.questions.forEach(faq => {
    html += `
      <div class="faq-item">
        <div class="faq-question" onclick="toggleFaq(event)">
          ${faq.q}
          <span class="arrow">&#9662;</span>
        </div>
        <div class="faq-answer">${faq.a}</div>
      </div>`;
  });
  document.getElementById('faq-questions').innerHTML = html;
}

// FAQ expand/collapse
function toggleFaq(event) {
  const item = event.target.closest('.faq-item');
  item.classList.toggle('active');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Newsletter form
  const form = document.getElementById('newsletterForm');
  const email = document.getElementById('newsletterEmail');
  const feedback = document.getElementById('newsletterFeedback');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    feedback.textContent = '';
    const val = email.value.trim();

    if (!val) {
      feedback.style.color = '#d9534f';
      feedback.textContent = 'Please enter an email address.';
      email.focus();
      return;
    }
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(val)) {
      feedback.style.color = '#d9534f';
      feedback.textContent = 'Please enter a valid email address.';
      email.focus();
      return;
    }
    feedback.style.color = '#007b00';
    feedback.textContent = 'Thanks — you are subscribed!';
    form.reset();
    setTimeout(() => { feedback.textContent = ''; }, 5000);
  });

  // Smooth focus for newsletter
  const subscribeBtn = document.querySelector('.newsletter-form .btn');
  subscribeBtn.addEventListener('click', () => {
    if (!email.value.trim()) {
      email.focus();
    }
  });

  // WhatsApp FAB bounce
  const fab = document.querySelector('.whatsapp-fab');
  setTimeout(() => {
    fab.animate([
      { transform: 'translateY(0)' },
      { transform: 'translateY(-6px)' },
      { transform: 'translateY(0)' }
    ], { duration: 700, iterations: 1, easing: 'ease-out' });
  }, 1500);

  // Initialize animations and FAQs
  showWords();
  const heroElements = document.querySelectorAll(".animate-up");
  heroElements.forEach((el) => el.classList.add("start-animation"));
  showFaqCategory('general');

  // Initialize travel carousel
  new TravelCarousel();
});

// updated code 
let currentIndex = 0;
const slides = document.querySelectorAll('.mobile-slider .slide');
const totalSlides = slides.length;

function showSlide(index) {
  const offset = -index * 100;
  slides.forEach(slide => {
    slide.style.transform = `translateX(${offset}%)`;
  });
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

// Run only if slider exists (mobile)
if (slides.length > 0) {
  setInterval(autoSlide, 3000);
  showSlide(currentIndex);
}