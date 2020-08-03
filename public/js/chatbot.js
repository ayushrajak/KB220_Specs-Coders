let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let intro = ["Hello, I am Chat Bot", "Hi, I am a Robo"];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"];
let hobbies = ["i love to talk with humans", "i like to make friends like you"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..'];


//change the link below from localhost to the heroku one
var comp="http://localhost:3000/profile/complaint";
        var viewcomp="http://localhost:3000/profile";
        var about="http://localhost:3000/aboutus";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const speech = new SpeechSynthesisUtterance();
speech.text = "Welcome to Student's Grievance Support System.";
speech.text = "How may I help you?";

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    speech.text = "Sorry, I can't understand, please try again!";
    if(message.includes('who are you')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes("hello")||message.includes("hai")||message.includes('hi')||message.includes('hey')||message.includes('whats up')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('what can you do') || message.includes('help')|| message.includes('help me')){

        var str1= "Lodge Complaint";
        var str2="View Complaints";
        var str3="About Us";
        speech.text = "You can use the following features:"+"---------------"+str1.link(comp)+","+str2.link(viewcomp)+","+str3.link(about);
    }

    if(message.includes('where to lodge complaint') || message.includes('lodge complaint')|| message.includes('I want to lodge complaint')){
        var str1= "Click here to Lodge Complaint";
        speech.text =str1.link(comp);
    }
    
    if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('how are you')|| message.includes('how are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('tell me something about you')|| message.includes('tell me something about your hobbies')||message.includes('tell me about your hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes("thank")||message.includes('thank you') || message.includes('thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('talk to you') || message.includes('talk')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})