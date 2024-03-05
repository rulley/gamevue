<template>
    <Layout>
        <kendo-datasource ref="datasource1"
                    :transport-read="readgridData"
                    :transport-update="updategridData"
                    :transport-destroy="destroygridData"
                    :transport-create="creategridData"
                    :transport-parameter-map="parameterMap"
                    :schema-model-id="'id'"
                    :schema-model-fields="schemaModelFields"
                    :batch='true'
                    :page-size='20'>
        </kendo-datasource>
    
        <kendo-grid ref="grid"
                    :height="600"
                    :data-source-ref="'datasource1'"
                    :pageable="true"
                    :sortable="true"
                    :navigatable="true"
                    :resizable="true"
                    :reorderable="true"
                    :groupable="true"
                    :filterable="true"
                    :editable="'inline'"
                    toolbar="['create','excel', 'pdf', 'search']"
                    @edit="onGridEditing"
                    @dataBound="onDataBound"
                    :columns="columns"
                    >
                    <toolbar>
                    <span class="k-textbox k-grid-search k-display-flex">
                        <k-input
                        :style="{ width: '230px' }"
                        :placeholder="gridSearchMessage"
                        :value="searchWord"
                        @input="onFilter"
                        ></k-input>
                    </span>
                    <span class="export-buttons">
                        <dropdownlist
                        :style="{ width: '230px' }"
                        class="localeDropDownList"
                        :value="currentLocale"
                        :text-field="'language'"
                        @change="localeChange"
                        :data-items="locales"
                        >
                        </dropdownlist>
                        <kbutton
                        title="Export to Excel"
                        :theme-color="'primary'"
                        @click="exportExcel"
                        >
                        {{ exportExcelMessage }}</kbutton
                        >&nbsp;
                        <kbutton :theme-color="'primary'" @click="exportPDF">
                        {{ exportPdfMessage }}
                        </kbutton>
                    </span>
            </toolbar>
            <template v-slot:ratingTemplate="{ props }">
              <td class="text-center" v-if="props.rowType !== 'groupHeader'">
                <rating :data-item="props.dataItem"></rating>
              </td>
            </template>
        </kendo-grid>
     </Layout>
    </template>


<script>
import { Grid, GridColumn } from '@progress/kendo-grid-vue-wrapper';
import { KendoDataSource } from '@progress/kendo-datasource-vue-wrapper';
import kendo from '@progress/kendo-ui';
import RatingComponent from './ratingcomponent.vue';

export default {
    components: {
        'kendo-grid': Grid,
        'kendo-datasource': KendoDataSource,
         rating: RatingComponent,
    },


   data: function () {
        return {
            schemaModelFields: {
                id: { type: 'string', editable: true },
                GameName: { type: 'string', from: 'attributes.title', editable: true},
                NumberPlayers: { type: 'string', from: 'attributes.field_players', editable: true},
                Description: { type: 'string', from: 'attributes.field_description', editable: true},
                Publisher: { type: 'string', from: 'attributes.field_publisher', editable: true},
                Rating: { type: 'number', from: 'attributes.field_rating', editable: true},
                Created: { type: 'string', from: 'attributes.created', editable: false},
                Modified: { type: 'string', from: 'attributes.changed', editable: false},
                attributes: { defaultValue: {}},
                relationships: { defaultValue: {}},
            },
        };
    },
    columns() {
                return [
                    { 
                        field: "GameName", 
                        title: "Game Title", 
                        width: 120, 
                        hidden: false,
                    },
                    { 
                        field: "Publisher", 
                        title: "Publisher", 
                        //width: 120, 
                        hidden: false,
                    }, 
                    { 
                        field: "NumberPlayers", 
                        title: "Number Of Players", 
                        // width: 80, 
                        hidden: false,
                    }, 
                    { 
                        field: "Description", 
                        title: "Description", 
                        //width: 320, 
                        hidden: false,
                    }, 
                    {
                        field: "Rating",
                        title: "Rating",
                        //format: "{0}",
                        cell: 'ratingTemplate',
                    },
                    {
                        field: "Created",
                        title: "Created"
                    },
                    {
                        field: "Modified",
                        title: "Last Modified"
                    },
                    { command: ["edit", "destroy"], title: "&nbsp;", width: "250px" },
                ];
         },

    methods: {
        /////READ CALLS//////
        readgridData: function(e) {
            //////////Fake drupal oauth user - grab and store in local storage.. local 
            /////local storage is not secure for demo purposed only. SPA/decoupled apps should use 
            ////// a token handler pattern approach - https://curity.io/resources/learn/the-token-handler-pattern/?utm_source=thenewstack&utm_medium=website&utm_content=inline-mention&utm_campaign=platform
            let drupaltoken = localStorage.getItem('drupaltoken');
            //console.log('drupaltoken');
            //console.log(drupaltoken);
            let user = JSON.parse(localStorage.getItem('user'));
            if (user && user.token) {
                console.log('fake usertoken');
                console.log(user.token);
            } else {
                return {};
            }
            //// for demo only using fakebackend.js and passing over a bearer token to the service layer as post and bearer
            //// using fetch here for quick api support/calls - https://blog.logrocket.com/axios-vs-fetch-best-http-requests/
            fetch('https://dev-gametest.pantheonsite.io/clients/transport-templates-modeling.php?type=read', {
                mode:  'cors', 
                method: 'post',
                body: 'token=' + drupaltoken,
                headers: {
                    'Accept': 'application/vnd.api+json',
                    'Content-type': 'application/vnd.api+json',
                    'Authorization': 'Bearer ' + drupaltoken,
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

        /////UPDATE CALLS//////
        updategridData: function(e) {
            //////////Fake drupal oauth user - grab and store in local storage.. local 
            /////local storage is not secure for demo purposed only. SPA/decoupled apps should use 
            ////// a token handler pattern approach - https://curity.io/resources/learn/the-token-handler-pattern/?utm_source=thenewstack&utm_medium=website&utm_content=inline-mention&utm_campaign=platform
            let drupaltoken = localStorage.getItem('drupaltoken');
            let user = JSON.parse(localStorage.getItem('user'));
            //// for demo only using fakebackend.js and passing over a bearer token to the service layer as post and bearer
            //// using fetch here for quick api support/calls - https://blog.logrocket.com/axios-vs-fetch-best-http-requests/
            fetch('https://dev-gametest.pantheonsite.io/clients/transport-templates-modeling.php?type=update', {
                mode:  'cors', 
                method: 'post',
                body: 'token=' + drupaltoken +',models=' + e.data.models,
                headers: {
                    'Accept': 'application/vnd.api+json',
                    'Content-type': 'application/vnd.api+json',
                    'Authorization': 'Bearer ' + drupaltoken,
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

        /////CREATE CALLS//////
        creategridData: function(e) {
            //////////Fake drupal oauth user - grab and store in local storage.. local 
            /////local storage is not secure for demo purposed only. SPA/decoupled apps should use 
            ////// a token handler pattern approach - https://curity.io/resources/learn/the-token-handler-pattern/?utm_source=thenewstack&utm_medium=website&utm_content=inline-mention&utm_campaign=platform
            let drupaltoken = localStorage.getItem('drupaltoken');
            let user = JSON.parse(localStorage.getItem('user'));
            //// for demo only using fakebackend.js and passing over a bearer token to the service layer as post and bearer
            //// using fetch here for quick api support/calls - https://blog.logrocket.com/axios-vs-fetch-best-http-requests/
            fetch('https://dev-gametest.pantheonsite.io/clients/transport-templates-modeling.php?type=create', {
                mode:  'cors', 
                method: 'post',
                body: 'token=' + drupaltoken +',models=' + e.data.models,
                headers: {
                    'Accept': 'application/vnd.api+json',
                    'Content-type': 'application/vnd.api+json',
                    'Authorization': 'Bearer ' + drupaltoken,
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

        /////DELETE CALLS//////
        destroygridData: function(e) {
            //////////Fake drupal oauth user - grab and store in local storage.. local 
            /////local storage is not secure for demo purposed only. SPA/decoupled apps should use 
            ////// a token handler pattern approach - https://curity.io/resources/learn/the-token-handler-pattern/?utm_source=thenewstack&utm_medium=website&utm_content=inline-mention&utm_campaign=platform
            let drupaltoken = localStorage.getItem('drupaltoken');
            let user = JSON.parse(localStorage.getItem('user'));
            //// for demo only using fakebackend.js and passing over a bearer token to the service layer as post and bearer
            //// using fetch here for quick api support/calls - https://blog.logrocket.com/axios-vs-fetch-best-http-requests/
            fetch('https://dev-gametest.pantheonsite.io/clients/transport-templates-modeling.php?type=delete', {
                mode:  'cors', 
                method: 'post',
                body: 'token=' + drupaltoken +',models=' + e.data.models,
                headers: {
                    'Accept': 'application/vnd.api+json',
                    'Content-type': 'application/vnd.api+json',
                    'Authorization': 'Bearer ' + drupaltoken,
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
        },

        onDataBound: function(e) {
               
        },

        showLoader: function() {
              
        },

        hideLoader: function() {
              
        },

        Refreshtree: function(e) {
               
        }
    }
}
</script>

<style lang="css">
@import 'https://kendo.cdn.telerik.com/themes/7.2.0/default/default-ocean-blue.css';
@import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
</style>


