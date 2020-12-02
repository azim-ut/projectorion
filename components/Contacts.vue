<template>
    <div class="contact" id="contact">
        <div class="contact_inner">
             <div class="container p-0 m-0 mt-3 pt-4">
                <div class="row m-0">

                    <div class="col table_cont m-sm-0 mx-5">
                        <div class="p-3">
                            <p>НАВИГАЦИЯ</p>
                            <p class="table_cont_small font-weight-light">О нас</p>
                            <p class="table_cont_small font-weight-light">Услуги</p>
                            <p class="table_cont_small font-weight-light">Проекты</p>
                            <p class="table_cont_smaller font-weight-lighter mt-4 pt-2">© 2020 Все права защищены</p>
                        </div>
                    </div>

                    <div class="col table_cont  dm-sm-0 mx-5">
                        <div class="p-3">
                            <p>РАЗДЕЛЫ</p>
                            <p class="table_cont_small font-weight-light">Консультация</p>
                            <p class="table_cont_small font-weight-light">Преимущества</p>
                            <p class="table_cont_small font-weight-light">Партнеры</p>
                        </div>
                    </div>

                    <div class="col table_cont m-sm-0 mx-5">
                        <div class="p-3">
                            <p>ИНФОРМАЦИЯ</p>
                            <p class="table_cont_small font-weight-light">Контакты</p>
                            <p class="table_cont_small font-weight-light">Политика конфиденциальности</p>
                        </div>
                    </div>

                    <div class="col table_cont m-sm-0 mx-5">
                        <div class="p-3">
                            <p>ОБРАТНЫЙ ЗВОНОК</p>
                            <input class="table_cont_inp" type="text" placeholder="Ваш телефон">
                            <input class="table_cont_sub align-top pt-2" type="submit" value="">
                            <p class="table_cont_small font-weight-light font-italic mt-3">Перезвоним в течение 15 минут</p>
                            <p class="table_cont_smaller font-weight-lighter mt-4 pt-2">Инжиниринговая компания PROJECT ORION</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    </div>
</template>


<script>
export default {
    

}
</script>



<style>
    .contact{
        font-family: 'Gilroy',Arial,sans-serif;
        position: relative;
        background-color: rgb(249,249,249);
        padding-top: 50px;
        top: 00px;
        width: 100%;
    }
    .contact_inner{
        width: 90%;
        margin-left: 10%;
    }
    .table_cont{
        width: 20%;
    }
    .table_cont_small{
        font-size: 0.8em;
    }
    .table_cont_smaller{
        font-size: 0.7em;
    }
    .table_cont_inp{
        margin: 0;
        width: 140px;
        border: 0px;
        padding: 10px 15px; 
    }
    .table_cont_inp::placeholder{
        font-weight: 300;
    }
    .table_cont_sub{
        background: url("~assets/img/sent.png") no-repeat rgb(229,39,41);
        width: 50px;
        height: 40px;
        background-size: 50%;
        background-position: center;
        border: 0px;
    }
    @media only screen and (max-width: 440px){
        .contact_inner{
            width: 90%;
            margin-left: 00%;
        }
        .table_cont{
            width: 100%;
        }
        .table_cont_small{
            width: 100%;
        }
        .table_cont_inp{
            width: 100%;
        }
        .table_cont_sub{
            width: 100%;
            background-size:  10%;
            background-position: 5% ;
        }
        
    }
</style>