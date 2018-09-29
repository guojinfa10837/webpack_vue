<template>
	<header class="main-header">
		<h1>{{msg}}</h1>
	</header>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				msg:"JTodo"
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.main-header
		text-align center
		h1
			font-size 100px
			color rgba(175,47,47,0.4)
			font-weight 100
			margin 20px
</style>