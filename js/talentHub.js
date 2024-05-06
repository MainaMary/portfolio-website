const userResearchList = [
  {
    label: "Research goals",
    goals: [
      "Understand the needs and pain points of HR professionals, hiring managers, and IT professionals when it comes to hiring or finding job opportunities in the IT field",
      "Gather insights into the specific features, functionalities, and preferences that users expect from a modern, intuitive hiring platform.",
      "Identify common challenges and frustrations experienced by users during the hiring process or when using existing online platforms for job searching and recruitment.",
    ],
  },
  {
    label: "Research Findings",
    goals: [
      "The reliance on email for the hiring process resulted in delays and miscommunication. The absence of a centralized platform made it challenging to track and manage candidate interactions efficiently.",
      "Without a dedicated website, Moxie struggled to showcase the breadth of available talent to potential employers. This limitation hindered the exposure of skilled professionals to a broader audience",
      "The manual nature of the hiring process led to client dissatisfaction. The lack of automation made it difficult for companies to swiftly identify and secure the right candidates, impacting their overall hiring experience.",
    ],
  },
  {
    label: "Project Goals",
    goals: [
      "Develop and launch a modern, intuitive website that simplifies the hiring process for both organizations and professionals, promoting user engagement and ease of navigation.",
      "Implement features and functionalities that streamline the hiring workflow, reducing time delays and improving the overall efficiency of connecting companies with qualified professionals.",
      " Design the website to effectively showcase the diversity and depth of the available talent pool. Implement features that allow companies to easily explore and identify candidates with the specific skills and expertise they seek.",
    ],
  },
];

const person1 = [
  {
    label: "Goals and Challenges",
    desc: [
      " Sarah's primary goal is to attract top talent to fill technical roles at TechSolutions Inc., including software developers, data scientists, and IT project managers.",
      " She faces challenges in sourcing candidates with specialized skills and experiences that match the company's requirements. Sarah strives to streamline the hiring process to reduce time-to-fill and ensure a positive candidate experience.",
    ],
  },
  {
    label: "Needs and Preferences:",
    desc: [
      "Sarah prefers a user-friendly platform that allows her to easily post job openings, screen candidates, and communicate with applicants. ",
      "She values features such as advanced search filters, resume parsing, and integrated messaging to efficiently manage the recruitment workflow.",
      " Sarah also seeks insights and analytics to track the performance of job postings and optimize recruitment strategies.",
    ],
  },
  {
    label: "Pain Points:",
    desc: [
      " Sarah often struggles with a high volume of unqualified applicants, resulting in wasted time and resources on candidate screening.",
      " She finds it challenging to keep up with the rapidly evolving tech landscape and identify candidates with the latest skills and technologies.",
      " Sarah experiences frustration when dealing with communication delays and lack of responsiveness from candidates during the recruitment process.",
    ],
  },
];

const person2 = [
  {
    label: "Goals and Challenges",
    desc: [
      "David's primary goal is to find rewarding freelance projects that allow him to leverage his technical expertise and creativity.",
      " He faces challenges in finding high-quality clients and projects that offer competitive compensation and align with his career aspirations.",
      "David strives to maintain a steady stream of projects while balancing his workload and personal commitments.",
    ],
  },
  {
    label: "Needs and Preferences:",
    desc: [
      " David prefers a platform that showcases his portfolio, skills, and past projects to attract potential clients.",
      "He values features such as project matching algorithms, client reviews, and secure payment processing to facilitate successful collaborations.",
      "David also seeks opportunities for networking and professional development through community forums, webinars, and mentorship programs.",
    ],
  },
  {},
];

const mobileImgs = [
  "../images/mobile1.png",
  "../images/mobile1.png",
  "../images/mobile1.png",
  "../images/mobile1.png",
  "../images/mobile1.png",
  "../images/mobile1.png",
];
const mockupImgs = [
  "../images/",
  "../images/mobile1.png",
  "../images/mobile1.png",
  "../images/mobile1.png",
  "../images/mobile1.png",
  "../images/mobile1.png",
];
const researchCard = document.querySelector(".research-list");

userResearchList.forEach((researchItem) => {
  const title = document.createElement("h2");
  title.textContent = researchItem.label;
  title.classList.add("research-list-items");
  researchCard.appendChild(title);

  researchItem.goals.forEach((goalItem) => {
    const listItem = document.createElement("li");
    listItem.textContent = goalItem;

    researchCard.appendChild(listItem);
  });
});

const personaCard = document.querySelector(".persona1-details");
person1.forEach((persona) => {
  const title = document.createElement("h2");
  title.textContent = persona.label;
  title.classList.add("research-list-items");
  personaCard.appendChild(title);

  persona.desc.forEach((personaItem) => {
    const listItem = document.createElement("li");
    listItem.textContent = personaItem;
    listItem.style.margin = "12px 0";

    personaCard.appendChild(listItem);
  });
});

const persona2Card = document.querySelector(".persona2-details");
person2.forEach((persona) => {
  const title = document.createElement("h2");
  title.textContent = persona.label;
  title.classList.add("research-list-items");
  persona2Card.appendChild(title);

  persona.desc.forEach((personaItem) => {
    const listItem = document.createElement("li");
    listItem.textContent = personaItem;
    listItem.style.margin = "12px 0";

    persona2Card.appendChild(listItem);
  });
});
const imgCard = document.querySelector(".mobile-img");
mobileImgs.map((img) => {
  const image = document.createElement("img");
  image.src = img;
  image.width = 200;
  e;
  image.height = 150;
  imgCard.appendChild(image);
});
