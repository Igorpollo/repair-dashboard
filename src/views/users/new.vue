<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-sm-8 mx-auto">
        <b-card>
          <div slot="header">
            <strong>Adicionar nova categoria</strong>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <b-form-fieldset label="Nome">
                <b-form-input type="text" id="name" v-model="nome" placeholder="Nome da Categoria"></b-form-input>
              </b-form-fieldset>
            </div>
            <div class="col-sm-12">

            </div>
          </div><!--/.row-->
          <button type="button" class="btn btn-primary" @click="click()">Salvar</button>
        </b-card>
      </div><!--/.col-->
    </div>
 </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'forms',
  data: function () {
    return {
      nome: ''
    }
  },
  methods: {
    click () {
      axios.post('https://repair-solucoes.herokuapp.com/service',
        {
          name: this.nome
        })
        .then(response => {
          if (response.data.success === true) {
            this.nome = ''
            alert('Categoria salva com sucesso!')
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>