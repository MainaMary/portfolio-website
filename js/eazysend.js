const userResearchList = [
  {
    label: "Research goals",
    goals: [
      "Gain insights into the specific needs, preferences, and pain points of your target users related to international transactions. This includes understanding their current practices, challenges, and desired features in a transaction app.",
      "Assess existing international money transfer apps and financial services to identify strengths, weaknesses, and opportunities for differentiation. Understand what users like and dislike about competing solutions to inform the development of your app.",
      " Test and validate design concepts and prototypes of your app with representative users to assess usability, clarity, and effectiveness. Identify areas for improvement and gather feedback to ensure that the final product meets user needs and expectations.",
    ],
  },
  {
    label: "Research Findings",
    goals: [
      "The reliance on email for the hiring process resulted in delays and miscommunication. The absence of a centralized platform made it challenging to track and manage candidate interactions efficiently.",
      " Without a dedicated website, Moxie struggled to showcase the breadth of available talent to potential employers. This limitation hindered the exposure of skilled professionals to a broader audience",
      " The manual nature of the hiring process led to client dissatisfaction. The lack of automation made it difficult for companies to swiftly identify and secure the right candidates, impacting their overall hiring experience.",
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
    label: "Goals",
    desc: [
      "Goals Mohammed’s primary goal is to send money to her family in Mexico regularly to support their living expenses, medical bills, and education costs.",
      "She wants a reliable and cost-effective way to transfer funds quickly and securely to ensure her family's well-being.",
    ],
  },
  {
    label: "Challenges",
    desc: [
      "Mohammed faces challenges with navigating international money transfer services, understanding exchange rates, and dealing with high transfer fees",
      " She also worries about the safety and reliability of the transfer process, as any delay or error could impact her family's financial stability.",
    ],
  },
  {
    label: "Needs and Preferences:",
    desc: [
      "Needs and Preferences: Mohammed values affordability and reliability in an international money transfer service, preferring low fees and competitive exchange rates",
      "She also prefers a service that offers convenience and accessibility, with easy-to-use mobile apps and responsive customer support.",
    ],
  },
  {
    label: "Pain Points:",
    desc: [
      "Pain Points: Mohammed experiences frustration with the complexity of some international transfer services, as well as the lack of transparency in their fee structures and exchange rate calculations.",
      "She also worries about the security of her transactions and the potential for delays or errors in transferring funds to her family.",
    ],
  },
];
const person2 = [
  {
    label: "Goals",
    desc: [
      "Goals Samuel's main goal is to transfer funds to his overseas suppliers efficiently and cost-effectively while ensuring that he receives the best exchange rates.",
      " He also seeks a service that offers reliable support and assistance when needed.",
    ],
  },
  {
    label: "Challenges",
    desc: [
      "Challenges: Samuel faces challenges with navigating complex international banking procedures and managing fluctuating exchange rates.",
      " He also struggles with identifying the most cost-effective and secure transfer options for his business.",
    ],
  },
  {
    label: "Needs and preferences",
    desc: [
      "Samuel values competitive exchange rates and low transaction fees, preferring a service that offers transparent pricing and real-time rate updates.",
      "He also prefers a user-friendly interface with easy access to customer support and assistance.",
    ],
  },
  {
    label: "Pain points",
    desc: [
      "Pain Points: Samuel experiences frustration with the lack of transparency in some international transfer services, as well as the complexity of their fee structures and exchange rate calculations.",
      "He also worries about the reliability of some transfer options and the potential for delays in receiving funds.",
    ],
  },
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
