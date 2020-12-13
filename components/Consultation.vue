<template>
  <div class="ConsultationBlock">
    <div class="verticalLeft">
      <div class="txt">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</div>
    </div>
    <div class="verticalCenter">
      <div class="content">
        <h3>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</h3>
        <br />
        <p>по телефону:<a href="tel:88005503193" style=" color: #fff; font-size: 2.2em;"> 8 (800) 550-31-93</a> или
          форме обратной связи: </p>
        <div class="form m-0">
          <input class="cons_input_name mr-2" ref="input_name" type="text" placeholder="Ваше имя" required>
          <input class="cons_input_tel mr-2" ref="input_tel" maxlength=13 type="tel" placeholder="Телефон" required>
          <input class="cons_input_email mr-2" ref="input_mail" type="mail" placeholder="E-mail" required>
          <button class="cons_but font-weight-normal" @click='openForm'>Получить консультацию</button>
        </div>
        <small>Нажимая на кнопку «Получить консультацию» вы соглашаетесь с <a href="#">политикой конфиденциальности</a></small>
        <div class="form_errors" ref="form_error" :class="{'form_error_active': isActiveForm}">
          <p class="form_x m-0 p-0" @click="closeForm">x</p>
          <div class="px-3 pb-2 m-0">
            <p v-for="value in errors" :key="value.i">
              {{ value }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      tel: '+7 ',
      mail: '',
      errors: [],
      isActiveForm: false
    }
  },
  methods: {
    openForm: function() {
      if (this.isActiveForm == true && !this.errors.length == 0) {
        this.closeForm()
        this.openForm()
        this.isActiveForm = !this.isActiveForm

      }

      this.errors = []
      if (this.name == '' || this.tel == '' || this.mail == '') {
        this.errors.push('Пожалуйста, заполните все обязательные поля')
        this.$refs.input_name.style.border = '1px solid red'
        this.$refs.input_tel.style.border = '1px solid red'
        this.$refs.input_mail.style.border = '1px solid red'
      }

      if (!this.mail == '') {
        this.errors.push('Укажите, пожалуйста, корректный email')
        this.$refs.input_mail.style.border = '1px solid red'
      }
      if (this.tel.length < 12) {
        this.tel = ''
      }

      if (!this.name == '') {
        this.$refs.input_name.style.border = '0px solid red'
      }

      if (!this.tel == '') {
        this.$refs.input_tel.style.border = '0px solid red'
      }


      if (!this.mail == '' && (this.mail.includes('@') && (this.mail.includes('ru') || this.mail.includes('kz') || this.mail.includes('com')))) {
        this.errors.pop('Укажите, пожалуйста, корректный email')
        this.$refs.input_mail.style.border = '0px solid red'
      }


      if (!this.errors.length == 0) {
        this.isActiveForm = !this.isActiveForm
      }

      if (this.errors.length == 0) {
        this.isActiveForm = false
      }


    },
    closeForm: function() {
      this.isActiveForm = !this.isActiveForm
      this.errors = []
    },
    acceptNumber: function() {
      var x = this.tel.replace(/(\d{3})(\d{3})(\d{4})/, ' ($1) $2-$3')
      this.tel = x
    }
  }
}
</script>


<style>
.ConsultationBlock {
  width: 100%;
  display: flex;
  padding: 5% 0;
  background: #fafafa;
}

.ConsultationBlock .verticalCenter {
  width: 100%;
}

.ConsultationBlock .content * {
  color: #fff;
}

.ConsultationBlock .content p {
  line-height: 60px;
}

.ConsultationBlock .content {
  background: url("~assets/img/1001480308_1.jpg") no-repeat fixed;
  padding: 10%;
}

.cons_pre_link a {
  text-decoration: none;
  color: red;
  font-weight: 700;
}

.form input {
  width: 20%;
  padding: 12px 15px;
  outline: none;
}

.form input::placeholder {
  font-weight: 200;
  font-size: 0.9em;
}

.cons_but {
  font-size: 0.9em;
  padding: 12px 30px;
  background-color: red !important;
  color: white;
  border: 2px solid red;
}

.cons_but:hover {
  background-color: red;
  border: 2px solid red;
}

.cons_cont .cons_small_text {
  font-size: 0.7em;
  color: rgb(180, 180, 180);
}

.cons_cont .cons_small_text a {
  color: rgb(180, 180, 180);
  border-bottom: 1px solid red;
}

.cons_cont .cons_small_text a:hover {
  text-decoration: none;
  border-bottom: 1px solid red;
}

.form_errors {
  display: block;
  position: fixed;
  height: auto;
  width: 400px;
  bottom: 2%;
  color: white;
  z-index: 999;
  background-color: rgb(231, 68, 63);
  right: 2%;
  opacity: 0;
  transition: all 0.5s ease;
}

.form_error_active {
  opacity: 1;
}

.form_x {
  position: relative;
  top: 2%;
  font-size: 1.4em;
  left: 95%;
}

@media only screen and (max-width: 440px) {

  .ConsultationBlock .content input {
    width: auto;
  }

  .ConsultationBlock .content button {
    width: 100%;
  }

  .cons_cont p {
    width: 80%;
  }

  .cons_text {
    font-size: 1.6em;
  }

  .cons_vertical {
    display: none;
  }

  .cons_pre_link {
    font-size: 0.9em;
  }

  .form input {
    width: 80%;
    margin: 3% 0;
    padding: 12px 15px;
  }

}
</style>
