<template>
<div class="itemList">
 <div class="item">
 	<img :src="item.titlepic" class="c-pic">
 	<div class="c-info">
 	<p class="c-title">{{item.title}}</p>
 	<div class="c-user">
 		<img  :src="item.userpic" alt="" class="u-hd-pic">
 		<div class="c-u-info">
 			<span>{{item.username}}</span>
 			<span>{{item.id}}</span>
 		</div>
 	</div>
 	</div>
 </div>
</div>
</template>

<script>
export default {
  name: 'Item',
  props: ['item'],
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.c-pic{width: 100%;}
.itemList{padding:.5rem;box-sizing: border-box;width: 50%;}
.item{background-color: #fff;border-radius: .5rem;overflow: hidden;}
.c-info{padding:.8rem;}
.c-title{line-height: 1rem;font-size: 1.2rem;}
.c-user{display: flex;margin-top: .4rem;}
.u-hd-pic{width: 3rem;height: 3rem;border-radius: 50%;}
.c-u-info span{display: block;line-height: 1.5rem;margin-left: .5rem;}
.c-u-info span:nth-child(2){color:#aaa;}
</style>
