const courses = [
  { icon:'📖', name:'Data Entry', desc:'A Data Entry Professional is responsible for inputting, updating, and maintaining data in computer systems and databases.', grade:'Class 6–12', days:'Daily', time:'3:30 PM', fee:'₹700/mo' },
  { icon:'💻', name:'Computer Basics', desc:'MS Office, typing, internet safety & fundamentals for beginners.', grade:'Class 5–10', days:'Saturday', time:'10:00 AM', fee:'₹600/mo' },
  { icon:'📦', name:'Full Package', desc:'All subjects bundled at a discounted fee — best value for serious students.', grade:'All Classes', days:'Daily', time:'Multiple', fee:'₹2200/mo' },
];

function toggleMenu() {
  document.getElementById('mobileMenu')?.classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobileMenu')?.classList.remove('open');
}

function renderCourses() {
  const grid = document.getElementById('coursesGrid');
  if (!grid) return;

  grid.innerHTML = courses.map((c, i) => `
    <div class="course-card">
      <div class="cc-icon">${c.icon}</div>
      <div class="cc-name">${c.name}</div>
      <div class="cc-desc">${c.desc}</div>
      <div class="cc-meta">
        <span class="cc-pill">🎓 ${c.grade}</span>
        <span class="cc-pill">📅 ${c.days}</span>
        <span class="cc-pill">🕐 ${c.time}</span>
        <span class="cc-pill" style="color:var(--gold); border-color:rgba(201,168,76,0.3);">${c.fee}</span>
      </div>
      <button class="cc-enroll" onclick="goToRegister('${encodeURIComponent(c.name)}')">Enroll in This Course</button>
    </div>
  `).join('');
}

function goToRegister(courseName) {
  window.location.href = `register.html?course=${courseName}`;
}

document.addEventListener("DOMContentLoaded", renderCourses);
