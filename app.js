// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAtTnEIWyiZE-prcSdIg9zlf83As-XAd6A",
    authDomain: "pwa-test-a2741.firebaseapp.com",
    databaseURL: "https://pwa-test-a2741.firebaseio.com",
    projectId: "pwa-test-a2741",
    storageBucket: "pwa-test-a2741.appspot.com",
    messagingSenderId: "758160015443",
    appId: "1:758160015443:web:ddb85ce82488df229ac6a6"
};
// Initialize Firebase
onPushConsole('initializeApp start.');
firebase.initializeApp(firebaseConfig);
onPushConsole('initializeApp done.');
const messaging = firebase.messaging();
onPushConsole('messaging make success.');

//パーミッションチェックします。
messaging.requestPermission()
	.then(function(){
		onPushConsole('Have permission');
		return messaging.getToken();
	})
	.then(function(token){
		//あとでcurlコマンドにセットするデバイストークンを出力します
		onPushConsole("getToken done. " + token);
	})
	.catch(function(err){
		onPushConsole('error Occuerd at getpermission');
		return messaging.getToken();
	})
	.then(function(token){
		onPushConsole("getToken catch done. " + token);
	});

messaging.usePublicVapidKey('BHpxgae0JS7fuiHkqbuZLib2hmLLXFwFtk91boqxWQECjj0ESvfsFerWrkZ_bNJDLH5B9HFUPIMGGE0EKOwEJCg');
messaging.onMessage(function(payload){
	onPushConsole('onMessage:' + payload);
});

function onPushConsole(text) {
    const $console = $("#token-console");
    var content = $console.text();
    $console.text(content + "\n" + text);
}
