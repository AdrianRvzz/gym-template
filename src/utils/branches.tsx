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
        title: "IronFort Gym",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96664.04218168635!2d-74.17578293750002!3d40.789480999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c257ee61117d7f%3A0xbf907fa333b8db60!2sLA%20Fitness!5e0!3m2!1sen!2smx!4v1744156439785!5m2!1sen!2smx",
        schedules: [
            {
                day: "Monday to Friday",
                hours: "5:00AM - 10:00PM"
            },
            {
                day: "Saturday",
                hours: "7:00AM - 6:00PM"
            },
            {
                day: "Sunday",
                hours: "Closed"
            }
        ],
        phone: "+1 (555) 123-4567",
        whatsapp: "+1 (555) 987-6543",
        email: "contact@ironfortgym.com"
    },
    {
        title: "TitaniumArena Gym",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96729.35761931996!2d-74.12795033750004!3d40.744592800000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258531c5dd221%3A0xcd29018ec07aa3c3!2sMid%20City%20Gym%20%26%20Tanning!5e0!3m2!1sen!2smx!4v1744156496428!5m2!1sen!2smx",
        schedules: [
            {
                day: "Monday to Friday",
                hours: "5:30AM - 9:00PM"
            },
            {
                day: "Saturday",
                hours: "8:00AM - 5:00PM"
            },
            {
                day: "Sunday",
                hours: "10:00AM - 3:00PM"
            }
        ],
        phone: "+1 (555) 234-5678",
        whatsapp: "+1 (555) 876-5432",
        email: "info@titaniumarenagym.com"
    },
    {
        title: "ThunderDome Gym",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96729.35761931996!2d-74.12795033750004!3d40.744592800000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2597f7c3f75e1%3A0xbb8ce550f8c66e48!2sGYM%20NYC%20East%203rd%20St.!5e0!3m2!1sen!2smx!4v1744156594285!5m2!1sen!2smx",
        schedules: [
            {
                day: "Monday to Friday",
                hours: "6:00AM - 10:00PM"
            },
            {
                day: "Saturday",
                hours: "8:00AM - 4:00PM"
            },
            {
                day: "Sunday",
                hours: "Closed"
            }
        ],
        phone: "+1 (555) 345-6789",
        whatsapp: "+1 (555) 765-4321",
        email: "support@thunderdomegym.com"
    }
];
