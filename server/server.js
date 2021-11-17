const express = require('express')
const app = express()
// const cors = require('cors')

// app.use(cors)

var row = 20;
var column = 80;

test = [
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1]
]


function generateContainer () {
    var columnArr = []
    var rowArr = []
    for (var j = 0; j < column; j++) {
        columnArr.push(0)
    }
    for (var j = 0; j < row; j++) {
        rowArr.push(columnArr)
    }
    var container = rowArr
    return container
}


function generatePixel (container) {
    for(var i = 0; i < row; i++){
        for(var j = 0; j < column; j++){
            if(test[i][j] == 1){
                container[i][j] = 1;
            }
        }
    }
}

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));

app.post('/api', (req, res) => {
    console.log(req.body.inputText)
    generatePixel()
    res.redirect('/')
})

app.get('/', (req, res) => {
    var pixel = generateContainer()
    res.render("index", {pixel: pixel})
})


app.listen(3000)