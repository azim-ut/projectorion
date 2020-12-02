<template>
    <b-container class="services_main_container">
        <b-container class="services m-sm-0 m-3">
            <div class="container p-0 m-0">
                <div class="row m-0">
                    <div class="col table_node">
                        <div class="p-3">
                            <b-img src="~/assets/img/calc.svg"></b-img>
                            <p class="h4 font-weight-normal mt-4">Проектирование</p>
                            <p class="font-weight-light mt-4">Определяется архитектура, компоненты и другие аспекты. Создаются сложные системы, опираясь на которые будет проводиться соответствующая деятельность. В зависимости от отрасли, выделяют проектирование: инженерных систем, архитектурно-строительное, ландшафтное, интерьера, градостроительное и т. п.</p>
                        </div>
                    </div>
                    <div class="col table_node">
                        <div class="p-3">
                            <b-img src="~/assets/img/person.svg"></b-img>
                            <p class="h4 font-weight-normal mt-4">Производство оборудования</p>
                            <p class="font-weight-light mt-4">Создается высокоточное техническое оснащение, полностью соответствующее современным требованиям. Возможно проектирование и изготовление техники с интегрированными дополнительными расширениями, что обсуждается в процессе формирования заказа.</p>
                        </div>
                    </div>
                    <div class="w-100"></div>
                    <div class="col table_node">
                        <div class="p-3">
                            <b-img src="~/assets/img/star.svg"></b-img>
                            <p class="h4 font-weight-normal mt-4">Организация процесса получения технических условий и дополнительных мощностей</p>
                            <p class="font-weight-light mt-4">Внедряется в работу по желанию клиента, представляет собой целый спектр услуг, для реализации которых подключаются сторонние специалисты компании или эксперты из других организаций.</p>
                        </div>
                    </div>
                    <div class="col table_node">
                        <div class="p-3">
                            <b-img src="~/assets/img/todolist.svg"></b-img>
                            <p class="h4 font-weight-normal mt-4">Согласование с надзорными оргнами</p>
                            <p class="font-weight-light mt-4">Подготавливаем бумаги на утверждение строений, архитектурных сооружений любого типа и т.п. Оформляем всё строго по требованиям госорганов, позволяя исключить задержки или появление других трудностей в ходе работы.</p>
                        </div>
                    </div>
                </div>


                <div>
                    <div class="p-4 table_node table_long_node">
                        <div class="table_long_node_left float-none float-sm-left">
                            <b-img src="~/assets/img/tools.svg"></b-img>
                        </div>
                        <div class="table_long_node_right float-none float-sm-right">
                            <p class="table_text1 h4 font-weight-normal mt-4">Строительно-монтажные (СМР) и пусконаладочные работы (ПНР)</p>
                            <p class="table_text2 font-weight-light mt-4">Возводим здания и сооружения, монтируем технологические системы и оборудование, проводим подготовительные работы перед сдачей объекта в эксплуатацию. Следуем регламентам СНиП РФ, регулирующим процесс строительства и осуществления сторонних работ.</p>
                        </div>                   
                    </div>
                </div>



            </div>



        </b-container>
    </b-container>
</template>



export default {}


<style>
    .services_main_container{
        font-family: 'Gilroy',Arial,sans-serif;
        position: relative;
        width: 90%;
        top: 0px;
        height: 1000px;
        left: 10%;
        margin: 0;
        padding: 0;
        background-color: rgb(249,249,249);
    }
    .services{
        margin-left: 10%;
        width: 100%;
        background-color: rgb(249,249,249);
    }
    .table_node{
        background-color: white;
        height: 350px;
        max-width: 55%;
        margin-right: 40px;
        margin-bottom: 40px;
    }
    .table_node img{
        width: 16%;
    }
    .table_long_node{
        height: 200px;
        max-width: 100%;
    }
    .table_long_node img{
        width: 80%;
    }
    .table_long_node_left{
        text-align: center;
        margin-top: 10px;
        width: 15%;
    }
    .table_long_node_right{
        width: 85%;
    }
    .table_node:hover, .table_long_node:hover{
        box-shadow: 0px 0px 10px 1px rgb(230,230,230);
    }
    
    @media only screen and (max-width: 440px){
        .table_node{
            max-width: 100%;
            height: 100%;
        }
        .table_node img{
            width: 25%;
        }
        .services{
            width: 100%;
        }
        .services_main_container{
            height: auto;
            width: 100%;
            top: -50px;
            left: 0%;
        }
        .table_long_node img{
            width: 70px;
        }
        .table_text1 {
            font-size: 1.3em;
        }
        .table_text2{
            font-size: 0.9em;
        }


    }
</style>