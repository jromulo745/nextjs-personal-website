import { MongoClient } from "mongodb";

let myArray = [];

export async function connectToCluster(uri) {
	let mongoClient;

	try {
		mongoClient = new MongoClient(uri);
		console.log('Connecting to MongoDB Atlas cluster...');
		await mongoClient.connect();
		console.log('Successfully connected to MongoDB Atlas!');

		return mongoClient;
	} catch (error) {
		console.error('Connection to MongoDB Atlas failed!', error);
		process.exit();
	}
}

//------------------------------------------------------------

export async function executeStudentCrudOperations() {
	const uri = process.env.DB_URI;
	let mongoClient;

	try {
			mongoClient = await connectToCluster(uri);
			const db = mongoClient.db('220-1102');
			const collection = db.collection('multiple-choice');

			// console.log(await findQuestion(collection, 'Notification area'));
		
			myArray = await findQuestion(collection, 'Notification area');
			
			myArray.forEach(function (arrayItem) {
				let question = arrayItem.question;
				let choices = arrayItem.choices;
				let correct = arrayItem.correct;
				let explanation = arrayItem.explanation;
				console.log(question)
				console.log(choices);
				console.log(correct);
				console.log(explanation + '\n\n');
			});

	} finally {
			await mongoClient.close();
	}
}

//============================================================

export async function findQuestion(collection, correct) {
	// console.log(collection.find({choices})).toString();
	// return collection.find({question}).toArray();
	return collection.find({}).toArray();
	
}

//------------------------------------------------------------