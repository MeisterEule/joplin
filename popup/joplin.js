let inputName = document.querySelector('.t-name');
let inputShortName = document.querySelector('.t-short');
let inputComposer = document.querySelector('.t-composer');
let inputOpusYear = document.querySelector('.t-opus-year');
let inputPerformer = document.querySelector('.t-performer');
let inputPerfYear = document.querySelector('.t-perf-year');
let inputURL = document.querySelector('.t-url');

console.log("HUHU");
let addButton = document.querySelector('.b-add');
addButton.addEventListener('click', addOpus);

function addOpus () {
  let opusName = inputName.value;
  let shortName = inputShortName.value;
  let composer = inputComposer.value;
  let opusYear = inputOpusYear.value;
  let performer = inputPerformer.value;
  let perfYear = inputPerfYear.value;
  let url = inputURL.value;
  console.log ("Opus Name: ", opusName);
  console.log ("Short Name: ", shortName);
  console.log ("Composer: ", composer);
  console.log ("Year: ", opusYear);
}
