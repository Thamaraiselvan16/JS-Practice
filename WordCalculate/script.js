function countWords(){
    let inputText=document.getElementById("input").value;
    let trimedText=inputText.trim();
    let words=trimedText.split(/\s+/);
    words=words.filter(function(word){
        return word.length>0;
    });
    let wordCount=words.length;
    document.getElementById("result").textContent="Word Coutent: "+wordCount;

}