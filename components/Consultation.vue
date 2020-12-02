<template>
    <div id="app" class="cons">
        <p class="cons_vertical text-uppercase font-weight-light">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</p>
        <div id="cons" class="cons_cont">
            <p class="cons_text h1 font-weight-normal">Получите бесплатную консультацию у наших специалистов</p>
            <p class="cons_pre_link font-weight-light mt-4">Работа и ее технология, инжиниринг, проектирование, строительство – услуги, которые имеют свои регламенты и особенности предоставления. Получить по ним консультацию вы можете у наших специалистов, набрав по номеру:<a href="tel:89219439172"> +7 (921) 943-91-72</a></p>
            
            <div class="form m-0">
                <input class="cons_input_name mr-2" ref="input_name" v-model="name" type="text" placeholder="Ваше имя" required>
                <input class="cons_input_tel mr-2" ref="input_tel" maxlength=13 @input="acceptNumber" v-model="tel" type="tel" placeholder="Телефон" required>
                <input class="cons_input_email mr-2" ref="input_mail" v-model="mail" type="mail" placeholder="E-mail" required>
                <b-button squared class="cons_but font-weight-normal" @click='openForm'>Получить консультацию</b-button>
            </div>

            <p class="cons_small_text font-weight-light mt-2 pb-1 pb-5">Нажимая на кнопку «Получить консультацию» вы соглашаетесь с <a href="#">политикой конфиденциальности</a></p>
 
        </div>
  
    <div class="form_errors" ref="form_error" :class="{'form_error_active': isActiveForm}">
        <p class="form_x m-0 p-0" @click="closeForm">x</p>
        <div class="px-3 pb-2 m-0">
            <p v-for="value in errors" :key="value.i">
                {{ value }}
            </p>
        </div>
    </div>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.js"></script>
<script>
export default{
    data() {
        return{
            name:'',
            tel: '+7 ',
            mail: '',
            errors: [],
            isActiveForm: false
        }
    },
    methods:{
        openForm: function(){
            if (this.isActiveForm == true && !this.errors.length == 0){
                this.closeForm()
                this.openForm()
                this.isActiveForm = !this.isActiveForm
                
            }

            this.errors = []
            if (this.name == '' || this.tel == '' || this.mail == ''){
                this.errors.push('Пожалуйста, заполните все обязательные поля')
                this.$refs.input_name.style.border = '1px solid red'
                this.$refs.input_tel.style.border = '1px solid red'
                this.$refs.input_mail.style.border = '1px solid red'
            }
            
            if (!this.mail == ''){
                this.errors.push('Укажите, пожалуйста, корректный email')
                this.$refs.input_mail.style.border = '1px solid red'
            }
            if(this.tel.length < 12){
                this.tel = ''
            }

            if(!this.name == ''){
                this.$refs.input_name.style.border = '0px solid red'
            }

            if(!this.tel == ''){
                this.$refs.input_tel.style.border = '0px solid red'
            }


            if (!this.mail == '' && (this.mail.includes('@') && (this.mail.includes('ru') || this.mail.includes('kz') || this.mail.includes('com')))){
                this.errors.pop('Укажите, пожалуйста, корректный email')
                this.$refs.input_mail.style.border = '0px solid red'
            }
           

            if (!this.errors.length == 0){
                this.isActiveForm = !this.isActiveForm
            }

            if(this.errors.length == 0){
                this.isActiveForm = false
            }
            
            
             
          
           
       },
       closeForm: function(){
           this.isActiveForm = !this.isActiveForm
           this.errors = []
       },
       acceptNumber: function() {
            var x = this.tel.replace(/(\d{3})(\d{3})(\d{4})/, " ($1) $2-$3");
            this.tel = x 
        },
    }
}
</script>


<style>
    .cons{
        font-family: 'Gilroy',Arial,sans-serif;
        position: relative;
        top: 0px;
        background-color: rgb(249,249,249);
        width: 100%;
        height: 650px;
    }
    .cons_cont{
        width: 89%;
        margin-left: 11%;
        margin-top: 5%;
        padding-top: 7%;
        padding-left: 7%;
        background: url("~assets/img/background_elec.jpg") no-repeat;
    }
    .cons_cont p{
        width: 60%;
        color: white;
    }
    .cons_vertical{
        position: relative;
        top: -40%;
        left: -41%;
        -webkit-transform: rotate(270deg); 
        transform: rotate(270deg);
        font-size: 0.8em;
    }
    .cons_pre_link{
        line-height: 26px;
    }
    .cons_pre_link a{
        text-decoration: none;
        color: red;
        font-weight: 700;
    }
    .form input{
        width: 20%;
        padding: 12px 15px;
        outline: none;
    }
    .form input::placeholder{
        font-weight: 200;
        font-size: 0.9em;
    }
    .cons_but{
        font-size: 0.9em;
        padding: 12px 30px;
        background-color: red !important;
        color: white;
        border: 2px solid red;
    }
    .cons_but:hover{
        background-color: red;
        border: 2px solid red;
    }
    .cons_cont .cons_small_text{
        font-size: 0.7em;
        color: rgb(180,180,180);
    }
    .cons_cont .cons_small_text a{
        color: rgb(180,180,180);
        border-bottom: 1px solid red;
    }
    .cons_cont .cons_small_text a:hover{
        text-decoration: none;
        border-bottom: 1px solid red;
    }
    .form_errors{
        display: block;
        position: fixed;
        height: auto;
        width: 400px;
        bottom: 2%;
        color: white;
        z-index: 999;
        background-color: rgb(231,68,63);
        right: 2%;
        opacity: 0;
        transition: all 0.5s ease;
    }
    .form_error_active{
        opacity: 1;
    }
    .form_x{
        position:relative;
        top: 2%;
        font-size: 1.4em;
        left: 95%;
    }

    @media only screen and (max-width: 440px){
        .cons{
            top: 00px;
            height: auto;
        }
        .cons_cont{
            width: 100%;
            margin-left: 0%;
            margin-top: 7%;
            padding-top: 5%;
            padding-left: 13%;
        }
        .cons_cont p{
            width: 80%;
        }
        .cons_text{
            font-size: 1.6em;
        }
         .cons_vertical{
             display: none;
        }
        .cons_pre_link{
            font-size: 0.9em;
        }
        .form input{
            width: 80%;
            margin: 3% 0;
            padding: 12px 15px;
        }

    }
</style>