<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-lg-6 mx-auto">
        <b-card header="<i class='fa fa-align-justify'></i> Categorias">
          <table class="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Ação</th>

              </tr>
            </thead>
            <tbody>
              <tr v-for="categoria in categorias">
                <td>{{categoria.name}}</td>
                <td>Deletar</td>
              </tr>
            </tbody>
          </table>
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
      categorias: []
    }
  },
  beforeCreate () {
    axios.get('https://repair-solucoes.herokuapp.com/category')
      .then(response => {
        this.categorias = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {

  }
}
</script>