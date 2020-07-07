document.getElementById("read-button").addEventListener('click', function() {
            
    if(document.getElementById("file-input").files.length == 0) {
        alert('Error : No file selected');
        return;
    }

    var file = document.getElementById("file-input").files[0];
    var reader= new FileReader();
    reader.readAsText(file);

    reader.addEventListener('load', function(e) {   
        var text = e.target.result;
        document.getElementById('content').innerText=text;
    });

});
