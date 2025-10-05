//DATATYPES
//PREMETIVE DATA TYPES
//1. String
let name = "John Doe";
console.log("My name is " + name);
console.log(typeof name); //string      

//2. Number
let age = 25;
console.log("My age is " + age);
console.log(typeof age); //number   

//3. Boolean
let isStudent = true;
console.log("Am I a student? " + isStudent);
console.log(typeof isStudent); //boolean    

//4. Undefined

let address;
console.log("My address is " + address);
console.log(typeof address); //undefined

//5. Null
let phoneNumber = null;
console.log("My phone number is " + phoneNumber);
console.log(typeof phoneNumber); //object (this is a known quirk in JavaScript) 


//6. Symbol
let uniqueId = Symbol("id");
console.log("My unique ID is " + uniqueId.toString());
console.log(typeof uniqueId); //symbol  


//7. BigInt
let bigNumber = BigInt(123456789012345678901234567890);
console.log("My big number is " + bigNumber);
console.log(typeof bigNumber); //bigint 


//NON-PREMETIVE DATA TYPES
//1. Object
let person = {
    name: "Jane Doe",
    age: 30,
    isEmployed: false
};
console.log("Person Details: " + JSON.stringify(person));
console.log(typeof person); //object
//2. Array
let colors = ["Red", "Green", "Blue"];
console.log("Colors: " + colors);
console.log(typeof colors); //object (arrays are a type of object in JavaScript)

//3. Function       
function greet() {
    return "Hello, World!";
}   
console.log(greet());
console.log(typeof greet); //function
//4. Date
let currentDate = new Date();
console.log("Current Date: " + currentDate);
console.log(typeof currentDate); //object (dates are a type of object in JavaScript)    

//5. RegExp
let pattern = /ab+c/;
console.log("Pattern: " + pattern);
console.log(typeof pattern); //object (regular expressions are a type of object in JavaScript)


//6. Map

let map = new Map();            
map.set("name", "Alice");
map.set("age", 28);
console.log("Map: " + JSON.stringify(Array.from(map.entries())));
console.log(typeof map); //object (maps are a type of object in JavaScript)


//7. Set
let set = new Set();
set.add(1); 
set.add(2);
set.add(3);
console.log("Set: " + JSON.stringify(Array.from(set.values())));
console.log(typeof set); //object (sets are a type of object in JavaScript)

//8. WeakMap
let weakMap = new WeakMap();
let objKey = {};
weakMap.set(objKey, "value");
console.log("WeakMap value: " + weakMap.get(objKey));
console.log(typeof weakMap); //object (weak maps are a type of object in JavaScript)    


//9. WeakSet
let weakSet = new WeakSet();
let obj1 = {};
weakSet.add(obj1);  
console.log("WeakSet has obj1: " + weakSet.has(obj1));
console.log(typeof weakSet); //object (weak sets are a type of object in JavaScript)

//10. Error
let error = new Error("Something went wrong!");
console.log("Error message: " + error.message);
console.log(typeof error); //object (errors are a type of object in JavaScript)
//11. Promise
let promise = new Promise((resolve, reject) => 
{
    resolve("Promise resolved!");
});
promise.then((message) => console.log(message));
console.log(typeof promise); //object (promises are a type of object in JavaScript)


//12. ArrayBuffer
let buffer = new ArrayBuffer(16);   

console.log("ArrayBuffer byte length: " + buffer.byteLength);
console.log(typeof buffer); //object (array buffers are a type of object in JavaScript)         
//13. DataView
let dataView = new DataView(buffer);
dataView.setInt8(0, 42);
console.log("DataView value at byte 0: " + dataView.getInt8(0));
console.log(typeof dataView); //object (data views are a type of object in JavaScript)          


//14. TypedArray (e.g., Int8Array)
let int8Array = new Int8Array(4);       


int8Array[0] = 10;
int8Array[1] = 20;
int8Array[2] = 30;
int8Array[3] = 40;
console.log("Int8Array: " + int8Array);
console.log(typeof int8Array); //object (typed arrays are a type of object in JavaScript)       



//15. JSON
let jsonString = '{"name": "Bob", "age": 35}';
let jsonObject = JSON.parse(jsonString);
console.log("JSON Object: " + JSON.stringify(jsonObject));
console.log(typeof jsonObject); //object (JSON objects are a type of object in JavaScript)  



//16. Intl (Internationalization)



let numberFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
console.log("Formatted number: " + numberFormatter.format(123456.789));
console.log(typeof numberFormatter); //object (Intl objects are a type of object in JavaScript)     



//17. Generator Function



function* generatorFunction() { 
    yield 1;
    yield 2;
    yield 3;
}               
let generator = generatorFunction();
console.log("Generator values: " + [generator.next().value, generator.next().value, generator.next().value]);
console.log(typeof generator); //object (generators are a type of object in JavaScript) 



//18. Async Function    
async function asyncFunction() {
    return "Async function result!";    
}
asyncFunction().then((result) => console.log(result));
console.log(typeof asyncFunction); //function (async functions are a type of function in JavaScript)        


//19. Proxy
let target = {};
let handler = {
    get: function(obj, prop) {
        return prop in obj ? obj[prop] : "Property not found";
    }


};
let proxy = new Proxy(target, handler);
console.log("Proxy get name: " + proxy.name);


console.log(typeof proxy); //object (proxies are a type of object in JavaScript)    




//20. Reflect
let obj = { x: 10, y: 20 };
console.log("Reflect get x: " + Reflect.get(obj, 'x')); 


console.log(typeof Reflect); //object (Reflect is a built-in object in JavaScript)      
//21. Math
console.log("Math random: " + Math.random());       
console.log(typeof Math); //object (Math is a built-in object in JavaScript)


//22. Global Object (in browsers, it's 'window'; in Node.js, it's 'global')

console.log("Global object: " + (typeof window !== 'undefined' ? 'window' : 'global'));
console.log(typeof (typeof window !== 'undefined' ? window : global)); //object (global objects are a type of object in JavaScript)
//23. Arguments Object



function showArguments() {
    console.log("Arguments: " + JSON.stringify(Array.from(arguments)));
    console.log(typeof arguments); //object (arguments is a type of object in JavaScript) 
}
showArguments(1, 2, 3, "four", "five");


//24. HTML Elements (in browsers)
let div = document.createElement('div');
div.innerHTML = "Hello, World!";
console.log("Div element: " + div.outerHTML);
console.log(typeof div); //object (HTML elements are a type of object in JavaScript)    

//25. Document (in browsers)
console.log("Document title: " + document.title);   
console.log(typeof document); //object (document is a type of object in JavaScript)
//26. Window (in browsers)
console.log("Window location: " + window.location.href); 
console.log(typeof window); //object (window is a type of object in JavaScript)
//27. NodeList (in browsers)

let nodeList = document.querySelectorAll('div');
console.log("NodeList length: " + nodeList.length);
console.log(typeof nodeList); //object (NodeLists are a type of object in JavaScript)



//28. HTMLCollection (in browsers)
let htmlCollection = document.getElementsByTagName('div');
console.log("HTMLCollection length: " + htmlCollection.length);
console.log(typeof htmlCollection); //object (HTMLCollections are a type of object in JavaScript)
//29. Event (in browsers)
let event = new Event('build');
console.log("Event type: " + event.type);
console.log(typeof event); //object (events are a type of object in JavaScript)
//30. CustomEvent (in browsers)
let customEvent = new CustomEvent('myEvent', { detail: { key: 'value' } });
console.log("CustomEvent type: " + customEvent.type);
console.log(typeof customEvent); //object (custom events are a type of object in JavaScript)
//31. File (in browsers)

let file = new File(["content"], "example.txt", { type: "text/plain" });
console.log("File name: " + file.name);
console.log(typeof file); //object (files are a type of object in JavaScript)
//32. Blob (in browsers)
let blob = new Blob(["Hello, Blob!"], { type: "text/plain" });
console.log("Blob size: " + blob.size);
console.log(typeof blob); //object (blobs are a type of object in JavaScript)
//33. URL (in browsers and Node.js)
let url = new URL('https://example.com/path?name=JohnDoe');
console.log("URL hostname: " + url.hostname);
console.log(typeof url);        






//34. History (in browsers)
console.log("History length: " + history.length);   
console.log(typeof history); //object (history is a type of object in JavaScript)
//35. Location (in browsers)
console.log("Location href: " + location.href);         
console.log(typeof location); //object (location is a type of object in JavaScript)
//36. Navigator (in browsers)
console.log("Navigator userAgent: " + navigator.userAgent);
console.log(typeof navigator); //object (navigator is a type of object in JavaScript)
//37. Screen (in browsers)
console.log("Screen width: " + screen.width);
console.log(typeof screen); //object (screen is a type of object in JavaScript)
//38. Performance (in browsers)
console.log("Performance now: " + performance.now());
console.log(typeof performance); //object (performance is a type of object in JavaScript)
//39. Console (in browsers and Node.js)
console.log("Console type: " + typeof console);

console.log(typeof console); //object (console is a type of object in JavaScript)
//40. XMLHttpRequest (in browsers)
let xhr = new XMLHttpRequest();
console.log("XMLHttpRequest readyState: " + xhr.readyState);
console.log(typeof xhr); //object (XMLHttpRequest is a type of object in JavaScript)
//41. WebSocket (in browsers and Node.js)
let ws = new WebSocket('wss://echo.websocket.org');

console.log("WebSocket readyState: " + ws.readyState);
console.log(typeof ws); //object (WebSocket is a type of object in JavaScript)
//42. ServiceWorker (in browsers)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {

        console.log("ServiceWorker registered with scope: " + registration.scope);
        console.log(typeof registration); //object (ServiceWorkerRegistration is a type of object in JavaScript)
    }).catch(function(error) {
        console.log("ServiceWorker registration failed: " + error);
    });
} else {
    console.log("ServiceWorker not supported in this browser.");
}

//43. Cache (in browsers)
if ('caches' in window) {


    caches.open('my-cache').then(function(cache) {
        console.log("Cache opened: " + cache);
        console.log(typeof cache); //object (Cache is a type of object in JavaScript)
    }

    ).catch(function(error) {
        console.log("Cache open failed: " + error);
    }

    );
} else {
    console.log("Cache not supported in this browser.");
}           
//44. Notification (in browsers)
if ('Notification' in window) {
    Notification.requestPermission().then(function(permission) {    
        if (permission === 'granted') {
            let notification = new Notification('Hello, Notification!');
            console.log("Notification title: " + notification.title);
            console.log(typeof notification); //object (Notification is a type of object in JavaScript)
        } else {
            console.log("Notification permission denied.");
        }

    }).catch(function(error) {
        console.log("Notification permission request failed: " + error);
    }


    );} else {
    console.log("Notification not supported in this browser.");
}               


//45. Geolocation (in browsers)
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Geolocation position: " + JSON.stringify(position.coords));        
        console.log(typeof position); //object (Position is a type of object in JavaScript)
    }, function(error) {
        console.log("Geolocation error: " + error.message);
    });
} else {
    console.log("Geolocation not supported in this browser.");
}       



//46. MediaQueryList (in browsers)
if ('matchMedia' in window) {
    let mediaQueryList = window.matchMedia('(max-width: 600px)');   
    console.log("MediaQueryList matches: " + mediaQueryList.matches);
    console.log(typeof mediaQueryList); //object (MediaQueryList is a type of object in JavaScript)
} else {
    console.log("matchMedia not supported in this browser.");
}       

//47. IntersectionObserver (in browsers)
if ('IntersectionObserver' in window) {
    let observer = new IntersectionObserver(function(entries) { 
        entries.forEach(function(entry) {
            console.log("IntersectionObserver entry isIntersecting: " + entry.isIntersecting);
        }
        );
    }, { threshold: [0.5] });
    let target = document.querySelector('div');     
    if (target) {
        observer.observe(target);
        console.log("IntersectionObserver observing target.");
    }
    console.log(typeof observer); //object (IntersectionObserver is a type of object in JavaScript)
} else {
    console.log("IntersectionObserver not supported in this browser.");
}

//48. MutationObserver (in browsers)
if ('MutationObserver' in window) {
    let mutationObserver = new MutationObserver(function(mutationsList) {

        mutationsList.forEach(function(mutation) {
            console.log("MutationObserver mutation type: " + mutation.type);
        }   
        );
    }   );          
    let targetNode = document.querySelector('div');
    if (targetNode) {
        mutationObserver.observe(targetNode, { attributes: true, childList: true, subtree: true });
        console.log("MutationObserver observing target node.");
    }

    console.log(typeof mutationObserver); //object (MutationObserver is a type of object in JavaScript)
} else {
    console.log("MutationObserver not supported in this browser.");
}

