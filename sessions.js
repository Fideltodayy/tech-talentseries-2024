// Placeholder data for sessions by day
const sessions = {
  Monday: [
    {
      id: "cyber-security",
      title: "Introduction to Cyber Security",
      time: "09:00 AM - 10:30 AM",
      description: "A deep dive into cyber security.",
      presenter: {
        name: "Jane Doe",
        linkedin: "https://www.linkedin.com/in/janedoe",
        title: "Cyber Security Expert",
        bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
      id: "business-analysis",
      title: "Business Analysis",
      time: "09:00 AM - 10:30 AM",
      description: "How to approach business analysis.",
      presenter: {
        name: "John Smith",
        title: "Cyber Security Expert",
        bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
      id: "code-future-1",
      title: "Code The Future - Session 1",
      time: "09:00 AM - 10:30 AM",
      description:
        "This session introduced us to the course, our tutors, and the tech industry.",
    },
    {
      id: "code-future-2",
      title: "Code The Future - Session 2",
      time: "09:00 AM - 10:30 AM",
      description: "In this session, we were introduced to HTML.",
    },
    {
      id: "gen-ai-insights",
      title: "Gen AI Insights with Laura Shwartz",
      time: "09:00 AM - 10:30 AM",
      description:
        "In this session, we explored generative AI and its applications.",
    },
  ],
  // ... (keep other days' data)
  Tuesday: [
    {
      id: "data-science",
      title: "Introduction to Data Science",
      time: "09:00 AM - 10:30 AM",
      description: "Learn the basics of data science and its applications.",
      presenter: {
        name: "Alice Johnson",
        title: "Cyber Security Expert",
        bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
      id: "code-future-3",
      title: "Code The Future - Session 1",
      time: "09:00 AM - 10:30 AM",
      description:
        "This session introduced us to the course, our tutors, and the tech industry.",
    },
    {
      id: "code-future-4",
      title: "Code The Future - Session 2",
      time: "09:00 AM - 10:30 AM",
      description: "In this session, we were introduced to HTML.",
    },
  ],
  Wednesday: [
    {
      id: "machine-learning",
      title: "Machine Learning 101",
      time: "09:00 AM - 10:30 AM",
      description: "An overview of machine learning concepts and techniques.",
      presenter: {
        name: "Carol White",
        title: "Cyber Security Expert",
        bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
      id: "cloud-computing",
      title: "Cloud Computing",
      time: "09:00 AM - 10:30 AM",
      description: "Understanding cloud computing and its benefits.",
      presenter: {
        name: "David Green",
        title: "Cyber Security Expert",
        bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
      id: "code-future-5",
      title: "Code The Future - Session 1",
      time: "09:00 AM - 10:30 AM",
      description:
        "This session introduced us to the course, our tutors, and the tech industry.",
    },
    {
      id: "code-future-6",
      title: "Code The Future - Session 2",
      time: "09:00 AM - 10:30 AM",
      description: "In this session, we were introduced to HTML.",
    },
  ],
  Thursday: [
    {
      id: "devops",
      title: "Introduction to DevOps",
      time: "09:00 AM - 10:30 AM",
      description: "Learn about DevOps practices and tools.",
      presenter: {
        name: "Eve Black",
        title: "Cyber Security Expert",
        bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
      id: "cyber-security-advanced",
      title: "Advanced Cyber Security",
      time: "09:00 AM - 10:30 AM",
      description: "Dive deeper into advanced cyber security topics.",
      presenter: {
        name: "Frank Blue",
        title: "Cyber Security Expert",
        bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
      id: "Code The Future ",
      title: "Personal Site - Drop in Call",
      time: "09:00 AM - 10:30 AM",
      description:
        "This session introduced us to the course, our tutors, and the tech industry.",
    },
  ],
  Friday: [
    {
      id: "ai-ethics",
      title: "AI Ethics",
      time: "09:00 AM - 10:30 AM",
      description: "Explore the ethical considerations in AI development.",
      presenter: {
        name: "Grace Red",
        title: "Cyber Security Expert",
        bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
      id: "project-management",
      title: "Project Management",
      time: "09:00 AM - 10:30 AM",
      description: "Learn the fundamentals of project management.",
      presenter: {
        name: "Henry Yellow",
        title: "Cyber Security Expert",
        bio: "Jane Doe is a renowned expert in cyber security with over 10 years of experience.",
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
  ],
};
