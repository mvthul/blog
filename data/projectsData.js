const projectsData = [
  {
    title: 'Building Personal Blog/Portfolio',
    description: `Using Next JS to provide myself and the outside world with my personal blog/portfolio`,
    imgSrc: '',
    href: '/',
    github: '',
    tech1: 'NextJs',
    tech2: 'Tailwind',
    tech3: 'Semantic UI',
  },
  {
    title: 'HTB Certified Penetration Testing Specialist (HTB CPTS)',
    description: [
      'Penetration testing processes and methodologies',
      'Information gathering & reconnaissance techniques',
      'Attacking Windows & Linux targets',
      'Active Directory penetration testing',
      'Web application penetration testing',
      'Manual & automated exploitation',
      'Vulnerability assessment',
      'Pivoting & Lateral Movement',
      'Post-exploitation enumeration',
      'Windows & Linux Privilege escalation',
      'Vulnerability/Risk communication and reporting',
    ]
      .map((item) => `- ${item}`)
      .join('\n'),
    imgSrc: '/static/images/cpts.png',
    href: 'https://academy.hackthebox.com/exams/3/',
    github: '',
    tech1: 'Exams',
    tech2: 'HackTheBox',
    tech3: 'Pentesting',
  },
  // {
  //   title: 'Stock Portfolio Management',
  //   description: `It is a web application for managing your investment portfolio. Users can get real-time stock data and market news via Yahoo Finance, IEX Cloud, and Quandl APIs. They can also compare the performance of the stocks with charts and predict the future behaviour for the same.`,
  //   imgSrc: '',
  //   href: '',
  //   github: 'https://github.com/pycoder2000/Stock-Management',
  //   tech1: 'Django',
  //   tech2: 'SQLite',
  //   tech3: 'HTML/CSS',
  // },
  // {
  //   title: 'Sentiment Analysis',
  //   description: `This is a web app which can be used to analyze users' sentiments across different platforms using REST Apis. Made with Python, Flask, HTML, Javascript and deployed using Vercel. The model was trained using tweets from Sentiment140 dataset with 1.6 million tweets.`,
  //   imgSrc: '',
  //   href: '',
  //   github: 'https://github.com/pycoder2000/sentiment-analysis',
  //   tech1: 'Flask',
  //   tech2: 'NLTK',
  //   tech3: 'TfidfVectorizer',
  // },
  // {
  //   title: 'Salary Predictor',
  //   description: `Salary Prediction App made with StreamLit just to practice the Streamlit framework. A Streamlit demo written in pure Python to predict salary based on your years of experience.`,
  //   imgSrc: '',
  //   href: 'https://salary-predictor-stream.herokuapp.com/',
  //   github: 'https://github.com/pycoder2000/Salary',
  //   tech1: 'Python',
  //   tech2: 'Streamlit',
  //   tech3: 'Javascript',
  // },
  // {
  //   title: 'Xenith Space Shooter',
  //   description: `A Knock-off of a retro space shooter game that I made with Pygame. Xenith is a knock-off of a popular game called Space Shooters that I made for my Girlfriend on our 1st Anniversary using Pygame.`,
  //   imgSrc: '',
  //   href: '',
  //   github: 'https://github.com/pycoder2000/Xenith-Space_Shooter',
  //   tech1: 'Pygame',
  //   tech2: 'Python',
  //   tech3: 'Tkinter',
  // },
  // {
  //   title: 'Django Chat App',
  //   description: `A small real time chat application built using Django. It also uses Channels and Vanilla Javascript with Web Sockets.`,
  //   imgSrc: '',
  //   href: '',
  //   github: 'https://github.com/pycoder2000/djangochat',
  //   tech1: 'Django',
  //   tech2: 'Vanilla Javascript',
  //   tech3: 'Web Sockets',
  // },
  // {
  //   title: 'CLI Quiz',
  //   description: `"Who wants to be a Millionaire? (JavaScript Edition)" Terminal Game that I made to practice my JavaScript skills.`,
  //   imgSrc: '',
  //   href: 'https://libraries.io/npm/cliquiz-millionaire',
  //   github: 'https://github.com/pycoder2000/CLI-Quiz',
  //   tech1: 'Node',
  //   tech2: 'Javascript',
  //   tech3: 'HTML',
  // },
  // {
  //   title: 'To-Do List',
  //   description: `Clean and simple to-do list application made with Django framework, with features like : easy add tasks, delete and edit tasks, reorder tasks, login and register, mark tasks as completed with Clean UI.`,
  //   imgSrc: '',
  //   href: '',
  //   github: 'https://github.com/pycoder2000/Todo-List',
  //   tech1: 'Django',
  //   tech2: 'HTML',
  //   tech3: 'SQL',
  // },
  // {
  //   title: 'Predicting number of Shares',
  //   description: `Predicting the number of shares based on how popular the article is.`,
  //   imgSrc: '',
  //   href: '',
  //   github: 'https://github.com/pycoder2000/Predicting-Number-of-Shares',
  //   tech1: 'Scipy',
  //   tech2: 'Machine Learning',
  //   tech3: 'Linear Regression',
  // },
]

export default projectsData
