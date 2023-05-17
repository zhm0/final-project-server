/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York.",
		imgUrl: "https://s29068.pcdn.co/wp-content/uploads/68th-street-campus.jpg"
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York.",
		imgUrl: "https://qns.com/wp-content/uploads/2020/11/twitter_sm-07.png"
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York.",
		imgUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dc/East_Quad_at_Brooklyn_College_%28March_2009%29.jpg"
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
		lastname: "Smith",
		email: "JoeSmith@email.com",
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
		lastname: "Johnson",
		email: "MaryJohnson@email.com",
	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

// Export the database seeding function
module.exports = seedDB;