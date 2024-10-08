// Placeholder data for sessions by day
const sessions = {
  Monday: [
    {
      id: "Opening Call",
      title: "Opening Call",
      time: "09:30 AM - 9:50 AM",
      description: "Tech Talent September 2024 - Opening Call",
      presenter: {
        name: "Jimi Agoro",
        // linkedin: "https://www.linkedin.com/in/janedoe",
        title: "Cyber Security Expert",
      },
      content: `
        <p>The meeting was an orientation session for the Tech Talent September 2024 program, held at the Nairobi IBM Research Center. Participants were informed about the recording policy and the use of Slack for communication. Issues with Slack invites and admissions were addressed, with specific instructions for those awaiting approval. The session included troubleshooting for participants experiencing difficulties with Slack, such as not finding the correct workspace or issues with expired invites. The facilitators assured that all technical issues would be resolved before the start of the first training session. The meeting concluded with a reminder to join the cybersecurity session and an offer of headsets for those in need.</p>
            `,
    },
    {
      id: "cyber-security-1",
      title: "Introduction to Cyber Security - Day 1",
      time: "10:00 AM - 11:00 AM",
      description: "An introduction to cyber security.",
      presenter: {
        name: "Ameera Aumeerally",
        linkedin: "https://www.linkedin.com/in/ameera-aumeerally-34017b2/",
        title: "Cyber Security Expert",
      },
      content: `
        <p>In this session, we'll cover the following topics:</p>
        <ul>
          <li>Basic principles of cyber security</li>
          <li>Common threats and vulnerabilities</li>
          <li>Best practices for protecting digital assets</li>
          <li>Introduction to encryption and secure communication</li>
        </ul>
        <p>By the end of this session, you'll have a solid foundation in cyber security concepts and be prepared to tackle more advanced topics.</p>
            `,
    },
    {
      id: "business-analysis-1",
      title: "Introduction to Business Analysis - Day 1",
      time: "11:00 AM - 12:00 AM",
      description: "How to approach business analysis.",
      presenter: {
        name: "Gwyn Chigwa",
        title: "Managing Business Analyst",
      },
      content: `
        <p>In this session, we covered the following topics:</p>
        <ul>
          <li>What is Business Analysis</li>
          <li>Definition of Business Analysis</li>
          <li>Who is a Business Analyst</li>
          <li>Skills & Experience</li>
          <li>Business Analysis Approach</li>
          <li>Training & Resources</li>
        </ul>
        <p>This session provided a comprehensive overview of business analysis, including the role and skills required for a business analyst, different approaches to business analysis, and available training and resources.</p>
            `,
    },
    {
      id: "Code The Future - Session 1",
      title: "Code The Future - Session 1",
      time: "12:45 PM - 2:45 PM",
      description:
        "This session introduced us to the course, our tutors, and the tech industry.",
      presenter: {
        name: "Parul Chhabra ",
        linkedin: "https://www.linkedin.com/in/parulgrover/",
        title: "Senior Software Engineer",
      },
      content: `
          <p>The session covered downloading and using VS Code, creating and managing repositories on GitHub, and the process of committing and pushing changes. Parul demonstrated how to create a new repository, clone it into VS Code, and commit changes. The importance of version control, branches, and the workflow for collaborative coding were also explained. The session aimed to ensure participants understood the basics of setting up a development environment and using GitHub for code management.</p>
        `,
    },
    {
      id: "Code The Future - Session 2",
      title: "Code The Future - Session 2",
      time: "03:00 PM - 05:00 PM",
      description:
        "In this session, we were taught how to use dev tools in your browser and also got introduced to HTML.",
      presenter: {
        name: "Jacqueline (McDonald) Jones",
        linkedin: "https://www.linkedin.com/in/j4cquelinejones/",
        title: "Front-end Developer",
      },
      content: `
        <p>The meeting focused on the Tech Talent - Code The Future session 2, covering HTML basics. Key points included HTML's role in structuring web pages, including the doctype, HTML element, head tag, meta charset, title tag, and body element. Common HTML elements like headings, paragraphs, and lists were discussed. Participants were guided through creating their first web page using VS Code and the live server extension.</p>
      `,
    },
    {
      id: "gen-ai-insights-1",
      title: "Gen AI Insights",
      time: "09:00 AM - 10:30 AM",
      description:
        "In this session, we explored generative AI and its applications.",
      presenter: {
        name: "Laura Shwartz",
        linkedin: "https://www.linkedin.com/in/larisa-shwartz-2368b71b/",
        title: "Distinguished Engineer & Researcher",
      },
      content: `
          <p>Laura Schwartz discussed generative AI (GenAI), emphasizing its generative capabilities based on transformers and autoencoders. She highlighted the rapid development from 2014 to 2022, noting significant improvements in models like ChatGPT. Key use cases include Q&A, summarization, translation, and sentiment analysis. Challenges such as hallucination, catastrophic forgetting, memory limitations, and data quality issues were addressed. Schwartz introduced a framework for effective GenAI development, stressing the importance of opportunity assessment, data preparation, model selection, and user validation. Future capabilities like chain of thought generation were also mentioned.</p>
        `,
    },
  ],
  // ... (keep other days' data)
  Tuesday: [
    {
      id: "cyber-security-2",
      title: "Introduction to Cyber Security Day 2",
      time: "10:00 AM - 11:00 AM",
      description:
        "Basics of cybersecurity, CIA triad, roles, and building a security culture.",
      presenter: {
        name: "Hauwa Saleh",
        linkedin: "https://www.linkedin.com/in/hauwa-s-3249a61b1/",
        title: "Security Operations Analyst",
      },
      content: `
        <p>The meeting introduced the basics of cybersecurity, emphasizing the CIA triad (Confidentiality, Integrity, Availability) and the importance of understanding assets and critical data. Threats, vulnerabilities, attacks, and risks were defined, with examples like a paper document's security. Privacy was highlighted as a human right, with implications for data protection laws. The discussion covered various cybersecurity roles, including AppSec champions, security operation analysts, and DevSecOps, detailing their responsibilities and tools used. The importance of building a security culture within organizations was stressed, along with the need for continuous awareness and training.</p>
      `,
    },
    {
      id: "business-analysis-2",
      title: "Introduction Business Analysis - Day 2",
      time: "11:00 AM - 12:00 AM",
      description: "How to approach business analysis.",
      presenter: {
        name: "Franklin Awurigwe",
        linkedin: "https://www.linkedin.com/in/franklin-a-7a7a07b7/",
        title: "Senior Business Analyst",
      },
      content: `
        <p>In this session, we covered the following topics:</p>
        <ul>
          <li>Recap of Day 1</li>
          <li>Requirements</li>
          <li>What is a requirement and what are they used for?</li>
          <li>Types of Requirements</li>
          <li>Business analyst techniques to elicit requirements</li>
          <li>Stakeholders</li>
          <li>Stakeholder Management</li>
        </ul>
        <p>This session provided a comprehensive overview of requirements in business analysis, including their definition, types, and the techniques used to elicit them. We also discussed the importance of stakeholders and how to manage them effectively.</p>
            `,
    },
    {
      id: "Code The Future - Session 3",
      title: "Code The Future - Session 3",
      time: "12:45 PM - 2:45 PM",
      description:
        "This session introduced us to the course, our tutors, and the tech industry.",
      presenter: {
        name: "Jacqueline (McDonald) Jones",
        linkedin: "https://www.linkedin.com/in/j4cquelinejones/",
        title: "Front-end Developer",
      },
      content: `
          <p>The session covered downloading and using VS Code, creating and managing repositories on GitHub, and the process of committing and pushing changes. Parul demonstrated how to create a new repository, clone it into VS Code, and commit changes. The importance of version control, branches, and the workflow for collaborative coding were also explained. The session aimed to ensure participants understood the basics of setting up a development environment and using GitHub for code management.</p>
        `,
    },
    {
      id: "Code The Future - Session 2",
      title: "Code The Future - Session 2",
      time: "03:00 PM - 05:00 PM",
      description:
        "In this session, we were taught how to use dev tools in your browser and also got introduced to HTML.",
      presenter: {
        name: "Parul Chhabra ",
        linkedin: "https://www.linkedin.com/in/parulgrover/",
        title: "Senior Software Engineer",
      },
      content: `
        <p>The meeting focused on the Tech Talent - Code The Future session 2, covering HTML basics. Key points included HTML's role in structuring web pages, including the doctype, HTML element, head tag, meta charset, title tag, and body element. Common HTML elements like headings, paragraphs, and lists were discussed. Participants were guided through creating their first web page using VS Code and the live server extension.</p>
      `,
    },
    {
      id: "ai-automation-insight",
      title: "AI Automation Insight",
      time: "05:15 PM - 06:00 PM",
      description:
        "An overview of AI-infused automation, its use cases, and future trends.",
      presenter: {
        name: "Jim Laredo",
        linkedin: "https://www.linkedin.com/in/laredo/",
        title: "Distinguished Engineer & Researcher",
      },
      content: `
        <p>In this session, we delved into the concept of AI-infused automation. We started by understanding what automation is and explored various use cases in the enterprise. The session highlighted how AI can be integrated into automation processes, enhancing efficiency and effectiveness. We discussed the different stages of automation, including build time and runtime, and learned about the emerging role of agents in automation. The session concluded with a forward-looking discussion on the future of AI in automation and what to expect next. Additionally, security vulnerabilities were demonstrated to show potential risks and mitigation strategies.</p>
      `,
    },
  ],
  Wednesday: [
    {
      id: "cyber-security-3",
      title: "Introduction to Cyber Security Day 3",
      time: "10:00 AM - 11:00 AM",
      description: "A session on Security vulnerabilities within systems",
      presenter: {
        name: "Babatunde Kassim",
        linkedin: "https://www.linkedin.com/in/babatunde-k-429b35166/",
        title: "Senior Python Application Developer",
      },
      content: `
        <p>In this session, we delved into the concept of security vulnerabilities. We explored various types of vulnerabilities, including software bugs, configuration issues, and human factors. The session highlighted the importance of identifying and mitigating these vulnerabilities to protect digital assets. We also discussed common attack vectors and how to defend against them. Practical demonstrations were provided to illustrate how vulnerabilities can be exploited and the potential impact on organizations. By the end of the session, participants gained a deeper understanding of the importance of security in the digital age and the steps necessary to safeguard their systems.</p>
      `,
    },
    {
      id: "business-analysis-3",
      title: "Introduction Business Analysis - Day 3",
      time: "11:00 AM - 12:00 AM",
      description: "Discussion on Software Development Lifecycle (SDLC)",
      presenter: {
        name: "Olusola Oke",
        linkedin: "https://www.linkedin.com/in/olusola-emmanuel-oke-9438631bb/",
        title: "Business Analyst",
      },
      content: `
        <p>In this session, we covered the following topics:</p>
        <ul>
          <li>Recap of Day 2</li>
          <li>Software Development Lifecycle (SDLC)</li>
          <li>Types of Software Development Lifecycle</li>
          <li>Waterfall</li>
          <li>Agile</li>
          <li>Business Analyst Tools</li>
          <li>Any Questions</li>
        </ul>
        <p>This session provided a comprehensive overview of the Software Development Lifecycle (SDLC), including different methodologies such as Waterfall and Agile. We also explored various tools used by business analysts to facilitate the development process. The session concluded with a Q&A segment, allowing participants to clarify any doubts and gain deeper insights into the topics discussed.</p>
        `,
    },
    {
      id: "Code The Future - Session 3",
      title: "Code The Future - Session 3",
      time: "12:45 PM - 2:45 PM",
      description: "This session focused on accessibility in web development.",
      presenter: {
        name: "Jacqueline (McDonald) Jones",
        linkedin: "https://www.linkedin.com/in/j4cquelinejones/",
        title: "Front-end Developer",
      },
      content: `
          <p>In this session, we were introduced to the importance of accessibility in web development. We learned about best practices for making applications accessible to everyone, including those with disabilities. The session emphasized the significance of incorporating accessibility features from the beginning of the development process.</p>
          <p>We also had the opportunity to work on our personal projects, applying the knowledge and skills we have gained throughout the course. The goal was to create an application that we could host publicly on GitHub pages, showcasing our abilities to potential employers.</p>
          <p>Key takeaways from this session included:</p>
          <ul>
        <li>Understanding the importance of accessibility in web development.</li>
        <li>Learning best practices for implementing accessibility features.</li>
        <li>Applying our skills to create a personal project that can be showcased in a portfolio.</li>
          </ul>
        `,
    },
    {
      id: "Code The Future - Session 4",
      title: "Code The Future - Session 4",
      time: "03:00 PM - 05:00 PM",
      description: "Accessibility and Personal Project Planning",
      presenter: {
        name: "Parul Chhabra ",
        linkedin: "https://www.linkedin.com/in/parulgrover/",
        title: "Senior Software Engineer",
      },
      content: `
        <p>In this session, we learned about the importance of making applications accessible to everyone, including those with disabilities. We discussed best practices for implementing accessibility features and why they are crucial for creating inclusive applications. Additionally, we had the opportunity to work on our personal projects, applying the knowledge and skills we have gained throughout the course. The goal was to create an application that we could host publicly on GitHub pages, showcasing our abilities to potential employers.</p>
        <p>Key takeaways from this session included:</p>
        <ul>
          <li>Understanding the importance of accessibility in web development.</li>
          <li>Learning best practices for implementing accessibility features.</li>
          <li>Applying our skills to create a personal project that can be showcased in a portfolio.</li>
        </ul>
      `,
    },
    {
      id: "soft-skills-for-techies",
      title: "Beyond Code: The Vital Role of Soft Skills for Hardcore Techies",
      time: "05:15 PM - 06:00 PM",
      description:
        "A session on the importance of soft skills for tech professionals.",
      presenter: {
        name: "Lysa Bank",
        // linkedin: "https://www.linkedin.com/in/larisa-shwartz-2368b71b/",
        title: "Distinguished Engineer",
      },
      content: `
        <p>In this session, we delved into the often-overlooked yet crucial aspect of a programmer’s toolkit: soft skills. While technical proficiency is essential, soft skills such as effective communication, teamwork, adaptability, leadership, and negotiating are equally important for career advancement and workplace harmony. We explored how these skills enhance your ability to differentiate yourself from your peer group of equally skilled developers and become well-rounded professionals who can thrive in any environment. Through practical examples, attendees learned how to cultivate and apply their soft skills to build relationships, foster lasting impressions, generate value, and make an impact.</p>
        <h3>What I Learned</h3>
        <ul>
          <li>The importance of soft skills in complementing technical abilities.</li>
          <li>How effective communication can improve teamwork and project outcomes.</li>
          <li>The role of adaptability in navigating changing work environments and technologies.</li>
          <li>Leadership skills that can help in guiding teams and projects to success.</li>
          <li>Negotiation techniques that are valuable in various professional scenarios.</li>
          <li>Practical ways to cultivate and apply these soft skills in the workplace.</li>
        </ul>
      `,
    },
  ],
  Thursday: [
    {
      id: "cyber-security-4",
      title: "Introduction to Cyber Security Day 4",
      time: "10:00 AM - 11:00 AM",
      description: "A session on Security vulnerabilities within systems",
      presenter: {
        name: "Abimbola Sadiku",
        linkedin: "https://www.linkedin.com/in/babatunde-k-429b35166/",
        title: "Senior Test Specialist / Consultant",
      },
      content: `
        <p>In this session, we delved into the concept of security vulnerabilities. We explored various types of vulnerabilities, including software bugs, configuration issues, and human factors. The session highlighted the importance of identifying and mitigating these vulnerabilities to protect digital assets. We also discussed common attack vectors and how to defend against them. Practical demonstrations were provided to illustrate how vulnerabilities can be exploited and the potential impact on organizations. By the end of the session, participants gained a deeper understanding of the importance of security in the digital age and the steps necessary to safeguard their systems.</p>
      `,
    },
    {
      id: "sme-talk",
      title: "A talk from the UK Client Innovation Centre Technical Leader",
      time: "11:00 AM - 11:30 AM",
      description:
        " A talk from the UK Client Innovation Centre Technical Leader",
      presenter: {
        name: "Chris Dalby",
        linkedin: "https://www.linkedin.com/in/chris-dalby-2409744/",
        title: "Senior Business Analyst",
      },
      content: `
        <p>Chris Dalby shared his extensive experience as an Agile full stack engineer and CIC UK Technical Lead. With over 20 years in the industry and more than 8 years at IBM, Chris provided valuable insights into his role as Chief Engineer on a Public Sector account. He discussed the challenges and opportunities in the field, emphasizing the importance of adaptability and continuous learning.</p>
        <h3>What I Learned</h3>
        <ul>
          <li>The significance of Agile methodologies in managing complex projects.</li>
          <li>How to effectively lead technical teams in a dynamic environment.</li>
          <li>The importance of staying updated with the latest technologies and industry trends.</li>
          <li>Strategies for overcoming challenges in public sector projects.</li>
          <li>The value of experience and long-term commitment in achieving career success.</li>
        </ul>
      `,
    },
    {
      id: "pitching-session",
      title:
        "Innovation Ideas presentation with Feedback from IBM Associate partners",
      time: "12:45 PM - 2:45 PM",
      description:
        "Innovation Ideas presentation with Feedback from IBM Associate partners",
      presenter: {
        name: "Mary Egwenu",
        linkedin: "https://www.linkedin.com/in/mary-egwenu54321/",
        title: "Front-end Developer",
      },
      content: `
        <p>Attendees will have a chance to provide an overview of their innovative ideas. In return, IBM Associate Partners will give valuable feedback about the ideas presented. This interactive session will give attendees insight into what industry SMEs think of their ideas, drawing from their extensive experience working with large multinational companies.</p>
        <p>Associate Partners <a href="https://www.linkedin.com/in/andrew-caramba-coker/" aria-label="LinkedIn profile of Andrew Caramba-Coker">Andrew Caramba-Coker</a> and <a href="https://www.linkedin.com/in/mary-egwenu54321/" aria-label="LinkedIn profile of Mary Egwenu">Mary Egwenu</a> will provide feedback.</p>
        <h3>What I Learned</h3>
        <ul>
          <li>The importance of presenting innovative ideas clearly and concisely.</li>
          <li>How to receive and incorporate feedback from industry experts.</li>
          <li>Insights into what industry SMEs look for in innovative ideas.</li>
          <li>The value of interactive sessions in gaining practical knowledge and experience.</li>
          <li>Understanding the perspectives of professionals with extensive experience in large multinational companies.</li>
        </ul>
      `,
    },
    {
      id: "Code The Future Personal Site - Drop in Call",
      title: "Code The Future Personal Site - Drop in Call",
      time: "03:00 PM - 05:00 PM",
      description: "Personal Site - Drop in Call",
      presenter: {
        name: "Jacqueline (McDonald) Jones",
        linkedin: "https://www.linkedin.com/in/j4cquelinejones/",
        title: "Front-end Developer",
      },
      content: `
        <p>During this session, we focused on developing our personal websites using the skills and resources we have gained throughout the course. We had the opportunity to apply our knowledge of HTML, CSS, and JavaScript to create and enhance our personal projects. The tutors were available to provide guidance and support, helping us troubleshoot issues and refine our designs. This hands-on experience was invaluable in solidifying our understanding of web development concepts and improving our ability to create functional and visually appealing websites.</p>
        <h3>What I Learned</h3>
        <ul>
          <li>How to apply HTML, CSS, and JavaScript skills to real-world projects.</li>
          <li>The importance of creating functional and visually appealing designs.</li>
          <li>Effective troubleshooting and problem-solving techniques.</li>
          <li>The value of receiving guidance and feedback from experienced tutors.</li>
          <li>How to refine and enhance personal projects for a professional portfolio.</li>
        </ul>
      `,
    },
  ],
  Friday: [
    {
      id: "employability-session",
      title: "Tech Talent CV & Employability Session",
      time: "10:30 AM - 11:00 AM",
      description:
        "A session focused on enhancing employability skills and CV writing for tech talent.",
      presenter: {
        name: "Lilli Belfield",
        linkedin: "https://www.linkedin.com/in/lilli-belfield/",
        title: "HR Business Partner",
      },
      content: `
        <p>
          The session focused on enhancing employability skills and CV writing for tech talent. Key points included the importance of a well-structured CV, the role of LinkedIn in job searches, and the significance of soft skills in the tech industry. Participants were guided on how to tailor their CVs to specific job descriptions, emphasizing the need to highlight relevant skills and experience. The session also covered the importance of networking, personal branding, and continuous learning in the tech industry. 
        </p>
      `,
    },
    {
      id: "strategy-and-partnership-management",
      title: "Strategy and Partnership Management",
      time: "11:00 AM - 12:00 AM",
      description:
        "An insightful session on career development and overcoming professional challenges.",
      presenter: {
        name: "Bernard Szczech",
        linkedin: "https://www.linkedin.com/in/bernard-szczech/",
        title: "Leader, Strategic Partner Management, IBM Consulting ",
      },
      content: `
        <p>In Bernard's session, we explored how he identifies the challenges he wants to tackle in his career and navigates them to a successful conclusion. He was open about the fears he has faced and how he has sought to overcome them. Bernard suggested strategies for career development, focusing on maximizing choice and opportunity. He encouraged us to welcome challenges and be prepared with great questions to ask. This session provided valuable insights into career development and overcoming professional obstacles.</p>
        `,
    },
    {
      id: " Code The Future Personal Site - Dop In Call",
      title: " Code The Future Personal Site - Dop In Call",
      time: "12:45 PM - 2:45 PM",
      description: "Personal Site - Dop In Call",
      presenter: {
        name: "Jacqueline (McDonald) Jones",
        linkedin: "https://www.linkedin.com/in/j4cquelinejones/",
        title: "Front-end Developer",
      },
      content: `
        <p>During this session, we focused on developing our personal websites using the skills and resources we have gained throughout the course. We had the opportunity to apply our knowledge of HTML, CSS, and JavaScript to create and enhance our personal projects. The tutors were available to provide guidance and support, helping us troubleshoot issues and refine our designs. This hands-on experience was invaluable in solidifying our understanding of web development concepts and improving our ability to create functional and visually appealing websites.</p>
      `,
    },
    {
      id: "Code the Future - Show Case Presentation Call",
      title: "Code the Future - Show Case Presentation Call",
      time: "03:00 PM - 05:30 PM",
      description: "Show Case Presentation Call",
      presenter: {
        name: "Parul Chhabra ",
        linkedin: "https://www.linkedin.com/in/parulgrover/",
        title: "Senior Software Engineer",
      },
      content: `
        <p>Everyone got a chance to share and showcase their work. I witnessed beautifull outcomes from my colleagues, especially with the limited time we had. We ended the course with a networking session to enable us all stay in touch!
</p>
      `,
    },
    {
      id: "Closure Call",
      title: "Tech Talent September 2024 - Closure Call",
      time: "05:30 PM - 06:00 PM",
      description: "Tech Talent September 2024 - Closure Call by Jimi Agoro",
      presenter: {
        name: "Jimi Agoro",
        title: "Cyber Security Expert",
      },
      content: `
          <p>
             Jimi Agoro led the closure call for the Tech Talent September 2024 program. Participants were thanked for their active participation and engagement throughout the program. The session included a recap of the key learnings and achievements of the program, highlighting the progress made by the participants. Jimi encouraged the participants to continue their learning journey and apply the skills they had acquired in their professional lives. The meeting concluded with a networking session to enable participants to stay connected and continue supporting each other in their career development.
          </p>
        `,
    },
  ],
};
