// Skills data
const skills = [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'},
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg' },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
    { name: 'SpringBoot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg' },
    { name: 'Docker' , logo:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg'},
    { name: 'AWS' , logo:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'},
    { name: 'Postman' , logo:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain.svg'},
    { name: 'Junit' , logo:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-plain-wordmark.svg'},
    { name: 'Oracle SQL' , logo:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg'},
    { name: 'Rest API' , logo:'https://velog.velcdn.com/images/hjkdw95/post/ca8c63d9-66c3-42da-8fb2-79f3a27c6876/api_rest.png'},
    { name: 'Agile Methodology' , logo:'https://thumbs.dreamstime.com/z/agile-icon-methodology-vector-development-scrum-flexible-software-logo-concept-251477234.jpg?w=360'},
    { name: 'Jenkins' , logo:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg'},
    { name: 'Apache Maven' , logo:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original-wordmark.svg'},
    { name: 'BitBucket' , logo:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original-wordmark.svg'},
    { name: 'Intellij' , logo:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg'},
    { name: 'Git & GitHub' , logo:'https://logowik.com/content/uploads/images/github9775.jpg'},
    { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg'},
    { name: 'Hibernate', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original-wordmark.svg'},
    { name: 'Source Tree', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sourcetree/sourcetree-original.svg'}
    

];

// Function to display skills
function displaySkills() {
    const skillsContainer = document.querySelector('.skill-container');
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.classList.add('col-md-3', 'skill-item', 'mb-3');
        skillItem.innerHTML = `
            <div class="card">
                <img src="${skill.logo}" class="skill-logo" alt="${skill.name}">
                <div class="card-body">
                    <p class="card-text skill-name">${skill.name}</p>
                </div>
            </div>
        `;
        skillsContainer.appendChild(skillItem);
    });
}
// Work experience data
const experiences = [
    { 
        designation: 'Software Engineer (Backend Developer)', 
        company: 'LTIMindtree,Bengaluru', 
        location: 'Bengaluru India', 
        date: 'June 2022 - January 2024', 
        description: ' Successfully implemented Microservices architecture using Spring Boot.  \n Optimized MySQL databases for efficient data storage and retrieval.\n Developed and maintained RESTful APIs for efficient communication between Microservices.\n Secured application using Spring Security with HmacSha256.\n Utilized Docker for containerization,streamlining deployment process, and ensuring consistency across different environments.\n Rapidly developed applications using Spring Boot and hosted on AWS.' 
    }
];
// Function to display work experience
function displayExperience() {
    const experienceContainer = document.querySelector('.experience-container');
    experiences.forEach(exp => {
        const experienceItem = document.createElement('div');
        experienceItem.classList.add('experience-item');
        experienceItem.innerHTML = `
            <div class="designation">${exp.designation}</div>
            <div class="details">
                 <div class="company">${exp.company}</div>
                 <div class="date">${exp.date}</div>
            </div>
            <div class="description">
                ${exp.description.split('\n').map(desc => `<li>${desc}</li>`).join('')}
            </div>
        `;
        experienceContainer.appendChild(experienceItem);
    });
}

// Projects data
const projects = [
    { name: 'Payment Validation Framework', image: 'validation.jpg',description:'Worked on day-to-day design & development of Trustly Integration using Java Spring Boot & Microservices,Build a modular validation framework, and developed critical validating rules for field & business validation,Effectively used Design Patterns like Builder pattern, Factory pattern, etc & standards across the services,Developed multiple error codes to handle system failures, and utilized spring exception handling to handle errors effectively,Securing application using Spring Security with HmacSha256 while Ecomm system connects to Payment System.' ,githubLink: 'https://github.com/Salman-Kasheef/Payment-Validation-Service' },
    { name: 'Restaurant Management Service', image: 'restaurant.jpg', description: 'Implemented a user-friendly interface for easy navigation and interaction with restaurant data, allowing users to filter and sort results by various parameters such as location, cuisine, price range, and rating ,Utilized Spring Boot framework to build a microservices-based architecture, enhancing scalability, and maintainability of the application,Implemented RESTful APIs for efficient communication between microservices and external systems, such as third-party food delivery services, social media platforms, and review sites,Utilized MySQL database to store structured data, optimizing data retrieval performance.', githubLink: 'https://github.com/Salman-Kasheef/Restaurant-Management-Service' },
    { name: 'Covid Analysis' , image: 'COVID.png', description: 'The objective of this project is to provide a system that can efficiently analyze and report COVID-19 cases in different states and districts. The system will also provide the ability to check if a patient from a particular state or district has COVID-19 or not.', githubLink:'https://github.com/Salman-Kasheef/Covid-Analysis' }, // Empty project for spacing
];
// Function to display projects
function displayProjects() {
    const projectsContainer = document.getElementById('projectsContainer');

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-container');
        projectItem.innerHTML = `
            <div class="card">
                <img src="${project.image}" class="card-img-top project-img" alt="${project.name}">
                <div class="card-body project-description">
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text">${project.description}</p>
                    <a href="${project.githubLink}" target="_blank" class="btn btn-primary">GitHub Repository</a>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectItem);
    });
}
// Certifications data
const certifications = [
    { name:'Java 8 ', image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-cc1bde38-23be-4257-bb97-8cac20690877.jpg?v=1682590253000', certificateLink: 'https://www.udemy.com/certificate/UC-cc1bde38-23be-4257-bb97-8cac20690877/' },
    { name:'Spring Boot Microservices with Spring Cloud',image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-4af87cdf-0873-4048-93a5-6831b57f4f7d.jpg?v=1678872423000', certificateLink: 'https://www.udemy.com/certificate/UC-4af87cdf-0873-4048-93a5-6831b57f4f7d/' },
    { name:'Java New Features(Java 12,Java 11,Java 10)',image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-2c24df3f-5130-4194-aec9-d7b2fdfa8c43.jpg?v=1683109976000', certificateLink: 'https://www.udemy.com/certificate/UC-2c24df3f-5130-4194-aec9-d7b2fdfa8c43/' },
    { name:'Introduction to Structured Query Language(SQL)',image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~5Y9RAC368RPK/CERTIFICATE_LANDING_PAGE~5Y9RAC368RPK.jpeg', certificateLink: 'https://www.coursera.org/account/accomplishments/verify/5Y9RAC368RPK?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course' },
    { name:'DevOps Pre-requisite',image: 'devops.png', certificateLink: 'https://kodekloud.com/certificate-verification/2D0D58EA2935-2D0D52E4B70D-2D0D4D59F135/' },
    { name:'Docker Certified Associate',image: 'docker.png', certificateLink: 'https://kodekloud.com/certificate-verification/2D0D58EA2935-2D0D53025133-2D0D4D59F135/' },
    { name:'Advance Relational Database & SQL', image: 'sql.png', certificateLink: 'https://www.coursera.org/account/accomplishments/certificate/GPPTH57PZYVY' },
    { name:'Configure a Cloud Environment in Google Cloud (GCP)',image: 'https://cdn.qwiklabs.com/we1rSpDG63LXnPwwWaepEYzHh2YZY6JxhxWjNa7QZ60%3D', certificateLink: 'https://partner.cloudskillsboost.google/public_profiles/29ac649d-8a6d-46a1-82a5-189da8f11cdf/badges/6750265?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share' },
    { name:'Google Cloud Fundamentals(Core Infrastructure)',image: 'https://cdn.qwiklabs.com/c2YC1UuO5rdWmNVT%2FcutvuyiE3DJMExXHjpOU15jvhY%3D', certificateLink: 'https://partner.cloudskillsboost.google/public_profiles/29ac649d-8a6d-46a1-82a5-189da8f11cdf/badges/6506076?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share' },
    { name:'Create & Manage Cloud Resources(GCP)',image: 'https://cdn.qwiklabs.com/XxSAXLzHABtWWAkLIYzzCNH5lgYNIrIgR3sVuHwE93k%3D', certificateLink: 'https://partner.cloudskillsboost.google/public_profiles/29ac649d-8a6d-46a1-82a5-189da8f11cdf/badges/6705745?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share' },
    { name:'Automating Infrastructure on Google Cloud with Teraform(GCP)',image: 'https://cdn.qwiklabs.com/RtE50FwTcWZ8MngFVmFwbz0RhJZ9R%2B7g8DI9O2cUEPs%3D', certificateLink: 'https://partner.cloudskillsboost.google/public_profiles/29ac649d-8a6d-46a1-82a5-189da8f11cdf/badges/6758154?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share' },
    { name:'Database Management Essentials',image: 'database.png', certificateLink: 'https://www.coursera.org/account/accomplishments/certificate/X6C9DTVZWT24' }

];

// Function to display certifications
function displayCertifications() {
    const certificationsContainer = document.getElementById('certificationsContainer');

    certifications.forEach(certification => {
        // Create certification container
        const certificationContainer = document.createElement('div');
        certificationContainer.classList.add('certification-container');

        // Create certification image
        const certificationImg = document.createElement('img');
        certificationImg.classList.add('certification-img');
        certificationImg.src = certification.image;
        certificationContainer.appendChild(certificationImg);

        // Create certification details
        const certificationDetails = document.createElement('div');
        certificationDetails.classList.add('certification-details');
        certificationDetails.innerHTML = `
            <h3>${certification.name}</h3>
            <p>${certification.expiration}</p>
            <a href="${certification.certificateLink}" target="_blank" class="btn btn-primary certification-link">View Certificate</a>
            `;
        certificationContainer.appendChild(certificationDetails);

        // Create certification name
        const certificationName = document.createElement('div');
        certificationName.classList.add('certification-name');
        certificationName.textContent = certification.name;
        certificationContainer.appendChild(certificationName);

        // Create certification link (button)
        const certificationLink = document.createElement('a');
        certificationLink.href = certification.certificateLink;
        certificationLink.textContent = 'View Certificate';
        certificationLink.classList.add('btn', 'btn-primary', 'certification-link');
        certificationLink.target = '_blank';
        certificationContainer.appendChild(certificationLink);

        // Append certification container to certifications container
        certificationsContainer.appendChild(certificationContainer);
    });
}

// Call functions to display data
displaySkills();
displayExperience();
displayProjects();
displayCertifications();
