"use strict";(self.webpackChunksero_docs_v_3=self.webpackChunksero_docs_v_3||[]).push([[841],{636:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>T,contentTitle:()=>h,default:()=>b,frontMatter:()=>u,metadata:()=>k,toc:()=>y});var t=s(87462),l=(s(67294),s(3905)),i=s(58219),r=(s(62316),s(51039)),n=s.n(r),o=(s(82723),s(9487)),m=(s(41429),s(5397)),d=s(4667),p=s(9472),c=(s(1176),s(12005),s(85162));const u={id:"registration",title:"Register new user for sero server.",description:"This endpoint creates new user for sero server. The amount of users is checked",sidebar_label:"Register new user for sero server.",hide_title:!0,hide_table_of_contents:!0,api:"eJztV21v4zYM/isCP7vpy7Xr6k9Ld9nQob3bnHQvSIIdIzGxrrbkk+SmWZD/PlB2F1/SDsVWDBhw+ZA4FEWRDx9S9BoCLjykY+hLaWsTRIkGF1SSCTBNQJGXTldBWwMpjHLtBRlVWW2CkI4wkBeGlqL25MTcOuHJWf66J9cTo5wEltGsnUcdL7QXMid5R2piZisxzmihfXDIR3xfo1PT3X1YFHZJartfUSBXakNKzFbiw03/199vh4Ns+EGQue9BAraixuCVghS6J0ACjj7V5MOlVStI1yCtCRxsugasqkLLqHf40XPEa/AypxL5KawqghTs7CPJ0NrRjhSDV9iFZtsVer+0TjF0lWM3gibPuxuNrRkfnDYL2EeYYpwGy/igIqhYh5xMaH3rTcxVEGXtg0CVkyMRrAg5ibllpLRZCOl0IKcxnZgDcaONLutSFGQWIWdEz4TM0aEM5HwvquDDjsrpUVcHEijx4TquQnp6lECpzePfs00n8BdF+Kj9gghLorATXAs8U9Q/E+DxyatGeHyy2SQQdChoh09ZQybYsMKWEcHVFAW+ssY3DDg5OuKfz9G45bpZohe+lpK8n9dFsRIunkCOFPv1KgzVT3BSd9OlTaAFOUhgbl2JoRF9dbqXwH4drFiQ4RIjJbSKNdrxORIYGBB6wLJizJqzjk8u3lx8/eb8+PxZNBu8GM5NAqdPIXaJSrQlLKwTM1TciBSTBwvfE0MibhCoC/+vwHui8/ngahm4A3G4jascfNPuhDbRG69DHQ+ZmFGOQUg0Ykbi6t1okL3rX4vhIPt5kIlBlr3POILL/luRDX66HQxHE/ObreOGuTaKG5/QpkmHtoYPcITe8jIVaifDzdJ+llv5CwpT+8awWOqiEIwcaiPIOeu6fkC3GN42UP+VsYv9jF1z6xM5eoGFI1QrMSMyr0XyL3n6B3k6e6qyhrak1oqVsnZcytbE5tte6F/y9J/maZNASSG3PMRU1oc4YPB9BIdY6UO+Mw/d58ONJ1k7HVZDzkPj7yWhI3fwwy+jjs95CBWrRzVIYRaVIGkfvnu8AngX+8H5zbaD02Db2NvBZovCdhR4lG0S4HDj8W2YPCbuIXZT6yJoZUuGyQcMWnL2SeTWh8Z4BFFG+vGIBCnIwi7/IE4elaiLraS3tO7umwULe9KW7EWhJfH1st19czXihXtyvvHhqHfSO2cRA16i6ehmbcN6fuDdjagzXf5vZueWIIEewmFVoDYMRu0KjqZh3xiw0pAA8y/WTIeB0wQ4Way0Xs/Q060rNhsWf6rJrSAdTxO4R6dxxjwYTzcJ5ISKHKTjNdzRClL4tgHtYMSusHpRs0t7/WaTPO7oS0lV+FvdaaeYfnw/HDHX21eA0ire43DJ4eASUpjABOKLBFtoyp7layjQLGpcsH5jlz9/AmXPopk=",sidebar_class_name:"post api-method",info_path:"docs/OpenAPI/sero",custom_edit_url:null},h=void 0,k={unversionedId:"OpenAPI/registration",id:"OpenAPI/registration",title:"Register new user for sero server.",description:"This endpoint creates new user for sero server. The amount of users is checked",source:"@site/docs/OpenAPI/registration.api.mdx",sourceDirName:"OpenAPI",slug:"/OpenAPI/registration",permalink:"/sero-docs/docs/OpenAPI/registration",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"registration",title:"Register new user for sero server.",description:"This endpoint creates new user for sero server. The amount of users is checked",sidebar_label:"Register new user for sero server.",hide_title:!0,hide_table_of_contents:!0,api:"eJztV21v4zYM/isCP7vpy7Xr6k9Ld9nQob3bnHQvSIIdIzGxrrbkk+SmWZD/PlB2F1/SDsVWDBhw+ZA4FEWRDx9S9BoCLjykY+hLaWsTRIkGF1SSCTBNQJGXTldBWwMpjHLtBRlVWW2CkI4wkBeGlqL25MTcOuHJWf66J9cTo5wEltGsnUcdL7QXMid5R2piZisxzmihfXDIR3xfo1PT3X1YFHZJartfUSBXakNKzFbiw03/199vh4Ns+EGQue9BAraixuCVghS6J0ACjj7V5MOlVStI1yCtCRxsugasqkLLqHf40XPEa/AypxL5KawqghTs7CPJ0NrRjhSDV9iFZtsVer+0TjF0lWM3gibPuxuNrRkfnDYL2EeYYpwGy/igIqhYh5xMaH3rTcxVEGXtg0CVkyMRrAg5ibllpLRZCOl0IKcxnZgDcaONLutSFGQWIWdEz4TM0aEM5HwvquDDjsrpUVcHEijx4TquQnp6lECpzePfs00n8BdF+Kj9gghLorATXAs8U9Q/E+DxyatGeHyy2SQQdChoh09ZQybYsMKWEcHVFAW+ssY3DDg5OuKfz9G45bpZohe+lpK8n9dFsRIunkCOFPv1KgzVT3BSd9OlTaAFOUhgbl2JoRF9dbqXwH4drFiQ4RIjJbSKNdrxORIYGBB6wLJizJqzjk8u3lx8/eb8+PxZNBu8GM5NAqdPIXaJSrQlLKwTM1TciBSTBwvfE0MibhCoC/+vwHui8/ngahm4A3G4jascfNPuhDbRG69DHQ+ZmFGOQUg0Ykbi6t1okL3rX4vhIPt5kIlBlr3POILL/luRDX66HQxHE/ObreOGuTaKG5/QpkmHtoYPcITe8jIVaifDzdJ+llv5CwpT+8awWOqiEIwcaiPIOeu6fkC3GN42UP+VsYv9jF1z6xM5eoGFI1QrMSMyr0XyL3n6B3k6e6qyhrak1oqVsnZcytbE5tte6F/y9J/maZNASSG3PMRU1oc4YPB9BIdY6UO+Mw/d58ONJ1k7HVZDzkPj7yWhI3fwwy+jjs95CBWrRzVIYRaVIGkfvnu8AngX+8H5zbaD02Db2NvBZovCdhR4lG0S4HDj8W2YPCbuIXZT6yJoZUuGyQcMWnL2SeTWh8Z4BFFG+vGIBCnIwi7/IE4elaiLraS3tO7umwULe9KW7EWhJfH1st19czXihXtyvvHhqHfSO2cRA16i6ehmbcN6fuDdjagzXf5vZueWIIEewmFVoDYMRu0KjqZh3xiw0pAA8y/WTIeB0wQ4Way0Xs/Q060rNhsWf6rJrSAdTxO4R6dxxjwYTzcJ5ISKHKTjNdzRClL4tgHtYMSusHpRs0t7/WaTPO7oS0lV+FvdaaeYfnw/HDHX21eA0ire43DJ4eASUpjABOKLBFtoyp7layjQLGpcsH5jlz9/AmXPopk=",sidebar_class_name:"post api-method",info_path:"docs/OpenAPI/sero",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Login user and receive JWT token.",permalink:"/sero-docs/docs/OpenAPI/login"},next:{title:"Removes a specific site identified by the `x-subdomain` header.",permalink:"/sero-docs/docs/OpenAPI/teardown-site"}},T={},y=[{value:"Request",id:"request",level:2}],f={toc:y};function b(e){let{components:a,...s}=e;return(0,l.kt)("wrapper",(0,t.Z)({},f,s,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"openapi__heading"},"Register new user for sero server."),(0,l.kt)(n(),{method:"post",path:"/api/auth/registration",mdxType:"MethodEndpoint"}),(0,l.kt)("p",null,"This endpoint creates new user for sero server. The amount of users is checked\nby ","[RegistrationGuard]",". The amount of allowed users is determined by ",(0,l.kt)("inlineCode",{parentName:"p"},"MAX_USERS")," env."),(0,l.kt)("h2",{id:"request"},"Request"),(0,l.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,l.kt)("strong",{className:"openapi-schema__required"},"required")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!1,name:"login",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `>= 5 characters` and `<= 40 characters`",schema:{type:"string",description:"The username used for authentication.\nIt must adhere to the following criteria:\n- Minimum length of 5 characters.\n- Maximum length of 40 characters.",maxLength:40,minLength:5},mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"password",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `>= 12 characters` and `<= 40 characters`",schema:{type:"string",description:"The password used for authentication.\nIt must meet the following requirements:\n- Minimum length of 12 characters.\n- Maximum length of 40 characters.",maxLength:40,minLength:12},mdxType:"SchemaItem"}))))),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)(i.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,l.kt)(c.default,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"User was successfully registered.")),(0,l.kt)("div",null,(0,l.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!1,name:"id",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",description:"Auto generated id of a registered user"},mdxType:"SchemaItem"})))),(0,l.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(m.Z,{responseExample:'{\n  "id": 1293983717\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.default,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Bad request or bad credentials. See details.")),(0,l.kt)("div",null,(0,l.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!1,name:"reason",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"This field will contain error information"},mdxType:"SchemaItem"})))),(0,l.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(m.Z,{responseExample:'{\n  "reason": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.default,{label:"409",value:"409",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Login has already been registered.")),(0,l.kt)("div",null,(0,l.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!1,name:"reason",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"This field will contain error information"},mdxType:"SchemaItem"})))),(0,l.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(m.Z,{responseExample:'{\n  "reason": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Some error occurred on the server.")),(0,l.kt)("div",null,(0,l.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!1,name:"reason",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"This field will contain error information"},mdxType:"SchemaItem"})))),(0,l.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(m.Z,{responseExample:'{\n  "reason": "string"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);