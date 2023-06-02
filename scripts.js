let yearOfBirth = prompt("Введіть рік вашого народження:");
if (yearOfBirth === null) {
  alert("Шкода, що Ви не захотіли ввести свій рік народження.");
} else {
  let city = prompt("Введіть місто, в якому ви живете:");
  if (city === null) {
    alert("Шкода, що Ви не захотіли ввести своє місто.");
  } else {
    let sport = prompt("Введіть ваш улюблений вид спорту:");
    if (sport === null) {
      alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
    } else {
      let currentYear = new Date().getFullYear();
      let age = currentYear - parseInt(yearOfBirth);

      let message = "Ваші дані:\n\n";
      message += "Вік: " + age + "\n";

      if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
        let country = "";
        switch (city) {
          case "Київ":
            country = "України";
            break;
          case "Вашингтон":
            country = "США";
            break;
          case "Лондон":
            country = "Великої Британії";
            break;
        }
        message += "Ти живеш у столиці " + country + ".";
      } else {
        message += "Ти живеш у місті " + city + ".";
      }

      let champion = "";
      switch (sport) {
        case "футбол":
          champion = "Кріштіано Роналдо";
          break;
        case "волейбол":
          champion = "Бартош Курек";
          break;
        case "хокей":
          champion = "Боббі Орр";
          break;
      }

      if (champion) {
        message += "\n\nКруто! Хочеш стати як " + champion + "?";
      }

      alert(message);
    }
  }
}
