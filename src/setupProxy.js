const proxy = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(proxy("/api", { target: "http://healthyu2.com:4035" }));
	app.use(proxy("/auth", { target: "http://healthyu2.com:4035" }));
};
