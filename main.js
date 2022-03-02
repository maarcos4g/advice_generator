let AdviceData = {
    id: Number,
    advice: String,
}

function getAdvice() {
    fetch('http://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            AdviceData = data.slip;
            let adviceId = document.getElementById('id_advice');
            let adviceMessage = document.getElementById('advice_content');
            adviceId.innerText = '#' + AdviceData.id;
            adviceMessage.innerText = `"${AdviceData.advice}"`;
        })
        .catch(error => console.log(error));
}