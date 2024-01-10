var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false;

var textArray = [
   
  " Currently in 1st Year.", 
  "Developing Projects and Working on Progress",
  "Resume Building Under Process",
  "Kindly Wait",
  "Here are some Quotes",
  "Manually managing blocks of memory in C is like juggling bars of soap in a prison shower: It’s all fun and games until you forget about one of them",
  "Java is the most distressing thing to hit computing since MS-DOS.",
  "There are only two things wrong with C++:  The initial concept and the implementation",
  "In 2031, lawyers will be commonly a part of most development teams.",
  "End of Quotes",



  
];

var speedForward = 100,
    speedWait = 1000,
    speedBetweenLines = 1000,
    speedBackspace = 25;

typeWriter("output", textArray);

function typeWriter(id, ar) {
  var element = $("#" + id),
      aString = ar[a],
      eHeader = element.children("h1"), //Header element
      eParagraph = element.children("p"); //Subheader element
  
  if (!isBackspacing) {
    if (i < aString.length) {
      if (aString.charAt(i) == "|") {
        isParagraph = true;
        eHeader.removeClass("cursor");
        eParagraph.addClass("cursor");
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);
      } else {
        if (!isParagraph) {
          eHeader.text(eHeader.text() + aString.charAt(i));
        } else {
          eParagraph.text(eParagraph.text() + aString.charAt(i));
        }
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedForward);
      }
    } else if (i == aString.length) {
      isBackspacing = true;
      setTimeout(function(){ typeWriter(id, ar); }, speedWait);
    }
  } else {
    if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
      if (eParagraph.text().length > 0) {
        eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
      } else if (eHeader.text().length > 0) {
        eParagraph.removeClass("cursor");
        eHeader.addClass("cursor");
        eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
      }
      setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
    } else {
      isBackspacing = false;
      i = 0;
      isParagraph = false;
      a = (a + 1) % ar.length;
      setTimeout(function(){ typeWriter(id, ar); }, 50);
    }
  }
}
