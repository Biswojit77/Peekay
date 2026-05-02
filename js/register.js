document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const course = params.get("course");
  if (course && document.getElementById("sCourse")) {
    document.getElementById("sCourse").value = decodeURIComponent(course);
  }
});

function submitEnroll() {
  const name = document.getElementById("sName").value.trim();
  const grade = document.getElementById("sGrade").value;
  const parentName = document.getElementById("pName").value.trim();
  const phone = document.getElementById("pPhone").value.trim();
  const course = document.getElementById("sCourse").value;
  const batch = document.getElementById("sBatch").value;
  const message = document.getElementById("sMsg").value.trim();

  if (!name || !grade || !parentName || !phone || !course) {
    alert("Please fill all required fields.");
    return;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Enter a valid 10-digit mobile number.");
    return;
  }

  const formData = new FormData();
  formData.append("type", "enroll");
  formData.append("studentName", name);
  formData.append("grade", grade);
  formData.append("parentName", parentName);
  formData.append("phone", phone);
  formData.append("course", course);
  formData.append("batch", batch);
  formData.append("message", message);

  fetch(WEB_APP_URL, {
    method: "POST",
    mode: "no-cors",
    body: formData
  });

  document.getElementById("enrollFormFields").style.display = "none";
  document.getElementById("successMsg").style.display = "block";
}
