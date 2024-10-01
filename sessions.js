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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
      title: "Introduction Business Analysis - Day 1",
      time: "11:00 AM - 12:00 AM",
      description: "How to approach business analysis.",
      presenter: {
        name: "Gwyn Chigwa",
        title: "Managing Business Analyst",
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
      },
      content: `
          <p>Laura Schwartz discussed generative AI (GenAI), emphasizing its generative capabilities based on transformers and autoencoders. She highlighted the rapid development from 2014 to 2022, noting significant improvements in models like ChatGPT. Key use cases include Q&A, summarization, translation, and sentiment analysis. Challenges such as hallucination, catastrophic forgetting, memory limitations, and data quality issues were addressed. Schwartz introduced a framework for effective GenAI development, stressing the importance of opportunity assessment, data preparation, model selection, and user validation. Future capabilities like chain of thought generation were also mentioned.</p>
        `,
    },
  ],
  Wednesday: [
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
      },
      content: `
          <p>Laura Schwartz discussed generative AI (GenAI), emphasizing its generative capabilities based on transformers and autoencoders. She highlighted the rapid development from 2014 to 2022, noting significant improvements in models like ChatGPT. Key use cases include Q&A, summarization, translation, and sentiment analysis. Challenges such as hallucination, catastrophic forgetting, memory limitations, and data quality issues were addressed. Schwartz introduced a framework for effective GenAI development, stressing the importance of opportunity assessment, data preparation, model selection, and user validation. Future capabilities like chain of thought generation were also mentioned.</p>
        `,
    },
  ],
  Thursday: [
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
      },
      content: `
          <p>Laura Schwartz discussed generative AI (GenAI), emphasizing its generative capabilities based on transformers and autoencoders. She highlighted the rapid development from 2014 to 2022, noting significant improvements in models like ChatGPT. Key use cases include Q&A, summarization, translation, and sentiment analysis. Challenges such as hallucination, catastrophic forgetting, memory limitations, and data quality issues were addressed. Schwartz introduced a framework for effective GenAI development, stressing the importance of opportunity assessment, data preparation, model selection, and user validation. Future capabilities like chain of thought generation were also mentioned.</p>
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
      },
      content: `
        <p>During this session, we focused on developing our personal websites using the skills and resources we have gained throughout the course. We had the opportunity to apply our knowledge of HTML, CSS, and JavaScript to create and enhance our personal projects. The tutors were available to provide guidance and support, helping us troubleshoot issues and refine our designs. This hands-on experience was invaluable in solidifying our understanding of web development concepts and improving our ability to create functional and visually appealing websites.</p>
      `,
    },
    {
      id: "Code the Future - Show Case Presentation Call",
      title: "Code the Future - Show Case Presentation Call",
      time: "03:00 PM - 05:00 PM",
      description: "Show Case Presentation Call",
      presenter: {
        name: "Parul Chhabra ",
        linkedin: "https://www.linkedin.com/in/parulgrover/",
        title: "Senior Software Engineer",
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
      },
      content: `
        <p>Everyone got a chance to share and showcase their work. I witnessed beautifull outcomes from my colleagues, especially with the limited time we had. We ended the course with a networking session to enable us all stay in touch!
</p>
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
        // bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
      },
      content: `
          <p>Laura Schwartz discussed generative AI (GenAI), emphasizing its generative capabilities based on transformers and autoencoders. She highlighted the rapid development from 2014 to 2022, noting significant improvements in models like ChatGPT. Key use cases include Q&A, summarization, translation, and sentiment analysis. Challenges such as hallucination, catastrophic forgetting, memory limitations, and data quality issues were addressed. Schwartz introduced a framework for effective GenAI development, stressing the importance of opportunity assessment, data preparation, model selection, and user validation. Future capabilities like chain of thought generation were also mentioned.</p>
        `,
    },
  ],
};
