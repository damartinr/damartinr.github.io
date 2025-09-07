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
        },{id: "nav-cv",
          title: "cv",
          description: "Here you can find an overview of my academic and professional activities from recent years.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
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
          
            window.location.href = "/blog/2025/edinburgh/";
          
        },
      },{id: "post-2025-bioxphi-summit-in-basel",
        
          title: "2025 BioXPhi Summit in Basel",
        
        description: "The 2025 edition of the Experimental philosophical bioethics (&quot;BioXPhi&quot;) Summit",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/basel2025/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
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
            },},{id: "projects-practical-reason",
          title: 'Practical Reason',
          description: "What is considered reasonable, normal?",
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
