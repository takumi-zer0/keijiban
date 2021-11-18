const express = require('express')
const app = express()
// const cors = require('cors')

// app.use(cors)




app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));

app.post('/api', (req, res) => {
    generatePixel()
    res.redirect('/')
})

app.get('/', async(req, res) => {
    var row = 7;
    var column = 80;

    test = [
        [1, 1, 0, 0, 0, 1],
        [1, 1, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 1]
    ]
    var x = test.length
    var y = test[1].length

        var columnArr = []
        var rowArr = []
        for (var j = 0; j < column; j++) {
            columnArr.push(0)
        }
        for (var j = 0; j < row; j++) {
            rowArr.push(columnArr)
        }
        var container = rowArr




        for (var i = 0; i < x; i++) {
            for (var j = 0; j < y; j++) {
                container[i][j] = test[i][j]
            }
        }



        console.log(container)
    res.render("index2", {pixel: container})
})


app.listen(3000)