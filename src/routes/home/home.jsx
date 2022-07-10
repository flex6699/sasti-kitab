import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "school",
      imageUrl:
        "https://i.ibb.co/BgBkF5f/stephen-andrews-u0z-Tce7-KNl-Y-unsplash.jpg",
    },
    {
      id: 2,
      title: "college",
      imageUrl:
        "https://i.ibb.co/JxdKbbd/dollar-gill-Kyoshy7-BJIQ-unsplash.jpg",
    },
    {
      id: 3,
      title: "magzine",
      imageUrl:
        "https://i.ibb.co/DLZJFgn/david-suarez-w-OYS4-IHWFg-unsplash.jpg",
    },
    {
      id: 4,
      title: "novels",
      imageUrl:
        "https://i.ibb.co/g9sNSzS/madalyn-cox-Yu-Uz5u-Qka-XM-unsplash.jpg",
    },
    {
      id: 5,
      title: "comics",
      imageUrl: "https://i.ibb.co/nwPVRLM/dev-d2-Py-uh-XJQo-unsplash.jpg",
    },
  ];
  return <Directory categories={categories} />;
};

export default Home;
