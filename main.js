//https://teachablemachine.withgoogle.com/models/rhfJFxsMB/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rhfJFxsMB/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+random_number_g+random_number_r+")";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('https://png.pngtree.com/png-clipart/20201117/ourmid/pngtree-white-beanie-eye-bull-head-new-year-pattern-png-image_2436344.jpg');
        img1 = document.getElementById('dogforproject.png');
        img2 = document.getElementById('https://cdn0.iconfinder.com/data/icons/pet-shop-related-flat/64/pet_shop-11-512.png');
        img3 = document.getElementById('https://cdn.vectorstock.com/i/preview-1x/19/35/baby-tiger-vector-45271935.jpg');
        img4 = document.getElementById('https://flyclipart.com/thumb2/baby-blue-mouse-683867.png');

        if (results[0].label == "squeak") {
            img4.src = 'https://flyclipart.com/thumb2/baby-blue-mouse-683867.png';
        } else if (results[0].label == "Tap") {
            img3.src = 'https://cdn.vectorstock.com/i/preview-1x/19/35/baby-tiger-vector-45271935.jpg';
    } else if (results[0].label == "Keys") {
        img1.src = 'dogforproject.png';
} else if (results[0].label == "squeak") {
        img2.src = 'https://cdn0.iconfinder.com/data/icons/pet-shop-related-flat/64/pet_shop-11-512.png';
    }else{
        img.src = 'https://png.pngtree.com/png-clipart/20201117/ourmid/pngtree-white-beanie-eye-bull-head-new-year-pattern-png-image_2436344.jpg';
    }
}
}
    
