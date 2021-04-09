if ('serviceWorker' in navigator) {
	   navigator.serviceWorker.register('/pwa-test5/js/firebase-messaging-sw.js', 
	    {scope:'/pwa-test5/'}
	   );
}
