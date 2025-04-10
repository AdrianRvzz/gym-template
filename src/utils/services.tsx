
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
    {
      id: "2",
      image: "/services/massage.jpg",
      title: "Recovery Massage",
      description: "Relax your muscles after an intense workout with our professional recovery massage chairs or therapists.",
      branches: ["titaniumarena", "thunderdome"]
    },
    {
      id: "3",
      image: "/services/weightlifting.avif",
      title: "Weightlifting Zone",
      description: "Fully equipped area with dumbbells, barbells, squat racks and more for serious strength training.",
      branches: ["ironfort", "thunderdome"]
    },
    {
      id: "4",
      image: "/services/cardio.webp",
      title: "Cardio Zone",
      description: "Treadmills, bikes, and ellipticals to keep your heart healthy and burn calories effectively.",
      branches: ["ironfort", "titaniumarena", "thunderdome"]
    },
    {
      id: "5",
      image: "/services/crossfit.webp",
      title: "CrossFit Area",
      description: "Functional training space with rigs, kettlebells, ropes, and more to push your limits.",
      branches: ["ironfort", "titaniumarena"]
    },
    {
      id: "6",
      image: "/services/boxing.jpg",
      title: "Boxing Studio",
      description: "Train like a fighter with punching bags, gloves, and cardio-boxing classes.",
      branches: ["titaniumarena", "thunderdome"]
    },
    {
      id: "7",
      image: "/services/spinning.jpg",
      title: "Spinning Classes",
      description: "High-intensity indoor cycling classes designed to boost endurance and burn fat.",
      branches: ["ironfort"]
    },
    {
      id: "8",
      image: "/services/zumba.webp",
      title: "Zumba",
      description: "Dance your way to fitness with fun and energetic Zumba sessions.",
      branches: ["titaniumarena", "thunderdome"]
    },
    {
      id: "9",
      image: "/services/yoga.jpg",
      title: "Yoga Studio",
      description: "Improve your flexibility, balance, and peace of mind with guided yoga classes.",
      branches: ["ironfort", "thunderdome"]
    },
    {
      id: "10",
      image: "/services/pilates.png",
      title: "Pilates",
      description: "Strengthen your core and improve posture through controlled, low-impact movements.",
      branches: ["titaniumarena"]
    },
    {
      id: "11",
      image: "/services/sauna.webp",
      title: "Sauna & Steam Room",
      description: "Detox and relax after workouts with our dry sauna and steam facilities.",
      branches: ["ironfort", "titaniumarena"]
    },
    {
      id: "12",
      image: "/services/nutrition.avif",
      title: "Nutrition Coaching",
      description: "Work with our experts to build a meal plan that supports your fitness journey.",
      branches: ["thunderdome"]
    },
    {
      id: "13",
      image: "/services/smoothiebar.jpg",
      title: "Smoothie Bar",
      description: "Grab a protein shake or smoothie post-workout to refuel and recover faster.",
      branches: ["ironfort", "thunderdome"]
    },
    {
      id: "14",
      image: "/services/personaltrainer.jpg",
      title: "Personal Training",
      description: "One-on-one coaching tailored to your goals and current fitness level.",
      branches: ["ironfort", "titaniumarena", "thunderdome"]
    },
    {
      id: "15",
      image: "/services/stretching.jpg",
      title: "Stretching Zone",
      description: "Designated area with mats and tools for post-workout stretching and recovery.",
      branches: ["titaniumarena"]
    },
    {
      id: "16",
      image: "/services/groupclasses.jpg",
      title: "Group Fitness Classes",
      description: "Join group sessions for HIIT, aerobics, dance, and more with motivating instructors.",
      branches: ["thunderdome"]
    },
    {
      id: "17",
      image: "/services/turf.webp",
      title: "Turf Zone",
      description: "Open functional turf space for sled pushes, agility drills, and bodyweight workouts.",
      branches: ["ironfort"]
    },
    {
      id: "18",
      image: "/services/showers.jpg",
      title: "Premium Showers & Lockers",
      description: "Clean, spacious facilities for post-workout refresh and secure storage.",
      branches: ["titaniumarena", "thunderdome"]
    },
    {
      id: "19",
      image: "/services/app.png",
      title: "Fitness App Integration",
      description: "Connect your workout progress and class schedules with our mobile app.",
      branches: ["ironfort", "titaniumarena", "thunderdome"]
    },
    {
      id: "20",
      image: "/services/kids.jpg",
      title: "Kids Zone",
      description: "Let your kids enjoy a safe, fun area while you train without worries.",
      branches: ["titaniumarena", "thunderdome"]
    }
  ];
  

