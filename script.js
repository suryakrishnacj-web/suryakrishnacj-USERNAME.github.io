function toggleMenu(){
  document.getElementById("nav").classList.toggle("open");
}
document.querySelectorAll("nav a").forEach(a=>{
  a.addEventListener("click",()=>document.getElementById("nav").classList.remove("open"));
});

function emailSubmit(form, subject, fields){
  form.addEventListener("submit", function(e){
    e.preventDefault();
    const data = new FormData(form);
    let body = "";
    fields.forEach(([label,key]) => body += label + ": " + (data.get(key) || "") + "\n\n");
    const mailto = "mailto:YOUR_EMAIL@example.com?subject=" +
      encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailto;
  });
}

emailSubmit(document.getElementById("assetForm"), "TechSparkKids Video Asset Submission", [
  ["Name","name"],["Email","email"],["Video idea","idea"],["Asset link","link"],["Extra details","details"]
]);
emailSubmit(document.getElementById("askForm"), "Question for TechSparkKids", [
  ["Name","name"],["Question","question"]
]);
emailSubmit(document.getElementById("messageForm"), "Message to TechSparkKids", [
  ["Name","name"],["Email","email"],["Message","message"]
]);
