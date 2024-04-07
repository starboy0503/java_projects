// searchinput
// searchbtn
const dictionary =  (word) =>
 {
    const url = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '34824998a7mshaf30f1bfa417ebbp1cc559jsne48f5141e0e7',
        'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+word,options)
        .then(response=>response.json())
        .then((response)=>{
            
            wordheading.innerHTML="Here is the meaning of your word: "+response.word;
            definition.innerHTML=response.definition.replace("2.","<br>2.").replace("3.","<br>3.").replace("4.","<br>4.");

        })
        .catch(err=>console.error(err));
}
searchbtn.addEventListener("click",(e)=>
{
    e.preventDefault();
    dictionary(searchinput.value);

})

  