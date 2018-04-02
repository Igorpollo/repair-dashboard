export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'UI elements'
    },
    {
      name: 'Usuários',
      url: '/users',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Ver todos',
          url: '/users/index',
          icon: 'icon-puzzle'
        },
        {
          name: 'Adicionar Usuário',
          url: '/components/social-buttons',
          icon: 'icon-puzzle'
        },
        {
          name: 'Forms',
          url: '/components/forms',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Categorias',
      url: '/categorys',
      icon: 'icon-star',
      children: [
        {
          name: 'Ver todas',
          url: '/categories/index',
          icon: 'icon-star'
        },
        {
          name: 'Adicionar',
          url: '/categories/new',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'danger',
        text: 'NEW'
      }
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'icon-pie-chart'
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/pages/login',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/pages/register',
          icon: 'icon-star'
        },
        {
          name: 'Error 404',
          url: '/pages/404',
          icon: 'icon-star'
        },
        {
          name: 'Error 500',
          url: '/pages/500',
          icon: 'icon-star'
        }
      ]
    }
  ]
}
