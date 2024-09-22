// import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/2.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "/3.jpg",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "/camping.jpg",
      title: "Camping Trip Planning",
    },
    {
      id: 4,
      url: "/6.jpg",
      title: "DJ Night/Concert Planning",
    },
    {
      id: 5,
      url: "/4.jpg",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "/5.jpg",
      title: "Wedding Planning",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
