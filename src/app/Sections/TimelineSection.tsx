import Card from "@/common_components/Card/Card";
import Timeline from "@/common_components/Timeline/Timeline";
import { Typography } from "@/common_components/Typography/Typography";
import React from "react";

function TimelineSection() {
  const items = [
    {
      title: "Senior Software Engineer",
      subtitle: "OpenText",
      description: `Working on designing and developing reusable components using Next.js, integrated with Optimizely’s 
headless CMS architecture, to support high-performance marketing web pages for OpenText. Actively 
contributing to efforts that streamline deployment workflows, helping the team bring new designs and 
products to market faster and more efficiently. `,
      date: "April 2025 - Present",
    },
    {
      title: "Software Technologist I",
      subtitle: "Philips",
      description: `Contributed to the decomposition of a monolithic application, Picix, into independent microservices such as 
Authentication, User Management, and Audit. This transition significantly improved the system’s scalability, 
maintainability and performance. Additionally, the modular design enabled the creation of reusable, 
standardized components and services, allowing multiple teams across Philips to easily integrate and leverage 
these core functionalities, thereby accelerating development cycles and promoting consistency across the 
platform.`,
      date: "OCT 2021 - APR 2025",
    },
    {
      title: "Design and Development Engineer",
      subtitle: "Siemens Healthineers",
      description: `
      Worked as a Cross-Platform Application Developer on a Lab Assistant application designed for laboratory 
attendants, enabling seamless integration with the Atellica Solution. The application provided real-time 
insights, proactive alerting, and remote control capabilities, allowing technicians to take timely actions on 
connected devices. A key enhancement was the implementation of automatic device pairing based on 
preprogrammed network identifiers, significantly reducing setup time. Additionally, the application enabled 
technicians to initiate and manage maintenance tasks remotely and monitor reagent levels, with automated 
alerts for low inventory—streamlining lab operations and enhancing overall efficiency.`,
      date: "Aug 2018 - Sep 2021",
    },
    {
      title: "Software Engineer",
      subtitle: "Inherit Systems",
      description: `Worked as an application Developer to build a healthcare application facilitating seamless interaction between 
patients and doctors. The app included features such as real-time chat, blood glucose and insulin tracking 
using Apple HealthKit, intake logging, enhancing remote care management. `,
      date: "Feb 2018  - July 2018",
    },
    {
      title: "Software Engineer",
      subtitle: "Givevalu Technologies",
      description: `Worked on a cross-platform mobile application to develop a Parent-Teacher Connect app called Eduawake 
aimed at enhancing communication and transparency between schools and families. The application provided 
real-time visibility into students’ daily activities, helping parents stay informed and engaged with their child's 
academic needs. It also enabled teachers to quickly and effectively communicate with parents. Designed 
specifically for schools and Playhomes, the app included comprehensive ERP features such as attendance 
tracking, digital mark sheets and daily timetables. `,
      date: "Jan 2017- Jan 2018",
    },
    {
      title: "Android Intern",
      subtitle: "Ak Aerotek",
      description: `Worked on a project focused on developing an Android application for a client seeking to optimize delivery 
tracking for their business. The application enabled barcode scanning to capture product information and 
recorded the geographic location at the time of each scan. This functionality provided insights into delivery 
patterns and helped determine the quantity and distribution of products required across different areas of the 
city.`,
      date: "Sep 2016 - Nov 2016",
    },
    {
      title: "Web Intern",
      subtitle: "Catchwiz Technologies",
      description: `Contributed to the development of web page templates for the company's site, creating many templates over 
the course of several months. These templates spanned various categories, including cooking and shopping 
websites, and were designed to enable new businesses to quickly launch their online presence using 
customizable, pre-built layouts.`,
      date: "May 2016 - July 2016",
    },
  ];

  return (
    <div className="">
      <Card>
        <Typography variant="h3" className="mb-4" fontWeight="bold">
          Experience Timeline
        </Typography>
        <Timeline items={items} />
      </Card>
    </div>
  );
}

export default TimelineSection;
