import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
function Home() {
    const [longUrl,setLogurl]=useState('')
    const [shortUrl,setshortUrl]=useState('')
   
    const [er,setError] = useState('')
    const token=(JSON.parse(localStorage.getItem("token") || " "))

    // useEffect(()=>{
    //   console.log(longurl);
    //       },[])
    
    const shortenurl = async (e)=>{
      e.preventDefault()
      const body={
        longUrl
      }
    
      try{
          const result = await axios.post('http://localhost:8000/url-shortener/shorten',body,{
            headers: {  'Authorization':'Bearer '+token  }
          })
   
        console.log(result);
        setshortUrl(result.data.shortUrl)
      
      

 
      }catch(error){
        alert(error)
    }
  }







    function myFunction() {
        // Get the text field
        var copyText = document.getElementById("shorturl");
      
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        
        // Alert the copied text
        alert("Copied the text: " + copyText.value);
      }
  return (
    <div class="main">
    <div class="head">
        <p><strong>Minify</strong>Uniform Resource Locator</p>
    </div>
    <div class="heading-main">
        <div class="heading" >
            <p class="p1">Lets <strong>Minify</strong>!</p>
            <p class="p2">paste your URL below to minify its short</p>
        </div>
       </div>
       <div class="input-main">
        <div class="inputdiv"><input type="text"onChange={(e)=>{setLogurl(e.target.value)}} id="longurl" placeholder="Enter Your long URL"/><button onClick={(e)=>shortenurl(e)} type="submit">Shorten URL</button></div>
      { shortUrl? <div class="input1" id="input1">
            <input id="shorturl" value={shortUrl} type="text"/> 
           <button type="submit"  onClick={(e)=>myFunction(e)}><i class="fa-regular fa-clone"></i></button> 
         </div>
         :''
}

       </div>
   

           
<div class="imagemain">
    <div class="img1"></div>
 <div class="img2"></div>
</div>
    
    
</div>
  )
}

export default Home