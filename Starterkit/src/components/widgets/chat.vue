<script>
import simplebar from "simplebar-vue";
import useVuelidate from "@vuelidate/core";

/**
 * Chat component
 */
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  components: { simplebar },
  props: {
    title: {
      type: String,
      default: "Chat",
    },
    chatWindowHeight: {
      type: String,
      default: "367px",
    },
    chatMessages: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      chats: {
        message: "",
      },
      submitform: false,
    };
  },
  methods: {
    /**
     * Chat form submit
     */
    saveMessage() {
      this.submitform = true;
      // stop here if form is invalid
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      } else {
        var id = this.chatMessages.length;
        const message = this.chats.message;
        const currentDate = new Date();

        // Message Push in Chat
        this.chatMessages.push({
          image: require("@/assets/images/users/user-3.jpg"),
          id: id + 1,
          name: "Smith",
          message,
          odd: true,
          time: currentDate.getHours() + ":" + currentDate.getMinutes(),
        });
      }
      this.submitform = false;
      this.chats = {};
    },
  },
};
</script>

<template>
  <BCard no-body>
    <BCardBody>
      <BCardTitle class="mb-4">{{ title }}</BCardTitle>
      <div class="chat-conversation">
        <ul class="conversation-list">
          <simplebar :style="`max-height:${chatWindowHeight}`">
            <li v-for="chat in chatMessages" :key="chat.id" :class="{ odd: chat.odd === true }" class="clearfix">
              <div class="chat-avatar">
                <img :src="`${chat.image}`" alt="male" class="avatar-xs rounded-circle" />
                <span class="time">{{ chat.time }}</span>
              </div>
              <div class="conversation-text">
                <div class="ctext-wrap">
                  <span class="user-name">{{ chat.name }}</span>
                  <p>{{ chat.message }}</p>
                </div>
              </div>
            </li>
          </simplebar>
        </ul>
      </div>

      <BForm @submit.prevent="saveMessage">
        <BRow class="pt-3">
          <BCol sm="9" col="8" class="chat-inputbar">
            <input id="message" v-model="chats.message" type="text" class="form-control chat-input" placeholder="Enter your text" name="message" :class="{ 'is-invalid': submitform && v$.chats.message.$error }" />
            <div v-if="submitform && !v$.chats.message.required" class="invalid-feedback">
              This value is required.
            </div>
          </BCol>

          <BCol sm="3" cols="4" class="chat-send">
            <div class="d-grid">
              <BButton variant="success" type="submit">Send</BButton>
            </div>
          </BCol>
        </BRow>
      </BForm>
    </BCardBody>
  </BCard>
</template>
