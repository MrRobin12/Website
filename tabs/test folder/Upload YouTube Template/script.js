function updateSize() {

var nBytes = 0,
    oFiles = document.getElementById("uploadInput").files,
    nFiles = oFiles.length;
  
for (var nFileId = 0; nFileId < nFiles; nFileId++) {
    
    var sOutput = nBytes + " bytes";
    nBytes += oFiles[nFileId].size;  
    var object = JSON.stringify(oFiles);
    var title = oFiles[nFileId].name;
    
    for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
        sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] + " (" + nBytes + " bytes)";
    }
    
    var filename = title.split('.').slice(0, -1).join('.');
    var type = oFiles[nFileId].type;
    fixedUpdate(oFiles, filename, type, sOutput);
    }
}

function fixedUpdate(object, title, type, size) {
    console.log(object);
    
    console.log(type);
    console.log(title);
    console.log(size);   
}

// YouTube Title Length Limit 70 characters