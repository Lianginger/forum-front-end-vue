(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e3352e4"],{4831:function(t,e,a){},5652:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("AdminNav"),a("form",{staticClass:"my-4"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-auto"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCategoryName,expression:"newCategoryName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"新增餐廳類別..."},domProps:{value:t.newCategoryName},on:{input:function(e){e.target.composing||(t.newCategoryName=e.target.value)}}})]),a("div",{staticClass:"col-auto"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.createCategory(e)}}},[t._v("新增")])])])]),a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.categories,function(e){return a("tr",{key:e.id},[a("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),a("td",{staticClass:"position-relative"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isEditing,expression:"!category.isEditing"}],staticClass:"category-name"},[t._v(t._s(e.name))]),a("input",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"},{name:"model",rawName:"v-model",value:e.name,expression:"category.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"}],staticClass:"cancel",on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.handleCancel(e.id)}}},[t._v("✕")])]),a("td",{staticClass:"d-flex justify-content-between"},[a("button",{directives:[{name:"show",rawName:"v-show",value:!e.isEditing,expression:"!category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.toggleIsEditing(e.id)}}},[t._v("Edit")]),a("button",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.updateCategory({categoryId:e.id,name:e.name})}}},[t._v("Save")]),a("button",{staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteCategory(e.id)}}},[t._v("Delete")])])])}),0)])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col",width:"60"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Category Name")]),a("th",{attrs:{scope:"col",width:"210"}},[t._v("Action")])])])}],r=(a("8e6e"),a("ac6a"),a("456d"),a("7f7f"),a("bd86")),s=a("e04c"),o=a("c64e"),c=a.n(o);function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach(function(e){Object(r["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var d={categories:[{id:1,name:"中式料理",createdAt:"2019-06-22T09:00:43.000Z",updatedAt:"2019-06-22T09:00:43.000Z"},{id:2,name:"日本料理",createdAt:"2019-06-22T09:00:43.000Z",updatedAt:"2019-06-22T09:00:43.000Z"},{id:3,name:"義大利料理",createdAt:"2019-06-22T09:00:43.000Z",updatedAt:"2019-06-22T09:00:43.000Z"},{id:4,name:"墨西哥料理",createdAt:"2019-06-22T09:00:43.000Z",updatedAt:"2019-06-22T09:00:43.000Z"}]},g={components:{AdminNav:s["a"]},data:function(){return{newCategoryName:"",categories:[]}},created:function(){this.fetchCategories()},methods:{fetchCategories:function(){this.categories=d.categories.map(function(t){return l({},t,{isEditing:!1})})},createCategory:function(){this.categories.push({id:c()(),name:this.newCategoryName}),this.newCategoryName=""},deleteCategory:function(t){this.categories=this.categories.filter(function(e){return e.id!==t})},toggleIsEditing:function(t){this.categories=this.categories.map(function(e){return e.id!==t?e:l({},e,{isEditing:!e.isEditing,nameCached:e.name})})},updateCategory:function(t){var e=t.categoryId;t.name;this.toggleIsEditing(e)},handleCancel:function(t){this.categories=this.categories.map(function(e){return e.id!==t?e:l({},e,{name:e.nameCached})}),this.toggleIsEditing(t)}}},p=g,m=(a("99db"),a("2877")),v=Object(m["a"])(p,n,i,!1,null,"70a0b159",null);e["default"]=v.exports},"99db":function(t,e,a){"use strict";var n=a("4831"),i=a.n(n);i.a},e04c:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("餐廳後台")]),a("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v("｜\n  "),a("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v("｜\n  "),a("a",{attrs:{href:"#"}},[t._v("Users")])],1)},i=[],r=a("2877"),s={},o=Object(r["a"])(s,n,i,!1,null,null,null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-6e3352e4.a10fb140.js.map