const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/maquillaje_db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos', error);
    process.exit(1);
  }
};

module.exports = connectDB;