<template>
 <div>
 	<div class="search-box">
 	<Search></Search>
 	</div>
 	<div class="home-ct">
 	<template v-if="loadding">
 		<Loadding></Loadding>
 	</template>
 	<template v-else>
	 	<template v-for = "item in items">
	 		<Item v-bind:item="item"></Item>
	 	</template>
 	</template>
 	</div>
 </div>
</template>

<script>
import Search from '@/components/Search'
import Item from '@/components/Item'
import Loadding from '@/components/Loadding'


export default {
  name: 'Home',
  data () {
    return {
    	loadding:true,
      	items : []
    }
  },
  mounted(){
  	// setTimeout(()=>{
  	// 	this.$http.get('/api/v1/home')
  	// 		.then(res=>{
  	// 			this.loadding = false
  	// 			this.items = res.data
  	// 		})
  	// },3000)
  },
  components:{
  	Search,
  	Item,
  	Loadding,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-box{padding:.8rem 1rem;background-color: #fff;}
.home-ct{display: flex;flex-wrap: wrap;padding:.5rem;min-height: 100vh}
</style>
