<template>
 <div>
 	<div class="find-head">
 		<div class="head-wrap"></div>
 		<span>发现</span>
 		<div class="head-wrap find-nav">
 			<i v-on:click="showBgBox"></i>
 		</div>
 	</div>
 	<div class="find-tabs">
 		<ul>
 			<template v-for="tab in tabs">
 			<findTab v-bind:tab="tab"></findTab>
 			</template>
 		</ul>
 	</div>

 	<div class="find-gather">
 		<p class="gather-title">发现采集</p>
 		<div class="find-gather-cont">
 		<template v-for="item in items">
 			<Item :item="item"></Item>
 		</template>
 		</div>
 	</div>

  <MaskBox ref="showbgBox"></MaskBox>
 </div>
</template>

<script>
import findTab from '@/components/findTab'
import Item from '@/components/Item'
import MaskBox from '@/components/maskBox'

export default {
  name: 'Find',
  data () {
    return {
    	items:[],
    	tabs:[{
    		src:'http://img.hb.aicdn.com/b28884a9da37875de127fccfcfb1c1ac1b02d3291298d-YUs2b4_sq320',
    		title:'手机壁纸'
    	},{
    		src:'http://img.hb.aicdn.com/76f26e0e48df8b792b4ffabf94eefe49655314217787-7Z6rht_sq320',
    		title:'水彩'
    	},{
    		src:'http://img.hb.aicdn.com/e1fdd81c7994f45a9abb9df38314c62a31cc23eb8a28-ZkA9Q7_sq320',
    		title:'无状态'
    	},{
    		src:'http://img.hb.aicdn.com/c8be88d0138146dc72251a1dde07385be033d5b45d0e4-DEpNam_sq320',
    		title:'Essia'
    	}]
    }
  },
  mounted:function(){
  	this.$http.get('/api/v1/home')
	.then(res=>{
		
		this.items = res.data
	})
  },
  components:{
  	findTab,
  	Item,
    MaskBox
  },
  methods:{
    showBgBox:function(){
      this.$refs.showbgBox.$emit('showbox')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.find-head{height: 4rem;text-align: center;line-height: 4rem;font-size:1.5rem;background-color: #fff;display: flex;}
.head-wrap{width: 2rem;margin:0 1rem;}
.find-head span{flex-grow: 1;font-weight: bold;font-size: 1.6rem;}
.find-nav{line-height: 3.6rem;}
.find-nav i{width: 2rem;height: 2rem;background-image: url(../../assets/nav.png);display: inline-block;background-size: contain;vertical-align: middle;}

.find-tabs{padding: .5rem 0 ;width: 100%;overflow-x: scroll;-webkit-overflow-scrolling: touch;}

.find-tabs ul{width: 9999px;padding-right: .8rem;}
.find-gather{padding: 0.5rem;}
.gather-title{font-size: 1.4rem;padding: .5rem 1rem;}
.find-gather-cont{display: flex;flex-wrap: wrap;}


</style>
