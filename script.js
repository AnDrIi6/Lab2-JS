(function () {
  var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === "j") {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

  // --- Додатковий функціонал ---
  console.log("\n--- Додаткове завдання ---");
  console.log("Імена, довжина яких більша за 4 літери:");

  var longNames = names.filter(function (name) {
    return name.length > 4;
  });

  for (var i = 0; i < longNames.length; i++) {
    console.log("✨ " + longNames[i]);
  }
})();
