sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
    "use strict";

    new ComponentContainer({
        name: "courseportal",
        settings: { id: "courseportal" },
        handleValidation: true,
        async: true
    }).placeAt("container");
});
