var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db){
	if(err) throw err;

	var query = {'grade' : 100};

	//findOne

	// db.collection('grades').findOne(query, function(err, doc){
	// 	if(err) throw err;
	// 	console.dir(doc);
	// 	db.close();
	// });

	//find
	//db.collection('grades').find(query) is the cursor
	// db.collection('grades').find(query).toArray(function(err,docs){
	// 	if(err) throw err;
	// 	console.dir(docs);
	// 	db.close();
	// });


	// var cursor = db.collection('grades').find(query);
	// //.each queries data
	// cursor.each(function(err, doc){
	// 	if(err) throw err;
	// 	if(doc == null) {
	// 		return db.close();
	// 	}
	// 	console.dir(doc.student + " got a good grade!");
	// });

	// Field Projection

	var projection = {'student':1, '_id':0};
	db.collection('grades').find(query, projection).toArray(function(err, docs){
		if(err) throw err;

		docs.forEach(function(doc){
			console.dir(doc);
			console.dir(doc.student + " got a good grade");
		});
		db.close();
	});

});