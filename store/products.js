const state = () => ({
  all: [
    {
      id: 1,
      name: 'Проектирование',
      description: 'Определяется архитектура, компоненты и другие аспекты. Создаются сложные системы, опираясь на которые будет проводиться соответствующая деятельность. В зависимости от отрасли, выделяют проектирование: инженерных систем, архитектурно-строительное, ландшафтное, интерьера, градостроительное и т. п.',
      price: 191.00,
      offer: true,
      offerPrice: 3,
      latest: true,
      bestSellers: false,
      trending: false,
      image: require('../assets/img/service/15.jpg'),
      imageHover: require('../assets/img/service/15.jpg'),
      timePeriod: false,
      dateTime: new Date('December 19, 2020 17:00:00 PDT')
    },
    {
      id: 2,
      name: 'Производство оборудования',
      description: 'Создается высокоточное техническое оснащение, полностью соответствующее современным требованиям. Возможно проектирование и изготовление техники с интегрированными дополнительными расширениями, что обсуждается в процессе формирования заказа.',
      price: 300.00,
      offer: false,
      offerPrice: 3,
      latest: true,
      bestSellers: false,
      trending: false,
      image: require('../assets/img/service/1.jpg'),
      imageHover: require('../assets/img/service/1.jpg'),
      timePeriod: false,
      dateTime: new Date('December 19, 2020 17:00:00 PDT')
    },
    {
      id: 3,
      name: 'Строительно-монтажные работы (СМР) и пуско-наладочные работы (ПНР)',
      description: 'Возводим здания и сооружения, монтируем технологические системы и оборудование, проводим подготовительные работы перед сдачей объекта в эксплуатацию. Следуем регламентам СНиП РФ, регулирующим процесс строительства и осуществления сторонних работ.',
      price: 166.00,
      offer: true,
      offerPrice: 5,
      latest: true,
      bestSellers: false,
      trending: false,
      image: require('../assets/img/service/5.jpg'),
      imageHover: require('../assets/img/service/5.jpg'),
      timePeriod: false,
      dateTime: new Date('December 19, 2020 17:00:00 PDT')
    },
    {
      id: 4,
      name: 'Организация процесса получения технических условий и дополнительных мощностей.',
      description: 'Внедряется в работу по желанию клиента, представляет собой целый спектр услуг, для реализации которых подключаются сторонние специалисты компании или эксперты из других организаций.',
      price: 166.00,
      offer: true,
      offerPrice: 5,
      latest: true,
      bestSellers: false,
      trending: false,
      image: require('../assets/img/service/5.jpg'),
      imageHover: require('../assets/img/service/5.jpg'),
      timePeriod: false,
      dateTime: new Date('December 19, 2020 17:00:00 PDT')
    },
    {
      id: 5,
      name: 'Согласование с надзорными органами.',
      description: 'Подготавливаем бумаги на утверждение строений, архитектурных сооружений любого типа и т.п. Оформляем всё строго по требованиям госорганов, позволяя исключить задержки или появление других трудностей в ходе работы.',
      price: 200.00,
      offer: false,
      offerPrice: 7,
      latest: true,
      bestSellers: false,
      trending: false,
      image: require('../assets/img/service/8.jpg'),
      imageHover: require('../assets/img/service/8.jpg'),
      timePeriod: false,
      dateTime: new Date('December 19, 2020 17:00:00 PDT')
    }
  ]
})

export default {
  state
}
