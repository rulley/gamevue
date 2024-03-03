<style lang="css">
@import 'https://kendo.cdn.telerik.com/themes/7.2.0/default/default-ocean-blue.css';
@import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
</style>
<script>
import { Grid, GridColumn } from '@progress/kendo-grid-vue-wrapper';
import { KendoDataSource } from '@progress/kendo-datasource-vue-wrapper';
import kendo from '@progress/kendo-ui';

export default {
    components: {
        'kendo-grid': Grid,
        'kendo-grid-column': GridColumn,
        'kendo-datasource': KendoDataSource
    },
   data: function () {
        return {
            schemaModelFields: {
                productID: { type: 'number', editable: false },
                productName: { validation: { required: true } },
                unitPrice: { type: 'number', validation: { required: true, min: 1 } },
                unitsInStock: { type: 'number', validation: { min: 0, required: true } }
            }
        };
    },
    methods: {
        readgridData: function(e) {

            let user = JSON.parse(localStorage.getItem('user'));
            if (user && user.token) {
                console.log('fake usertoken');
                console.log(user.token);
            } else {
                return {};
            }
            //e.success({ProductName: "Chai"})
            fetch('https://demos.telerik.com/kendo-ui/service/Products', {
                mode:  'cors', 
                method: 'get',
                //body: JSON.stringify(this.formData),
                headers: {
                    //'Accept': 'application/vnd.api+json',
                    //'Content-type': 'application/vnd.api+json',
                },
              })

                  .then((response) => response.text())
                  .then((json) => {e.success(json);})
                  //.then((response) => {e.success(response.text())})
                
                //.then((json) => console.log(json))
                .catch(function (error) {
                    console.log('Error on Authentication' + error);
                });

                
        },
        parameterMap: function(options, operation) {
            if (operation !== 'read' && options.models) {
                return { models: kendo.stringify(options.models) };
            }
        }
    }
}
</script>

<template>
<Layout>
    <kendo-datasource ref="datasource1"
                        :transport-read="readgridData"
                        :transport-update-url="'https://demos.telerik.com/kendo-ui/service/Products/Update'"
                        :transport-update-data-type="'jsonp'"
                        :transport-destroy-url="'https://demos.telerik.com/kendo-ui/service/Products/Destroy'"
                        :transport-destroy-data-type="'jsonp'"
                        :transport-create-url="'https://demos.telerik.com/kendo-ui/service/Products/Create'"
                        :transport-create-data-type="'jsonp'"
                        :transport-parameter-map="parameterMap"
                        :schema-model-id="'ProductID'"
                        :schema-model-fields="schemaModelFields"
                        :batch='true'
                        :page-size='20'>
    </kendo-datasource>

    <kendo-grid :height="600"
                :data-source-ref="'datasource1'"
                :pageable='true'
                :editable="'inline'"
                :toolbar="['create']">
        <kendo-grid-column :field="'ProductName'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitPrice'"
                           :title="'Unit Price'"
                           :width="120"
                           :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitsInStock'"
                           :title="'Units In Stock'"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'Discontinued'"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :command="['edit', 'destroy']"
                           :title="'&nbsp;'"
                           :width="170"></kendo-grid-column>
    </kendo-grid>
 </Layout>
</template>
