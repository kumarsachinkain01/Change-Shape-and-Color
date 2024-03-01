var colors = ['#FF5733', '#33FF57', '#5733FF', '#33FFFF', '#FF33CC', '#FFFF33', '#3366FF', '#FF33CC', '#FF6633', '#33FFCC'];
var shapes = ['square', 'circle', 'triangle', 'rectangle', 'diamond', 'Pentagon'];

function changeColor() {
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('shape').style.backgroundColor = randomColor;
}

function changeShape() {
    var randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    document.getElementById('shape').className = randomShape + ' shape';
}