/*global jQuery */
/*!
* FlexVerticalCenter.js 1.0
*
* Copyright 2011, Paul Sprangers http://paulsprangers.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Fri Oct 28 19:12:00 2011 +0100
*/

!function(e){e.fn.flexVerticalCenter=function(t){var n=e.extend({cssAttribute:"margin-top",verticalOffset:0,parentSelector:null,debounceTimeout:25,deferTilWindowLoad:!1},t||{});return this.each(function(){var t,r=e(this),i=function(){var e=n.parentSelector&&r.parents(n.parentSelector).length?r.parents(n.parentSelector).first().height():r.parent().height();r.css(n.cssAttribute,(e-r.height())/2+parseInt(n.verticalOffset))};e(window).resize(function(){clearTimeout(t),t=setTimeout(i,n.debounceTimeout)}),n.deferTilWindowLoad||i(),e(window).load(function(){i()})})}}(jQuery);