import firestore from "../firebase/firestore";

const categories = [
  {
    id: "adventure",
    name: "Adventure",
    imagePath: "categories/adventures.jpg",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/backlister-app.appspot.com/o/categories%2Fadventures.jpg?alt=media&token=1723bd04-e5a8-4493-98cf-15b71a1b0013",
    position: 1,
    tagline: "Explore all the adventures around the world.",
  },
  {
    id: "career",
    name: "Career",
    imagePath: "categories/career.jpg",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/backlister-app.appspot.com/o/categories%2Fcareer.jpg?alt=media&token=a40f542b-5488-43ed-885e-762c83a50ff0",
    position: 4,
    tagline: "Decide your future goals.",
  },
  {
    id: "achievements",
    name: "Achievements",
    imagePath: "categories/achievements.jpg",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/backlister-app.appspot.com/o/categories%2Fachievements.jpg?alt=media&token=7f368896-a99e-4855-ad39-f0fb1feb357d",
    position: 14,
    tagline: "What do you want to achieve?",
  },
  {
    id: "contribution",
    name: "Contribution",
    imagePath: "categories/contribution.jpg",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/backlister-app.appspot.com/o/categories%2Fcontribution.jpg?alt=media&token=6bb5e1dc-afb7-41ed-84a6-b17755f1629a",
    position: 13,
    tagline: "Contribute something to this world",
  },
  {
    id: "creativity",
    name: "Creativity",
    imagePath: "categories/creativity.jpg",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/backlister-app.appspot.com/o/categories%2Fcreativity.jpg?alt=media&token=f5087a89-6d50-4412-b693-ba6209a20633",
    position: 12,
    tagline: "Be creative, your are unique.",
  },
  {
    id: "education",
    name: "Education",
    imagePath: "categories/education.jpg",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/backlister-app.appspot.com/o/categories%2Feducation.jpg?alt=media&token=75741b0d-ae4b-4819-89a0-5f7cf4768886",
    position: 6,
    tagline: "Set your educational goals.",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    imagePath: "categories/entertainment.jpg",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/backlister-app.appspot.com/o/categories%2Fentertainment.jpg?alt=media&token=db2c9302-aea6-44be-9e56-c7c58eae10ca",
    position: 6,
    tagline: "Have some fun, go get wild.",
  },
  {
    id: "financial",
    name: "Financial",
    imagePath: "categories/financial.jpg",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/backlister-app.appspot.com/o/categories%2Ffinancial.jpg?alt=media&token=f0dea530-3a93-4dd2-b7e4-d6dd61a5c47f",
    position: 11,
    tagline: "Mo' money, Mo' problems.",
  },
  {
    id: "foodie",
    name: "Foodie",
    imagePath: "categories/foodie.jpg",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/backlister-app.appspot.com/o/categories%2Ffood.jpg?alt=media&token=0221b799-6189-4dfa-9f90-2d364d314329",
    position: 3,
    tagline: "We live to eat. Yum yum..",
  },
  {
    id: "social",
    name: "Social",
    imagePath: "categories/social.jpg",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/backlister-app.appspot.com/o/categories%2Fsocial.jpg?alt=media&token=e89b2886-05cd-41d9-b5a4-e3de820a60d3",
    position: 7,
    tagline: "Networking is the only working.",
  },
  {
    id: "travelling",
    name: "Travelling",
    imagePath: "categories/travelling.jpg",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/backlister-app.appspot.com/o/categories%2Ftravelling.jpg?alt=media&token=b6c2238b-8bcc-4a23-a0df-95fadad941d8",
    position: 2,
    tagline: "Pack your bags, and go.",
  },
  {
    id: "cultural",
    name: "Cultural",
    imagePath: "categories/cultural.jpg",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/backlister-app.appspot.com/o/categories%2Fcultural.jpg?alt=media&token=a8ec9ab4-255b-4046-a22e-c965c4cb354c",
    position: 8,
    tagline: "Explore different cultures.",
  },
  {
    id: "personal",
    name: "Personal Growth",
    imagePath: "categories/personal.jpg",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/backlister-app.appspot.com/o/categories%2Fpersonal.jpg?alt=media&token=486bc8b7-71af-4bc4-9947-3908d5f4f4b0",
    position: 9,
    tagline: "Grow and Glow.",
  },
];
export const gerenrateCats = () => {
  categories.forEach((cat) => {
    firestore.createCategory(cat, cat.id);
  });
};
