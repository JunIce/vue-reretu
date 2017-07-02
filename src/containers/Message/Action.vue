<template>
	<div class="message-main">
	<template v-if="haveMsg">
		<div class="haveNoMsg">
		<strong>暂无消息</strong>	
		</div>	
	</template>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				haveMsg:true
			}
		}
	}
</script>
<style >
	.haveNoMsg{min-height: 90vh;background-color: #fff;display: flex;align-items: center;text-align: center;justify-content: center;}
	.haveNoMsg strong{font-size: 1.8rem;color:#bbb;text-align: center;}
</style>