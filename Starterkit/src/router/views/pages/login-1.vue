<script>

/**
 * Login-1 component
 */
export default {
};
</script>
<template>
  <div>
    <div class="home-btn d-none d-sm-block">
      <router-link to="/" class="text-dark">
        <i class="fas fa-home h2"></i>
      </router-link>
    </div>
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
                  <BForm class="form-horizontal mt-4">
                    <div class="mb-3">
                      <label class="form-label" for="username">Username</label>
                      <BFormInput type="text" id="username" placeholder="Enter username" />
                    </div>

                    <div class="mb-3">
                      <label class="form-label" for="userpassword">Password</label>
                      <BFormInput type="password" id="userpassword" placeholder="Enter password" />
                    </div>

                    <BRow class="mb-3">
                      <BCol sm="6">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" id="customControlInline" />
                          <label class="form-check-label" for="customControlInline">Remember me</label>
                        </div>
                      </BCol>
                      <BCol sm="6" class="text-end">
                        <BButton variant="primary" class="w-md" type="submit">
                          Log In
                        </BButton>
                      </BCol>
                    </BRow>

                    <div class="form-group mt-2 mb-0 row">
                      <BCol cols="12" class="mt-4">
                        <router-link to="/pages/recoverpwd-1">
                          <i class="mdi mdi-lock"></i> Forgot your password?
                        </router-link>
                      </BCol>
                    </div>
                  </BForm>
                </div>
              </BCardBody>
            </BCard>

            <div class="mt-5 text-center">
              <p>
                Don't have an account ?
                <router-link to="/pages/register-1" class="fw-medium text-primary">Signup now</router-link>
              </p>
              <p class="mb-0">
                ©
                {{ new Date().getFullYear() }}
                Veltrix. Crafted with
                <i class="mdi mdi-heart text-danger"></i> by Themesbrand
              </p>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  </div>
</template>
