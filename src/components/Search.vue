<template>
 <div class="SearchWrap">
 <label for="searchInput"></label>
 <input type="text" id="searchInput" class="searchInput" name="keywords" placeholder="搜索花瓣"> 
 </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>
.SearchWrap{
	background-color: #eee;
	border-radius: .5rem;
	overflow: hidden;
	display: flex;
	padding:.8rem 1rem;
}
.SearchWrap label{background-image: url('../assets/search.png');background-repeat: no-repeat;background-size: contain;width: 2rem;height: 2rem;display: inline-block;}
.searchInput{flex-grow: 1;border:none;outline:none;color:#666;background-color: #eee;padding:0 .7rem;vertical-align: middle;line-height: 2rem}
</style>
