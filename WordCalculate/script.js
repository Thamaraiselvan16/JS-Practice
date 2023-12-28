function countWords(){
    let inputText=document.getElementById("input").value;
    let trimedText=inputText.trim();
    let words=trimedText.split(/\s+/);
    words=words.filter(function(word){
        return word.length>0;
    });
    let wordCount=words.length;
    let result=document.getElementById("result")
    // document.getElementById("result").textContent="Word Cout: "+wordCount;
    result.innerHTML="Word Count: "+wordCount
}