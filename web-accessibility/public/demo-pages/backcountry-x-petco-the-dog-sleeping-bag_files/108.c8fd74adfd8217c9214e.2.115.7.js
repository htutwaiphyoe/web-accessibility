(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[108],{"1A7Y":function(e,t,r){"use strict";r.r(t);var n=r("mstN"),i=r("ERkP"),o=r.n(i),c=r("H+dX"),a=r("RC+L"),s=r("HDn5"),u=r("yoza"),l=r("rDvL"),p=o.a.createElement,m=function(e){var t=e.podId,r=e.params,i=e.textAlign,o=e.titleStyle,m=Object(s.a)(t,r),d=m.recommendations,b=m.displayName,O=m.isLoading,f=d.length,v=Object(a.e)({event:"recommendationView",numResults:f,custom:{podId:t}}),P=Object(n.a)(v,1)[0];return O?p(l.a,null):f>0?p(c.b,{ref:P,bgColor:"bg.primary"},p(a.c,{value:{list:"Recommendations | ".concat(t),custom:{type:"recommendation",podId:t}}},p(u.a,{products:d,heading:p(c.k,{textStyle:o,textAlign:i,color:"txt.primary",pt:5,mx:{base:2,sm:0}},b)}))):null};m.defaultProps={textAlign:"center",titleStyle:{base:"title2Heavy",md:"title4Brand"},params:{num_results:15}},t.default=m},HDn5:function(e,t,r){"use strict";var n=r("LHL8"),i=r("pu3o"),o=r.n(i),c=r("NW/2"),a=r.n(c),s=r("40m4"),u=r("ERkP"),l=r("/HOE");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e,t){var r=Object(u.useContext)(l.b).actions,n=r.on,i=r.off,o=Object(u.useState)({}),c=o[0],a=o[1],s=function(r){var n=r.detail;a({podId:(null===n||void 0===n?void 0:n.podId)||e,params:m({},(null===n||void 0===n?void 0:n.params)||t)})};return Object(u.useEffect)((function(){return a({podId:e,params:m({},t)}),n("update.recommendations.".concat(e),s),function(){i("update.recommendations.".concat(e))}}),[n]),c},b=r("mstN"),O=r("wHK/"),f=r("0iyY"),v=r.n(f),P=r("wxYD"),y=r.n(P);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(e){return y()(e)?e.map((function(e){var t=e.data,r=t.id,n=t.brandName,i=t.reviewRating,o=t.reviewCount,c=t.listPrice,a=t.salePrice,s=t.discountPercent,u=Object(O.a)(t,["id","brandName","reviewRating","reviewCount","listPrice","salePrice","discountPercent"]),l=e.value,p=e.variations,m=Object(O.a)(e,["data","value","variations"]),d=[],f=[],P={variationsOnSale:0,minListPrice:c,maxListPrice:c,minSalePrice:a,maxSalePrice:a,minDiscountPercent:s,maxDiscountPercent:s};return p.forEach((function(e){var t=e.data,r=t.listPrice,n=t.salePrice,i=t.discountPercent,o=t.image_url,c=t.onSale,a=t.colorFamily,s=t.color,u=t.variation_id;r<P.minListPrice&&(P.minListPrice=r),r>P.maxListPrice&&(P.maxListPrice=r),n<P.minSalePrice&&(P.minSalePrice=n),n>P.maxSalePrice&&(P.maxSalePrice=n),i<P.minDiscountPercent&&(P.minDiscountPercent=i),i>P.maxDiscountPercent&&(P.maxDiscountPercent=i),c&&(P.variationsOnSale+=1),d.push({id:u,image:{url:o},color:{name:s}});var l=u.split("-"),p=Object(b.a)(l,2)[1];f[p]={image:o.replace("https://content.backcountry.com","").replace("medium",900),thumbImage:o.replace("https://content.backcountry.com","").replace("/medium/","/tiny/"),family:a,id:p,name:s}})),g(g(g({},u),{},{id:r,title:l,brand:{name:n},customerReviews:{average:i,count:o},skus:d,colors:v()(f)},P),m)})):[]};function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S={num_results:15,section:"Products"};t.a=function(e,t){var r,n,i=d(e,t),c=i.podId,u=i.params,l=Object(s.a)(c?"/recommendations/v1/pods/".concat(c):null,h(h({},S),u),{paramsSerializer:function(e){return o.a.stringify(e,{arrayFormat:"repeat"})}}),p=l.data,m=l.error,b=null===p||void 0===p||null===(r=p.response)||void 0===r?void 0:r.results.filter((function(e){return a()(e,"variations")})),O=w(b),f=null===p||void 0===p||null===(n=p.response)||void 0===n?void 0:n.pod.display_name;return{recommendations:null!==O&&void 0!==O?O:[],displayName:null!==f&&void 0!==f?f:"",isLoading:!m&&!p,error:m}}}}]);