<template>
  <form class="loginForm" @submit.prevent="$validator.validateAll()">
    <div class="form-group">
      <div class="row">
        <div class="col-sm-12 col-md-4 left">
          <label for="loginfirstname">
            <span class>Firstname</span>
          </label>
        </div>
        <div class="col-sm-12 col-md-8">
          <input
            placeholder="John"
            id="loginfirstname"
            class="form-control"
            type="text"
            name="firstName"
            v-validate="'required|alpha|min:3'"
            v-model.lazy="user.firstName"
          />
          <div
            class="help-block alert alert-danger"
            v-show="errors.has('firstName')"
          >
            {{ errors.first("firstName") }}
          </div>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col-sm-12 col-md-4 left">
          <label for="loginlastname">
            <span class>Lastname</span>
          </label>
        </div>
        <div class="col-sm-12 col-md-8">
          <input
            placeholder="Doe"
            id="loginlastname"
            class="form-control"
            type="text"
            name="lastName"
            v-validate="'required|alpha|min:3'"
            v-model.lazy="user.lastName"
          />
          <div
            class="help-block alert alert-danger"
            v-show="errors.has('lastName')"
          >
            {{ errors.first("lastName") }}
          </div>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col-sm-12 col-md-4 left">
          <label for="birthDate">
            <span class>Age</span>
          </label>
        </div>
        <div class="col-sm-12 col-md-8">
          <input
            id="birthDate"
            placeholder="22"
            class="form-control"
            type="text"
            name="Age"
            v-validate="'required|numeric|min_value:16|max_value:100'"
            v-model.lazy="user.Age"
          />
          <div class="help-block alert alert-danger" v-show="errors.has('Age')">
            {{ errors.first("Age") }}
          </div>
        </div>
      </div>
    </div>
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
            v-model="user.email"
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
    <div class="form-group">
      <div class="row">
        <div class="col-sm-12 col-md-4 left">
          <label for="loginPhone">
            <span class>Phone</span>
          </label>
        </div>
        <div class="col-sm-12 col-md-8">
          <input
            placeholder="+38 (090) 999 99 99"
            id="loginPhone"
            class="form-control"
            type="tel"
            name="phone"
            v-validate="{
              required: true,
              regex: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
            }"
            v-model="user.phone"
          />
          <div
            class="help-block alert alert-danger"
            v-show="errors.has('phone')"
          >
            {{ errors.first("phone") }}
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-4 left">
        <label for="userPass">
          <span class>Password</span>
        </label>
      </div>
      <div class="col-sm-12 col-md-8">
        <input
          placeholder="Your password"
          id="userPass"
          class="form-control"
          type="password"
          ref="password"
          v-validate="'required|min:8'"
          name="password"
          v-model="user.password"
        />
        <div
          v-show="errors.has('password')"
          class="help-block alert alert-danger"
        >
          {{ errors.first("password") }}
        </div>
      </div>
    </div>
    <div class="form-group mt-3">
      <div class="row">
        <div class="col-sm-12 col-md-4 left">
          <label for="loginpass">
            <span class>Confirm password</span>
          </label>
        </div>
        <div class="col-sm-12 col-md-8">
          <input
            placeholder="Password againe"
            id="loginpass"
            class="form-control"
            type="password"
            v-validate="'required|confirmed:password'"
            name="password_confirmation"
            data-vv-as="password"
            v-model="user.confirmPassword"
          />
          <div
            v-show="errors.has('password_confirmation')"
            class="help-block alert alert-danger"
          >
            {{ errors.first("password_confirmation") }}
          </div>
        </div>
      </div>
    </div>
    <div class="button-group sdsd">
      <input
        type="submit"
        class="btn btn-primary"
        value="Registration"
        @click="registerOnclick"
      />
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import { REGISTER_USER } from "@/store/action.types.js";
export default {
  methods: {
    ...mapActions({
      register: "userStore/" + REGISTER_USER
    }),
    registerOnclick() {
      if (this.errors.items.length <= 0) {
        this.register(this.user);
        this.$router.push({ name: "profile" });
      }
    }
  },
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        Age: "",
        password: "",
        phone: "",
        email: "",
        confirmPassword: "",
        roleId: 1
      }
    };
  }
};
</script>
