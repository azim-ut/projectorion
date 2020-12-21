<template>
  <div class="ConsultationBlock">
    <div class="verticalLeft">
      <div class="txt">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</div>
    </div>
    <div class="verticalCenter">
      <div class="content" id="cons">
        <h3>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</h3>
        <br />
        <p>по телефону:<a href="tel:88005503193" style=" color: #fff; font-size: 2.2em;"> 8 (800) 550-31-93</a> или
          форме обратной связи: </p>
        <div class="form m-0">
          <input class="cons_input_name mr-2" ref="input_name" type="text" placeholder="Ваше имя" required>
          <input class="cons_input_tel mr-2" ref="input_phone" maxlength=13 type="tel" placeholder="Телефон" required>
          <input class="cons_input_email mr-2" ref="input_mail" type="mail" placeholder="E-mail" required>
          <button class="cons_but font-weight-normal" @click='submitForm'>Получить консультацию</button>
        </div>
        <small>Нажимая на кнопку «Получить консультацию» вы соглашаетесь с <a href="#">политикой конфиденциальности</a></small>
        <div class="form_errors" ref="form_error" :class="{'form_error_active': isActiveForm}">
          <p class="form_x m-0 p-0" @click="closeForm">x</p>
          <div class="px-3 pb-2 m-0">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        name: '',
        phone: '',
        mail: '',
        errors: []
      },
      isActiveForm: false
    }
  },
  methods: {
    submitForm: function() {
      axios.post('/core/rest/help/callback', this.form).then(({ data }) => {
        window.console.log(data)
      })
    },
    closeForm: function() {
      this.isActiveForm = !this.isActiveForm
      this.errors = []
    },
    acceptNumber: function() {
      var x = this.phone.replace(/(\d{3})(\d{3})(\d{4})/, ' ($1) $2-$3')
      this.phone = x
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

.ConsultationBlock .content input {
  color: #000;
}

.ConsultationBlock .content p {
  line-height: 60px;
}

.ConsultationBlock .content {
  background: url("/img/1001480308_1.jpg") no-repeat fixed;
  padding: 8% 5%;
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
