<template>
  <div ref="main" class="main-container">
    <div class="row">
      <div
        class="login-container col-sm-12 offset-md-3 col-md-6"
        v-bind:class="{ active: !isActive }"
      >
        <h1>Hello this is Login</h1>
        <login-form></login-form>
        <div class="small">
          Do not have an account? Click
          <a
            data-target="openLogin"
            id="openLogin"
            @click="swapLogin"
            href="#register"
            >here</a
          >!
        </div>
      </div>
      <div
        class="register-cointainer col-sm-12 offset-md-3 col-md-6"
        v-bind:class="{ active: isActive }"
      >
        <h1>Hello this is registration</h1>
        <register-form></register-form>
        <div class="small">
          Already registered? Click
          <a
            data-target="openRegister"
            id="openRegister"
            @click="swapLogin"
            href="#login"
            >here</a
          >!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";
export default {
  data() {
    return {
      isActive: false,
      getFormHash: this.$route.hash
    };
  },
  components: {
    "login-form": LoginForm,
    "register-form": RegisterForm
  },
  methods: {
    swapLogin: function() {
      this.isActive = !this.isActive;
    },
    whatFormActive: function() {
      if (this.getFormHash == "#register") {
        this.swapLogin();
      }
    }
  },
  mounted: function() {
    this.whatFormActive();
  }
};
</script>
