function controls(control){
    if (control == 'back'){
        uvFrame.contentWindow.history.go(-1);
    }
    if (control == 'forward'){
        uvFrame.contentWindow.history.go(1);
    }
    if (control == 'refresh'){
        uvFrame.contentWindow.location.reload();
    }
    if (control == 'home'){
        uvDiv.hidden = true;
        before.hidden = false;
        uvFrame.src = "";
    }
}