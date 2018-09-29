<template>
	<div class="helper">
		<span class="left">{{unFinishedTodoLength}} items left</span>
		<span class="tabs">
			<span v-for="it in states" @click="selected(it)">
				{{it}}
			</span>
			
		</span>
		<span class="clear">Clear Completed</span>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{				
				states:["allSelected","allNoSelected"]
			}
		},
		props:{
          todo:Array,
          state:Boolean
		}, 
		computed:{
			unFinishedTodoLength:function(){
                return this.todo.length;
			}
		},
        methods:{
            selected:function(v){
             /* var st = false;
              if(v == "allSelected"){
                 st = true;
              }
              this.$emit('update:state',st);*/
              this.$emit('selected',v);
            }
        }
	}
</script>
<style lang="stylus" scoped>
    .helper{
        font-weight 100
        display flex
        justify-content space-between
        padding 5px 0
        line-height 30px
        background-color #ffffff
        font-size 14px
        font-smoothing:antialiased;
    }
    .left,.clear,.tabs{
        padding 0px 10px
        box-sizing border-box
    }
    .left,.clear{
        width 150px
    }
    .left{
        text-align left
    }
    .clear {
        text-align:right
        cursor pointer
    }
    .tabs{
        width 200px
        display flex
        justify-content space-around
        *{
            display inline-block
            padding 0px 10px
            cursor pointer
            border 1px solid rgba(175,47,47,0)
            &.actived{
                border-color rgba(175,47,47,0.4)
                border-radius 5px
            }
        }
    }
</style>