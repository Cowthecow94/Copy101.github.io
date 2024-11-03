function controls(control){
    if (control == 'back'){
        uvFrame.contentWindow.history.back();
    }
    if (control == 'forward'){
        uvFrame.contentWindow.history.forward();
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