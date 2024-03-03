<script>
import { mapState } from "vuex";

import {
    authMethods,
    authFackMethods,
    notificationMethods,
} from "@/state/helpers";
import { required, email } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

/**
 * Login component
 */
export default {
    setup() {
        return { v$: useVuelidate() };
    },
    components: {},
    validations: {
        email: {
            required,
            email,
        },
        password: {
            required,
        },
    },
    data() {
        return {
            email: "admin@themesbrand.com",
            password: "123456",
            submitted: false,
            authError: null,
            tryingToLogIn: false,
            isAuthError: false,
        };
    },
    computed: {
        ...mapState("authfack", ["status"]),
        notification() {
            return this.$store ? this.$store.state.notification : null;
        },
    },
    methods: {
        ...authMethods,
        ...authFackMethods,
        ...notificationMethods,
        // Try to log the user in with the username
        // and password they provided.
        tryToLogIn() {
            this.submitted = true;
            // stop here if form is invalid
            this.v$.$touch();
            if (this.v$.$invalid) {
                return;
            } else {
                if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
                    this.tryingToLogIn = true;
                    // Reset the authError if it existed.
                    this.authError = null;
                    return (
                        this.logIn({
                            email: this.email,
                            password: this.password,
                        })
                            // eslint-disable-next-line no-unused-vars
                            .then((token) => {
                                this.tryingToLogIn = false;
                                this.isAuthError = false;
                                // Redirect to the originally requested page, or to the home page
                                this.$router.push(
                                    this.$route.query.redirectFrom || { name: "home" }
                                );
                            })
                            .catch((error) => {
                                this.tryingToLogIn = false;
                                this.authError = error ? error : "";
                                this.isAuthError = true;
                            })
                    );
                } else if (process.env.VUE_APP_DEFAULT_AUTH === "fakebackend") {
                    const { email, password } = this;
                    if (email && password) {
                        this.login({
                            email,
                            password,
                        });
                    }
                }
            }
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
                                <h5 class="text-white font-size-20">Welcome Back !</h5>
                                <p class="text-white-50">Sign in to continue to Veltrix.</p>
                                <router-link to="/" class="logo logo-admin">
                                    <img src="@/assets/images/logo-sm.png" height="24" alt="logo" />
                                </router-link>
                            </div>
                        </div>

                        <BCardBody class="p-4">
                            <div class="p-3">
                                <BAlert v-model="isAuthError" variant="danger" class="mt-3" dismissible>{{ authError }}</BAlert>
                                <div v-if="notification.message" :class="'alert ' + notification.type">
                                    {{ notification.message }}
                                </div>

                                <BForm @submit.prevent="tryToLogIn" class="form-horizontal mt-4">
                                    <BFormGroup id="input-group-1" label="Email" label-for="input-1" class="mb-3" label-class="form-label">
                                        <BFormInput id="input-1" :class="{ 'is-invalid': submitted && v$.email.$error }" v-model="email" type="email" placeholder="Enter email"></BFormInput>
                                        <div v-if="submitted && v$.email.$error" class="invalid-feedback">
                                            <span v-if="!v$.email.required">Email is required.</span>
                                            <span v-if="!v$.email.email">Please enter valid email.</span>
                                        </div>
                                    </BFormGroup>

                                    <BFormGroup id="input-group-2" label="Password" label-for="input-2" class="mb-3" label-class="form-label">
                                        <BFormInput id="input-2" v-model="password" type="password" placeholder="Enter password" :class="{ 'is-invalid': submitted && v$.password.$error }"></BFormInput>
                                        <div v-if="submitted && !v$.password.required" class="invalid-feedback">
                                            Password is required.
                                        </div>
                                    </BFormGroup>

                                    <div class="form-group row">
                                        <BCol sm="6">
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" id="customControlInline" />
                                                <label class="form-check-label" for="customControlInline">Remember me</label>
                                            </div>
                                        </BCol>
                                        <BCol sm="6" class="text-end">
                                            <BButton type="submit" variant="primary" class="w-md">Log In</BButton>
                                        </BCol>
                                    </div>

                                    <BRow class="mt-2 mb-0">
                                        <BCol cols="12" class="mt-4">
                                            <router-link to="/forgot-password">
                                                <i class="mdi mdi-lock"></i> Forgot your password?
                                            </router-link>
                                        </BCol>
                                    </BRow>
                                </BForm>
                            </div>
                        </BCardBody>
                    </BCard>     
                                                                                                                                                                                                                   
                    <div class="mt-5 text-center">
                        <p>
                            Don't have an account ?
                            <router-link to="/register" class="fw-medium text-primary">Signup now</router-link>
                        </p>
                        <p class="mb-0">
                            © {{ new Date().getFullYear() }} Veltrix. Crafted with

                            <i class="mdi mdi-heart text-danger"></i> by Themesbrand
                        </p>
                    </div>
                </BCol>
            </BRow>
        </BContainer>
    </div>
</template>

<style lang="scss" module></style>
