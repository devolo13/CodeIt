function search(searchQuery) {
  alert(searchQuery);
}

function removeThis(element) {
  element.style.visibility = 'hidden';
}

function upvote(thing) {
  document.getElementById(thing).innerText++;
}

function downvote(thing) {
  document.getElementById(thing).innerText--;
}
