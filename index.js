// Name prov
var prov = [ // Chris
    { letter: 'h', order: 'o1'  },
    { letter: 'r', order: 'o2'  },
    { letter: 'C', order: 'o0'  },
    { letter: 'i', order: 'o3'  },
    { letter: 's', order: 'o4'  },
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
var size = prov.length;

for (var i = 0; i < size; i++) {

    // Create square with letter inside
    var line = document.createElement('div'); line.className = 'line';
    var square = document.createElement('div');
    var letter = document.createTextNode(prov[i]['letter']);
    square.classList.add('square', prov[i]['order'])
    square.appendChild(letter);

    square.style.color = colors[i];
    square.style.borderColor = colors[i];

    // Append square to line
    line.appendChild(square);

    // Append DOM
    var selector = '.square.' + prov[i]['order'];
    timeline.appendChild(line);
    $(selector).hide();
}

// Fade in, when complete, sort
$('.square').fadeIn('slow');

var sortTimeline = anime.timeline();

    sortTimeline.add({
        targets: '#timeline .square.o3',
        translateY: 100
    })
    .add({
        targets: '#timeline .square.o0',
        translateY: 200
    })