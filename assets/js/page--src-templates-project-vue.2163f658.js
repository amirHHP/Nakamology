(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0WQ8":function(t,e,i){"use strict";i("MksA")},"1hm3":function(t,e,i){},"1tub":function(t,e,i){"use strict";i.r(e);i("sMBO");var c=i("Dt64"),a=i("VTBJ"),n=(i("2B1R"),i("L2JU")),s=i("b4Rf"),l={props:{project:{type:Object,default:function(){return{}}}},data:function(){return{formatter:new Intl.ListFormat("fa")}},computed:Object(a.a)(Object(a.a)({},Object(n.b)(["device"])),{},{segments:function(){return[{title:"اطلاعات کلی",items:[{label:"شروع",value:Object(s.a)(this.project.start_year||"نامشخص")},{label:"برچسب‌ها",value:this.toListFormat(this.project.tags.map((function(t){return t.title})))}]},{title:"ناکامی پروژه",items:[{label:"پایان",value:Object(s.a)(this.project.start_year||"نامشخص")},{label:"دلیل",value:this.project.failure_reason}]},{title:"بنیان‌گذاران",items:[{label:"تعداد",value:Object(s.a)(this.project.founders.length||"نامشخص")},{label:"اسامی",value:this.toListFormat(this.project.founders)}]},{title:"سرمایه‌گذاران",items:[{label:"تعداد",value:Object(s.a)(this.project.investors.length||"نامشخص")},{label:"اسامی",value:this.toListFormat(this.project.investors)}]}]}}),methods:{toListFormat:function(t){return t&&t.length?this.formatter.format(t):"نامشخص"}}},r=i("KHd+"),o=Object(r.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card flex flex-wrap"},t._l(t.segments,(function(e,c){return i("div",{key:c,staticClass:"w-full md:w-1/2 p-2"},[i("div",{class:["h-full border-nk-gray-500 border-opacity-70",{"border-b pb-6":t.device.isMobile?c+1!==t.segments.length:!(c+1===t.segments.length||c+2===t.segments.length)}]},[i("p",{staticClass:"text-white opacity-40 font-serif text-lg mb-2"},[t._v("\n                "+t._s(e.title)+"\n            ")]),i("ul",t._l(e.items,(function(e,c){return i("li",{key:c},[i("label",{staticClass:"text-white text-bold font-serif ml-1"},[t._v("\n                        "+t._s(e.label)+":\n                    ")]),i("span",[t._v("\n                        "+t._s(e.value)+"\n                    ")])])})),0)])])})),0)}),[],!1,null,null,null).exports,u={props:{content:{type:String,default:""}}},d=(i("yYBr"),Object(r.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card"},[this.content&&"\n"!==this.content?e("article",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.content)}}):e("div",{staticClass:"text-center py-6 px-2 font-serif text-lg text-white opacity-20"},[this._v("\n        متاسفانه توضیحات بیشتری وجود ندارد.\n    ")])])}),[],!1,null,null,null).exports),A={filters:{toFarsiDigits:function(t){return Object(s.a)(t)},toListFormat:function(t){return t&&t.length?new Intl.ListFormat("fa").format(t):"-"}},components:{ProjectCard:c.a,InfoCard:o,ContentCard:d},metaInfo:function(){return{title:"دلایل شکست ".concat(this.$page.project.name)}},computed:{project:function(){var t;return(null===(t=this.$page)||void 0===t?void 0:t.project)||{}}}},p=null,b=Object(r.a)(A,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"mx-auto w-full max-w-5xl py-12"},[e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full md:w-1/4"},[e("div",{staticClass:"md:sticky top-18 p-2"},[e("project-card",{attrs:{project:this.project,"card-type":"profile"}})],1)]),e("div",{staticClass:"w-full md:w-3/4 p-2"},[e("div",{staticClass:"mb-4"},[e("info-card",{attrs:{project:this.project}})],1),e("div",{staticClass:"mb-4"},[e("content-card",{attrs:{content:this.project.content}})],1)])])])])}),[],!1,null,null,null);"function"==typeof p&&p(b);e.default=b.exports},"8Ifq":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAIAAAAHjs1qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIXGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA0LTIyVDA4OjQ0OjMyKzA0OjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA2LTA1VDE3OjIzOjI0KzA0OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNi0wNVQxNzoyMzoyNCswNDozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplNDNjNWMxMC0xMDI1LWM3NDgtYmZmOS02OGJjYWJiMjFiZmMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2ZTU4Y2RjMS0yNTg3LWVhNGUtYmYwZi1jYzQ0N2U5N2YyMDYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MjhmNTM2Mi01MzgxLTM1NGItYWFmZC02ZDM5N2NjZDA3ZjEiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjUyOGY1MzYyLTUzODEtMzU0Yi1hYWZkLTZkMzk3Y2NkMDdmMSIgc3RFdnQ6d2hlbj0iMjAyMC0wNC0yMlQwODo0NDozMiswNDozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3Y2NlN2FhYi05OWZkLWMyNDAtOTc1Ni05MjJhM2NlMTVjYjkiIHN0RXZ0OndoZW49IjIwMjAtMDQtMjJUMDg6NDQ6MzIrMDQ6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZTQzYzVjMTAtMTAyNS1jNzQ4LWJmZjktNjhiY2FiYjIxYmZjIiBzdEV2dDp3aGVuPSIyMDIxLTA2LTA1VDE3OjIzOjI0KzA0OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6VGV4dExheWVycz4gPHJkZjpCYWc+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iPyIg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"},Dt64:function(t,e,i){"use strict";var c=i("b4Rf"),a={filters:{toFarsiDigits:function(t){return Object(c.a)(t)}},props:{project:{type:Object,default:function(){return{}}},cardType:{type:String,default:"horizontal"}}},n=(i("0WQ8"),i("KHd+")),s=Object(n.a)(a,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("profile"!==t.cardType?"g-link":"div",{tag:"component",class:["card","card--"+t.cardType],attrs:{to:t.project.path}},[c("div",{staticClass:"card__image"},[c("g-image",{staticClass:"w-full",attrs:{src:t.project.logo||i("8Ifq")}})],1),c("div",{staticClass:"card__text"},[c("div",[c("p",{staticClass:"text-white text-xl font-serif"},[t._v("\n                "+t._s(t.project.name)+"\n            ")]),c("p",[t._v("\n                "+t._s(t.project.description)+"\n            ")])]),"profile"!==t.cardType?c("div",{staticClass:"mt-2"},[t._l(t.project.tags,(function(e){return c("span",{key:e.id,staticClass:"chips"},[t._v("\n                "+t._s(e.title)+"\n            ")])})),c("span",{staticClass:"chips",attrs:{dir:"ltr"}},[t._v("\n                "+t._s(t._f("toFarsiDigits")(t.project.start_year||"??"))+" - "+t._s(t._f("toFarsiDigits")(t.project.failure_year||"??"))+"\n            ")])],2):t._e()])])}),[],!1,null,"3a5d375a",null);e.a=s.exports},MksA:function(t,e,i){},b4Rf:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));i("rB9j"),i("UxlC");function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(t+"").replace(/[0-9]/g,(function(t){return String.fromCharCode(t.charCodeAt(0)+1728)}))}},yYBr:function(t,e,i){"use strict";i("1hm3")}}]);