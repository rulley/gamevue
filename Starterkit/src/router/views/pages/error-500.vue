<script>

export default {
  
};
</script>
<template>
  <!-- Begin page -->
  <div class="authentication-bg d-flex align-items-center pb-0 vh-100">
    <div class="content-center w-100">
      <BContainer>
        <BRow class="justify-content-center">
          <BCol xl="10">
            <BCard no-body>
              <BCardBody>
                <BRow class="align-items-center">
                  <BCol lg="4" class="ms-auto">
                    <div class="ex-page-content">
                      <h1 class="text-body display-1 mt-4">500</h1>
                      <h4 class="mb-4">Internal Server Error</h4>
                      <p class="mb-5">
                        It will be as simple as Occidental in fact, it will be
                        Occidental to an English person
                      </p>
                      <router-link class="btn btn-primary mb-5" to="/">
                        <i class="mdi mdi-home"></i> Back to Dashboard
                      </router-link>
                    </div>
                  </BCol>
                  <BCol lg="5" class="mx-auto">
                    <img src="@/assets/images/error.png" alt class="img-fluid mx-auto d-block" />
                  </BCol>
                </BRow>
              </BCardBody>
            </BCard>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  </div>
</template>
