<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-lg-6 mx-auto">
        <b-card header="<i class='fa fa-align-justify'></i> Categorias">
          <table class="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Prestador</th>
                <th>Status</th>
                <th>Iugu</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in usuarios">
                <td>{{usuario.name}}</td>
                <td>
                    <span style="color: green" v-if="usuario.is_provider">Sim</span>
                    <span style="color: red" v-else>Não</span>
                </td>
                <td>
                    <span v-if="usuario.is_active" class="badge badge-success">Ativo</span>
                    <span v-else class="badge badge-warning">Pendente</span>
                </td>
                <td>
                  <span v-if="!usuario.bank" class="badge badge-danger">Não possui banco cadastrado</span>
                  <span v-if="usuario.bank && usuario.iugu_approved" class="badge badge-success">Sim</span>
                  <span v-if="usuario.bank && !usuario.iugu_approved" @click="criarIugu(usuario)" class="badge badge-warning" style="cursor: pointer;">Não</span>
                </td>
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
    axios.get('https://repair-solucoes.herokuapp.com/admin/users')
      .then(response => {
        this.usuarios = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    criarIugu: function (usuario) {
      axios.post('https://api.iugu.com/v1/accounts/' + usuario.iugu_account_id + '/request_verification?api_token=1560e1286e9f3a025c65ea8282697e4b',
        {
          data: {
            price_range: 'Até R$3000,00'
          }
        }
      ).then(response => {
        console.log(response)
      })
    }
  }
}
</script>