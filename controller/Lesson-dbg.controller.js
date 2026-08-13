sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("courseportal.controller.Lesson", {

        onInit: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("lesson").attachPatternMatched(this._onRouteMatched, this);
        },

        onExit: function () {
            var oRoute = this.getOwnerComponent().getRouter().getRoute("lesson");
            if (oRoute) {
                oRoute.detachPatternMatched(this._onRouteMatched, this);
            }
        },

        _onRouteMatched: function (oEvent) {
            var oArgs = oEvent.getParameter("arguments");
            var sCourseId = oArgs.courseId;
            var sLessonId = oArgs.lessonId;
            this._sCourseId = sCourseId;
            this._sLessonId = sLessonId;

            var oCourse = window._cpCourses[sCourseId];
            var oLesson = window._cpLessons[sLessonId];
            if (!oCourse || !oLesson) {
                this.getOwnerComponent().getRouter().navTo("courses");
                return;
            }

            var aTopics = oCourse.topics;
            var iIdx = aTopics.findIndex(function (t) { return t.id === sLessonId; });
            if (iIdx < 0) {
                // Lesson exists but doesn't belong to this course's topic list — bad URL combo.
                this.getOwnerComponent().getRouter().navTo("courseDetail", { courseId: sCourseId });
                return;
            }
            var sCounter = "Topic " + (iIdx + 1) + " of " + aTopics.length;

            // Previous / Next navigation
            var sPrevId = null, sNextId = null;
            for (var i = iIdx - 1; i >= 0; i--) {
                if (window._cpLessons[aTopics[i].id]) { sPrevId = aTopics[i].id; break; }
            }
            for (var j = iIdx + 1; j < aTopics.length; j++) {
                if (window._cpLessons[aTopics[j].id]) { sNextId = aTopics[j].id; break; }
            }

            var oModel = new JSONModel({
                title: oLesson.title,
                html: oLesson.html,
                isRProg: sCourseId === "rprog",
                counter: sCounter,
                prevId: sPrevId,
                nextId: sNextId,
                hasPrev: !!sPrevId,
                hasNext: !!sNextId
            });
            this.getView().setModel(oModel, "lesson");
        },

        onNavBack: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            if (!this._sCourseId) {
                oRouter.navTo("courses");
                return;
            }
            oRouter.navTo("courseDetail", { courseId: this._sCourseId });
        },

        onPrevLesson: function () {
            var sPrev = this.getView().getModel("lesson").getProperty("/prevId");
            if (sPrev) {
                this.getOwnerComponent().getRouter().navTo("lesson", {
                    courseId: this._sCourseId,
                    lessonId: sPrev
                });
            }
        },

        onNextLesson: function () {
            var sNext = this.getView().getModel("lesson").getProperty("/nextId");
            if (sNext) {
                this.getOwnerComponent().getRouter().navTo("lesson", {
                    courseId: this._sCourseId,
                    lessonId: sNext
                });
            }
        }
    });
});
