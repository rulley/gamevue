<script>

/**
 * Lock-screen-1 component
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
                  <h5 class="text-white font-size-20">Locked</h5>
                  <p class="text-white-50">Hello Smith, enter your password to unlock the screen!</p>
                  <router-link to="/" class="logo logo-admin">
                    <img src="@/assets/images/logo-sm.png" height="24" alt="logo" />
                  </router-link>
                </div>
              </div>

              <BCardBody class="p-4">
                <div class="p-3">
                  <BForm class="form-horizontal mt-4">
                    <div class="pt-3 text-center">
                      <img src="@/assets/images/users/user-6.jpg" class="rounded-circle img-thumbnail avatar-lg" alt="thumbnail" />
                      <h6 class="font-size-16 mt-3">Robert Smith</h6>
                    </div>

                    <div class="mb-3">
                      <label for="userpassword">Password</label>
                      <BFormInput type="password" id="userpassword" placeholder="Enter password" />
                    </div>

                    <div class="form-group row mb-0">
                      <BCol cols="12" class="text-end">
                        <BButton variant="primary" class="w-md" type="submit">Unlock</BButton>
                      </BCol>
                    </div>
                  </BForm>
                </div>
              </BCardBody>
            </BCard>

            <div class="mt-5 text-center">
              <p>
                Not you ? return
                <router-link to="/pages/login-1" class="fw-medium text-primary">Sign In</router-link>
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