sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("courseportal.controller.Courses", {

        onInit: function () {},

        onNavHome: function () {
            this.getOwnerComponent().getRouter().navTo("home");
        },

        onOpenCourse: function (oEvent) {
            var sId = oEvent.getSource().data("courseId");
            this.getOwnerComponent().getRouter().navTo("courseDetail", { courseId: sId });
        }
    });
});
