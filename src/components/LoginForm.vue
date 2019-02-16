<template>
  <form class="loginForm" @submit.prevent="$validator.validateAll()">
    <div class="form-group">
      <div class="form-group">
        <div class="row">
          <div class="col-sm-12 col-md-4 left">
            <label for="userEmail">
              <span class>Email</span>
            </label>
          </div>
          <div class="col-sm-12 col-md-8">
            <input
              placeholder="example@email.com"
              id="userEmail"
              class="form-control"
              type="text"
              name="email"
              v-validate="'required|email'"
              v-model="user.login"
            />
            <div
              class="help-block alert alert-danger"
              v-show="errors.has('email')"
            >
              {{ errors.first("email") }}
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-4 left">
          <label for="userPassEntering">
            <span class>Password</span>
          </label>
        </div>
        <div class="col-sm-12 col-md-8">
          <input
            placeholder="Your password"
            id="userPassEntering"
            class="form-control"
            type="password"
            v-validate="'required|min:8'"
            name="password"
            v-model="user.password"
          />
          <div
            class="help-block alert alert-danger"
            v-show="errors.has('password')"
          >
            {{ errors.first("password") }}
          </div>
        </div>
      </div>
    </div>
    <div class="button-group sdsd">
      <button type="submit" class="btn btn-primary" @click="onLoginClick">
        Login
      </button>
    </div>
    <h2>{{ loginError }}</h2>
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { LOGIN_USER } from "@/store/action.types.js";
export default {
  mounted() {},
  methods: {
    ...mapActions({
      login: "userStore/" + LOGIN_USER
    }),
    onLoginClick() {
      this.login(this.user).then(
        function() {
          this.$router.push({ name: "profile" });
        }.bind(this)
      );
    }
  },
  computed: {
    ...mapState({
      loginError: state => state.userStore.loginError
    })
  },
  data() {
    return {
      user: {
        password: "",
        login: ""
      }
    };
  }
};
</script>
