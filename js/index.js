const navItems = [
  {
    label: "Home",
    path: "#home",
  },
  {
    label: "About",
    path: "#about",
  },
  {
    label: "Projetcs",
    path: "#projects",
  },
  {
    label: "Resume",
    path: "#resume",
  },
  {
    label: "Contact",
    path: "#contact",
  },
];
const projects = [
  {
    img: "../images/moxie.png",
    company: "Moxie talent hub",
    platform: "I Web & Mobile",
    role: "UI/UX Designer",
    desc: "A platform for connecting companies with skilled professionals, ensuring seamless hiring and success for all involved.",
  },
  {
    img: "",
    company: "Eazysend",
    platform: "I Mobile",
    role: "Product Designer",
    desc: "A user-friendly app for seamless cross-border transactions, offering secure and efficient fund transfers across currencies and regions.",
  },
  {
    img: "",
    company: "Megashop",
    platform: "I Mobile",
    role: "UI/UX Designer",
    desc: "A platform for connecting companies with skilled professionals, ensuring seamless hiring and success for all involved.",
  },
  {
    img: "",
    company: "Finexa",
    platform: "I Mobile",
    role: "UI/UX Designer",
    desc: "A platform for connecting companies with skilled professionals, ensuring seamless hiring and success for all involved.",
  },
];
const skills = [
  "User Interface Design",
  "User Experience Design",
  "Front end web development",
  "Information architecture",
  "Usability Testing",
  "Usability research",
];
const tools = [
  "Figma",
  "Adobe XD",
  "Adobe Photoshop",
  "Jira",
  "Vs code",
  "Wordpress",
  "Google Analytics",
  "Samply",
];

const menuIcon = document.getElementById("menuIcon");
const navList = document.querySelector(".nav-list");
const navLink = document.querySelectorAll(".nav-link");
const closeNavIcon = document.querySelector(".close-icon");
const currentPath = window.location.pathname;

navLink.forEach((link) => {
  if (link.href.includes(currentPath)) {
    console.log({ currentPath });
    link.classList.add("active");
  }
});
menuIcon.addEventListener("click", () => {
  if (navList.style.display === "none" || navList.style.display === "") {
    navList.style.display = "block";
    navList.style.position = "absolute";
    navList.style.right = "0px";
    navList.style.borderRadius = "10px";
    navList.style.top = "0px";
    navList.style.padding = "10px";
    navList.style.transform = "translateX(0)";
    navList.style.backgroundColor = "#ffffff";
    navList.style.zIndex = "999";
    navList.style.textAlign = "center";
    navList.style.width = "40%";
    navList.style.boxShadow = " 0 0 3px #777";
  } else {
    navList.style.display = "none";
  }
});
closeNavIcon.addEventListener("click", () => {
  navList.style.display = "none";
});
projects.map((item) => {
  const card = document.createElement("div");
  const imageCard = document.createElement("div");
  const contentCard = document.createElement("div");
  const image = document.createElement("img");
  const titleDiv = document.createElement("div");
  const role = document.createElement("p");
  const platform = document.createElement("p");
  image.src = item.img;
  role.textContent = item.role;
  platform.textContent = item.platform;

  //style
  imageCard.classList.add("image-card");
  image.classList.add("image");
  titleDiv.classList.add("title-card");
  // Append elements
  imageCard.appendChild(image);
  card.appendChild(imageCard);
  titleDiv.appendChild(role);
  titleDiv.appendChild(platform);
  contentCard.appendChild(titleDiv);
  card.appendChild(contentCard);
});

// iterate through skills
const skillsCard = document.querySelector(".skills");
skills.map((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  listItem.classList.add("skill-list");
  skillsCard.appendChild(listItem);
});

// iterate through tools
const toolsCard = document.querySelector(".tools");
tools.map((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  listItem.classList.add("skill-list");
  toolsCard.appendChild(listItem);
});

//research
const researchSkills = [
  "Online Survey(Google form)",
  "In person interview",
  "Research online",
];
