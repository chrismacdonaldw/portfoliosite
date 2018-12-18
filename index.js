// Name provided
var provided = [ // Chris MacDonald
    { letter: 'i', order: 3  },
    { letter: 'l', order: 13 },
    { letter: 'C', order: 0  },
    { letter: 'D', order: 9  },
    { letter: 'a', order: 12 },
    { letter: 'o', order: 10 },
    { letter: 'd', order: 14 },
    { letter: 'r', order: 2  },
    { letter: 'n', order: 11 },
    { letter: 'h', order: 1  },
    { letter: 'c', order: 8  },
    { letter: 'a', order: 7  },
    { letter: 's', order: 4  },
    { letter: ' ', order: 5  },
    { letter: 'M', order: 6  },
];

// Colors to set squares and letters
var colors = [
    '#FBF38C',
    '#FF7C72',
    '#61C3FF',
    '#FB89FB',
    '#18FF92'
]

var timeline = document.getElementById('timeline');
var size = provided.length;
console.log(size);

for (var i = 0; i < size; i++) {

    // Create square with letter inside
    var square = document.createElement('div');
    var letter = document.createTextNode(provided[i]['letter']);
    square.classList.add('large', 'square', i, provided[i]['order'])
    square.appendChild(letter);

    // Get random color for square
    var color = colors[Math.floor(Math.random() * colors.length)];
    square.style.color = color;
    square.style.borderColor = color;

    // Append DOM
    timeline.appendChild(square);
    console.log('appended child');
}