export default  [
	{
		path: '/',
        name: 'about',
		component: () => import(/* webpackChunkName: "about" */ './../views/About.vue'),
    }
]
 