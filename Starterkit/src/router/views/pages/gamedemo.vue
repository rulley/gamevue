<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import Datagrid from "@/components/widgets/datagrid";

/**
 * Game Demo component
 */
export default {
  components: {
    Layout,
    PageHeader,
    Datagrid,
  },
  data() {
    return {

    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Game Demo" pageTitle="Game Demo" />
  

  <BRow>
      <BCol xl="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Latest Transaction</BCardTitle>
            <Datagrid />
          </BCardBody>
        </BCard>
      </BCol>
     
    </BRow>


    </Layout>
</template>