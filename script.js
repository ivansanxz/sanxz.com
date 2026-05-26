const protocolContent = {
  diagnose: {
    tag: "01 / Diagnose",
    title: "Find the bottleneck before adding more hours.",
    body:
      "Map your current level, weakest subjects, available time, and target opportunities. The first win is clarity: what to learn, why it matters, and how success will be measured.",
  },
  build: {
    tag: "02 / Build",
    title: "Turn ambition into a weekly training system.",
    body:
      "Create repeatable study blocks with active recall, problem solving, reading, writing, and recovery. The goal is not busyness. The goal is compounding skill.",
  },
  prove: {
    tag: "03 / Prove",
    title: "Make learning visible through artifacts.",
    body:
      "Publish notebooks, essays, demos, research summaries, and project logs. Great applications are easier to believe when the work already exists in public.",
  },
  publish: {
    tag: "04 / Publish",
    title: "Share the map so others can climb faster.",
    body:
      "Convert your lessons into free resources: templates, resource lists, roadmaps, honest reflections, and guides that respect the reader's time.",
  },
};

const modeButtons = document.querySelectorAll(".mode-button");
const filterableCards = document.querySelectorAll("[data-category]");

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const mode = button.dataset.mode;

    modeButtons.forEach((item) => item.classList.toggle("active", item === button));
    filterableCards.forEach((card) => {
      const shouldHide = mode !== "all" && card.dataset.category !== mode;
      card.classList.toggle("is-hidden", shouldHide);
    });
  });
});

const protocolButtons = document.querySelectorAll(".protocol-step");
const protocolDetail = document.querySelector("#protocolDetail");

protocolButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = protocolContent[button.dataset.step];

    protocolButtons.forEach((item) => item.classList.toggle("active", item === button));
    protocolDetail.innerHTML = `
      <span class="tag">${content.tag}</span>
      <h3>${content.title}</h3>
      <p>${content.body}</p>
    `;
  });
});

const commandMenu = document.querySelector("#commandMenu");
const paletteButton = document.querySelector("#paletteButton");
const closeCommand = document.querySelector("#closeCommand");

const openCommandMenu = () => {
  if (typeof commandMenu.showModal === "function") {
    commandMenu.showModal();
  }
};

paletteButton.addEventListener("click", openCommandMenu);
closeCommand.addEventListener("click", () => commandMenu.close());

commandMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => commandMenu.close());
});

document.addEventListener("keydown", (event) => {
  const isCommandShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";

  if (isCommandShortcut) {
    event.preventDefault();
    openCommandMenu();
  }

  if (event.key === "Escape" && commandMenu.open) {
    commandMenu.close();
  }
});

document.querySelector(".subscribe-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#formNote").textContent =
    "Got it. This is where the newsletter integration will plug in.";
});
