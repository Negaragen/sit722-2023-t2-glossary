const express = require('express');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define your data (terms, definitions, and references)
const glossary = [
  { term: 'ARA', definition: 'An automated procedure called application release automation (ARA) automatically bundles and releases an application or application updates from the development stage to the production stage. With code testing and security features, ARA improves the software development and application delivery processes. A model-driven continuous deployment procedure is supported by ARA.', reference: '“What is application release automation (ARA)? | Definition from TechTarget.” https://www.techtarget.com/searchitoperations/definition/application-release-automation-ARA#:~:text=Application%20release%20automation%20(ARA)%20is,environment%20management%20and%20modeling%20tools. (accessed Jul. 13, 2023).' },
  { term: 'Artifact', definition: 'Any deliverable connected with a project that aids in describing the purpose, architecture, and layout of the software being created is referred to as an artefact.', reference: '“DevOps DevOps Terminology: A Glossary - Plutora.” https://www.plutora.com/devops-at-scale/terminology-glossary#:~:text=Artifact,of%20the%20software%20being%20developed. (accessed Jul. 13, 2023).' },
  { term: 'Branching', definition: 'Branching is one of the best benefits of version control software.When developers make modifications to that code, they can produce branches and offshoots of the project that essentially act as independent entities. A branch gets merged back into the trunk once it has been satisfactorily tested and finalised.', reference: '“DevOps Branching Strategy: What Is It & How It Works - Heptabit by Sedmi odjel.” https://www.heptabit.at/blog/devops/devops-branching-strategy-what-is-it-how-it-works#:~:text=Branching%20is%20the%20process%20of,be%20complicated%20and%20get%20messy. (accessed Jul. 13, 2023).' },
  { term: 'Configuration management', definition: 'DevOps lifecycles include configuration management as a critical component. The automation of the systems administration role through DevOps configuration automates infrastructure management and deployment.', reference: '“Configuration management: definition and benefits.” https://www.atlassian.com/microservices/microservices-architecture/configuration-management#:~:text=DevOps%20configuration%20management&text=DevOps%20configuration%20is%20the%20evolution,the%20umbrella%20of%20software%20engineering. (accessed Jul. 13, 2023).' },
  { term: 'Infrastructure Monitoring', definition: 'Infrastructure monitoring involves gathering and analysing data from IT systems, processes, and infrastructure in order to enhance business outcomes and provide value for the entire organisation.Infrastructure monitoring makes sure businesses can respond to problems before they become costly and time-consuming.', reference: '“What is infrastructure monitoring? Tools & best practices.” https://www.dynatrace.com/news/blog/what-is-infrastructure-monitoring-2/#:~:text=Infrastructure%20monitoring%20is%20the%20process,the%20oxygen%20to%20your%20infrastructure. (accessed Jul. 13, 2023).' },
  { term: 'version control system (VCS)', definition: 'A file or set of files are tracked over time by a version control system (VCS). A centralised VCS, which employs a server to keep all the versions of a file, is the most popular form. A file can be checked out from the server by developers, who can then make modifications and check it back in. The revised version of the file is then stored on the server.', reference: '“What is version control? | GitLab.” https://about.gitlab.com/topics/version-control/ (accessed Jul. 13, 2023).' },
  { term: 'Release management', definition: 'Release management is the process of supervising the planning, scheduling, and deployment of software releases while they are being tested in multiple environments and at various stages of development.', reference: '“Release Management in DevOps _ BMC Software | Blogs.” https://www.bmc.com/blogs/devops-release-management/ (accessed Jul. 13, 2023).' },
  { term: 'Continuous Delivery', definition: 'With the aid of automated technologies, continuous delivery is a DevOps practise that continuously builds, tests, and delivers enhancements to software code and user environments. The continuous delivery (CD) paradigm main result is code that is constantly in a deployable state.', reference: '“Continuous delivery - definition & overview | Sumo Logic.” https://www.sumologic.com/glossary/continuous-delivery/#:~:text=with%20Sumo%20Logic-,What%20is%20continuous%20delivery%3F,always%20in%20a%20deployable%20state. (accessed Jul. 14, 2023).' },
  { term: 'Continuous Deployment', definition: 'Following a series of thorough, automated tests, new code or a change is deployed directly to the production environment in a software development technique called continuous deployment. The application end users can see the modifications to the software (after deployment). ', reference: '“What is Continuous Deployment in DevOps?” https://insights.daffodilsw.com/blog/what-is-continuous-deployment-in-devops (accessed Jul. 14, 2023).' },
  { term: 'Deployment Pipline', definition: 'The collection of automated procedures and instruments known as a DevOps pipeline is used by the development and operations teams to compile, assemble, test, and deploy software code more quickly and easily. The word "pipeline" doesnt quite match because it is more like an assembly line.', reference: '“What is a Pipeline in DevOps? A Complete Guide | Simplilearn.” https://www.simplilearn.com/what-is-pipeline-in-devops-tools-implementation-article#:~:text=A%20DevOps%20pipeline%20is%20the,software%20code%20faster%20and%20easier. (accessed Jul. 14, 2023).' }
];

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Render the glossary view
app.get('/', (req, res) => {
  res.render('glossary', { glossary });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
