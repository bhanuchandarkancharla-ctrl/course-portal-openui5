sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("courseportal.controller.Home", {

        onInit: function () {},

        onNavToCourses: function () {
            this.getOwnerComponent().getRouter().navTo("courses");
        },

        onOpenFSWD: function () {
            this.getOwnerComponent().getRouter().navTo("courseDetail", { courseId: "fswd" });
        },

        onOpenRProg: function () {
            this.getOwnerComponent().getRouter().navTo("courseDetail", { courseId: "rprog" });
        }
    });
});
