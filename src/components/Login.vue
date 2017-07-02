<template>
 	<div id="login-page">
 		<div class="login-head">
 			<div class="head-wrap"></div>
 			<div class="head-title">登录</div>
 			<div class="head-wrap"><i class="closeBtn" v-on:click="closeLogin"></i></div>
 		</div>
 		<div class="login-main">
 			<p class="hb-account-title">花瓣帐号登录</p>

 			<input type="text" name="account" placeholder="邮箱/手机号" >
 			<input type="password" name="password" placeholder="密码">

 			<button>登录</button>

 			<div class="other-choose cl">
 				<a href="" class="fl">忘记密码</a>
 				<a href="" class="fr">
 				手机注册
 				</a>
 			</div>

 				<p class="hb-account-title">第三方帐号直接登录</p>
 				<div>
 					
 				</div>
 		</div>
 	</div>
</template>

<script>
export default {
 	name : 'Message',
 	data (){
 		return {

 		}
 	},
 	methods:{
 		closeLogin:function(){
 			this.$emit('loginBol',false)
 		}
 	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login-page{background-color:#fff;position: fixed;top:0;left: 0;width: 100%}
.login-head{display: flex;line-height: 4rem;}
.head-wrap{width: 2rem;margin:0 1rem;}
.head-title{flex-grow:1;text-align: center;font-weight: bold;font-size: 1.6rem;}

.closeBtn{width: 2rem;height: 2rem;background-image: url(../assets/close.png);display: inline-block;background-size: contain;vertical-align: middle;cursor: pointer;	margin-top: -.5rem;}

.login-main{padding: 0 2rem;}
.hb-account-title{font-size: 1.2rem;color:#999;text-align: center;padding: 2rem 0;}
.login-main input{width: 100%;display: inline-block;background-color:#f4f4f4;border:none;padding:.8rem 1rem;box-sizing: border-box;margin-bottom: 2rem;border-radius: 5px;overflow: hidden;outline: none;line-height: 2rem;color:#333;}
.login-main	 button{width: 100%;display: block;background-color:#ff6666;color:#fff;outline:none;border:none;line-height: 2rem;padding: .8rem;overflow: hidden;border-radius: 5px;cursor: pointer;}
.other-choose{padding: 1.5rem 0;width: 100%;}
.other-choose a{display: inline-block;color:#666;}

</style>
