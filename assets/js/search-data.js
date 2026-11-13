// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "Please find an outline (and PDF) of my CV, focusing on my academic background. For a more general or industry-focused CV, feel free to contact me for the latest version.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-papers",
          title: "Papers",
          description: "Research papers, preprints and science writing.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/papers/";
          },
        },{id: "nav-code",
          title: "Code",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/code/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "Talks and presentations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A collection of my projects and courseworks from throughout my BSc and MPhil.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-joined-the-radio-astronomy-and-cosmology-group-at-the-cavendish-laboratory-university-of-cambridge-as-a-physics-phd-candidate-under-the-supervision-of-dr-eloy-de-lera-acedo",
          title: 'Joined the Radio Astronomy and Cosmology Group at the Cavendish Laboratory, University of...',
          description: "",
          section: "News",},{id: "news-harry-bevins-and-my-article-cosmology-s-needle-in-a-haystack-is-now-published-in-bluesci",
          title: 'Harry Bevins’ and my article, “Cosmology’s Needle in a Haystack”, is now published...',
          description: "",
          section: "News",},{id: "news-our-work-on-gpu-accelerated-global-21-cm-inference-and-foreground-modelling-is-now-published-in-monthly-notices-of-the-royal-astronomical-society",
          title: 'Our work on GPU-accelerated global 21-cm inference and foreground modelling is now published...',
          description: "",
          section: "News",},{id: "news-our-latest-work-on-electromagnetic-beam-patterns-and-bayesian-marginalisation-of-beam-uncertainty-is-now-on-arxiv",
          title: 'Our latest work on electromagnetic beam patterns and Bayesian marginalisation of beam uncertainty...',
          description: "",
          section: "News",},{id: "news-our-work-on-end-to-end-uncertainty-quantification-and-a-benchmark-for-simulation-based-and-variational-inference-has-been-accepted-to-sim2science-ml-with-imperfect-scientific-models-neurips-2026",
          title: 'Our work on end-to-end uncertainty quantification and a benchmark for simulation-based and variational...',
          description: "",
          section: "News",},{id: "news-our-paper-on-jaxmg-a-distributed-multi-gpu-and-multi-node-linear-algebra-library-for-jax-is-now-on-arxiv",
          title: 'Our paper on JAXMg, a distributed multi-GPU and multi-node linear algebra library for...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6C%74%36%37@%63%61%6D.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/JacobTutt", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jacobltutt", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kicc.cam.ac.uk/staff/jacob-tutt-0", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/3178330", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
