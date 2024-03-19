const projects = [
  {
    title: "AkademNashr",
    githubLink: "https://github.com/abdulvokhidjon/Akademnashr.git",
    vercelLink: "akademnashr-sigma.vercel.app",
  },
  {
    title: "Ansormed",
    githubLink: "https://github.com/abdulvokhidjon/AnsorMed-Web-Site.git",
    vercelLink: "ansor-med-web-site.vercel.app",
  },
  {
    title: "USA",
    githubLink: "https://github.com/abdulvokhidjon/USA.git",
    vercelLink: "usa-states-three.vercel.app",
  },
  {
    title: "QR-code Workshop",
    githubLink: "https://github.com/abdulvokhidjon/qrcode-workshop.git",
    vercelLink: "qrcode-workshop.vercel.app",
  },
  {
    title: "Introduce-card",
    githubLink: "https://github.com/abdulvokhidjon/introduce-card.git",
    vercelLink: "introduce-card.vercel.app",
  },
  {
    title: "Blog_card_",
    githubLink: "https://github.com/abdulvokhidjon/blog_card_.git",
    vercelLink: "blog-card-flame.vercel.app",
  },
  {
    title: "Remote-card",
    githubLink: "https://github.com/abdulvokhidjon/remote-card.git",
    vercelLink: "https://remote-card.vercel.app/",
  },
];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  const title = clone.querySelector(".works__list__title");
  const linkGithub = clone.querySelector(".works__list__link__github");
  const linkVercel = clone.querySelector(".works__list__link__vercel");

  title.textContent = project.title;
  linkGithub.href = project.githubLink;
  linkVercel.href = project.vercelLink;

  worksList.appendChild(clone);
});
