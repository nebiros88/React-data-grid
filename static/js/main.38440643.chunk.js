(this["webpackJsonptest-issue"]=this["webpackJsonptest-issue"]||[]).push([[0],{10:function(e,t,a){e.exports={filtersWrapper:"Filters_filtersWrapper__3N5gm",searchBox:"Filters_searchBox__1wKb1",searchBox_description:"Filters_searchBox_description__kwW3J",searchBox_input:"Filters_searchBox_input__3VAXh",selectBox:"Filters_selectBox__1I8mP",selectBox_description:"Filters_selectBox_description__2dA8l",selectBox_select:"Filters_selectBox_select__2KYBF"}},12:function(e,t,a){e.exports={pagesList:"PagesList_pagesList__1ngNz",sideButton:"PagesList_sideButton__3cTt0"}},27:function(e,t,a){e.exports={infoWrapper:"Info_infoWrapper__VfN3U"}},33:function(e,t,a){},34:function(e,t,a){},5:function(e,t,a){e.exports={tableWrapper:"Table_tableWrapper__3D9Dy",wrapper:"Table_wrapper__2_LZD",table:"Table_table__2tthk",tableRow:"Table_tableRow__Kwm2r",tableHead:"Table_tableHead__2kH89",tableHead_description:"Table_tableHead_description__grTWw",tableHead_img:"Table_tableHead_img__2UpJQ",pagesList:"Table_pagesList__1pnkI"}},59:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(11),c=a.n(r),i=(a(33),a(2)),l=(a(34),a(6)),o=a(7),d=a(9),u=a(8),b=a(10),h=a.n(b),p=a(0),j=function(e){var t=[];return e.forEach((function(e){t.push(Object(p.jsx)("option",{children:e}))})),t},g=function(e){return Object(p.jsxs)("div",{className:h.a.filtersWrapper,children:[Object(p.jsxs)("div",{className:h.a.searchBox,children:[Object(p.jsx)("div",{className:h.a.searchBox_description,children:" Search by name:"}),Object(p.jsx)("input",{className:h.a.searchBox_input,onChange:e.onChangeValue,value:e.searchByNameValue})]}),Object(p.jsxs)("div",{className:h.a.selectBox,children:[Object(p.jsx)("div",{className:h.a.selectBox_description,children:"Filter by state"}),Object(p.jsxs)("select",{className:h.a.selectBox_select,onChange:e.onChangeSelectedState,children:[Object(p.jsx)("option",{}),j(e.states)]})]})]})},f=a(4),O=a(26).create({baseURL:"https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json"}),m=function(){return O.get()},v="SET_DATA",C="SET_TOTAL_USERS",x="CHANGE_SELECTED_PAGE",P="SELECT_USER",S="SET_SEARCH_BY_NAME_VALUE",W="SET_STATES",y="SET_SELECTED_STATE",N="SET_SORT_CONFIG",B={data:[],usersPerPage:20,totalUsers:0,selectedPage:1,selectedUser:{adress:{}},searchByNameValue:"",states:[],selectedState:"",sortConfig:{method:"",colName:""}},V=function(e){return{type:x,page:e}},A=function(e){return{type:W,states:e}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(i.a)(Object(i.a)({},e),{},{data:t.data.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{state:e.adress.state})}))});case C:return Object(i.a)(Object(i.a)({},e),{},{totalUsers:t.totalUsers});case x:return Object(i.a)(Object(i.a)({},e),{},{selectedPage:t.page});case P:return Object(i.a)(Object(i.a)({},e),{},{selectedUser:t.user});case S:return Object(i.a)(Object(i.a)({},e),{},{searchByNameValue:t.value});case W:return Object(i.a)(Object(i.a)({},e),{},{states:t.states});case y:return Object(i.a)(Object(i.a)({},e),{},{selectedState:t.state});case N:return Object(i.a)(Object(i.a)({},e),{},{sortConfig:t.config});default:return e}},E=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"onChangeValue",value:function(e){this.props.setSearchByNameValue(e.target.value)}},{key:"onChangeSelectedState",value:function(e){this.props.setSelectedState(e.target.value)}},{key:"render",value:function(){return Object(p.jsx)(g,{searchByNameValue:this.props.searchByNameValue,onChangeValue:this.onChangeValue.bind(this),states:this.props.states,onChangeSelectedState:this.onChangeSelectedState.bind(this)})}}]),a}(n.a.Component),T=Object(f.b)((function(e){return{searchByNameValue:e.tableData.searchByNameValue,states:e.tableData.states,selectedState:e.tableData.selectedState}}),{setSearchByNameValue:function(e){return{type:S,value:e}},setSelectedState:function(e){return{type:y,state:e}}})(E),q=a(5),L=a.n(q),F=a(12),k=a.n(F),D=function(e){return Object(p.jsxs)("div",{className:k.a.pagesList,children:[Object(p.jsx)("button",{className:k.a.sideButton,onClick:function(){return function(){var t=e.selectedPage;e.pagesList.length&&t>1&&(t--,e.onPageChanged(t))}()},children:"Previous "}),0!==e.pagesList.length&&e.pagesList.map((function(t){return Object(p.jsx)("button",{onClick:function(){e.onPageChanged(t)},children:t})})),Object(p.jsx)("button",{className:k.a.sideButton,onClick:function(){return function(){var t=e.selectedPage;e.pagesList.length&&t<e.pagesList.length&&(t++,e.onPageChanged(t))}()},children:"Next "})]})},w=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).onPageChanged=function(t){e.props.changePage(t)},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsx)(D,Object(i.a)(Object(i.a)({},this.props),{},{onPageChanged:this.onPageChanged.bind(this),selectedPage:this.props.selectedPage}))}}]),a}(n.a.Component),z=Object(f.b)((function(e){return{selectedPage:e.tableData.selectedPage}}),{changeSelectedPage:V,changePage:function(e){return function(t){t(V(e))}}})(w),_=a.p+"static/media/down-arrow.febec9b3.png",K=function(e){var t=Math.ceil(e.data.length/e.usersPerPage),a=function(e){if(e.method)return Object(p.jsx)("img",{src:"desc"===e.method?_:"data:image/png;base64,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",className:L.a.tableHead_img,alt:"arrow_img"})},s=function(t,s){return Object(p.jsx)("th",{children:Object(p.jsxs)("div",{className:L.a.tableHead,onClick:function(){return e.onColumnHeaderClick(t)},children:[Object(p.jsx)("div",{className:L.a.tableHead_description,children:s}),e.sortConfig.colName===t&&a(e.sortConfig)]})})};return Object(p.jsxs)("div",{className:L.a.wrapper,children:[Object(p.jsxs)("table",{className:L.a.table,children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[s("id","id"),s("firstName","First name"),s("lastName","Last name"),s("email","Email"),s("phone","Phone"),s("state","State")]})}),Object(p.jsx)("tbody",{children:function(a){var s=[];if(a.length>0)for(var n=Math.min(t,e.selectedPage),r=function(t){s.push(Object(p.jsxs)("tr",{className:L.a.tableRow,onClick:function(){return e.changeSelectedUser(a[t])},children:[Object(p.jsx)("td",{children:a[t].id}),Object(p.jsx)("td",{children:a[t].firstName}),Object(p.jsx)("td",{children:a[t].lastName}),Object(p.jsx)("td",{children:a[t].email}),Object(p.jsx)("td",{children:a[t].phone}),Object(p.jsx)("td",{children:a[t].adress.state})]}))},c=e.usersPerPage*n-e.usersPerPage;c<Math.min(e.usersPerPage*n,a.length);c++)r(c);return s}(e.data)})]}),Object(p.jsx)(z,Object(i.a)(Object(i.a)({},e),{},{pagesList:function(){for(var e=[],a=1;a<=t;a++)e.push(a);return e}()}))]})},G=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).changeSelectedUser=function(t){e.props.selectUser(t)},e.onColumnHeaderClick=function(t){var a={colName:t,method:e.props.sortConfig.method&&"asc"===e.props.sortConfig.method?"desc":"asc"};e.props.setSortConfig(a)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.getData()}},{key:"render",value:function(){return Object(p.jsx)("div",{className:L.a.tableWrapper,children:Object(p.jsx)(K,{data:this.props.data,totalUsers:this.props.totalUsers,usersPerPage:this.props.usersPerPage,selectedPage:this.props.selectedPage,selectedUser:this.props.selectedUser,changeSelectedUser:this.changeSelectedUser,sortConfig:this.props.sortConfig,onColumnHeaderClick:this.onColumnHeaderClick.bind(this)})})}}]),a}(n.a.Component),H=function(e,t,a){return t&&(e=e.filter((function(e){return e.firstName.toLowerCase().includes(t.toLowerCase())}))),a&&(e=e.filter((function(e){return e.adress.state===a}))),e},Q=function(e,t){if(!t.colName)return e;return e=e.sort((function(e,a){return e[t.colName]>a[t.colName]?1:e[t.colName]<a[t.colName]?-1:0})),"desc"===t.method?e.reverse():e},R=Object(f.b)((function(e){return{data:Q(H(e.tableData.data,e.tableData.searchByNameValue,e.tableData.selectedState),e.tableData.sortConfig),totalUsers:e.tableData.totalUsers,usersPerPage:e.tableData.usersPerPage,selectedPage:e.tableData.selectedPage,selectedUser:e.tableData.selectedUser,selectedState:e.tableData.selectedState,sortConfig:e.tableData.sortConfig}}),{getData:function(){return function(e){m().then((function(t){var a,s;e((a=t.data.length,{type:C,totalUsers:a})),e((s=t.data,{type:v,data:s}));var n=new Set(t.data.map((function(e){return e.adress.state})));e(A(n))}))}},selectUser:function(e){return{type:P,user:e}},setStates:A,setSortConfig:function(e){return{type:N,config:e}}})(G),Y=a(27),I=a.n(Y),X=function(e){return Object(p.jsxs)("div",{className:I.a.infoWrapper,children:[Object(p.jsx)("div",{children:"Profile info:"}),Object(p.jsxs)("div",{children:["Selected profile: ",e.selectedUser.firstName," ",e.selectedUser.lastName]}),Object(p.jsxs)("div",{children:["Description: ",e.selectedUser.description]}),Object(p.jsxs)("div",{children:["Address: ",e.selectedUser.adress.streetAddress]}),Object(p.jsxs)("div",{children:["City: ",e.selectedUser.adress.city]}),Object(p.jsxs)("div",{children:["State: ",e.selectedUser.adress.state]}),Object(p.jsxs)("div",{children:["Index: ",e.selectedUser.adress.zip]})]})},Z=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsx)(X,{selectedUser:this.props.selectedUser})}}]),a}(n.a.Component),M=Object(f.b)((function(e){return{selectedUser:e.tableData.selectedUser}}))(Z);var J=function(e){return Object(p.jsxs)("div",{className:"App_wrapper",children:[Object(p.jsx)(T,Object(i.a)({className:"filtersContainer"},e)),Object(p.jsx)(R,Object(i.a)({className:"tableContainer"},e)),Object(p.jsx)(M,Object(i.a)({className:"infoContainer"},e))]})},$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,60)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))},ee=a(13),te=a(28),ae=Object(ee.b)({tableData:U}),se=Object(ee.c)(ae,Object(ee.a)(te.a));c.a.render(Object(p.jsx)(f.a,{store:se,children:Object(p.jsx)(J,{})}),document.getElementById("root")),$()}},[[59,1,2]]]);
//# sourceMappingURL=main.38440643.chunk.js.map