enum WorkoutType {
  cardio = "Cardio",
  strength = "Strength",
  yoga = "Yoga",
  pilates = "Pilates",
  dance = "Dance",
  crossfit = "CrossFit",
  hiit = "HIIT",
}

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
export const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday"

];

enum ClassDifficulty {
  easy = "Easy",
  medium = "Medium",
  hard = "Hard",
}

interface ClassSchedule {
  class_name: string;
  type: WorkoutType;
  start_time: string;
  end_time: string;
  difficulty: ClassDifficulty;
}

export interface GymSchedule {
  [day: string]: ClassSchedule[];
}

export const ironfortSchedule: GymSchedule = {

  monday: [
    {
      class_name: "Cardio Blast",
      type: WorkoutType.cardio,
      start_time: "08:00",
      end_time: "09:00",
      difficulty: ClassDifficulty.easy,
    },
    {
      class_name: "Strength Training",
      type: WorkoutType.strength,
      start_time: "09:00",
      end_time: "10:00",
      difficulty: ClassDifficulty.medium,
    },
    {
      class_name: "Yoga",
      type: WorkoutType.yoga,
      start_time: "11:00",
      end_time: "12:00",
      difficulty: ClassDifficulty.easy,
    },
    {
      class_name: "Midday Mobility",
      type: WorkoutType.yoga,
      start_time: "13:00",
      end_time: "14:00",
      difficulty: ClassDifficulty.easy,
    },
    {
      class_name: "Afternoon Burn",
      type: WorkoutType.hiit,
      start_time: "16:00",
      end_time: "17:00",
      difficulty: ClassDifficulty.hard,
    },
  ],
  tuesday: [
    {
      class_name: "HIIT",
      type: WorkoutType.hiit,
      start_time: "08:00",
      end_time: "09:00",
      difficulty: ClassDifficulty.hard,
    },
    {
      class_name: "Pilates",
      type: WorkoutType.pilates,
      start_time: "09:00",
      end_time: "10:00",
      difficulty: ClassDifficulty.medium,
    },
    {
      class_name: "Afternoon Flow",
      type: WorkoutType.yoga,
      start_time: "14:00",
      end_time: "15:00",
      difficulty: ClassDifficulty.easy,
    },
    {
      class_name: "Strength Circuit",
      type: WorkoutType.strength,
      start_time: "17:00",
      end_time: "18:00",
      difficulty: ClassDifficulty.hard,
    },
  ],
  wednesday: [
    {
      class_name: "Zumba",
      type: WorkoutType.dance,
      start_time: "08:00",
      end_time: "09:00",
      difficulty: ClassDifficulty.medium,
    },
    {
      class_name: "CrossFit",
      type: WorkoutType.crossfit,
      start_time: "09:00",
      end_time: "10:00",
      difficulty: ClassDifficulty.hard,
    },
  ],
  thursday: [
    {
      class_name: "Cardio Kickboxing",
      type: WorkoutType.cardio,
      start_time: "08:00",
      end_time: "09:00",
      difficulty: ClassDifficulty.medium,
    },
    {
      class_name: "Yoga Flow",
      type: WorkoutType.yoga,
      start_time: "09:00",
      end_time: "10:00",
      difficulty: ClassDifficulty.easy,
    },
  ],
  friday: [
    {
      class_name: "Strength & Conditioning",
      type: WorkoutType.strength,
      start_time: "08:00",
      end_time: "09:00",
      difficulty: ClassDifficulty.hard,
    },
    {
      class_name: "Pilates Reformer",
      type: WorkoutType.pilates,
      start_time: "09:00",
      end_time: "10:00",
      difficulty: ClassDifficulty.medium,
    },
  ],
};

export const titaniumArenaSchedule: GymSchedule = {
  monday: [
    {
      class_name: "Cycling",
      type: WorkoutType.cardio,
      start_time: "06:30",
      end_time: "07:30",
      difficulty: ClassDifficulty.medium,
    },
    {
      class_name: "Body Pump",
      type: WorkoutType.strength,
      start_time: "08:00",
      end_time: "09:00",
      difficulty: ClassDifficulty.hard,
    },
    {
      class_name: "Vinyasa Yoga",
      type: WorkoutType.yoga,
      start_time: "10:00",
      end_time: "11:00",
      difficulty: ClassDifficulty.easy,
    },
  ],
  tuesday: [
    {
      class_name: "Cardio HIIT",
      type: WorkoutType.hiit,
      start_time: "07:00",
      end_time: "08:00",
      difficulty: ClassDifficulty.hard,
    },
    {
      class_name: "Pilates Mat",
      type: WorkoutType.pilates,
      start_time: "08:30",
      end_time: "09:30",
      difficulty: ClassDifficulty.medium,
    },
  ],
  wednesday: [
    {
      class_name: "CrossFit Circuit",
      type: WorkoutType.crossfit,
      start_time: "06:00",
      end_time: "07:00",
      difficulty: ClassDifficulty.hard,
    },
    {
      class_name: "Yoga Stretch",
      type: WorkoutType.yoga,
      start_time: "09:30",
      end_time: "10:30",
      difficulty: ClassDifficulty.easy,
    },
    {
      class_name: "Functional Training",
      type: WorkoutType.crossfit,
      start_time: "13:00",
      end_time: "14:00",
      difficulty: ClassDifficulty.medium,
    },
    {
      class_name: "Evening Yoga",
      type: WorkoutType.yoga,
      start_time: "17:00",
      end_time: "18:00",
      difficulty: ClassDifficulty.easy,
    },
  ],
  thursday: [
    {
      class_name: "Kickboxing",
      type: WorkoutType.cardio,
      start_time: "07:30",
      end_time: "08:30",
      difficulty: ClassDifficulty.medium,
    },
    {
      class_name: "Strength Training",
      type: WorkoutType.strength,
      start_time: "09:00",
      end_time: "10:00",
      difficulty: ClassDifficulty.hard,
    },
    {
      class_name: "Afternoon HIIT",
      type: WorkoutType.hiit,
      start_time: "15:00",
      end_time: "16:00",
      difficulty: ClassDifficulty.hard,
    },
    {
      class_name: "Stretch & Relax",
      type: WorkoutType.yoga,
      start_time: "16:00",
      end_time: "17:00",
      difficulty: ClassDifficulty.easy,
    },
  ],
  friday: [
    {
      class_name: "Zumba Dance",
      type: WorkoutType.dance,
      start_time: "06:00",
      end_time: "07:00",
      difficulty: ClassDifficulty.medium,
    },
    {
      class_name: "Barbell Strength",
      type: WorkoutType.strength,
      start_time: "08:00",
      end_time: "09:00",
      difficulty: ClassDifficulty.hard,
    },
  ],
};

export const thunderdomeSchedule: GymSchedule = {
  monday: [
    {
      class_name: "HIIT Bootcamp",
      type: WorkoutType.hiit,
      start_time: "10:30",
      end_time: "11:30",
      difficulty: ClassDifficulty.hard,
    },
    {
      class_name: "Core & Abs",
      type: WorkoutType.strength,
      start_time: "12:00",
      end_time: "13:00",
      difficulty: ClassDifficulty.medium,
    },
    {
      class_name: "Afternoon Strength",
      type: WorkoutType.strength,
      start_time: "15:00",
      end_time: "16:00",
      difficulty: ClassDifficulty.medium,
    },
    {
      class_name: "Sunset Yoga",
      type: WorkoutType.yoga,
      start_time: "17:00",
      end_time: "18:00",
      difficulty: ClassDifficulty.easy,
    },
  ],
  tuesday: [
    {
      class_name: "Spin Class",
      type: WorkoutType.cardio,
      start_time: "07:00",
      end_time: "08:00",
      difficulty: ClassDifficulty.medium,
    },
    {
      class_name: "Full Body Strength",
      type: WorkoutType.strength,
      start_time: "09:00",
      end_time: "10:00",
      difficulty: ClassDifficulty.hard,
    },
  ],
  wednesday: [
    {
      class_name: "Zumba Dance Party",
      type: WorkoutType.dance,
      start_time: "06:00",
      end_time: "07:00",
      difficulty: ClassDifficulty.medium,
    },
    {
      class_name: "Pilates Flow",
      type: WorkoutType.pilates,
      start_time: "10:00",
      end_time: "11:00",
      difficulty: ClassDifficulty.easy,
    },
  ],
  thursday: [
    {
      class_name: "Boxing",
      type: WorkoutType.cardio,
      start_time: "09:00",
      end_time: "10:00",
      difficulty: ClassDifficulty.hard,
    },
    {
      class_name: "Strength & Mobility",
      type: WorkoutType.strength,
      start_time: "11:00",
      end_time: "12:00",
      difficulty: ClassDifficulty.medium,
    },
  ],
  friday: [
    {
      class_name: "CrossFit Endurance",
      type: WorkoutType.crossfit,
      start_time: "06:30",
      end_time: "07:30",
      difficulty: ClassDifficulty.hard,
    },
    {
      class_name: "Restorative Yoga",
      type: WorkoutType.yoga,
      start_time: "09:30",
      end_time: "10:30",
      difficulty: ClassDifficulty.easy,
    },
    {
      class_name: "Pilates Core",
      type: WorkoutType.pilates,
      start_time: "13:00",
      end_time: "14:00",
      difficulty: ClassDifficulty.medium,
    },
    {
      class_name: "Cardio Dance Mix",
      type: WorkoutType.dance,
      start_time: "16:00",
      end_time: "17:00",
      difficulty: ClassDifficulty.medium,
    },
  ],
};
