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
                <select v-model="category">
                <option value="" disabled>Selecione a categoria</option>
                <option v-for="option in options" v-bind:value="option._id">
                    {{ option.name }}
                </option>
                </select>
                <br>
              </b-form-fieldset>
            </div>
          </div><!--/.row-->
            <div class="row">
            <div class="col-sm-12">
              <b-form-fieldset label="Nome">
                <b-form-input type="text" id="name" v-model="nome" placeholder="Nome da Categoria"></b-form-input>
              </b-form-fieldset>
            </div>
            <div class="col-sm-12">
            </div>
          </div><!--/.row-->
                      <div class="row">
            <div class="col-sm-12">
                <p>Preço variável?</p>
                <select v-model="is_variable">
                <option value="true">Sim</option>
                <option value="false">Não</option>
                </select>
            </div>
            <div class="col-sm-12">
            </div>
            <br />
          </div><!--/.row-->
            <div v-if="is_variable" class="row">
            <div class="col-sm-12">
              <b-form-fieldset label="Preço">
                <b-form-input type="text" id="name" v-model="price" placeholder="Nome da Categoria"></b-form-input>
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
      options: [],
      category: '',
      is_variable: '',
      price: ''
    }
  },
  beforeCreate () {
    axios.get('https://repair-solucoes.herokuapp.com/category')
      .then(response => {
        this.options = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    click () {
      axios.post('https://repair-solucoes.herokuapp.com/service',
        {
          name: this.nome,
          category: this.category,
          is_variable: this.is_variable,
          price: this.price
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