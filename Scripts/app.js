// IIFE - Immediately Invoked Function Expression
// AKA - Self Execting Function
(function ()
{
    function Start(){
        console.log("App Started!");
    }

    window.addEventListener("load", Start);
})();