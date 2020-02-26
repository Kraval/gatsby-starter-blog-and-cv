const data = {
  experiments: [
    {
      name: 'Account Surfer',
      locationIcon: 'windows-store.svg',
      description: 'Quickly switch between accounts and browsers',
      builtWith: ['electron', 'react', 'redux', 'reduxsaga', 'fabric'],
      link: 'https://www.microsoft.com/en-us/p/account-surfer/9phvp9rjr7r7'
    },
    {
      name: 'Trello Bookmark',
      locationIcon: 'chrome-webstore.svg',
      description: 'Store your bookmarks as Trello Cards',
      builtWith: ['apollo', 'react', 'antd'],
      link:
        'https://chrome.google.com/webstore/detail/trello-bookmark/ephoopolmejjnjkbbdcfgoohokhnekca',
      sourceCode: 'https://github.com/dospolov/trello-bookmark'
    },
    {
      name: 'Blog',
      locationIcon: 'chrome.svg',
      description: 'Read about productivity and development',
      builtWith: ['gatsby', 'react', 'netlify'],
      link: 'https://dospolov.com'
    }
  ],
  tech: {
    react: {
      name: 'React',
      logo: 'react.svg',
      website: 'https://github.com/facebook/react',
      displayInTopList: true
    },
    graphql: {
      name: 'GraphQL',
      logo: 'graphql.svg',
      website: 'https://graphql.org/',
      displayInTopList: true
    },
    apollo: {
      name: 'Apollo',
      logo: 'apollo.svg',
      website: 'https://www.apollographql.com/',
      displayInTopList: true
    },
    redux: {
      name: 'Redux',
      logo: 'redux.svg',
      website: 'https://redux.js.org/',
      displayInTopList: true
    },
    reduxsaga: {
      name: 'Redux-Saga',
      logo: 'redux-saga.svg',
      website: 'https://redux-saga.js.org/',
      displayInTopList: true
    },
    electron: {
      name: 'Electron',
      logo: 'electron.svg',
      website: 'https://www.electronjs.org/',
      displayInTopList: true
    },
    gatsby: {
      name: 'Gatsby',
      logo: 'gatsby.svg',
      website: 'https://www.gatsbyjs.org/',
      displayInTopList: true
    },
    antd: {
      name: 'Ant Design',
      logo: 'ant-design.svg',
      website: 'https://ant.design/',
      displayInTopList: true
    },
    fabric: {
      name: 'Fabric UI',
      logo: 'fabric.svg',
      website: 'https://developer.microsoft.com/en-us/fabric',
      displayInTopList: false
    },
    netlify: {
      name: 'Netlify',
      logo: 'netlify.svg',
      website: 'https://www.netlify.com/',
      displayInTopList: false
    }
  },
  skills: {
    soft: [
      {
        skillText: 'Focus on business needs',
        selfValue: 100,
        feedbackValue: 100
      },
      {
        skillText: 'Team building / Leadership',
        selfValue: 80,
        feedbackValue: 85
      },
      {
        skillText: 'Coaching',
        selfValue: 80,
        feedbackValue: 100
      },
      {
        skillText: 'Decision making',
        selfValue: 90,
        feedbackValue: 90
      },
      {
        skillText: 'Communication',
        selfValue: 90,
        feedbackValue: 95
      },
      {
        skillText: 'Integrity',
        selfValue: 95,
        feedbackValue: 95
      }
    ],
    hard: [
      {
        skillText: 'Webpack',
        selfValue: 85,
        feedbackValue: 90
      },
      {
        skillText: 'ES6 / ES2017',
        selfValue: 80,
        feedbackValue: 85
      }
    ],
    otherHard: [
      'Adobe Photoshop',
      'Angular.js',
      'AWS',
      'Bootstrap',
      'Backbone.js',
      'CSS 3',
      'GIT',
      'Gulp',
      'Google Maps API',
      'D3.js',
      'Ember.js',
      'Fabric UI',
      'Figma',
      'Handlebars',
      'HG',
      'HTML 5',
      'Illustrator',
      'Jest',
      'JIRA',
      'LESS',
      'Material UI',
      'Meteor.js',
      'Regexp',
      'REST',
      'SASS',
      'Semantic UI',
      'Socket.io',
      'Stylus',
      'Styled Components',
      'Vanilla JS',
      'Underscore / Lodash',
      'Counter-Strike'
    ],
    otherSoft: [
      'Scheduling',
      'Risk Management',
      'Critical Thinking',
      'Problem Solving',
      'Project Recovery',
      'Task Management',
      'Business Process Improvement',
      'Budgeting',
      'UX Prototyping',
      'Requirements Analysis',
      'Conflict Management',
      'Policy Knowledge'
    ]
  },
  workExperience: [
    {
      company: {
        name: 'N-iX',
        logoHeight: 40,
        logo: 'n-ix.svg',
        period: 'March 2018 - now'
      },
      projects: [
        {
          name: 'CleverBridge',
          logoHeight: 40,
          logo: 'cleverbridge.svg',
          role: 'JavaScript Tech Leader',
          description:
            'All-in-one ecommerce and subscription billing solution for software, SaaS & digital goods.',
          stack: {
            me: ['React JS', 'Redux', 'Apollo', 'GraphQL', 'Webpack', 'AntD'],
            all: ['.Net']
          },
          achievements: [
            'Chose and approved tech stack with the client',
            'Hired and built the team from scratch',
            'Created frontend architecture',
            'Regularly negotiated with stakeholders',
            'Validated module requirements',
            'Advised other client development teams',
            'Conducted a code review and knowledge sharing',
            'Communicated with backend team',
            'Successfully released'
          ]
        }
      ]
    },
    {
      company: {
        name: 'MOQOD',
        logoHeight: 30,
        logo: 'moqod.png',
        period: 'August 2016 - March 2018'
      },
      projects: [
        {
          name: 'Herofi',
          logoHeight: 35,
          logo: 'herofi.svg',
          role: 'JavaScript Tech Leader',
          description:
            'HEROFi combines visual media and data visualization to create the most advanced retail entertainment networks in the world.',
          stack: {
            me: ['React JS', 'Redux', 'Webpack', 'Meteor.js', 'AWS IoT', 'AntD'],
            all: ['AWS']
          },
          achievements: [
            'has built a team from scratch',
            'successfully and predictably delivering of the product',
            'high level of customer satisfaction',
            'business objectives are met',
            'a lot of my ideas were introduced and implemented (GitFlow, GitLab CI, Jira, new functionality)',
            'insisted on rewriting the project - have borne fruit',
            'chosen tech stack allow us to avoid hiring other professionals (C#, QT)',
            'was proactive based on an understanding of the business, not just tech. requirements',
            'mastered and taught new technologies (react + antd, redux, aws, jest)'
          ]
        }
      ]
    },
    {
      company: {
        name: 'EPAM',
        logoHeight: 40,
        logo: 'epam.svg',
        period: 'June 2014 - August 2016'
      },
      projects: [
        {
          name: 'SportChek',
          logoHeight: 40,
          logo: 'sportchek.svg',
          role: 'JavaScript Team Leader',
          description: 'Interactive kiosk with multiple screens',
          stack: {
            me: ['Angular.js', 'meteor.js', 'REST', 'Socket.io', 'Stylus', 'Gulp']
          }
        },
        {
          name: 'Adidas',
          logoHeight: 60,
          logo: 'adidas.svg',
          role: 'Senior JavaScript developer',
          description: 'Marketing portal for Adidas Group',
          stack: {
            me: ['Backbone.js', 'Marionette.js', 'REST', 'Stylus', 'Gulp'],
            all: ['Java']
          }
        }
      ]
    },
    {
      company: {
        name: 'CIKLUM',
        period: 'January 2013 - June 2014',
        logoHeight: 50,
        logo: 'ciklum.svg'
      },
      projects: [
        {
          name: 'Cutco',
          logoHeight: 55,
          logo: 'cutco.svg',
          role: 'Senior JavaScript Developer',
          description:
            'Cutco’s product line includes kitchen knives and utensils, shears, flatware, cookware and sporting knives.',
          stack: {
            me: ['Ember.js', 'REST', 'HTML', 'SASS'],
            all: ['Java']
          }
        },
        {
          name: 'Ovia Health',
          logoHeight: 30,
          logo: 'ovia_health.svg',
          role: 'Senior Frontend Developer',
          description:
            'Ovia Health delivers the #1 health solution for women and families.',
          stack: {
            me: ['jQuery', 'HTML', 'SASS', 'Django', 'Bootstrap', 'Twig'],
            all: ['PHP', 'Symphony']
          }
        }
      ]
    },
    {
      company: {
        name: 'LUXOFT',
        period: 'March 2011 - January 2013',
        logoHeight: 70,
        logo: 'luxoft.svg'
      },
      projects: [
        {
          name: 'Medialogia',
          logoHeight: 40,
          logo: 'medialogia.svg',
          role: 'Web developer',
          description:
            'Service for evaluating the effectiveness of communications #1 in terms of sources: 800 million SOCMEDIA and 49000 mass media',
          stack: {
            me: ['Backbone.js', 'REST', 'jQuery', 'Bootstrap', 'HTML', 'CSS'],
            all: ['.Net']
          }
        },
        {
          name: 'Hotwire',
          logoHeight: 40,
          logo: 'hotwire.svg',
          role: 'Web developer',
          description:
            'Hotwire is a travel website that can be used to book airline tickets, hotel rooms, rental cars, and vacation packages. It operates by selling off unsold travel inventory at discounted prices.',
          stack: {
            me: ['Javascript', 'CSS', 'JSP'],
            all: ['Java', 'Spring']
          }
        }
      ]
    },
    {
      company: {
        name: 'ISRA Group',
        period: 'June 2009 - March 2011'
      },
      projects: [
        {
          name: 'Trading systems',
          role: 'HTML developer',
          description: 'Trading systems',
          stack: {
            me: ['Wordpress', 'Drupal', 'Joomla', 'jQuery', 'Bootstrap', 'HTML', 'CSS'],
            all: ['PHP']
          }
        }
      ]
    }
  ],
  education: [
    {
      place: 'Kiev Institute of Business and Technologies (KIBT)',
      period: '2012 - 2014',
      degree: "Bachelor's Degree, Management, Managment of business activities"
    },
    {
      place:
        'Moscow State Institute of Radio engineering, Electronics and Automation (MIREA)',
      period: '2007 - 2012',
      degree:
        "Master's Degree, Computer Science And Information Technologies, Software and computing systems (software engineer)"
    }
  ],
  volunteer: [
    {
      place: 'Bionic University',
      logo: 'bionic.png',
      logoHeight: 50,
      period: '2015',
      description:
        'I conducted a series of lectures for BIONIC University. Main topics: HTML / CSS / jQuery / Handlebars / Ajax / Production experience / Best practices'
    }
  ]
}

export default data
