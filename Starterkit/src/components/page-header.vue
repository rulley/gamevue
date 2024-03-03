<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: '',
    },
    pageTitle: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <BRow class="align-items-center">
    <BCol sm="6">
      <div class="page-title-box">
        <h4 class="font-size-18">{{ title }}</h4>
        <div class="page-title-right">
          <ol class="breadcrumb m-0">
            <li class="breadcrumb-item">
              <BLink href="javascript: void(0);">{{ pageTitle }}</BLink>
            </li>
            <li class="breadcrumb-item active">{{ title }}</li>
          </ol>
        </div>
      </div>
    </BCol>
  </BRow>
</template>
