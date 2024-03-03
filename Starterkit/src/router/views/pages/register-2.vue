<script>

/**
 * Register-2 component
 */
export default {
 
};
</script>
<template>
  <div>
    <!-- Begin page -->
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

                <h4 class="font-size-18 mt-5 text-center">Free Register</h4>
                <p class="text-muted text-center">Get your free Veltrix account now.</p>

                <form class="mt-4" action="#">
                  <div class="mb-3">
                    <label class="form-label" for="useremail">Email</label>
                    <BFormInput type="email" id="useremail" placeholder="Enter email" />
                  </div>

                  <div class="mb-3">
                    <label class="form-label" for="username">Username</label>
                    <BFormInput type="text" id="username" placeholder="Enter username" />
                  </div>

                  <div class="mb-3">
                    <label class="form-label" for="userpassword">Password</label>
                    <BFormInput type="password" id="userpassword" placeholder="Enter password" />
                  </div>

                  <BRow class="mb-3">
                    <BCol cols="12" class="text-end">
                      <BButton variant="primary" class="w-md" type="submit">Register</BButton>
                    </BCol>
                  </BRow>

                  <div class="form-group mt-2 mb-0 row">
                    <BCol cols="12" class="mt-3">
                      <p class="mb-0">
                        By registering you agree to the Veltrix
                        <BLink href="#" class="text-primary">Terms of Use</BLink>
                      </p>
                    </BCol>
                  </div>
                </form>

                <div class="mt-5 pt-4 text-center">
                  <p>
                    Already have an account ?
                    <router-link to="/pages/login-2" class="fw-medium text-primary">Login</router-link>
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