



export default function ProgressBar(props){

     
        const Parentdiv = { 
            height: props.height, 
            width: '100%', 
            backgroundColor: "#ffffff2f", 
            marginTop: 20,
            borderRadius: 40, 
          } 
          
          const Childdiv = { 
            height: '100%', 
            width: `${props.progress}%`, 
            backgroundImage: "linear-gradient(to right, #0897FF , #9E00FF)", 
            borderRadius:40, 
            textAlign: 'right'
          } 
          
          const progresstext = { 
            padding: 10, 
            color: 'black', 
            fontWeight: 900 
        }

    return(
        <div style={Parentdiv}> 
      <div style={Childdiv}>    
      </div> 
    </div> 
    )

}