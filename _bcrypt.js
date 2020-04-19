const bcrypt = require("bcrypt");

// this method returns promises
async function hashPassword(plainText) {
	const user = {
		name: "Brad",
		email: "brad@gmail.com",
		password: plainText
	};
	// to hash the password it takes rounds(10)
	const salt = await bcrypt.genSalt(10);

	// for password
	user.password = await bcrypt.hash(plainText, salt);

	console.log(salt);
	console.log(user);
}
hashPassword("paul");

async function comparePasswords(plainText, hash) {
	const isMatch = await bcrypt.compare(plainText, hash);
	if (isMatch) {
		console.log("TRUE______");
	} else {
		console.log("_____FALSE");
	}
}

comparePasswords(
	"paul",
	"$2b$10$gZ7mViWdzAqfW9P7Ov.bseJVcLByhYB/al/.WuxxODgE3qoD.iyQu"
);
