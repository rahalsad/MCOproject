// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/* Chosen v1.4.2 | (c) 2011-2015 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */
(function(){var a,AbstractChosen,Chosen,SelectParser,b,c={}.hasOwnProperty,d=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};SelectParser=function(){function SelectParser(){this.options_index=0,this.parsed=[]}return SelectParser.prototype.add_node=function(a){return"OPTGROUP"===a.nodeName.toUpperCase()?this.add_group(a):this.add_option(a)},SelectParser.prototype.add_group=function(a){var b,c,d,e,f,g;for(b=this.parsed.length,this.parsed.push({array_index:b,group:!0,label:this.escapeExpression(a.label),title:a.title?a.title:void 0,children:0,disabled:a.disabled,classes:a.className}),f=a.childNodes,g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(this.add_option(c,b,a.disabled));return g},SelectParser.prototype.add_option=function(a,b,c){return"OPTION"===a.nodeName.toUpperCase()?(""!==a.text?(null!=b&&(this.parsed[b].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:a.value,text:a.text,html:a.innerHTML,title:a.title?a.title:void 0,selected:a.selected,disabled:c===!0?c:a.disabled,group_array_index:b,group_label:null!=b?this.parsed[b].label:null,classes:a.className,style:a.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1):void 0},SelectParser.prototype.escapeExpression=function(a){var b,c;return null==a||a===!1?"":/[\&\<\>\"\'\`]/.test(a)?(b={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c=/&(?!\w+;)|[\<\>\"\'\`]/g,a.replace(c,function(a){return b[a]||"&amp;"})):a},SelectParser}(),SelectParser.select_to_array=function(a){var b,c,d,e,f;for(c=new SelectParser,f=a.childNodes,d=0,e=f.length;e>d;d++)b=f[d],c.add_node(b);return c.parsed},AbstractChosen=function(){function AbstractChosen(a,b){this.form_field=a,this.options=null!=b?b:{},AbstractChosen.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers(),this.on_ready())}return AbstractChosen.prototype.set_default_values=function(){var a=this;return this.click_test_action=function(b){return a.test_active_click(b)},this.activate_action=function(b){return a.activate_field(b)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null!=this.options.enable_split_word_search?this.options.enable_split_word_search:!0,this.group_search=null!=this.options.group_search?this.options.group_search:!0,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null!=this.options.single_backstroke_delete?this.options.single_backstroke_delete:!0,this.max_selected_options=this.options.max_selected_options||1/0,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null!=this.options.display_selected_options?this.options.display_selected_options:!0,this.display_disabled_options=null!=this.options.display_disabled_options?this.options.display_disabled_options:!0,this.include_group_label_in_selected=this.options.include_group_label_in_selected||!1},AbstractChosen.prototype.set_default_text=function(){return this.default_text=this.form_field.getAttribute("data-placeholder")?this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.options.placeholder_text_multiple||this.options.placeholder_text||AbstractChosen.default_multiple_text:this.options.placeholder_text_single||this.options.placeholder_text||AbstractChosen.default_single_text,this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||AbstractChosen.default_no_result_text},AbstractChosen.prototype.choice_label=function(a){return this.include_group_label_in_selected&&null!=a.group_label?"<b class='group-name'>"+a.group_label+"</b>"+a.html:a.html},AbstractChosen.prototype.mouse_enter=function(){return this.mouse_on_container=!0},AbstractChosen.prototype.mouse_leave=function(){return this.mouse_on_container=!1},AbstractChosen.prototype.input_focus=function(){var a=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return a.container_mousedown()},50)}else if(!this.active_field)return this.activate_field()},AbstractChosen.prototype.input_blur=function(){var a=this;return this.mouse_on_container?void 0:(this.active_field=!1,setTimeout(function(){return a.blur_test()},100))},AbstractChosen.prototype.results_option_build=function(a){var b,c,d,e,f;for(b="",f=this.results_data,d=0,e=f.length;e>d;d++)c=f[d],b+=c.group?this.result_add_group(c):this.result_add_option(c),(null!=a?a.first:void 0)&&(c.selected&&this.is_multiple?this.choice_build(c):c.selected&&!this.is_multiple&&this.single_set_selected_text(this.choice_label(c)));return b},AbstractChosen.prototype.result_add_option=function(a){var b,c;return a.search_match?this.include_option_in_results(a)?(b=[],a.disabled||a.selected&&this.is_multiple||b.push("active-result"),!a.disabled||a.selected&&this.is_multiple||b.push("disabled-result"),a.selected&&b.push("result-selected"),null!=a.group_array_index&&b.push("group-option"),""!==a.classes&&b.push(a.classes),c=document.createElement("li"),c.className=b.join(" "),c.style.cssText=a.style,c.setAttribute("data-option-array-index",a.array_index),c.innerHTML=a.search_text,a.title&&(c.title=a.title),this.outerHTML(c)):"":""},AbstractChosen.prototype.result_add_group=function(a){var b,c;return a.search_match||a.group_match?a.active_options>0?(b=[],b.push("group-result"),a.classes&&b.push(a.classes),c=document.createElement("li"),c.className=b.join(" "),c.innerHTML=a.search_text,a.title&&(c.title=a.title),this.outerHTML(c)):"":""},AbstractChosen.prototype.results_update_field=function(){return this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.results_build(),this.results_showing?this.winnow_results():void 0},AbstractChosen.prototype.reset_single_select_options=function(){var a,b,c,d,e;for(d=this.results_data,e=[],b=0,c=d.length;c>b;b++)a=d[b],a.selected?e.push(a.selected=!1):e.push(void 0);return e},AbstractChosen.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},AbstractChosen.prototype.results_search=function(){return this.results_showing?this.winnow_results():this.results_show()},AbstractChosen.prototype.winnow_results=function(){var a,b,c,d,e,f,g,h,i,j,k,l;for(this.no_results_clear(),d=0,f=this.get_search_text(),a=f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),i=new RegExp(a,"i"),c=this.get_search_regex(a),l=this.results_data,j=0,k=l.length;k>j;j++)b=l[j],b.search_match=!1,e=null,this.include_option_in_results(b)&&(b.group&&(b.group_match=!1,b.active_options=0),null!=b.group_array_index&&this.results_data[b.group_array_index]&&(e=this.results_data[b.group_array_index],0===e.active_options&&e.search_match&&(d+=1),e.active_options+=1),b.search_text=b.group?b.label:b.html,(!b.group||this.group_search)&&(b.search_match=this.search_string_match(b.search_text,c),b.search_match&&!b.group&&(d+=1),b.search_match?(f.length&&(g=b.search_text.search(i),h=b.search_text.substr(0,g+f.length)+"</em>"+b.search_text.substr(g+f.length),b.search_text=h.substr(0,g)+"<em>"+h.substr(g)),null!=e&&(e.group_match=!0)):null!=b.group_array_index&&this.results_data[b.group_array_index].search_match&&(b.search_match=!0)));return this.result_clear_highlight(),1>d&&f.length?(this.update_results_content(""),this.no_results(f)):(this.update_results_content(this.results_option_build()),this.winnow_results_set_highlight())},AbstractChosen.prototype.get_search_regex=function(a){var b;return b=this.search_contains?"":"^",new RegExp(b+a,"i")},AbstractChosen.prototype.search_string_match=function(a,b){var c,d,e,f;if(b.test(a))return!0;if(this.enable_split_word_search&&(a.indexOf(" ")>=0||0===a.indexOf("["))&&(d=a.replace(/\[|\]/g,"").split(" "),d.length))for(e=0,f=d.length;f>e;e++)if(c=d[e],b.test(c))return!0},AbstractChosen.prototype.choices_count=function(){var a,b,c,d;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,d=this.form_field.options,b=0,c=d.length;c>b;b++)a=d[b],a.selected&&(this.selected_option_count+=1);return this.selected_option_count},AbstractChosen.prototype.choices_click=function(a){return a.preventDefault(),this.results_showing||this.is_disabled?void 0:this.results_show()},AbstractChosen.prototype.keyup_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),b){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:if(a.preventDefault(),this.results_showing)return this.result_select(a);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}},AbstractChosen.prototype.clipboard_event_checker=function(){var a=this;return setTimeout(function(){return a.results_search()},50)},AbstractChosen.prototype.container_width=function(){return null!=this.options.width?this.options.width:""+this.form_field.offsetWidth+"px"},AbstractChosen.prototype.include_option_in_results=function(a){return this.is_multiple&&!this.display_selected_options&&a.selected?!1:!this.display_disabled_options&&a.disabled?!1:a.empty?!1:!0},AbstractChosen.prototype.search_results_touchstart=function(a){return this.touch_started=!0,this.search_results_mouseover(a)},AbstractChosen.prototype.search_results_touchmove=function(a){return this.touch_started=!1,this.search_results_mouseout(a)},AbstractChosen.prototype.search_results_touchend=function(a){return this.touch_started?this.search_results_mouseup(a):void 0},AbstractChosen.prototype.outerHTML=function(a){var b;return a.outerHTML?a.outerHTML:(b=document.createElement("div"),b.appendChild(a),b.innerHTML)},AbstractChosen.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?document.documentMode>=8:/iP(od|hone)/i.test(window.navigator.userAgent)?!1:/Android/i.test(window.navigator.userAgent)&&/Mobile/i.test(window.navigator.userAgent)?!1:!0},AbstractChosen.default_multiple_text="Select Some Options",AbstractChosen.default_single_text="Select an Option",AbstractChosen.default_no_result_text="No results match",AbstractChosen}(),a=jQuery,a.fn.extend({chosen:function(b){return AbstractChosen.browser_is_supported()?this.each(function(){var c,d;c=a(this),d=c.data("chosen"),"destroy"===b&&d instanceof Chosen?d.destroy():d instanceof Chosen||c.data("chosen",new Chosen(this,b))}):this}}),Chosen=function(c){function Chosen(){return b=Chosen.__super__.constructor.apply(this,arguments)}return d(Chosen,c),Chosen.prototype.setup=function(){return this.form_field_jq=a(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex,this.is_rtl=this.form_field_jq.hasClass("chosen-rtl")},Chosen.prototype.set_up_html=function(){var b,c;return b=["chosen-container"],b.push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&b.push(this.form_field.className),this.is_rtl&&b.push("chosen-rtl"),c={"class":b.join(" "),style:"width: "+this.container_width()+";",title:this.form_field.title},this.form_field.id.length&&(c.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"),this.container=a("<div />",c),this.is_multiple?this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>'):this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior()},Chosen.prototype.on_ready=function(){return this.form_field_jq.trigger("chosen:ready",{chosen:this})},Chosen.prototype.register_observers=function(){var a=this;return this.container.bind("touchstart.chosen",function(b){return a.container_mousedown(b),b.preventDefault()}),this.container.bind("touchend.chosen",function(b){return a.container_mouseup(b),b.preventDefault()}),this.container.bind("mousedown.chosen",function(b){a.container_mousedown(b)}),this.container.bind("mouseup.chosen",function(b){a.container_mouseup(b)}),this.container.bind("mouseenter.chosen",function(b){a.mouse_enter(b)}),this.container.bind("mouseleave.chosen",function(b){a.mouse_leave(b)}),this.search_results.bind("mouseup.chosen",function(b){a.search_results_mouseup(b)}),this.search_results.bind("mouseover.chosen",function(b){a.search_results_mouseover(b)}),this.search_results.bind("mouseout.chosen",function(b){a.search_results_mouseout(b)}),this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",function(b){a.search_results_mousewheel(b)}),this.search_results.bind("touchstart.chosen",function(b){a.search_results_touchstart(b)}),this.search_results.bind("touchmove.chosen",function(b){a.search_results_touchmove(b)}),this.search_results.bind("touchend.chosen",function(b){a.search_results_touchend(b)}),this.form_field_jq.bind("chosen:updated.chosen",function(b){a.results_update_field(b)}),this.form_field_jq.bind("chosen:activate.chosen",function(b){a.activate_field(b)}),this.form_field_jq.bind("chosen:open.chosen",function(b){a.container_mousedown(b)}),this.form_field_jq.bind("chosen:close.chosen",function(b){a.input_blur(b)}),this.search_field.bind("blur.chosen",function(b){a.input_blur(b)}),this.search_field.bind("keyup.chosen",function(b){a.keyup_checker(b)}),this.search_field.bind("keydown.chosen",function(b){a.keydown_checker(b)}),this.search_field.bind("focus.chosen",function(b){a.input_focus(b)}),this.search_field.bind("cut.chosen",function(b){a.clipboard_event_checker(b)}),this.search_field.bind("paste.chosen",function(b){a.clipboard_event_checker(b)}),this.is_multiple?this.search_choices.bind("click.chosen",function(b){a.choices_click(b)}):this.container.bind("click.chosen",function(a){a.preventDefault()})},Chosen.prototype.destroy=function(){return a(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},Chosen.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field_jq[0].disabled,this.is_disabled?(this.container.addClass("chosen-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus.chosen",this.activate_action),this.close_field()):(this.container.removeClass("chosen-disabled"),this.search_field[0].disabled=!1,this.is_multiple?void 0:this.selected_item.bind("focus.chosen",this.activate_action))},Chosen.prototype.container_mousedown=function(b){return this.is_disabled||(b&&"mousedown"===b.type&&!this.results_showing&&b.preventDefault(),null!=b&&a(b.target).hasClass("search-choice-close"))?void 0:(this.active_field?this.is_multiple||!b||a(b.target)[0]!==this.selected_item[0]&&!a(b.target).parents("a.chosen-single").length||(b.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),a(this.container[0].ownerDocument).bind("click.chosen",this.click_test_action),this.results_show()),this.activate_field())},Chosen.prototype.container_mouseup=function(a){return"ABBR"!==a.target.nodeName||this.is_disabled?void 0:this.results_reset(a)},Chosen.prototype.search_results_mousewheel=function(a){var b;return a.originalEvent&&(b=a.originalEvent.deltaY||-a.originalEvent.wheelDelta||a.originalEvent.detail),null!=b?(a.preventDefault(),"DOMMouseScroll"===a.type&&(b=40*b),this.search_results.scrollTop(b+this.search_results.scrollTop())):void 0},Chosen.prototype.blur_test=function(){return!this.active_field&&this.container.hasClass("chosen-container-active")?this.close_field():void 0},Chosen.prototype.close_field=function(){return a(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},Chosen.prototype.activate_field=function(){return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},Chosen.prototype.test_active_click=function(b){var c;return c=a(b.target).closest(".chosen-container"),c.length&&this.container[0]===c[0]?this.active_field=!0:this.close_field()},Chosen.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=SelectParser.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():this.is_multiple||(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},Chosen.prototype.result_do_highlight=function(a){var b,c,d,e,f;if(a.length){if(this.result_clear_highlight(),this.result_highlight=a,this.result_highlight.addClass("highlighted"),d=parseInt(this.search_results.css("maxHeight"),10),f=this.search_results.scrollTop(),e=d+f,c=this.result_highlight.position().top+this.search_results.scrollTop(),b=c+this.result_highlight.outerHeight(),b>=e)return this.search_results.scrollTop(b-d>0?b-d:0);if(f>c)return this.search_results.scrollTop(c)}},Chosen.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},Chosen.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.container.addClass("chosen-with-drop"),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results(),this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this}))},Chosen.prototype.update_results_content=function(a){return this.search_results.html(a)},Chosen.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})),this.results_showing=!1},Chosen.prototype.set_tab_index=function(){var a;return this.form_field.tabIndex?(a=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=a):void 0},Chosen.prototype.set_label_behavior=function(){var b=this;return this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=a("label[for='"+this.form_field.id+"']")),this.form_field_label.length>0?this.form_field_label.bind("click.chosen",function(a){return b.is_multiple?b.container_mousedown(a):b.activate_field()}):void 0},Chosen.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},Chosen.prototype.search_results_mouseup=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c.length?(this.result_highlight=c,this.result_select(b),this.search_field.focus()):void 0},Chosen.prototype.search_results_mouseover=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c?this.result_do_highlight(c):void 0},Chosen.prototype.search_results_mouseout=function(b){return a(b.target).hasClass("active-result")?this.result_clear_highlight():void 0},Chosen.prototype.choice_build=function(b){var c,d,e=this;return c=a("<li />",{"class":"search-choice"}).html("<span>"+this.choice_label(b)+"</span>"),b.disabled?c.addClass("search-choice-disabled"):(d=a("<a />",{"class":"search-choice-close","data-option-array-index":b.array_index}),d.bind("click.chosen",function(a){return e.choice_destroy_link_click(a)}),c.append(d)),this.search_container.before(c)},Chosen.prototype.choice_destroy_link_click=function(b){return b.preventDefault(),b.stopPropagation(),this.is_disabled?void 0:this.choice_destroy(a(b.target))},Chosen.prototype.choice_destroy=function(a){return this.result_deselect(a[0].getAttribute("data-option-array-index"))?(this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1&&this.results_hide(),a.parents("li").first().remove(),this.search_field_scale()):void 0},Chosen.prototype.results_reset=function(){return this.reset_single_select_options(),this.form_field.options[0].selected=!0,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change"),this.active_field?this.results_hide():void 0},Chosen.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},Chosen.prototype.result_select=function(a){var b,c;return this.result_highlight?(b=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.is_multiple?b.removeClass("active-result"):this.reset_single_select_options(),b.addClass("result-selected"),c=this.results_data[b[0].getAttribute("data-option-array-index")],c.selected=!0,this.form_field.options[c.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(c):this.single_set_selected_text(this.choice_label(c)),(a.metaKey||a.ctrlKey)&&this.is_multiple||this.results_hide(),this.search_field.val(""),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[c.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,a.preventDefault(),this.search_field_scale())):void 0},Chosen.prototype.single_set_selected_text=function(a){return null==a&&(a=this.default_text),a===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").html(a)},Chosen.prototype.result_deselect=function(a){var b;return b=this.results_data[a],this.form_field.options[b.options_index].disabled?!1:(b.selected=!1,this.form_field.options[b.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[b.options_index].value}),this.search_field_scale(),!0)},Chosen.prototype.single_deselect_control_build=function(){return this.allow_single_deselect?(this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chosen-single-with-deselect")):void 0},Chosen.prototype.get_search_text=function(){return a("<div/>").text(a.trim(this.search_field.val())).html()},Chosen.prototype.winnow_results_set_highlight=function(){var a,b;return b=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),a=b.length?b.first():this.search_results.find(".active-result").first(),null!=a?this.result_do_highlight(a):void 0},Chosen.prototype.no_results=function(b){var c;return c=a('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),c.find("span").first().html(b),this.search_results.append(c),this.form_field_jq.trigger("chosen:no_results",{chosen:this})},Chosen.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},Chosen.prototype.keydown_arrow=function(){var a;return this.results_showing&&this.result_highlight?(a=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(a):void 0:this.results_show()},Chosen.prototype.keyup_arrow=function(){var a;return this.results_showing||this.is_multiple?this.result_highlight?(a=this.result_highlight.prevAll("li.active-result"),a.length?this.result_do_highlight(a.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight())):void 0:this.results_show()},Chosen.prototype.keydown_backstroke=function(){var a;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(a=this.search_container.siblings("li.search-choice").last(),a.length&&!a.hasClass("search-choice-disabled")?(this.pending_backstroke=a,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0)},Chosen.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},Chosen.prototype.keydown_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),8!==b&&this.pending_backstroke&&this.clear_backstroke(),b){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(a),this.mouse_on_container=!1;break;case 13:this.results_showing&&a.preventDefault();break;case 32:this.disable_search&&a.preventDefault();break;case 38:a.preventDefault(),this.keyup_arrow();break;case 40:a.preventDefault(),this.keydown_arrow()}},Chosen.prototype.search_field_scale=function(){var b,c,d,e,f,g,h,i,j;if(this.is_multiple){for(d=0,h=0,f="position:absolute; left: -1000px; top: -1000px; display:none;",g=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"],i=0,j=g.length;j>i;i++)e=g[i],f+=e+":"+this.search_field.css(e)+";";return b=a("<div />",{style:f}),b.text(this.search_field.val()),a("body").append(b),h=b.width()+25,b.remove(),c=this.container.outerWidth(),h>c-10&&(h=c-10),this.search_field.css({width:h+"px"})}},Chosen}(AbstractChosen)}).call(this);





/*
    Name: jqueryTranslator
    Author: Antonio Laguna
    Twitter: @Belelros
    Website: http://www.funcion13.com
    Version: 1.1.1
*/(function(e,t,n,r){var i={initialize:function(t,n){this.packages=[];this.loaded=e.Deferred();this.translatable=!0;this.options=e.extend({},e.fn.jqTranslate.options,n);var r=this.getUserLanguage();typeof t=="string"?this.packages.push(t):this.packages=t;this.isTranslatable(r)?this.loadLanguages():this.translatable=!1;return this.loaded.promise()},getUserLanguage:function(){var t=this.options.forceLang||navigator.language||navigator.userLanguage;e.defaultLanguage=t;t=t.replace(/_/,"-").toLowerCase();if(t.length>3){t=t.substring(0,3)+t.substring(3).toUpperCase();this.languages=[t.substring(0,2),t.substring(3).toUpperCase()]}else this.languages=[t];e.fn.jqTranslate.userLang=t;return t},isTranslatable:function(t){return this.options.defaultLang===t?!1:e.inArray(t,this.options.skip)===-1},loadLanguages:function(){var t=0,n=i.languages.length*i.packages.length;this.translatedStrings={};e.each(i.packages,function(r,s){var o=s;e.each(i.languages,function(e,r){i.getLanguage(o,r).done(i.storeLangFile).always(function(){t++;t>=n&&i.loaded.resolve()})})})},getLanguage:function(t,n){var r=this,i="",s=e.Deferred();r.options.path&&(i=r.options.path+"/");var o=i+[t,n].join("-")+".json";e.ajax({url:o,dataType:"json",cache:r.options.cache,async:r.options.asyncLangLoad}).done(function(e){s.resolve(e)}).fail(function(){if(r.options.fallbackLang){o=i+[t,r.options.fallbackLang].join("-")+".json";e.ajax({url:o,dataType:"json",cache:r.options.cache,async:r.options.asyncLangLoad}).done(function(e){s.resolve(e)})}else s.reject()});return s},storeLangFile:function(t){e.extend(i.translatedStrings,t)},translate:function(){var t=e(this),n=t.data("translate");if(i.translatable&&i.translatedStrings[n])if(i.translatedStrings[n].length===r){i.translateElement(t,i.translatedStrings[n].text);delete i.translatedStrings[n].text;t.attr(i.translatedStrings[n])}else i.translateElement(t,i.translatedStrings[n]);typeof i.options.onComplete=="function"&&i.options.onComplete.apply(this,arguments);return t},translateElement:function(e,t){e.is("input")||e.is("textarea")?e.is("[placeholder]")?e.attr("placeholder",t):e.val(t):e.is("optgroup")?e.attr("label",t):e.is("img")?e.attr("alt",t):e.html(t)}};e.fn.jqTranslate=function(e,t){var n=this;i.initialize(e,t).done(function(){n.each(i.translate)});return this};e.fn.jqTranslate.options={asyncLangLoad:!0,cache:!0,defaultLang:null,fallbackLang:null,forceLang:null,onComplete:null,path:null,skip:[]}})(jQuery,window,document);




(function(e){e.fn.priceFormat=function(t){var n={prefix:"US$ ",suffix:"",centsSeparator:".",thousandsSeparator:",",limit:false,centsLimit:2,clearPrefix:false,clearSufix:false,allowNegative:false,insertPlusSign:false,clearOnEmpty:false};var t=e.extend(n,t);window.ctrl_down=false;e(window).bind("keyup keydown",function(e){window.ctrl_down=e.ctrlKey;return true});return this.each(function(){function m(e){if(n.is("input"))n.val(e);else n.html(e)}function g(){if(n.is("input"))r=n.val();else r=n.html();return r}function y(e){var t="";for(var n=0;n<e.length;n++){char_=e.charAt(n);if(t.length==0&&char_==0)char_=false;if(char_&&char_.match(i)){if(f){if(t.length<f)t=t+char_}else{t=t+char_}}}return t}function b(e){while(e.length<l+1)e="0"+e;return e}function w(t,n){if(!n&&(t===""||t==w("0",true))&&v)return"";var r=b(y(t));var i="";var f=0;if(l==0){u="";c=""}var c=r.substr(r.length-l,l);var h=r.substr(0,r.length-l);r=l==0?h:h+u+c;if(a||e.trim(a)!=""){for(var m=h.length;m>0;m--){char_=h.substr(m-1,1);f++;if(f%3==0)char_=a+char_;i=char_+i}if(i.substr(0,1)==a)i=i.substring(1,i.length);r=l==0?i:i+u+c}if(p&&(h!=0||c!=0)){if(t.indexOf("-")!=-1&&t.indexOf("+")<t.indexOf("-")){r="-"+r}else{if(!d)r=""+r;else r="+"+r}}if(s)r=s+r;if(o)r=r+o;return r}function E(e){var t=e.keyCode?e.keyCode:e.which;var n=String.fromCharCode(t);var i=false;var s=r;var o=w(s+n);if(t>=48&&t<=57||t>=96&&t<=105)i=true;if(t==8)i=true;if(t==9)i=true;if(t==13)i=true;if(t==17)i=true;if(t==46)i=true;if(t==37)i=true;if(t==39)i=true;if(window.ctrl_down){if(t==86)i=true;if(t==67)i=true;if(t==88)i=true;if(t==82)i=true;if(t==84)i=true;if(t==76)i=true;if(t==87)i=true;if(t==81)i=true;if(t==78)i=true;if(t==65)i=true}if(p&&(t==189||t==109||t==173))i=true;if(d&&(t==187||t==107||t==61))i=true;if(!i){e.preventDefault();e.stopPropagation();if(s!=o)m(o)}}function S(){var e=g();var t=w(e);if(e!=t)m(t);if(parseFloat(e)==0&&v)m("")}function x(){n.val(s+g())}function T(){n.val(g()+o)}function N(){if(e.trim(s)!=""&&c){var t=g().split(s);m(t[1])}}function C(){if(e.trim(o)!=""&&h){var t=g().split(o);m(t[0])}}var n=e(this);var r="";var i=/[0-9]/;if(n.is("input"))r=n.val();else r=n.html();var s=t.prefix;var o=t.suffix;var u=t.centsSeparator;var a=t.thousandsSeparator;var f=t.limit;var l=t.centsLimit;var c=t.clearPrefix;var h=t.clearSuffix;var p=t.allowNegative;var d=t.insertPlusSign;var v=t.clearOnEmpty;if(d)p=true;n.bind("keydown.price_format",E);n.bind("keyup.price_format",S);n.bind("focusout.price_format",S);if(c){n.bind("focusout.price_format",function(){N()});n.bind("focusin.price_format",function(){x()})}if(h){n.bind("focusout.price_format",function(){C()});n.bind("focusin.price_format",function(){T()})}if(g().length>0){S();N();C()}})};e.fn.unpriceFormat=function(){return e(this).unbind(".price_format")};e.fn.unmask=function(){var t;var n="";if(e(this).is("input"))t=e(this).val();else t=e(this).html();for(var r in t){if(!isNaN(t[r])||t[r]=="-")n+=t[r]}return n}})(jQuery)





/**
 * Maplace.js
 *
 * Copyright (c) 2013 Daniele Moraschi
 * Licensed under the MIT license
 * For all details and documentation:
 * http://maplacejs.com
 *
 * @version  0.2.7
 * @preserve
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):a.Maplace=b(a.jQuery)}(this,function(a){"use strict";function b(b){this.VERSION="0.2.7",this.loaded=!1,this.markers=[],this.circles=[],this.oMap=!1,this.view_all_key="all",this.infowindow=null,this.maxZIndex=0,this.ln=0,this.oMap=!1,this.oBounds=null,this.map_div=null,this.canvas_map=null,this.controls_wrapper=null,this.current_control=null,this.current_index=null,this.Polyline=null,this.Polygon=null,this.Fusion=null,this.directionsService=null,this.directionsDisplay=null,this.o={debug:!1,map_div:"#gmap",controls_div:"#controls",generate_controls:!0,controls_type:"dropdown",controls_cssclass:"",controls_title:"",controls_on_map:!0,controls_applycss:!0,controls_position:google.maps.ControlPosition.RIGHT_TOP,type:"marker",view_all:!0,view_all_text:"View All",pan_on_click:!0,start:0,locations:[],shared:{},map_options:{mapTypeId:google.maps.MapTypeId.ROADMAP},stroke_options:{strokeColor:"#0000FF",strokeOpacity:.8,strokeWeight:2,fillColor:"#0000FF",fillOpacity:.4},directions_options:{travelMode:google.maps.TravelMode.DRIVING,unitSystem:google.maps.UnitSystem.METRIC,optimizeWaypoints:!1,provideRouteAlternatives:!1,avoidHighways:!1,avoidTolls:!1},circle_options:{radius:100,visible:!0},styles:{},fusion_options:{},directions_panel:null,draggable:!1,editable:!1,show_infowindows:!0,show_markers:!0,infowindow_type:"bubble",listeners:{},beforeViewAll:function(){},afterViewAll:function(){},beforeShow:function(a,b,c){},afterShow:function(a,b,c){},afterCreateMarker:function(a,b,c){},beforeCloseInfowindow:function(a,b){},afterCloseInfowindow:function(a,b){},beforeOpenInfowindow:function(a,b,c){},afterOpenInfowindow:function(a,b,c){},afterRoute:function(a,b,c){},onPolylineClick:function(a){},onPolygonClick:function(a){},circleRadiusChanged:function(a,b,c){},circleCenterChanged:function(a,b,c){},drag:function(a,b,c){},dragEnd:function(a,b,c){},dragStart:function(a,b,c){}},this.AddControl("dropdown",c),this.AddControl("list",d),b&&"directions"===b.type&&(!b.show_markers&&(b.show_markers=!1),!b.show_infowindows&&(b.show_infowindows=!1)),a.extend(!0,this.o,b)}var c,d;return c={activateCurrent:function(a){this.html_element.find("select").val(a)},getHtml:function(){var b,c,d=this,e="";if(this.ln>1){for(e+='<select class="dropdown controls '+this.o.controls_cssclass+'">',this.ShowOnMenu(this.view_all_key)&&(e+='<option value="'+this.view_all_key+'">'+this.o.view_all_text+"</option>"),c=0;c<this.ln;c+=1)this.ShowOnMenu(c)&&(e+='<option value="'+(c+1)+'">'+(this.o.locations[c].title||"#"+(c+1))+"</option>");e+="</select>",e=a(e).bind("change",function(){d.ViewOnMap(this.value)})}return b=this.o.controls_title,this.o.controls_title&&(b=a('<div class="controls_title"></div>').css(this.o.controls_applycss?{fontWeight:"bold",fontSize:this.o.controls_on_map?"12px":"inherit",padding:"3px 10px 5px 0"}:{}).append(this.o.controls_title)),this.html_element=a('<div class="wrap_controls"></div>').append(b).append(e),this.html_element}},d={html_a:function(b,c,d){var e=this,f=c||b+1,g=d||this.o.locations[b].title,h=a('<a data-load="'+f+'" id="ullist_a_'+f+'" href="#'+f+'" title="'+g+'"><span>'+(g||"#"+(b+1))+"</span></a>");return h.css(this.o.controls_applycss?{color:"#666",display:"block",padding:"5px",fontSize:this.o.controls_on_map?"12px":"inherit",textDecoration:"none"}:{}),h.on("click",function(b){b.preventDefault();var c=a(this).attr("data-load");e.ViewOnMap(c)}),h},activateCurrent:function(a){this.html_element.find("li").removeClass("active"),this.html_element.find("#ullist_a_"+a).parent().addClass("active")},getHtml:function(){var b,c,e=a("<ul class='ullist controls "+this.o.controls_cssclass+"'></ul>").css(this.o.controls_applycss?{margin:0,padding:0,listStyleType:"none"}:{});for(this.ShowOnMenu(this.view_all_key)&&e.append(a("<li></li>").append(d.html_a.call(this,!1,this.view_all_key,this.o.view_all_text))),c=0;c<this.ln;c++)this.ShowOnMenu(c)&&e.append(a("<li></li>").append(d.html_a.call(this,c)));return b=this.o.controls_title,this.o.controls_title&&(b=a('<div class="controls_title"></div>').css(this.o.controls_applycss?{fontWeight:"bold",padding:"3px 10px 5px 0",fontSize:this.o.controls_on_map?"12px":"inherit"}:{}).append(this.o.controls_title)),this.html_element=a('<div class="wrap_controls"></div>').append(b).append(e),this.html_element}},b.prototype.controls={},b.prototype.create_objMap=function(){var b,c=this,d=0;for(b in this.o.styles)this.o.styles.hasOwnProperty(b)&&(0===d&&(this.o.map_options.mapTypeControlOptions={mapTypeIds:[google.maps.MapTypeId.ROADMAP]}),d++,this.o.map_options.mapTypeControlOptions.mapTypeIds.push("map_style_"+d));if(this.loaded)c.oMap.setOptions(this.o.map_options);else try{this.map_div.css({position:"relative",overflow:"hidden"}),this.canvas_map=a("<div>").addClass("canvas_map").css({width:"100%",height:"100%"}).appendTo(this.map_div),this.oMap=new google.maps.Map(this.canvas_map.get(0),this.o.map_options)}catch(e){this.debug("create_objMap::"+this.map_div.selector,e.toString())}d=0;for(b in this.o.styles)this.o.styles.hasOwnProperty(b)&&(d++,this.oMap.mapTypes.set("map_style_"+d,new google.maps.StyledMapType(this.o.styles[b],{name:b})),this.oMap.setMapTypeId("map_style_"+d))},b.prototype.add_markers_to_objMap=function(){var a,b,c=this.o.type||"marker";switch(c){case"marker":for(a=0;a<this.ln;a++)b=this.create_objPoint(a),this.create.marker.call(this,a,b);break;default:this.create[c].apply(this)}},b.prototype.create_objPoint=function(b){var c=a.extend({},this.o.locations[b]),d=void 0===c.visible?void 0:c.visible;return!c.type&&(c.type=this.o.type),c.map=this.oMap,c.position=new google.maps.LatLng(c.lat,c.lon),c.zIndex=void 0===c.zIndex?1e4:c.zIndex+100,c.visible=void 0===d?this.o.show_markers:d,this.o.maxZIndex=c.zIndex>this.maxZIndex?c.zIndex:this.maxZIndex,c.image&&(c.icon=new google.maps.MarkerImage(c.image,new google.maps.Size(c.image_w||32,c.image_h||32),new google.maps.Point(0,0),new google.maps.Point((c.image_w||32)/2,(c.image_h||32)/2))),c},b.prototype.create_objCircle=function(b){var c,d,e;return e=a.extend({},b),c=a.extend({},this.o.stroke_options),d=a.extend({},this.o.circle_options),a.extend(c,b.stroke_options||{}),a.extend(e,c),a.extend(d,b.circle_options||{}),a.extend(e,d),e.center=b.position,e.draggable=!1,e.zIndex=b.zIndex>0?b.zIndex-10:1,e},b.prototype.add_markerEv=function(a,b,c){var d=this;google.maps.event.addListener(c,"click",function(e){d.o.beforeShow(a,b,c),d.o.show_infowindows&&b.show_infowindow!==!1&&d.open_infowindow(a,c,e),d.o.pan_on_click&&b.pan_on_click!==!1&&(d.oMap.panTo(b.position),b.zoom&&d.oMap.setZoom(b.zoom)),d.current_control&&d.o.generate_controls&&d.current_control.activateCurrent&&d.current_control.activateCurrent.call(d,a+1),d.current_index=a,d.o.afterShow(a,b,c)}),b.draggable&&this.add_dragEv(a,b,c)},b.prototype.add_circleEv=function(a,b,c){var d=this;google.maps.event.addListener(c,"click",function(){d.ViewOnMap(a+1)}),google.maps.event.addListener(c,"center_changed",function(){d.o.circleCenterChanged(a,b,c)}),google.maps.event.addListener(c,"radius_changed",function(){d.o.circleRadiusChanged(a,b,c)}),b.draggable&&this.add_dragEv(a,b,c)},b.prototype.add_dragEv=function(a,b,c){var d=this;google.maps.event.addListener(c,"drag",function(e){var f,g;if(c.getPosition)f=c.getPosition();else{if(!c.getCenter)return;f=c.getCenter()}if(d.circles[a]&&d.circles[a].setCenter(f),d.Polyline?g="Polyline":d.Polygon&&(g="Polygon"),g){for(var h=d[g].getPath(),i=h.getArray(),j=[],k=0;k<i.length;++k)j[k]=a===k?new google.maps.LatLng(f.lat(),f.lng()):new google.maps.LatLng(i[k].lat(),i[k].lng());d[g].setPath(new google.maps.MVCArray(j)),d.add_polyEv(g)}d.o.drag(a,b,c)}),google.maps.event.addListener(c,"dragend",function(){d.o.dragEnd(a,b,c)}),google.maps.event.addListener(c,"dragstart",function(){d.o.dragStart(a,b,c)}),google.maps.event.addListener(c,"center_changed",function(){d.markers[a]&&c.getCenter&&d.markers[a].setPosition(c.getCenter()),d.o.drag(a,b,c)})},b.prototype.add_polyEv=function(a){var b=this;google.maps.event.addListener(this[a].getPath(),"set_at",function(c,d){var e=b[a].getPath().getAt(c),f=new google.maps.LatLng(e.lat(),e.lng());b.markers[c]&&b.markers[c].setPosition(f),b.circles[c]&&b.circles[c].setCenter(f),b.o["on"+a+"Changed"](c,d,b[a].getPath().getArray())})},b.prototype.create={marker:function(a,b,c){var d;return"circle"!==b.type||c||(d=this.create_objCircle(b),b.visible||(d.draggable=b.draggable),c=new google.maps.Circle(d),this.add_circleEv(a,d,c),this.circles[a]=c),b.type="marker",c=new google.maps.Marker(b),this.add_markerEv(a,b,c),this.oBounds.extend(b.position),this.markers[a]=c,this.o.afterCreateMarker(a,b,c),c},circle:function(){var a,b,c,d;for(a=0;a<this.ln;a++)b=this.create_objPoint(a),"circle"===b.type&&(c=this.create_objCircle(b),b.visible||(c.draggable=b.draggable),d=new google.maps.Circle(c),this.add_circleEv(a,c,d),this.circles[a]=d),b.type="marker",this.create.marker.call(this,a,b,d)},polyline:function(){var b,c,d=a.extend({},this.o.stroke_options);for(d.path=[],d.draggable=this.o.draggable,d.editable=this.o.editable,d.map=this.oMap,d.zIndex=this.o.maxZIndex+100,b=0;b<this.ln;b++)c=this.create_objPoint(b),this.create.marker.call(this,b,c),d.path.push(c.position);this.Polyline?this.Polyline.setOptions(d):this.Polyline=new google.maps.Polyline(d),this.add_polyEv("Polyline")},polygon:function(){var b,c,d=this,e=a.extend({},this.o.stroke_options);for(e.path=[],e.draggable=this.o.draggable,e.editable=this.o.editable,e.map=this.oMap,e.zIndex=this.o.maxZIndex+100,b=0;b<this.ln;b++)c=this.create_objPoint(b),this.create.marker.call(this,b,c),e.path.push(c.position);this.Polygon?this.Polygon.setOptions(e):this.Polygon=new google.maps.Polygon(e),google.maps.event.addListener(this.Polygon,"click",function(a){d.o.onPolygonClick(a)}),this.add_polyEv("Polygon")},fusion:function(){this.o.fusion_options.styles=[this.o.stroke_options],this.o.fusion_options.map=this.oMap,this.Fusion?this.Fusion.setOptions(this.o.fusion_options):this.Fusion=new google.maps.FusionTablesLayer(this.o.fusion_options)},directions:function(){var b,c,d,e,f,g=this,h=[],i=0;for(b=0;b<this.ln;b++)c=this.create_objPoint(b),0===b?e=c.position:b===this.ln-1?f=c.position:(d=this.o.locations[b].stopover===!0,h.push({location:c.position,stopover:d})),this.create.marker.call(this,b,c);this.o.directions_options.origin=e,this.o.directions_options.destination=f,this.o.directions_options.waypoints=h,this.directionsService||(this.directionsService=new google.maps.DirectionsService),this.directionsDisplay?this.directionsDisplay.setOptions({draggable:this.o.draggable}):this.directionsDisplay=new google.maps.DirectionsRenderer({draggable:this.o.draggable}),this.directionsDisplay.setMap(this.oMap),this.o.directions_panel&&(this.o.directions_panel=a(this.o.directions_panel),this.directionsDisplay.setPanel(this.o.directions_panel.get(0))),this.o.draggable&&google.maps.event.addListener(this.directionsDisplay,"directions_changed",function(){i=g.compute_distance(g.directionsDisplay.directions),g.o.afterRoute(i)}),this.directionsService.route(this.o.directions_options,function(a,b){b===google.maps.DirectionsStatus.OK&&(i=g.compute_distance(a),g.directionsDisplay.setDirections(a)),g.o.afterRoute(i,b,a)})}},b.prototype.compute_distance=function(a){var b,c=0,d=a.routes[0],e=d.legs.length;for(b=0;e>b;b++)c+=d.legs[b].distance.value;return c},b.prototype.type_to_open={bubble:function(a){this.infowindow=new google.maps.InfoWindow({content:a.html||""})}},b.prototype.open_infowindow=function(a,b,c){this.CloseInfoWindow();var d=this.o.locations[a],e=this.o.infowindow_type;d.html&&this.type_to_open[e]&&(this.o.beforeOpenInfowindow(a,d,b),this.type_to_open[e].call(this,d),this.infowindow.open(this.oMap,b),this.o.afterOpenInfowindow(a,d,b))},b.prototype.get_html_controls=function(){return this.controls[this.o.controls_type]&&this.controls[this.o.controls_type].getHtml?(this.current_control=this.controls[this.o.controls_type],this.current_control.getHtml.apply(this)):""},b.prototype.generate_controls=function(){if(!this.o.controls_on_map)return this.controls_wrapper.empty(),void this.controls_wrapper.append(this.get_html_controls());var b=a('<div class="on_gmap '+this.o.controls_type+' gmap_controls"></div>').css(this.o.controls_applycss?{margin:"5px"}:{}),c=a(this.get_html_controls()).css(this.o.controls_applycss?{background:"#fff",padding:"5px",border:"1px solid #eee",boxShadow:"rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px",maxHeight:this.map_div.find(".canvas_map").outerHeight()-80,minWidth:100,overflowY:"auto",overflowX:"hidden"}:{});b.append(c),this.oMap.controls[this.o.controls_position].push(b.get(0))},b.prototype.init_map=function(){var a=this;this.Polyline&&this.Polyline.setMap(null),this.Polygon&&this.Polygon.setMap(null),this.Fusion&&this.Fusion.setMap(null),this.directionsDisplay&&this.directionsDisplay.setMap(null);for(var b=this.markers.length-1;b>=0;b-=1)try{this.markers[b]&&this.markers[b].setMap(null)}catch(c){a.debug("init_map::markers::setMap",c.stack)}this.markers.length=0,this.markers=[];for(var d=this.circles.length-1;d>=0;d-=1)try{this.circles[d]&&this.circles[d].setMap(null)}catch(c){a.debug("init_map::circles::setMap",c.stack)}this.circles.length=0,this.circles=[],this.o.controls_on_map&&this.oMap.controls&&this.oMap.controls[this.o.controls_position].forEach(function(b,c){try{a.oMap.controls[this.o.controls_position].removeAt(c)}catch(d){a.debug("init_map::removeAt",d.stack)}}),this.oBounds=new google.maps.LatLngBounds},b.prototype.perform_load=function(){1===this.ln?(this.o.map_options.set_center?this.oMap.setCenter(new google.maps.LatLng(this.o.map_options.set_center[0],this.o.map_options.set_center[1])):(this.oMap.fitBounds(this.oBounds),this.ViewOnMap(1)),this.o.map_options.zoom&&this.oMap.setZoom(this.o.map_options.zoom)):0===this.ln?(this.o.map_options.set_center?this.oMap.setCenter(new google.maps.LatLng(this.o.map_options.set_center[0],this.o.map_options.set_center[1])):this.oMap.fitBounds(this.oBounds),this.oMap.setZoom(this.o.map_options.zoom||1)):(this.oMap.fitBounds(this.oBounds),"number"==typeof(this.o.start-0)&&this.o.start>0&&this.o.start<=this.ln?this.ViewOnMap(this.o.start):this.o.map_options.set_center?this.oMap.setCenter(new google.maps.LatLng(this.o.map_options.set_center[0],this.o.map_options.set_center[1])):this.ViewOnMap(this.view_all_key),this.o.map_options.zoom&&this.oMap.setZoom(this.o.map_options.zoom))},b.prototype.debug=function(a,b){return this.o.debug&&console.log(a,b),this},b.prototype.AddControl=function(a,b){return a&&b?(this.controls[a]=b,this):(self.debug("AddControl",'Missing "name" and "func" callback.'),!1)},b.prototype.CloseInfoWindow=function(){return this.infowindow&&(this.current_index||0===this.current_index)&&(this.o.beforeCloseInfowindow(this.current_index,this.o.locations[this.current_index]),this.infowindow.close(),this.infowindow=null,this.o.afterCloseInfowindow(this.current_index,this.o.locations[this.current_index])),this},b.prototype.ShowOnMenu=function(a){if(a===this.view_all_key&&this.o.view_all&&this.ln>1)return!0;if(a=parseInt(a,10),"number"==typeof(a-0)&&a>=0&&a<this.ln){var b=this.o.locations[a].on_menu!==!1;if(b)return!0}return!1},b.prototype.ViewOnMap=function(a){if(a===this.view_all_key)this.o.beforeViewAll(),this.current_index=a,this.o.locations.length>0&&this.o.generate_controls&&this.current_control&&this.current_control.activateCurrent&&this.current_control.activateCurrent.apply(this,[a]),this.oMap.fitBounds(this.oBounds),this.CloseInfoWindow(),this.o.afterViewAll();else if(a=parseInt(a,10),"number"==typeof(a-0)&&a>0&&a<=this.ln)try{google.maps.event.trigger(this.markers[a-1],"click")}catch(b){this.debug("ViewOnMap::trigger",b.stack)}return this},b.prototype.SetLocations=function(a,b){return this.o.locations=a,b&&this.Load(),this},b.prototype.AddLocations=function(b,c){var d=this;return a.isArray(b)&&a.each(b,function(a,b){d.o.locations.push(b)}),a.isPlainObject(b)&&this.o.locations.push(b),c&&this.Load(),this},b.prototype.AddLocation=function(b,c,d){return a.isPlainObject(b)&&this.o.locations.splice(c,0,b),d&&this.Load(),this},b.prototype.RemoveLocations=function(b,c){var d=this,e=0;return a.isArray(b)?a.each(b,function(a,b){b-e<d.ln&&d.o.locations.splice(b-e,1),e++}):b<this.ln&&this.o.locations.splice(b,1),c&&this.Load(),this},b.prototype.Loaded=function(){return this.loaded},b.prototype._init=function(){this.ln=this.o.locations.length;for(var b=0;b<this.ln;b++){var c=a.extend({},this.o.shared);this.o.locations[b]=a.extend(c,this.o.locations[b]),this.o.locations[b].html&&(this.o.locations[b].html=this.o.locations[b].html.replace("%index",b+1),this.o.locations[b].html=this.o.locations[b].html.replace("%title",this.o.locations[b].title||""))}return this.map_div=a(this.o.map_div),this.controls_wrapper=a(this.o.controls_div),this},b.prototype.Load=function(b){a.extend(!0,this.o,b),b&&b.locations&&(this.o.locations=b.locations),this._init(),this.o.visualRefresh===!1?google.maps.visualRefresh=!1:google.maps.visualRefresh=!0,this.init_map(),this.create_objMap(),this.add_markers_to_objMap(),this.ln>1&&this.o.generate_controls||this.o.force_generate_controls?(this.o.generate_controls=!0,this.generate_controls()):this.o.generate_controls=!1;var c=this;if(this.loaded)this.perform_load();else{google.maps.event.addListenerOnce(this.oMap,"idle",function(){c.perform_load()});for(var d in this.o.listeners)this.o.listeners.hasOwnProperty(d)&&google.maps.event.addListener(this.oMap,d,this.o.listeners[d])}return this.loaded=!0,this},b});

/*! =======================================================
                      VERSION  7.1.1              
========================================================= */
"use strict";function _typeof(a){return a&&"undefined"!=typeof Symbol&&a.constructor===Symbol?"symbol":typeof a}/*! =========================================================
 * bootstrap-slider.js
 *
 * Maintainers:
 *      Kyle Kemp
 *          - Twitter: @seiyria
 *          - Github:  seiyria
 *      Rohit Kalkur
 *          - Twitter: @Rovolutionary
 *          - Github:  rovolution
 *
 * =========================================================
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
!function(a){if("function"==typeof define&&define.amd)try{define(["jquery"],a)}catch(b){define([],a)}else if("object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports){var c;try{c=require("jquery")}catch(b){c=null}module.exports=a(c)}else window&&(window.Slider=a(window.jQuery))}(function(a){var b;return function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l&&l!==k)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}var m=this.map(function(){var d=a.data(this,b);return d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d)),a(this)});return!m||m.length>1?m:m[0]}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;c(a)}(a),function(a){function c(b,c){function d(a,b){var c="data-slider-"+b.replace(/_/g,"-"),d=a.getAttribute(c);try{return JSON.parse(d)}catch(e){return d}}this._state={value:null,enabled:null,offset:null,size:null,percentage:null,inDrag:!1,over:!1},"string"==typeof b?this.element=document.querySelector(b):b instanceof HTMLElement&&(this.element=b),c=c?c:{};for(var f=Object.keys(this.defaultOptions),g=0;g<f.length;g++){var h=f[g],i=c[h];i="undefined"!=typeof i?i:d(this.element,h),i=null!==i?i:this.defaultOptions[h],this.options||(this.options={}),this.options[h]=i}"vertical"!==this.options.orientation||"top"!==this.options.tooltip_position&&"bottom"!==this.options.tooltip_position?"horizontal"!==this.options.orientation||"left"!==this.options.tooltip_position&&"right"!==this.options.tooltip_position||(this.options.tooltip_position="top"):this.options.tooltip_position="right";var j,k,l,m,n,o=this.element.style.width,p=!1,q=this.element.parentNode;if(this.sliderElem)p=!0;else{this.sliderElem=document.createElement("div"),this.sliderElem.className="slider";var r=document.createElement("div");r.className="slider-track",k=document.createElement("div"),k.className="slider-track-low",j=document.createElement("div"),j.className="slider-selection",l=document.createElement("div"),l.className="slider-track-high",m=document.createElement("div"),m.className="slider-handle min-slider-handle",m.setAttribute("role","slider"),m.setAttribute("aria-valuemin",this.options.min),m.setAttribute("aria-valuemax",this.options.max),n=document.createElement("div"),n.className="slider-handle max-slider-handle",n.setAttribute("role","slider"),n.setAttribute("aria-valuemin",this.options.min),n.setAttribute("aria-valuemax",this.options.max),r.appendChild(k),r.appendChild(j),r.appendChild(l);var s=Array.isArray(this.options.labelledby);if(s&&this.options.labelledby[0]&&m.setAttribute("aria-labelledby",this.options.labelledby[0]),s&&this.options.labelledby[1]&&n.setAttribute("aria-labelledby",this.options.labelledby[1]),!s&&this.options.labelledby&&(m.setAttribute("aria-labelledby",this.options.labelledby),n.setAttribute("aria-labelledby",this.options.labelledby)),this.ticks=[],Array.isArray(this.options.ticks)&&this.options.ticks.length>0){for(g=0;g<this.options.ticks.length;g++){var t=document.createElement("div");t.className="slider-tick",this.ticks.push(t),r.appendChild(t)}j.className+=" tick-slider-selection"}if(r.appendChild(m),r.appendChild(n),this.tickLabels=[],Array.isArray(this.options.ticks_labels)&&this.options.ticks_labels.length>0)for(this.tickLabelContainer=document.createElement("div"),this.tickLabelContainer.className="slider-tick-label-container",g=0;g<this.options.ticks_labels.length;g++){var u=document.createElement("div"),v=0===this.options.ticks_positions.length,w=this.options.reversed&&v?this.options.ticks_labels.length-(g+1):g;u.className="slider-tick-label",u.innerHTML=this.options.ticks_labels[w],this.tickLabels.push(u),this.tickLabelContainer.appendChild(u)}var x=function(a){var b=document.createElement("div");b.className="tooltip-arrow";var c=document.createElement("div");c.className="tooltip-inner",a.appendChild(b),a.appendChild(c)},y=document.createElement("div");y.className="tooltip tooltip-main",y.setAttribute("role","presentation"),x(y);var z=document.createElement("div");z.className="tooltip tooltip-min",z.setAttribute("role","presentation"),x(z);var A=document.createElement("div");A.className="tooltip tooltip-max",A.setAttribute("role","presentation"),x(A),this.sliderElem.appendChild(r),this.sliderElem.appendChild(y),this.sliderElem.appendChild(z),this.sliderElem.appendChild(A),this.tickLabelContainer&&this.sliderElem.appendChild(this.tickLabelContainer),q.insertBefore(this.sliderElem,this.element),this.element.style.display="none"}if(a&&(this.$element=a(this.element),this.$sliderElem=a(this.sliderElem)),this.eventToCallbackMap={},this.sliderElem.id=this.options.id,this.touchCapable="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,this.touchX=0,this.touchY=0,this.tooltip=this.sliderElem.querySelector(".tooltip-main"),this.tooltipInner=this.tooltip.querySelector(".tooltip-inner"),this.tooltip_min=this.sliderElem.querySelector(".tooltip-min"),this.tooltipInner_min=this.tooltip_min.querySelector(".tooltip-inner"),this.tooltip_max=this.sliderElem.querySelector(".tooltip-max"),this.tooltipInner_max=this.tooltip_max.querySelector(".tooltip-inner"),e[this.options.scale]&&(this.options.scale=e[this.options.scale]),p===!0&&(this._removeClass(this.sliderElem,"slider-horizontal"),this._removeClass(this.sliderElem,"slider-vertical"),this._removeClass(this.tooltip,"hide"),this._removeClass(this.tooltip_min,"hide"),this._removeClass(this.tooltip_max,"hide"),["left","top","width","height"].forEach(function(a){this._removeProperty(this.trackLow,a),this._removeProperty(this.trackSelection,a),this._removeProperty(this.trackHigh,a)},this),[this.handle1,this.handle2].forEach(function(a){this._removeProperty(a,"left"),this._removeProperty(a,"top")},this),[this.tooltip,this.tooltip_min,this.tooltip_max].forEach(function(a){this._removeProperty(a,"left"),this._removeProperty(a,"top"),this._removeProperty(a,"margin-left"),this._removeProperty(a,"margin-top"),this._removeClass(a,"right"),this._removeClass(a,"top")},this)),"vertical"===this.options.orientation?(this._addClass(this.sliderElem,"slider-vertical"),this.stylePos="top",this.mousePos="pageY",this.sizePos="offsetHeight"):(this._addClass(this.sliderElem,"slider-horizontal"),this.sliderElem.style.width=o,this.options.orientation="horizontal",this.stylePos="left",this.mousePos="pageX",this.sizePos="offsetWidth"),this._setTooltipPosition(),Array.isArray(this.options.ticks)&&this.options.ticks.length>0&&(this.options.max=Math.max.apply(Math,this.options.ticks),this.options.min=Math.min.apply(Math,this.options.ticks)),Array.isArray(this.options.value)?(this.options.range=!0,this._state.value=this.options.value):this.options.range?this._state.value=[this.options.value,this.options.max]:this._state.value=this.options.value,this.trackLow=k||this.trackLow,this.trackSelection=j||this.trackSelection,this.trackHigh=l||this.trackHigh,"none"===this.options.selection&&(this._addClass(this.trackLow,"hide"),this._addClass(this.trackSelection,"hide"),this._addClass(this.trackHigh,"hide")),this.handle1=m||this.handle1,this.handle2=n||this.handle2,p===!0)for(this._removeClass(this.handle1,"round triangle"),this._removeClass(this.handle2,"round triangle hide"),g=0;g<this.ticks.length;g++)this._removeClass(this.ticks[g],"round triangle hide");var B=["round","triangle","custom"],C=-1!==B.indexOf(this.options.handle);if(C)for(this._addClass(this.handle1,this.options.handle),this._addClass(this.handle2,this.options.handle),g=0;g<this.ticks.length;g++)this._addClass(this.ticks[g],this.options.handle);this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this.setValue(this._state.value),this.handle1Keydown=this._keydown.bind(this,0),this.handle1.addEventListener("keydown",this.handle1Keydown,!1),this.handle2Keydown=this._keydown.bind(this,1),this.handle2.addEventListener("keydown",this.handle2Keydown,!1),this.mousedown=this._mousedown.bind(this),this.touchstart=this._touchstart.bind(this),this.touchmove=this._touchmove.bind(this),this.touchCapable&&(this.sliderElem.addEventListener("touchstart",this.touchstart,!1),this.sliderElem.addEventListener("touchmove",this.touchmove,!1)),this.sliderElem.addEventListener("mousedown",this.mousedown,!1),this.resize=this._resize.bind(this),window.addEventListener("resize",this.resize,!1),"hide"===this.options.tooltip?(this._addClass(this.tooltip,"hide"),this._addClass(this.tooltip_min,"hide"),this._addClass(this.tooltip_max,"hide")):"always"===this.options.tooltip?(this._showTooltip(),this._alwaysShowTooltip=!0):(this.showTooltip=this._showTooltip.bind(this),this.hideTooltip=this._hideTooltip.bind(this),this.sliderElem.addEventListener("mouseenter",this.showTooltip,!1),this.sliderElem.addEventListener("mouseleave",this.hideTooltip,!1),this.handle1.addEventListener("focus",this.showTooltip,!1),this.handle1.addEventListener("blur",this.hideTooltip,!1),this.handle2.addEventListener("focus",this.showTooltip,!1),this.handle2.addEventListener("blur",this.hideTooltip,!1)),this.options.enabled?this.enable():this.disable()}var d={formatInvalidInputErrorMsg:function(a){return"Invalid input value '"+a+"' passed in"},callingContextNotSliderInstance:"Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"},e={linear:{toValue:function(a){var b=a/100*(this.options.max-this.options.min),c=!0;if(this.options.ticks_positions.length>0){for(var d,e,f,g=0,h=1;h<this.options.ticks_positions.length;h++)if(a<=this.options.ticks_positions[h]){d=this.options.ticks[h-1],f=this.options.ticks_positions[h-1],e=this.options.ticks[h],g=this.options.ticks_positions[h];break}var i=(a-f)/(g-f);b=d+i*(e-d),c=!1}var j=c?this.options.min:0,k=j+Math.round(b/this.options.step)*this.options.step;return k<this.options.min?this.options.min:k>this.options.max?this.options.max:k},toPercentage:function(a){if(this.options.max===this.options.min)return 0;if(this.options.ticks_positions.length>0){for(var b,c,d,e=0,f=0;f<this.options.ticks.length;f++)if(a<=this.options.ticks[f]){b=f>0?this.options.ticks[f-1]:0,d=f>0?this.options.ticks_positions[f-1]:0,c=this.options.ticks[f],e=this.options.ticks_positions[f];break}if(f>0){var g=(a-b)/(c-b);return d+g*(e-d)}}return 100*(a-this.options.min)/(this.options.max-this.options.min)}},logarithmic:{toValue:function(a){var b=0===this.options.min?0:Math.log(this.options.min),c=Math.log(this.options.max),d=Math.exp(b+(c-b)*a/100);return d=this.options.min+Math.round((d-this.options.min)/this.options.step)*this.options.step,d<this.options.min?this.options.min:d>this.options.max?this.options.max:d},toPercentage:function(a){if(this.options.max===this.options.min)return 0;var b=Math.log(this.options.max),c=0===this.options.min?0:Math.log(this.options.min),d=0===a?0:Math.log(a);return 100*(d-c)/(b-c)}}};if(b=function(a,b){return c.call(this,a,b),this},b.prototype={_init:function(){},constructor:b,defaultOptions:{id:"",min:0,max:10,step:1,precision:0,orientation:"horizontal",value:5,range:!1,selection:"before",tooltip:"show",tooltip_split:!1,handle:"round",reversed:!1,enabled:!0,formatter:function(a){return Array.isArray(a)?a[0]+" : "+a[1]:a},natural_arrow_keys:!1,ticks:[],ticks_positions:[],ticks_labels:[],ticks_snap_bounds:0,scale:"linear",focus:!1,tooltip_position:null,labelledby:null},getElement:function(){return this.sliderElem},getValue:function(){return this.options.range?this._state.value:this._state.value[0]},setValue:function(a,b,c){a||(a=0);var d=this.getValue();this._state.value=this._validateInputValue(a);var e=this._applyPrecision.bind(this);this.options.range?(this._state.value[0]=e(this._state.value[0]),this._state.value[1]=e(this._state.value[1]),this._state.value[0]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[0])),this._state.value[1]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[1]))):(this._state.value=e(this._state.value),this._state.value=[Math.max(this.options.min,Math.min(this.options.max,this._state.value))],this._addClass(this.handle2,"hide"),"after"===this.options.selection?this._state.value[1]=this.options.max:this._state.value[1]=this.options.min),this.options.max>this.options.min?this._state.percentage=[this._toPercentage(this._state.value[0]),this._toPercentage(this._state.value[1]),100*this.options.step/(this.options.max-this.options.min)]:this._state.percentage=[0,0,100],this._layout();var f=this.options.range?this._state.value:this._state.value[0];return this._setDataVal(f),b===!0&&this._trigger("slide",f),d!==f&&c===!0&&this._trigger("change",{oldValue:d,newValue:f}),this},destroy:function(){this._removeSliderEventHandlers(),this.sliderElem.parentNode.removeChild(this.sliderElem),this.element.style.display="",this._cleanUpEventCallbacksMap(),this.element.removeAttribute("data"),a&&(this._unbindJQueryEventHandlers(),this.$element.removeData("slider"))},disable:function(){return this._state.enabled=!1,this.handle1.removeAttribute("tabindex"),this.handle2.removeAttribute("tabindex"),this._addClass(this.sliderElem,"slider-disabled"),this._trigger("slideDisabled"),this},enable:function(){return this._state.enabled=!0,this.handle1.setAttribute("tabindex",0),this.handle2.setAttribute("tabindex",0),this._removeClass(this.sliderElem,"slider-disabled"),this._trigger("slideEnabled"),this},toggle:function(){return this._state.enabled?this.disable():this.enable(),this},isEnabled:function(){return this._state.enabled},on:function(a,b){return this._bindNonQueryEventHandler(a,b),this},off:function(b,c){a?(this.$element.off(b,c),this.$sliderElem.off(b,c)):this._unbindNonQueryEventHandler(b,c)},getAttribute:function(a){return a?this.options[a]:this.options},setAttribute:function(a,b){return this.options[a]=b,this},refresh:function(){return this._removeSliderEventHandlers(),c.call(this,this.element,this.options),a&&a.data(this.element,"slider",this),this},relayout:function(){return this._resize(),this._layout(),this},_removeSliderEventHandlers:function(){this.handle1.removeEventListener("keydown",this.handle1Keydown,!1),this.handle2.removeEventListener("keydown",this.handle2Keydown,!1),this.showTooltip&&(this.handle1.removeEventListener("focus",this.showTooltip,!1),this.handle2.removeEventListener("focus",this.showTooltip,!1)),this.hideTooltip&&(this.handle1.removeEventListener("blur",this.hideTooltip,!1),this.handle2.removeEventListener("blur",this.hideTooltip,!1)),this.showTooltip&&this.sliderElem.removeEventListener("mouseenter",this.showTooltip,!1),this.hideTooltip&&this.sliderElem.removeEventListener("mouseleave",this.hideTooltip,!1),this.sliderElem.removeEventListener("touchstart",this.touchstart,!1),this.sliderElem.removeEventListener("touchmove",this.touchmove,!1),this.sliderElem.removeEventListener("mousedown",this.mousedown,!1),window.removeEventListener("resize",this.resize,!1)},_bindNonQueryEventHandler:function(a,b){void 0===this.eventToCallbackMap[a]&&(this.eventToCallbackMap[a]=[]),this.eventToCallbackMap[a].push(b)},_unbindNonQueryEventHandler:function(a,b){var c=this.eventToCallbackMap[a];if(void 0!==c)for(var d=0;d<c.length;d++)if(c[d]===b){c.splice(d,1);break}},_cleanUpEventCallbacksMap:function(){for(var a=Object.keys(this.eventToCallbackMap),b=0;b<a.length;b++){var c=a[b];this.eventToCallbackMap[c]=null}},_showTooltip:function(){this.options.tooltip_split===!1?(this._addClass(this.tooltip,"in"),this.tooltip_min.style.display="none",this.tooltip_max.style.display="none"):(this._addClass(this.tooltip_min,"in"),this._addClass(this.tooltip_max,"in"),this.tooltip.style.display="none"),this._state.over=!0},_hideTooltip:function(){this._state.inDrag===!1&&this.alwaysShowTooltip!==!0&&(this._removeClass(this.tooltip,"in"),this._removeClass(this.tooltip_min,"in"),this._removeClass(this.tooltip_max,"in")),this._state.over=!1},_layout:function(){var a;if(a=this.options.reversed?[100-this._state.percentage[0],this.options.range?100-this._state.percentage[1]:this._state.percentage[1]]:[this._state.percentage[0],this._state.percentage[1]],this.handle1.style[this.stylePos]=a[0]+"%",this.handle1.setAttribute("aria-valuenow",this._state.value[0]),this.handle2.style[this.stylePos]=a[1]+"%",this.handle2.setAttribute("aria-valuenow",this._state.value[1]),Array.isArray(this.options.ticks)&&this.options.ticks.length>0){var b="vertical"===this.options.orientation?"height":"width",c="vertical"===this.options.orientation?"marginTop":"marginLeft",d=this._state.size/(this.options.ticks.length-1);if(this.tickLabelContainer){var e=0;if(0===this.options.ticks_positions.length)"vertical"!==this.options.orientation&&(this.tickLabelContainer.style[c]=-d/2+"px"),e=this.tickLabelContainer.offsetHeight;else for(f=0;f<this.tickLabelContainer.childNodes.length;f++)this.tickLabelContainer.childNodes[f].offsetHeight>e&&(e=this.tickLabelContainer.childNodes[f].offsetHeight);"horizontal"===this.options.orientation&&(this.sliderElem.style.marginBottom=e+"px")}for(var f=0;f<this.options.ticks.length;f++){var g=this.options.ticks_positions[f]||this._toPercentage(this.options.ticks[f]);this.options.reversed&&(g=100-g),this.ticks[f].style[this.stylePos]=g+"%",this._removeClass(this.ticks[f],"in-selection"),this.options.range?g>=a[0]&&g<=a[1]&&this._addClass(this.ticks[f],"in-selection"):"after"===this.options.selection&&g>=a[0]?this._addClass(this.ticks[f],"in-selection"):"before"===this.options.selection&&g<=a[0]&&this._addClass(this.ticks[f],"in-selection"),this.tickLabels[f]&&(this.tickLabels[f].style[b]=d+"px","vertical"!==this.options.orientation&&void 0!==this.options.ticks_positions[f]?(this.tickLabels[f].style.position="absolute",this.tickLabels[f].style[this.stylePos]=g+"%",this.tickLabels[f].style[c]=-d/2+"px"):"vertical"===this.options.orientation&&(this.tickLabels[f].style.marginLeft=this.sliderElem.offsetWidth+"px",this.tickLabelContainer.style.marginTop=this.sliderElem.offsetWidth/2*-1+"px"))}}var h;if(this.options.range){h=this.options.formatter(this._state.value),this._setText(this.tooltipInner,h),this.tooltip.style[this.stylePos]=(a[1]+a[0])/2+"%","vertical"===this.options.orientation?this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px"):this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px"),"vertical"===this.options.orientation?this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px"):this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px");var i=this.options.formatter(this._state.value[0]);this._setText(this.tooltipInner_min,i);var j=this.options.formatter(this._state.value[1]);this._setText(this.tooltipInner_max,j),this.tooltip_min.style[this.stylePos]=a[0]+"%","vertical"===this.options.orientation?this._css(this.tooltip_min,"margin-top",-this.tooltip_min.offsetHeight/2+"px"):this._css(this.tooltip_min,"margin-left",-this.tooltip_min.offsetWidth/2+"px"),this.tooltip_max.style[this.stylePos]=a[1]+"%","vertical"===this.options.orientation?this._css(this.tooltip_max,"margin-top",-this.tooltip_max.offsetHeight/2+"px"):this._css(this.tooltip_max,"margin-left",-this.tooltip_max.offsetWidth/2+"px")}else h=this.options.formatter(this._state.value[0]),this._setText(this.tooltipInner,h),this.tooltip.style[this.stylePos]=a[0]+"%","vertical"===this.options.orientation?this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px"):this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px");if("vertical"===this.options.orientation)this.trackLow.style.top="0",this.trackLow.style.height=Math.min(a[0],a[1])+"%",this.trackSelection.style.top=Math.min(a[0],a[1])+"%",this.trackSelection.style.height=Math.abs(a[0]-a[1])+"%",this.trackHigh.style.bottom="0",this.trackHigh.style.height=100-Math.min(a[0],a[1])-Math.abs(a[0]-a[1])+"%";else{this.trackLow.style.left="0",this.trackLow.style.width=Math.min(a[0],a[1])+"%",this.trackSelection.style.left=Math.min(a[0],a[1])+"%",this.trackSelection.style.width=Math.abs(a[0]-a[1])+"%",this.trackHigh.style.right="0",this.trackHigh.style.width=100-Math.min(a[0],a[1])-Math.abs(a[0]-a[1])+"%";var k=this.tooltip_min.getBoundingClientRect(),l=this.tooltip_max.getBoundingClientRect();"bottom"===this.options.tooltip_position?k.right>l.left?(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top="",this.tooltip_max.style.bottom="22px"):(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top=this.tooltip_min.style.top,this.tooltip_max.style.bottom=""):k.right>l.left?(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top="18px"):(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top=this.tooltip_min.style.top)}},_resize:function(a){this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this._layout()},_removeProperty:function(a,b){a.style.removeProperty?a.style.removeProperty(b):a.style.removeAttribute(b)},_mousedown:function(a){if(!this._state.enabled)return!1;this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos];var b=this._getPercentage(a);if(this.options.range){var c=Math.abs(this._state.percentage[0]-b),d=Math.abs(this._state.percentage[1]-b);this._state.dragged=d>c?0:1,this._adjustPercentageForRangeSliders(b)}else this._state.dragged=0;this._state.percentage[this._state.dragged]=b,this._layout(),this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),this.mousemove&&document.removeEventListener("mousemove",this.mousemove,!1),this.mouseup&&document.removeEventListener("mouseup",this.mouseup,!1),this.mousemove=this._mousemove.bind(this),this.mouseup=this._mouseup.bind(this),this.touchCapable&&(document.addEventListener("touchmove",this.mousemove,!1),document.addEventListener("touchend",this.mouseup,!1)),document.addEventListener("mousemove",this.mousemove,!1),document.addEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!0;var e=this._calculateValue();return this._trigger("slideStart",e),this._setDataVal(e),this.setValue(e,!1,!0),this._pauseEvent(a),this.options.focus&&this._triggerFocusOnHandle(this._state.dragged),!0},_touchstart:function(a){if(void 0===a.changedTouches)return void this._mousedown(a);var b=a.changedTouches[0];this.touchX=b.pageX,this.touchY=b.pageY},_triggerFocusOnHandle:function(a){0===a&&this.handle1.focus(),1===a&&this.handle2.focus()},_keydown:function(a,b){if(!this._state.enabled)return!1;var c;switch(b.keyCode){case 37:case 40:c=-1;break;case 39:case 38:c=1}if(c){if(this.options.natural_arrow_keys){var d="vertical"===this.options.orientation&&!this.options.reversed,e="horizontal"===this.options.orientation&&this.options.reversed;(d||e)&&(c=-c)}var f=this._state.value[a]+c*this.options.step;return this.options.range&&(f=[a?this._state.value[0]:f,a?f:this._state.value[1]]),this._trigger("slideStart",f),this._setDataVal(f),this.setValue(f,!0,!0),this._setDataVal(f),this._trigger("slideStop",f),this._layout(),this._pauseEvent(b),!1}},_pauseEvent:function(a){a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),a.cancelBubble=!0,a.returnValue=!1},_mousemove:function(a){if(!this._state.enabled)return!1;var b=this._getPercentage(a);this._adjustPercentageForRangeSliders(b),this._state.percentage[this._state.dragged]=b,this._layout();var c=this._calculateValue(!0);return this.setValue(c,!0,!0),!1},_touchmove:function(a){if(void 0!==a.changedTouches){var b=a.changedTouches[0],c=b.pageX-this.touchX,d=b.pageY-this.touchY;this._state.inDrag||("vertical"===this.options.orientation&&5>=c&&c>=-5&&(d>=15||-15>=d)?this._mousedown(a):5>=d&&d>=-5&&(c>=15||-15>=c)&&this._mousedown(a))}},_adjustPercentageForRangeSliders:function(a){if(this.options.range){var b=this._getNumDigitsAfterDecimalPlace(a);b=b?b-1:0;var c=this._applyToFixedAndParseFloat(a,b);0===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[1],b)<c?(this._state.percentage[0]=this._state.percentage[1],this._state.dragged=1):1===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[0],b)>c&&(this._state.percentage[1]=this._state.percentage[0],this._state.dragged=0)}},_mouseup:function(){if(!this._state.enabled)return!1;this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),document.removeEventListener("mousemove",this.mousemove,!1),document.removeEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!1,this._state.over===!1&&this._hideTooltip();var a=this._calculateValue(!0);return this._layout(),this._setDataVal(a),this._trigger("slideStop",a),!1},_calculateValue:function(a){var b;if(this.options.range?(b=[this.options.min,this.options.max],0!==this._state.percentage[0]&&(b[0]=this._toValue(this._state.percentage[0]),b[0]=this._applyPrecision(b[0])),100!==this._state.percentage[1]&&(b[1]=this._toValue(this._state.percentage[1]),b[1]=this._applyPrecision(b[1]))):(b=this._toValue(this._state.percentage[0]),b=parseFloat(b),b=this._applyPrecision(b)),a){for(var c=[b,1/0],d=0;d<this.options.ticks.length;d++){var e=Math.abs(this.options.ticks[d]-b);e<=c[1]&&(c=[this.options.ticks[d],e])}if(c[1]<=this.options.ticks_snap_bounds)return c[0]}return b},_applyPrecision:function(a){var b=this.options.precision||this._getNumDigitsAfterDecimalPlace(this.options.step);return this._applyToFixedAndParseFloat(a,b)},_getNumDigitsAfterDecimalPlace:function(a){var b=(""+a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return b?Math.max(0,(b[1]?b[1].length:0)-(b[2]?+b[2]:0)):0},_applyToFixedAndParseFloat:function(a,b){var c=a.toFixed(b);return parseFloat(c)},_getPercentage:function(a){!this.touchCapable||"touchstart"!==a.type&&"touchmove"!==a.type||(a=a.touches[0]);var b=a[this.mousePos],c=this._state.offset[this.stylePos],d=b-c,e=d/this._state.size*100;return e=Math.round(e/this._state.percentage[2])*this._state.percentage[2],this.options.reversed&&(e=100-e),Math.max(0,Math.min(100,e))},_validateInputValue:function(a){if("number"==typeof a)return a;if(Array.isArray(a))return this._validateArray(a),a;throw new Error(d.formatInvalidInputErrorMsg(a))},_validateArray:function(a){for(var b=0;b<a.length;b++){var c=a[b];if("number"!=typeof c)throw new Error(d.formatInvalidInputErrorMsg(c))}},_setDataVal:function(a){this.element.setAttribute("data-value",a),this.element.setAttribute("value",a),this.element.value=a},_trigger:function(b,c){c=c||0===c?c:void 0;var d=this.eventToCallbackMap[b];if(d&&d.length)for(var e=0;e<d.length;e++){var f=d[e];f(c)}a&&this._triggerJQueryEvent(b,c)},_triggerJQueryEvent:function(a,b){var c={type:a,value:b};this.$element.trigger(c),this.$sliderElem.trigger(c)},_unbindJQueryEventHandlers:function(){this.$element.off(),this.$sliderElem.off()},_setText:function(a,b){"undefined"!=typeof a.textContent?a.textContent=b:"undefined"!=typeof a.innerText&&(a.innerText=b)},_removeClass:function(a,b){for(var c=b.split(" "),d=a.className,e=0;e<c.length;e++){var f=c[e],g=new RegExp("(?:\\s|^)"+f+"(?:\\s|$)");d=d.replace(g," ")}a.className=d.trim()},_addClass:function(a,b){for(var c=b.split(" "),d=a.className,e=0;e<c.length;e++){var f=c[e],g=new RegExp("(?:\\s|^)"+f+"(?:\\s|$)"),h=g.test(d);h||(d+=" "+f)}a.className=d.trim()},_offsetLeft:function(a){return a.getBoundingClientRect().left},_offsetTop:function(a){for(var b=a.offsetTop;(a=a.offsetParent)&&!isNaN(a.offsetTop);)b+=a.offsetTop,"BODY"!==a.tagName&&(b-=a.scrollTop);return b},_offset:function(a){return{left:this._offsetLeft(a),top:this._offsetTop(a)}},_css:function(b,c,d){if(a)a.style(b,c,d);else{var e=c.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(a,b){return b.toUpperCase()});b.style[e]=d}},_toValue:function(a){return this.options.scale.toValue.apply(this,[a])},_toPercentage:function(a){return this.options.scale.toPercentage.apply(this,[a])},_setTooltipPosition:function(){var a=[this.tooltip,this.tooltip_min,this.tooltip_max];if("vertical"===this.options.orientation){var b=this.options.tooltip_position||"right",c="left"===b?"right":"left";a.forEach(function(a){this._addClass(a,b),a.style[c]="100%"}.bind(this))}else"bottom"===this.options.tooltip_position?a.forEach(function(a){this._addClass(a,"bottom"),a.style.top="22px"}.bind(this)):a.forEach(function(a){this._addClass(a,"top"),a.style.top=-this.tooltip.outerHeight-14+"px"}.bind(this))}},a){var f=a.fn.slider?"bootstrapSlider":"slider";a.bridget(f,b),a(function(){a("input[data-provide=slider]")[f]()})}}(a),b});


/*! tooltipster v4.0.4 */!function(a,b){"function"==typeof define&&define.amd?define(["jQuery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jQuery")):b(jQuery)}(this,function(a){function b(a){this.$container,this.constraints=null,this.__$tooltip,this.__init(a)}function c(b,c){var d=!0;return a.each(b,function(a,e){return void 0===c[a]||b[a]!==c[a]?(d=!1,!1):void 0}),d}function d(b){var c=b.attr("id"),d=c?h.window.document.getElementById(c):null;return d?d===b[0]:a.contains(h.window.document.body,b[0])}function e(){var a=g.document.body||g.document.documentElement,b=a.style,c="transition",d=["Moz","Webkit","Khtml","O","ms"];if("string"==typeof b[c])return!0;c=c.charAt(0).toUpperCase()+c.substr(1);for(var e=0;e<d.length;e++)if("string"==typeof b[d[e]+c])return!0;return!1}var f={animation:"fade",animationDuration:350,content:null,contentAsHTML:!1,contentCloning:!1,debug:!0,delay:300,delayTouch:[300,500],functionInit:null,functionBefore:null,functionReady:null,functionAfter:null,functionFormat:null,IEmin:6,interactive:!1,multiple:!1,parent:"body",plugins:["sideTip"],repositionOnScroll:!1,restoration:"none",selfDestruction:!0,theme:[],timer:0,trackerInterval:500,trackOrigin:!1,trackTooltip:!1,trigger:"hover",triggerClose:{click:!1,mouseleave:!1,originClick:!1,scroll:!1,tap:!1,touchleave:!1},triggerOpen:{click:!1,mouseenter:!1,tap:!1,touchstart:!1},updateAnimation:"rotate",zIndex:9999999},g=void 0!==window?window:null,h={hasTouchCapability:!!("ontouchstart"in g||g.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints),hasTransitions:e(),IE:!1,semVer:"4.0.4",window:g},i=function(){this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__instancesLatestArr=[],this.__plugins={},this._env=h};i.prototype={__bridge:function(b,c,d){if(!c[d]){var e=function(){};e.prototype=b;var g=new e;g.__init&&g.__init(c),a.each(b,function(a,b){0!=a.indexOf("__")&&(c[a]?f.debug&&console.log("The "+a+" method of the "+d+" plugin conflicts with another plugin or native methods"):(c[a]=function(){return g[a].apply(g,Array.prototype.slice.apply(arguments))},c[a].bridged=g))}),c[d]=g}return this},__setWindow:function(a){return h.window=a,this},_getRuler:function(a){return new b(a)},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_plugin:function(b){var c=this;if("string"==typeof b){var d=b,e=null;return d.indexOf(".")>0?e=c.__plugins[d]:a.each(c.__plugins,function(a,b){return b.name.substring(b.name.length-d.length-1)=="."+d?(e=b,!1):void 0}),e}if(b.name.indexOf(".")<0)throw new Error("Plugins must be namespaced");return c.__plugins[b.name]=b,b.core&&c.__bridge(b.core,c,b.name),this},_trigger:function(){var a=Array.prototype.slice.apply(arguments);return"string"==typeof a[0]&&(a[0]={type:a[0]}),this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,a),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,a),this},instances:function(b){var c=[],d=b||".tooltipstered";return a(d).each(function(){var b=a(this),d=b.data("tooltipster-ns");d&&a.each(d,function(a,d){c.push(b.data(d))})}),c},instancesLatest:function(){return this.__instancesLatestArr},off:function(){return this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},origins:function(b){var c=b?b+" ":"";return a(c+".tooltipstered").toArray()},setDefaults:function(b){return a.extend(f,b),this},triggerHandler:function(){return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.tooltipster=new i,a.Tooltipster=function(b,c){this.__callbacks={close:[],open:[]},this.__closingTime,this.__Content,this.__contentBcr,this.__destroyed=!1,this.__destroying=!1,this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__enabled=!0,this.__garbageCollector,this.__Geometry,this.__lastPosition,this.__namespace="tooltipster-"+Math.round(1e6*Math.random()),this.__options,this.__$originParents,this.__pointerIsOverOrigin=!1,this.__previousThemes=[],this.__state="closed",this.__timeouts={close:[],open:null},this.__touchEvents=[],this.__tracker=null,this._$origin,this._$tooltip,this.__init(b,c)},a.Tooltipster.prototype={__init:function(b,c){var d=this;if(d._$origin=a(b),d.__options=a.extend(!0,{},f,c),d.__optionsFormat(),!h.IE||h.IE>=d.__options.IEmin){var e=null;void 0===d._$origin.data("tooltipster-initialTitle")&&(e=d._$origin.attr("title"),void 0===e&&(e=null),d._$origin.data("tooltipster-initialTitle",e)),null!==d.__options.content?d.__contentSet(d.__options.content):d.__contentSet(e),d._$origin.removeAttr("title").addClass("tooltipstered"),d.__prepareOrigin(),d.__prepareGC(),a.each(d.__options.plugins,function(a,b){d._plug(b)}),h.hasTouchCapability&&a("body").on("touchmove."+d.__namespace+"-triggerOpen",function(a){d._touchRecordEvent(a)}),d._on("created",function(){d.__prepareTooltip()})._on("repositioned",function(a){d.__lastPosition=a.position})}else d.__options.disabled=!0},__contentInsert:function(){var a=this,b=a._$tooltip.find(".tooltipster-content"),c=a.__Content,d=function(a){c=a};return a._trigger({type:"format",content:a.__Content,format:d}),a.__options.functionFormat&&(c=a.__options.functionFormat.call(a,a,{origin:a._$origin[0]},a.__Content)),"string"!=typeof c||a.__options.contentAsHTML?b.empty().append(c):b.text(c),a},__contentSet:function(b){return b instanceof a&&this.__options.contentCloning&&(b=b.clone(!0)),this.__Content=b,this._trigger({type:"updated",content:b}),this},__destroyError:function(){throw new Error("This tooltip has been destroyed and cannot execute your method call.")},__geometry:function(){var b=this,c=b._$origin,d=b._$origin.is("area");if(d){var e=b._$origin.parent().attr("name");c=a('img[usemap="#'+e+'"]')}var f=c[0].getBoundingClientRect(),g=a(h.window.document),i=a(h.window),j=c,k={available:{document:null,window:null},document:{size:{height:g.height(),width:g.width()}},window:{scroll:{left:h.window.scrollX||h.window.document.documentElement.scrollLeft,top:h.window.scrollY||h.window.document.documentElement.scrollTop},size:{height:i.height(),width:i.width()}},origin:{fixedLineage:!1,offset:{},size:{height:f.bottom-f.top,width:f.right-f.left},usemapImage:d?c[0]:null,windowOffset:{bottom:f.bottom,left:f.left,right:f.right,top:f.top}}};if(d){var l=b._$origin.attr("shape"),m=b._$origin.attr("coords");if(m&&(m=m.split(","),a.map(m,function(a,b){m[b]=parseInt(a)})),"default"!=l)switch(l){case"circle":var n=m[0],o=m[1],p=m[2],q=o-p,r=n-p;k.origin.size.height=2*p,k.origin.size.width=k.origin.size.height,k.origin.windowOffset.left+=r,k.origin.windowOffset.top+=q;break;case"rect":var s=m[0],t=m[1],u=m[2],v=m[3];k.origin.size.height=v-t,k.origin.size.width=u-s,k.origin.windowOffset.left+=s,k.origin.windowOffset.top+=t;break;case"poly":for(var w=0,x=0,y=0,z=0,A="even",B=0;B<m.length;B++){var C=m[B];"even"==A?(C>y&&(y=C,0===B&&(w=y)),w>C&&(w=C),A="odd"):(C>z&&(z=C,1==B&&(x=z)),x>C&&(x=C),A="even")}k.origin.size.height=z-x,k.origin.size.width=y-w,k.origin.windowOffset.left+=w,k.origin.windowOffset.top+=x}}var D=function(a){k.origin.size.height=a.height,k.origin.windowOffset.left=a.left,k.origin.windowOffset.top=a.top,k.origin.size.width=a.width};for(b._trigger({type:"geometry",edit:D,geometry:{height:k.origin.size.height,left:k.origin.windowOffset.left,top:k.origin.windowOffset.top,width:k.origin.size.width}}),k.origin.windowOffset.right=k.origin.windowOffset.left+k.origin.size.width,k.origin.windowOffset.bottom=k.origin.windowOffset.top+k.origin.size.height,k.origin.offset.left=k.origin.windowOffset.left+h.window.scrollX,k.origin.offset.top=k.origin.windowOffset.top+h.window.scrollY,k.origin.offset.bottom=k.origin.offset.top+k.origin.size.height,k.origin.offset.right=k.origin.offset.left+k.origin.size.width,k.available.document={bottom:{height:k.document.size.height-k.origin.offset.bottom,width:k.document.size.width},left:{height:k.document.size.height,width:k.origin.offset.left},right:{height:k.document.size.height,width:k.document.size.width-k.origin.offset.right},top:{height:k.origin.offset.top,width:k.document.size.width}},k.available.window={bottom:{height:Math.max(k.window.size.height-Math.max(k.origin.windowOffset.bottom,0),0),width:k.window.size.width},left:{height:k.window.size.height,width:Math.max(k.origin.windowOffset.left,0)},right:{height:k.window.size.height,width:Math.max(k.window.size.width-Math.max(k.origin.windowOffset.right,0),0)},top:{height:Math.max(k.origin.windowOffset.top,0),width:k.window.size.width}};"html"!=j[0].tagName.toLowerCase();){if("fixed"==j.css("position")){k.origin.fixedLineage=!0;break}j=j.parent()}return k},__optionsFormat:function(){return"number"==typeof this.__options.animationDuration&&(this.__options.animationDuration=[this.__options.animationDuration,this.__options.animationDuration]),"number"==typeof this.__options.delay&&(this.__options.delay=[this.__options.delay,this.__options.delay]),"number"==typeof this.__options.delayTouch&&(this.__options.delayTouch=[this.__options.delayTouch,this.__options.delayTouch]),"string"==typeof this.__options.theme&&(this.__options.theme=[this.__options.theme]),"string"==typeof this.__options.parent&&(this.__options.parent=a(this.__options.parent)),"hover"==this.__options.trigger?(this.__options.triggerOpen={mouseenter:!0,touchstart:!0},this.__options.triggerClose={mouseleave:!0,originClick:!0,touchleave:!0}):"click"==this.__options.trigger&&(this.__options.triggerOpen={click:!0,tap:!0},this.__options.triggerClose={click:!0,tap:!0}),this._trigger("options"),this},__prepareGC:function(){var b=this;return b.__options.selfDestruction?b.__garbageCollector=setInterval(function(){var c=(new Date).getTime();b.__touchEvents=a.grep(b.__touchEvents,function(a,b){return c-a.time>6e4}),d(b._$origin)||b.destroy()},2e4):clearInterval(b.__garbageCollector),b},__prepareOrigin:function(){var a=this;if(a._$origin.off("."+a.__namespace+"-triggerOpen"),h.hasTouchCapability&&a._$origin.on("touchstart."+a.__namespace+"-triggerOpen touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen",function(b){a._touchRecordEvent(b)}),a.__options.triggerOpen.click||a.__options.triggerOpen.tap&&h.hasTouchCapability){var b="";a.__options.triggerOpen.click&&(b+="click."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.tap&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&a._open(b)})}if(a.__options.triggerOpen.mouseenter||a.__options.triggerOpen.touchstart&&h.hasTouchCapability){var b="";a.__options.triggerOpen.mouseenter&&(b+="mouseenter."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.touchstart&&h.hasTouchCapability&&(b+="touchstart."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){!a._touchIsTouchEvent(b)&&a._touchIsEmulatedEvent(b)||(a.__pointerIsOverOrigin=!0,a._openShortly(b))})}if(a.__options.triggerClose.mouseleave||a.__options.triggerClose.touchleave&&h.hasTouchCapability){var b="";a.__options.triggerClose.mouseleave&&(b+="mouseleave."+a.__namespace+"-triggerOpen "),a.__options.triggerClose.touchleave&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&(a.__pointerIsOverOrigin=!1)})}return a},__prepareTooltip:function(){var b=this,c=b.__options.interactive?"auto":"";return b._$tooltip.attr("id",b.__namespace).css({"pointer-events":c,zIndex:b.__options.zIndex}),a.each(b.__previousThemes,function(a,c){b._$tooltip.removeClass(c)}),a.each(b.__options.theme,function(a,c){b._$tooltip.addClass(c)}),b.__previousThemes=a.merge([],b.__options.theme),b},__scrollHandler:function(b){var c=this;if(c.__options.triggerClose.scroll)c._close(b);else{if(b.target===h.window.document)c.__Geometry.origin.fixedLineage||c.__options.repositionOnScroll&&c.reposition(b);else{var d=c.__geometry(),e=!1;if("fixed"!=c._$origin.css("position")&&c.__$originParents.each(function(b,c){var f=a(c),g=f.css("overflow-x"),h=f.css("overflow-y");if("visible"!=g||"visible"!=h){var i=c.getBoundingClientRect();if("visible"!=g&&(d.origin.windowOffset.left<i.left||d.origin.windowOffset.right>i.right))return e=!0,!1;if("visible"!=h&&(d.origin.windowOffset.top<i.top||d.origin.windowOffset.bottom>i.bottom))return e=!0,!1}return"fixed"==f.css("position")?!1:void 0}),e)c._$tooltip.css("visibility","hidden");else if(c._$tooltip.css("visibility","visible"),c.__options.repositionOnScroll)c.reposition(b);else{var f=d.origin.offset.left-c.__Geometry.origin.offset.left,g=d.origin.offset.top-c.__Geometry.origin.offset.top;c._$tooltip.css({left:c.__lastPosition.coord.left+f,top:c.__lastPosition.coord.top+g})}}c._trigger({type:"scroll",event:b})}return c},__stateSet:function(a){return this.__state=a,this._trigger({type:"state",state:a}),this},__timeoutsClear:function(){return clearTimeout(this.__timeouts.open),this.__timeouts.open=null,a.each(this.__timeouts.close,function(a,b){clearTimeout(b)}),this.__timeouts.close=[],this},__trackerStart:function(){var a=this,b=a._$tooltip.find(".tooltipster-content");return a.__options.trackTooltip&&(a.__contentBcr=b[0].getBoundingClientRect()),a.__tracker=setInterval(function(){if(d(a._$origin)&&d(a._$tooltip)){if(a.__options.trackOrigin){var e=a.__geometry(),f=!1;c(e.origin.size,a.__Geometry.origin.size)&&(a.__Geometry.origin.fixedLineage?c(e.origin.windowOffset,a.__Geometry.origin.windowOffset)&&(f=!0):c(e.origin.offset,a.__Geometry.origin.offset)&&(f=!0)),f||(a.__options.triggerClose.mouseleave?a._close():a.reposition())}if(a.__options.trackTooltip){var g=b[0].getBoundingClientRect();g.height===a.__contentBcr.height&&g.width===a.__contentBcr.width||(a.reposition(),a.__contentBcr=g)}}else a._close()},a.__options.trackerInterval),a},_close:function(b,c){var d=this,e=!0;if(d._trigger({type:"close",event:b,stop:function(){e=!1}}),e||d.__destroying){c&&d.__callbacks.close.push(c),d.__callbacks.open=[],d.__timeoutsClear();var f=function(){a.each(d.__callbacks.close,function(a,c){c.call(d,d,{event:b,origin:d._$origin[0]})}),d.__callbacks.close=[]};if("closed"!=d.__state){var g=!0,i=new Date,j=i.getTime(),k=j+d.__options.animationDuration[1];if("disappearing"==d.__state&&k>d.__closingTime&&(g=!1),g){d.__closingTime=k,"disappearing"!=d.__state&&d.__stateSet("disappearing");var l=function(){clearInterval(d.__tracker),d._trigger({type:"closing",event:b}),d._$tooltip.off("."+d.__namespace+"-triggerClose").removeClass("tooltipster-dying"),a(h.window).off("."+d.__namespace+"-triggerClose"),d.__$originParents.each(function(b,c){a(c).off("scroll."+d.__namespace+"-triggerClose")}),d.__$originParents=null,a("body").off("."+d.__namespace+"-triggerClose"),d._$origin.off("."+d.__namespace+"-triggerClose"),d._off("dismissable"),d.__stateSet("closed"),d._trigger({type:"after",event:b}),d.__options.functionAfter&&d.__options.functionAfter.call(d,d,{event:b}),f()};h.hasTransitions?(d._$tooltip.css({"-moz-animation-duration":d.__options.animationDuration[1]+"ms","-ms-animation-duration":d.__options.animationDuration[1]+"ms","-o-animation-duration":d.__options.animationDuration[1]+"ms","-webkit-animation-duration":d.__options.animationDuration[1]+"ms","animation-duration":d.__options.animationDuration[1]+"ms","transition-duration":d.__options.animationDuration[1]+"ms"}),d._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"),d.__options.animationDuration[1]>0&&d._$tooltip.delay(d.__options.animationDuration[1]),d._$tooltip.queue(l)):d._$tooltip.stop().fadeOut(d.__options.animationDuration[1],l)}}else f()}return d},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_open:function(b,c){var e=this;if(!e.__destroying&&d(e._$origin)&&e.__enabled){var f=!0;if("closed"==e.__state&&(e._trigger({type:"before",event:b,stop:function(){f=!1}}),f&&e.__options.functionBefore&&(f=e.__options.functionBefore.call(e,e,{event:b,origin:e._$origin[0]}))),f!==!1&&null!==e.__Content){c&&e.__callbacks.open.push(c),e.__callbacks.close=[],e.__timeoutsClear();var g,i=function(){"stable"!=e.__state&&e.__stateSet("stable"),a.each(e.__callbacks.open,function(a,b){b.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}),e.__callbacks.open=[]};if("closed"!==e.__state)g=0,"disappearing"===e.__state?(e.__stateSet("appearing"),h.hasTransitions?(e._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i)):e._$tooltip.stop().fadeIn(i)):"stable"==e.__state&&i();else{if(e.__stateSet("appearing"),g=e.__options.animationDuration[0],e.__contentInsert(),e.reposition(b,!0),h.hasTransitions?(e._$tooltip.addClass("tooltipster-"+e.__options.animation).addClass("tooltipster-initial").css({"-moz-animation-duration":e.__options.animationDuration[0]+"ms","-ms-animation-duration":e.__options.animationDuration[0]+"ms","-o-animation-duration":e.__options.animationDuration[0]+"ms","-webkit-animation-duration":e.__options.animationDuration[0]+"ms","animation-duration":e.__options.animationDuration[0]+"ms","transition-duration":e.__options.animationDuration[0]+"ms"}),setTimeout(function(){"closed"!=e.__state&&(e._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i))},0)):e._$tooltip.css("display","none").fadeIn(e.__options.animationDuration[0],i),e.__trackerStart(),a(h.window).on("resize."+e.__namespace+"-triggerClose",function(a){e.reposition(a)}).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)}),e.__$originParents=e._$origin.parents(),e.__$originParents.each(function(b,c){a(c).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)})}),e.__options.triggerClose.mouseleave||e.__options.triggerClose.touchleave&&h.hasTouchCapability){e._on("dismissable",function(a){a.dismissable?a.delay?(m=setTimeout(function(){e._close(a.event)},a.delay),e.__timeouts.close.push(m)):e._close(a):clearTimeout(m)});var j=e._$origin,k="",l="",m=null;e.__options.interactive&&(j=j.add(e._$tooltip)),e.__options.triggerClose.mouseleave&&(k+="mouseenter."+e.__namespace+"-triggerClose ",l+="mouseleave."+e.__namespace+"-triggerClose "),e.__options.triggerClose.touchleave&&h.hasTouchCapability&&(k+="touchstart."+e.__namespace+"-triggerClose",l+="touchend."+e.__namespace+"-triggerClose touchcancel."+e.__namespace+"-triggerClose"),j.on(l,function(a){if(e._touchIsTouchEvent(a)||!e._touchIsEmulatedEvent(a)){var b="mouseleave"==a.type?e.__options.delay:e.__options.delayTouch;e._trigger({delay:b[1],dismissable:!0,event:a,type:"dismissable"})}}).on(k,function(a){!e._touchIsTouchEvent(a)&&e._touchIsEmulatedEvent(a)||e._trigger({dismissable:!1,event:a,type:"dismissable"})})}e.__options.triggerClose.originClick&&e._$origin.on("click."+e.__namespace+"-triggerClose",function(a){e._touchIsTouchEvent(a)||e._touchIsEmulatedEvent(a)||e._close(a)}),(e.__options.triggerClose.click||e.__options.triggerClose.tap&&h.hasTouchCapability)&&setTimeout(function(){if("closed"!=e.__state){var b="";e.__options.triggerClose.click&&(b+="click."+e.__namespace+"-triggerClose "),e.__options.triggerClose.tap&&h.hasTouchCapability&&(b+="touchend."+e.__namespace+"-triggerClose"),a("body").on(b,function(b){e._touchIsMeaningfulEvent(b)&&(e._touchRecordEvent(b),e.__options.interactive&&a.contains(e._$tooltip[0],b.target)||e._close(b))}),e.__options.triggerClose.tap&&h.hasTouchCapability&&a("body").on("touchstart."+e.__namespace+"-triggerClose",function(a){e._touchRecordEvent(a)})}},0),e._trigger("ready"),e.__options.functionReady&&e.__options.functionReady.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}if(e.__options.timer>0){var m=setTimeout(function(){e._close()},e.__options.timer+g);e.__timeouts.close.push(m)}}}return e},_openShortly:function(a){var b=this,c=!0;if("stable"!=b.__state&&"appearing"!=b.__state&&!b.__timeouts.open&&(b._trigger({type:"start",event:a,stop:function(){c=!1}}),c)){var d=0==a.type.indexOf("touch")?b.__options.delayTouch:b.__options.delay;d[0]?b.__timeouts.open=setTimeout(function(){b.__timeouts.open=null,b.__pointerIsOverOrigin&&b._touchIsMeaningfulEvent(a)?(b._trigger("startend"),b._open(a)):b._trigger("startcancel")},d[0]):(b._trigger("startend"),b._open(a))}return b},_optionsExtract:function(b,c){var d=this,e=a.extend(!0,{},c),f=d.__options[b];return f||(f={},a.each(c,function(a,b){var c=d.__options[a];void 0!==c&&(f[a]=c)})),a.each(e,function(b,c){void 0!==f[b]&&("object"!=typeof c||c instanceof Array||null==c||"object"!=typeof f[b]||f[b]instanceof Array||null==f[b]?e[b]=f[b]:a.extend(e[b],f[b]))}),e},_plug:function(b){var c=a.tooltipster._plugin(b);if(!c)throw new Error('The "'+b+'" plugin is not defined');return c.instance&&a.tooltipster.__bridge(c.instance,this,c.name),this},_touchIsEmulatedEvent:function(a){for(var b=!1,c=(new Date).getTime(),d=this.__touchEvents.length-1;d>=0;d--){var e=this.__touchEvents[d];if(!(c-e.time<500))break;e.target===a.target&&(b=!0)}return b},_touchIsMeaningfulEvent:function(a){return this._touchIsTouchEvent(a)&&!this._touchSwiped(a.target)||!this._touchIsTouchEvent(a)&&!this._touchIsEmulatedEvent(a)},_touchIsTouchEvent:function(a){return 0==a.type.indexOf("touch")},_touchRecordEvent:function(a){return this._touchIsTouchEvent(a)&&(a.time=(new Date).getTime(),this.__touchEvents.push(a)),this},_touchSwiped:function(a){for(var b=!1,c=this.__touchEvents.length-1;c>=0;c--){var d=this.__touchEvents[c];if("touchmove"==d.type){b=!0;break}if("touchstart"==d.type&&a===d.target)break}return b},_trigger:function(){var b=Array.prototype.slice.apply(arguments);return"string"==typeof b[0]&&(b[0]={type:b[0]}),b[0].instance=this,b[0].origin=this._$origin?this._$origin[0]:null,b[0].tooltip=this._$tooltip?this._$tooltip[0]:null,this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,b),a.tooltipster._trigger.apply(a.tooltipster,b),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,b),this},_unplug:function(b){var c=this;if(c[b]){var d=a.tooltipster._plugin(b);d.instance&&a.each(d.instance,function(a,d){c[a]&&c[a].bridged===c[b]&&delete c[a]}),c[b].__destroy&&c[b].__destroy(),delete c[b]}return c},close:function(a){return this.__destroyed?this.__destroyError():this._close(null,a),this},content:function(a){var b=this;if(void 0===a)return b.__Content;if(b.__destroyed)b.__destroyError();else if(b.__contentSet(a),null!==b.__Content){if("closed"!==b.__state&&(b.__contentInsert(),b.reposition(),b.__options.updateAnimation))if(h.hasTransitions){var c=b.__options.updateAnimation;b._$tooltip.addClass("tooltipster-update-"+c),setTimeout(function(){"closed"!=b.__state&&b._$tooltip.removeClass("tooltipster-update-"+c)},1e3)}else b._$tooltip.fadeTo(200,.5,function(){"closed"!=b.__state&&b._$tooltip.fadeTo(200,1)})}else b._close();return b},destroy:function(){var b=this;return b.__destroyed?b.__destroyError():b.__destroying||(b.__destroying=!0,b._close(null,function(){b._trigger("destroy"),b.__destroying=!1,b.__destroyed=!0,b._$origin.removeData(b.__namespace).off("."+b.__namespace+"-triggerOpen"),a("body").off("."+b.__namespace+"-triggerOpen");var c=b._$origin.data("tooltipster-ns");if(c)if(1===c.length){var d=null;"previous"==b.__options.restoration?d=b._$origin.data("tooltipster-initialTitle"):"current"==b.__options.restoration&&(d="string"==typeof b.__Content?b.__Content:a("<div></div>").append(b.__Content).html()),d&&b._$origin.attr("title",d),b._$origin.removeClass("tooltipstered"),b._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else c=a.grep(c,function(a,c){return a!==b.__namespace}),b._$origin.data("tooltipster-ns",c);b._trigger("destroyed"),b._off(),b.off(),b.__Content=null,b.__$emitterPrivate=null,b.__$emitterPublic=null,b.__options.parent=null,b._$origin=null,b._$tooltip=null,a.tooltipster.__instancesLatestArr=a.grep(a.tooltipster.__instancesLatestArr,function(a,c){return b!==a}),clearInterval(b.__garbageCollector)})),b},disable:function(){return this.__destroyed?(this.__destroyError(),this):(this._close(),this.__enabled=!1,this)},elementOrigin:function(){return this.__destroyed?void this.__destroyError():this._$origin[0]},elementTooltip:function(){return this._$tooltip?this._$tooltip[0]:null},enable:function(){return this.__enabled=!0,this},hide:function(a){return this.close(a)},instance:function(){return this},off:function(){return this.__destroyed||this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},open:function(a){return this.__destroyed||this.__destroying?this.__destroyError():this._open(null,a),this},option:function(b,c){return void 0===c?this.__options[b]:(this.__destroyed?this.__destroyError():(this.__options[b]=c,this.__optionsFormat(),a.inArray(b,["trigger","triggerClose","triggerOpen"])>=0&&this.__prepareOrigin(),"selfDestruction"===b&&this.__prepareGC()),this)},reposition:function(a,b){var c=this;return c.__destroyed?c.__destroyError():(d(c._$tooltip)||b)&&(b||c._$tooltip.detach(),c.__Geometry=c.__geometry(),c._trigger({type:"reposition",event:a,helper:{geo:c.__Geometry}})),c},show:function(a){return this.open(a)},status:function(){return{destroyed:this.__destroyed,destroying:this.__destroying,enabled:this.__enabled,open:"closed"!==this.__state,state:this.__state}},triggerHandler:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.fn.tooltipster=function(){var b=Array.prototype.slice.apply(arguments),c="You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";if(0===this.length)return this;if("string"==typeof b[0]){var d="#*$~&";return this.each(function(){var e=a(this).data("tooltipster-ns"),f=e?a(this).data(e[0]):null;if(!f)throw new Error("You called Tooltipster's \""+b[0]+'" method on an uninitialized element');if("function"!=typeof f[b[0]])throw new Error('Unknown method "'+b[0]+'"');this.length>1&&"content"==b[0]&&(b[1]instanceof a||"object"==typeof b[1]&&null!=b[1]&&b[1].tagName)&&!f.__options.contentCloning&&f.__options.debug&&console.log(c);var g=f[b[0]](b[1],b[2]);return g!==f||"instance"===b[0]?(d=g,!1):void 0}),"#*$~&"!==d?d:this}a.tooltipster.__instancesLatestArr=[];var e=b[0]&&void 0!==b[0].multiple,g=e&&b[0].multiple||!e&&f.multiple,h=b[0]&&void 0!==b[0].content,i=h&&b[0].content||!h&&f.content,j=b[0]&&void 0!==b[0].contentCloning,k=j&&b[0].contentCloning||!j&&f.contentCloning,l=b[0]&&void 0!==b[0].debug,m=l&&b[0].debug||!l&&f.debug;return this.length>1&&(i instanceof a||"object"==typeof i&&null!=i&&i.tagName)&&!k&&m&&console.log(c),this.each(function(){var c=!1,d=a(this),e=d.data("tooltipster-ns"),f=null;e?g?c=!0:m&&(console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."),console.log(this)):c=!0,c&&(f=new a.Tooltipster(this,b[0]),e||(e=[]),e.push(f.__namespace),d.data("tooltipster-ns",e),d.data(f.__namespace,f),f.__options.functionInit&&f.__options.functionInit.call(f,f,{origin:this}),f._trigger("init")),a.tooltipster.__instancesLatestArr.push(f)}),this},b.prototype={__init:function(b){this.__$tooltip=b,this.__$tooltip.css({left:0,overflow:"hidden",position:"absolute",top:0}).find(".tooltipster-content").css("overflow","auto"),this.$container=a('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo("body")},__forceRedraw:function(){var a=this.__$tooltip.parent();this.__$tooltip.detach(),this.__$tooltip.appendTo(a)},constrain:function(a,b){return this.constraints={width:a,height:b},this.__$tooltip.css({display:"block",height:"",overflow:"auto",width:a}),this},destroy:function(){this.__$tooltip.detach().find(".tooltipster-content").css({display:"",overflow:""}),this.$container.remove()},free:function(){return this.constraints=null,this.__$tooltip.css({display:"",height:"",overflow:"visible",width:""}),this},measure:function(){this.__forceRedraw();var a=this.__$tooltip[0].getBoundingClientRect(),b={size:{height:a.bottom,width:a.right}};if(this.constraints){var c=this.__$tooltip.find(".tooltipster-content"),d=this.__$tooltip.outerHeight(),e=c[0].getBoundingClientRect(),f={height:d<=this.constraints.height,width:a.width<=this.constraints.width&&e.width>=c[0].scrollWidth-1};b.fits=f.height&&f.width}return h.IE&&h.IE<=11&&(b.size.width=Math.ceil(b.size.width)+1),b}};var j=navigator.userAgent.toLowerCase();-1!=j.indexOf("msie")?h.IE=parseInt(j.split("msie")[1]):-1!==j.toLowerCase().indexOf("trident")&&-1!==j.indexOf(" rv:11")?h.IE=11:-1!=j.toLowerCase().indexOf("edge/")&&(h.IE=parseInt(j.toLowerCase().split("edge/")[1]));var k="tooltipster.sideTip";return a.tooltipster._plugin({name:k,instance:{__defaults:function(){return{arrow:!0,distance:6,functionPosition:null,maxWidth:null,minIntersection:16,minWidth:0,position:null,side:"top",viewportAware:!0}},__init:function(a){var b=this;b.__instance=a,b.__namespace="tooltipster-sideTip-"+Math.round(1e6*Math.random()),b.__previousState="closed",b.__options,b.__optionsFormat(),b.__instance._on("state."+b.__namespace,function(a){"closed"==a.state?b.__close():"appearing"==a.state&&"closed"==b.__previousState&&b.__create(),b.__previousState=a.state}),b.__instance._on("options."+b.__namespace,function(){b.__optionsFormat()}),b.__instance._on("reposition."+b.__namespace,function(a){b.__reposition(a.event,a.helper)})},__close:function(){this.__instance.content()instanceof a&&this.__instance.content().detach(),this.__instance._$tooltip.remove(),this.__instance._$tooltip=null},__create:function(){var b=a('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');this.__options.arrow||b.find(".tooltipster-box").css("margin",0).end().find(".tooltipster-arrow").hide(),this.__options.minWidth&&b.css("min-width",this.__options.minWidth+"px"),this.__options.maxWidth&&b.css("max-width",this.__options.maxWidth+"px"),this.__instance._$tooltip=b,this.__instance._trigger("created")},__destroy:function(){this.__instance._off("."+self.__namespace)},__optionsFormat:function(){var b=this;if(b.__options=b.__instance._optionsExtract(k,b.__defaults()),b.__options.position&&(b.__options.side=b.__options.position),"object"!=typeof b.__options.distance&&(b.__options.distance=[b.__options.distance]),b.__options.distance.length<4&&(void 0===b.__options.distance[1]&&(b.__options.distance[1]=b.__options.distance[0]),void 0===b.__options.distance[2]&&(b.__options.distance[2]=b.__options.distance[0]),
void 0===b.__options.distance[3]&&(b.__options.distance[3]=b.__options.distance[1]),b.__options.distance={top:b.__options.distance[0],right:b.__options.distance[1],bottom:b.__options.distance[2],left:b.__options.distance[3]}),"string"==typeof b.__options.side){var c={top:"bottom",right:"left",bottom:"top",left:"right"};b.__options.side=[b.__options.side,c[b.__options.side]],"left"==b.__options.side[0]||"right"==b.__options.side[0]?b.__options.side.push("top","bottom"):b.__options.side.push("right","left")}6===a.tooltipster._env.IE&&b.__options.arrow!==!0&&(b.__options.arrow=!1)},__reposition:function(b,c){var d,e=this,f=e.__targetFind(c),g=[];e.__instance._$tooltip.detach();var h=e.__instance._$tooltip.clone(),i=a.tooltipster._getRuler(h),j=!1;switch(a.each(["window","document"],function(d,k){var l=null;if(e.__instance._trigger({container:k,helper:c,satisfied:j,takeTest:function(a){l=a},results:g,type:"positionTest"}),1==l||0!=l&&0==j&&("window"!=k||e.__options.viewportAware))for(var d=0;d<e.__options.side.length;d++){var m={horizontal:0,vertical:0},n=e.__options.side[d];"top"==n||"bottom"==n?m.vertical=e.__options.distance[n]:m.horizontal=e.__options.distance[n],e.__sideChange(h,n),a.each(["natural","constrained"],function(a,d){if(l=null,e.__instance._trigger({container:k,event:b,helper:c,mode:d,results:g,satisfied:j,side:n,takeTest:function(a){l=a},type:"positionTest"}),1==l||0!=l&&0==j){var h={container:k,distance:m,fits:null,mode:d,outerSize:null,side:n,size:null,target:f[n],whole:null},o="natural"==d?i.free():i.constrain(c.geo.available[k][n].width-m.horizontal,c.geo.available[k][n].height-m.vertical),p=o.measure();if(h.size=p.size,h.outerSize={height:p.size.height+m.vertical,width:p.size.width+m.horizontal},"natural"==d?c.geo.available[k][n].width>=h.outerSize.width&&c.geo.available[k][n].height>=h.outerSize.height?h.fits=!0:h.fits=!1:h.fits=p.fits,"window"==k&&(h.fits?"top"==n||"bottom"==n?h.whole=c.geo.origin.windowOffset.right>=e.__options.minIntersection&&c.geo.window.size.width-c.geo.origin.windowOffset.left>=e.__options.minIntersection:h.whole=c.geo.origin.windowOffset.bottom>=e.__options.minIntersection&&c.geo.window.size.height-c.geo.origin.windowOffset.top>=e.__options.minIntersection:h.whole=!1),g.push(h),h.whole)j=!0;else if("natural"==h.mode&&(h.fits||h.size.width<=c.geo.available[k][n].width))return!1}})}}),e.__instance._trigger({edit:function(a){g=a},event:b,helper:c,results:g,type:"positionTested"}),g.sort(function(a,b){if(a.whole&&!b.whole)return-1;if(!a.whole&&b.whole)return 1;if(a.whole&&b.whole){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}if(a.fits&&!b.fits)return-1;if(!a.fits&&b.fits)return 1;if(a.fits&&b.fits){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}return"document"==a.container&&"bottom"==a.side&&"natural"==a.mode?-1:1}),d=g[0],d.coord={},d.side){case"left":case"right":d.coord.top=Math.floor(d.target-d.size.height/2);break;case"bottom":case"top":d.coord.left=Math.floor(d.target-d.size.width/2)}switch(d.side){case"left":d.coord.left=c.geo.origin.windowOffset.left-d.outerSize.width;break;case"right":d.coord.left=c.geo.origin.windowOffset.right+d.distance.horizontal;break;case"top":d.coord.top=c.geo.origin.windowOffset.top-d.outerSize.height;break;case"bottom":d.coord.top=c.geo.origin.windowOffset.bottom+d.distance.vertical}"window"==d.container?"top"==d.side||"bottom"==d.side?d.coord.left<0?c.geo.origin.windowOffset.right-this.__options.minIntersection>=0?d.coord.left=0:d.coord.left=c.geo.origin.windowOffset.right-this.__options.minIntersection-1:d.coord.left>c.geo.window.size.width-d.size.width&&(c.geo.origin.windowOffset.left+this.__options.minIntersection<=c.geo.window.size.width?d.coord.left=c.geo.window.size.width-d.size.width:d.coord.left=c.geo.origin.windowOffset.left+this.__options.minIntersection+1-d.size.width):d.coord.top<0?c.geo.origin.windowOffset.bottom-this.__options.minIntersection>=0?d.coord.top=0:d.coord.top=c.geo.origin.windowOffset.bottom-this.__options.minIntersection-1:d.coord.top>c.geo.window.size.height-d.size.height&&(c.geo.origin.windowOffset.top+this.__options.minIntersection<=c.geo.window.size.height?d.coord.top=c.geo.window.size.height-d.size.height:d.coord.top=c.geo.origin.windowOffset.top+this.__options.minIntersection+1-d.size.height):(d.coord.left>c.geo.window.size.width-d.size.width&&(d.coord.left=c.geo.window.size.width-d.size.width),d.coord.left<0&&(d.coord.left=0)),e.__sideChange(h,d.side),c.tooltipClone=h[0],c.tooltipParent=e.__instance.option("parent").parent[0],c.mode=d.mode,c.whole=d.whole,c.origin=e.__instance._$origin[0],c.tooltip=e.__instance._$tooltip[0],delete d.container,delete d.fits,delete d.mode,delete d.outerSize,delete d.whole,d.distance=d.distance.horizontal||d.distance.vertical;var k=a.extend(!0,{},d);if(e.__instance._trigger({edit:function(a){d=a},event:b,helper:c,position:k,type:"position"}),e.__options.functionPosition){var l=e.__options.functionPosition.call(e,e.__instance,c,k);l&&(d=l)}i.destroy();var m,n;"top"==d.side||"bottom"==d.side?(m={prop:"left",val:d.target-d.coord.left},n=d.size.width-this.__options.minIntersection):(m={prop:"top",val:d.target-d.coord.top},n=d.size.height-this.__options.minIntersection),m.val<this.__options.minIntersection?m.val=this.__options.minIntersection:m.val>n&&(m.val=n);var o;o=c.geo.origin.fixedLineage?c.geo.origin.windowOffset:{left:c.geo.origin.windowOffset.left+c.geo.window.scroll.left,top:c.geo.origin.windowOffset.top+c.geo.window.scroll.top},d.coord={left:o.left+(d.coord.left-c.geo.origin.windowOffset.left),top:o.top+(d.coord.top-c.geo.origin.windowOffset.top)},e.__sideChange(e.__instance._$tooltip,d.side),c.geo.origin.fixedLineage?e.__instance._$tooltip.css("position","fixed"):e.__instance._$tooltip.css("position",""),e.__instance._$tooltip.css({left:d.coord.left,top:d.coord.top,height:d.size.height,width:d.size.width}).find(".tooltipster-arrow").css({left:"",top:""}).css(m.prop,m.val),e.__instance._$tooltip.appendTo(e.__instance.option("parent")),e.__instance._trigger({type:"repositioned",event:b,position:d})},__sideChange:function(a,b){a.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-"+b)},__targetFind:function(a){var b={},c=this.__instance._$origin[0].getClientRects();if(c.length>1){var d=this.__instance._$origin.css("opacity");1==d&&(this.__instance._$origin.css("opacity",.99),c=this.__instance._$origin[0].getClientRects(),this.__instance._$origin.css("opacity",1))}if(c.length<2)b.top=Math.floor(a.geo.origin.windowOffset.left+a.geo.origin.size.width/2),b.bottom=b.top,b.left=Math.floor(a.geo.origin.windowOffset.top+a.geo.origin.size.height/2),b.right=b.left;else{var e=c[0];b.top=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil(c.length/2)-1]:c[0],b.right=Math.floor(e.top+(e.bottom-e.top)/2),e=c[c.length-1],b.bottom=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil((c.length+1)/2)-1]:c[c.length-1],b.left=Math.floor(e.top+(e.bottom-e.top)/2)}return b}}}),a});



/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});


/*
 * Input Mask Core
 * http://github.com/RobinHerbots/jquery.inputmask
 * Copyright (c) 2010 - Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 0.0.0-dev
 */
(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["inputmask.dependencyLib"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("./inputmask.dependencyLib.jquery"));
    } else {
        factory(window.dependencyLib || jQuery);
    }
}
(function ($) {
    function Inputmask(alias, options) {
        //allow instanciating without new
        if (!(this instanceof Inputmask)) {
            return new Inputmask(alias, options);
        }

        if ($.isPlainObject(alias)) {
            options = alias;
        } else {
            options = options || {};
            options.alias = alias;
        }

        this.el = undefined;
        //init options
        this.opts = $.extend(true, {}, this.defaults, options);
        this.noMasksCache = options && options.definitions !== undefined;
        this.userOptions = options || {}; //user passed options
        this.events = {};
        resolveAlias(this.opts.alias, options, this.opts);
    }

    Inputmask.prototype = {
        //options default
        defaults: {
            placeholder: "_",
            optionalmarker: {
                start: "[",
                end: "]"
            },
            quantifiermarker: {
                start: "{",
                end: "}"
            },
            groupmarker: {
                start: "(",
                end: ")"
            },
            alternatormarker: "|",
            escapeChar: "\\",
            mask: null, //needs tobe null instead of undefined as the extend method does not consider props with the undefined value
            oncomplete: $.noop, //executes when the mask is complete
            onincomplete: $.noop, //executes when the mask is incomplete and focus is lost
            oncleared: $.noop, //executes when the mask is cleared
            repeat: 0, //repetitions of the mask: * ~ forever, otherwise specify an integer
            greedy: true, //true: allocated buffer for the mask and repetitions - false: allocate only if needed
            autoUnmask: false, //automatically unmask when retrieving the value with $.fn.val or value if the browser supports __lookupGetter__ or getOwnPropertyDescriptor
            removeMaskOnSubmit: false, //remove the mask before submitting the form.
            clearMaskOnLostFocus: true,
            insertMode: true, //insert the input or overwrite the input
            clearIncomplete: false, //clear the incomplete input on blur
            aliases: {}, //aliases definitions => see jquery.inputmask.extensions.js
            alias: null,
            onKeyDown: $.noop, //callback to implement autocomplete on certain keys for example. args => event, buffer, caretPos, opts
            onBeforeMask: null, //executes before masking the initial value to allow preprocessing of the initial value.    args => initialValue, opts => return processedValue
            onBeforePaste: function (pastedValue, opts) {
                return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask(pastedValue, opts) : pastedValue;
            }, //executes before masking the pasted value to allow preprocessing of the pasted value.   args => pastedValue, opts => return processedValue
            onBeforeWrite: null, //executes before writing to the masked element. args => event, opts
            onUnMask: null, //executes after unmasking to allow postprocessing of the unmaskedvalue.    args => maskedValue, unmaskedValue, opts
            showMaskOnFocus: true, //show the mask-placeholder when the input has focus
            showMaskOnHover: true, //show the mask-placeholder when hovering the empty input
            onKeyValidation: $.noop, //executes on every key-press with the result of isValid. Params: key, result, opts
            skipOptionalPartCharacter: " ", //a character which can be used to skip an optional part of a mask
            showTooltip: false, //show the activemask as tooltip
            tooltip: undefined, //tooltip to show
            numericInput: false, //numericInput input direction style (input shifts to the left while holding the caret position)
            rightAlign: false, //align to the right
            undoOnEscape: true, //pressing escape reverts the value to the value before focus
            //numeric basic properties
            radixPoint: "", //".", // | ","
            radixPointDefinitionSymbol: undefined, //set the radixPoint definitionSymbol ~ used for awareness of the radixpoint
            groupSeparator: "", //",", // | "."
            //numeric basic properties
            keepStatic: null, //try to keep the mask static while typing. Decisions to alter the mask will be posponed if possible - null see auto selection for multi masks
            positionCaretOnTab: true, //when enabled the caret position is set after the latest valid position on TAB
            tabThrough: false, //allows for tabbing through the different parts of the masked field
            supportsInputType: ["text", "tel", "password"], //list with the supported input types
            definitions: {
                "9": {
                    validator: "[0-9]",
                    cardinality: 1,
                    definitionSymbol: "*"
                },
                "a": {
                    validator: "[A-Za-z\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5]",
                    cardinality: 1,
                    definitionSymbol: "*"
                },
                "*": {
                    validator: "[0-9A-Za-z\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5]",
                    cardinality: 1
                }
            },
            //specify keyCodes which should not be considered in the keypress event, otherwise the preventDefault will stop their default behavior especially in FF
            ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123],
            isComplete: null, //override for isComplete - args => buffer, opts - return true || false
            canClearPosition: $.noop, //hook to alter the clear behavior in the stripValidPositions args => maskset, position, lastValidPosition, opts => return true|false
            postValidation: null, //hook to postValidate the result from isValid.   Usefull for validating the entry as a whole.    args => buffer, currentResult, opts => return true/false
            staticDefinitionSymbol: undefined, //specify a definitionSymbol for static content, used to make matches for alternators
            jitMasking: false, //just in time masking ~ only mask while typing, can n (number), true or false
            nullable: true, //return nothing instead of the buffertemplate when the user hasn't entered anything.
            inputEventOnly: false, //testing inputfallback behavior
            positionCaretOnClick: "lvp" //none, lvp (based on the last valid position (default), radixFocus (position caret to radixpoint on initial click)
        },
        masksCache: {},
        mask: function (elems) {
            var that = this;
            if (typeof elems === "string") {
                elems = document.getElementById(elems) || document.querySelectorAll(elems);
            }
            elems = elems.nodeName ? [elems] : elems;
            $.each(elems, function (ndx, el) {
                var scopedOpts = $.extend(true, {}, that.opts);
                importAttributeOptions(el, scopedOpts, $.extend(true, {}, that.userOptions));
                var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
                if (maskset !== undefined) {
                    if (el.inputmask !== undefined) {
                        el.inputmask.remove();
                    }
                    //store inputmask instance on the input with element reference
                    el.inputmask = new Inputmask();
                    el.inputmask.opts = scopedOpts;
                    el.inputmask.noMasksCache = that.noMasksCache;
                    el.inputmask.userOptions = $.extend(true, {}, that.userOptions);
                    el.inputmask.el = el;
                    el.inputmask.maskset = maskset;
                    el.inputmask.isRTL = false;

                    $.data(el, "_inputmask_opts", scopedOpts);

                    maskScope({
                        "action": "mask",
                        "el": el
                    });
                }
            });
            return elems && elems[0] ? (elems[0].inputmask || this) : this;
        },
        option: function (options, noremask) { //set extra options || retrieve value of a current option
            if (typeof options === "string") {
                return this.opts[options];
            } else if (typeof options === "object") {
                $.extend(this.userOptions, options); //user passed options
                //remask
                if (this.el && noremask !== true) {
                    this.mask(this.el);
                }
                return this;
            }
        },
        unmaskedvalue: function (value) {
            return maskScope({
                "action": "unmaskedvalue",
                "el": this.el,
                "value": value
            }, this.el && this.el.inputmask ? this.el.inputmask.maskset : generateMaskSet(this.opts, this.noMasksCache), this.opts);
        },
        remove: function () {
            if (this.el) {
                maskScope({
                    "action": "remove",
                    "el": this.el
                });
                this.el.inputmask = undefined; //delete ~ undefined
                return this.el;
            }
        },
        getemptymask: function () { //return the default (empty) mask value, usefull for setting the default value in validation
            return maskScope({
                "action": "getemptymask"
            }, this.maskset || generateMaskSet(this.opts, this.noMasksCache), this.opts);
        },
        hasMaskedValue: function () { //check wheter the returned value is masked or not; currently only works reliable when using jquery.val fn to retrieve the value
            return !this.opts.autoUnmask;
        },
        isComplete: function () {
            return maskScope({
                "action": "isComplete",
                "el": this.el //optional
            }, this.maskset || generateMaskSet(this.opts, this.noMasksCache), this.opts);
        },
        getmetadata: function () { //return mask metadata if exists
            return maskScope({
                "action": "getmetadata"
            }, this.maskset || generateMaskSet(this.opts, this.noMasksCache), this.opts);
        },
        isValid: function (value) {
            return maskScope({
                "action": "isValid",
                "value": value
            }, this.maskset || generateMaskSet(this.opts, this.noMasksCache), this.opts);
        },
        format: function (value, metadata) {
            return maskScope({
                "action": "format",
                "value": value,
                "metadata": metadata //true/false getmetadata
            }, this.maskset || generateMaskSet(this.opts, this.noMasksCache), this.opts);
        }
    };

    //apply defaults, definitions, aliases
    Inputmask.extendDefaults = function (options) {
        $.extend(true, Inputmask.prototype.defaults, options);
    };
    Inputmask.extendDefinitions = function (definition) {
        $.extend(true, Inputmask.prototype.defaults.definitions, definition);
    };
    Inputmask.extendAliases = function (alias) {
        $.extend(true, Inputmask.prototype.defaults.aliases, alias);
    };
    //static fn on inputmask
    Inputmask.format = function (value, options, metadata) {
        return Inputmask(options).format(value, metadata);
    };
    Inputmask.unmask = function (value, options) {
        return Inputmask(options).unmaskedvalue(value);
    };
    Inputmask.isValid = function (value, options) {
        return Inputmask(options).isValid(value);
    };
    Inputmask.remove = function (elems) {
        $.each(elems, function (ndx, el) {
            if (el.inputmask) el.inputmask.remove();
        });
    };
    Inputmask.escapeRegex = function (str) {
        var specials = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
        return str.replace(new RegExp("(\\" + specials.join("|\\") + ")", "gim"), "\\$1");
    };
    Inputmask.keyCode = {
        ALT: 18,
        BACKSPACE: 8,
        BACKSPACE_SAFARI: 127,
        CAPS_LOCK: 20,
        COMMA: 188,
        COMMAND: 91,
        COMMAND_LEFT: 91,
        COMMAND_RIGHT: 93,
        CONTROL: 17,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        MENU: 93,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SHIFT: 16,
        SPACE: 32,
        TAB: 9,
        UP: 38,
        WINDOWS: 91,
        X: 88
    };

    //helper functions
    function isInputEventSupported(eventName) {
        var el = document.createElement("input"),
            evName = "on" + eventName,
            isSupported = (evName in el);
        if (!isSupported) {
            el.setAttribute(evName, "return;");
            isSupported = typeof el[evName] == "function";
        }
        el = null;
        return isSupported;
    }

    function isElementTypeSupported(input, opts) {
        var elementType = input.getAttribute("type");
        var isSupported = (input.tagName === "INPUT" && $.inArray(elementType, opts.supportsInputType) !== -1) || input.isContentEditable || input.tagName === "TEXTAREA";
        if (!isSupported && input.tagName === "INPUT") {
            var el = document.createElement("input");
            el.setAttribute("type", elementType);
            isSupported = el.type === "text"; //apply mask only if the type is not natively supported
            el = null;
        }
        return isSupported;
    }

    function resolveAlias(aliasStr, options, opts) {
        var aliasDefinition = opts.aliases[aliasStr];
        if (aliasDefinition) {
            if (aliasDefinition.alias) resolveAlias(aliasDefinition.alias, undefined, opts); //alias is another alias
            $.extend(true, opts, aliasDefinition); //merge alias definition in the options
            $.extend(true, opts, options); //reapply extra given options
            return true;
        } else //alias not found - try as mask
        if (opts.mask === null) {
            opts.mask = aliasStr;
        }

        return false;
    }

    function importAttributeOptions(npt, opts, userOptions) {
        var attrOptions = npt.getAttribute("data-inputmask"),
            option, dataoptions, optionData, p;

        function importOption(option, optionData) {
            optionData = optionData !== undefined ? optionData : npt.getAttribute("data-inputmask-" + option);
            if (optionData !== null) {
                if (typeof optionData === "string") {
                    if (option.indexOf("on") === 0) optionData = window[optionData]; //get function definition
                    else if (optionData === "false") optionData = false;
                    else if (optionData === "true") optionData = true;
                }
                userOptions[option] = optionData;
            }
        }

        if (attrOptions && attrOptions !== "") {
            attrOptions = attrOptions.replace(new RegExp("'", "g"), '"');
            dataoptions = JSON.parse("{" + attrOptions + "}");
        }

        //resolve aliases
        if (dataoptions) { //pickup alias from data-inputmask
            optionData = undefined;
            for (p in dataoptions) {
                if (p.toLowerCase() === "alias") {
                    optionData = dataoptions[p];
                    break;
                }
            }
        }
        importOption("alias", optionData); //pickup alias from data-inputmask-alias
        if (userOptions.alias) {
            resolveAlias(userOptions.alias, userOptions, opts);
        }

        for (option in opts) {
            if (dataoptions) {
                optionData = undefined;
                for (p in dataoptions) {
                    if (p.toLowerCase() === option.toLowerCase()) {
                        optionData = dataoptions[p];
                        break;
                    }
                }
            }
            importOption(option, optionData);
        }

        $.extend(true, opts, userOptions);
        return opts;
    }

    function generateMaskSet(opts, nocache) {
        var ms;

        function analyseMask(mask) {
            var tokenizer = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
                escaped = false,
                currentToken = new MaskToken(),
                match,
                m,
                openenings = [],
                maskTokens = [],
                openingToken,
                currentOpeningToken,
                alternator,
                lastMatch,
                groupToken;

            function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
                this.matches = [];
                this.isGroup = isGroup || false;
                this.isOptional = isOptional || false;
                this.isQuantifier = isQuantifier || false;
                this.isAlternator = isAlternator || false;
                this.quantifier = {
                    min: 1,
                    max: 1
                };
            }

            //test definition => {fn: RegExp/function, cardinality: int, optionality: bool, newBlockMarker: bool, casing: null/upper/lower, def: definitionSymbol, placeholder: placeholder, mask: real maskDefinition}
            function insertTestDefinition(mtoken, element, position) {
                var maskdef = opts.definitions[element];
                position = position !== undefined ? position : mtoken.matches.length;
                var prevMatch = mtoken.matches[position - 1];
                if (maskdef && !escaped) {
                    maskdef.placeholder = $.isFunction(maskdef.placeholder) ? maskdef.placeholder(opts) : maskdef.placeholder;
                    var prevalidators = maskdef.prevalidator,
                        prevalidatorsL = prevalidators ? prevalidators.length : 0;
                    //handle prevalidators
                    for (var i = 1; i < maskdef.cardinality; i++) {
                        var prevalidator = prevalidatorsL >= i ? prevalidators[i - 1] : [],
                            validator = prevalidator.validator,
                            cardinality = prevalidator.cardinality;
                        mtoken.matches.splice(position++, 0, {
                            fn: validator ? typeof validator === "string" ? new RegExp(validator) : new function () {
                                this.test = validator;
                            } : new RegExp("."),
                            cardinality: cardinality ? cardinality : 1,
                            optionality: mtoken.isOptional,
                            newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),
                            casing: maskdef.casing,
                            def: maskdef.definitionSymbol || element,
                            placeholder: maskdef.placeholder,
                            mask: element
                        });
                        prevMatch = mtoken.matches[position - 1];
                    }
                    mtoken.matches.splice(position++, 0, {
                        fn: maskdef.validator ? typeof maskdef.validator == "string" ? new RegExp(maskdef.validator) : new function () {
                            this.test = maskdef.validator;
                        } : new RegExp("."),
                        cardinality: maskdef.cardinality,
                        optionality: mtoken.isOptional,
                        newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),
                        casing: maskdef.casing,
                        def: maskdef.definitionSymbol || element,
                        placeholder: maskdef.placeholder,
                        mask: element
                    });
                } else {
                    mtoken.matches.splice(position++, 0, {
                        fn: null,
                        cardinality: 0,
                        optionality: mtoken.isOptional,
                        newBlockMarker: prevMatch === undefined || prevMatch.def !== element,
                        casing: null,
                        def: opts.staticDefinitionSymbol || element,
                        placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,
                        mask: element
                    });
                    escaped = false;
                }
            }

            function verifyGroupMarker(lastMatch, isOpenGroup) {
                if (lastMatch.isGroup) { //this is not a group but a normal mask => convert
                    lastMatch.isGroup = false;
                    insertTestDefinition(lastMatch, opts.groupmarker.start, 0);
                    if (isOpenGroup !== true) {
                        insertTestDefinition(lastMatch, opts.groupmarker.end);
                    }
                }
            }

            function maskCurrentToken(m, currentToken, lastMatch, extraCondition) {
                if (currentToken.matches.length > 0 && (extraCondition === undefined || extraCondition)) {
                    lastMatch = currentToken.matches[currentToken.matches.length - 1];
                    verifyGroupMarker(lastMatch);
                }
                insertTestDefinition(currentToken, m);
            }

            function defaultCase() {
                if (openenings.length > 0) {
                    currentOpeningToken = openenings[openenings.length - 1];
                    maskCurrentToken(m, currentOpeningToken, lastMatch, !currentOpeningToken.isAlternator);
                    if (currentOpeningToken.isAlternator) { //handle alternator a | b case
                        alternator = openenings.pop();
                        for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                            alternator.matches[mndx].isGroup = false; //don't mark alternate groups as group
                        }
                        if (openenings.length > 0) {
                            currentOpeningToken = openenings[openenings.length - 1];
                            currentOpeningToken.matches.push(alternator);
                        } else {
                            currentToken.matches.push(alternator);
                        }
                    }
                } else {
                    maskCurrentToken(m, currentToken, lastMatch);
                }
            }

            function reverseTokens(maskToken) {
                function reverseStatic(st) {
                    if (st === opts.optionalmarker.start) st = opts.optionalmarker.end;
                    else if (st === opts.optionalmarker.end) st = opts.optionalmarker.start;
                    else if (st === opts.groupmarker.start) st = opts.groupmarker.end;
                    else if (st === opts.groupmarker.end) st = opts.groupmarker.start;

                    return st;
                }

                maskToken.matches = maskToken.matches.reverse();
                for (var match in maskToken.matches) {
                    var intMatch = parseInt(match);
                    if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) { //reposition quantifier
                        var qt = maskToken.matches[match];
                        maskToken.matches.splice(match, 1);
                        maskToken.matches.splice(intMatch + 1, 0, qt);
                    }
                    if (maskToken.matches[match].matches !== undefined) {
                        maskToken.matches[match] = reverseTokens(maskToken.matches[match]);
                    } else {
                        maskToken.matches[match] = reverseStatic(maskToken.matches[match]);
                    }
                }

                return maskToken;
            }

            while (match = tokenizer.exec(mask)) {
                m = match[0];

                if (escaped) {
                    defaultCase();
                    continue;
                }
                switch (m.charAt(0)) {
                    case opts.escapeChar:
                        escaped = true;
                        break;
                    case opts.optionalmarker.end:
                    // optional closing
                    case opts.groupmarker.end:
                        // Group closing
                        openingToken = openenings.pop();
                        if (openingToken !== undefined) {
                            if (openenings.length > 0) {
                                currentOpeningToken = openenings[openenings.length - 1];
                                currentOpeningToken.matches.push(openingToken);
                                if (currentOpeningToken.isAlternator) { //handle alternator (a) | (b) case
                                    alternator = openenings.pop();
                                    for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                                        alternator.matches[mndx].isGroup = false; //don't mark alternate groups as group
                                    }
                                    if (openenings.length > 0) {
                                        currentOpeningToken = openenings[openenings.length - 1];
                                        currentOpeningToken.matches.push(alternator);
                                    } else {
                                        currentToken.matches.push(alternator);
                                    }
                                }
                            } else {
                                currentToken.matches.push(openingToken);
                            }
                        } else defaultCase();
                        break;
                    case opts.optionalmarker.start:
                        // optional opening
                        openenings.push(new MaskToken(false, true));
                        break;
                    case opts.groupmarker.start:
                        // Group opening
                        openenings.push(new MaskToken(true));
                        break;
                    case opts.quantifiermarker.start:
                        //Quantifier
                        var quantifier = new MaskToken(false, false, true);

                        m = m.replace(/[{}]/g, "");
                        var mq = m.split(","),
                            mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
                            mq1 = mq.length === 1 ? mq0 : (isNaN(mq[1]) ? mq[1] : parseInt(mq[1]));
                        if (mq1 === "*" || mq1 === "+") {
                            mq0 = mq1 === "*" ? 0 : 1;
                        }
                        quantifier.quantifier = {
                            min: mq0,
                            max: mq1
                        };
                        if (openenings.length > 0) {
                            var matches = openenings[openenings.length - 1].matches;
                            match = matches.pop();
                            if (!match.isGroup) {
                                groupToken = new MaskToken(true);
                                groupToken.matches.push(match);
                                match = groupToken;
                            }
                            matches.push(match);
                            matches.push(quantifier);
                        } else {
                            match = currentToken.matches.pop();
                            if (!match.isGroup) {
                                groupToken = new MaskToken(true);
                                groupToken.matches.push(match);
                                match = groupToken;
                            }
                            currentToken.matches.push(match);
                            currentToken.matches.push(quantifier);
                        }
                        break;
                    case opts.alternatormarker:
                        if (openenings.length > 0) {
                            currentOpeningToken = openenings[openenings.length - 1];
                            lastMatch = currentOpeningToken.matches.pop();
                        } else {
                            lastMatch = currentToken.matches.pop();
                        }
                        if (lastMatch.isAlternator) {
                            openenings.push(lastMatch);
                        } else {
                            alternator = new MaskToken(false, false, false, true);
                            alternator.matches.push(lastMatch);
                            openenings.push(alternator);
                        }
                        break;
                    default:
                        defaultCase();
                }
            }

            while (openenings.length > 0) {
                openingToken = openenings.pop();
                verifyGroupMarker(openingToken, true);
                currentToken.matches.push(openingToken);
            }
            if (currentToken.matches.length > 0) {
                lastMatch = currentToken.matches[currentToken.matches.length - 1];
                verifyGroupMarker(lastMatch);
                maskTokens.push(currentToken);
            }

            if (opts.numericInput) {
                reverseTokens(maskTokens[0]);
            }
            // console.log(JSON.stringify(maskTokens));
            return maskTokens;
        }

        function generateMask(mask, metadata) {
            if (mask === null || mask === "") {
                return undefined;
            } else {
                if (mask.length === 1 && opts.greedy === false && opts.repeat !== 0) {
                    opts.placeholder = "";
                } //hide placeholder with single non-greedy mask
                if (opts.repeat > 0 || opts.repeat === "*" || opts.repeat === "+") {
                    var repeatStart = opts.repeat === "*" ? 0 : (opts.repeat === "+" ? 1 : opts.repeat);
                    mask = opts.groupmarker.start + mask + opts.groupmarker.end + opts.quantifiermarker.start + repeatStart + "," + opts.repeat + opts.quantifiermarker.end;
                }

                // console.log(mask);
                var masksetDefinition;
                if (Inputmask.prototype.masksCache[mask] === undefined || nocache === true) {
                    masksetDefinition = {
                        "mask": mask,
                        "maskToken": analyseMask(mask),
                        "validPositions": {},
                        "_buffer": undefined,
                        "buffer": undefined,
                        "tests": {},
                        "metadata": metadata,
                        maskLength: undefined
                    };
                    if (nocache !== true) {
                        Inputmask.prototype.masksCache[opts.numericInput ? mask.split("").reverse().join("") : mask] = masksetDefinition;
                        masksetDefinition = $.extend(true, {}, Inputmask.prototype.masksCache[opts.numericInput ? mask.split("").reverse().join("") : mask]);
                    }
                } else masksetDefinition = $.extend(true, {}, Inputmask.prototype.masksCache[opts.numericInput ? mask.split("").reverse().join("") : mask]);

                return masksetDefinition;
            }
        }

        function preProcessMask(mask) {
            mask = mask.toString();
            // if (opts.numericInput) {
            //  mask = mask.split('').reverse();
            //  mask = mask.join('');
            // }
            return mask;
        }

        if ($.isFunction(opts.mask)) { //allow mask to be a preprocessing fn - should return a valid mask
            opts.mask = opts.mask(opts);
        }
        if ($.isArray(opts.mask)) {
            if (opts.mask.length > 1) {
                opts.keepStatic = opts.keepStatic === null ? true : opts.keepStatic; //enable by default when passing multiple masks when the option is not explicitly specified
                var altMask = "(";
                $.each(opts.numericInput ? opts.mask.reverse() : opts.mask, function (ndx, msk) {
                    if (altMask.length > 1) {
                        altMask += ")|(";
                    }
                    if (msk.mask !== undefined && !$.isFunction(msk.mask)) {
                        altMask += preProcessMask(msk.mask);
                    } else {
                        altMask += preProcessMask(msk);
                    }
                });
                altMask += ")";
                return generateMask(altMask, opts.mask);
            } else opts.mask = opts.mask.pop();
        }

        if (opts.mask) {
            if (opts.mask.mask !== undefined && !$.isFunction(opts.mask.mask)) {
                ms = generateMask(preProcessMask(opts.mask.mask), opts.mask);
            } else {
                ms = generateMask(preProcessMask(opts.mask), opts.mask);
            }
        }

        return ms;
    }

    var ua = navigator.userAgent,
        mobile = /mobile/i.test(ua),
        iemobile = /iemobile/i.test(ua),
        iphone = /iphone/i.test(ua) && !iemobile;
    //android = /android.*safari.*/i.test(ua) && !iemobile;

    //masking scope
    //actionObj definition see below
    function maskScope(actionObj, maskset, opts) {
        var isRTL = false,
            undoValue,
            el, $el,
            skipKeyPressEvent = false, //Safari 5.1.x - modal dialog fires keypress twice workaround
            skipInputEvent = false, //skip when triggered from within inputmask
            ignorable = false,
            maxLength,
            mouseEnter = true;

        //maskset helperfunctions
        function getMaskTemplate(baseOnInput, minimalPos, includeInput) {
            minimalPos = minimalPos || 0;
            var maskTemplate = [],
                ndxIntlzr, pos = 0,
                test, testPos, lvp = getLastValidPosition();
            maxLength = el !== undefined ? el.maxLength : undefined;
            if (maxLength === -1) maxLength = undefined;
            do {
                if (baseOnInput === true && getMaskSet().validPositions[pos]) {
                    var validPos = getMaskSet().validPositions[pos];
                    test = validPos.match;
                    ndxIntlzr = validPos.locator.slice();
                    maskTemplate.push(includeInput === true ? validPos.input : getPlaceholder(pos, test));
                } else {
                    testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
                    test = testPos.match;
                    ndxIntlzr = testPos.locator.slice();
                    if (opts.jitMasking === false || pos < lvp || (isFinite(opts.jitMasking) && opts.jitMasking > pos)) {
                        maskTemplate.push(getPlaceholder(pos, test));
                    }
                }
                pos++;
            } while ((maxLength === undefined || pos < maxLength) && (test.fn !== null || test.def !== "") || minimalPos > pos);
            if (maskTemplate[maskTemplate.length - 1] === "") {
                maskTemplate.pop(); //drop the last one which is empty
            }

            getMaskSet().maskLength = pos + 1;
            return maskTemplate;
        }

        function getMaskSet() {
            return maskset;
        }

        function resetMaskSet(soft) {
            var maskset = getMaskSet();
            maskset.buffer = undefined;
            if (soft !== true) {
                maskset._buffer = undefined;
                maskset.validPositions = {};
                maskset.p = 0;
            }
        }

        function getLastValidPosition(closestTo, strict, validPositions) {
            var before = -1,
                after = -1,
                valids = validPositions || getMaskSet().validPositions; //for use in valhook ~ context switch
            if (closestTo === undefined) closestTo = -1;
            for (var posNdx in valids) {
                var psNdx = parseInt(posNdx);
                if (valids[psNdx] && (strict || valids[psNdx].match.fn !== null)) {
                    if (psNdx <= closestTo) before = psNdx;
                    if (psNdx >= closestTo) after = psNdx;
                }
            }
            return (before !== -1 && (closestTo - before) > 1) || after < closestTo ? before : after;
        }

        function setValidPosition(pos, validTest, fromSetValid, isSelection) {
            if (isSelection || (opts.insertMode && getMaskSet().validPositions[pos] !== undefined && fromSetValid === undefined)) {
                //reposition & revalidate others
                var positionsClone = $.extend(true, {}, getMaskSet().validPositions),
                    lvp = getLastValidPosition(),
                    i;
                for (i = pos; i <= lvp; i++) { //clear selection
                    delete getMaskSet().validPositions[i];
                }
                getMaskSet().validPositions[pos] = $.extend(true, {}, validTest);
                var valid = true,
                    j, vps = getMaskSet().validPositions, needsValidation = false;
                for (i = (j = pos); i <= lvp; i++) {
                    var t = positionsClone[i];
                    if (t !== undefined) {
                        var posMatch = j,
                            prevPosMatch = -1;
                        while (posMatch < getMaskSet().maskLength && ((t.match.fn == null && vps[i] && (vps[i].match.optionalQuantifier === true || vps[i].match.optionality === true)) || t.match.fn != null)) {
                            //determine next position
                            //if (t.match.fn === null || (!opts.keepStatic && vps[i] && (vps[i + 1] !== undefined && getTests(i + 1, vps[i].locator.slice(), i).length > 1 || vps[i].alternation !== undefined))) {
                            posMatch++;
                            //} else posMatch = seekNext(j);

                            if (needsValidation === false && positionsClone[posMatch] && positionsClone[posMatch].match.def === t.match.def) { //obvious match
                                getMaskSet().validPositions[posMatch] = $.extend(true, {}, positionsClone[posMatch]);
                                getMaskSet().validPositions[posMatch].input = t.input;
                                j = posMatch;
                                valid = true;
                                break;
                            } else if (positionCanMatchDefinition(posMatch, t.match.def)) { //validated match
                                var result = isValid(posMatch, t.input, true, true);
                                valid = result !== false;
                                j = (result.caret || result.insert) ? getLastValidPosition() : posMatch;
                                needsValidation = true;
                                if (valid) break;
                            } else {
                                valid = t.match.fn == null;
                                if (prevPosMatch === posMatch) break; //prevent endless loop
                                prevPosMatch = posMatch;
                            }
                        }
                    }
                    if (!valid) break;
                }

                if (!valid) {
                    getMaskSet().validPositions = $.extend(true, {}, positionsClone);
                    resetMaskSet(true);
                    return false;
                }
            }

            else
                getMaskSet().validPositions[pos] = $.extend(true, {}, validTest);
            ;

            resetMaskSet(true);
            return true;
        }

        function stripValidPositions(start, end, nocheck, strict) {
            function IsEnclosedStatic(pos) {
                var posMatch = getMaskSet().validPositions[pos];
                if (posMatch !== undefined && posMatch.match.fn === null) {
                    var prevMatch = getMaskSet().validPositions[pos - 1],
                        nextMatch = getMaskSet().validPositions[pos + 1];
                    return prevMatch !== undefined && nextMatch !== undefined;
                }
                return false;
            }

            var i, startPos = start,
                positionsClone = $.extend(true, {}, getMaskSet().validPositions), needsValidation = false;
            getMaskSet().p = start; //needed for alternated position after overtype selection

            for (i = end - 1; i >= startPos; i--) { //clear selection
                if (getMaskSet().validPositions[i] !== undefined) {
                    if (nocheck === true ||
                        (!IsEnclosedStatic(i) && opts.canClearPosition(getMaskSet(), i, getLastValidPosition(), strict, opts) !== false)) {
                        delete getMaskSet().validPositions[i];
                    }
                }
            }

            //clear buffer
            resetMaskSet(true);
            for (i = startPos + 1; i <= getLastValidPosition();) {
                while (getMaskSet().validPositions[startPos] !== undefined) startPos++;
                var s = getMaskSet().validPositions[startPos];
                if (i < startPos) i = startPos + 1;
                // while (getMaskSet().validPositions[i] == undefined) i++;
                if ((getMaskSet().validPositions[i] !== undefined || !isMask(i)) && s === undefined) {
                    var t = getTestTemplate(i);
                    if (needsValidation === false && positionsClone[startPos] && positionsClone[startPos].match.def === t.match.def) { //obvious match
                        getMaskSet().validPositions[startPos] = $.extend(true, {}, positionsClone[startPos]);
                        getMaskSet().validPositions[startPos].input = t.input;
                        delete getMaskSet().validPositions[i];
                        i++;
                    } else if (positionCanMatchDefinition(startPos, t.match.def)) {
                        if (isValid(startPos, t.input || getPlaceholder(i), true) !== false) {
                            delete getMaskSet().validPositions[i];
                            i++;
                            needsValidation = true;
                        }
                    } else if (!isMask(i)) {
                        i++;
                        startPos--;
                    }
                    startPos++;
                } else i++;
            }

            resetMaskSet(true);
        }

        function determineTestTemplate(tests, ignoreGreedy) {
            var testPos;
            var testPositions = tests,
                lvp = getLastValidPosition(),
                lvTest = getMaskSet().validPositions[lvp] || getTests(0)[0],
                lvTestAltArr = (lvTest.alternation !== undefined) ? lvTest.locator[lvTest.alternation].toString().split(",") : [];
            for (var ndx = 0; ndx < testPositions.length; ndx++) {
                testPos = testPositions[ndx];

                if (testPos.match &&
                    ((((opts.greedy || ignoreGreedy) && testPos.match.optionalQuantifier !== true) || (testPos.match.optionality === false || testPos.match.newBlockMarker === false) && testPos.match.optionalQuantifier !== true) &&
                    ((lvTest.alternation === undefined || lvTest.alternation !== testPos.alternation) ||
                    (testPos.locator[lvTest.alternation] !== undefined && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAltArr))))) {
                    break;
                }
            }

            return testPos;
        }

        function getTestTemplate(pos, ndxIntlzr, tstPs) {
            return getMaskSet().validPositions[pos] || determineTestTemplate(getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
        }

        function getTest(pos) {
            if (getMaskSet().validPositions[pos]) {
                return getMaskSet().validPositions[pos];
            }
            return getTests(pos)[0];
        }

        function positionCanMatchDefinition(pos, def) {
            var valid = false,
                tests = getTests(pos);
            for (var tndx = 0; tndx < tests.length; tndx++) {
                if (tests[tndx].match && tests[tndx].match.def === def) {
                    valid = true;
                    break;
                }
            }
            return valid;
        }

        function selectBestMatch(pos, alternateNdx) {
            var bestMatch, indexPos;
            if (getMaskSet().tests[pos] || getMaskSet().validPositions[pos]) {
                $.each(getMaskSet().tests[pos] || [getMaskSet().validPositions[pos]], function (ndx, lmnt) {
                    var ndxPos = lmnt.alternation ? lmnt.locator[lmnt.alternation].toString().indexOf(alternateNdx) : -1;
                    if ((indexPos === undefined || ndxPos < indexPos) && ndxPos !== -1) {
                        bestMatch = lmnt;
                        indexPos = ndxPos;
                    }
                });
            }
            return bestMatch;
        }

        function getTests(pos, ndxIntlzr, tstPs) {
            var maskTokens = getMaskSet().maskToken,
                testPos = ndxIntlzr ? tstPs : 0,
                ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0],
                matches = [],
                insertStop = false,
                latestMatch,
                cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";

            function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) { //ndxInitializer contains a set of indexes to speedup searches in the mtokens
                function handleMatch(match, loopNdx, quantifierRecurse) {
                    function isFirstMatch(latestMatch, tokenGroup) {
                        var firstMatch = $.inArray(latestMatch, tokenGroup.matches) === 0;
                        if (!firstMatch) {
                            $.each(tokenGroup.matches, function (ndx, match) {
                                if (match.isQuantifier === true) {
                                    firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]);
                                    if (firstMatch) return false;
                                }
                            });
                        }
                        return firstMatch;
                    }

                    function resolveNdxInitializer(pos, alternateNdx) {
                        var bestMatch = selectBestMatch(pos, alternateNdx);
                        return bestMatch ? bestMatch.locator.slice(bestMatch.alternation + 1) : undefined;
                    }

                    function staticCanMatchDefinition(source, target) {
                        if (source.match.fn === null && target.match.fn !== null) {
                            return target.match.fn.test(source.match.def, getMaskSet(), pos, false, opts, false);
                        }
                        return false;
                    }

                    if (testPos > 10000) {
                        throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;
                    }
                    if (testPos === pos && match.matches === undefined) {
                        matches.push({
                            "match": match,
                            "locator": loopNdx.reverse(),
                            "cd": cacheDependency
                        });
                        return true;
                    } else if (match.matches !== undefined) {
                        if (match.isGroup && quantifierRecurse !== match) { //when a group pass along to the quantifier
                            match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx);
                            if (match) return true;
                        } else if (match.isOptional) {
                            var optionalToken = match;
                            match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
                            if (match) {
                                latestMatch = matches[matches.length - 1].match;
                                if (isFirstMatch(latestMatch, optionalToken)) {
                                    insertStop = true; //insert a stop
                                    testPos = pos; //match the position after the group
                                } else return true;
                            }
                        } else if (match.isAlternator) {
                            var alternateToken = match,
                                malternateMatches = [],
                                maltMatches,
                                currentMatches = matches.slice(),
                                loopNdxCnt = loopNdx.length;
                            //console.log("before " + ndxInitializer);
                            var altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;
                            if (altIndex === -1 || typeof altIndex === "string") {
                                var currentPos = testPos,
                                    ndxInitializerClone = ndxInitializer.slice(),
                                    altIndexArr = [],
                                    amndx;
                                if (typeof altIndex == "string") {
                                    altIndexArr = altIndex.split(",");
                                } else {
                                    for (amndx = 0; amndx < alternateToken.matches.length; amndx++) {
                                        altIndexArr.push(amndx);
                                    }
                                }
                                for (var ndx = 0; ndx < altIndexArr.length; ndx++) {
                                    amndx = parseInt(altIndexArr[ndx]);
                                    matches = [];
                                    //set the correct ndxInitializer
                                    ndxInitializer = resolveNdxInitializer(testPos, amndx) || ndxInitializerClone.slice();
                                    //console.log("resolved " + ndxInitializerClone + " vs " + resolveNdxInitializer(testPos, amndx));
                                    match = handleMatch(alternateToken.matches[amndx] || maskToken.matches[amndx], [amndx].concat(loopNdx), quantifierRecurse) || match;
                                    if (match !== true && match !== undefined && (altIndexArr[altIndexArr.length - 1] < alternateToken.matches.length)) { //no match in the alternations (length mismatch) => look further
                                        var ntndx = $.inArray(match, maskToken.matches) + 1;
                                        if (maskToken.matches.length > ntndx) {
                                            match = handleMatch(maskToken.matches[ntndx], [ntndx].concat(loopNdx.slice(1, loopNdx.length)), quantifierRecurse);
                                            if (match) {
                                                altIndexArr.push(ntndx.toString());
                                                $.each(matches, function (ndx, lmnt) {
                                                    lmnt.alternation = loopNdx.length - 1;
                                                });
                                            }
                                        }
                                    }
                                    maltMatches = matches.slice();
                                    testPos = currentPos;
                                    matches = [];

                                    //fuzzy merge matches
                                    for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                                        var altMatch = maltMatches[ndx1], hasMatch = false;
                                        altMatch.alternation = altMatch.alternation || loopNdxCnt;
                                        for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                                            var altMatch2 = malternateMatches[ndx2];
                                            //verify equality
                                            if (typeof altIndex !== "string" || $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr) !== -1) {
                                                if (altMatch.match.def === altMatch2.match.def || staticCanMatchDefinition(altMatch, altMatch2)) {
                                                    hasMatch = altMatch.match.mask === altMatch2.match.mask;
                                                    if (altMatch2.locator[altMatch.alternation].toString().indexOf(altMatch.locator[altMatch.alternation]) === -1) {
                                                        altMatch2.locator[altMatch.alternation] = altMatch2.locator[altMatch.alternation] + "," + altMatch.locator[altMatch.alternation];
                                                        altMatch2.alternation = altMatch.alternation; //we pass the alternation index => used in determineLastRequiredPosition
                                                        if (altMatch.match.fn == null) { //staticCanMatchDefinition => set no alternate on match
                                                            altMatch2.na = altMatch2.na || altMatch.locator[altMatch.alternation].toString();
                                                            if (altMatch2.na.indexOf(altMatch.locator[altMatch.alternation]) === -1)
                                                                altMatch2.na = altMatch2.na + "," + altMatch.locator[altMatch.alternation];
                                                        }
                                                    }
                                                    break;
                                                }
                                            }
                                        }
                                        if (!hasMatch) {
                                            malternateMatches.push(altMatch);
                                        }
                                    }
                                }
                                if (typeof altIndex == "string") { //filter matches
                                    malternateMatches = $.map(malternateMatches, function (lmnt, ndx) {
                                        if (isFinite(ndx)) {
                                            var mamatch,
                                                alternation = lmnt.alternation,
                                                altLocArr = lmnt.locator[alternation].toString().split(",");
                                            lmnt.locator[alternation] = undefined;
                                            lmnt.alternation = undefined;

                                            for (var alndx = 0; alndx < altLocArr.length; alndx++) {
                                                mamatch = $.inArray(altLocArr[alndx], altIndexArr) !== -1;
                                                if (mamatch) { //rebuild the locator with valid entries
                                                    if (lmnt.locator[alternation] !== undefined) {
                                                        lmnt.locator[alternation] += ",";
                                                        lmnt.locator[alternation] += altLocArr[alndx];
                                                    } else lmnt.locator[alternation] = parseInt(altLocArr[alndx]);

                                                    lmnt.alternation = alternation;
                                                }
                                            }

                                            if (lmnt.locator[alternation] !== undefined) return lmnt;
                                        }
                                    });
                                }

                                matches = currentMatches.concat(malternateMatches);
                                testPos = pos;
                                insertStop = matches.length > 0; //insert a stopelemnt when there is an alternate - needed for non-greedy option

                                //cloneback
                                ndxInitializer = ndxInitializerClone.slice();
                            } else {
                                // if (alternateToken.matches[altIndex]) { //if not in the initial alternation => look further
                                match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [altIndex].concat(loopNdx), quantifierRecurse);
                                // } else match = false;
                            }
                            if (match) return true;
                        } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) {
                            var qt = match;
                            for (var qndx = (ndxInitializer.length > 0) ? ndxInitializer.shift() : 0; (qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max)) && testPos <= pos; qndx++) {
                                var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
                                match = handleMatch(tokenGroup, [qndx].concat(loopNdx), tokenGroup); //set the tokenGroup as quantifierRecurse marker
                                if (match) {
                                    //get latest match
                                    latestMatch = matches[matches.length - 1].match;
                                    latestMatch.optionalQuantifier = qndx > (qt.quantifier.min - 1);
                                    if (isFirstMatch(latestMatch, tokenGroup)) { //search for next possible match
                                        if (qndx > (qt.quantifier.min - 1)) {
                                            insertStop = true;
                                            testPos = pos; //match the position after the group
                                            break; //stop quantifierloop
                                        } else return true;
                                    } else {
                                        return true;
                                    }
                                }
                            }
                        } else {
                            match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
                            if (match) return true;
                        }
                    }

                    else
                        testPos++;
                }

                for (var tndx = (ndxInitializer.length > 0 ? ndxInitializer.shift() : 0); tndx < maskToken.matches.length; tndx++) {
                    if (maskToken.matches[tndx].isQuantifier !== true) {
                        var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);
                        if (match && testPos === pos) {
                            return match;
                        } else if (testPos > pos) {
                            break;
                        }
                    }
                }
            }

            function mergeLocators(tests) {
                var locator = [];
                if (!$.isArray(tests)) tests = [tests];
                if (tests.length > 0) {
                    if (tests[0].alternation === undefined) {
                        locator = determineTestTemplate(tests.slice()).locator.slice();
                        if (locator.length === 0) locator = tests[0].locator.slice();
                    }
                    else {
                        $.each(tests, function (ndx, tst) {
                            if (tst.def !== "") {
                                if (locator.length === 0) locator = tst.locator.slice();
                                else {
                                    for (var i = 0; i < locator.length; i++) {
                                        if (tst.locator[i] && locator[i].toString().indexOf(tst.locator[i]) === -1) {
                                            locator[i] += "," + tst.locator[i];
                                        }
                                    }
                                }
                            }
                        });
                    }
                }
                return locator;
            }

            function filterTests(tests) {
                if (opts.keepStatic && pos > 0) {
                    if (tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0)) {
                        if (tests[0].match.optionality !== true &&
                            tests[0].match.optionalQuantifier !== true &&
                            tests[0].match.fn === null && !/[0-9a-bA-Z]/.test(tests[0].match.def)) {
                            return [determineTestTemplate(tests)]
                        }
                    }
                }

                return tests;
            }

            if (pos > -1) {
                if (ndxIntlzr === undefined) { //determine index initializer
                    var previousPos = pos - 1,
                        test;
                    while ((test = getMaskSet().validPositions[previousPos] || getMaskSet().tests[previousPos]) === undefined && previousPos > -1) {
                        previousPos--;
                    }
                    if (test !== undefined && previousPos > -1) {
                        ndxInitializer = mergeLocators(test);
                        cacheDependency = ndxInitializer.join("");
                        testPos = previousPos;
                    }
                }
                if (getMaskSet().tests[pos] && getMaskSet().tests[pos][0].cd === cacheDependency) { //cacheDependency is set on all tests, just check on the first
                    //console.log("cache hit " + pos + " - " + ndxIntlzr);
                    return filterTests(getMaskSet().tests[pos]);
                }
                for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
                    var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]);
                    if ((match && testPos === pos) || testPos > pos) {
                        break;
                    }
                }
            }
            if (matches.length === 0 || insertStop) {
                matches.push({
                    match: {
                        fn: null,
                        cardinality: 0,
                        optionality: true,
                        casing: null,
                        def: "",
                        placeholder: ""
                    },
                    locator: [],
                    cd: cacheDependency
                });
            }

            if (ndxIntlzr !== undefined && getMaskSet().tests[pos]) { //prioritize full tests for caching
                return filterTests($.extend(true, [], matches));
            }
            getMaskSet().tests[pos] = $.extend(true, [], matches); //set a clone to prevent overwriting some props
            //console.log(pos + " - " + JSON.stringify(matches));
            return filterTests(getMaskSet().tests[pos]);
        }

        function getBufferTemplate() {
            if (getMaskSet()._buffer === undefined) {
                //generate template
                getMaskSet()._buffer = getMaskTemplate(false, 1);
                if (getMaskSet().buffer === undefined) {
                    getMaskSet()._buffer.slice();
                }
            }
            return getMaskSet()._buffer;
        }

        function getBuffer(noCache) {
            if (getMaskSet().buffer === undefined || noCache === true) {
                getMaskSet().buffer = getMaskTemplate(true, getLastValidPosition(), true);
            }
            return getMaskSet().buffer;
        }

        function refreshFromBuffer(start, end, buffer) {
            var i;
            if (start === true) {
                resetMaskSet();
                start = 0;
                end = buffer.length;
            } else {
                for (i = start; i < end; i++) {
                    delete getMaskSet().validPositions[i];
                }
            }
            for (i = start; i < end; i++) {
                resetMaskSet(true); //prevents clobber from the buffer
                if (buffer[i] !== opts.skipOptionalPartCharacter) {
                    isValid(i, buffer[i], true, true);
                }
            }
        }

        function casing(elem, test, pos) {
            switch (test.casing) {
                case "upper":
                    elem = elem.toUpperCase();
                    break;
                case "lower":
                    elem = elem.toLowerCase();
                    break;
                case "title":
                    var posBefore = getMaskSet().validPositions[pos - 1];
                    if (pos === 0 || posBefore && posBefore.input === String.fromCharCode(Inputmask.keyCode.SPACE)) {
                        elem = elem.toUpperCase();
                    } else {
                        elem = elem.toLowerCase();
                    }
                    break;
            }

            return elem;
        }

        function checkAlternationMatch(altArr1, altArr2) {
            var altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1),
                isMatch = false;
            for (var alndx = 0; alndx < altArr1.length; alndx++) {
                if ($.inArray(altArr1[alndx], altArrC) !== -1) {
                    isMatch = true;
                    break;
                }
            }
            return isMatch;
        }

        function isValid(pos, c, strict, fromSetValid, fromAlternate) { //strict true ~ no correction or autofill
            function isSelection(posObj) {
                return isRTL ? (posObj.begin - posObj.end) > 1 || ((posObj.begin - posObj.end) === 1 && opts.insertMode) :
                (posObj.end - posObj.begin) > 1 || ((posObj.end - posObj.begin) === 1 && opts.insertMode);
            }

            strict = strict === true; //always set a value to strict to prevent possible strange behavior in the extensions

            var maskPos = pos;
            if (pos.begin !== undefined) { //position was a position object - used to handle a delete by typing over a selection
                maskPos = isRTL && !isSelection(pos) ? pos.end : pos.begin;
            }

            function _isValid(position, c, strict) {
                var rslt = false;
                $.each(getTests(position), function (ndx, tst) {
                        var test = tst.match,
                            loopend = c ? 1 : 0,
                            chrs = "";
                        for (var i = test.cardinality; i > loopend; i--) {
                            chrs += getBufferElement(position - (i - 1));
                        }
                        if (c) {
                            chrs += c;
                        }

                        //make sure the buffer is set and correct
                        getBuffer(true);
                        //return is false or a json object => { pos: ??, c: ??} or true
                        rslt = test.fn != null ?
                            test.fn.test(chrs, getMaskSet(), position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && test.def !== "" ? //non mask
                        {
                            c: test.placeholder || test.def,
                            pos: position
                        } : false;

                        if (rslt !== false) {
                            var elem = rslt.c !== undefined ? rslt.c : c;
                            elem = (elem === opts.skipOptionalPartCharacter && test.fn === null) ? (test.placeholder || test.def) : elem;

                            var validatedPos = position,
                                possibleModifiedBuffer = getBuffer();

                            if (rslt.remove !== undefined) { //remove position(s)
                                if (!$.isArray(rslt.remove)) rslt.remove = [rslt.remove];
                                $.each(rslt.remove.sort(function (a, b) {
                                    return b - a;
                                }), function (ndx, lmnt) {
                                    stripValidPositions(lmnt, lmnt + 1, true);
                                });
                            }
                            if (rslt.insert !== undefined) { //insert position(s)
                                if (!$.isArray(rslt.insert)) rslt.insert = [rslt.insert];
                                $.each(rslt.insert.sort(function (a, b) {
                                    return a - b;
                                }), function (ndx, lmnt) {
                                    isValid(lmnt.pos, lmnt.c, false, fromSetValid);
                                });
                            }

                            if (rslt.refreshFromBuffer) {
                                var refresh = rslt.refreshFromBuffer;
                                strict = true;
                                refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, possibleModifiedBuffer);
                                if (rslt.pos === undefined && rslt.c === undefined) {
                                    rslt.pos = getLastValidPosition();
                                    return false; //breakout if refreshFromBuffer && nothing to insert
                                }
                                validatedPos = rslt.pos !== undefined ? rslt.pos : position;
                                if (validatedPos !== position) {
                                    rslt = $.extend(rslt, isValid(validatedPos, elem, true, fromSetValid)); //revalidate new position strict
                                    return false;
                                }

                            } else if (rslt !== true && rslt.pos !== undefined && rslt.pos !== position) { //their is a position offset
                                validatedPos = rslt.pos;
                                refreshFromBuffer(position, validatedPos, getBuffer().slice());
                                if (validatedPos !== position) {
                                    rslt = $.extend(rslt, isValid(validatedPos, elem, true)); //revalidate new position strict
                                    return false;
                                }
                            }

                            if (rslt !== true && rslt.pos === undefined && rslt.c === undefined) {
                                return false; //breakout if nothing to insert
                            }

                            if (ndx > 0) {
                                resetMaskSet(true);
                            }

                            if (!setValidPosition(validatedPos, $.extend({}, tst, {
                                    "input": casing(elem, test, validatedPos)
                                }), fromSetValid, isSelection(pos))) {
                                rslt = false;
                            }
                            return false; //break from $.each
                        }
                    }
                );
                return rslt;
            }

            function alternate(pos, c, strict) {
                var validPsClone = $.extend(true, {}, getMaskSet().validPositions),
                    lastAlt,
                    alternation,
                    isValidRslt = false,
                    altPos, prevAltPos, i, validPos, lAltPos = getLastValidPosition(), altNdxs, decisionPos;
                //find last modified alternation
                prevAltPos = getMaskSet().validPositions[lAltPos];
                for (; lAltPos >= 0; lAltPos--) {
                    altPos = getMaskSet().validPositions[lAltPos];
                    if (altPos && altPos.alternation !== undefined) {
                        lastAlt = lAltPos;
                        alternation = getMaskSet().validPositions[lastAlt].alternation;
                        if (prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) {
                            break;
                        }
                        prevAltPos = altPos;
                    }
                }
                if (alternation !== undefined) {
                    decisionPos = parseInt(lastAlt);
                    var decisionTaker = prevAltPos.locator[prevAltPos.alternation || alternation] !== undefined ? prevAltPos.locator[prevAltPos.alternation || alternation] : altNdxs[0]; //no match in the alternations (length mismatch)
                    if (decisionTaker.length > 0) { //no decision taken ~ take first one as decider
                        decisionTaker = decisionTaker.split(",")[0];
                    }
                    var possibilityPos = getMaskSet().validPositions[decisionPos], prevPos = getMaskSet().validPositions[decisionPos - 1];
                    $.each(getTests(decisionPos, prevPos ? prevPos.locator : undefined, decisionPos - 1), function (ndx, test) {
                        altNdxs = test.locator[alternation] ? test.locator[alternation].toString().split(",") : [];
                        for (var mndx = 0; mndx < altNdxs.length; mndx++) {
                            var validInputs = [],
                                staticInputsBeforePos = 0,
                                staticInputsBeforePosAlternate = 0,
                                verifyValidInput = false;
                            if (decisionTaker < altNdxs[mndx] && (test.na === undefined || $.inArray(altNdxs[mndx], test.na.split(",")) === -1)) {
                                getMaskSet().validPositions[decisionPos] = $.extend(true, {}, test);
                                var possibilities = getMaskSet().validPositions[decisionPos].locator;
                                getMaskSet().validPositions[decisionPos].locator[alternation] = parseInt(altNdxs[mndx]); //set forced decision
                                if (test.match.fn == null) {
                                    if (possibilityPos.input !== test.match.def) {
                                        verifyValidInput = true; //verify that the new definition matches the input
                                        if (possibilityPos.generatedInput !== true) {
                                            validInputs.push(possibilityPos.input);
                                        }
                                    }
                                    staticInputsBeforePosAlternate++;
                                    getMaskSet().validPositions[decisionPos].generatedInput = !/[0-9a-bA-Z]/.test(test.match.def);
                                    getMaskSet().validPositions[decisionPos].input = test.match.def;
                                } else {
                                    getMaskSet().validPositions[decisionPos].input = possibilityPos.input;
                                }
                                for (i = decisionPos + 1; i < getLastValidPosition(undefined, true) + 1; i++) {
                                    validPos = getMaskSet().validPositions[i];
                                    if (validPos && validPos.generatedInput !== true && /[0-9a-bA-Z]/.test(validPos.input)) {
                                        validInputs.push(validPos.input);
                                    } else if (i < pos) staticInputsBeforePos++;
                                    delete getMaskSet().validPositions[i];
                                }
                                if (verifyValidInput && validInputs[0] === test.match.def) {
                                    validInputs.shift();
                                }
                                resetMaskSet(true); //clear getbuffer
                                isValidRslt = true;
                                while (validInputs.length > 0) {
                                    var input = validInputs.shift();
                                    if (input !== opts.skipOptionalPartCharacter) {
                                        if (!(isValidRslt = isValid(getLastValidPosition(undefined, true) + 1, input, false, fromSetValid, true))) {
                                            break;
                                        }
                                    }
                                }

                                if (isValidRslt) {
                                    getMaskSet().validPositions[decisionPos].locator = possibilities; //reset forceddecision ~ needed for proper delete
                                    var targetLvp = getLastValidPosition(pos) + 1;
                                    for (i = decisionPos + 1; i < getLastValidPosition() + 1; i++) {
                                        validPos = getMaskSet().validPositions[i];
                                        if ((validPos === undefined || validPos.match.fn == null) && i < (pos + (staticInputsBeforePosAlternate - staticInputsBeforePos))) {
                                            staticInputsBeforePosAlternate++;
                                        }
                                    }
                                    pos = pos + (staticInputsBeforePosAlternate - staticInputsBeforePos);
                                    isValidRslt = isValid(pos > targetLvp ? targetLvp : pos, c, strict, fromSetValid, true);
                                }
                                if (!isValidRslt) {
                                    resetMaskSet();
                                    getMaskSet().validPositions = $.extend(true, {}, validPsClone);
                                } else return false; //exit $.each
                            }
                        }
                    });
                }

                return isValidRslt;
            }

//set alternator choice on previous skipped placeholder positions
            function trackbackAlternations(originalPos, newPos) {
                var vp = getMaskSet().validPositions[newPos],
                    targetLocator = vp.locator,
                    tll = targetLocator.length;

                for (var ps = originalPos; ps < newPos; ps++) {
                    if (getMaskSet().validPositions[ps] === undefined && !isMask(ps, true)) {
                        var tests = getTests(ps),
                            bestMatch = tests[0],
                            equality = -1;
                        $.each(tests, function (ndx, tst) { //find best matching
                            for (var i = 0; i < tll; i++) {
                                if (tst.locator[i] !== undefined && checkAlternationMatch(tst.locator[i].toString().split(","), targetLocator[i].toString().split(","))) {
                                    if (equality < i) {
                                        equality = i;
                                        bestMatch = tst;
                                    }
                                } else break;
                            }
                        });
                        setValidPosition(ps, $.extend({}, bestMatch, {
                            "input": bestMatch.match.placeholder || bestMatch.match.def
                        }), true);
                    }
                }
            }

            var result = false,
                positionsClone = $.extend(true, {}, getMaskSet().validPositions); //clone the currentPositions

//Check for a nonmask before the pos
//find previous valid
            for (var pndx = maskPos - 1; pndx > -1; pndx--) {
                if (getMaskSet().validPositions[pndx]) break;
            }
////fill missing nonmask and valid placeholders
            var testTemplate, generatedPos;
            for (pndx++; pndx < maskPos; pndx++) {
                if (getMaskSet().validPositions[pndx] === undefined &&
                    (opts.jitMasking === false || opts.jitMasking > pndx) &&
                    ((testTemplate = getTestTemplate(pndx, getTestTemplate(pndx - 1).locator, pndx - 1)).match.def === opts.radixPointDefinitionSymbol || !isMask(pndx, true) ||
                    ($.inArray(opts.radixPoint, getBuffer()) < pndx && testTemplate.match.fn && testTemplate.match.fn.test(getPlaceholder(pndx), getMaskSet(), pndx, false, opts)))) {
                    result = _isValid(pndx, testTemplate.match.placeholder || (testTemplate.match.fn == null ? testTemplate.match.def : (getPlaceholder(pndx) !== "" ? getPlaceholder(pndx) : getBuffer()[pndx])), true);
                    if (result !== false) {
                        getMaskSet().validPositions[result.pos || pndx].generatedInput = true;
                    }
                }
            }


            if (isSelection(pos)) {
                handleRemove(undefined, Inputmask.keyCode.DELETE, pos);
                maskPos = getMaskSet().p;
            }

            if (maskPos < getMaskSet().maskLength) {
                result = _isValid(maskPos, c, strict);
                if ((!strict || fromSetValid === true) && result === false) {
                    var currentPosValid = getMaskSet().validPositions[maskPos];
                    if (currentPosValid && currentPosValid.match.fn === null && (currentPosValid.match.def === c || c === opts.skipOptionalPartCharacter)) {
                        result = {
                            "caret": seekNext(maskPos)
                        };
                    } else if ((opts.insertMode || getMaskSet().validPositions[seekNext(maskPos)] === undefined) && !isMask(maskPos, true)) { //does the input match on a further position?
                        var testsFromPos = getTests(maskPos).slice();
                        if (testsFromPos[testsFromPos.length - 1].match.def === "") testsFromPos.pop();
                        var staticChar = determineTestTemplate(testsFromPos, true);
                        if (staticChar) {
                            staticChar = staticChar.match.placeholder || staticChar.match.def;
                            _isValid(maskPos, staticChar, strict);
                        }
                        for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) {
                            result = _isValid(nPos, c, strict);
                            if (result !== false) {
                                trackbackAlternations(maskPos, nPos);
                                maskPos = nPos;
                                break;
                            }
                        }
                    }
                }
            }
            if (result === false && opts.keepStatic && !strict && fromAlternate !== true) { //try fuzzy alternator logic
                result = alternate(maskPos, c, strict);
            }
            if (result === true) {
                result = {
                    "pos": maskPos
                };
            }
            if ($.isFunction(opts.postValidation) && result !== false && !strict && fromSetValid !== true) {
                result = opts.postValidation(getBuffer(true), result, opts) ? result : false;
            }

            if (result.pos === undefined) {
                result.pos = maskPos;
            }

            if (result === false) {
                resetMaskSet(true);
                getMaskSet().validPositions = $.extend(true, {}, positionsClone); //revert validation changes
            }

            return result;
        }

        function isMask(pos, strict) {
            var test;
            if (strict) {
                test = getTestTemplate(pos).match;
                if (test.def === "") test = getTest(pos).match;
            } else test = getTest(pos).match;

            if (test.fn != null) {
                return test.fn;
            } else if (strict !== true && pos > -1) {
                var tests = getTests(pos);
                return tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0);
            }
            return false;
        }

        function seekNext(pos, newBlock) {
            var maskL = getMaskSet().maskLength;
            if (pos >= maskL) return maskL;
            var position = pos;
            while (++position < maskL &&
            ((newBlock === true && (getTest(position).match.newBlockMarker !== true || !isMask(position))) ||
            (newBlock !== true && !isMask(position)))) {
            }
            return position;
        }

        function seekPrevious(pos, newBlock) {
            var position = pos, tests;
            if (position <= 0) return 0;

            while (--position > 0 &&
            ((newBlock === true && getTest(position).match.newBlockMarker !== true) ||
            (newBlock !== true && !isMask(position) &&
            (tests = getTests(position), tests.length < 2 || (tests.length === 2 && tests[1].match.def === ""))))) {
            }

            return position;
        }

        function getBufferElement(position) {
            return getMaskSet().validPositions[position] === undefined ? getPlaceholder(position) : getMaskSet().validPositions[position].input;
        }

        function writeBuffer(input, buffer, caretPos, event, triggerInputEvent) {
            if (event && $.isFunction(opts.onBeforeWrite)) {
                var result = opts.onBeforeWrite(event, buffer, caretPos, opts);
                if (result) {
                    if (result.refreshFromBuffer) {
                        var refresh = result.refreshFromBuffer;
                        refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, result.buffer || buffer);
                        buffer = getBuffer(true);
                    }
                    //only alter when intented !== undefined
                    if (caretPos !== undefined) caretPos = result.caret !== undefined ? result.caret : caretPos;
                }
            }
            input.inputmask._valueSet(buffer.join(""));
            if (caretPos !== undefined && (event === undefined || event.type !== "blur")) {
                caret(input, caretPos);
            }
            if (triggerInputEvent === true) {
                skipInputEvent = true;
                $(input).trigger("input");
            }
        }

        function getPlaceholder(pos, test) {
            test = test || getTest(pos).match;
            if (test.placeholder !== undefined) {
                return test.placeholder;
            } else if (test.fn === null) {
                if (pos > -1 && getMaskSet().validPositions[pos] === undefined) {
                    var tests = getTests(pos),
                        staticAlternations = [],
                        prevTest;
                    if (tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0)) {
                        for (var i = 0; i < tests.length; i++) {
                            if (tests[i].match.optionality !== true && tests[i].match.optionalQuantifier !== true &&
                                (tests[i].match.fn === null || (prevTest === undefined || tests[i].match.fn.test(prevTest.match.def, getMaskSet(), pos, true, opts) !== false))) {
                                staticAlternations.push(tests[i]);
                                if (tests[i].match.fn === null) prevTest = tests[i];
                                if (staticAlternations.length > 1) {
                                    if (/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)) {
                                        return opts.placeholder.charAt(pos % opts.placeholder.length);
                                    }
                                }
                            }
                        }
                    }
                }
                return test.def;
            }

            return opts.placeholder.charAt(pos % opts.placeholder.length);
        }

        function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
            var inputValue = nptvl.slice(),
                charCodes = "",
                initialNdx = 0, result = undefined;

            function isTemplateMatch() {
                var isMatch = false;
                var charCodeNdx = getBufferTemplate().slice(initialNdx, seekNext(initialNdx)).join("").indexOf(charCodes);
                if (charCodeNdx !== -1 && !isMask(initialNdx)) {
                    isMatch = true;
                    var bufferTemplateArr = getBufferTemplate().slice(initialNdx, initialNdx + charCodeNdx);
                    for (var i = 0; i < bufferTemplateArr.length; i++) {
                        if (bufferTemplateArr[i] !== " ") {
                            isMatch = false;
                            break;
                        }
                    }
                }

                return isMatch;
            }

            resetMaskSet();
            getMaskSet().p = seekNext(-1);
            // if (writeOut) input.inputmask._valueSet(""); //initial clear

            if (!strict) {
                if (opts.autoUnmask !== true) {
                    var staticInput = getBufferTemplate().slice(0, seekNext(-1)).join(""),
                        matches = inputValue.join("").match(new RegExp("^" + Inputmask.escapeRegex(staticInput), "g"));
                    if (matches && matches.length > 0) {
                        inputValue.splice(0, matches.length * staticInput.length);
                        initialNdx = seekNext(initialNdx);
                    }
                } else {
                    initialNdx = seekNext(initialNdx);
                }
            }


            $.each(inputValue, function (ndx, charCode) {
                if (charCode !== undefined) { //inputfallback strips some elements out of the inputarray.  $.each logically presents them as undefined
                    var keypress = new $.Event("keypress");
                    keypress.which = charCode.charCodeAt(0);
                    charCodes += charCode;
                    var lvp = getLastValidPosition(undefined, true),
                        lvTest = getMaskSet().validPositions[lvp],
                        nextTest = getTestTemplate(lvp + 1, lvTest ? lvTest.locator.slice() : undefined, lvp);
                    if (!isTemplateMatch() || strict || opts.autoUnmask) {
                        var pos = strict ? ndx : (nextTest.match.fn == null && nextTest.match.optionality && (lvp + 1) < getMaskSet().p ? lvp + 1 : getMaskSet().p);
                        result = keypressEvent.call(input, keypress, true, false, strict, pos);
                        initialNdx = pos + 1;
                        charCodes = "";
                    } else {
                        result = keypressEvent.call(input, keypress, true, false, true, lvp + 1);
                    }
                    if (!strict && $.isFunction(opts.onBeforeWrite)) {
                        result = opts.onBeforeWrite(keypress, getBuffer(), result.forwardPosition, opts);
                        if (result && result.refreshFromBuffer) {
                            var refresh = result.refreshFromBuffer;
                            refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, result.buffer);
                            resetMaskSet(true);
                            if (result.caret) {
                                getMaskSet().p = result.caret;
                            }
                        }
                    }
                }
            });
            if (writeOut) {
                var caretPos = (document.activeElement === input && (initiatingEvent || result)) ? (initiatingEvent ? caret(input).begin : result.forwardPosition) : undefined,
                    offset = getBuffer().length - input.inputmask._valueGet().length;
                writeBuffer(input, getBuffer(), caretPos + offset, initiatingEvent || new $.Event("checkval"));
            }
        }

        function unmaskedvalue(input) {
            if (input && input.inputmask === undefined) {
                return input.value;
            }

            var umValue = [],
                vps = getMaskSet().validPositions;
            for (var pndx in vps) {
                if (vps[pndx].match && vps[pndx].match.fn != null) {
                    umValue.push(vps[pndx].input);
                }
            }
            var unmaskedValue = umValue.length === 0 ? "" : (isRTL ? umValue.reverse() : umValue).join("");
            if ($.isFunction(opts.onUnMask)) {
                var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
                unmaskedValue = (opts.onUnMask(bufferValue, unmaskedValue, opts) || unmaskedValue);
            }
            return unmaskedValue;
        }

        function caret(input, begin, end, notranslate) {
            function translatePosition(pos) {
                if (notranslate !== true && isRTL && typeof pos === "number" && (!opts.greedy || opts.placeholder !== "")) {
                    var bffrLght = getBuffer().join("").length; //join is needed because sometimes we get an empty buffer element which must not be counted for the caret position (numeric alias)
                    pos = bffrLght - pos;
                }
                return pos;
            }

            var range;
            if (typeof begin === "number") {
                begin = translatePosition(begin);
                end = translatePosition(end);
                end = (typeof end == "number") ? end : begin;
                // if (!$(input).is(":visible")) {
                //  return;
                // }

                var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
                input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0;

                if (!mobile && opts.insertMode === false && begin === end) end++; //set visualization for insert/overwrite mode
                if (input.setSelectionRange) {
                    input.selectionStart = begin;
                    input.selectionEnd = end;
                } else if (window.getSelection) {
                    range = document.createRange();
                    if (input.firstChild === undefined || input.firstChild === null) {
                        var textNode = document.createTextNode("");
                        input.appendChild(textNode);
                    }
                    range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length);
                    range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length);
                    range.collapse(true);
                    var sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);
                    //input.focus();
                } else if (input.createTextRange) {
                    range = input.createTextRange();
                    range.collapse(true);
                    range.moveEnd("character", end);
                    range.moveStart("character", begin);
                    range.select();

                }
            } else {
                if (input.setSelectionRange) {
                    begin = input.selectionStart;
                    end = input.selectionEnd;
                } else if (window.getSelection) {
                    range = window.getSelection().getRangeAt(0);
                    if (range.commonAncestorContainer.parentNode === input || range.commonAncestorContainer === input) {
                        begin = range.startOffset;
                        end = range.endOffset;
                    }
                } else if (document.selection && document.selection.createRange) {
                    range = document.selection.createRange();
                    begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length);
                    end = begin + range.text.length;
                }
                /*eslint-disable consistent-return */
                return {
                    "begin": translatePosition(begin),
                    "end": translatePosition(end)
                };
                /*eslint-enable consistent-return */
            }
        }

        function determineLastRequiredPosition(returnDefinition) {
            var buffer = getBuffer(),
                bl = buffer.length,
                pos, lvp = getLastValidPosition(),
                positions = {},
                lvTest = getMaskSet().validPositions[lvp],
                ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined,
                testPos;
            for (pos = lvp + 1; pos < buffer.length; pos++) {
                testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
                ndxIntlzr = testPos.locator.slice();
                positions[pos] = $.extend(true, {}, testPos);
            }

            var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;
            for (pos = bl - 1; pos > lvp; pos--) {
                testPos = positions[pos];
                if ((testPos.match.optionality ||
                    testPos.match.optionalQuantifier ||
                    (lvTestAlt && ((lvTestAlt !== positions[pos].locator[lvTest.alternation] && testPos.match.fn != null) ||
                    (testPos.match.fn === null && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && getTests(pos)[0].def !== "")))) && buffer[pos] === getPlaceholder(pos, testPos.match)) {
                    bl--;
                } else break;
            }
            return returnDefinition ? {
                "l": bl,
                "def": positions[bl] ? positions[bl].match : undefined
            } : bl;
        }

        function clearOptionalTail(buffer) {
            var rl = determineLastRequiredPosition(),
                lmib = buffer.length - 1;
            for (; lmib > rl; lmib--) {
                if (isMask(lmib)) break; //fixme ismask is not good enough
            }
            buffer.splice(rl, lmib + 1 - rl);

            return buffer;
        }

        function isComplete(buffer) { //return true / false / undefined (repeat *)
            if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);
            if (opts.repeat === "*") return undefined;
            var complete = false,
                lrp = determineLastRequiredPosition(true),
                aml = seekPrevious(lrp.l);

            if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
                complete = true;
                for (var i = 0; i <= aml; i++) {
                    var test = getTestTemplate(i).match;
                    if ((test.fn !== null && getMaskSet().validPositions[i] === undefined && test.optionality !== true && test.optionalQuantifier !== true) || (test.fn === null && buffer[i] !== getPlaceholder(i, test))) {
                        complete = false;
                        break;
                    }
                }
            }
            return complete;
        }

        var EventRuler = {
            on: function (input, eventName, eventHandler) {
                var ev = function (e) {
                    // console.log("triggered " + e.type);
                    if (this.inputmask === undefined && this.nodeName !== "FORM") { //happens when cloning an object with jquery.clone
                        var imOpts = $.data(this, "_inputmask_opts");
                        if (imOpts)(new Inputmask(imOpts)).mask(this);
                        else EventRuler.off(this);
                    } else if (e.type !== "setvalue" && (this.disabled || (this.readOnly && !(e.type === "keydown" && (e.ctrlKey && e.keyCode === 67) || (opts.tabThrough === false && e.keyCode === Inputmask.keyCode.TAB))))) {
                        e.preventDefault();
                    } else {
                        switch (e.type) {
                            case "input":
                                if (skipInputEvent === true) {
                                    skipInputEvent = false;
                                    return e.preventDefault();
                                }
                                break;
                            case "keydown":
                                //Safari 5.1.x - modal dialog fires keypress twice workaround
                                skipKeyPressEvent = false;
                                skipInputEvent = false;
                                break;
                            case "keypress":
                                if (skipKeyPressEvent === true) {
                                    return e.preventDefault();
                                }
                                skipKeyPressEvent = true;
                                break;
                            case "click":
                                if (iemobile) {
                                    var that = this;
                                    setTimeout(function () {
                                        eventHandler.apply(that, arguments);
                                    }, 0);
                                    return false;
                                }
                                break;
                        }
                        // console.log("executed " + e.type);
                        var returnVal = eventHandler.apply(this, arguments);
                        if (returnVal === false) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                        return returnVal;
                    }
                };
                //keep instance of the event
                input.inputmask.events[eventName] = input.inputmask.events[eventName] || [];
                input.inputmask.events[eventName].push(ev);

                if ($.inArray(eventName, ["submit", "reset"]) !== -1) {
                    if (input.form != null) $(input.form).on(eventName, ev);
                } else {
                    $(input).on(eventName, ev);
                }
            },
            off: function (input, event) {
                if (input.inputmask && input.inputmask.events) {
                    var events;
                    if (event) {
                        events = [];
                        events[event] = input.inputmask.events[event];
                    } else {
                        events = input.inputmask.events;
                    }
                    $.each(events, function (eventName, evArr) {
                        while (evArr.length > 0) {
                            var ev = evArr.pop();
                            if ($.inArray(eventName, ["submit", "reset"]) !== -1) {
                                if (input.form != null) $(input.form).off(eventName, ev);
                            } else {
                                $(input).off(eventName, ev);
                            }
                        }
                        delete input.inputmask.events[eventName];
                    });
                }
            }
        };

        function patchValueProperty(npt) {
            var valueGet;
            var valueSet;

            function patchValhook(type) {
                if ($.valHooks && ($.valHooks[type] === undefined || $.valHooks[type].inputmaskpatch !== true)) {
                    var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function (elem) {
                        return elem.value;
                    };
                    var valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function (elem, value) {
                        elem.value = value;
                        return elem;
                    };

                    $.valHooks[type] = {
                        get: function (elem) {
                            if (elem.inputmask) {
                                if (elem.inputmask.opts.autoUnmask) {
                                    return elem.inputmask.unmaskedvalue();
                                } else {
                                    var result = valhookGet(elem);
                                    return getLastValidPosition(undefined, undefined, elem.inputmask.maskset.validPositions) !== -1 || opts.nullable !== true ? result : "";
                                }
                            } else return valhookGet(elem);
                        },
                        set: function (elem, value) {
                            var $elem = $(elem),
                                result;
                            result = valhookSet(elem, value);
                            if (elem.inputmask) {
                                $elem.trigger("setvalue");
                            }
                            return result;
                        },
                        inputmaskpatch: true
                    };
                }
            }

            function getter() {
                if (this.inputmask) {
                    return this.inputmask.opts.autoUnmask ?
                        this.inputmask.unmaskedvalue() :
                        (getLastValidPosition() !== -1 || opts.nullable !== true ?
                            (document.activeElement === this && opts.clearMaskOnLostFocus ?
                                (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") :
                                valueGet.call(this)) :
                            "");
                } else return valueGet.call(this);
            }

            function setter(value) {
                valueSet.call(this, value);
                if (this.inputmask) {
                    $(this).trigger("setvalue");
                }
            }

            function installNativeValueSetFallback(npt) {
                EventRuler.on(npt, "mouseenter", function (event) {
                    var $input = $(this),
                        input = this,
                        value = input.inputmask._valueGet();
                    if (value !== getBuffer().join("") /*&& getLastValidPosition() > 0*/) {
                        $input.trigger("setvalue");
                    }
                });
            }

            if (!npt.inputmask.__valueGet) {
                if (Object.getOwnPropertyDescriptor) {
                    if (typeof Object.getPrototypeOf !== "function") {
                        Object.getPrototypeOf = typeof "test".__proto__ === "object" ? function (object) {
                            return object.__proto__;
                        } : function (object) {
                            return object.constructor.prototype;
                        };
                    }

                    var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : undefined;
                    if (valueProperty && valueProperty.get && valueProperty.set) {
                        valueGet = valueProperty.get;
                        valueSet = valueProperty.set;
                        Object.defineProperty(npt, "value", {
                            get: getter,
                            set: setter,
                            configurable: true
                        });
                    } else if (npt.tagName !== "INPUT") {
                        valueGet = function () {
                            return this.textContent;
                        };
                        valueSet = function (value) {
                            this.textContent = value;
                        };
                        Object.defineProperty(npt, "value", {
                            get: getter,
                            set: setter,
                            configurable: true
                        });
                    }
                } else if (document.__lookupGetter__ && npt.__lookupGetter__("value")) {
                    valueGet = npt.__lookupGetter__("value");
                    valueSet = npt.__lookupSetter__("value");

                    npt.__defineGetter__("value", getter);
                    npt.__defineSetter__("value", setter);
                }
                npt.inputmask.__valueGet = valueGet; //store native property getter
                npt.inputmask._valueGet = function (overruleRTL) {
                    return isRTL && overruleRTL !== true ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                };
                npt.inputmask.__valueSet = valueSet; //store native property setter
                npt.inputmask._valueSet = function (value, overruleRTL) { //null check is needed for IE8 => otherwise converts to "null"
                    valueSet.call(this.el, (value === null || value === undefined) ? "" : ((overruleRTL !== true && isRTL) ? value.split("").reverse().join("") : value));
                };

                if (valueGet === undefined) { //jquery.val fallback
                    valueGet = function () {
                        return this.value;
                    };
                    valueSet = function (value) {
                        this.value = value;
                    };
                    patchValhook(npt.type);
                    installNativeValueSetFallback(npt);
                }
            }
        }

        function handleRemove(input, k, pos, strict) {
            function generalize() {
                if (opts.keepStatic) {
                    var validInputs = [],
                        lastAlt = getLastValidPosition(-1, true), positionsClone = $.extend(true, {}, getMaskSet().validPositions),
                        prevAltPos = getMaskSet().validPositions[lastAlt];
                    //find last alternation
                    for (; lastAlt >= 0; lastAlt--) {
                        var altPos = getMaskSet().validPositions[lastAlt];
                        if (altPos) {
                            if (/*altPos.generatedInput !== true &&*/ /[0-9a-bA-Z]/.test(altPos.input)) {
                                validInputs.push(altPos.input);
                            }
                            delete getMaskSet().validPositions[lastAlt];
                            if (altPos.alternation !== undefined && altPos.locator[altPos.alternation] !== prevAltPos.locator[altPos.alternation]) {
                                break;
                            }
                            prevAltPos = altPos;
                        }
                    }

                    if (lastAlt > -1) {
                        getMaskSet().p = seekNext(getLastValidPosition(-1, true));
                        while (validInputs.length > 0) {
                            var keypress = new $.Event("keypress");
                            keypress.which = validInputs.pop().charCodeAt(0);
                            keypressEvent.call(input, keypress, true, false, false, getMaskSet().p);
                        }
                    } else getMaskSet().validPositions = $.extend(true, {}, positionsClone); //restore original positions
                }
            }

            if (opts.numericInput || isRTL) {
                if (k === Inputmask.keyCode.BACKSPACE) {
                    k = Inputmask.keyCode.DELETE;
                } else if (k === Inputmask.keyCode.DELETE) {
                    k = Inputmask.keyCode.BACKSPACE;
                }

                if (isRTL) {
                    var pend = pos.end;
                    pos.end = pos.begin;
                    pos.begin = pend;
                }
            }

            if (k === Inputmask.keyCode.BACKSPACE && (pos.end - pos.begin < 1 || opts.insertMode === false)) {
                pos.begin = seekPrevious(pos.begin);
                if (getMaskSet().validPositions[pos.begin] !== undefined && (getMaskSet().validPositions[pos.begin].input === opts.groupSeparator || getMaskSet().validPositions[pos.begin].input === opts.radixPoint)) {
                    pos.begin--;
                }
            } else if (k === Inputmask.keyCode.DELETE && pos.begin === pos.end) {
                pos.end = isMask(pos.end, true) ? pos.end + 1 : seekNext(pos.end) + 1;
                if (getMaskSet().validPositions[pos.begin] !== undefined && (getMaskSet().validPositions[pos.begin].input === opts.groupSeparator || getMaskSet().validPositions[pos.begin].input === opts.radixPoint)) {
                    pos.end++;
                }
            }

            stripValidPositions(pos.begin, pos.end, false, strict);
            if (strict !== true) {
                generalize(); //revert the alternation
            }
            var lvp = getLastValidPosition(pos.begin, true);
            if (lvp < pos.begin) {
                //if (lvp === -1) resetMaskSet();
                getMaskSet().p = seekNext(lvp);
            } else if (strict !== true) {
                getMaskSet().p = pos.begin;
            }
        }

        function keydownEvent(e) {
            var input = this,
                $input = $(input),
                k = e.keyCode,
                pos = caret(input);

            //backspace, delete, and escape get special treatment
            if (k === Inputmask.keyCode.BACKSPACE || k === Inputmask.keyCode.DELETE || (iphone && k === Inputmask.keyCode.BACKSPACE_SAFARI) || (e.ctrlKey && k === Inputmask.keyCode.X && !isInputEventSupported("cut"))) { //backspace/delete
                e.preventDefault(); //stop default action but allow propagation
                handleRemove(input, k, pos);
                writeBuffer(input, getBuffer(true), getMaskSet().p, e, input.inputmask._valueGet() !== getBuffer().join(""));
                if (input.inputmask._valueGet() === getBufferTemplate().join("")) {
                    $input.trigger("cleared");
                } else if (isComplete(getBuffer()) === true) {
                    $input.trigger("complete");
                }
                if (opts.showTooltip) { //update tooltip
                    input.title = opts.tooltip || getMaskSet().mask;
                }
            } else if (k === Inputmask.keyCode.END || k === Inputmask.keyCode.PAGE_DOWN) { //when END or PAGE_DOWN pressed set position at lastmatch
                e.preventDefault();
                var caretPos = seekNext(getLastValidPosition());
                if (!opts.insertMode && caretPos === getMaskSet().maskLength && !e.shiftKey) caretPos--;
                caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, true);
            } else if ((k === Inputmask.keyCode.HOME && !e.shiftKey) || k === Inputmask.keyCode.PAGE_UP) { //Home or page_up
                e.preventDefault();
                caret(input, 0, e.shiftKey ? pos.begin : 0, true);
            } else if (((opts.undoOnEscape && k === Inputmask.keyCode.ESCAPE) || (k === 90 && e.ctrlKey)) && e.altKey !== true) { //escape && undo && #762
                checkVal(input, true, false, undoValue.split(""));
                $input.trigger("click");
            } else if (k === Inputmask.keyCode.INSERT && !(e.shiftKey || e.ctrlKey)) { //insert
                opts.insertMode = !opts.insertMode;
                caret(input, !opts.insertMode && pos.begin === getMaskSet().maskLength ? pos.begin - 1 : pos.begin);
            } else if (opts.tabThrough === true && k === Inputmask.keyCode.TAB) {
                if (e.shiftKey === true) {
                    if (getTest(pos.begin).match.fn === null) {
                        pos.begin = seekNext(pos.begin);
                    }
                    pos.end = seekPrevious(pos.begin, true);
                    pos.begin = seekPrevious(pos.end, true);
                } else {
                    pos.begin = seekNext(pos.begin, true);
                    pos.end = seekNext(pos.begin, true);
                    if (pos.end < getMaskSet().maskLength) pos.end--;
                }
                if (pos.begin < getMaskSet().maskLength) {
                    e.preventDefault();
                    caret(input, pos.begin, pos.end);
                }
            } else if (opts.insertMode === false && !e.shiftKey) {
                if (k === Inputmask.keyCode.RIGHT) {
                    setTimeout(function () {
                        var caretPos = caret(input);
                        caret(input, caretPos.begin);
                    }, 0);
                } else if (k === Inputmask.keyCode.LEFT) {
                    setTimeout(function () {
                        var caretPos = caret(input);
                        caret(input, isRTL ? caretPos.begin + 1 : caretPos.begin - 1);
                    }, 0);
                }
            }
            opts.onKeyDown.call(this, e, getBuffer(), caret(input).begin, opts);
            ignorable = $.inArray(k, opts.ignorables) !== -1;
        }

        function keypressEvent(e, checkval, writeOut, strict, ndx) {
            var input = this,
                $input = $(input),
                k = e.which || e.charCode || e.keyCode;

            if (checkval !== true && (!(e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable))) {
                if (k === Inputmask.keyCode.ENTER && undoValue !== getBuffer().join("")) {
                    undoValue = getBuffer().join("");
                    // e.preventDefault();
                    setTimeout(function () {
                        $input.trigger("change");
                    }, 0);
                }
                return true;
            } else {
                if (k) {
                    //special treat the decimal separator
                    if (k === 46 && e.shiftKey === false && opts.radixPoint === ",") k = 44;
                    var pos = checkval ? {
                            begin: ndx,
                            end: ndx
                        } : caret(input),
                        forwardPosition, c = String.fromCharCode(k);

                    getMaskSet().writeOutBuffer = true;
                    var valResult = isValid(pos, c, strict);
                    if (valResult !== false) {
                        resetMaskSet(true);
                        forwardPosition = valResult.caret !== undefined ? valResult.caret : checkval ? valResult.pos + 1 : seekNext(valResult.pos);
                        getMaskSet().p = forwardPosition; //needed for checkval
                    }

                    if (writeOut !== false) {
                        var self = this;
                        setTimeout(function () {
                            opts.onKeyValidation.call(self, k, valResult, opts);
                        }, 0);
                        if (getMaskSet().writeOutBuffer && valResult !== false) {
                            var buffer = getBuffer();
                            writeBuffer(input, buffer, (opts.numericInput && valResult.caret === undefined) ? seekPrevious(forwardPosition) : forwardPosition, e, checkval !== true);
                            if (checkval !== true) {
                                setTimeout(function () { //timeout needed for IE
                                    if (isComplete(buffer) === true) $input.trigger("complete");
                                }, 0);
                            }
                        }
                    }

                    if (opts.showTooltip) { //update tooltip
                        input.title = opts.tooltip || getMaskSet().mask;
                    }

                    e.preventDefault();

                    if (checkval) {
                        valResult.forwardPosition = forwardPosition;
                        return valResult;
                    }
                }
            }
        }

        function pasteEvent(e) {
            var input = this,
                ev = e.originalEvent || e,
                $input = $(input),
                inputValue = input.inputmask._valueGet(true),
                caretPos = caret(input),
                tempValue;

            if (isRTL) {
                tempValue = caretPos.end;
                caretPos.end = caretPos.begin;
                caretPos.begin = tempValue;
            }

            var valueBeforeCaret = inputValue.substr(0, caretPos.begin),
                valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);

            if (valueBeforeCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("")) valueBeforeCaret = "";
            if (valueAfterCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(caretPos.end).join("")) valueAfterCaret = "";
            if (isRTL) {
                tempValue = valueBeforeCaret;
                valueBeforeCaret = valueAfterCaret;
                valueAfterCaret = tempValue;
            }

            if (window.clipboardData && window.clipboardData.getData) { // IE
                inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret;
            } else if (ev.clipboardData && ev.clipboardData.getData) {
                inputValue = valueBeforeCaret + ev.clipboardData.getData("text/plain") + valueAfterCaret;
            }

            var pasteValue = inputValue;
            if ($.isFunction(opts.onBeforePaste)) {
                pasteValue = opts.onBeforePaste(inputValue, opts);
                if (pasteValue === false) {
                    return e.preventDefault();
                }
                if (!pasteValue) {
                    pasteValue = inputValue;
                }
            }
            checkVal(input, false, false, isRTL ? pasteValue.split("").reverse() : pasteValue.toString().split(""));
            writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join(""));
            if (isComplete(getBuffer()) === true) {
                $input.trigger("complete");
            }

            return e.preventDefault();
        }

        function inputFallBackEvent(e) { //fallback when keypress fails
            var input = this,
                inputValue = input.inputmask._valueGet();

            if (getBuffer().join("") !== inputValue) {
                var caretPos = caret(input);
                inputValue = inputValue.replace(new RegExp("(" + Inputmask.escapeRegex(getBufferTemplate().join("")) + ")*"), "");

                if (iemobile) { //iemobile just set the character at the end althought the caret position is correctly set
                    var inputChar = inputValue.replace(getBuffer().join(""), "");
                    if (inputChar.length === 1) {
                        var keypress = new $.Event("keypress");
                        keypress.which = inputChar.charCodeAt(0);
                        keypressEvent.call(input, keypress, true, true, false, getMaskSet().validPositions[caretPos.begin - 1] ? caretPos.begin : caretPos.begin - 1);
                        return false;
                    }
                }

                if (caretPos.begin > inputValue.length) {
                    caret(input, inputValue.length);
                    caretPos = caret(input);
                }
                //detect & treat possible backspace
                if ((getBuffer().length - inputValue.length) === 1 && inputValue.charAt(caretPos.begin) !== getBuffer()[caretPos.begin] && inputValue.charAt(caretPos.begin + 1) !== getBuffer()[caretPos.begin] && !isMask(caretPos.begin)) {
                    e.keyCode = Inputmask.keyCode.BACKSPACE;
                    keydownEvent.call(input, e);
                } else {
                    var lvp = getLastValidPosition() + 1;
                    var bufferTemplate = getBuffer().slice(lvp).join('');
                    while (inputValue.match(Inputmask.escapeRegex(bufferTemplate) + "$") === null) {
                        bufferTemplate = bufferTemplate.slice(1);
                    }
                    inputValue = inputValue.replace(bufferTemplate, "");
                    inputValue = inputValue.split("");

                    checkVal(input, true, false, inputValue, e);

                    if (isComplete(getBuffer()) === true) {
                        $(input).trigger("complete");
                    }
                }
                e.preventDefault();
            }
        }

        function setValueEvent(e) {
            var input = this,
                value = input.inputmask._valueGet();
            checkVal(input, true, false, ($.isFunction(opts.onBeforeMask) ? (opts.onBeforeMask(value, opts) || value) : value).split(""));
            undoValue = getBuffer().join("");
            if ((opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("")) {
                input.inputmask._valueSet("");
            }
        }

        function focusEvent(e) {
            var input = this,
                nptValue = input.inputmask._valueGet();
            if (opts.showMaskOnFocus && (!opts.showMaskOnHover || (opts.showMaskOnHover && nptValue === ""))) {
                if (input.inputmask._valueGet() !== getBuffer().join("")) {
                    writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()));
                }
            } else if (mouseEnter === false) { //only executed on focus without mouseenter
                caret(input, seekNext(getLastValidPosition()));
            }
            if (opts.positionCaretOnTab === true) {
                setTimeout(function () {
                    clickEvent.apply(this, [e]);
                }, 0);
            }
            undoValue = getBuffer().join("");
        }

        function mouseleaveEvent(e) {
            var input = this;
            mouseEnter = false;
            if (opts.clearMaskOnLostFocus && document.activeElement !== input) {
                var buffer = getBuffer().slice(),
                    nptValue = input.inputmask._valueGet();
                if (nptValue !== input.getAttribute("placeholder") && nptValue !== "") {
                    if (getLastValidPosition() === -1 && nptValue === getBufferTemplate().join("")) {
                        buffer = [];
                    } else { //clearout optional tail of the mask
                        clearOptionalTail(buffer);
                    }
                    writeBuffer(input, buffer);
                }
            }
        }

        function clickEvent(e) {
            function doRadixFocus(clickPos) {
                if (opts.radixPoint !== "") {
                    var vps = getMaskSet().validPositions;
                    if (vps[clickPos] === undefined || (vps[clickPos].input === getPlaceholder(clickPos))) {
                        if (clickPos < seekNext(-1)) return true;
                        var radixPos = $.inArray(opts.radixPoint, getBuffer());
                        if (radixPos !== -1) {
                            for (var vp in vps) {
                                if (radixPos < vp && vps[vp].input !== getPlaceholder(vp)) {
                                    return false;
                                }
                            }
                            return true;
                        }
                    }
                }
                return false;
            }

            var input = this;
            setTimeout(function () { //needed for Chrome ~ initial selection clears after the clickevent
                if (document.activeElement === input) {
                    var selectedCaret = caret(input);
                    if (selectedCaret.begin === selectedCaret.end) {
                        switch (opts.positionCaretOnClick) {
                            case "none":
                                break;
                            case "radixFocus":
                                if (doRadixFocus(selectedCaret.begin)) {
                                    caret(input, opts.numericInput ? seekNext($.inArray(opts.radixPoint, getBuffer())) : $.inArray(opts.radixPoint, getBuffer()));
                                    break;
                                }
                            default: //lvp:
                                var clickPosition = selectedCaret.begin,
                                    lvclickPosition = getLastValidPosition(clickPosition, true),
                                    lastPosition = seekNext(lvclickPosition);

                                if (clickPosition < lastPosition) {
                                    caret(input, !isMask(clickPosition) && !isMask(clickPosition - 1) ? seekNext(clickPosition) : clickPosition);
                                } else {
                                    var placeholder = getPlaceholder(lastPosition);
                                    if ((placeholder !== "" && getBuffer()[lastPosition] !== placeholder && getTest(lastPosition).match.optionalQuantifier !== true) || (!isMask(lastPosition, true) && getTest(lastPosition).match.def === placeholder)) {
                                        lastPosition = seekNext(lastPosition);
                                    }
                                    caret(input, lastPosition);
                                }
                                break;
                        }
                    }
                }
            }, 0);
        }

        function dblclickEvent(e) {
            var input = this;
            setTimeout(function () {
                caret(input, 0, seekNext(getLastValidPosition()));
            }, 0);
        }

        function cutEvent(e) {
            var input = this,
                $input = $(input),
                pos = caret(input),
                ev = e.originalEvent || e;

            //correct clipboardData
            var clipboardData = window.clipboardData || ev.clipboardData,
                clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
            clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join(""));
            if (document.execCommand) document.execCommand("copy"); // copy selected content to system clipbaord

            handleRemove(input, Inputmask.keyCode.DELETE, pos);
            writeBuffer(input, getBuffer(), getMaskSet().p, e, undoValue !== getBuffer().join(""));

            if (input.inputmask._valueGet() === getBufferTemplate().join("")) {
                $input.trigger("cleared");
            }

            if (opts.showTooltip) { //update tooltip
                input.title = opts.tooltip || getMaskSet().mask;
            }
        }

        function blurEvent(e) {
            var $input = $(this),
                input = this;
            if (input.inputmask) {
                var nptValue = input.inputmask._valueGet(),
                    buffer = getBuffer().slice();
                if (undoValue !== buffer.join("")) {
                    setTimeout(function () { //change event should be triggered after the other buffer manipulations on blur
                        $input.trigger("change");
                        undoValue = buffer.join("");
                    }, 0);
                }
                if (nptValue !== "") {
                    if (opts.clearMaskOnLostFocus) {
                        if (getLastValidPosition() === -1 && nptValue === getBufferTemplate().join("")) {
                            buffer = [];
                        } else { //clearout optional tail of the mask
                            clearOptionalTail(buffer);
                        }
                    }
                    if (isComplete(buffer) === false) {
                        setTimeout(function () {
                            $input.trigger("incomplete");
                        }, 0);
                        if (opts.clearIncomplete) {
                            resetMaskSet();
                            if (opts.clearMaskOnLostFocus) {
                                buffer = [];
                            } else {
                                buffer = getBufferTemplate().slice();
                            }
                        }
                    }

                    writeBuffer(input, buffer, undefined, e);
                }
            }
        }

        function mouseenterEvent(e) {
            var input = this;
            mouseEnter = true;
            if (document.activeElement !== input && opts.showMaskOnHover) {
                if (input.inputmask._valueGet() !== getBuffer().join("")) {
                    writeBuffer(input, getBuffer());
                }
            }
        }

        function submitEvent(e) { //trigger change on submit if any
            if (undoValue !== getBuffer().join("")) {
                $el.trigger("change");
            }
            if (opts.clearMaskOnLostFocus && getLastValidPosition() === -1 && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("")) {
                el.inputmask._valueSet(""); //clear masktemplete on submit and still has focus
            }
            if (opts.removeMaskOnSubmit) {
                el.inputmask._valueSet(el.inputmask.unmaskedvalue(), true);
                setTimeout(function () {
                    writeBuffer(el, getBuffer());
                }, 0);
            }
        }

        function resetEvent(e) {
            setTimeout(function () {
                $el.trigger("setvalue");
            }, 0);
        }

        function mask(elem) {
            el = elem;
            $el = $(el);

            //show tooltip
            if (opts.showTooltip) {
                el.title = opts.tooltip || getMaskSet().mask;
            }

            if (el.dir === "rtl" || opts.rightAlign) {
                el.style.textAlign = "right";
            }

            if (el.dir === "rtl" || opts.numericInput) {
                el.dir = "ltr";
                el.removeAttribute("dir");
                el.inputmask.isRTL = true;
                isRTL = true;
            }

            //unbind all events - to make sure that no other mask will interfere when re-masking
            EventRuler.off(el);
            patchValueProperty(el);
            if (isElementTypeSupported(el, opts)) {
                //bind events
                EventRuler.on(el, "submit", submitEvent);
                EventRuler.on(el, "reset", resetEvent);

                EventRuler.on(el, "mouseenter", mouseenterEvent);
                EventRuler.on(el, "blur", blurEvent);
                EventRuler.on(el, "focus", focusEvent);
                EventRuler.on(el, "mouseleave", mouseleaveEvent);
                EventRuler.on(el, "click", clickEvent);
                EventRuler.on(el, "dblclick", dblclickEvent);
                EventRuler.on(el, "paste", pasteEvent);
                EventRuler.on(el, "dragdrop", pasteEvent);
                EventRuler.on(el, "drop", pasteEvent);
                EventRuler.on(el, "cut", cutEvent);
                EventRuler.on(el, "complete", opts.oncomplete);
                EventRuler.on(el, "incomplete", opts.onincomplete);
                EventRuler.on(el, "cleared", opts.oncleared);
                if (opts.inputEventOnly !== true) {
                    EventRuler.on(el, "keydown", keydownEvent);
                    EventRuler.on(el, "keypress", keypressEvent);
                }
                EventRuler.on(el, "input", inputFallBackEvent);
            }
            EventRuler.on(el, "setvalue", setValueEvent);

            //apply mask
            getBufferTemplate(); //initialize the buffer and getmasklength
            if (el.inputmask._valueGet() !== "" || opts.clearMaskOnLostFocus === false || document.activeElement === el) {
                var initialValue = $.isFunction(opts.onBeforeMask) ? (opts.onBeforeMask(el.inputmask._valueGet(), opts) || el.inputmask._valueGet()) : el.inputmask._valueGet();
                checkVal(el, true, false, initialValue.split(""));
                var buffer = getBuffer().slice();
                undoValue = buffer.join("");
                // Wrap document.activeElement in a try/catch block since IE9 throw "Unspecified error" if document.activeElement is undefined when we are in an IFrame.
                if (isComplete(buffer) === false) {
                    if (opts.clearIncomplete) {
                        resetMaskSet();
                    }
                }
                if (opts.clearMaskOnLostFocus && document.activeElement !== el) {
                    if (getLastValidPosition() === -1) {
                        buffer = [];
                    } else {
                        clearOptionalTail(buffer);
                    }
                }
                writeBuffer(el, buffer);
                if (document.activeElement === el) { //position the caret when in focus
                    caret(el, seekNext(getLastValidPosition()));
                }
            }
        }

//action object
        var valueBuffer;
        if (actionObj !== undefined) {
            switch (actionObj.action) {
                case "isComplete":
                    el = actionObj.el;
                    return isComplete(getBuffer());
                case "unmaskedvalue":
                    el = actionObj.el;

                    if (el !== undefined && el.inputmask !== undefined) {
                        maskset = el.inputmask.maskset;
                        opts = el.inputmask.opts;
                        isRTL = el.inputmask.isRTL;
                    } else {
                        valueBuffer = actionObj.value;

                        if (opts.numericInput) {
                            isRTL = true;
                        }

                        valueBuffer = ($.isFunction(opts.onBeforeMask) ? (opts.onBeforeMask(valueBuffer, opts) || valueBuffer) : valueBuffer).split("");
                        checkVal(undefined, false, false, isRTL ? valueBuffer.reverse() : valueBuffer);
                        if ($.isFunction(opts.onBeforeWrite)) opts.onBeforeWrite(undefined, getBuffer(), 0, opts);
                    }
                    return unmaskedvalue(el);
                case "mask":
                    el = actionObj.el;
                    maskset = el.inputmask.maskset;
                    opts = el.inputmask.opts;
                    isRTL = el.inputmask.isRTL;
                    mask(el);
                    break;
                case "format":
                    if (opts.numericInput) {
                        isRTL = true;
                    }
                    valueBuffer = ($.isFunction(opts.onBeforeMask) ? (opts.onBeforeMask(actionObj.value, opts) || actionObj.value) : actionObj.value).split("");
                    checkVal(undefined, false, false, isRTL ? valueBuffer.reverse() : valueBuffer);
                    if ($.isFunction(opts.onBeforeWrite)) opts.onBeforeWrite(undefined, getBuffer(), 0, opts);

                    if (actionObj.metadata) {
                        return {
                            value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
                            metadata: maskScope({
                                "action": "getmetadata"
                            }, maskset, opts)
                        };
                    }

                    return isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");
                case "isValid":
                    if (opts.numericInput) {
                        isRTL = true;
                    }
                    if (actionObj.value) {
                        valueBuffer = actionObj.value.split("");
                        checkVal(undefined, false, true, isRTL ? valueBuffer.reverse() : valueBuffer);
                    } else {
                        actionObj.value = getBuffer().join("");
                    }
                    var buffer = getBuffer();
                    var rl = determineLastRequiredPosition(),
                        lmib = buffer.length - 1;
                    for (; lmib > rl; lmib--) {
                        if (isMask(lmib)) break;
                    }
                    buffer.splice(rl, lmib + 1 - rl);

                    return isComplete(buffer) && actionObj.value === getBuffer().join("");
                case "getemptymask":
                    return getBufferTemplate().join("");
                case "remove":
                    el = actionObj.el;
                    $el = $(el);
                    maskset = el.inputmask.maskset;
                    opts = el.inputmask.opts;
                    //writeout the unmaskedvalue
                    el.inputmask._valueSet(unmaskedvalue(el));
                    //unbind all events
                    EventRuler.off(el);
                    //restore the value property
                    var valueProperty;
                    if (Object.getOwnPropertyDescriptor && Object.getPrototypeOf) {
                        valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value");
                        if (valueProperty) {
                            if (el.inputmask.__valueGet) {
                                Object.defineProperty(el, "value", {
                                    get: el.inputmask.__valueGet,
                                    set: el.inputmask.__valueSet,
                                    configurable: true
                                });
                            }
                        }
                    } else if (document.__lookupGetter__ && el.__lookupGetter__("value")) {
                        if (el.inputmask.__valueGet) {
                            el.__defineGetter__("value", el.inputmask.__valueGet);
                            el.__defineSetter__("value", el.inputmask.__valueSet);
                        }
                    }
                    //clear data
                    el.inputmask = undefined;
                    break;
                case "getmetadata":
                    if ($.isArray(maskset.metadata)) {
                        //find last alternation
                        var alternation, lvp = getLastValidPosition(undefined, true);
                        for (var firstAlt = lvp; firstAlt >= 0; firstAlt--) {
                            if (getMaskSet().validPositions[firstAlt] && getMaskSet().validPositions[firstAlt].alternation !== undefined) {
                                alternation = getMaskSet().validPositions[firstAlt].alternation;
                                break;
                            }
                        }
                        return alternation !== undefined ? maskset.metadata[getMaskSet().validPositions[firstAlt].locator[alternation]] : [];
                    }

                    return maskset.metadata;
            }
        }
    }

//make inputmask available
    window.Inputmask = Inputmask;
    return Inputmask;
}));


/*
 Input Mask plugin extensions
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 -  Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 0.0.0-dev

 Optional extensions on the jquery.inputmask base
 */
(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["inputmask.dependencyLib", "inputmask"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("./inputmask.dependencyLib.jquery"), require("./inputmask"));
    } else {
        factory(window.dependencyLib || jQuery, window.Inputmask);
    }
}
(function ($, Inputmask) {
    //extra definitions
    Inputmask.extendDefinitions({
        "A": {
            validator: "[A-Za-z\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5]",
            cardinality: 1,
            casing: "upper" //auto uppercasing
        },
        "&": { //alfanumeric uppercasing
            validator: "[0-9A-Za-z\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5]",
            cardinality: 1,
            casing: "upper"
        },
        "#": { //hexadecimal
            validator: "[0-9A-Fa-f]",
            cardinality: 1,
            casing: "upper"
        }
    });
    Inputmask.extendAliases({
        "url": {
            definitions: {
                "i": {
                    validator: ".",
                    cardinality: 1
                }
            },
            mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
            insertMode: false,
            autoUnmask: false
        },
        "ip": { //ip-address mask
            mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
            definitions: {
                "i": {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        if (pos - 1 > -1 && maskset.buffer[pos - 1] !== ".") {
                            chrs = maskset.buffer[pos - 1] + chrs;
                            if (pos - 2 > -1 && maskset.buffer[pos - 2] !== ".") {
                                chrs = maskset.buffer[pos - 2] + chrs;
                            } else chrs = "0" + chrs;
                        } else chrs = "00" + chrs;
                        return new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs);
                    },
                    cardinality: 1
                }
            },
            onUnMask: function (maskedValue, unmaskedValue, opts) {
                return maskedValue;
            }
        },
        "email": {
            //https://en.wikipedia.org/wiki/Domain_name#Domain_name_space
            //https://en.wikipedia.org/wiki/Hostname#Restrictions_on_valid_host_names
            //should be extended with the toplevel domains at the end
            mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
            greedy: false,
            onBeforePaste: function (pastedValue, opts) {
                pastedValue = pastedValue.toLowerCase();
                return pastedValue.replace("mailto:", "");
            },
            definitions: {
                "*": {
                    validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
                    cardinality: 1,
                    casing: "lower"
                },
                "-": {
                    validator: "[0-9A-Za-z\-]",
                    cardinality: 1,
                    casing: "lower"
                }
            },
            onUnMask: function (maskedValue, unmaskedValue, opts) {
                return maskedValue;
            }
        },
        "mac": {
            mask: "##:##:##:##:##:##"
        },
        //https://en.wikipedia.org/wiki/Vehicle_identification_number
        // see issue #1199
        "vin": {
            mask: "V{13}9{4}",
            definitions: {
                'V': {
                    validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                    cardinality: 1,
                    casing: "upper"
                }
            },
            clearIncomplete: true,
            autoUnmask: true
        }
    });
    return Inputmask;
}));


/*
 Input Mask plugin extensions
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 -  Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 0.0.0-dev

 Regex extensions on the jquery.inputmask base
 Allows for using regular expressions as a mask
 */
(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["inputmask.dependencyLib", "inputmask"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("./inputmask.dependencyLib.jquery"), require("./inputmask"));
    } else {
        factory(window.dependencyLib || jQuery, window.Inputmask);
    }
}
(function ($, Inputmask) {
    Inputmask.extendAliases({ // $(selector).inputmask("Regex", { regex: "[0-9]*"}
        "Regex": {
            mask: "r",
            greedy: false,
            repeat: "*",
            regex: null,
            regexTokens: null,
            //Thx to https://github.com/slevithan/regex-colorizer for the tokenizer regex
            tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
            quantifierFilter: /[0-9]+[^,]/,
            isComplete: function (buffer, opts) {
                return new RegExp(opts.regex).test(buffer.join(""));
            },
            definitions: {
                "r": {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        var cbuffer = maskset.buffer.slice(),
                            bufferStr,
                            regexPart = "",
                            isValid = false,
                            openGroupCount = 0,
                            groupToken;

                        function RegexToken(isGroup, isQuantifier) {
                            this.matches = [];
                            this.isGroup = isGroup || false;
                            this.isQuantifier = isQuantifier || false;
                            this.quantifier = {
                                min: 1,
                                max: 1
                            };
                            this.repeaterPart = undefined;
                        }

                        function analyseRegex() {
                            var currentToken = new RegexToken(),
                                match, m, opengroups = [];

                            opts.regexTokens = [];

                            // The tokenizer regex does most of the tokenization grunt work
                            while (match = opts.tokenizer.exec(opts.regex)) {
                                m = match[0];
                                switch (m.charAt(0)) {
                                    case "(": // Group opening
                                        opengroups.push(new RegexToken(true));
                                        break;
                                    case ")": // Group closing
                                        groupToken = opengroups.pop();
                                        if (opengroups.length > 0) {
                                            opengroups[opengroups.length - 1].matches.push(groupToken);
                                        } else {
                                            currentToken.matches.push(groupToken);
                                        }
                                        break;
                                    case "{":
                                    case "+":
                                    case "*": //Quantifier
                                        var quantifierToken = new RegexToken(false, true);
                                        m = m.replace(/[{}]/g, "");
                                        var mq = m.split(","),
                                            mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
                                            mq1 = mq.length === 1 ? mq0 : (isNaN(mq[1]) ? mq[1] : parseInt(mq[1]));
                                        quantifierToken.quantifier = {
                                            min: mq0,
                                            max: mq1
                                        };
                                        if (opengroups.length > 0) {
                                            var matches = opengroups[opengroups.length - 1].matches;
                                            match = matches.pop();
                                            if (!match.isGroup) {
                                                groupToken = new RegexToken(true);
                                                groupToken.matches.push(match);
                                                match = groupToken;
                                            }
                                            matches.push(match);
                                            matches.push(quantifierToken);
                                        } else {
                                            match = currentToken.matches.pop();
                                            if (!match.isGroup) {
                                                groupToken = new RegexToken(true);
                                                groupToken.matches.push(match);
                                                match = groupToken;
                                            }
                                            currentToken.matches.push(match);
                                            currentToken.matches.push(quantifierToken);
                                        }
                                        break;
                                    default:
                                        if (opengroups.length > 0) {
                                            opengroups[opengroups.length - 1].matches.push(m);
                                        } else {
                                            currentToken.matches.push(m);
                                        }
                                        break;
                                }
                            }

                            if (currentToken.matches.length > 0) {
                                opts.regexTokens.push(currentToken);
                            }
                        }

                        function validateRegexToken(token, fromGroup) {
                            var isvalid = false;
                            if (fromGroup) {
                                regexPart += "(";
                                openGroupCount++;
                            }
                            for (var mndx = 0; mndx < token.matches.length; mndx++) {
                                var matchToken = token.matches[mndx];
                                if (matchToken.isGroup === true) {
                                    isvalid = validateRegexToken(matchToken, true);
                                } else if (matchToken.isQuantifier === true) {
                                    var crrntndx = $.inArray(matchToken, token.matches),
                                        matchGroup = token.matches[crrntndx - 1];
                                    var regexPartBak = regexPart;
                                    if (isNaN(matchToken.quantifier.max)) {
                                        while (matchToken.repeaterPart && matchToken.repeaterPart !== regexPart && matchToken.repeaterPart.length > regexPart.length) {
                                            isvalid = validateRegexToken(matchGroup, true);
                                            if (isvalid) break;
                                        }
                                        isvalid = isvalid || validateRegexToken(matchGroup, true);
                                        if (isvalid) matchToken.repeaterPart = regexPart;
                                        regexPart = regexPartBak + matchToken.quantifier.max;
                                    } else {
                                        for (var i = 0, qm = matchToken.quantifier.max - 1; i < qm; i++) {
                                            isvalid = validateRegexToken(matchGroup, true);
                                            if (isvalid) break;
                                        }
                                        regexPart = regexPartBak + "{" + matchToken.quantifier.min + "," + matchToken.quantifier.max + "}";
                                    }
                                } else if (matchToken.matches !== undefined) {
                                    for (var k = 0; k < matchToken.length; k++) {
                                        isvalid = validateRegexToken(matchToken[k], fromGroup);
                                        if (isvalid) break;
                                    }
                                } else {
                                    var testExp;
                                    if (matchToken.charAt(0) == "[") {
                                        testExp = regexPart;
                                        testExp += matchToken;
                                        for (var j = 0; j < openGroupCount; j++) {
                                            testExp += ")";
                                        }
                                        var exp = new RegExp("^(" + testExp + ")$");
                                        isvalid = exp.test(bufferStr);
                                    } else {
                                        for (var l = 0, tl = matchToken.length; l < tl; l++) {
                                            if (matchToken.charAt(l) === "\\") continue;
                                            testExp = regexPart;
                                            testExp += matchToken.substr(0, l + 1);
                                            testExp = testExp.replace(/\|$/, "");
                                            for (var j = 0; j < openGroupCount; j++) {
                                                testExp += ")";
                                            }
                                            var exp = new RegExp("^(" + testExp + ")$");
                                            isvalid = exp.test(bufferStr);
                                            if (isvalid) break;
                                        }
                                    }
                                    regexPart += matchToken;
                                }
                                if (isvalid) break;
                            }

                            if (fromGroup) {
                                regexPart += ")";
                                openGroupCount--;
                            }

                            return isvalid;
                        }

                        if (opts.regexTokens === null) {
                            analyseRegex();
                        }

                        cbuffer.splice(pos, 0, chrs);
                        bufferStr = cbuffer.join("");
                        for (var i = 0; i < opts.regexTokens.length; i++) {
                            var regexToken = opts.regexTokens[i];
                            isValid = validateRegexToken(regexToken, regexToken.isGroup);
                            if (isValid) break;
                        }

                        return isValid;
                    },
                    cardinality: 1
                }
            }
        }
    });
    return Inputmask;
}));


/*
 Input Mask plugin extensions
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 0.0.0-dev

 Optional extensions on the jquery.inputmask base
 */
(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["inputmask.dependencyLib", "inputmask"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("./inputmask.dependencyLib.jquery"), require("./inputmask"));
    } else {
        factory(window.dependencyLib || jQuery, window.Inputmask);
    }
}
(function ($, Inputmask) {
    //number aliases
    Inputmask.extendAliases({
        "numeric": {
            mask: function (opts) {
                function autoEscape(txt) {
                    var escapedTxt = "";
                    for (var i = 0; i < txt.length; i++) {
                        if (opts.definitions[txt.charAt(i)] ||
                            opts.optionalmarker.start === txt.charAt(i) ||
                            opts.optionalmarker.end === txt.charAt(i) ||
                            opts.quantifiermarker.start === txt.charAt(i) ||
                            opts.quantifiermarker.end === txt.charAt(i) ||
                            opts.groupmarker.start === txt.charAt(i) ||
                            opts.groupmarker.end === txt.charAt(i) ||
                            opts.alternatormarker === txt.charAt(i))
                            escapedTxt += "\\" + txt.charAt(i)
                        else escapedTxt += txt.charAt(i);
                    }
                    return escapedTxt;
                }

                if (opts.repeat !== 0 && isNaN(opts.integerDigits)) {
                    opts.integerDigits = opts.repeat;
                }
                opts.repeat = 0;
                if (opts.groupSeparator === opts.radixPoint) { //treat equal separator and radixpoint
                    if (opts.radixPoint === ".") {
                        opts.groupSeparator = ",";
                    } else if (opts.radixPoint === ",") {
                        opts.groupSeparator = ".";
                    } else opts.groupSeparator = "";
                }
                if (opts.groupSeparator === " ") { //prevent conflict with default skipOptionalPartCharacter
                    opts.skipOptionalPartCharacter = undefined;
                }
                opts.autoGroup = opts.autoGroup && opts.groupSeparator !== "";
                if (opts.autoGroup) {
                    if (typeof opts.groupSize == "string" && isFinite(opts.groupSize)) opts.groupSize = parseInt(opts.groupSize);
                    if (isFinite(opts.integerDigits)) {
                        var seps = Math.floor(opts.integerDigits / opts.groupSize);
                        var mod = opts.integerDigits % opts.groupSize;
                        opts.integerDigits = parseInt(opts.integerDigits) + (mod === 0 ? seps - 1 : seps);
                        if (opts.integerDigits < 1) {
                            opts.integerDigits = "*";
                        }
                    }
                }

                //enforce placeholder to single
                if (opts.placeholder.length > 1) {
                    opts.placeholder = opts.placeholder.charAt(0);
                }
                //only allow radixfocus when placeholder = 0
                if (opts.positionCaretOnClick === "radixFocus" && (opts.placeholder === "" && opts.integerOptional === false)) {
                    opts.positionCaretOnClick = "lvp";
                }
                opts.definitions[";"] = opts.definitions["~"]; //clone integer def for decimals
                opts.definitions[";"].definitionSymbol = "~";

                if (opts.numericInput === true) { //finance people input style
                    opts.positionCaretOnClick = opts.positionCaretOnClick === "radixFocus" ? "lvp" : opts.positionCaretOnClick;
                    opts.digitsOptional = false;
                    if (isNaN(opts.digits)) opts.digits = 2;
                    opts.decimalProtect = false;
                }

                var mask = autoEscape(opts.prefix);
                mask += "[+]";
                if (opts.integerOptional === true) {
                    mask += "~{1," + opts.integerDigits + "}";
                } else mask += "~{" + opts.integerDigits + "}";
                if (opts.digits !== undefined && (isNaN(opts.digits) || parseInt(opts.digits) > 0)) {
                    if (opts.decimalProtect) opts.radixPointDefinitionSymbol = ":";
                    if (opts.digitsOptional) {
                        mask += "[" + (opts.decimalProtect ? ":" : opts.radixPoint) + ";{1," + opts.digits + "}]";
                    } else mask += (opts.decimalProtect ? ":" : opts.radixPoint) + ";{" + opts.digits + "}";
                }
                mask += "[-]";
                mask += autoEscape(opts.suffix);

                opts.greedy = false; //enforce greedy false

                //convert min and max options
                if (opts.min !== null) {
                    opts.min = opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
                    if (opts.radixPoint === ",") opts.min = opts.min.replace(opts.radixPoint, ".");
                }
                if (opts.max !== null) {
                    opts.max = opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
                    if (opts.radixPoint === ",") opts.max = opts.max.replace(opts.radixPoint, ".");
                }

                return mask;
            },
            placeholder: "",
            greedy: false,
            digits: "*", //number of fractionalDigits
            digitsOptional: true,
            radixPoint: ".",
            positionCaretOnClick: "radixFocus",
            groupSize: 3,
            groupSeparator: "",
            autoGroup: false,
            allowPlus: true,
            allowMinus: true,
            negationSymbol: {
                front: "-", //"("
                back: "" //")"
            },
            integerDigits: "+", //number of integerDigits
            integerOptional: true,
            prefix: "",
            suffix: "",
            rightAlign: true,
            decimalProtect: true, //do not allow assumption of decimals input without entering the radixpoint
            min: null, //minimum value
            max: null, //maximum value
            step: 1,
            insertMode: true,
            autoUnmask: false,
            unmaskAsNumber: false,
            postFormat: function (buffer, pos, opts) { //this needs to be removed // this is crap
                // console.log(buffer);
                if (opts.numericInput === true) {
                    buffer = buffer.reverse();
                    if (isFinite(pos)) {
                        pos = buffer.join("").length - pos - 1;
                    }
                }
                var i, l;

                //position overflow corrections
                pos = pos >= buffer.length ? buffer.length - 1 : (pos < opts.prefix.length ? opts.prefix.length : pos);

                var charAtPos = buffer[pos];

                var cbuf = buffer.slice();
                if (charAtPos === opts.groupSeparator) {
                    cbuf.splice(pos--, 1);
                    charAtPos = cbuf[pos];
                }
                //mark current pos
                cbuf[pos] = "!";
                var bufVal = cbuf.join(""), bufValOrigin = bufVal;

                bufVal = bufVal.replace(new RegExp(Inputmask.escapeRegex(opts.suffix) + "$"), "");
                bufVal = bufVal.replace(new RegExp("^" + Inputmask.escapeRegex(opts.prefix)), "");
                if (bufVal.length > 0 && opts.autoGroup || bufVal.indexOf(opts.groupSeparator) !== -1) {
                    var escapedGroupSeparator = Inputmask.escapeRegex(opts.groupSeparator);
                    bufVal = bufVal.replace(new RegExp(escapedGroupSeparator, "g"), "");
                    var radixSplit = bufVal.split(charAtPos === opts.radixPoint ? "!" : opts.radixPoint);
                    bufVal = opts.radixPoint === "" ? bufVal : radixSplit[0];
                    if (charAtPos !== opts.negationSymbol.front) bufVal = bufVal.replace("!", "?");
                    if (bufVal.length > opts.groupSize) {
                        var reg = new RegExp("([-\+]?[\\d\?]+)([\\d\?]{" + opts.groupSize + "})");
                        while (reg.test(bufVal) && opts.groupSeparator !== "") {
                            bufVal = bufVal.replace(reg, "$1" + opts.groupSeparator + "$2");
                            bufVal = bufVal.replace(opts.groupSeparator + opts.groupSeparator, opts.groupSeparator);
                        }
                    }
                    bufVal = bufVal.replace("?", "!");
                    if (opts.radixPoint !== "" && radixSplit.length > 1) {
                        bufVal += (charAtPos === opts.radixPoint ? "!" : opts.radixPoint) + radixSplit[1];
                    }
                }

                bufVal = opts.prefix + bufVal + opts.suffix;


                var needsRefresh = bufValOrigin !== bufVal;
                if (needsRefresh) {
                    buffer.length = bufVal.length; //align the length
                    for (i = 0, l = bufVal.length; i < l; i++) {
                        buffer[i] = bufVal.charAt(i);
                    }
                }
                var newPos = $.inArray("!", bufVal);
                buffer[newPos] = charAtPos;

                // console.log("formatted " + buffer + " refresh " + needsRefresh);
                newPos = (opts.numericInput && isFinite(pos)) ? buffer.join("").length - newPos - 1 : newPos;
                if (opts.numericInput) {
                    buffer = buffer.reverse();
                    if ($.inArray(opts.radixPoint, buffer) < newPos && (buffer.join("").length - opts.suffix.length) !== newPos) {
                        newPos = newPos - 1;
                    }
                }
                return {
                    pos: newPos,
                    "refreshFromBuffer": needsRefresh,
                    "buffer": buffer
                };
            },
            onBeforeWrite: function (e, buffer, caretPos, opts) {
                var rslt;
                if (e && (e.type === "blur" || e.type === "checkval" || e.type === "keydown")) {
                    var maskedValue = opts.numericInput ? buffer.slice().reverse().join("") : buffer.join(""),
                        processValue = maskedValue.replace(opts.prefix, "");
                    processValue = processValue.replace(opts.suffix, "");
                    processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
                    if (opts.radixPoint === ",") processValue = processValue.replace(opts.radixPoint, ".");
                    //handle negation symbol
                    var isNegative = processValue.match(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"));
                    isNegative = isNegative !== null && isNegative.length === 1;
                    processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), "");
                    processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "");
                    //strip placeholder at the end
                    if (isNaN(opts.placeholder)) {
                        processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.placeholder), "g"), "");
                    }
                    processValue = processValue === opts.negationSymbol.front ? processValue + "0" : processValue;

                    if (processValue !== "" && isFinite(processValue)) {
                        var floatValue = parseFloat(processValue),
                            signedFloatValue = isNegative ? floatValue * -1 : floatValue;
                        if (opts.min !== null && isFinite(opts.min) && signedFloatValue < parseFloat(opts.min)) {
                            floatValue = Math.abs(opts.min);
                            isNegative = opts.min < 0;
                            maskedValue = undefined;
                        }
                        else if (opts.max !== null && isFinite(opts.max) && signedFloatValue > parseFloat(opts.max)) {
                            floatValue = Math.abs(opts.max);
                            isNegative = opts.max < 0;
                            maskedValue = undefined;
                        }

                        processValue = floatValue.toString().replace(".", opts.radixPoint).split('');
                        if (isFinite(opts.digits)) {
                            var radixPosition = $.inArray(opts.radixPoint, processValue);
                            var rpb = $.inArray(opts.radixPoint, maskedValue);
                            if (radixPosition === -1) {
                                processValue.push(opts.radixPoint);
                                radixPosition = processValue.length - 1;
                            }
                            for (var i = 1; i <= opts.digits; i++) {
                                if (!opts.digitsOptional && (processValue[radixPosition + i] === undefined || processValue[radixPosition + i] === opts.placeholder.charAt(0))) {
                                    processValue[radixPosition + i] = "0";
                                } else if (rpb !== -1 && maskedValue[rpb + i] !== undefined) {
                                    processValue[radixPosition + i] = processValue[radixPosition + i] || maskedValue[rpb + i];
                                }
                            }

                            if (processValue[processValue.length - 1] === opts.radixPoint) {
                                delete processValue[processValue.length - 1];
                            }
                        }

                        if ((floatValue.toString() !== processValue && floatValue.toString() + "." !== processValue) || isNegative) {
                            if (isNegative && (floatValue !== 0 || e.type !== "blur")) {
                                processValue.unshift(opts.negationSymbol.front);
                                processValue.push(opts.negationSymbol.back);
                            }
                            processValue = (opts.prefix + processValue.join("")).split("");
                            if (opts.numericInput) processValue = processValue.reverse();
                            rslt = opts.postFormat(processValue, opts.numericInput ? caretPos : caretPos - 1, opts);
                            if (rslt.buffer) rslt.refreshFromBuffer = rslt.buffer.join("") !== buffer.join("");
                            return rslt;
                        }
                    }
                }
                if (opts.autoGroup) {
                    rslt = opts.postFormat(buffer, opts.numericInput ? caretPos : caretPos - 1, opts);
                    rslt.caret = caretPos <= opts.prefix.length ? rslt.pos : rslt.pos + 1;
                    return rslt;
                }
            },
            regex: {
                integerPart: function (opts) {
                    return new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "\+]?\\d+");
                },
                integerNPart: function (opts) {
                    return new RegExp("[\\d" + Inputmask.escapeRegex(opts.groupSeparator) + Inputmask.escapeRegex(opts.placeholder.charAt(0)) + "]+");
                }
            },
            signHandler: function (chrs, maskset, pos, strict, opts) {
                if (!strict && (opts.allowMinus && chrs === "-") || (opts.allowPlus && chrs === "+")) {
                    var matchRslt = maskset.buffer.join("").match(opts.regex.integerPart(opts));

                    if (matchRslt && matchRslt[0].length > 0) {
                        if (maskset.buffer[matchRslt.index] === (chrs === "-" ? "+" : opts.negationSymbol.front)) {
                            if (chrs === "-") {
                                if (opts.negationSymbol.back !== "") {
                                    return {
                                        "pos": matchRslt.index,
                                        "c": opts.negationSymbol.front,
                                        "remove": matchRslt.index,
                                        "caret": pos,
                                        "insert": {
                                            "pos": maskset.buffer.length - opts.suffix.length - 1,
                                            "c": opts.negationSymbol.back
                                        }
                                    };
                                } else {
                                    return {
                                        "pos": matchRslt.index,
                                        "c": opts.negationSymbol.front,
                                        "remove": matchRslt.index,
                                        "caret": pos
                                    };
                                }
                            } else {
                                if (opts.negationSymbol.back !== "") {
                                    return {
                                        "pos": matchRslt.index,
                                        "c": "+",
                                        "remove": [matchRslt.index, maskset.buffer.length - opts.suffix.length - 1],
                                        "caret": pos
                                    };
                                } else {
                                    return {
                                        "pos": matchRslt.index,
                                        "c": "+",
                                        "remove": matchRslt.index,
                                        "caret": pos
                                    };
                                }
                            }
                        } else if (maskset.buffer[matchRslt.index] === (chrs === "-" ? opts.negationSymbol.front : "+")) {
                            if (chrs === "-" && opts.negationSymbol.back !== "") {
                                return {
                                    "remove": [matchRslt.index, maskset.buffer.length - opts.suffix.length - 1],
                                    "caret": pos - 1
                                };
                            } else {
                                return {
                                    "remove": matchRslt.index,
                                    "caret": pos - 1
                                };
                            }
                        } else {
                            if (chrs === "-") {
                                if (opts.negationSymbol.back !== "") {
                                    return {
                                        "pos": matchRslt.index,
                                        "c": opts.negationSymbol.front,
                                        "caret": pos + 1,
                                        "insert": {
                                            "pos": maskset.buffer.length - opts.suffix.length,
                                            "c": opts.negationSymbol.back
                                        }
                                    };
                                } else {
                                    return {
                                        "pos": matchRslt.index,
                                        "c": opts.negationSymbol.front,
                                        "caret": pos + 1
                                    };
                                }
                            } else {
                                return {
                                    "pos": matchRslt.index,
                                    "c": chrs,
                                    "caret": pos + 1
                                };
                            }
                        }
                    }
                }
                return false;
            },
            radixHandler: function (chrs, maskset, pos, strict, opts) {
                if (!strict && opts.numericInput !== true) {
                    //if ($.inArray(chrs, [",", "."]) !== -1) chrs = opts.radixPoint;
                    if (chrs === opts.radixPoint && (opts.digits !== undefined && (isNaN(opts.digits) || parseInt(opts.digits) > 0))) {
                        var radixPos = $.inArray(opts.radixPoint, maskset.buffer),
                            integerValue = maskset.buffer.join("").match(opts.regex.integerPart(opts));

                        if (radixPos !== -1 && maskset.validPositions[radixPos]) {
                            if (maskset.validPositions[radixPos - 1]) {
                                return {
                                    "caret": radixPos + 1
                                };
                            } else {
                                return {
                                    "pos": integerValue.index,
                                    c: integerValue[0],
                                    "caret": radixPos + 1
                                };
                            }
                        } else if (!integerValue || (integerValue["0"] === "0" && (integerValue.index + 1) !== pos)) {
                            maskset.buffer[integerValue ? integerValue.index : pos] = "0";
                            return {
                                "pos": (integerValue ? integerValue.index : pos) + 1,
                                c: opts.radixPoint
                            };
                        }
                    }
                }
                return false;
            },
            leadingZeroHandler: function (chrs, maskset, pos, strict, opts, isSelection) {
                if (!strict) {
                    var buffer = maskset.buffer.slice("");
                    buffer.splice(0, opts.prefix.length);
                    buffer.splice(buffer.length - opts.suffix.length, opts.suffix.length);
                    if (opts.numericInput === true) {
                        var buffer = buffer.reverse();
                        var bufferChar = buffer[0];
                        if (bufferChar === "0" && maskset.validPositions[pos - 1] === undefined) {
                            return {
                                "pos": pos,
                                "remove": buffer.length - 1
                            };
                        }
                    } else {
                        pos = pos - opts.prefix.length;
                        var radixPosition = $.inArray(opts.radixPoint, buffer),
                            matchRslt = buffer.slice(0, radixPosition !== -1 ? radixPosition : undefined).join("").match(opts.regex.integerNPart(opts));
                        if (matchRslt && (radixPosition === -1 || pos <= radixPosition)) {
                            var decimalPart = radixPosition === -1 ? 0 : parseInt(buffer.slice(radixPosition + 1).join(""));
                            if (matchRslt["0"].indexOf(opts.placeholder !== "" ? opts.placeholder.charAt(0) : "0") === 0 &&
                                (matchRslt.index + 1 === pos || (isSelection !== true && decimalPart === 0))) {
                                maskset.buffer.splice(matchRslt.index + opts.prefix.length, 1);
                                return {
                                    "pos": matchRslt.index + opts.prefix.length,
                                    "remove": matchRslt.index + opts.prefix.length
                                };
                            } else if (chrs === "0" && pos <= matchRslt.index && matchRslt["0"] !== opts.groupSeparator) {
                                return false;
                            }
                        }
                    }
                }
                return true;
            },
            definitions: {
                "~": {
                    validator: function (chrs, maskset, pos, strict, opts, isSelection) {
                        var isValid = opts.signHandler(chrs, maskset, pos, strict, opts);
                        if (!isValid) {
                            isValid = opts.radixHandler(chrs, maskset, pos, strict, opts);
                            if (!isValid) {
                                isValid = strict ? new RegExp("[0-9" + Inputmask.escapeRegex(opts.groupSeparator) + "]").test(chrs) : new RegExp("[0-9]").test(chrs);
                                if (isValid === true) {
                                    isValid = opts.leadingZeroHandler(chrs, maskset, pos, strict, opts, isSelection);
                                    if (isValid === true) {
                                        //handle overwrite when fixed precision
                                        var radixPosition = $.inArray(opts.radixPoint, maskset.buffer);
                                        if (radixPosition !== -1 && (opts.digitsOptional === false || maskset.validPositions[pos]) && opts.numericInput !== true && pos > radixPosition && !strict) {
                                            isValid = {
                                                "pos": pos,
                                                "remove": pos
                                            };
                                        } else {
                                            isValid = {
                                                pos: pos
                                            };
                                        }
                                    }
                                }
                            }
                        }

                        return isValid;
                    },
                    cardinality: 1
                },
                "+": {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        var isValid = opts.signHandler(chrs, maskset, pos, strict, opts);
                        if (!isValid && ((strict && opts.allowMinus && chrs === opts.negationSymbol.front) || (opts.allowMinus && chrs === "-") || (opts.allowPlus && chrs === "+"))) {
                            if (!strict && chrs === "-") {
                                if (opts.negationSymbol.back !== "") {
                                    isValid = {
                                        "pos": pos,
                                        "c": chrs === "-" ? opts.negationSymbol.front : "+",
                                        "caret": pos + 1,
                                        "insert": {
                                            "pos": maskset.buffer.length,
                                            "c": opts.negationSymbol.back
                                        }
                                    };
                                } else {
                                    isValid = {
                                        "pos": pos,
                                        "c": chrs === "-" ? opts.negationSymbol.front : "+",
                                        "caret": pos + 1
                                    };
                                }
                            } else {
                                isValid = true;
                            }
                        }
                        return isValid;
                    },
                    cardinality: 1,
                    placeholder: ""
                },
                "-": {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        var isValid = opts.signHandler(chrs, maskset, pos, strict, opts);
                        if (!isValid && strict && opts.allowMinus && chrs === opts.negationSymbol.back) {
                            isValid = true;
                        }
                        return isValid;
                    },
                    cardinality: 1,
                    placeholder: ""
                },
                ":": {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        var isValid = opts.signHandler(chrs, maskset, pos, strict, opts);
                        if (!isValid) {
                            var radix = "[" + Inputmask.escapeRegex(opts.radixPoint) + "]";
                            isValid = new RegExp(radix).test(chrs);
                            if (isValid && maskset.validPositions[pos] && maskset.validPositions[pos].match.placeholder === opts.radixPoint) {
                                isValid = {
                                    "caret": pos + 1
                                };
                            }
                        }
                        return isValid ? {
                            c: opts.radixPoint
                        } : isValid;
                    },
                    cardinality: 1,
                    placeholder: function (opts) {
                        return opts.radixPoint;
                    }
                }
            },
            onUnMask: function (maskedValue, unmaskedValue, opts) {
                if (unmaskedValue === "" && opts.nullable === true) {
                    return unmaskedValue;
                }
                var processValue = maskedValue.replace(opts.prefix, "");
                processValue = processValue.replace(opts.suffix, "");
                processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
                if (opts.unmaskAsNumber) {
                    if (opts.radixPoint !== "" && processValue.indexOf(opts.radixPoint) !== -1) processValue = processValue.replace(Inputmask.escapeRegex.call(this, opts.radixPoint), ".");
                    return Number(processValue);
                }
                return processValue;
            },
            isComplete: function (buffer, opts) {
                var maskedValue = buffer.join(""),
                    bufClone = buffer.slice();
                //verify separator positions
                opts.postFormat(bufClone, 0, opts);
                if (bufClone.join("") !== maskedValue) return false;

                var processValue = maskedValue.replace(opts.prefix, "");
                processValue = processValue.replace(opts.suffix, "");
                processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
                if (opts.radixPoint === ",") processValue = processValue.replace(Inputmask.escapeRegex(opts.radixPoint), ".");
                return isFinite(processValue);
            },
            onBeforeMask: function (initialValue, opts) {
                if (opts.radixPoint !== "" && isFinite(initialValue)) {
                    initialValue = initialValue.toString().replace(".", opts.radixPoint);
                } else {
                    var kommaMatches = initialValue.match(/,/g);
                    var dotMatches = initialValue.match(/\./g);
                    if (dotMatches && kommaMatches) {
                        if (dotMatches.length > kommaMatches.length) {
                            initialValue = initialValue.replace(/\./g, "");
                            initialValue = initialValue.replace(",", opts.radixPoint);
                        } else if (kommaMatches.length > dotMatches.length) {
                            initialValue = initialValue.replace(/,/g, "");
                            initialValue = initialValue.replace(".", opts.radixPoint);
                        } else { //equal
                            initialValue = initialValue.indexOf(".") < initialValue.indexOf(",") ? initialValue.replace(/\./g, "") : initialValue = initialValue.replace(/,/g, "");
                        }
                    } else {
                        initialValue = initialValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
                    }
                }

                if (opts.digits === 0) {
                    if (initialValue.indexOf(".") !== -1) {
                        initialValue = initialValue.substring(0, initialValue.indexOf("."));
                    } else if (initialValue.indexOf(",") !== -1) {
                        initialValue = initialValue.substring(0, initialValue.indexOf(","));
                    }
                }

                if (opts.radixPoint !== "" && isFinite(opts.digits) && initialValue.indexOf(opts.radixPoint) !== -1) {
                    var valueParts = initialValue.split(opts.radixPoint),
                        decPart = valueParts[1].match(new RegExp("\\d*"))[0];
                    if (parseInt(opts.digits) < decPart.toString().length) {
                        var digitsFactor = Math.pow(10, parseInt(opts.digits));
                        //make the initialValue a valid javascript number for the parsefloat
                        initialValue = initialValue.replace(Inputmask.escapeRegex(opts.radixPoint), ".");
                        initialValue = Math.round(parseFloat(initialValue) * digitsFactor) / digitsFactor;
                        initialValue = initialValue.toString().replace(".", opts.radixPoint);
                    }
                }
                return initialValue.toString();
            },
            canClearPosition: function (maskset, position, lvp, strict, opts) {
                var positionInput = maskset.validPositions[position].input,
                    canClear = ((positionInput !== opts.radixPoint || (maskset.validPositions[position].match.fn !== null && opts.decimalProtect === false)) || isFinite(positionInput)) ||
                        position === lvp ||
                        positionInput === opts.groupSeparator ||
                        positionInput === opts.negationSymbol.front ||
                        positionInput === opts.negationSymbol.back;
                return canClear;
            },
            onKeyDown: function (e, buffer, caretPos, opts) {
                var $input = $(this);
                if (e.ctrlKey) {
                    switch (e.keyCode) {
                        case Inputmask.keyCode.UP:
                            $input.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step));
                            $input.trigger("setvalue");
                            break;
                        case Inputmask.keyCode.DOWN:
                            $input.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step));
                            $input.trigger("setvalue");
                            break;
                    }
                }
            }
        },
        "currency": {
            prefix: "$ ",
            groupSeparator: ",",
            alias: "numeric",
            placeholder: "0",
            autoGroup: true,
            digits: 2,
            digitsOptional: false,
            clearMaskOnLostFocus: false
        },
        "decimal": {
            alias: "numeric"
        },
        "integer": {
            alias: "numeric",
            digits: 0,
            radixPoint: ""
        },
        "percentage": {
            alias: "numeric",
            digits: 2,
            radixPoint: ".",
            placeholder: "0",
            autoGroup: false,
            min: 0,
            max: 100,
            suffix: " %",
            allowPlus: false,
            allowMinus: false
        }
    });
    return Inputmask;
}));

/*
 * Input Mask plugin for jquery
 * http://github.com/RobinHerbots/jquery.inputmask
 * Copyright (c) 2010 - Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 0.0.0-dev
 */

(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "inputmask"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"), require("./inputmask"));
    } else {
        factory(jQuery, window.Inputmask);
    }
}
(function ($, Inputmask) {
    if ($.fn.inputmask === undefined) {
        //jquery plugin
        $.fn.inputmask = function (fn, options) {
            var nptmask, input = this[0];
            if (options === undefined) options = {};
            if (typeof fn === "string") {
                switch (fn) {
                    case "unmaskedvalue":
                        return input && input.inputmask ? input.inputmask.unmaskedvalue() : $(input).val();
                    case "remove":
                        return this.each(function () {
                            if (this.inputmask) this.inputmask.remove();
                        });
                    case "getemptymask":
                        return input && input.inputmask ? input.inputmask.getemptymask() : "";
                    case "hasMaskedValue": //check wheter the returned value is masked or not; currently only works reliable when using jquery.val fn to retrieve the value
                        return input && input.inputmask ? input.inputmask.hasMaskedValue() : false;
                    case "isComplete":
                        return input && input.inputmask ? input.inputmask.isComplete() : true;
                    case "getmetadata": //return mask metadata if exists
                        return input && input.inputmask ? input.inputmask.getmetadata() : undefined;
                    case "setvalue":
                        $(input).val(options);
                        if (input && input.inputmask === undefined) { //reactivate jquery.clone
                            $(input).triggerHandler("setvalue");
                        }
                        break;
                    case "option":
                        if (typeof options === "string") {
                            if (input && input.inputmask !== undefined) {
                                return input.inputmask.option(options);
                            }
                        } else {
                            return this.each(function () {
                                if (this.inputmask !== undefined) {
                                    return this.inputmask.option(options);
                                }
                            });
                        }
                        break;
                    default:
                        options.alias = fn;
                        nptmask = new Inputmask(options);
                        return this.each(function () {
                            nptmask.mask(this);
                        });
                }
            } else if (typeof fn == "object") {
                nptmask = new Inputmask(fn);
                if (fn.mask === undefined && fn.alias === undefined) {
                    return this.each(function () {
                        if (this.inputmask !== undefined) {
                            return this.inputmask.option(fn);
                        } else nptmask.mask(this);
                    });
                } else {
                    return this.each(function () {
                        nptmask.mask(this);
                    });
                }
            } else if (fn === undefined) {
                //look for data-inputmask atributes
                return this.each(function () {
                    nptmask = new Inputmask(options);
                    nptmask.mask(this);
                });
            }
        };
    }
    return $.fn.inputmask;
}));

/*
 Input Mask plugin binding
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 -  Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "inputmask"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"), require("./inputmask"));
    } else {
        factory(jQuery, window.Inputmask);
    }
}
(function ($, Inputmask) {
    $(document).ajaxComplete(function (event, xmlHttpRequest, ajaxOptions) {
        if ($.inArray("html", ajaxOptions.dataTypes) !== -1) {
            $(".inputmask, [data-inputmask], [data-inputmask-mask], [data-inputmask-alias]").each(function (ndx, lmnt) {
                if (lmnt.inputmask === undefined) {
                    Inputmask().mask(lmnt);
                }
            });
        }
    }).ready(function () {
        $(".inputmask, [data-inputmask], [data-inputmask-mask], [data-inputmask-alias]").each(function (ndx, lmnt) {
            if (lmnt.inputmask === undefined) {
                Inputmask().mask(lmnt);
            }
        });
    });
}));



/*Plugin for calculating the loans*/
!function(a,b,c,d){function e(a){return a.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}a.extend(a.fn,{accrue:function(b){return b=a.extend({calculationMethod:g},a.fn.accrue.options,b),this.each(function(){var c=a(this);c.find(".form").length||c.append('<div class="form"></div>');f(c,b,"amount"),f(c,b,"rate"),f(c,b,"term");if("compare"==b.mode){f(c,b,"rate_compare")}var d;".results"===b.response_output_div?(0===c.find(".results").length&&c.append('<div class="results"></div>'),d=c.find(".results")):d=a(b.response_output_div);var e;switch(b.mode){case"basic":e=g;break;case"compare":e=h;break;case"amortization":e=i}e(c,b,d),"button"==b.operation?(0===c.find("button").length&&0===c.find("input[type=submit]").length&&0===c.find("input[type=image]").length&&c.find(".form").append('<button class="accrue-calculate">'+b.button_label+"</button>"),c.find("button, input[type=submit], input[type=image]").each(function(){a(this).click(function(a){a.preventDefault(),e(c,b,d)})})):c.find("input, select").each(function(){a(this).bind("keyup change",function(){e(c,b,d)})}),c.find("form").each(function(){a(this).submit(function(a){a.preventDefault(),e(c,b,d)})})})}}),a.fn.accrue.options={mode:"basic",operation:"keyup",default_values:{amount:"$7,500",rate:"7%",rate_compare:"1.49%",term:"36m"},field_titles:{amount:"Loan Amount",rate:"Rate (APR)",rate_compare:"Comparison Rate",term:"Term"},button_label:"Calculate",field_comments:{amount:"",rate:"",rate_compare:"",term:"Format: 12m, 36m, 3y, 7y"},response_output_div:".results",response_basic:"<p><strong>Monthly Payment:</strong><br />$%payment_amount%</p><p><strong>Number of Payments:</strong><br />%num_payments%</p><p><strong>Total Payments:</strong><br />$%total_payments%</p><p><strong>Total Interest:</strong><br />$%total_interest%</p>",response_compare:'<p class="total-savings">Save $%savings% in interest!</p>',error_text:'<p class="error">Please fill in all fields.</p>',callback:function(a,b){}};var f=function(a,b,c){var d;return a.find(".accrue-"+c).length?d=a.find(".accrue-"+c):a.find("."+c).length?d=a.find("."+c):a.find("input[name~="+c+"]").length?a.find("input[name~="+c+"]"):d="","string"!=typeof d?d.val():"term_compare"==c?!1:(a.find(".form").append('<div class="accrue-field-'+c+'"><p><label>'+b.field_titles[c]+':</label><input type="text" class="'+c+'" value="'+b.default_values[c]+'" />'+(b.field_comments[c].length>0?"<small>"+b.field_comments[c]+"</small>":"")+"</p></div>"),a.find("."+c).val())},g=function(b,c,d){var g=a.loanInfo({amount:f(b,c,"amount"),rate:f(b,c,"rate"),term:f(b,c,"term")});if(0!==g){var h=c.response_basic.replace("%payment_amount%",e(g.payment_amount_formatted)).replace("%num_payments%",g.num_payments).replace("%total_payments%",e(g.total_payments_formatted)).replace("%total_interest%",e(g.total_interest_formatted));d.html(h)}else d.html(c.error_text);c.callback(b,g)},h=function(b,c,d){var g=f(b,c,"term_compare");"boolean"==typeof g&&(g=f(b,c,"term"));var h=a.loanInfo({amount:f(b,c,"amount"),rate:f(b,c,"rate"),term:f(b,c,"term")}),i=a.loanInfo({amount:f(b,c,"amount"),rate:f(b,c,"rate_compare"),term:g}),j={loan_1:h,loan_2:i};if(0!==h&&0!==i){h.total_interest-i.total_interest>0?j.savings=h.total_interest-i.total_interest:j.savings=0;var k=c.response_compare.replace("%savings%",e(j.savings.toFixed(2))).replace("%loan_1_payment_amount%",e(i.payment_amount_formatted)).replace("%loan_1_num_payments%",i.num_payments).replace("%loan_1_total_payments%",i.total_payments_formatted).replace("%loan_1_total_interest%",e(i.total_interest_formatted)).replace("%loan_2_payment_amount%",e(h.payment_amount_formatted)).replace("%loan_2_num_payments%",h.num_payments).replace("%loan_2_total_payments%",h.total_payments_formatted).replace("%loan_2_total_interest%",e(h.total_interest_formatted));d.html(k)}else d.html(c.error_text);c.callback(b,j)},i=function(b,c,d){var g=a.loanInfo({amount:f(b,c,"amount"),rate:f(b,c,"rate"),term:f(b,c,"term")});if(0!==g){for(var h='<table class="accrue-amortization"><thead><tr><th class="accrue-payment-number">#</th><th class="accrue-payment-amount">Payment Amt.</th><th class="accrue-total-interest">Total Interest</th><th class="accrue-total-payments">Total Payments</th><th class="accrue-balance">Balance</th></tr></thead><tbody>',i=g.payment_amount-g.original_amount/g.num_payments,j=g.payment_amount-i,k=0,l=0,m=parseInt(g.original_amount,10),n=0;n<g.num_payments;n++){k+=i,l+=g.payment_amount,m-=j;var o="td";n==g.num_payments-1&&(o="th"),h=h+"<tr><"+o+' class="accrue-payment-number">'+(n+1)+"</"+o+"><"+o+' class="accrue-payment-amount">$'+e(g.payment_amount_formatted)+"</"+o+"><"+o+' class="accrue-total-interest">$'+e(k.toFixed(2))+"</"+o+"><"+o+' class="accrue-total-payments">$'+e(l.toFixed(2))+"</"+o+"><"+o+' class="accrue-balance">$'+e(m.toFixed(2))+"</"+o+"></tr>"}h+="</tbody></table>",d.html(h)}else d.html(c.error_text);c.callback(b,g)};a.loanInfo=function(a){var b=("undefined"!=typeof a.amount?a.amount:0).toString().replace(/[^\d.]/gi,""),c=("undefined"!=typeof a.rate?a.rate:0).toString().replace(/[^\d.]/gi,""),d="undefined"!=typeof a.term?a.term:0;d=d.match("y")?12*parseInt(d.replace(/[^\d.]/gi,""),10):parseInt(d.replace(/[^\d.]/gi,""),10);var e=c/100/12,f=Math.pow(1+e,d),g=b*f*e/(f-1);return b*c*d>0?{original_amount:b,payment_amount:g,payment_amount_formatted:g.toFixed(2),num_payments:d,total_payments:g*d,total_payments_formatted:(g*d).toFixed(2),total_interest:g*d-b,total_interest_formatted:(g*d-b).toFixed(2)}:0},a.loanAmount=function(a){var b=("undefined"!=typeof a.payment?a.payment:0).toString().replace(/[^\d.]/gi,""),c=("undefined"!=typeof a.rate?a.rate:0).toString().replace(/[^\d.]/gi,""),d="undefined"!=typeof a.term?a.term:0;d=d.match("y")?12*parseInt(d.replace(/[^\d.]/gi,""),10):parseInt(d.replace(/[^\d.]/gi,""),10);var e=c/100/12,f=c/100,g=b*(1-Math.pow(1+e,-1*d))*(12/f);return g>0?{principal_amount:g,principal_amount_formatted:(1*g).toFixed(2),payment_amount:b,payment_amount_formatted:(1*b).toFixed(2),num_payments:d,total_payments:b*d,total_payments_formatted:(b*d).toFixed(2),total_interest:b*d-g,total_interest_formatted:(b*d-g).toFixed(2)}:0}}(jQuery,window,document);




//! moment.js
//! version : 2.15.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return md.apply(null,arguments)}
// This is done to register the method called with moment()
// without creating circular dependencies.
function b(a){md=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){
// IE8 will treat undefined and null as object if it wasn't for
// input != null
return null!=a&&"[object Object]"===Object.prototype.toString.call(a)}function e(a){var b;for(b in a)
// even if its not own property I'd still call it non-empty
return!1;return!0}function f(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function g(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function h(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function i(a,b){for(var c in b)h(b,c)&&(a[c]=b[c]);return h(b,"toString")&&(a.toString=b.toString),h(b,"valueOf")&&(a.valueOf=b.valueOf),a}function j(a,b,c,d){return qb(a,b,c,d,!0).utc()}function k(){
// We need to deep clone this object.
return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function l(a){return null==a._pf&&(a._pf=k()),a._pf}function m(a){if(null==a._isValid){var b=l(a),c=nd.call(b.parsedDateParts,function(a){return null!=a}),d=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c);if(a._strict&&(d=d&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour),null!=Object.isFrozen&&Object.isFrozen(a))return d;a._isValid=d}return a._isValid}function n(a){var b=j(NaN);return null!=a?i(l(b),a):l(b).userInvalidated=!0,b}function o(a){return void 0===a}function p(a,b){var c,d,e;if(o(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),o(b._i)||(a._i=b._i),o(b._f)||(a._f=b._f),o(b._l)||(a._l=b._l),o(b._strict)||(a._strict=b._strict),o(b._tzm)||(a._tzm=b._tzm),o(b._isUTC)||(a._isUTC=b._isUTC),o(b._offset)||(a._offset=b._offset),o(b._pf)||(a._pf=l(b)),o(b._locale)||(a._locale=b._locale),od.length>0)for(c in od)d=od[c],e=b[d],o(e)||(a[d]=e);return a}
// Moment prototype object
function q(b){p(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),pd===!1&&(pd=!0,a.updateOffset(this),pd=!1)}function r(a){return a instanceof q||null!=a&&null!=a._isAMomentObject}function s(a){return 0>a?Math.ceil(a)||0:Math.floor(a)}function t(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=s(b)),c}
// compare two arrays, return the number of differences
function u(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&t(a[d])!==t(b[d]))&&g++;return g+f}function v(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function w(b,c){var d=!0;return i(function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,b),d){for(var e,f=[],g=0;g<arguments.length;g++){if(e="","object"==typeof arguments[g]){e+="\n["+g+"] ";for(var h in arguments[0])e+=h+": "+arguments[0][h]+", ";e=e.slice(0,-2)}else e=arguments[g];f.push(e)}v(b+"\nArguments: "+Array.prototype.slice.call(f).join("")+"\n"+(new Error).stack),d=!1}return c.apply(this,arguments)},c)}function x(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),qd[b]||(v(c),qd[b]=!0)}function y(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function z(a){var b,c;for(c in a)b=a[c],y(b)?this[c]=b:this["_"+c]=b;this._config=a,
// Lenient ordinal parsing accepts just a number in addition to
// number + (possibly) stuff coming from _ordinalParseLenient.
this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function A(a,b){var c,e=i({},a);for(c in b)h(b,c)&&(d(a[c])&&d(b[c])?(e[c]={},i(e[c],a[c]),i(e[c],b[c])):null!=b[c]?e[c]=b[c]:delete e[c]);for(c in a)h(a,c)&&!h(b,c)&&d(a[c])&&(
// make sure changes to properties don't modify parent config
e[c]=i({},e[c]));return e}function B(a){null!=a&&this.set(a)}function C(a,b,c){var d=this._calendar[a]||this._calendar.sameElse;return y(d)?d.call(b,c):d}function D(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function E(){return this._invalidDate}function F(a){return this._ordinal.replace("%d",a)}function G(a,b,c,d){var e=this._relativeTime[c];return y(e)?e(a,b,c,d):e.replace(/%d/i,a)}function H(a,b){var c=this._relativeTime[a>0?"future":"past"];return y(c)?c(b):c.replace(/%s/i,b)}function I(a,b){var c=a.toLowerCase();zd[c]=zd[c+"s"]=zd[b]=a}function J(a){return"string"==typeof a?zd[a]||zd[a.toLowerCase()]:void 0}function K(a){var b,c,d={};for(c in a)h(a,c)&&(b=J(c),b&&(d[b]=a[c]));return d}function L(a,b){Ad[a]=b}function M(a){var b=[];for(var c in a)b.push({unit:c,priority:Ad[c]});return b.sort(function(a,b){return a.priority-b.priority}),b}function N(b,c){return function(d){return null!=d?(P(this,b,d),a.updateOffset(this,c),this):O(this,b)}}function O(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function P(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}
// MOMENTS
function Q(a){return a=J(a),y(this[a])?this[a]():this}function R(a,b){if("object"==typeof a){a=K(a);for(var c=M(a),d=0;d<c.length;d++)this[c[d].unit](a[c[d].unit])}else if(a=J(a),y(this[a]))return this[a](b);return this}function S(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}
// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function T(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Ed[a]=e),b&&(Ed[b[0]]=function(){return S(e.apply(this,arguments),b[1],b[2])}),c&&(Ed[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function U(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function V(a){var b,c,d=a.match(Bd);for(b=0,c=d.length;c>b;b++)Ed[d[b]]?d[b]=Ed[d[b]]:d[b]=U(d[b]);return function(b){var e,f="";for(e=0;c>e;e++)f+=d[e]instanceof Function?d[e].call(b,a):d[e];return f}}
// format date using native date object
function W(a,b){return a.isValid()?(b=X(b,a.localeData()),Dd[b]=Dd[b]||V(b),Dd[b](a)):a.localeData().invalidDate()}function X(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Cd.lastIndex=0;d>=0&&Cd.test(a);)a=a.replace(Cd,c),Cd.lastIndex=0,d-=1;return a}function Y(a,b,c){Wd[a]=y(b)?b:function(a,d){return a&&c?c:b}}function Z(a,b){return h(Wd,a)?Wd[a](b._strict,b._locale):new RegExp($(a))}
// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function $(a){return _(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function _(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function aa(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=t(a)}),c=0;c<a.length;c++)Xd[a[c]]=d}function ba(a,b){aa(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function ca(a,b,c){null!=b&&h(Xd,a)&&Xd[a](b,c._a,c,a)}function da(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function ea(a,b){return a?c(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||fe).test(b)?"format":"standalone"][a.month()]:this._months}function fa(a,b){return a?c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[fe.test(b)?"format":"standalone"][a.month()]:this._monthsShort}function ga(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(
// this is not used
this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;12>d;++d)f=j([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=sd.call(this._shortMonthsParse,g),-1!==e?e:null):(e=sd.call(this._longMonthsParse,g),-1!==e?e:null):"MMM"===b?(e=sd.call(this._shortMonthsParse,g),-1!==e?e:(e=sd.call(this._longMonthsParse,g),-1!==e?e:null)):(e=sd.call(this._longMonthsParse,g),-1!==e?e:(e=sd.call(this._shortMonthsParse,g),-1!==e?e:null))}function ha(a,b,c){var d,e,f;if(this._monthsParseExact)return ga.call(this,a,b,c);
// TODO: add sorting
// Sorting makes sure if one month (or abbr) is a prefix of another
// see sorting in computeMonthsParse
for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){
// test the regex
if(e=j([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}
// MOMENTS
function ia(a,b){var c;if(!a.isValid())
// No op
return a;if("string"==typeof b)if(/^\d+$/.test(b))b=t(b);else
// TODO: Another silent failure?
if(b=a.localeData().monthsParse(b),"number"!=typeof b)return a;return c=Math.min(a.date(),da(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ja(b){return null!=b?(ia(this,b),a.updateOffset(this,!0),this):O(this,"Month")}function ka(){return da(this.year(),this.month())}function la(a){return this._monthsParseExact?(h(this,"_monthsRegex")||na.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(h(this,"_monthsShortRegex")||(this._monthsShortRegex=ie),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)}function ma(a){return this._monthsParseExact?(h(this,"_monthsRegex")||na.call(this),a?this._monthsStrictRegex:this._monthsRegex):(h(this,"_monthsRegex")||(this._monthsRegex=je),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)}function na(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;12>b;b++)c=j([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(
// Sorting makes sure if one month (or abbr) is a prefix of another it
// will match the longer piece.
d.sort(a),e.sort(a),f.sort(a),b=0;12>b;b++)d[b]=_(d[b]),e[b]=_(e[b]);for(b=0;24>b;b++)f[b]=_(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}
// HELPERS
function oa(a){return pa(a)?366:365}function pa(a){return a%4===0&&a%100!==0||a%400===0}function qa(){return pa(this.year())}function ra(a,b,c,d,e,f,g){
//can't just apply() to create a date:
//http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
var h=new Date(a,b,c,d,e,f,g);
//the date constructor remaps years 0-99 to 1900-1999
return 100>a&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function sa(a){var b=new Date(Date.UTC.apply(null,arguments));
//the Date.UTC function remaps years 0-99 to 1900-1999
return 100>a&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}
// start-of-first-week - start-of-year
function ta(a,b,c){var// first-week day -- which january is always in the first week (4 for iso, 1 for other)
d=7+b-c,
// first-week day local weekday -- which local weekday is fwd
e=(7+sa(a,0,d).getUTCDay()-b)%7;return-e+d-1}
//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function ua(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ta(a,d,e),j=1+7*(b-1)+h+i;return 0>=j?(f=a-1,g=oa(f)+j):j>oa(a)?(f=a+1,g=j-oa(a)):(f=a,g=j),{year:f,dayOfYear:g}}function va(a,b,c){var d,e,f=ta(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return 1>g?(e=a.year()-1,d=g+wa(e,b,c)):g>wa(a.year(),b,c)?(d=g-wa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function wa(a,b,c){var d=ta(a,b,c),e=ta(a+1,b,c);return(oa(a)-d+e)/7}
// HELPERS
// LOCALES
function xa(a){return va(a,this._week.dow,this._week.doy).week}function ya(){return this._week.dow}function za(){return this._week.doy}
// MOMENTS
function Aa(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Ba(a){var b=va(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}
// HELPERS
function Ca(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Da(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a}function Ea(a,b){return a?c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]:this._weekdays}function Fa(a){return a?this._weekdaysShort[a.day()]:this._weekdaysShort}function Ga(a){return a?this._weekdaysMin[a.day()]:this._weekdaysMin}function Ha(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;7>d;++d)f=j([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=sd.call(this._weekdaysParse,g),-1!==e?e:null):"ddd"===b?(e=sd.call(this._shortWeekdaysParse,g),-1!==e?e:null):(e=sd.call(this._minWeekdaysParse,g),-1!==e?e:null):"dddd"===b?(e=sd.call(this._weekdaysParse,g),-1!==e?e:(e=sd.call(this._shortWeekdaysParse,g),-1!==e?e:(e=sd.call(this._minWeekdaysParse,g),-1!==e?e:null))):"ddd"===b?(e=sd.call(this._shortWeekdaysParse,g),-1!==e?e:(e=sd.call(this._weekdaysParse,g),-1!==e?e:(e=sd.call(this._minWeekdaysParse,g),-1!==e?e:null))):(e=sd.call(this._minWeekdaysParse,g),-1!==e?e:(e=sd.call(this._weekdaysParse,g),-1!==e?e:(e=sd.call(this._shortWeekdaysParse,g),-1!==e?e:null)))}function Ia(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Ha.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;7>d;d++){
// test the regex
if(e=j([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}
// MOMENTS
function Ja(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Ca(a,this.localeData()),this.add(a-b,"d")):b}function Ka(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function La(a){if(!this.isValid())return null!=a?this:NaN;
// behaves the same as moment#day except
// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
// as a setter, sunday should belong to the previous week.
if(null!=a){var b=Da(a,this.localeData());return this.day(this.day()%7?b:b-7)}return this.day()||7}function Ma(a){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Pa.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(h(this,"_weekdaysRegex")||(this._weekdaysRegex=pe),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)}function Na(a){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Pa.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(h(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=qe),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Oa(a){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Pa.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(h(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=re),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Pa(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],h=[],i=[],k=[];for(b=0;7>b;b++)c=j([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),h.push(e),i.push(f),k.push(d),k.push(e),k.push(f);for(
// Sorting makes sure if one weekday (or abbr) is a prefix of another it
// will match the longer piece.
g.sort(a),h.sort(a),i.sort(a),k.sort(a),b=0;7>b;b++)h[b]=_(h[b]),i[b]=_(i[b]),k[b]=_(k[b]);this._weekdaysRegex=new RegExp("^("+k.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}
// FORMATTING
function Qa(){return this.hours()%12||12}function Ra(){return this.hours()||24}function Sa(a,b){T(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}
// PARSING
function Ta(a,b){return b._meridiemParse}
// LOCALES
function Ua(a){
// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
// Using charAt should be more compatible.
return"p"===(a+"").toLowerCase().charAt(0)}function Va(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Wa(a){return a?a.toLowerCase().replace("_","-"):a}
// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function Xa(a){for(var b,c,d,e,f=0;f<a.length;){for(e=Wa(a[f]).split("-"),b=e.length,c=Wa(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=Ya(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&u(e,c,!0)>=b-1)
//the next array item is better than a shallower substring of this one
break;b--}f++}return null}function Ya(a){var b=null;
// TODO: Find a better way to register and load all the locales in Node
if(!we[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=se._abbr,require("./locale/"+a),
// because defineLocale currently also sets the global locale, we
// want to undo that for lazy loaded locales
Za(b)}catch(c){}return we[a]}
// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function Za(a,b){var c;
// moment.duration._locale = moment._locale = data;
return a&&(c=o(b)?ab(a):$a(a,b),c&&(se=c)),se._abbr}function $a(a,b){if(null!==b){var c=ve;
// treat as if there is no base config
// backwards compat for now: also set the locale
return b.abbr=a,null!=we[a]?(x("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=we[a]._config):null!=b.parentLocale&&(null!=we[b.parentLocale]?c=we[b.parentLocale]._config:x("parentLocaleUndefined","specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")),we[a]=new B(A(c,b)),Za(a),we[a]}
// useful for testing
return delete we[a],null}function _a(a,b){if(null!=b){var c,d=ve;
// MERGE
null!=we[a]&&(d=we[a]._config),b=A(d,b),c=new B(b),c.parentLocale=we[a],we[a]=c,
// backwards compat for now: also set the locale
Za(a)}else
// pass null for config to unupdate, useful for tests
null!=we[a]&&(null!=we[a].parentLocale?we[a]=we[a].parentLocale:null!=we[a]&&delete we[a]);return we[a]}
// returns locale data
function ab(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return se;if(!c(a)){if(b=Ya(a))return b;a=[a]}return Xa(a)}function bb(){return rd(we)}function cb(a){var b,c=a._a;return c&&-2===l(a).overflow&&(b=c[Zd]<0||c[Zd]>11?Zd:c[$d]<1||c[$d]>da(c[Yd],c[Zd])?$d:c[_d]<0||c[_d]>24||24===c[_d]&&(0!==c[ae]||0!==c[be]||0!==c[ce])?_d:c[ae]<0||c[ae]>59?ae:c[be]<0||c[be]>59?be:c[ce]<0||c[ce]>999?ce:-1,l(a)._overflowDayOfYear&&(Yd>b||b>$d)&&(b=$d),l(a)._overflowWeeks&&-1===b&&(b=de),l(a)._overflowWeekday&&-1===b&&(b=ee),l(a).overflow=b),a}
// date from iso format
function db(a){var b,c,d,e,f,g,h=a._i,i=xe.exec(h)||ye.exec(h);if(i){for(l(a).iso=!0,b=0,c=Ae.length;c>b;b++)if(Ae[b][1].exec(i[1])){e=Ae[b][0],d=Ae[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=Be.length;c>b;b++)if(Be[b][1].exec(i[3])){
// match[2] should be 'T' or space
f=(i[2]||" ")+Be[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!ze.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),jb(a)}else a._isValid=!1}
// date from iso format or fallback
function eb(b){var c=Ce.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(db(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}
// Pick the first defined of two or three arguments.
function fb(a,b,c){return null!=a?a:null!=b?b:c}function gb(b){
// hooks is actually the exported moment object
var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}
// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function hb(a){var b,c,d,e,f=[];if(!a._d){
// Default to current date.
// * if no year, month, day of month are given, default to today
// * if day of month is given, default month and year
// * if month is given, default only year
// * if year is given, don't default anything
for(d=gb(a),a._w&&null==a._a[$d]&&null==a._a[Zd]&&ib(a),a._dayOfYear&&(e=fb(a._a[Yd],d[Yd]),a._dayOfYear>oa(e)&&(l(a)._overflowDayOfYear=!0),c=sa(e,0,a._dayOfYear),a._a[Zd]=c.getUTCMonth(),a._a[$d]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];
// Zero out whatever was not defaulted, including time
for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];
// Check for 24:00:00.000
24===a._a[_d]&&0===a._a[ae]&&0===a._a[be]&&0===a._a[ce]&&(a._nextDay=!0,a._a[_d]=0),a._d=(a._useUTC?sa:ra).apply(null,f),
// Apply timezone offset from input. The actual utcOffset can be changed
// with parseZone.
null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[_d]=24)}}function ib(a){var b,c,d,e,f,g,h,i;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=fb(b.GG,a._a[Yd],va(rb(),1,4).year),d=fb(b.W,1),e=fb(b.E,1),(1>e||e>7)&&(i=!0)):(f=a._locale._week.dow,g=a._locale._week.doy,c=fb(b.gg,a._a[Yd],va(rb(),f,g).year),d=fb(b.w,1),null!=b.d?(e=b.d,(0>e||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f),1>d||d>wa(c,f,g)?l(a)._overflowWeeks=!0:null!=i?l(a)._overflowWeekday=!0:(h=ua(c,d,e,f,g),a._a[Yd]=h.year,a._dayOfYear=h.dayOfYear)}
// date from string and format string
function jb(b){
// TODO: Move this to another part of the creation flow to prevent circular deps
if(b._f===a.ISO_8601)return void db(b);b._a=[],l(b).empty=!0;
// This array is used to make a Date, either with `new Date` or `Date.UTC`
var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=X(b._f,b._locale).match(Bd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(Z(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&l(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),Ed[f]?(d?l(b).empty=!1:l(b).unusedTokens.push(f),ca(f,d,b)):b._strict&&!d&&l(b).unusedTokens.push(f);
// add remaining unparsed input length to the string
l(b).charsLeftOver=i-j,h.length>0&&l(b).unusedInput.push(h),
// clear _12h flag if hour is <= 12
b._a[_d]<=12&&l(b).bigHour===!0&&b._a[_d]>0&&(l(b).bigHour=void 0),l(b).parsedDateParts=b._a.slice(0),l(b).meridiem=b._meridiem,
// handle meridiem
b._a[_d]=kb(b._locale,b._a[_d],b._meridiem),hb(b),cb(b)}function kb(a,b,c){var d;
// Fallback
return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}
// date from string and array of format strings
function lb(a){var b,c,d,e,f;if(0===a._f.length)return l(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=p({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],jb(b),m(b)&&(f+=l(b).charsLeftOver,f+=10*l(b).unusedTokens.length,l(b).score=f,(null==d||d>f)&&(d=f,c=b));i(a,c||b)}function mb(a){if(!a._d){var b=K(a._i);a._a=g([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),hb(a)}}function nb(a){var b=new q(cb(ob(a)));
// Adding is smart enough around DST
return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function ob(a){var b=a._i,d=a._f;return a._locale=a._locale||ab(a._l),null===b||void 0===d&&""===b?n({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),r(b)?new q(cb(b)):(c(d)?lb(a):f(b)?a._d=b:d?jb(a):pb(a),m(a)||(a._d=null),a))}function pb(b){var d=b._i;void 0===d?b._d=new Date(a.now()):f(d)?b._d=new Date(d.valueOf()):"string"==typeof d?eb(b):c(d)?(b._a=g(d.slice(0),function(a){return parseInt(a,10)}),hb(b)):"object"==typeof d?mb(b):"number"==typeof d?
// from milliseconds
b._d=new Date(d):a.createFromInputFallback(b)}function qb(a,b,f,g,h){var i={};
// object construction must be done this way.
// https://github.com/moment/moment/issues/1423
return"boolean"==typeof f&&(g=f,f=void 0),(d(a)&&e(a)||c(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=h,i._l=f,i._i=a,i._f=b,i._strict=g,nb(i)}function rb(a,b,c,d){return qb(a,b,c,d,!1)}
// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function sb(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return rb();for(d=b[0],e=1;e<b.length;++e)b[e].isValid()&&!b[e][a](d)||(d=b[e]);return d}
// TODO: Use [].sort instead?
function tb(){var a=[].slice.call(arguments,0);return sb("isBefore",a)}function ub(){var a=[].slice.call(arguments,0);return sb("isAfter",a)}function vb(a){var b=K(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;
// representation for dateAddRemove
this._milliseconds=+k+1e3*j+// 1000
6e4*i+// 1000 * 60
1e3*h*60*60,//using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
// Because of dateAddRemove treats 24 hours as different from a
// day when working around DST, we need to store them separately
this._days=+g+7*f,
// It is impossible translate months into days without knowing
// which months you are are talking about, so we have to store
// it separately.
this._months=+e+3*d+12*c,this._data={},this._locale=ab(),this._bubble()}function wb(a){return a instanceof vb}function xb(a){return 0>a?-1*Math.round(-1*a):Math.round(a)}
// FORMATTING
function yb(a,b){T(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+S(~~(a/60),2)+b+S(~~a%60,2)})}function zb(a,b){var c=(b||"").match(a)||[],d=c[c.length-1]||[],e=(d+"").match(Ge)||["-",0,0],f=+(60*e[1])+t(e[2]);return"+"===e[0]?f:-f}
// Return a moment from input, that is local/utc/zone equivalent to model.
function Ab(b,c){var d,e;
// Use low-level api, because this fn is low-level api.
return c._isUTC?(d=c.clone(),e=(r(b)||f(b)?b.valueOf():rb(b).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+e),a.updateOffset(d,!1),d):rb(b).local()}function Bb(a){
// On Firefox.24 Date#getTimezoneOffset returns a floating point.
// https://github.com/moment/moment/pull/1871
return 15*-Math.round(a._d.getTimezoneOffset()/15)}
// MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function Cb(b,c){var d,e=this._offset||0;return this.isValid()?null!=b?("string"==typeof b?b=zb(Td,b):Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Bb(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?Sb(this,Nb(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Bb(this):null!=b?this:NaN}function Db(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Eb(a){return this.utcOffset(0,a)}function Fb(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Bb(this),"m")),this}function Gb(){if(this._tzm)this.utcOffset(this._tzm);else if("string"==typeof this._i){var a=zb(Sd,this._i);0===a?this.utcOffset(0,!0):this.utcOffset(zb(Sd,this._i))}return this}function Hb(a){return this.isValid()?(a=a?rb(a).utcOffset():0,(this.utcOffset()-a)%60===0):!1}function Ib(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Jb(){if(!o(this._isDSTShifted))return this._isDSTShifted;var a={};if(p(a,this),a=ob(a),a._a){var b=a._isUTC?j(a._a):rb(a._a);this._isDSTShifted=this.isValid()&&u(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Kb(){return this.isValid()?!this._isUTC:!1}function Lb(){return this.isValid()?this._isUTC:!1}function Mb(){return this.isValid()?this._isUTC&&0===this._offset:!1}function Nb(a,b){var c,d,e,f=a,
// matching against regexp is expensive, do it on demand
g=null;// checks for null or undefined
return wb(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(f={},b?f[b]=a:f.milliseconds=a):(g=He.exec(a))?(c="-"===g[1]?-1:1,f={y:0,d:t(g[$d])*c,h:t(g[_d])*c,m:t(g[ae])*c,s:t(g[be])*c,ms:t(xb(1e3*g[ce]))*c}):(g=Ie.exec(a))?(c="-"===g[1]?-1:1,f={y:Ob(g[2],c),M:Ob(g[3],c),w:Ob(g[4],c),d:Ob(g[5],c),h:Ob(g[6],c),m:Ob(g[7],c),s:Ob(g[8],c)}):null==f?f={}:"object"==typeof f&&("from"in f||"to"in f)&&(e=Qb(rb(f.from),rb(f.to)),f={},f.ms=e.milliseconds,f.M=e.months),d=new vb(f),wb(a)&&h(a,"_locale")&&(d._locale=a._locale),d}function Ob(a,b){
// We'd normally use ~~inp for this, but unfortunately it also
// converts floats to ints.
// inp may be undefined, so careful calling replace on it.
var c=a&&parseFloat(a.replace(",","."));
// apply sign while we're at it
return(isNaN(c)?0:c)*b}function Pb(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Qb(a,b){var c;return a.isValid()&&b.isValid()?(b=Ab(b,a),a.isBefore(b)?c=Pb(a,b):(c=Pb(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}
// TODO: remove 'name' arg after deprecation is removed
function Rb(a,b){return function(c,d){var e,f;
//invert the arguments, but complain about it
return null===d||isNaN(+d)||(x(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Nb(c,d),Sb(this,e,a),this}}function Sb(b,c,d,e){var f=c._milliseconds,g=xb(c._days),h=xb(c._months);b.isValid()&&(e=null==e?!0:e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&P(b,"Date",O(b,"Date")+g*d),h&&ia(b,O(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function Tb(a,b){var c=a.diff(b,"days",!0);return-6>c?"sameElse":-1>c?"lastWeek":0>c?"lastDay":1>c?"sameDay":2>c?"nextDay":7>c?"nextWeek":"sameElse"}function Ub(b,c){
// We want to compare the start of today, vs this.
// Getting start-of-today depends on whether we're local/utc/offset or not.
var d=b||rb(),e=Ab(d,this).startOf("day"),f=a.calendarFormat(this,e)||"sameElse",g=c&&(y(c[f])?c[f].call(this,d):c[f]);return this.format(g||this.localeData().calendar(f,this,rb(d)))}function Vb(){return new q(this)}function Wb(a,b){var c=r(a)?a:rb(a);return this.isValid()&&c.isValid()?(b=J(o(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf()):!1}function Xb(a,b){var c=r(a)?a:rb(a);return this.isValid()&&c.isValid()?(b=J(o(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf()):!1}function Yb(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function Zb(a,b){var c,d=r(a)?a:rb(a);return this.isValid()&&d.isValid()?(b=J(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf())):!1}function $b(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function _b(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function ac(a,b,c){var d,e,f,g;// 1000
// 1000 * 60
// 1000 * 60 * 60
// 1000 * 60 * 60 * 24, negate dst
// 1000 * 60 * 60 * 24 * 7, negate dst
return this.isValid()?(d=Ab(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=J(b),"year"===b||"month"===b||"quarter"===b?(g=bc(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:s(g)):NaN):NaN}function bc(a,b){
// difference in months
var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),
// b is in (anchor - 1 month, anchor + 1 month)
f=a.clone().add(e,"months");
//check for negative zero, return zero if negative zero
// linear across the month
// linear across the month
return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function cc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function dc(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?y(Date.prototype.toISOString)?this.toDate().toISOString():W(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):W(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function ec(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=W(this,b);return this.localeData().postformat(c)}function fc(a,b){return this.isValid()&&(r(a)&&a.isValid()||rb(a).isValid())?Nb({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function gc(a){return this.from(rb(),a)}function hc(a,b){return this.isValid()&&(r(a)&&a.isValid()||rb(a).isValid())?Nb({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function ic(a){return this.to(rb(),a)}
// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function jc(a){var b;return void 0===a?this._locale._abbr:(b=ab(a),null!=b&&(this._locale=b),this)}function kc(){return this._locale}function lc(a){
// the following switch intentionally omits break keywords
// to utilize falling through the cases.
switch(a=J(a)){case"year":this.month(0);/* falls through */
case"quarter":case"month":this.date(1);/* falls through */
case"week":case"isoWeek":case"day":case"date":this.hours(0);/* falls through */
case"hour":this.minutes(0);/* falls through */
case"minute":this.seconds(0);/* falls through */
case"second":this.milliseconds(0)}
// weeks are a special case
// quarters are also special
return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function mc(a){
// 'date' is an alias for 'day', so it should be considered as such.
return a=J(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function nc(){return this._d.valueOf()-6e4*(this._offset||0)}function oc(){return Math.floor(this.valueOf()/1e3)}function pc(){return new Date(this.valueOf())}function qc(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function rc(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function sc(){
// new Date(NaN).toJSON() === null
return this.isValid()?this.toISOString():null}function tc(){return m(this)}function uc(){return i({},l(this))}function vc(){return l(this).overflow}function wc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function xc(a,b){T(0,[a,a.length],0,b)}
// MOMENTS
function yc(a){return Cc.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function zc(a){return Cc.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Ac(){return wa(this.year(),1,4)}function Bc(){var a=this.localeData()._week;return wa(this.year(),a.dow,a.doy)}function Cc(a,b,c,d,e){var f;return null==a?va(this,d,e).year:(f=wa(a,d,e),b>f&&(b=f),Dc.call(this,a,b,c,d,e))}function Dc(a,b,c,d,e){var f=ua(a,b,c,d,e),g=sa(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}
// MOMENTS
function Ec(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}
// HELPERS
// MOMENTS
function Fc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function Gc(a,b){b[ce]=t(1e3*("0."+a))}
// MOMENTS
function Hc(){return this._isUTC?"UTC":""}function Ic(){return this._isUTC?"Coordinated Universal Time":""}function Jc(a){return rb(1e3*a)}function Kc(){return rb.apply(null,arguments).parseZone()}function Lc(a){return a}function Mc(a,b,c,d){var e=ab(),f=j().set(d,b);return e[c](f,a)}function Nc(a,b,c){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return Mc(a,b,c,"month");var d,e=[];for(d=0;12>d;d++)e[d]=Mc(a,d,c,"month");return e}
// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function Oc(a,b,c,d){"boolean"==typeof a?("number"==typeof b&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,"number"==typeof b&&(c=b,b=void 0),b=b||"");var e=ab(),f=a?e._week.dow:0;if(null!=c)return Mc(b,(c+f)%7,d,"day");var g,h=[];for(g=0;7>g;g++)h[g]=Mc(b,(g+f)%7,d,"day");return h}function Pc(a,b){return Nc(a,b,"months")}function Qc(a,b){return Nc(a,b,"monthsShort")}function Rc(a,b,c){return Oc(a,b,c,"weekdays")}function Sc(a,b,c){return Oc(a,b,c,"weekdaysShort")}function Tc(a,b,c){return Oc(a,b,c,"weekdaysMin")}function Uc(){var a=this._data;return this._milliseconds=Ue(this._milliseconds),this._days=Ue(this._days),this._months=Ue(this._months),a.milliseconds=Ue(a.milliseconds),a.seconds=Ue(a.seconds),a.minutes=Ue(a.minutes),a.hours=Ue(a.hours),a.months=Ue(a.months),a.years=Ue(a.years),this}function Vc(a,b,c,d){var e=Nb(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}
// supports only 2.0-style add(1, 's') or add(duration)
function Wc(a,b){return Vc(this,a,b,1)}
// supports only 2.0-style subtract(1, 's') or subtract(duration)
function Xc(a,b){return Vc(this,a,b,-1)}function Yc(a){return 0>a?Math.floor(a):Math.ceil(a)}function Zc(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;
// if we have a mix of positive and negative values, bubble down first
// check: https://github.com/moment/moment/issues/2166
// The following code bubbles up values, see the tests for
// examples of what that means.
// convert days to months
// 12 months -> 1 year
return f>=0&&g>=0&&h>=0||0>=f&&0>=g&&0>=h||(f+=864e5*Yc(_c(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=s(f/1e3),i.seconds=a%60,b=s(a/60),i.minutes=b%60,c=s(b/60),i.hours=c%24,g+=s(c/24),e=s($c(g)),h+=e,g-=Yc(_c(e)),d=s(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function $c(a){
// 400 years have 146097 days (taking into account leap year rules)
// 400 years have 12 months === 4800
return 4800*a/146097}function _c(a){
// the reverse of daysToMonths
return 146097*a/4800}function ad(a){var b,c,d=this._milliseconds;if(a=J(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+$c(b),"month"===a?c:c/12;switch(b=this._days+Math.round(_c(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;
// Math.floor prevents floating point math errors here
case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}
// TODO: Use this.as('ms')?
function bd(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*t(this._months/12)}function cd(a){return function(){return this.as(a)}}function dd(a){return a=J(a),this[a+"s"]()}function ed(a){return function(){return this._data[a]}}function fd(){return s(this.days()/7)}
// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function gd(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function hd(a,b,c){var d=Nb(a).abs(),e=jf(d.as("s")),f=jf(d.as("m")),g=jf(d.as("h")),h=jf(d.as("d")),i=jf(d.as("M")),j=jf(d.as("y")),k=e<kf.s&&["s",e]||1>=f&&["m"]||f<kf.m&&["mm",f]||1>=g&&["h"]||g<kf.h&&["hh",g]||1>=h&&["d"]||h<kf.d&&["dd",h]||1>=i&&["M"]||i<kf.M&&["MM",i]||1>=j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,gd.apply(null,k)}
// This function allows you to set the rounding function for relative time strings
function id(a){return void 0===a?jf:"function"==typeof a?(jf=a,!0):!1}
// This function allows you to set a threshold for relative time strings
function jd(a,b){return void 0===kf[a]?!1:void 0===b?kf[a]:(kf[a]=b,!0)}function kd(a){var b=this.localeData(),c=hd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function ld(){
// for ISO strings we do not use the normal bubbling rules:
//  * milliseconds bubble up until they become hours
//  * days do not bubble at all
//  * months bubble up until they become years
// This is because there is no context-free conversion between hours and days
// (think of clock changes)
// and also not between days and months (28-31 days per month)
var a,b,c,d=lf(this._milliseconds)/1e3,e=lf(this._days),f=lf(this._months);a=s(d/60),b=s(a/60),d%=60,a%=60,c=s(f/12),f%=12;
// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(0>m?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var md,nd;nd=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;c>d;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};
// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var od=a.momentProperties=[],pd=!1,qd={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var rd;rd=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)h(a,b)&&c.push(b);return c};var sd,td={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},ud={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},vd="Invalid date",wd="%d",xd=/\d{1,2}/,yd={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},zd={},Ad={},Bd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Cd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Dd={},Ed={},Fd=/\d/,Gd=/\d\d/,Hd=/\d{3}/,Id=/\d{4}/,Jd=/[+-]?\d{6}/,Kd=/\d\d?/,Ld=/\d\d\d\d?/,Md=/\d\d\d\d\d\d?/,Nd=/\d{1,3}/,Od=/\d{1,4}/,Pd=/[+-]?\d{1,6}/,Qd=/\d+/,Rd=/[+-]?\d+/,Sd=/Z|[+-]\d\d:?\d\d/gi,Td=/Z|[+-]\d\d(?::?\d\d)?/gi,Ud=/[+-]?\d+(\.\d{1,3})?/,Vd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Wd={},Xd={},Yd=0,Zd=1,$d=2,_d=3,ae=4,be=5,ce=6,de=7,ee=8;sd=Array.prototype.indexOf?Array.prototype.indexOf:function(a){
// I know
var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1},T("M",["MM",2],"Mo",function(){return this.month()+1}),T("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),T("MMMM",0,0,function(a){return this.localeData().months(this,a)}),I("month","M"),L("month",8),Y("M",Kd),Y("MM",Kd,Gd),Y("MMM",function(a,b){return b.monthsShortRegex(a)}),Y("MMMM",function(a,b){return b.monthsRegex(a)}),aa(["M","MM"],function(a,b){b[Zd]=t(a)-1}),aa(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[Zd]=e:l(c).invalidMonth=a});
// LOCALES
var fe=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,ge="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),he="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ie=Vd,je=Vd;
// FORMATTING
T("Y",0,0,function(){var a=this.year();return 9999>=a?""+a:"+"+a}),T(0,["YY",2],0,function(){return this.year()%100}),T(0,["YYYY",4],0,"year"),T(0,["YYYYY",5],0,"year"),T(0,["YYYYYY",6,!0],0,"year"),
// ALIASES
I("year","y"),
// PRIORITIES
L("year",1),
// PARSING
Y("Y",Rd),Y("YY",Kd,Gd),Y("YYYY",Od,Id),Y("YYYYY",Pd,Jd),Y("YYYYYY",Pd,Jd),aa(["YYYYY","YYYYYY"],Yd),aa("YYYY",function(b,c){c[Yd]=2===b.length?a.parseTwoDigitYear(b):t(b)}),aa("YY",function(b,c){c[Yd]=a.parseTwoDigitYear(b)}),aa("Y",function(a,b){b[Yd]=parseInt(a,10)}),
// HOOKS
a.parseTwoDigitYear=function(a){return t(a)+(t(a)>68?1900:2e3)};
// MOMENTS
var ke=N("FullYear",!0);
// FORMATTING
T("w",["ww",2],"wo","week"),T("W",["WW",2],"Wo","isoWeek"),
// ALIASES
I("week","w"),I("isoWeek","W"),
// PRIORITIES
L("week",5),L("isoWeek",5),
// PARSING
Y("w",Kd),Y("ww",Kd,Gd),Y("W",Kd),Y("WW",Kd,Gd),ba(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=t(a)});var le={dow:0,// Sunday is the first day of the week.
doy:6};
// FORMATTING
T("d",0,"do","day"),T("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),T("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),T("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),T("e",0,0,"weekday"),T("E",0,0,"isoWeekday"),
// ALIASES
I("day","d"),I("weekday","e"),I("isoWeekday","E"),
// PRIORITY
L("day",11),L("weekday",11),L("isoWeekday",11),
// PARSING
Y("d",Kd),Y("e",Kd),Y("E",Kd),Y("dd",function(a,b){return b.weekdaysMinRegex(a)}),Y("ddd",function(a,b){return b.weekdaysShortRegex(a)}),Y("dddd",function(a,b){return b.weekdaysRegex(a)}),ba(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);
// if we didn't get a weekday name, mark the date as invalid
null!=e?b.d=e:l(c).invalidWeekday=a}),ba(["d","e","E"],function(a,b,c,d){b[d]=t(a)});
// LOCALES
var me="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ne="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),oe="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),pe=Vd,qe=Vd,re=Vd;T("H",["HH",2],0,"hour"),T("h",["hh",2],0,Qa),T("k",["kk",2],0,Ra),T("hmm",0,0,function(){return""+Qa.apply(this)+S(this.minutes(),2)}),T("hmmss",0,0,function(){return""+Qa.apply(this)+S(this.minutes(),2)+S(this.seconds(),2)}),T("Hmm",0,0,function(){return""+this.hours()+S(this.minutes(),2)}),T("Hmmss",0,0,function(){return""+this.hours()+S(this.minutes(),2)+S(this.seconds(),2)}),Sa("a",!0),Sa("A",!1),
// ALIASES
I("hour","h"),
// PRIORITY
L("hour",13),Y("a",Ta),Y("A",Ta),Y("H",Kd),Y("h",Kd),Y("HH",Kd,Gd),Y("hh",Kd,Gd),Y("hmm",Ld),Y("hmmss",Md),Y("Hmm",Ld),Y("Hmmss",Md),aa(["H","HH"],_d),aa(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),aa(["h","hh"],function(a,b,c){b[_d]=t(a),l(c).bigHour=!0}),aa("hmm",function(a,b,c){var d=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d)),l(c).bigHour=!0}),aa("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d,2)),b[be]=t(a.substr(e)),l(c).bigHour=!0}),aa("Hmm",function(a,b,c){var d=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d))}),aa("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d,2)),b[be]=t(a.substr(e))});var se,te=/[ap]\.?m?\.?/i,ue=N("Hours",!0),ve={calendar:td,longDateFormat:ud,invalidDate:vd,ordinal:wd,ordinalParse:xd,relativeTime:yd,months:ge,monthsShort:he,week:le,weekdays:me,weekdaysMin:oe,weekdaysShort:ne,meridiemParse:te},we={},xe=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,ye=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,ze=/Z|[+-]\d\d(?::?\d\d)?/,Ae=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],
// YYYYMM is NOT allowed by the standard
["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Be=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ce=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=w("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),
// constant that refers to the ISO standard
a.ISO_8601=function(){};var De=w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=rb.apply(null,arguments);return this.isValid()&&a.isValid()?this>a?this:a:n()}),Ee=w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=rb.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:n()}),Fe=function(){return Date.now?Date.now():+new Date};yb("Z",":"),yb("ZZ",""),
// PARSING
Y("Z",Td),Y("ZZ",Td),aa(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=zb(Td,a)});
// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var Ge=/([\+\-]|\d\d)/gi;
// HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
a.updateOffset=function(){};
// ASP.NET json date format regex
var He=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Ie=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Nb.fn=vb.prototype;var Je=Rb(1,"add"),Ke=Rb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Le=w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});
// FORMATTING
T(0,["gg",2],0,function(){return this.weekYear()%100}),T(0,["GG",2],0,function(){return this.isoWeekYear()%100}),xc("gggg","weekYear"),xc("ggggg","weekYear"),xc("GGGG","isoWeekYear"),xc("GGGGG","isoWeekYear"),
// ALIASES
I("weekYear","gg"),I("isoWeekYear","GG"),
// PRIORITY
L("weekYear",1),L("isoWeekYear",1),
// PARSING
Y("G",Rd),Y("g",Rd),Y("GG",Kd,Gd),Y("gg",Kd,Gd),Y("GGGG",Od,Id),Y("gggg",Od,Id),Y("GGGGG",Pd,Jd),Y("ggggg",Pd,Jd),ba(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=t(a)}),ba(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),
// FORMATTING
T("Q",0,"Qo","quarter"),
// ALIASES
I("quarter","Q"),
// PRIORITY
L("quarter",7),
// PARSING
Y("Q",Fd),aa("Q",function(a,b){b[Zd]=3*(t(a)-1)}),
// FORMATTING
T("D",["DD",2],"Do","date"),
// ALIASES
I("date","D"),
// PRIOROITY
L("date",9),
// PARSING
Y("D",Kd),Y("DD",Kd,Gd),Y("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),aa(["D","DD"],$d),aa("Do",function(a,b){b[$d]=t(a.match(Kd)[0],10)});
// MOMENTS
var Me=N("Date",!0);
// FORMATTING
T("DDD",["DDDD",3],"DDDo","dayOfYear"),
// ALIASES
I("dayOfYear","DDD"),
// PRIORITY
L("dayOfYear",4),
// PARSING
Y("DDD",Nd),Y("DDDD",Hd),aa(["DDD","DDDD"],function(a,b,c){c._dayOfYear=t(a)}),
// FORMATTING
T("m",["mm",2],0,"minute"),
// ALIASES
I("minute","m"),
// PRIORITY
L("minute",14),
// PARSING
Y("m",Kd),Y("mm",Kd,Gd),aa(["m","mm"],ae);
// MOMENTS
var Ne=N("Minutes",!1);
// FORMATTING
T("s",["ss",2],0,"second"),
// ALIASES
I("second","s"),
// PRIORITY
L("second",15),
// PARSING
Y("s",Kd),Y("ss",Kd,Gd),aa(["s","ss"],be);
// MOMENTS
var Oe=N("Seconds",!1);
// FORMATTING
T("S",0,0,function(){return~~(this.millisecond()/100)}),T(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),T(0,["SSS",3],0,"millisecond"),T(0,["SSSS",4],0,function(){return 10*this.millisecond()}),T(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),T(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),T(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),T(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),T(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),
// ALIASES
I("millisecond","ms"),
// PRIORITY
L("millisecond",16),
// PARSING
Y("S",Nd,Fd),Y("SS",Nd,Gd),Y("SSS",Nd,Hd);var Pe;for(Pe="SSSS";Pe.length<=9;Pe+="S")Y(Pe,Qd);for(Pe="S";Pe.length<=9;Pe+="S")aa(Pe,Gc);
// MOMENTS
var Qe=N("Milliseconds",!1);
// FORMATTING
T("z",0,0,"zoneAbbr"),T("zz",0,0,"zoneName");var Re=q.prototype;Re.add=Je,Re.calendar=Ub,Re.clone=Vb,Re.diff=ac,Re.endOf=mc,Re.format=ec,Re.from=fc,Re.fromNow=gc,Re.to=hc,Re.toNow=ic,Re.get=Q,Re.invalidAt=vc,Re.isAfter=Wb,Re.isBefore=Xb,Re.isBetween=Yb,Re.isSame=Zb,Re.isSameOrAfter=$b,Re.isSameOrBefore=_b,Re.isValid=tc,Re.lang=Le,Re.locale=jc,Re.localeData=kc,Re.max=Ee,Re.min=De,Re.parsingFlags=uc,Re.set=R,Re.startOf=lc,Re.subtract=Ke,Re.toArray=qc,Re.toObject=rc,Re.toDate=pc,Re.toISOString=dc,Re.toJSON=sc,Re.toString=cc,Re.unix=oc,Re.valueOf=nc,Re.creationData=wc,
// Year
Re.year=ke,Re.isLeapYear=qa,
// Week Year
Re.weekYear=yc,Re.isoWeekYear=zc,
// Quarter
Re.quarter=Re.quarters=Ec,
// Month
Re.month=ja,Re.daysInMonth=ka,
// Week
Re.week=Re.weeks=Aa,Re.isoWeek=Re.isoWeeks=Ba,Re.weeksInYear=Bc,Re.isoWeeksInYear=Ac,
// Day
Re.date=Me,Re.day=Re.days=Ja,Re.weekday=Ka,Re.isoWeekday=La,Re.dayOfYear=Fc,
// Hour
Re.hour=Re.hours=ue,
// Minute
Re.minute=Re.minutes=Ne,
// Second
Re.second=Re.seconds=Oe,
// Millisecond
Re.millisecond=Re.milliseconds=Qe,
// Offset
Re.utcOffset=Cb,Re.utc=Eb,Re.local=Fb,Re.parseZone=Gb,Re.hasAlignedHourOffset=Hb,Re.isDST=Ib,Re.isLocal=Kb,Re.isUtcOffset=Lb,Re.isUtc=Mb,Re.isUTC=Mb,
// Timezone
Re.zoneAbbr=Hc,Re.zoneName=Ic,
// Deprecations
Re.dates=w("dates accessor is deprecated. Use date instead.",Me),Re.months=w("months accessor is deprecated. Use month instead",ja),Re.years=w("years accessor is deprecated. Use year instead",ke),Re.zone=w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Db),Re.isDSTShifted=w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Jb);var Se=Re,Te=B.prototype;Te.calendar=C,Te.longDateFormat=D,Te.invalidDate=E,Te.ordinal=F,Te.preparse=Lc,Te.postformat=Lc,Te.relativeTime=G,Te.pastFuture=H,Te.set=z,
// Month
Te.months=ea,Te.monthsShort=fa,Te.monthsParse=ha,Te.monthsRegex=ma,Te.monthsShortRegex=la,
// Week
Te.week=xa,Te.firstDayOfYear=za,Te.firstDayOfWeek=ya,
// Day of Week
Te.weekdays=Ea,Te.weekdaysMin=Ga,Te.weekdaysShort=Fa,Te.weekdaysParse=Ia,Te.weekdaysRegex=Ma,Te.weekdaysShortRegex=Na,Te.weekdaysMinRegex=Oa,
// Hours
Te.isPM=Ua,Te.meridiem=Va,Za("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===t(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),
// Side effect imports
a.lang=w("moment.lang is deprecated. Use moment.locale instead.",Za),a.langData=w("moment.langData is deprecated. Use moment.localeData instead.",ab);var Ue=Math.abs,Ve=cd("ms"),We=cd("s"),Xe=cd("m"),Ye=cd("h"),Ze=cd("d"),$e=cd("w"),_e=cd("M"),af=cd("y"),bf=ed("milliseconds"),cf=ed("seconds"),df=ed("minutes"),ef=ed("hours"),ff=ed("days"),gf=ed("months"),hf=ed("years"),jf=Math.round,kf={s:45,// seconds to minute
m:45,// minutes to hour
h:22,// hours to day
d:26,// days to month
M:11},lf=Math.abs,mf=vb.prototype;mf.abs=Uc,mf.add=Wc,mf.subtract=Xc,mf.as=ad,mf.asMilliseconds=Ve,mf.asSeconds=We,mf.asMinutes=Xe,mf.asHours=Ye,mf.asDays=Ze,mf.asWeeks=$e,mf.asMonths=_e,mf.asYears=af,mf.valueOf=bd,mf._bubble=Zc,mf.get=dd,mf.milliseconds=bf,mf.seconds=cf,mf.minutes=df,mf.hours=ef,mf.days=ff,mf.weeks=fd,mf.months=gf,mf.years=hf,mf.humanize=kd,mf.toISOString=ld,mf.toString=ld,mf.toJSON=ld,mf.locale=jc,mf.localeData=kc,
// Deprecations
mf.toIsoString=w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ld),mf.lang=Le,
// Side effect imports
// FORMATTING
T("X",0,0,"unix"),T("x",0,0,"valueOf"),
// PARSING
Y("x",Rd),Y("X",Ud),aa("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),aa("x",function(a,b,c){c._d=new Date(t(a))}),
// Side effect imports
a.version="2.15.1",b(rb),a.fn=Se,a.min=tb,a.max=ub,a.now=Fe,a.utc=j,a.unix=Jc,a.months=Pc,a.isDate=f,a.locale=Za,a.invalid=n,a.duration=Nb,a.isMoment=r,a.weekdays=Rc,a.parseZone=Kc,a.localeData=ab,a.isDuration=wb,a.monthsShort=Qc,a.weekdaysMin=Tc,a.defineLocale=$a,a.updateLocale=_a,a.locales=bb,a.weekdaysShort=Sc,a.normalizeUnits=J,a.relativeTimeRounding=id,a.relativeTimeThreshold=jd,a.calendarFormat=Tb,a.prototype=Se;var nf=a;return nf});