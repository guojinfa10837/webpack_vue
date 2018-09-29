<template>
	<section class="real-app">
		<input type="text"
    v-model="wd"
		class="add-input"
		autofocus="autofocus"
		placeholder="接下去要做什么？"
		@keyup.enter="addTodo">
		<Item 
       :todo = "filteredTodos"
       @dele = "deleteTodo"
       ></Item>
		<tabs 
       :todo = "filteredTodos"
       :state.sync="state"
       @selected="selectedState"></tabs>
	</section>
</template>
<script type="text/javascript">
	import Item from "./item.vue";
	import Tabs from "./tabs.vue";
  	export default {
  		data(){
  			return {
          wd:'',
          state:false,
  				filteredTodos:[]
  			}
  		},
  		components:{
           Item,
		       Tabs
  		},
  		methods:{
  			addTodo(e){
            (this.wd) && (this.filteredTodos.push({label:this.wd,selected:this.state}));
            this.wd="";
  			},
        selectedState:function(v){
           var st = true;
           if(v != "allSelected"){
            st = false;
           };
           this.state = st;
           for(var i =0;i<this.filteredTodos.length;i++){
              this.filteredTodos[i].selected = st;
           }
        },
  			deleteTodo(inx){
          console.log(inx);
          this.todo.splice(inx,inx+1);
        },
  			toggleFilter(){},
  			clearAllCompleted(){}
  		}
  	}
</script>
<style lang="stylus" scoped>
.real-app{
        width 600px
        margin :0px  auto
        box-shadow :0px 0px 5px #666
    }
    .add-input{
        positon:relative;
        margin 0px
        width 100%
        font-size 24px
        font-family  inherit
        font-weight:inherit
        line-height 1.4rem
        border 0;
        outline none
        color inherit
        padding 6px
        border 1px solid #999
        box-shadow: inset 0 -1px 5px 0px rgba(0,0,0,0)
        box-sizing border-box
        font-smoothing:antialiased;
        padding 16px 16px 16px 60px
        border none
    }
</style>