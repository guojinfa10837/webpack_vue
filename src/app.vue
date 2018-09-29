<template>
	<div id="app">
		<v-head></v-head>
		<v-todo></v-todo>
		<v-foot></v-foot>
	</div>
</template>
<script type="text/javascript">
	import vHead from "./pages/head.vue";
    import Footer from './pages/footer.jsx';
    import Todo from './pages/todo.vue';
	export default {
	    data(){
	    	return {
	    		msg:"744444455555557"
	    	}
	    },
	    components:{
	    	"v-head":vHead,
	    	"v-foot":Footer,
	    	"v-todo":Todo
	    }
	}
</script>
<style lang="stylus" scoped>
	#app
		position absolute
		left 0
		right 0
		top 0
		bottom 0
		#cover
			position absolute
			left 0
			top 0
			right 0
			bottom 0
			background-color #999
			opacity .9
			z-index -1
</style>