<template>
  <div class="login">
    <HelloWorld msg="Welcome to Login Form"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "login",
  components: {
    HelloWorld
  }
};
</script>
