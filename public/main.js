const btn = document.getElementById('share-btn');
const shareUrl = document.getElementById('share-url').textContent;

btn.onclick = function() {
    // Copy shareUrl into clipboard
    var copyText = document.getElementById('share-url');
    copyText.type = 'text';
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
    copyText.type = 'hidden';
    copyText.blur();

    // Animate snackbar
    var x = document.getElementById("snackbar");
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
