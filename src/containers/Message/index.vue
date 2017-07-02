<template>
 <div class="page">
 <div class="msg-head">
 	<div><router-link to="/message/actions">动态</router-link></div>
 	<div><router-link to="/message/pmsg">私信</router-link></div>
 </div>

	<router-view></router-view>

	
<transition name='pagemBt'>
<template v-if="showLogin" >
	<Login v-on:loginBol="closeLogin"></Login>
</template>
</transition>



 </div>
</template>

<script>
import Login from '@/components/Login'
export default {
 	name : 'Message',
 	data (){
 		return {
 			showLogin: false
 		}
 	},
 	methods:{
 		openLogin:function(){
 			this.showLogin = true
 		},
 		closeLogin:function(data){
 			this.showLogin = data
 		}
 	},
 	components:{
 		Login
 	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.msg-head{height: 4rem;line-height: 4rem;padding:0 6rem;display: flex;justify-content: space-around;background-color:#fff;color:#333;}
.msg-head div{box-sizing: border-box;}
.msg-head a{color:#333;display: inline-block;border-bottom: 1px solid #333;box-sizing: border-box;}
.page{min-height: 100vh}
.pagemBt-enter-active {
	-webkit-animation: moveFromBottom .6s ease ;
	-moz-animation: moveFromBottom .6s ease ;
	animation: moveFromBottom .6s ease ;
}
.pagemBt-leave-active{
	-webkit-animation: leaveFromBottom .6s ease ;
	-moz-animation: leaveFromBottom .6s ease ;
	animation: leaveFromBottom .6s ease ;
}
@keyframes moveFromBottom {
	from { transform: translateY(200%); }
	
}
@keyframes leaveFromBottom {
	from { transform: translateY(0%); }
	to {transform: translateY(200%);}
}
</style>
