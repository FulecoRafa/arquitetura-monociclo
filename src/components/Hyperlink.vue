<template>
  <a :href="to" target="_blank"><slot></slot></a>
</template>

<script>
export default {
    props: {
        to: String
    }
}
</script>

<style scoped>
    a{
        color: white;
        text-decoration: none;
    }
    a:hover{
        text-decoration: underline;
    }
    a::after{
        content: '🔗';
        padding: 0 3px;
    }
</style>