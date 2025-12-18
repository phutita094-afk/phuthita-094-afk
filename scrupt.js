const items = ["ลูกฟุตบอล", "ลูกบาสเกตบอล", "ไม้แบดมินตัน"];

function previewImage() {
  const file = document.getElementById("image").files[0];
  const preview = document.getElementById("preview");

  if (file) {
    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
  }
}

function borrow() {
  const fullname = document.getElementById("fullname").value;
  const studentId = document.getElementById("studentId").value;
  const item = document.getElementById("item").value;

  if (fullname === "" || studentId === "") {
    alert("กรุณากรอกชื่อ-นามสกุล และรหัสนักเรียน");
    return;
  }

  const data = fullname + " (" + studentId + ")";
  localStorage.setItem(item, data);

  document.getElementById("result").innerText =
    "ยืมอุปกรณ์: " + item + " โดย " + data;

  updateStatus();
}

function giveBack() {
  const item = document.getElementById("item").value;
  localStorage.removeItem(item);

  document.getElementById("result").innerText =
    item + " คืนเรียบร้อยแล้ว";

  updateStatus();
}

function updateStatus() {
  const ul = document.getElementById("status");
  ul.innerHTML = "";

  items.forEach(item => {
    const li = document.createElement("li");
    const user = localStorage.getItem(item);

    if (user) {
      li.textContent = item + " ❌ ถูกยืมโดย " + user;
    } else {
      li.textContent = item + " ✅ ว่าง";
    }

    ul.appendChild(li);
  });
}

updateStatus();
