module.exports = {
	mutipleMongoosesToObject: (mongooses) => {
		return mongooses.map((mongoose) => mongoose.toObject());
	},
	mongoosesToObject: (mongoose) => {
		return mongoose ? mongoose.toObject() : mongoose;
	},
};
