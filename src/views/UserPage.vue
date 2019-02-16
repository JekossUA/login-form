<template>
  <div class="user-page" v-if="userProfile">
    <p>First Name : {{ userProfile.firstName }}</p>
    <p>Last Name : {{ userProfile.lastName }}</p>
    <p>Email : {{ userProfile.email }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { GET_USER_PROFILE } from "@/store/action.types.js";
export default {
  mounted() {
    this.getProfile();
  },
  methods: {
    ...mapActions({
      getProfile: "userStore/" + GET_USER_PROFILE
    })
  },
  computed: {
    ...mapState({
      userProfile: state => state.userStore.user
    })
  }
};
</script>
