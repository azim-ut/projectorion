<template>
    <div class="partner">
        <div id="partner" class="partner_inner">
            <h1 class="font-weight-normal m-0">Наши партнеры:</h1>
            <h1 class="font-weight-normal m-0" style="color: red;">инжиниринг Москва</h1>
            <p class="font-weight-lighter mt-4">«Проект Орион» имеет партнерское соглашение с краснодарской компанией ООО «АС-Строй», занимающейся производством силового оборудования на территории РФ. Организация не только является разработчиком и производителем технического оснащения, но и предоставляет нам эксклюзивные права на представление и взаимодействие на территории северо-западной территории Российской Федерации.</p>
            
            <div class="container p-0 m-0 mt-3 pt-4">
                <div class="row m-0">

                    <div class="col table_img">
                        <div class="p-3">
                            <b-img src="~/assets/img/sch.png"></b-img>
                        </div>
                    </div>

                    <div class="delete"></div>

                    <div class="col table_img">
                        <div class="p-3">
                            <b-img src="~/assets/img/eae.png"></b-img>
                        </div>
                    </div>

                    <div class="delete"></div>

                    <div class="col table_img">
                        <div class="p-3">
                            <b-img src="~/assets/img/dkc.png"></b-img>
                        </div>
                    </div>

                    <div class="w-100"></div>

                    <div class="col table_img">
                        <div class="p-3">
                            <b-img src="~/assets/img/abb.png"></b-img>
                        </div>
                    </div>

                    <div class="delete"></div>

                    <div class="col table_img">
                        <div class="p-3">
                            <b-img src="~/assets/img/legrand.png"></b-img>
                        </div>
                    </div>
                
                    <div class="delete"></div>

                    <div class="col table_img">
                        <div class="p-3">
                            <b-img src="~/assets/img/siem.png"></b-img>
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
    .partner{
        font-family: 'Gilroy',Arial,sans-serif;
        width: 100%;
        position: relative;
        top: 00px;
        background-color: rgb(249,249,249);
        height: 650px;
        color: black;
    }
    .partner_inner{
        width: 100%;
        height: auto;
        padding-left: 10%;
        padding-top: 3%;
    }
    .partner_inner h1{
        font-size: 2.8em;
    }
    .partner_inner p{
        width: 65%;
    }
    .table_img{
        height: auto;
        width: 25%;
        background-color: white;
        margin-right: 40px;
        margin-bottom: 40px;
    }
    .table_img img{
        margin: 0;
        width: 100%;
        padding: 10% 20%; 
    }
    @media only screen and (max-width: 440px){
        .partner{
            top: 0px;
            height: auto;
        }
        .partner_inner h1{
            font-size: 2em;
        }
        .partner_inner p{
            width: 85%;
        }
        .table_img{
            width: 100%;
        }
    }
</style>