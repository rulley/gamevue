<script>
/**
 * Transaction component
 */
export default {
  props: {
    transactions: {
      type: Array,
      default: function () {
        return [];
      }
    }
  }
};
</script>

<template>
  <div class="table-responsive mb-0">
    <BTableSimple class="table-hover table-centered table-nowrap">
      <BThead>
        <BTr>
          <BTh scope="col">(#) Id</BTh>
          <BTh scope="col">Name</BTh>
          <BTh scope="col">Date</BTh>
          <BTh scope="col">Amount</BTh>
          <BTh scope="col" colspan="2">Status</BTh>
        </BTr>
      </BThead>
      <BTbody>
        <BTr v-for="data in transactions" :key="data.id">
          <BTh scope="row">{{ data.id }}</BTh>
          <BTd>
            <div>
              <img :src="`${data.image}`" alt class="avatar-xs rounded-circle me-2" />
              {{ data.name }}
            </div>
          </BTd>
          <BTd>{{ data.date }}</BTd>
          <BTd>{{ data.amount }}</BTd>
          <BTd>
            <span class="badge" :class="{
              'bg-danger': data.status === 'Cancel',
              'bg-warning': data.status === 'Pending',
              'bg-success': data.status === 'Delivered'
            }">{{ data.status }}</span>
          </BTd>
          <BTd>
            <div>
              <BLink href="#" class="btn btn-primary btn-sm">Edit</BLink>
            </div>
          </BTd>
        </BTr>
      </BTbody>
    </BTableSimple>
  </div>
</template>