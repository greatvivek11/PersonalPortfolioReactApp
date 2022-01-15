import {datediff,getTotalYears,parseDate,getToday} from './DateDiff';

export const Headline1 = "Hi! I am a Full-Stack Software developer with "+ getTotalYears(getToday(),"12/11/2018")+"+ years of experience in developing, testing and deploying web, mobile and cloud applications.";
export const Headline2 = "I'm an aspiring Azure Expert. I love everything cloud. IaaS, PaaS, SaaS you name it. I'm on my journey to become Azure Solutions Architect."
export const Headline3 = "Successfully achieved Azure DevOps Expert, Azure Developer Associate, Azure Data Engineer Associate, Azure IoT Specialist certifications."
export const Headline4 = "I am thrilled and excited about Web development. Few technologies I have had hands-on: React, Angular, HTML, CSS, Bootstrap, TailwindCSS, PWA."
export const Headline5 = "Checkout my simple Todo App made using Preact, TailwindCSS and Vite. ";
export const About1 = "Hi! I am Vivek Kaushik.";
export const About2 = { body: "I am currently employed at Accenture, Gurugram as Application Development Analyst for "+ getTotalYears(getToday(),"19/08/2021")+" years now. I had "+ getTotalYears("18/08/2021","12/11/2018")+" years of experience at Infosys, Chandigarh as a Senior System Engineer. I have worked mainly in application development and testing roles in wide ranges of technologies." }
export const About3 = { body: "I have done B.Tech in Electrical Engineering from M.I.E.T, Meerut (AKTU, UP) with honors securing 75.4%." }
export const About4 = { body: "I read books, listen to podcasts, play games, watch youtube, follow latest tech news on web. Sometimes I write for my blog, code a little!" }
export const About5 = { body: "I have interest in web development, cloud, IoT and in anything tech related, hardware or software. I also have interest in Cosmology, Philosphy, History etc." }
export const About7 = { body: "Microsoft Certified - Azure Developer, Data Engineer, IoT Specialist." }
export const Blog1 = "Hi! This is going to be my blogs section. I intend to showcase my Wordpress and Medium blogs here through their APIs.";
export const Blog2 = "Also, I'll be adding functionlaity to upload blogs(.pages file) here and store them in Azure Blob storage.";
export const Project1 = { title: "React Bootstrap Azure Static Web App", subtitle: "Personal Project", link: "#", body: "This project is not just a static landing page to give recruiters info about me but rather an interactive platform where they can measure my technical knowledge and understanding by interacting with this website in a dynamic manner. This is an ong-going project. You can check the list of tasks under /tasks I am planning to finish. I am leveraging Azure cloud to store my data in CosmosDB, assets in Blob storage, serverless APIs using Azure Functions." }
export const Project2 = { title: "C# .NET Java Powershell", subtitle: "Company Project", link: "#", body: "This is a support-cum-testing project in Infosys where we are validating and testing the medical software designed for a device to be used for Heart patients. We do software validation using scripts written in Java and python for automation testing. We also have custom tools to provide required test assets to our client. We use C++ and C# for development and testing of those tools. This is an Agile-based project." }
export const Project3 = { title: "Azure IoThub DPS Functions CosmosDB Blob storage Angular 8 C# .NET Core", subtitle: "Company Project", link: "#", body: "I worked on this project mainly in backend. This is a Cloud-cum-IoT based dev project where we were developing an end-to-end solution for our European client to transit the telemetry data of their medical devices to thier custom-made portal where they can do data anaylsis of patients data and devices logs information. I created multiple POCs and was the sole IoT developer in this project. I worked on Angular 8, C#, .Net Core 3.0, Azure, Azure IoT, Windows WPF apps etc." }
export const Project4 = { title: "Android Kotlin Junit Mockito", subtitle: "Company Project", link: "#", body: "This is an Android App Development project where we were developing an android app from scratch for our client who wanted a mobile solution for diabetes patients to monitor and track their daily activities such as sleep, walk, food, excercise etc. and  fitness data using Fitbit. I mainly worked in backend in the Android dev team writing business logic for various views and components. I was the sole Unit Tester in the team of 8. I took complete ownership of end-to-end testing such as UI testing, unit testing and integeration testing." }
export const Project5 = { title: "Java Hibernate MySQL", subtitle: "Company Project", link: "#", body: "This was a POC under CSR initiative by Infosys where we had developed a complete solution for our client to store, log and view their patients data using a Java based windows applicaiton. We had desinged backend APIs using Java which we were using to perform CRUD operations on MySQL server hosted on-premesis. My job was to deliver our customer regular modifications requested by them. I also worked on a major initiative where we provided a functionality to generate Audit reports for patients covering more than 1100 columns/fields in MySQL." }
export const Project6 = { title: "Preact Vite TailwindCSS", subtitle: "Personal Project", link: "https://todo.vivekkaushik.in", body: "This is a fun side project for me to explore and learn Preact (6kb react alternative), Vite (Ultra-fast npm bundler) and TailwindCSS. I have added PWA support in it, so now it cross-platforms. I plan to add Azure AD B2C to store tasks globally per user and access anywhere. Also, I plan to use Redux for state mangement." }