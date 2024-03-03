<script>
import {
  authMethods,
  authFackMethods,
  notificationMethods,
} from "@/state/helpers";
import { required, email } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { mapState } from "vuex";

/**
 * Register component
 */
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
      submitted: false,
      regError: null,
      tryingToRegister: false,
      isRegisterError: false,
      registerSuccess: false,
    };
  },
  validations: {
    user: {
      username: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    ...authMethods,
    ...authFackMethods,
    ...notificationMethods,
    // Try to register the user in with the email, username
    // and password they provided.
    tryToRegisterIn() {
      this.submitted = true;

      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      } else {
        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          this.tryingToRegister = true;
          // Reset the regError if it existed.
          this.regError = null;
          return (
            this.register({
              email: this.email,
              password: this.password,
            })
              // eslint-disable-next-line no-unused-vars
              .then((token) => {
                this.$router.push(
                  this.$route.query.redirectFrom || { name: "home" }
                );
              })
              .catch((error) => {
                this.tryingToRegister = false;
                this.regError = error ? error : "";
                this.isRegisterError = true;
              })
          );
        } else if (process.env.VUE_APP_DEFAULT_AUTH === "fakebackend") {
          const { email, username, password } = this.user;
          if (email && username && password) {
            this.registeruser(this.user);
          }
        }
      }
    },
  },

  computed: {
    ...mapState("authfack", ["status"]),
    notification() {
      return this.$store ? this.$store.state.notification : null;
    },
  },
};
</script>

<template>
  <div class="account-pages my-5 pt-5">
    <BContainer>
      <BRow class="justify-content-center">
        <BCol md="8" lg="6" xl="4">
          <BCard no-body class="overflow-hidden">
            <div class="bg-primary">
              <div class="text-primary text-center p-4">
                <h5 class="text-white font-size-20">Free Register</h5>
                <p class="text-white-50">Get your free Veltrix account now.</p>
                <router-link to="/" class="logo logo-admin">
                  <img src="@/assets/images/logo-sm.png" height="24" alt="logo" />
                </router-link>
              </div>
            </div>

            <BCardBody class="p-4">
              <div class="p-3">
                <BAlert v-model="registerSuccess" class="mt-3" variant="success" dismissible>Registration successfull.</BAlert>

                <BAlert v-model="isRegisterError" class="mt-3" variant="danger" dismissible>{{ regError }}</BAlert>

                <div v-if="notification.message" :class="'alert ' + notification.type">
                  {{ notification.message }}
                </div>

                <BForm @submit.prevent="tryToRegisterIn" class="form-horizontal mt-4">
                  <BFormGroup id="username-group" label="Username" label-for="username" label-class="form-label" class="mb-3">
                    <BFormInput id="username" v-model="user.username" type="text" placeholder="Enter name" :class="{
                      'is-invalid': submitted && v$.user.username.$error,
                    }"></BFormInput>
                    <div v-if="submitted && !v$.user.username.required" class="invalid-feedback">
                      Username is required.
                    </div>
                  </BFormGroup>

                  <BFormGroup id="email-group" label="Email" label-for="email" label-class="form-label" class="mb-3">
                    <BFormInput id="email" v-model="user.email" type="email" placeholder="Enter email" :class="{
                      'is-invalid': submitted && v$.user.email.$error,
                    }"></BFormInput>
                    <div v-if="submitted && v$.user.email.$error" class="invalid-feedback">
                      <span v-if="!v$.user.email.required">Email is required.</span>
                      <span v-if="!v$.user.email.email">Please enter valid email.</span>
                    </div>
                  </BFormGroup>

                  <BFormGroup id="password-group" label="Password" label-for="password" label-class="form-label" class="mb-3">
                    <BFormInput id="password" v-model="user.password" type="password" placeholder="Enter password" :class="{
                      'is-invalid': submitted && v$.user.password.$error,
                    }"></BFormInput>
                    <div v-if="submitted && !v$.user.password.required" class="invalid-feedback">
                      Password is required.
                    </div>
                  </BFormGroup>

                  <div class="form-group mb-0 text-center">
                    <BCol cols="12" class="text-end">
                      <BButton type="submit" variant="primary" class="w-md">Register</BButton>
                    </BCol>
                  </div>
                  <BRow class="form-group mt-2 mb-0">
                    <BCol cols="12" class="mt-4">
                      <p class="mb-0">
                        By registering you agree to the Veltrix
                        <BLink href="#" class="text-primary">Terms of Use</BLink>
                      </p>
                    </BCol>
                  </BRow>
                </BForm>
              </div>
            </BCardBody>
          </BCard>
          <div class="mt-5 text-center">
            <p>
              Already have an account ?
              <router-link to="/login" class="fw-medium text-primary">Login</router-link>
            </p>
            <p>
              ©{{ new Date().getFullYear() }} Veltrix. Crafted with
              <i class="mdi mdi-heart text-danger"></i> by Themesbrand
            </p>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

