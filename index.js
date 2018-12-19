// Name prov
const prov = [ // Chris
    { letter: 'h', order: 'o1'  },
    { letter: 'r', order: 'o2'  },
    { letter: 'C', order: 'o0'  },
    { letter: 's', order: 'o4'  },
    { letter: 'i', order: 'o3'  },
];

// Colors to set squares and letters
const colors = [
    '#FBF38C',
    '#FF7C72',
    '#61C3FF',
    '#FB89FB',
    '#18FF92'
]

const lastName = 'MacDonald';

var timeline = document.getElementById('timeline');
var lastdiv = document.getElementById('lastName');
var size = prov.length;

for (var i = 0; i < size; i++) {

    // Create square with letter inside
    var line = document.createElement('div'); line.className = 'line';
    var square = document.createElement('div');
    var letter = document.createTextNode(prov[i]['letter']);
    square.classList.add('square', prov[i]['order'])
    square.appendChild(letter);

    // Set square colors
    square.style.color = colors[i];
    square.style.borderColor = colors[i];

    // Append square to line
    line.appendChild(square);

    // Append DOM
    var selector = '.square.' + prov[i]['order'];
    timeline.appendChild(line);
    $(selector).hide();
}

// Create last name div
for(var i = 0; i < lastName.length; i++) {
    var color = colors[Math.floor(Math.random() * colors.length)];
    var index = lastName.charAt(i);
    var spanned = document.createElement('span');
    spanned.style.color = color;
    spanned.classList.add('lastLetter');
    var last = document.createTextNode(index);
    spanned.appendChild(last);
    lastdiv.append(spanned);
}

// Fade in, when complete, sort
$('.square').fadeIn('slow', function() {
    var sortTimeline = anime.timeline();

    sortTimeline.add({
        targets: '#timeline .square.o1',
        duration: 500,
        translateY: 100
    })
    .add({
        targets: '#timeline .square.o0',
        duration: 500,
        translateY: 220
    })
    .add({
        targets: '#timeline .square.o1',
        duration: 500,
        translateX: [ { value: 200 }, { value: 200 } ],
        translateY: [ { value: 100 }, { value: 0 }],
    })
    .add({
        targets: '#timeline .square.o0',
        duration: 500,
        translateX: [ { value: -200 }, { value: -200 } ],
        translateY: [ { value: 220 }, { value: 0 } ]
    })
    .add({
        targets: '#timeline .square.o2',
        duration: 500,
        translateY: 100
    })
    .add({
        targets: '#timeline .square.o1',
        duration: 500,
        translateY: 220,
        translateX: 200
    })
    .add({
        targets: '#timeline .square.o2',
        duration: 500,
        translateX: [ { value: 100 }, { value: 100 } ],
        translateY: [ { value: 100 }, { value: 0 }]
    })
    .add({
        targets: '#timeline .square.o1',
        duration: 500,
        translateX: [ { value: 100 }, { value: 100 } ],
        translateY: [ { value: 220 }, { value: 0 } ]
    })
    .add({
        targets: '#timeline .square.o4',
        duration: 500,
        translateY: 100
    })
    .add({
        targets: '#timeline .square.o3',
        duration: 500,
        translateY: 220
    })
    .add({
        targets: '#timeline .square.o4',
        duration: 500,
        translateX: [ { value: 100 }, { value: 100 } ],
        translateY: [ { value: 100 }, { value: 0 } ]
    })
    .add({
        targets: '#timeline .square.o3',
        duration: 500,
        translateX: [ { value: -100 }, { value: -100 } ],
        translateY: [ { value: 220 }, { value: 0 } ]
    })
    .add({
        targets: '.lastLetter',
        opacity: 1,
        duration: 2000
    })
    .add({
        targets: '#boxes .box',
        scale: 3,
        opacity: 1
    })

    // Expand box size when selected
    $('.box').on({
        mouseenter: function(e) {
            var color = colors[Math.floor(Math.random() * colors.length)];
            var setbox = $(e.target).attr('class');
            setbox = setbox.replace(/ /g, '.');
            anime({
                targets: '.' + setbox,
                scale: 3.5,
                borderColor: color
            });
        },
        mouseleave: function(e) {
            var setbox = $(e.target).attr('class');
            setbox = setbox.replace(/ /g, '.');
            console.log(setbox);
            anime({
                targets: '.' + setbox,
                borderColor: '#373748',
                scale: 3
            });
        }
    });

    $('.box.github').click(function() {

    });
    $('.box.email').click(function() {
        
    });
    $('.box.work').click(function() {
        
    });
});