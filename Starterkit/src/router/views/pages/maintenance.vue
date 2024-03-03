<script>

/**
 * Maintenance page
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

    <section class="my-5">
      <BContainer class="container-alt">
        <BRow class="justify-content-center">
          <BCol cols="10" class="text-center">
            <div class="home-wrapper mt-5">
              <div class="mb-4">
                <img src="@/assets/images/logo-dark.png" alt="logo" height="22" />
              </div>

              <div class="maintenance-img">
                <img src="@/assets/images/maintenance.png" alt class="img-fluid mx-auto d-block" />
              </div>
              <h3 class="mt-4">Site is Under Maintenance</h3>
              <p>Please check back in sometime.</p>

              <BRow>
                <BCol md="4" class="text-center">
                  <BCard no-body class="mt-4 maintenance-box">
                    <BCardBody>
                      <i class="mdi mdi-airplane-takeoff h2"></i>
                      <h6 class="text-uppercase mt-3">Why is the Site Down?</h6>
                      <p class="text-muted mt-3">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration.
                      </p>
                    </BCardBody>
                  </BCard>
                </BCol>
                <BCol md="4" class="text-center">
                  <BCard no-body class="mt-4 maintenance-box">
                    <BCardBody>
                      <i class="mdi mdi-clock-alert h2"></i>
                      <h6 class="text-uppercase mt-3">What is the Downtime?</h6>
                      <p class="text-muted mt-3">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical.
                      </p>
                    </BCardBody>
                  </BCard>
                </BCol>
                <BCol md="4" class="text-center">
                  <BCard no-body class="mt-4 maintenance-box">
                    <BCardBody>
                      <i class="mdi mdi-email h2"></i>
                      <h6 class="text-uppercase mt-3">Do you need Support?</h6>
                      <p class="text-muted mt-3">
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure there isn't anything embar..
                        <BLink href="mailto:no-reply@domain.com" class="text-decoration-underline">no-reply@domain.com</BLink>
                      </p>
                    </BCardBody>
                  </BCard>
                </BCol>
              </BRow>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </section>
  </div>
</template>
