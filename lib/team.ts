export type TeamMember = {
  name: string;
  position: string;
  bio: string;
  image: string;
  dataWId: string;
  imageWId: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Mustafa Hassan",
    position: "Digital Marketing Specialist",
    bio: "Drives data-led campaigns that turn audiences into loyal customers.",
    image: "/assets/team/mustafa-3.jpg",
    dataWId: "b31a341f-0659-611a-378d-b9b299a4f9b7",
    imageWId: "56bb2451-170e-89ce-c69f-6cfb15fd42b5",
  },
  {
    name: "Ahmed Khan",
    position: "Creative Manager",
    bio: "Shapes brand stories and visual systems that capture attention and build trust.",
    image: "/assets/team/ahmed-3.png",
    dataWId: "0a28a6a2-8b8a-d8c2-5458-5994b3ad5898",
    imageWId: "fe758f9d-39d6-cb14-52e0-c9fa891a9a74",
  },
  {
    name: "Musaver Khan",
    position: "Software Engineer",
    bio: "Engineers fast, scalable web platforms with a focus on performance and reliability.",
    image: "/assets/team/musaver-3.jpg",
    dataWId: "cc8deff5-9c4e-5729-3784-fec553d9265b",
    imageWId: "e253adec-fdcb-52c7-f8cb-d2809643fb06",
  },
  {
    name: "Agha Moiz",
    position: "AI Automation Specialist",
    bio: "Automates the tedious so teams can focus on the creative — powered by modern AI.",
    image: "/assets/team/agha-moiz-3.jpg",
    dataWId: "77300203-7d8a-ec8b-5bc9-a37f22d341c5",
    imageWId: "fee103c0-4d17-58aa-1a09-5744bd650d4c",
  },
];
