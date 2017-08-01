// spin it
// var fidget = Draggable.create(spinner, {
//     type: "rotation",
//     throwProps: true,
//     minDuration: 5,
//     maxDuration: 30,
//     throwResistance: 100,
//     overshootTolerance: 1,
//     autoScroll: 1
// });


// TweenLite.to('#spinner', 100, {rotation:1200});

var wrapper = $("#spinner-div"),
    spinner = $("#spinner");

// spin it
Draggable.create(spinner, {
    type: "rotation",
    throwProps: true,
    minDuration: 5,
    maxDuration: 20,
    throwResistance: 100,
    overshootTolerance: 1
});