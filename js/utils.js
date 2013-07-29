define(['openbox'], function (openbox) {
    return {
        host: function () {
            return openbox.params.host || window.location.host;
        }
    };
});
