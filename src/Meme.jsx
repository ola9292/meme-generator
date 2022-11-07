import React from "react";


function Meme(){

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText:'',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })
    
    // const [memeImg, setMemeImg] = React.useState('http://i.imgflip.com/1bij.jpg')
    const[allMemes, setAllMemes] = React.useState([])
  
    React.useState(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then((response) => response.json())
         .then((data) => {console.log(data)
            setAllMemes(data.data.memes)
        });
    },[])

    
    function getNewMeme(){
        // let memesArr = allMemeImages.data.memes
        let rand = Math.floor(Math.random()*allMemes.length)
       
        setMeme(function(prevState){
            return{
                ...prevState,
                randomImage:  allMemes[rand].url
            }
        })
    }

   function handleChange(event){
        setMeme(function(prevState){
            return{
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
   }

    return(
        <div className="meme">
            <div className="input-tab">
                <input type="text" 
                className="input-1" 
                placeholder="Top-text"
                onChange={handleChange}
                name="topText" 
                value={meme.topText}
                />

                <input type="text" 
                className="input-2" 
                placeholder="Bottom-text"
                onChange={handleChange}
                name="bottomText" 
                value={meme.bottomText}
                />
            </div>
      
           <button className="meme-btn" onClick={getNewMeme}>Get new Meme Image</button>
           
           <div className="meme-container">
                <img src={meme.randomImage} alt="" className="meme-img"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export default Meme