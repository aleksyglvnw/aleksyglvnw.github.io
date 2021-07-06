import About from '../pages/About.vue'
import Work from '../pages/Work.vue'
import Contact from '../pages/Contact.vue'
import NotFound from '../pages/NotFound.vue'

const titleAdditional = 'Alexey Golovnev'

export const routes = [
  {
    path: '/',
    name: 'about',
    component: About,
    meta: {
      title: `About | ${titleAdditional}`
    }
  },
  {
    path: '/work',
    name: 'work',
    component: Work,
    meta: {
      title: `Work | ${titleAdditional}`
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      title: `Contact | ${titleAdditional}`
    }
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound,
    meta: {
      title: `Not Found | ${titleAdditional}`
    }
  }
]
