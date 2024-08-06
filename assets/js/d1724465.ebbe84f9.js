"use strict";(self.webpackChunksero_docs_v_3=self.webpackChunksero_docs_v_3||[]).push([[652],{79179:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:3},o="Configuration",s={unversionedId:"tutorial-installation/configuration",id:"tutorial-installation/configuration",title:"Configuration",description:"There are several options which must be configured for your needs",source:"@site/docs/tutorial-installation/configuration.md",sourceDirName:"tutorial-installation",slug:"/tutorial-installation/configuration",permalink:"/sero-docs/docs/tutorial-installation/configuration",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Using Docker Compose",permalink:"/sero-docs/docs/tutorial-installation/using-docker-compose"},next:{title:"Tutorial - Users",permalink:"/sero-docs/docs/category/tutorial---users"}},l={},p=[{value:"Dive",id:"dive",level:2},{value:"Here about nginx envs",id:"here-about-nginx-envs",level:3}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"There are several options which must be configured for your needs"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Parameters for ",(0,r.kt)("inlineCode",{parentName:"p"},"server")),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"DATABASE_URL"))),(0,r.kt)("td",{parentName:"tr",align:null},"This specifies database url. Note: server uses sea-orm and uses some features which are available wit Postgres only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"PORT"))),(0,r.kt)("td",{parentName:"tr",align:null},"This sets the port for server to listen on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"MAX_USERS"))),(0,r.kt)("td",{parentName:"tr",align:null},"This is the amount of users which can be registered on the server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"MAX_SITES_PER_USER"))),(0,r.kt)("td",{parentName:"tr",align:null},"This sets the amount of subdomains which can be used by one user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"MAX_BODY_LIMIT_SIZE"))),(0,r.kt)("td",{parentName:"tr",align:null},"This sets the amount of bytes the requests can be")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"JWT_SECRET"))),(0,r.kt)("td",{parentName:"tr",align:null},"This will be used for jwt auth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"JWT_TTL_SECONDS"))),(0,r.kt)("td",{parentName:"tr",align:null},"This sets how long jwt token will live")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"UPLOAD_FOLDER"))),(0,r.kt)("td",{parentName:"tr",align:null},"This sets the folder where all uploads will be placed"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Parameters for ",(0,r.kt)("inlineCode",{parentName:"p"},"Nginx")),(0,r.kt)("p",{parentName:"li"},"All this parameters are used by nginx for templates located in ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx-templates")," folder"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"DOLLAR"))),(0,r.kt)("td",{parentName:"tr",align:null},"This variable is needed for nginx-templates and ",(0,r.kt)("inlineCode",{parentName:"td"},"should not be overwritten"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SERVER_PORT"))),(0,r.kt)("td",{parentName:"tr",align:null},"This sets the port which your server listens")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SERVER"))),(0,r.kt)("td",{parentName:"tr",align:null},"This sets the server name or ip or domain where your server listens")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"DOMAIN"))),(0,r.kt)("td",{parentName:"tr",align:null},"This sets the domain you own")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"ZONE"))),(0,r.kt)("td",{parentName:"tr",align:null},"THis sets the zone for yor domain")))))),(0,r.kt)("p",null,"That was a brief description. Now lets dive a bit deeper"),(0,r.kt)("h2",{id:"dive"},"Dive"),(0,r.kt)("p",null,"All this configuration parameters are used in ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," and are passed as environment variables.\nThe server also uses environment variables so there is currently no other way to set them."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"DATABASE_URL"))),(0,r.kt)("p",{parentName:"li"},"The database url set in ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," points to a docker container with postgres. Postgres does not use port mapping so you are protected.\nWhen running sero as a docker container or manually you need to have a running postgres somewhere and set this parameter. All migration are ran automatically so you should not be worried about it")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PORT"))),(0,r.kt)("p",{parentName:"li"},"Server container also does not use port mapping when using ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),". It is important to set it same for ",(0,r.kt)("inlineCode",{parentName:"p"},"server")," and nginx (",(0,r.kt)("inlineCode",{parentName:"p"},"proxy"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"MAX_USERS"))),(0,r.kt)("p",{parentName:"li"},"This sets the amount of users which can be registered. You can leave this variable empty and this will disable RegistrationGuard. In this case there can be unlimited umount of users registered."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Maximum value - ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"u64::MAX"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"MAX_SITES_PER_USER"))),(0,r.kt)("p",{parentName:"li"},"This sets the amount of owned subdomains which one user can have at a time. This can also be not set resulting in unlimited (limited only be the available memory) amount of sites.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"MAX_BODY_LIMIT_SIZE")),"\nThis sets the maximum body limit in bytes. This does not mean that uploaded archive cam be this size as the request contains additional data."),(0,r.kt)("admonition",{parentName:"li",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Leaving this value empty will disable ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/axum/latest/axum/extract/struct.DefaultBodyLimit.html"},(0,r.kt)("inlineCode",{parentName:"a"},"DefaultBodyLimit")),". According to docs this means:"),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"For security reasons, Bytes will, by default, not accept bodies larger than 2MB. This also applies to extractors that uses Bytes internally such as String, Json, and Form.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"JWT_SECRET"))),(0,r.kt)("p",{parentName:"li"},"This will be used for signing jwt. Changing this parameter and restarting server will result in invalidation of all tokens."),(0,r.kt)("admonition",{parentName:"li",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"For security reasons:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Set this variable using docker secretes. ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/use-secrets/"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"How to use docker secrets")))))),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Generate it. One of good solutions:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"openssl rand -base64 60\n")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"JWT_TTL_SECONDS"))),(0,r.kt)("p",{parentName:"li"},"This sets the amount of seconds the token will be valid. After expiration users will log out"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Maximum value - ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"i64::MAX")))),(0,r.kt)("admonition",{parentName:"li",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"For security reasons do not set big amount as the token can be stolen. Usually server actions takes several seconds."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"UPLOAD_FOLDER"))),(0,r.kt)("p",{parentName:"li"},"This sets the folder where sites will be stored."),(0,r.kt)("admonition",{parentName:"li",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"When using in ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," be careful with volumes if you do not want to loose data on restart."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},"volumes:\n  - server-files:/app/sites-uploads\n"))))),(0,r.kt)("h3",{id:"here-about-nginx-envs"},"Here about nginx envs"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"DOLLAR")),(0,r.kt)("br",{parentName:"p"}),"\n","This one is a bit confusing but you do not need to be worried. As nginx-templates are used and regex expr is used inside for capturing subdomain we can have an issue. The envs are inserted with:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-conf",metastring:'title="nginx-templates/default.conf.template"',title:'"nginx-templates/default.conf.template"'},"    server_name ~^(?<subdomain>\\w*)\\.${DOMAIN}.${ZONE}${DOLLAR};\n")),(0,r.kt)("p",{parentName:"li"},"The DOLLAR is used to match the end of the string. If we leave dollar sign alone this will result in error due to empty env variable.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"SERVER_PORT"))),(0,r.kt)("p",{parentName:"li"},"This will be used in server block. You do not need to change this if you use ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),". This is used in nginx template and should match ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PORT")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"SERVER"))),(0,r.kt)("p",{parentName:"li"},"This will be used in server block. You do not need to change this if you use ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),". This is used in nginx template.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"DOMAIN")),"\nImagine that you bought a domain: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"mydomain.com")),". In this case you should set this parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"mydomain"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ZONE")),"\nImagine that you bought a domain: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"mydomain.com")),". In this case you should set this parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"com")))))}d.isMDXComponent=!0}}]);