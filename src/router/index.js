import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import Charts from '@/views/Charts'
import Widgets from '@/views/Widgets'

// Minhas
import newCategory from '@/views/categories/new'
import viewCategory from '@/views/categories/index'

import viewUsers from '@/views/users/index'

import viewServices from '@/views/services/index'
import addServices from '@/views/services/new'
// Views - Components

import Cards from '@/views/components/Cards'
import Forms from '@/views/components/Forms'

import Modals from '@/views/components/Modals'
import Switches from '@/views/components/Switches'
import Tables from '@/views/components/Tables'

// Views - Icons
import SimpleLineIcons from '@/views/icons/SimpleLineIcons'

// Views - Pages
import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'
import Login from '@/views/pages/Login'
import Register from '@/views/pages/Register'

Vue.use(Router)

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'categories',
          redirect: '/categories/index',
          name: 'Categorias',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'new',
              name: 'Adicionar Categoria',
              component: newCategory
            },
            {
              path: 'index',
              name: 'Ver todas',
              component: viewCategory
            },
            {
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            }
          ]
        },
        {
          path: 'services',
          redirect: '/services/index',
          name: 'Serviços',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'new',
              name: 'Adicionar Serviço',
              component: addServices
            },
            {
              path: 'index',
              name: 'Ver todas',
              component: viewServices
            }
          ]
        },
        {
          path: 'users',
          redirect: '/users/index',
          name: 'Users',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'index',
              name: 'Ver Usuarios',
              component: viewUsers
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: SimpleLineIcons
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/p404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})
