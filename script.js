document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamberger-menu");
  const sidebar = document.querySelector(".side-bar");
  let sidebarOpen = true;

  hamburgerMenu.addEventListener("click", function () {
    sidebar.style.display = sidebarOpen ? "none" : "block";
    sidebarOpen = !sidebarOpen;
  });
  const searchButton = document.querySelector(".search-button");
  const searchBar = document.querySelector(".search-bar");

  searchButton.addEventListener("click", function () {
    alert("Searching for: " + searchBar.value);
  });
  const notificationIcon = document.querySelector(".notifications");
  const notificationCount = document.querySelector(".notification-count");

  notificationIcon.addEventListener("click", function () {
    notificationCount.textContent = "0";
    notificationCount.style.backgroundColor = "gray";
  });
  const videoTitles = document.querySelectorAll(".video-title");
  videoTitles.forEach((title)=>{
    title.addEventListener("mouseenter", function () {
      title.style.fontSize = "15px";
      title.style.fontWeight = "bold";
    });
    title.addEventListener("mouseleave", function () {
      title.style.fontSize = "14px";
      title.style.fontWeight = "normal";
    });
  });
  const videoThumbnails = document.querySelectorAll(".video-preview a");
  videoThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function (event) {
        const videoTitle = thumbnail.closest(".video-box").querySelector(".video-title").textContent;
      alert("Opening video: " +videoTitle );
    });
 });
});
