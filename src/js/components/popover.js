(function(addon) {

    var component;

    if (window.UIkit) {
        component = addon(UIkit);
    }

    if (typeof define == "function" && define.amd) {
        define("uikit-popover", ["uikit"], function(){
            return component || addon(UIkit);
        });
    }

})(function(UI){

    "use strict";

    UI.component('popover', {

        defaults: {
            offset: false
        },

        boot: function() {

            var triggerevent = UI.support.touch ? "click" : "mouseenter";

            // init code
            UI.$html.on(triggerevent+".popover.uikit", "[data-uk-popover]", function(e) {

                var ele = UI.$(this);

                if (!ele.data("dropdown")) {

                    var dropdown = UI.dropdown(ele, UI.$.extend({}, UI.Utils.options(ele.attr("data-uk-popover"), {dropdownClass:'uk-popover'})));

                    if (triggerevent=="click" || (triggerevent=="mouseenter" && dropdown.options.mode=="hover")) {
                        dropdown.element.trigger(triggerevent);
                    }

                    if (dropdown.element.find('.uk-dropdown').length) {
                        e.preventDefault();
                    }
                }
            });
        }
    });

    return UI.popover;
});
