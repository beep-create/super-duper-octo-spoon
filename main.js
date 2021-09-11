//https://teachablemachine.withgoogle.com/models/FRggckzjV/

 prediction_1="";
 prediction_2="";
 console.log("ml5 version", ml5.version);

Webcam.set({
width:350,
height: 300,
image_format: 'png',
png_quality: 90
}) 

camera = document.getElementById("camera");
Webcam.attach("#camera");


function take_snapshot() {
    Webcam.snap(function(data_uri){document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'" />';})
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/FRggckzjV/model.json', modelLoaded);

function modelLoaded() {
    console.log("model.Loaded");
}

function speak() {
var synth= window.speechSynthesis;
speak_data_1="the first prediction is "+ prediction_1;
speak_data_2="the second prediction is "+ prediction_2;
var utterThis=new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
synth.speak(utterThis);

}

function check() {
  img = document.getElementById('captured_image');
  classifier.classify(img, gotResult);
  speak()
}

function gotResult(error, results) {
 if (error) {
console.log(error);

 } else {
   console.log(results);
   document.getElementById("result_emotion_name").innerHTML = results[0].label;
   document.getElementById("result_emotion_name_2").innerHTML = results[1].label;
   prediction_1 = results[0].label;
   prediction_2 = results[1].label;
   speak()

   if (results[0].label == "happy") {
document.getElementById("update_emoji").innerHTML="&#128522";
   }
   if (results[0].label == "sad") {
    document.getElementById("update_emoji").innerHTML="&#128546;";
       }
       if (results[0].label == "angry") {
        document.getElementById("update_emoji").innerHTML="&#128545;";
           }
           if (results[0].label == "silly") {
            document.getElementById("update_emoji").innerHTML="&#x1F61C;";
            } 
            if (results[0].label == "scared") {
              console.log(results[0].label);
              document.getElementById("update_emoji").innerHTML="&#x1F628;";
              } 
              if (results[0].label == "cool") {
                document.getElementById("update_emoji").innerHTML="&#x1F60E;";
                
                } 


     if (results[1].label == "happy") {
       console.log(results[1]);
       document.getElementById("update_emoji_2").innerHTML="&#128522;";
       } 
     if (results[1].label == "sad") {
      console.log(results[1]);
      document.getElementById("update_emoji_2").innerHTML="&#128546";
     }   
     if (results[1].label == "angry") {
      console.log(results[1]);
      document.getElementById("update_emoji_2").innerHTML="&#128545;";
      } 
      if (results[1].label == "silly") {
        console.log(results[1]);
        document.getElementById("update_emoji_2").innerHTML="&#x1F61C;";
        } 
        if (results[1].label == "scared") {
          console.log(results[1]);
          document.getElementById("update_emoji_2").innerHTML="&#x1F628;";
          } 
          if (results[1].label == "cool") {
            console.log(results[1]);
            document.getElementById("update_emoji_2").innerHTML="&#x1F60E;";
            
            } 
 }
}

