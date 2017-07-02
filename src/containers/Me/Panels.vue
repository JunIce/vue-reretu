<template>
	<div class="panel-list">
		<Item :item="item"></Item>
		<div class="panel-add">
			<div class="panel-add-btn"></div>
		</div>
	</div>
</template>
<script>
import Item from '@/components/Item'
	export default {
		data(){
			return{
				item:{
					"fcode": "0",
		            "userpic": "http://img.reretu.com/2017/05/11/913bdb08ae2cb510_150x150.jpg",
		            "username": "witzesucht",
		            "id": "1315",
		            "title": "唯美少女",
		            "classid": "33",
		            "titlepic": "http://img.reretu.com/2017/06/26/1449e300f9e6f45b_300x300.jpg",
		            "userid": "685",
		            "favanum": "0",
		            "titleurl": "/posts/photo/1315",
		            "reason": "",
		            "plnum": "0"
				}
			}
		},
		components:{
			Item
		}
	}
</script>
<style scoped>
.panel-list{background-color:#f4f4f4;padding:.5rem;display: flex;}
.panel-add{width: 50%;padding: .5rem;box-sizing: border-box; }
.panel-add-btn{border:1px solid #bbb;height: 20rem;border-radius: 5px;}
</style>