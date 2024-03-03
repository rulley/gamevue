<script>

/**
 * Login-2 component
 */
export default {

};
</script>
<template>
  <div>
    <div class="accountbg" :style="{ 'background': 'url(' + require('@/assets/images/bg.jpg') + ')', 'background-size': 'cover', 'background-position': 'center' }"></div>
    <div class="wrapper-page account-page-full">
      <BCard no-body class="shadow-none">
        <div class="card-block">
          <div class="account-box">
            <div class="card-box shadow-none p-4">
              <div class="p-2">
                <div class="text-center mt-4">
                  <router-link to="/">
                    <img src="@/assets/images/logo-dark.png" height="22" alt="logo" />
                  </router-link>
                </div>

                <h4 class="font-size-18 mt-5 text-center">Welcome Back !</h4>
                <p class="text-muted text-center">Sign in to continue to Veltrix.</p>

                <BForm class="mt-4" action="#">
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
                      <BButton variant="primary" class="w-md" type="submit">Log In</BButton>
                    </BCol>
                  </BRow>

                  <div class="form-group mt-2 mb-0 row">
                    <BCol cols="12" class="mt-3">
                      <router-link to="/pages/recoverpwd-2">
                        <i class="mdi mdi-lock"></i> Forgot your password?
                      </router-link>
                    </BCol>
                  </div>
                </BForm>

                <div class="mt-5 pt-4 text-center">
                  <p>
                    Don't have an account ?
                    <router-link to="/pages/register-2" class="fw-medium text-primary">Signup now</router-link>
                  </p>
                  <p>
                    ©
                    {{ new Date().getFullYear() }}
                    Veltrix. Crafted with
                    <i class="mdi mdi-heart text-danger"></i> by Themesbrand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BCard>
    </div>
  </div>
</template>