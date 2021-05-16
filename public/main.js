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
}
