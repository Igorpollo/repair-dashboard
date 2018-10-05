<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-lg-6 mx-auto">
        <b-card header="<i class='fa fa-align-justify'></i> Categorias">
          <table class="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Variável</th>
                <th>Preço</th>
                <th>Ação</th>

              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in usuarios">
                <td>{{usuario.name}}</td>
                <td>
                    {{usuario.category.name}}
                </td>
                <td>
                    <span style="color: green" v-if="usuario.is_variable">Sim</span>
                    <span style="color: red" v-else>Não</span   >
                </td>
                <td>R${{usuario.price}}</td>
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
      usuarios: []
    }
  },
  beforeCreate () {
    axios.get('http://209.97.150.143:3000/service')
      .then(response => {
        this.usuarios = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {

  }
}
</script>
