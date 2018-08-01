// window.getElementByID('singleLL').addEventListener('load', function () {
//     var allimages = document.getElementsByTagName('img');
//     for (var i = 0; i < allimages.length; i++) {
//         if (allimages[i].getAttribute('data-src')) {
//             allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
//         }
//     }
// }, false);

window.addEventListener('load', function() {
    var slowLoadDiv = document.getElementById('singleLL');
    if ( slowLoadDiv ) {
        var allimages = slowLoadDiv.getElementsByClassName('slowFill');
        for (var i = 0; i < allimages.length; i++) {
            if (allimages[i].getAttribute('data-src')) {
                allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
            }
        }
    }
});