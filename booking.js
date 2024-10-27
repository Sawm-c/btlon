let btn = document.getElementById("button");
let video = document.getElementById("video");
function click() {
  if (video.paused) {
    video.play();
    video.style.display = "unset";
    btn.classList.remove("bi-play-fill");
    btn.classList.add("bi-pause-fill");
  } else {
    video.pause();
    video.style.display = "none";
    btn.classList.remove("bi-pause-fill");
    btn.classList.add("bi-play-fill");
  }
}
btn.addEventListener("click", click);

// Lấy tất cả các ghế (các thẻ <li> trong danh sách ghế)
const chairs = document.querySelectorAll(".chair li");

// Lặp qua tất cả ghế và thêm sự kiện 'click'
chairs.forEach(function (chair) {
  chair.addEventListener("click", function () {
    // Kiểm tra nếu ghế đã có class 'selected' thì bỏ đi, nếu chưa có thì thêm vào
    chair.classList.toggle("selected");
  });
});

// ấn vào nút có chứa id "next" thì chuyển sang trang tiếp theo

document.getElementById("next").addEventListener("click", function () {
  window.location.href = "page2.html"; // Chuyển đến trang page2.html
});
// ấn vào nút có chứa id "back" thì chuyển sang trang trước
document.getElementById("back").addEventListener("click", function () {
  window.location.href = "page2.html"; // Chuyển đến trang page2.html
});
