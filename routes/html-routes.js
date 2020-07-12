const path = require("path");

// HTML routes
module.exports = (app) => {
	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});

	app.get("/exercise", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/exercise.html"));
	});

	app.get("/stats", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/stats.html"));
	});
	app.get("/assets/*", (req, res) => {
		console.log("Entered /assets/*, will send file - " + path.join(__dirname, ".." ,req.path) );
		res.sendFile(path.join(__dirname, ".." ,req.path), {headers: {'Content-Type': 'image/jpeg'}});
	});

};
