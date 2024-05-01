let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mern8am',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
})
