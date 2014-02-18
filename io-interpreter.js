/**
 * Created by Konstantin on 2/18/14.
 */
(function(){
    /**
     * Fuction makes input and output fields functioning like
     * command promt
     * @param selectorToCapture
     * @param selectorToOutput
     */
    function inputCapture(selectorToCapture, selectorToOutput){
        var inputCapture=document.getElementsByClassName(selectorToCapture).value;
        console.log(inputCapture);
        var processedOutput=document.getElementsByClassName(selectorToOutput);
        processedOutput.appendData(inputCapture);
    }
    inputCapture('input', 'output');
    //TODO make function recursive. Like a regular bash console expirience
})();

