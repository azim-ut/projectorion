const state = () => ({
  all: [
    {
      id: 1,
      name: "Проектирование",
      price: 191.00,
      offer: true,
      offerPrice: 3,
      latest: true,
      bestSellers: false,
      trending: false,
      image: require("../assets/img/service/15.jpg"),
      imageHover: require("../assets/img/service/15.jpg"),
      timePeriod: false,
      dateTime: new Date("December 19, 2020 17:00:00 PDT")
    },
    {
      id: 2,
      name: "Производство оборудования",
      price: 300.00,
      offer: false,
      offerPrice: 3,
      latest: true,
      bestSellers: false,
      trending: false,
      image: require("../assets/img/service/1.jpg"),
      imageHover: require("../assets/img/service/1.jpg"),
      timePeriod: false,
      dateTime: new Date("December 19, 2020 17:00:00 PDT")
    },
    {
      id: 3,
      name: "Строительно-монтажные работы",
      price: 166.00,
      offer: true,
      offerPrice: 5,
      latest: true,
      bestSellers: false,
      trending: false,
      image: require("../assets/img/service/5.jpg"),
      imageHover: require("../assets/img/service/5.jpg"),
      timePeriod: false,
      dateTime: new Date("December 19, 2020 17:00:00 PDT")
    },
    {
      id: 4,
      name: "Пусконаладочные работы",
      price: 200.00,
      offer: false,
      offerPrice: 7,
      latest: true,
      bestSellers: false,
      trending: false,
      image: require("../assets/img/service/8.jpg"),
      imageHover: require("../assets/img/service/8.jpg"),
      timePeriod: false,
      dateTime: new Date("December 19, 2020 17:00:00 PDT")
    }
  ]
});

export default {
  state
};
