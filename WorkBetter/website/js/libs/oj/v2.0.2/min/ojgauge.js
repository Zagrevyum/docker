/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtGauge"],function(a,f,b,d,c){a.ya("oj.dvtBaseGauge",f.oj.dvtBaseComponent,{jA:function(){this._super();this.options._thresholdColors=[this.options._threshold1,this.options._threshold2,this.options._threshold3];this.options._threshold1=null;this.options._threshold2=null;this.options._threshold3=null},rf:function(){this._super();this.option("rawValue",this.options.value,{_context:{Hc:!0,Wa:!0}})},ii:function(){var b=
this._super();b["oj-gauge-metric-label"]={path:"metricLabel/style",property:"CSS_TEXT_PROPERTIES"};b["oj-gauge-tick-label"]={path:"tickLabel/style",property:"CSS_TEXT_PROPERTIES"};b["oj-gauge-threshold1"]={path:"_threshold1",property:"color"};b["oj-gauge-threshold2"]={path:"_threshold2",property:"color"};b["oj-gauge-threshold3"]={path:"_threshold3",property:"color"};return b},ki:function(){return["input","optionChange"]},li:function(){var b=this.options.translations,a=this._super();a["DvtGaugeBundle.EMPTY_TEXT"]=
b.labelNoData;a["DvtUtilBundle.GAUGE"]=b.componentName;return a},hk:function(b){if("valueChange"===b.type){var a=b.newValue;b.complete?this.xd("value",a):(this._trigger("input",null,{value:a}),this.xd("rawValue",a))}else this._super(b)},_setOption:function(b,d,c){"rawValue"===b?a.q.error("'rawValue' is a read-only option and cannot be set"):("value"===b&&this.option("rawValue",d,{_context:{Hc:!0,Wa:!0}}),this._super(b,d,c))},hi:function(b){var a=b.subId;if("oj-dialgauge-tooltip"==a||"oj-ledgauge-tooltip"==
a||"oj-ratinggauge-tooltip"==a||"oj-statusmetergauge-tooltip"==a)a="tooltip";"oj-ratinggauge-item"==a&&null!=b.index&&(a="item["+b.index+"]");return a}},!0);a.ya("oj.ojLedGauge",f.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{},sf:function(b,a,d){return c.LedGauge.newInstance(b,a,d)},jg:function(b){var a={};"tooltip"==b&&(a.subId="oj-ledgauge-tooltip");return a},Ge:function(){var b=this._super();b.push("oj-ledgauge");return b},yf:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),
this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this._super()},getMetricLabel:function(){return this.ka.getAutomation().getMetricLabel()}});a.ya("oj.ojRatingGauge",f.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{input:null,optionChange:null,rawValue:void 0},sf:function(b,a,d){return c.RatingGauge.newInstance(b,a,d)},jg:function(b){var a={};"tooltip"==b?a.subId="oj-ratinggauge-tooltip":
0==b.indexOf("item")&&(a.subId="oj-ratinggauge-item",a.index=this.Vg(b));return a},Ge:function(){var b=this._super();b.push("oj-ratinggauge");return b},yf:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this._super()},xd:function(b,a){this._superApply(arguments);"value"==b&&this.xd("changed",
!0)}});a.ya("oj.ojDialGauge",f.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{input:null,optionChange:null,rawValue:void 0},sf:function(b,a,d){return c.DialGauge.newInstance(b,a,d)},jg:function(b){var a={};"tooltip"==b&&(a.subId="oj-dialgauge-tooltip");return a},Ge:function(){var b=this._super();b.push("oj-dialgauge");return b},yf:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):
this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this.rla();this._super()},rla:function(){var b=this.options.background;null==b&&(b="circleAlta",this.options.background="circleAlta");var d=this.options.indicator;null==d&&(d="needleAlta",this.options.indicator="needleAlta");if("string"===typeof b){var c=[{src:a.ba.lb("resources/internal-deps/dvt/gauge/alta-circle-200x200.png"),width:200,height:200},{src:a.ba.lb("resources/internal-deps/dvt/gauge/alta-circle-400x400.png"),
width:400,height:400}];"rectangleAlta"===b?c=[{src:a.ba.lb("resources/internal-deps/dvt/gauge/alta-rectangle-200x200.png"),width:200,height:154},{src:a.ba.lb("resources/internal-deps/dvt/gauge/alta-rectangle-400x400.png"),width:400,height:309}]:"domeAlta"===b?c=[{src:a.ba.lb("resources/internal-deps/dvt/gauge/alta-dome-200x200.png"),width:200,height:154},{src:a.ba.lb("resources/internal-deps/dvt/gauge/alta-dome-400x400.png"),width:400,height:309}]:"circleAntique"===b?c=[{src:a.ba.lb("resources/internal-deps/dvt/gauge/antique-circle-200x200.png"),
width:200,height:200},{src:a.ba.lb("resources/internal-deps/dvt/gauge/antique-circle-400x400.png"),width:400,height:400}]:"rectangleAntique"===b?c=[{src:a.ba.lb("resources/internal-deps/dvt/gauge/antique-rectangle-200x200.png"),width:200,height:168},{src:a.ba.lb("resources/internal-deps/dvt/gauge/antique-rectangle-400x400.png"),width:400,height:335}]:"domeAntique"===b?c=[{src:a.ba.lb("resources/internal-deps/dvt/gauge/antique-dome-200x200.png"),width:200,height:176},{src:a.ba.lb("resources/internal-deps/dvt/gauge/antique-dome-400x400.png"),
width:400,height:352}]:"circleLight"===b?c=[{src:a.ba.lb("resources/internal-deps/dvt/gauge/light-circle-200x200.png"),width:200,height:200},{src:a.ba.lb("resources/internal-deps/dvt/gauge/light-circle-400x400.png"),width:400,height:400}]:"rectangleLight"===b?c=[{src:a.ba.lb("resources/internal-deps/dvt/gauge/light-rectangle-200x200.png"),width:200,height:154},{src:a.ba.lb("resources/internal-deps/dvt/gauge/light-rectangle-400x400.png"),width:400,height:307}]:"domeLight"===b?c=[{src:a.ba.lb("resources/internal-deps/dvt/gauge/light-dome-200x200.png"),
width:200,height:138},{src:a.ba.lb("resources/internal-deps/dvt/gauge/light-dome-400x400.png"),width:400,height:276}]:"circleDark"===b?c=[{src:a.ba.lb("resources/internal-deps/dvt/gauge/dark-circle-200x200.png"),width:200,height:200},{src:a.ba.lb("resources/internal-deps/dvt/gauge/dark-circle-400x400.png"),width:400,height:400}]:"rectangleDark"===b?c=[{src:a.ba.lb("resources/internal-deps/dvt/gauge/dark-rectangle-200x200.png"),width:200,height:154},{src:a.ba.lb("resources/internal-deps/dvt/gauge/dark-rectangle-400x400.png"),
width:400,height:307}]:"domeDark"===b&&(c=[{src:a.ba.lb("resources/internal-deps/dvt/gauge/dark-dome-200x200.png"),width:200,height:138},{src:a.ba.lb("resources/internal-deps/dvt/gauge/dark-dome-400x400.png"),width:400,height:276}]);this.options._backgroundImages=c}"string"===typeof d&&(b=[{src:a.ba.lb("resources/internal-deps/dvt/gauge/alta-needle-1600x1600.png"),width:374,height:575}],"needleAntique"===d?b=[{src:a.ba.lb("resources/internal-deps/dvt/gauge/antique-needle-1600x1600.png"),width:81,
height:734}]:"needleDark"===d?b=[{src:a.ba.lb("resources/internal-deps/dvt/gauge/dark-needle-1600x1600.png"),width:454,height:652}]:"needleLight"===d&&(b=[{src:a.ba.lb("resources/internal-deps/dvt/gauge/light-needle-1600x1600.png"),width:454,height:652}]),this.options._indicatorImages=b)},getMetricLabel:function(){return this.ka.getAutomation().getMetricLabel()}});a.ya("oj.ojStatusMeterGauge",f.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{input:null,optionChange:null,rawValue:void 0},sf:function(b,
a,d){return c.StatusMeterGauge.newInstance(b,a,d)},jg:function(b){var a={};"tooltip"==b&&(a.subId="oj-statusmetergauge-tooltip");return a},Ge:function(){var b=this._super();b.push("oj-statusmetergauge");return b},yf:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this._super()},
getMetricLabel:function(){return this.ka.getAutomation().getMetricLabel()}})});