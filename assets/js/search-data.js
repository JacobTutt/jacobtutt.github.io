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
        },{id: "nav-projects",
          title: "Projects",
          description: "A collection of my projects and courseworks from throughout my BSc and MPhil.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-papers",
          title: "papers",
          description: "Papers and preprints.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/papers/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "Talks and presentations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "news-joined-the-radio-astronomy-and-cosmology-group-at-the-cavendish-laboratory-university-of-cambridge-as-a-astrophysics-phd-candidate-under-the-supervision-of-dr-eloy-de-lera-acedo",
          title: 'Joined the Radio Astronomy and Cosmology Group at the Cavendish Laboratory, University of...',
          description: "",
          section: "News",},{id: "papers-optimising-foreground-parametrisation-for-global-21-cm-cosmology-with-gpu-accelerated-nested-sampling",
          title: 'Optimising Foreground Parametrisation for Global 21-cm Cosmology with GPU-Accelerated Nested Sampling',
          description: "arXiv preprint on GPU-accelerated nested sampling for global 21-cm cosmology.",
          section: "Papers",handler: () => {
              window.location.href = "/papers/optimising-foreground-gpu-nested-sampling/";
            },},{id: "talks-accelerating-21-cm-cosmological-inference-for-reach-with-jax-gpus",
          title: 'Accelerating 21-cm Cosmological Inference for REACH with JAX/GPUs',
          description: "Presentation at the REACH Annual Meeting 2025.",
          section: "Talks",handler: () => {
              window.location.href = "/talks/accelerating-21cm-reach-jax-gpus/";
            },},{
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
          window.open("https://www.kicc.cam.ac.uk/staff/jacob-tutt", "_blank");
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
