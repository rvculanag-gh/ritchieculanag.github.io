const purposePlaceholder = document.querySelector(".purpose");
const purposes = ["fun", "web", "android", "desktop", "backend"];

let purposeTracker = 0;
let currentPurpose = purposes[purposeTracker];

const startCarousel = () => {
  setInterval(() => {
    if (purposeTracker >= purposes.length) {
      purposeTracker = 0;
    }

    currentPurpose = purposes[purposeTracker];
    purposePlaceholder.innerHTML = currentPurpose;
    purposeTracker += 1;
  }, 1000);
};

const startApp = () => {
  startCarousel();
};

startApp();
