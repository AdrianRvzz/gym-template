<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<div align="center">


<h3 align="center">Gym Landing Page Template</h3>

  <p align="center">
    A clean and modern gym UI template built with React with Typescript and Bootstrap. Designed for speed, flexibility, and easy customization.
    <br />
    <br />
    <a href="https://github.com/AdrianRvzz/gym-template">View Demo</a>
    &middot;
    <a href="https://github.com/AdrianRvzz/gym-template/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/AdrianRvzz/gym-template/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project
This project is a gym template built with **TypeScript**, **React**, and **Bootstrap**. It features a responsive design, optimized for both desktop and mobile views. The system allows users to browse gym schedules, view class details, and explore gym galleries. 


### Built With

[![React][React.js]][React-url]
[![Typescript][Typescript.com]][Typescript-url]
[![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Getting Started

Follow these instructions to get your project up and running locally:

### Prerequisites
To run this project, you need the following software installed on your local machine:

Node.js (Recommended version: v16 or higher). You can download it from https://nodejs.org.

npm (Node package manager) comes with Node.js. You can verify your npm installation by running:


```sh
npm -v
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/AdrianRvzz/gym-template.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the app`
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Usage

### Main Previews

**Landing Page**  
   The landing page of the template is designed to give a clear and engaging introduction to your gym. It's user-friendly and visually appealing.  

   ![Landing Page](https://gym-app-ui.netlify.app/preview/preview1.png)

**Product Page**  
   This template includes a product page to showcase your gym’s offerings, including services and special promotions.  

   ![Product Page](https://gym-app-ui.netlify.app/preview/preview2.png)

**Responsive View**  
   The template is fully responsive, and on smaller screens, the navigation turns into a hamburger menu for a smooth user experience.  

   ![Responsive View](https://gym-app-ui.netlify.app/preview/preview3.png)

### Use Cases

**Filter Option in Gallery**  
   Users can filter images by category in the gallery, allowing them to easily browse through different gym facilities or classes.  

   ![Filter Option](https://gym-app-ui.netlify.app/preview/usecase1.png)

**SignUp and Login Form**  
   The template includes a modal for signing up and logging in, providing a seamless authentication experience for users.  

   ![SignUp and Login Form](https://gym-app-ui.netlify.app/preview/usecase2.png)

**Schedules Page**  
   The schedules page allows users to view the gym's classes from Monday to Friday, providing a clear and organized timetable.  

   ![Schedules Page](https://gym-app-ui.netlify.app/preview/usecase3.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Backend Ready

#### Branch Data

The `BranchItem` interface defines the structure for each gym branch, including its title, location on the map, schedules, and contact information.

  ```tsx
  export interface BranchItem {
      title: string,
      map: string,
      schedules: {
          day: string;
          hours: string;
      }[];
      phone: string,
      whatsapp: string,
      email: string
  }

  export const gymBranches: BranchItem[] = [
      {
          title: "Iron Fort",
          map: "[https://www.google.com/maps/](https://www.google.com/maps/)...",
          schedules: [
              { day: "Monday", hours: "6:00 AM - 9:00 PM" },
              { day: "Tuesday", hours: "6:00 AM - 9:00 PM" },
              { day: "Wednesday", hours: "6:00 AM - 9:00 PM" },
              // More days here...
          ],
          phone: "+123456789",
          whatsapp: "+123456789",
          email: "contact@ironfort.com"
      },
      // More branches here...
  ];
  ```

#### Classes Data

The `classesData` array defines the different workout classes offered, including their descriptions and the branches where they are available.

  ```tsx
  const classesData = [
      {
          "id": 1,
          "src": "/classes/box.jpg",
          "title": "Box",
          "description": "Box is an intense workout focused on punches, footwork, and conditioning. It combines aerobic exercises with strength training, helping you burn calories while improving your cardiovascular health and toning your body.",
          "branches": ["ironfort", "titaniumarena"]
      },
      {
          "id": 2,
          "src": "/classes/pilates.jpg",
          "title": "Pilates",
          "description": "Pilates is a low-impact exercise method that focuses on strengthening muscles while improving postural alignment and flexibility. It targets core strength, balance, and body awareness.",
          "branches": ["ironfort"]
      },
      // More classes here...
  ];
  ```

#### Gym Galleries 

The `gymGalleries` object contains images categorized by gym location and activity type. It provides an easy way to showcase your gym's facilities.


  ```tsx
  const gymGalleries = {
    ironFort: {
        images: [
            { id: "1", src: "/gallery/ironfort/1-min.jpg", title: "Leg Press Machine", category: "free weights" },
            { id: "2", src: "/gallery/ironfort/2-min.jpg", title: "Dumbbells Rack", category: "free weights" },
            { id: "3", src: "/gallery/ironfort/3-min.jpg", title: "Bench Press", category: "free weights" },
            { id: "4", src: "/gallery/ironfort/4-min.jpg", title: "Treadmill", category: "cardio" },
            { id: "5", src: "/gallery/ironfort/5-min.jpg", title: "Elliptical", category: "cardio" },
            { id: "6", src: "/gallery/ironfort/6-min.jpg", title: "Rowing Machine", category: "cardio" },
            { id: "7", src: "/gallery/ironfort/7-min.jpg", title: "Personal Trainer Session", category: "trainer" },
            { id: "8", src: "/gallery/ironfort/8-min.jpg", title: "Stretching with Trainer", category: "trainer" },
            { id: "9", src: "/gallery/ironfort/9-min.jpg", title: "Strength Training", category: "trainer" },
        ],
    },
    // More gym galleries here...
  };
  ```

#### Gym Locations

The `gymLocations` array contains all gym locations and their respective gallery and schedule paths, enabling easy navigation to each gym's page.

  ```tsx
  const gymLocations = [
      {
          name: "Iron Fort",
          galleryPath: "/gallery/ironfort",
          schedulePath: "/schedule/ironfort",
      },
      {
          name: "Titanium Arena",
          galleryPath: "/gallery/titaniumarena",
          schedulePath: "/schedule/titaniumarena",
      },
      {
          name: "Thunderdome",
          galleryPath: "/gallery/thunderdome",
          schedulePath: "/schedule/thunderdome",
      },
  ] as const;

  export default gymLocations;
  ```

#### Service Data

The `ServiceItem` interface defines the structure for services offered at the gym, such as body composition analysis, along with their descriptions and the branches where the service is available.

  ```tsx

  export interface ServiceItem {
      id: string,
      image: string,
      title: string,
      description: string,
      branches: string[]
  }

  export const gymServices: ServiceItem[] = [
      {
          id: "1",
          image: "/services/inbody.png",
          title: "InBody Analysis",
          description: "Track your body composition including muscle mass, body fat, and water distribution to set and reach your fitness goals.",
          branches: ["ironfort", "titaniumarena", "thunderdome"]
      },
      // More services here...
  ];

  ```

#### Gym Schedules

This section outlines the gym schedules for each location, including class names, workout types, start and end times, and difficulty levels.


#### Enum for Workout Types

The `WorkoutType` enum defines the different types of workouts available in the gym system. It helps categorize each class according to its focus area.

  ```tsx
  enum WorkoutType {
  cardio = "Cardio",
  strength = "Strength",
  yoga = "Yoga",
  pilates = "Pilates",
  dance = "Dance",
  crossfit = "CrossFit",
  hiit = "HIIT",
  }
  ```

##### Time Slots

The `times` array holds the available time slots for each class. These times are used to schedule classes throughout the day.
```tsx
export const times = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

```
##### Days of the Week

The `days` array defines the days of the week, which are used to organize the gym schedule.
```tsx
export const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday"
];

```


##### Enum for Class Difficulty

The `ClassDifficulty` enum defines the three possible difficulty levels for a class: Easy, Medium, and Hard.
```tsx
enum ClassDifficulty {
  easy = "Easy",
  medium = "Medium",
  hard = "Hard",
}

```

##### Class Schedule Interface

The `ClassSchedule` interface defines the structure of a class schedule, including the class name, type, start and end times, and difficulty.
```tsx
interface ClassSchedule {
  class_name: string;
  type: WorkoutType;
  start_time: string;
  end_time: string;
  difficulty: ClassDifficulty;
}

```

##### Gym Schedule Interface
The `GymSchedule` interface defines the structure for the schedule of each gym. Each day maps to an array of `ClassSchedule` objects.
```tsx
export interface GymSchedule {
  [day: string]: ClassSchedule[];
}

```
##### Sample Schedule for Iron Fort
The `ironfortSchedule` object represents a sample gym schedule for the Iron Fort gym. It maps each day of the week to the classes being held on that day.
```tsx
export const ironfortSchedule: GymSchedule = {
  monday: [
    {
      class_name: "Box",
      type: WorkoutType.cardio,
      start_time: "08:00",
      end_time: "09:00",
      difficulty: ClassDifficulty.medium,
    },
    {
      class_name: "Pilates",
      type: WorkoutType.pilates,
      start_time: "09:00",
      end_time: "10:00",
      difficulty: ClassDifficulty.easy,
    },
    // More classes for Monday...
  ],
  // More days of the week...
};
```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/AdrianRvzz/gym-template/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=AdrianRvzz/gym-template" alt="contrib.rocks image" />
</a>

## Disclaimer

Please note that many of the resources used in this project, including images and media files, do not belong to me. This project is strictly non-commercial and is intended solely for educational and personal use. All trademarks, images, and logos used are the property of their respective owners. I do not claim ownership of any third-party resources and do not use them for any profit-making purposes.

<!-- CONTACT -->
## Contact

Made by Adrian Rivas in 2023

[![GitHub followers](https://img.shields.io/github/followers/AdrianRvzz?label=Follow%20Me%20on%20GitHub&style=social)](https://github.com/AdrianRvzz)

[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/AdrianRvzz/gym-template.svg?style=for-the-badge
[contributors-url]: https://github.com/AdrianRvzz/gym-template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AdrianRvzz/gym-template.svg?style=for-the-badge
[forks-url]: https://github.com/AdrianRvzz/gym-template/network/members
[stars-shield]: https://img.shields.io/github/stars/AdrianRvzz/gym-template.svg?style=for-the-badge
[stars-url]: https://github.com/AdrianRvzz/gym-template/stargazers
[issues-shield]: https://img.shields.io/github/issues/AdrianRvzz/gym-template.svg?style=for-the-badge
[issues-url]: https://github.com/AdrianRvzz/gym-template/issues
[license-shield]: https://img.shields.io/github/license/AdrianRvzz/gym-template.svg?style=for-the-badge
[license-url]: https://github.com/AdrianRvzz/gym-template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/adrianrvzz
[product-screenshot]: images/screenshot.png

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Typescript-url]:https://github.com/microsoft/TypeScript
[Typescript.com]:https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
