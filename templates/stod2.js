var xhr = new XMLHttpRequest();
xhr.open("GET", "http://apis.is/tv/stod2", false);

xhr.send();
console.log(xhr.results);
console.log(xhr.title)
