sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("courseportal.controller.CourseDetail", {

        onInit: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("courseDetail").attachPatternMatched(this._onRouteMatched, this);
        },

        onExit: function () {
            var oRoute = this.getOwnerComponent().getRouter().getRoute("courseDetail");
            if (oRoute) {
                oRoute.detachPatternMatched(this._onRouteMatched, this);
            }
        },

        _onRouteMatched: function (oEvent) {
            var sCourseId = oEvent.getParameter("arguments").courseId;
            this._sCourseId = sCourseId;
            var oCourse = window._cpCourses[sCourseId];
            if (!oCourse) {
                this.getOwnerComponent().getRouter().navTo("courses");
                return;
            }

            // Build flat topic list with lesson availability flag
            var aTopics = oCourse.topics.map(function (t) {
                return {
                    id: t.id,
                    label: t.label,
                    title: t.title,
                    lab: t.lab,
                    hasLesson: !!window._cpLessons[t.id]
                };
            });

            var oModel = new JSONModel({
                courseId: sCourseId,
                courseName: oCourse.name,
                isRProg: sCourseId === "rprog",
                topicsCount: aTopics.length + " entries",
                topics: aTopics
            });
            this.getView().setModel(oModel, "detail");

            // FormattedText strips `style` attributes via its default sanitizer, so use CSS
            // classes (defined in css/style.css) for the visual treatment.
            var sTitle = "<p class=\"cpCourseHeaderTitle\">" + oCourse.headerTitle + "</p>";
            var sMeta  = "<p class=\"cpCourseHeaderMeta\">"  + oCourse.headerMeta  + "</p>";
            var oTitleFT = this.byId("courseHeaderTitle");
            var oMetaFT  = this.byId("courseHeaderMeta");
            if (oTitleFT) oTitleFT.setHtmlText(sTitle);
            if (oMetaFT)  oMetaFT.setHtmlText(sMeta);
        },

        onNavBack: function () {
            this.getOwnerComponent().getRouter().navTo("courses");
        },

        onTopicPress: function (oEvent) {
            var oCtx = oEvent.getSource().getBindingContext("detail");
            var oTopic = oCtx.getObject();
            if (!oTopic.hasLesson) return;
            this.getOwnerComponent().getRouter().navTo("lesson", {
                courseId: this._sCourseId,
                lessonId: oTopic.id
            });
        }
    });
});
