<script>
import { layoutMethods } from "@/state/helpers";
import Simplebar from 'simplebar-vue'

/**
 * Right sidebar component
 */
export default {
  components: { Simplebar },
  data() {
    return {
      layout: this.$store ? this.$store.state.layout.layoutType : {} || {},
      width: this.$store ? this.$store.state.layout.layoutWidth : {} || {},
      topbar: this.$store ? this.$store.state.layout.topbar : {} || {},
      mode: this.$store ? this.$store.state.layout.mode : {} || {},
      dir: this.$store ? this.$store.state.layout.dir : {} || {},
      sidebarType: this.$store
        ? this.$store.state.layout.leftSidebarType
        : {} || {},
      config: {
        handler: this.handleRightBarClick,
        middleware: this.middleware,
        events: ["click"],
      },
    };
  },

  methods: {
    ...layoutMethods,
    hide() {
      this.$parent.toggleRightSidebar();
    },
    // eslint-disable-next-line no-unused-vars
    handleRightBarClick(e, el) {
      this.$parent.hideRightSidebar();
    },
    // eslint-disable-next-line no-unused-vars
    middleware(event, el) {
      return !event.target.classList.contains("toggle-right");
    },
    changeLayout(layout) {
      this.changeLayoutType({ layoutType: layout });
    },
    changeType(type) {
      this.changeLayoutType({ layoutType: "vertical" });
      return this.changeLeftSidebarType({ leftSidebarType: type });
    },
    changeWidth(width) {
      return this.changeLayoutWidth({ layoutWidth: width });
    },
    changeTopbartype(value) {
      return this.changeTopbar({ topbar: value });
    },
    onChangeMode(mode) {
      this.changeMode({ mode: mode || 'light' })
    },
    onDirChange(data) {
      this.changeDir({ dir: data })
    }
  },
};
</script>

<template>
  <div>
    <div v-click-outside="config" class="right-bar">
      <Simplebar data-simplebar class="h-100">
        <div class="rightbar-title px-3 py-4">
          <BLink href="javascript:void(0);" class="right-bar-toggle float-end" @click="hide">
            <i class="mdi mdi-close noti-icon"></i>
          </BLink>
          <h5 class="m-0">Settings</h5>
        </div>
        <div class="p-3">
          <h6 class="mb-0">Layout</h6>
          <hr class="mt-1" />
          <BFormRadioGroup v-model="layout" stacked @change="changeLayout($event)" class="ms-1">
            <BFormRadio value="vertical" class="mb-1">Vertical</BFormRadio>
            <BFormRadio value="horizontal" class="mb-1">Horizontal</BFormRadio>
          </BFormRadioGroup>
          <!-- Width -->
          <h6 class="mt-3">Width</h6>
          <hr class="mt-1" />
          <BFormRadioGroup v-model="width" stacked @change="changeWidth($event)">
            <BFormRadio value="fluid" class="mb-1">Fluid</BFormRadio>
            <BFormRadio value="boxed">Boxed</BFormRadio>
          </BFormRadioGroup>
          <!-- Sidebar -->
          <div v-if="layout === 'vertical'">
            <h6 class="mt-3">Sidebar</h6>
            <hr class="mt-1" />
            <BFormRadioGroup v-model="sidebarType" stacked @change="changeType($event)">
              <BFormRadio value="dark" class="mb-1">Dark</BFormRadio>
              <BFormRadio value="light" class="mb-1">Light</BFormRadio>
              <BFormRadio value="compact" class="mb-1">Compact</BFormRadio>
              <BFormRadio value="icon">Icon</BFormRadio>
            </BFormRadioGroup>
          </div>
          <!-- Topbar -->
          <div v-if="layout === 'horizontal'">
            <h6 class="mt-3">Topbar</h6>
            <hr class="mt-1" />
            <BFormRadioGroup v-model="topbar" stacked @input="changeTopbartype($event)">
              <BFormRadio value="dark" class="mb-1">Dark</BFormRadio>
              <BFormRadio value="light" class="mb-1">Light</BFormRadio>
            </BFormRadioGroup>
          </div>
        </div>
        <!-- Settings -->
        <hr class="mt-0" />
        <h6 class="text-center">Choose Layouts</h6>

        <div class="p-4">
          <div class="mb-2">
            <img src="@/assets/images/layouts/layout-1.jpg" class="img-fluid img-thumbnail" alt />
            <BFormCheckbox v-model="mode" switch size="sm" value="light" @change="onChangeMode($event)"><span class="ms-2">Light Mode</span></BFormCheckbox>
          </div>

          <div class="mb-2">
            <img src="@/assets/images/layouts/layout-2.jpg" class="img-fluid img-thumbnail" alt />
            <BFormCheckbox v-model="mode" switch size="sm" value="dark" @change="onChangeMode($event)"><span class="ms-2">Dark Mode</span></BFormCheckbox>
          </div>

          <div class="mb-2">
            <img src="@/assets/images/layouts/layout-3.jpg" class="img-fluid img-thumbnail" alt />
            <BFormCheckbox v-model="dir" switch size="sm" value="rtl" @change="onDirChange($event)"><span class="ms-2">RTL Mode</span></BFormCheckbox>
          </div>

          <div class="d-grid">
            <router-link to="https://1.envato.market/grNDB" class="btn btn-primary mt-3" target="_blank">
              <i class="mdi mdi-cart me-1"></i> Purchase Now
            </router-link>
          </div>
        </div>
      </Simplebar>
      <!-- end scroll-->
    </div>

    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>
  </div>
</template>

<style lang="scss"></style>
