(function(){"use strict";var e={7011:function(e,t,n){var r=n(9242),a=n(3396);const o={class:"container"};function s(e,t,n,s,d,i){const l=(0,a.up)("Header"),u=(0,a.up)("AddTask"),c=(0,a.up)("Tasks");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(l,{onToggleAddTask:i.toggleAddTask,title:"Task Tracker",showAddTask:d.showAddTask},null,8,["onToggleAddTask","showAddTask"]),(0,a.wy)((0,a._)("div",null,[(0,a.Wm)(u,{onAddTask:i.addTask},null,8,["onAddTask"])],512),[[r.F8,d.showAddTask]]),(0,a.Wm)(c,{onToogleReminder:i.toggleReminder,onDeleteTask:i.deleteTask,tasks:d.tasks},null,8,["onToogleReminder","onDeleteTask","tasks"])])}var d=n(7139);function i(e,t,n,r,o,s){const i=(0,a.up)("Button");return(0,a.wg)(),(0,a.iD)("header",null,[(0,a._)("h1",null,[(0,a.Uk)((0,d.zw)(n.title)+" ",1),(0,a.Wm)(i,{onBtnClick:t[0]||(t[0]=t=>e.$emit("toggle-add-task")),text:n.showAddTask?"close":"Add Task",color:n.showAddTask?"red":"green"},null,8,["text","color"])])])}function l(e,t,n,r,o,s){return(0,a.wg)(),(0,a.iD)("button",{onClick:t[0]||(t[0]=e=>s.onClick()),style:(0,d.j5)({background:n.color}),class:"btn"},(0,d.zw)(n.text),5)}var u={name:"Button",props:{text:String,color:String},methods:{onClick(){this.$emit("btn-click")}}},c=n(89);const k=(0,c.Z)(u,[["render",l]]);var m=k,f={name:"Header",props:{title:String,showAddTask:Boolean},components:{Button:m}};const p=(0,c.Z)(f,[["render",i],["__scopeId","data-v-56920fd4"]]);var h=p;function T(e,t,n,r,o,s){const d=(0,a.up)("Task");return(0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.tasks,(t=>((0,a.wg)(),(0,a.iD)("div",{key:t.id},[(0,a.Wm)(d,{onToggleReminder:n=>e.$emit("toggle-reminder",t.id),onDeleteTask:n=>e.$emit("delete-task",t.id),task:t},null,8,["onToggleReminder","onDeleteTask","task"])])))),128)}function g(e,t,n,r,o,s){return(0,a.wg)(),(0,a.iD)("div",{onDblclick:t[1]||(t[1]=t=>e.$emit("toggle-reminder",n.task.id)),class:(0,d.C_)([n.task.reminder?"reminder":"","task"])},[(0,a._)("h3",null,[(0,a.Uk)((0,d.zw)(n.task.text)+" ",1),(0,a._)("i",{onClick:t[0]||(t[0]=t=>e.$emit("delete-task",n.task.id)),class:"fas fa-times"})]),(0,a._)("p",null,(0,d.zw)(n.task.day),1)],34)}var v={name:"Task",props:{task:Object}};const b=(0,c.Z)(v,[["render",g]]);var w=b,y={name:"Tasks",props:{tasks:Array},components:{Task:w},emits:["delte-task","toogle-reminder"]};const A=(0,c.Z)(y,[["render",T]]);var _=A;const x=e=>((0,a.dD)("data-v-bb4efd22"),e=e(),(0,a.Cn)(),e),D={class:"form-control"},O=x((()=>(0,a._)("label",null,"Task",-1))),C={class:"form-control"},S=x((()=>(0,a._)("label",null,"Day & Time",-1))),j={class:"form-control form-control-check"},R=x((()=>(0,a._)("label",null,"Set Reminder",-1))),$=x((()=>(0,a._)("input",{type:"submit",value:"Save Task",class:"btn btn-block"},null,-1)));function Z(e,t,n,o,s,d){return(0,a.wg)(),(0,a.iD)("form",{onSubmit:t[3]||(t[3]=(...e)=>d.onSubmit&&d.onSubmit(...e)),class:"add-form"},[(0,a._)("div",D,[O,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>s.text=e),name:"text",placeholder:"Add Task"},null,512),[[r.nr,s.text]])]),(0,a._)("div",C,[S,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>s.day=e),name:"day",placeholder:"Add Day & Time"},null,512),[[r.nr,s.day]])]),(0,a._)("div",j,[R,(0,a.wy)((0,a._)("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=e=>s.reminder=e),name:"reminder"},null,512),[[r.e8,s.reminder]])]),$],32)}var B={name:"AddTask",data(){return{text:"",day:"",reminder:!1}},methods:{onSubmit(e){if(e.preventDefault(),!this.text)return void alert("Please add a task");const t={text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-task",t),this.text="",this.day="",this.reminder=!1}}};const M=(0,c.Z)(B,[["render",Z],["__scopeId","data-v-bb4efd22"]]);var U=M,W={name:"App",components:{Header:h,Tasks:_,AddTask:U},data(){return{tasks:[],showAddTask:!1}},methods:{toggleAddTask(){this.showAddTask=!this.showAddTask},addTask(e){this.tasks=[...this.tasks,e]},deleteTask(e){confirm("Are you sure?")&&(this.tasks=this.tasks.filter((t=>t.id!==e)))},toggleReminder(e){this.tasks=this.tasks.map((t=>t.id==e?{...t,reminder:!t.reminder}:t))}},created(){this.tasks=[{id:1,text:"doctor Appointement",day:"March 1st at 2:30pm",reminder:!0},{id:2,text:"Meeting at school",day:"March 3rd at 1:30pm",reminder:!0},{id:3,text:"food shopping",day:"March 3rd at 11:00am",reminder:!1}]}};const z=(0,c.Z)(W,[["render",s]]);var H=z;(0,r.ri)(H).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var s=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],o=e[u][2];for(var d=!0,i=0;i<r.length;i++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(d=!1,o<s&&(s=o));if(d){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,s=r[0],d=r[1],i=r[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(a in d)n.o(d,a)&&(n.m[a]=d[a]);if(i)var u=i(n)}for(t&&t(r);l<s.length;l++)o=s[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self["webpackChunkvue_crash_2021"]=self["webpackChunkvue_crash_2021"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7011)}));r=n.O(r)})();
//# sourceMappingURL=app.39291fda.js.map