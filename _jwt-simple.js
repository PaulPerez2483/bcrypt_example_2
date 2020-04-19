const jwt = require("jwt-simple");

function getToken() {
	const payload = {
		id: 1,
		name: "test"
	};

	const token = jwt.encode(payload, "secret");

	return {
		token
	};
}

function validateToken(token) {
	const decoded = jwt.decode(token, "secret");
	return decoded;
}
console.log(
	validateToken(
		"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlBhdWwifQ.gJgv0nMd9iPSMbxYvYFb1vgKtkrv3KqvjtN9nNSpYCI"
	)
);
