---
title: "{title}"
date: {date}
lastmod: {date}
draft: false
author: "{authors}"
authorLink: "/profile/{name_authors}"
description: "{description}"
keywords: ["{keyword}", "{keyword_variant1}", "{keyword_variant2}"]
tags: [{tags}]
categories: ["{niche}"]
hiddenFromHomePage: false
hiddenFromSearch: false
featuredImage: ""
featuredImagePreview: ""
schema_type: "Course"
course:
  name: "{title}"
  description: "{description}"
  provider: "{website_name}"
  courseCode: "{keyword}"
  educationalLevel: "{course_level}"
  timeRequired: "{course_duration}"
  coursePrerequisites: "DYNAMIC_PREREQUISITES_FOR_{keyword}"
  occupationalCredentialAwarded: "DYNAMIC_CERTIFICATE_FOR_{keyword}"
  instructor:
    name: "{authors}"
    jobTitle: "Instructor"
    worksFor: "{website_name}"
  aggregateRating:
    ratingValue: "{rating}"
    ratingCount: "156"
  offers:
    price: "{price}"
    priceCurrency: "{currency}"
    availability: "Available"
toc:
  enable: true
---
        
{content}