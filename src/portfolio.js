/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hsuan Chang",
  title: "Hi all, I'm Hsuan",
  subTitle: emoji(
    "🚧 A Full Stack Developer."
  ),
  resumeLink:
    "https://drive.google.com/file/d/162BTA15Lt3uk2LEK3WCMdkXD_Wc9mhYa/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hsuan1117",
  linkedin: "https://www.linkedin.com/in/hsuan1117/",
  gmail: "public@hsuan.app",
  //gitlab: "https://gitlab.com/hsuan1117",
  facebook: "https://www.facebook.com/ryanchang1117/",
  //medium: "https://medium.com/@ryanchang1117",
  //stackoverflow: "https://stackoverflow.com/users/9601042/hsuan",
  instagram: "https://www.instagram.com/slow.hsuan.1117/",
  blog: "https://blog.hsuan.app",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Information Security",
      fontAwesomeClassname: "fas fa-shield-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Tainan First Senior High School",
      logo: null,//require("./assets/images/harvardLogo.png"),
      subHeader: "High School",
      duration: "September 2018 - Now",
      desc: "Participated in the research of TFcis and published 1 paper.",
      descBullets: []
    },
    {
      schoolName: "National Tsing Hua University",
      logo: null,//require("./assets/images/harvardLogo.png"),
      subHeader: "University",
      duration: "September 2022 - Future",
      desc: "IPTH",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Information Security",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Developer / Server Manager",
      company: "Cotpear",
      companylogo: null ,//require("./assets/images/facebookLogo.png"),
      date: "2017 – Present",
      desc: "backend developer and server manager",
      descBullets: []
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", 
  display: true 
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Projects I spent a lot of time and push into production",
  projects: [
    {
      image: null, //require("./assets/images/saayaHealthLogo.webp"),
      projectName: "TNFSH Lunch System (台南一中訂餐系統)",
      projectDesc: "Lunch ordering system for Tainan First Senior High School",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://lunch.tnfsa.org/"
        }
      ]
    }
  ],
  display: true 
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: null,
  email_address: "public@hsuan.app"
};

// Twitter Section

const twitterDetails = {
  userName: "hsuan1117", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
