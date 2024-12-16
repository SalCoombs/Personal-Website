let version = 5;
document.getElementById("update-button").addEventListener("click", function () {
  version += 1;
  document.getElementById("update-version").innerHTML = "Update: 1." + version;
});
