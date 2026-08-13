sap.ui.define([
    "sap/ui/core/UIComponent",
    "courseportal/data"
], function (UIComponent, oData) {
    "use strict";

    return UIComponent.extend("courseportal.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            UIComponent.prototype.init.apply(this, arguments);

            // Expose data on the window so controllers can read it directly.
            window._cpCourses = oData.COURSES;
            window._cpLessons = oData.LESSONS;

            this.getRouter().initialize();
        }
    });
});
