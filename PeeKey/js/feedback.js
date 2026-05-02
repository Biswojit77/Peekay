const testimonials = [
  { name:'Priya Pattnaik', role:'Parent · Class 10', stars:5, text:'My daughter went from failing maths to scoring 92% in her board exam. The teachers here genuinely care about each child.' },
  { name:'Rohan Das', role:'Student · Class 12', stars:5, text:'EduNest taught me how to actually think through problems, not just memorise. My confidence has improved so much this year.' },
  { name:'Sunita Mohanty', role:'Parent · Class 8', stars:5, text:'Affordable, disciplined, and the teachers know every student by name. Exactly what offline learning should be.' }
];

let selectedRating = 0;

function renderTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  if (!grid) return;

  grid.innerHTML = testimonials.map(t => `
    <div class="tcard">
      <div class="stars">${'★'.repeat(t.stars)}${'☆'.repeat(5-t.stars)}</div>
      <div class="ttext">"${t.text}"</div>
      <div class="tauthor">
        <div class="t-avatar">${t.name.split(' ').map(x=>x[0]).join('').slice(0,2)}</div>
        <div><div class="t-name">${t.name}</div><div class="t-sub">${t.role}</div></div>
      </div>
    </div>
  `).join('');
}

function setRating(n) {
  selectedRating = n;
  document.querySelectorAll('.star-btn').forEach((b, i) => b.classList.toggle('active', i < n));
}

function submitFeedback() {
  const name = document.getElementById('fbName').value.trim();
  const role = document.getElementById('fbRole').value;
  const msg = document.getElementById('fbMsg').value.trim();

  if (!name || !msg) {
    alert('Please enter your name and message.');
    return;
  }

  if (!selectedRating) {
    alert('Please select a star rating.');
    return;
  }

  const formData = new FormData();
  formData.append("type", "feedback");
  formData.append("name", name);
  formData.append("role", role);
  formData.append("rating", selectedRating);
  formData.append("message", msg);

  fetch("https://script.google.com/macros/s/AKfycbwrYG1rG-YImmI0SH-EDyhf90nbCa3M13JEJ_9Jm1BQVAHJlZSw1SKgrAhk3wd77u-DrA/exec", {
    method: "POST",
    mode: "no-cors",
    body: formData
  });

  testimonials.unshift({ name, role, stars: selectedRating, text: msg });
  renderTestimonials();

  document.getElementById('fbName').value = '';
  document.getElementById('fbMsg').value = '';
  selectedRating = 0;
  document.querySelectorAll('.star-btn').forEach(b => b.classList.remove('active'));

  document.getElementById('fbSuccess').style.display = 'block';
  setTimeout(() => document.getElementById('fbSuccess').style.display = 'none', 4000);
}

document.addEventListener("DOMContentLoaded", renderTestimonials);
