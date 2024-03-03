<script>
import { authMethods } from "@/state/helpers";

/**
 * Forgot password component
 */
export default {
    data() {
    return {
      email: "",
      error: null,
      tryingToReset: false,
      isResetError: false
    };
  },
  methods: {
    ...authMethods,
    // Try to register the user in with the email, fullname
    // and password they provided.
    tryToReset() {
      this.tryingToReset = true;
      // Reset the authError if it existed.
      this.error = null;
      return (
        this.resetPassword({
          email: this.email
        })
          // eslint-disable-next-line no-unused-vars
          .then(token => {
            this.tryingToReset = false;
            this.isResetError = false;
          })
          .catch(error => {
            this.tryingToReset = false;
            this.error = error ? error : "";
            this.isResetError = true;
          })
      );
    }
  }
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
                <h5 class="text-white font-size-20 p-2">Reset Password</h5>
                <BLink href="/" class="logo logo-admin">
                  <img src="@/assets/images/logo-sm.png" height="24" alt="logo" />
                </BLink>
              </div>
            </div>
            <BCardBody class="p-4">
              <div class="p-3">
                <BAlert v-model="isResetError" class="mt-3" variant="danger" dismissible>{{ error }}</BAlert>

                <BForm @submit.prevent="tryToReset" class="form-horizontal mt-4">
                  <BFormGroup id="email-group" label="Email" label-for="email" class="mb-3" label-class="form-label">
                    <BFormInput id="email" v-model="email" type="email" placeholder="Enter email"></BFormInput>
                  </BFormGroup>

                  <BRow class="mb-0">
                    <BCol cols="12" class="text-end">
                      <BButton type="submit" variant="primary" class="w-md">Reset</BButton>
                    </BCol>
                  </BRow>
                </BForm>
              </div>
            </BCardBody>
          </BCard>
          <div class="mt-5 text-center">
            <p>
              Remember It ?
              <router-link to="/login" class="fw-medium text-primary">Sign In here</router-link>
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
