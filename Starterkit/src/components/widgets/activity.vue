<script>
/**
 * Activity component
 */
export default {
  props: {
    title: {
      type: String,
      default: "Activity"
    },
    activityData: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<template>
  <BCard no-body>
    <BCardBody>
      <BCardTitle class="mb-4">{{title}}</BCardTitle>
      <ol class="activity-feed">
        <li class="feed-item" v-for="activity in activityData" :key="activity.id">
          <div class="feed-item-list">
            <span class="date">{{activity.date}}</span>
            <span class="activity-text">{{activity.text}}</span>
          </div>
        </li>
      </ol>
      <div class="text-center">
        <BLink href="#" class="btn btn-primary">Load More</BLink>
      </div>
    </BCardBody>
  </BCard>
</template>