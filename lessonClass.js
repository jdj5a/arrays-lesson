lesson = {};
$(function() {
  $('body').html('<div><button id="start" style="display: none; padding: 10px;">Start</button></div><div id="output"></div>');
  lesson.helloLib = ["Hello ", "[name]"];
  lesson.simpleLib = ["Please excuse ", "[person]", " from class because (s)he is ", "[adjective]"];
  lesson.longLib = [
  "Once upon a time, there was a ", "[adjective]", " girl who lived in a ",
  "[noun]", " near the forest.  Whenever she went out, she wore a red riding ",
  "[noun]", ", so everyone in the ", "[noun]", " called her ", "[adjective]",
  " Red Riding ", "[noun]", "."];

  lesson.getHelloLib = function() {
    return this.helloLib;
  };
  lesson.getSimpleLib = function() {
    return this.simpleLib;
  };
  lesson.getLongLib = function() {
    return this.longLib;
  };

  lesson.print = function(text) {
    //alert(text);
    let output = document.getElementById("output");
    let content = output.innerHTML;
    if (content.trim().length > 0) {
      content += "<br>\n";
    }
    output.innerHTML = content + text;
  };

  lesson.addButton = function(label) {
    let startBtn = document.getElementById("start");
    if (label != null) {
      startBtn.innerHTML = label;
    }
    startBtn.style.display = '';
    return startBtn;
  };
});
