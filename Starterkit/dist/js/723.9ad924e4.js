"use strict";(self["webpackChunkvue_veltrix"]=self["webpackChunkvue_veltrix"]||[]).push([[723],{8723:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var l=a(641),s=a(33),i=a(3751),r=a(2217);const o={class:"account-pages my-5 pt-5"},d={class:"bg-primary"},n={class:"text-primary text-center p-4"},u=(0,l.Lk)("h5",{class:"text-white font-size-20"},"Welcome Back !",-1),m=(0,l.Lk)("p",{class:"text-white-50"},"Sign in to continue to Veltrix.",-1),c=(0,l.Lk)("img",{src:r,height:"24",alt:"logo"},null,-1),p={class:"p-3"},b={key:0,class:"invalid-feedback"},k={key:0},f={key:1},v={key:0,class:"invalid-feedback"},g={class:"form-group row"},h=(0,l.Lk)("div",{class:"form-check"},[(0,l.Lk)("input",{type:"checkbox",class:"form-check-input",id:"customControlInline"}),(0,l.Lk)("label",{class:"form-check-label",for:"customControlInline"},"Remember me")],-1),w=(0,l.Lk)("i",{class:"mdi mdi-lock"},null,-1),y={class:"mt-5 text-center"},F={class:"mb-0"},_=(0,l.Lk)("i",{class:"mdi mdi-heart text-danger"},null,-1);function L(e,t,a,r,L,C){const $=(0,l.g2)("router-link"),x=(0,l.g2)("BAlert"),E=(0,l.g2)("BFormInput"),B=(0,l.g2)("BFormGroup"),V=(0,l.g2)("BCol"),W=(0,l.g2)("BButton"),I=(0,l.g2)("BRow"),q=(0,l.g2)("BForm"),A=(0,l.g2)("BCardBody"),X=(0,l.g2)("BCard"),Q=(0,l.g2)("BContainer");return(0,l.uX)(),(0,l.CE)("div",o,[(0,l.bF)(Q,null,{default:(0,l.k6)((()=>[(0,l.bF)(I,{class:"justify-content-center"},{default:(0,l.k6)((()=>[(0,l.bF)(V,{md:"8",lg:"6",xl:"4"},{default:(0,l.k6)((()=>[(0,l.bF)(X,{"no-body":"",class:"overflow-hidden"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",d,[(0,l.Lk)("div",n,[u,m,(0,l.bF)($,{to:"/",class:"logo logo-admin"},{default:(0,l.k6)((()=>[c])),_:1})])]),(0,l.bF)(A,{class:"p-4"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",p,[(0,l.bF)(x,{modelValue:L.isAuthError,"onUpdate:modelValue":t[0]||(t[0]=e=>L.isAuthError=e),variant:"danger",class:"mt-3",dismissible:""},{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(L.authError),1)])),_:1},8,["modelValue"]),C.notification.message?((0,l.uX)(),(0,l.CE)("div",{key:0,class:(0,s.C4)("alert "+C.notification.type)},(0,s.v_)(C.notification.message),3)):(0,l.Q3)("",!0),(0,l.bF)(q,{onSubmit:(0,i.D$)(C.tryToLogIn,["prevent"]),class:"form-horizontal mt-4"},{default:(0,l.k6)((()=>[(0,l.bF)(B,{id:"input-group-1",label:"Email","label-for":"input-1",class:"mb-3","label-class":"form-label"},{default:(0,l.k6)((()=>[(0,l.bF)(E,{id:"input-1",class:(0,s.C4)({"is-invalid":L.submitted&&r.v$.email.$error}),modelValue:L.email,"onUpdate:modelValue":t[1]||(t[1]=e=>L.email=e),type:"email",placeholder:"Enter email"},null,8,["class","modelValue"]),L.submitted&&r.v$.email.$error?((0,l.uX)(),(0,l.CE)("div",b,[r.v$.email.required?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("span",k,"Email is required.")),r.v$.email.email?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("span",f,"Please enter valid email."))])):(0,l.Q3)("",!0)])),_:1}),(0,l.bF)(B,{id:"input-group-2",label:"Password","label-for":"input-2",class:"mb-3","label-class":"form-label"},{default:(0,l.k6)((()=>[(0,l.bF)(E,{id:"input-2",modelValue:L.password,"onUpdate:modelValue":t[2]||(t[2]=e=>L.password=e),type:"password",placeholder:"Enter password",class:(0,s.C4)({"is-invalid":L.submitted&&r.v$.password.$error})},null,8,["modelValue","class"]),L.submitted&&!r.v$.password.required?((0,l.uX)(),(0,l.CE)("div",v," Password is required. ")):(0,l.Q3)("",!0)])),_:1}),(0,l.Lk)("div",g,[(0,l.bF)(V,{sm:"6"},{default:(0,l.k6)((()=>[h])),_:1}),(0,l.bF)(V,{sm:"6",class:"text-end"},{default:(0,l.k6)((()=>[(0,l.bF)(W,{type:"submit",variant:"primary",class:"w-md"},{default:(0,l.k6)((()=>[(0,l.eW)("Log In")])),_:1})])),_:1})]),(0,l.bF)(I,{class:"mt-2 mb-0"},{default:(0,l.k6)((()=>[(0,l.bF)(V,{cols:"12",class:"mt-4"},{default:(0,l.k6)((()=>[(0,l.bF)($,{to:"/forgot-password"},{default:(0,l.k6)((()=>[w,(0,l.eW)(" Forgot your password? ")])),_:1})])),_:1})])),_:1})])),_:1},8,["onSubmit"])])])),_:1})])),_:1}),(0,l.Lk)("div",y,[(0,l.Lk)("p",null,[(0,l.eW)(" Don't have an account ? "),(0,l.bF)($,{to:"/register",class:"fw-medium text-primary"},{default:(0,l.k6)((()=>[(0,l.eW)("Signup now")])),_:1})]),(0,l.Lk)("p",F,[(0,l.eW)(" © "+(0,s.v_)((new Date).getFullYear())+" Veltrix. Crafted with ",1),_,(0,l.eW)(" by Themesbrand ")])])])),_:1})])),_:1})])),_:1})])}a(4114);var C=a(6278),$=a(4474),x=a(3855),E=a(9639),B={setup(){return{v$:(0,E.Ay)()}},components:{},validations:{email:{required:x.mw,email:x.Rp},password:{required:x.mw}},data(){return{email:"admin@themesbrand.com",password:"123456",submitted:!1,authError:null,tryingToLogIn:!1,isAuthError:!1}},computed:{...(0,C.aH)("authfack",["status"]),notification(){return this.$store?this.$store.state.notification:null}},methods:{...$.Zx,...$.ir,...$.Md,tryToLogIn(){if(this.submitted=!0,this.v$.$touch(),!this.v$.$invalid){const{email:e,password:t}=this;e&&t&&this.login({email:e,password:t})}}}},V=a(6262);const W=(0,V.A)(B,[["render",L]]);var I=W}}]);
//# sourceMappingURL=723.9ad924e4.js.map