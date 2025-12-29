// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Here you can find an overview of my academic and professional activities from recent years.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-legal-interpretation-and-moral-reasoning-workshop",
        
          title: "Legal Interpretation and Moral Reasoning Workshop",
        
        description: "2025 Legal Interpretation and Moral Reasoning Workshop, organized at the University of Granada",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/workshop2025/";
          
        },
      },{id: "post-easp-summer-school-2025",
        
          title: "EASP Summer School 2025",
        
        description: "2025 Summer School of the European Association of Social Psychology, hosted at the University of Kent",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/summer_school/";
          
        },
      },{id: "post-5th-euro-xphi-conference-in-norwich",
        
          title: "5th Euro Xphi Conference in Norwich",
        
        description: "The 5th edition of the European Experimental Philosophy Conference",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/norwich/";
          
        },
      },{id: "post-phair-2025-in-edinburgh",
        
          title: "PHAIR  2025 in Edinburgh",
        
        description: "The PHAIR 2025 Animal Advocacy Conference in Edinburgh",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/phair2025/";
          
        },
      },{id: "post-2025-bioxphi-summit-in-basel",
        
          title: "2025 BioXPhi Summit in Basel",
        
        description: "The 2025 edition of the Experimental philosophical bioethics (&quot;BioXPhi&quot;) Summit",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/basel2025/";
          
        },
      },{id: "post-vienna-summer-school-2024",
        
          title: "Vienna Summer School 2024",
        
        description: "2024 Summer School of RAQMYAT Project in Vienna, Austria, organized by the UNIMED and the University of Vienna.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/summer_school_2/";
          
        },
      },{id: "post-hejnice-summer-school-2024",
        
          title: "Hejnice Summer School 2024",
        
        description: "2024 Summer School of Environmental Philosophy in Hejnice, Czech Republic organized by the University of Pardubice.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/summer_school_1/";
          
        },
      },{id: "books-some-we-love-some-we-hate-some-we-eat",
          title: 'Some We Love, Some We Hate, Some We Eat',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/herzog_some/";
            },},{id: "books-the-moral-circle",
          title: 'The Moral Circle',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/sebo_moral_circle/";
            },},{id: "books-the-expanding-circle-ethics-evolution-and-moral-progress",
          title: 'The Expanding Circle, Ethics Evolution and Moral Progress',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/singer/";
            },},{id: "books-animal-liberation-now",
          title: 'Animal Liberation Now',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/singer_animal_liberation/";
            },},{id: "news-announcement-1",
          title: 'Announcement_1',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-announcement-3",
          title: 'Announcement_3',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "projects-the-animal-dilemmas-project",
          title: 'The Animal Dilemmas Project',
          description: "Who do we see as deserving our moral concern?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/animal-dilemmas/";
            },},{id: "projects-the-practical-reason-project",
          title: 'The Practical Reason Project',
          description: "What is considered reasonable? And normal?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practicalreason/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%6D%61%72%74%69%6E@%75%67%72.%65%73", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/damartin.bsky.social", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/damartinr", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-5839-073X", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Daniel-Martin-122/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=KBC-7464-2024", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=58067869400", "_blank");
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
