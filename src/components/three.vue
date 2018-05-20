<template>
  <div>
    <h1>{{ pagename }}</h1>
    <p> ============================== </p>
    <a href="https://www.sohu.com">goto Sohu</a>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                author: "yoyo",
                articles: [],
                pagename: "page three"
            }
        }
    }
</script>