const c1 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/thiago/projects/blog/src/templates/Post.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/thiago/projects/blog/src/templates/Tag.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--project-vue" */ "/Users/thiago/projects/blog/src/templates/Project.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--nihongo-vue" */ "/Users/thiago/projects/blog/src/templates/Nihongo.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--writing-vue" */ "/Users/thiago/projects/blog/src/pages/Writing.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--thiagobrandam-vue" */ "/Users/thiago/projects/blog/src/pages/Thiagobrandam.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--online-courses-vue" */ "/Users/thiago/projects/blog/src/pages/OnlineCourses.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--podcasts-vue" */ "/Users/thiago/projects/blog/src/pages/Podcasts.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--projects-vue" */ "/Users/thiago/projects/blog/src/pages/Projects.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--nihongo-vue" */ "/Users/thiago/projects/blog/src/pages/Nihongo.vue")
const c11 = () => import(/* webpackChunkName: "page--src--pages--books-vue" */ "/Users/thiago/projects/blog/src/pages/Books.vue")
const c12 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/thiago/projects/blog/node_modules/gridsome/app/pages/404.vue")
const c13 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/thiago/projects/blog/src/pages/Index.vue")

export default [
  {
    path: "/writing/:year/:month/:day/:slug/",
    component: c1
  },
  {
    path: "/tags/:id/",
    component: c2
  },
  {
    path: "/projects/:id/",
    component: c3
  },
  {
    path: "/nihongo/:slug/",
    component: c4
  },
  {
    path: "/writing/",
    component: c5
  },
  {
    path: "/thiagobrandam/",
    component: c6
  },
  {
    path: "/online-courses/",
    component: c7
  },
  {
    path: "/podcasts/",
    component: c8
  },
  {
    path: "/projects/",
    component: c9
  },
  {
    path: "/nihongo/",
    component: c10
  },
  {
    path: "/books/",
    component: c11
  },
  {
    name: "404",
    path: "/404/",
    component: c12
  },
  {
    name: "home",
    path: "/",
    component: c13
  },
  {
    name: "*",
    path: "*",
    component: c12
  }
]
