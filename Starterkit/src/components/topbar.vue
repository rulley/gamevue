<script>
import Simplebar from 'simplebar-vue'
/**
 * Topbar component
 */
export default {
  data() {
    return {};
  },
  components: {
    Simplebar
  },
  methods: {
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */ !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
  },
};
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <router-link to="/" class="logo logo-dark">
            <span class="logo-sm">
              <img src="@/assets/images/logo-sm.png" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-dark.png" alt height="17" />
            </span>
          </router-link>

          <router-link to="/" class="logo logo-light">
            <span class="logo-sm">
              <img src="@/assets/images/logo-sm.png" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-light.png" alt height="18" />
            </span>
          </router-link>
        </div>

        <BButton variant="" type="button" class="btn btn-sm px-3 font-size-24 header-item" id="vertical-menu-btn" @click="toggleMenu()">
          <i class="mdi mdi-menu"></i>
        </BButton>

        <div class="d-none d-sm-block">
          <BDropdown variant="white" class="pt-3 d-inline-block">
            <template v-slot:button-content>
              Create
              <i class="mdi mdi-chevron-down"></i>
            </template>
            <BDropdownItem>Action</BDropdownItem>
            <BDropdownItem>Another action</BDropdownItem>
            <BDropdownItem>Something else here</BDropdownItem>
            <BDropdownDivider></BDropdownDivider>
            <BDropdownItem>Separated link</BDropdownItem>
          </BDropdown>
        </div>
      </div>

      <div class="d-flex">
        <BForm class="app-search d-none d-lg-block">
          <div class="position-relative">
            <input type="text" class="form-control" placeholder="Search..." />
            <span class="fa fa-search"></span>
          </div>
        </BForm>

        <!-- App Search-->

        <BDropdown class="d-none d-md-block ms-2" toggle-class="header-item" menu-class="dropdown-menu-end" right variant="white">
          <template v-slot:button-content>
            <img class="me-2" src="@/assets/images/flags/us_flag.jpg" alt="Header Language" height="16" />
            English
            <span class="mdi mdi-chevron-down"></span>
          </template>
          <BLink href="javascript:void(0);" class="dropdown-item notify-item">
            <img src="@/assets/images/flags/germany_flag.jpg" alt="user-image" class="me-1" height="12" />
            <span class="align-middle">German</span>
          </BLink>

          <!-- item-->
          <BLink href="javascript:void(0);" class="dropdown-item notify-item">
            <img src="@/assets/images/flags/italy_flag.jpg" alt="user-image" class="me-1" height="12" />
            <span class="align-middle">Italian</span>
          </BLink>

          <!-- item-->
          <BLink href="javascript:void(0);" class="dropdown-item notify-item">
            <img src="@/assets/images/flags/french_flag.jpg" alt="user-image" class="me-1" height="12" />
            <span class="align-middle">French</span>
          </BLink>

          <!-- item-->
          <BLink href="javascript:void(0);" class="dropdown-item notify-item">
            <img src="@/assets/images/flags/spain_flag.jpg" alt="user-image" class="me-1" height="12" />
            <span class="align-middle">Spanish</span>
          </BLink>

          <!-- item-->
          <BLink href="javascript:void(0);" class="dropdown-item notify-item">
            <img src="@/assets/images/flags/russia_flag.jpg" alt="user-image" class="me-1" height="12" />
            <span class="align-middle">Russian</span>
          </BLink>
        </BDropdown>

        <div class="dropdown d-none d-lg-inline-block">
          <BButton type="button" class="header-item noti-icon" variant="body" @click="initFullScreen">
            <i class="mdi mdi-fullscreen"></i>
          </BButton>
        </div>

        <BDropdown class="d-inline-block" toggle-class="header-item noti-icon" menu-class="dropdown-menu-lg p-0 dropdown-menu-end" right variant="white">
          <template v-slot:button-content>
            <i class="mdi mdi-bell-outline"></i>
            <span class="badge bg-danger rounded-pill">3</span>
          </template>
          <div class="p-3">
            <BRow class="align-items-center">
              <BCol>
                <h5 class="m-0 font-size-16">Notifications (258)</h5>
              </BCol>
            </BRow>
          </div>
          <Simplebar data-simplebar style="max-height: 230px;">
            <BLink href="javascript:void(0);" class="text-reset notification-item">
              <div class="d-flex">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar-xs">
                    <span class="avatar-title bg-success rounded-circle font-size-16">
                      <i class="mdi mdi-cart-outline"></i>
                    </span>
                  </div>
                </div>
                <div class="flex-grow-1">
                  <h6 class="mb-1">Your order is placed</h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      Dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </BLink>

            <BLink href="" class="text-reset notification-item">
              <div class="d-flex">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar-xs">
                    <span class="avatar-title bg-warning rounded-circle font-size-16">
                      <i class="mdi mdi-message-text-outline"></i>
                    </span>
                  </div>
                </div>
                <div class="flex-grow-1">
                  <h6 class="mt-0 mb-1">New Message received</h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">You have 87 unread messages</p>
                  </div>
                </div>
              </div>
            </BLink>

            <BLink href="" class="text-reset notification-item">
              <div class="d-flex">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar-xs">
                    <span class="avatar-title bg-info rounded-circle font-size-16">
                      <i class="mdi mdi-glass-cocktail"></i>
                    </span>
                  </div>
                </div>
                <div class="flex-grow-1">
                  <h6 class="mt-0 mb-1">Your item is shipped</h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      It is a long established fact that a reader will
                    </p>
                  </div>
                </div>
              </div>
            </BLink>

            <BLink href="" class="text-reset notification-item">
              <div class="d-flex">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar-xs">
                    <span class="avatar-title bg-primary rounded-circle font-size-16">
                      <i class="mdi mdi-cart-outline"></i>
                    </span>
                  </div>
                </div>
                <div class="flex-grow-1">
                  <h6 class="mt-0 mb-1">Your order is placed</h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      Dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </BLink>

            <BLink href="" class="text-reset notification-item">
              <div class="d-flex">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar-xs">
                    <span class="avatar-title bg-danger rounded-circle font-size-16">
                      <i class="mdi mdi-message-text-outline"></i>
                    </span>
                  </div>
                </div>
                <div class="flex-grow-1">
                  <h6 class="mt-0 mb-1">New Message received</h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">You have 87 unread messages</p>
                  </div>
                </div>
              </div>
            </BLink>
          </Simplebar>
          <div class="p-2 border-top">
            <div class="d-grid">
              <BLink class="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                View all
              </BLink>
            </div>
          </div>
        </BDropdown>

        <BDropdown class="d-inline-block" right toggle-class="header-item" variant="white" menu-class="dropdown-menu-end">
          <template v-slot:button-content>
            <img class="rounded-circle header-profile-user" src="@/assets/images/users/user-4.jpg" alt="Header Avatar" />
          </template>
          <BDropdownItem>
            <i class="mdi mdi-account-circle font-size-17 align-middle me-1"></i>
            Profile
          </BDropdownItem>
          <BDropdownItem>
            <i class="mdi mdi-wallet font-size-17 align-middle me-1"></i> My
            Wallet
          </BDropdownItem>
          <a class="dropdown-item d-block" href="#"><span class="badge bg-success float-end">11</span><i class="mdi mdi-cog font-size-17 align-middle me-1"></i> Settings</a>
          <BDropdownItem>
            <i class="mdi mdi-lock-open-outline font-size-17 align-middle me-1"></i>
            Lock screen
          </BDropdownItem>
          <BDropdownDivider />
          <BDropdownItem to="/logout" class="text-danger">
            <i class="bx bx-power-off font-size-17 align-middle me-1 text-danger"></i>
            Logout
          </BDropdownItem>
        </BDropdown>

        <div class="dropdown d-inline-block">
          <BButton type="button" variant="body" class="header-item noti-icon right-bar-toggle toggle-right" @click="toggleRightSidebar">
            <i class="mdi mdi-cog-outline toggle-right"></i>
          </BButton>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.dropdown-menu {
  max-width: 500px !important;
}
</style>