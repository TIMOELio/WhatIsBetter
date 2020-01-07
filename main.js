max = 16;
min = 1;
rand1 = Math.floor(Math.random() * (max - min + 1) ) + min;
rand2 = Math.floor(Math.random() * (max - min + 1) ) + min;
if(rand1==rand2) {
    if(rand1<10) {
        rand1++;
    } else {
        rand1--;
    }
}
document.write('<p>' + rand1 + ' ' + rand2 + '<p>');
document.write('<img onclick="savescore(1);" src="img/' + rand1 + '.png" width="300px" height="300px"></a>');
document.write('<img onclick="savescore(2);" src="img/' + rand2 + '.png" width="300px" height="300px"></a>');



// Google Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBHtmZRPB90PEKcW-RgovNvybALnDGJJs4",
    authDomain: "whatisbetter.firebaseapp.com",
    databaseURL: "https://whatisbetter.firebaseio.com",
    projectId: "whatisbetter",
    storageBucket: "whatisbetter.appspot.com",
    messagingSenderId: "274557803970",
    appId: "1:274557803970:web:f58d6352a70cac7e9e8a5b",
    measurementId: "G-9HSM4MV7M5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Setup access to the database
let db = firebase.firestore();


function savescore(imglr) {
    if(imglr==1) {
        imgnr1 = rand1;
    } else {
        imgnr1 = rand2;
    }

    
    var docRef = db.collection("imgnr").doc("1");

    docRef.get

    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    /*// Set the "capital" field of the city 'DC'
    db.collection("imgnr").doc(imgnr1).update({
        counter: imgscore
    });*/
    
    //window.location.reload(false);
} 