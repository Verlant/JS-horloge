class Horloge {
  /**
   *constructeur de la classe Horloge
   * @param {int} hour
   * @param {int} minute
   * @param {int} seconde
   */
  constructor(hour, minute, seconde) {
    this.hour = hour;
    this.minute = minute;
    this.seconde = seconde;
  }
  /**
   * ajoute 21 minute et 28 secondes aux attributs de l'objet Horloge (avec if)
   */
  go_to_future(min, sec) {
    this.minute += min;
    this.seconde += sec;
    if (this.hour > 23 || this.hour < 0) {
      this.hour = 0;
    } else if (this.minute >= 60 && this.seconde >= 60) {
      this.minute = this.minute - 60;
      this.seconde = this.seconde - 60;
      this.hour++;
      if (this.hour > 23 || this.hour < 0) {
        this.hour = 0;
      }
    } else if (this.minute > 60) {
      this.minute = this.minute - 60;
      this.hour++;
      if (this.hour > 23 || this.hour < 0) {
        this.hour = 0;
      }
    } else if (this.seconde > 60) {
      this.seconde = this.seconde - 60;
      this.minute++;
      if (this.hour > 23 || this.hour < 0) {
        this.hour = 0;
      }
    }
    console.log(this.hour + " : " + this.minute + " : " + this.seconde);
  }
  /**
   * affiche les attributs de l'objet dans la console
   */
  print_attributs() {
    console.log(this.hour + " : " + this.minute + " : " + this.seconde);
  }
  /**
   * ajoute des minute et seconde au temps en convertissant tout en sec puis en h : m : s (sans if)
   * @param {int} min
   * @param {int} sec
   */
  go_to_future_2(min, sec) {
    let time_in_sec =
      this.hour * 3600 + (this.minute + min) * 60 + this.seconde + sec;
    this.hour = Math.floor(time_in_sec / 3600);
    this.minute = Math.floor((time_in_sec % 3600) / 60);
    this.seconde = (time_in_sec % 3600) % 60;
  }
}

const TODAY = new Date();
let today_hour = TODAY.getHours();
let today_minute = TODAY.getMinutes();
let today_seconde = TODAY.getSeconds();

const HORLOGE = new Horloge(today_hour, today_minute, today_seconde);

const BTN = document.createElement("button");
document.body.append(BTN);
BTN.textContent =
  "21 minutes et 28 secondes plus tard (pas le film sur les zombies)";

const P = document.createElement("p");
document.body.append(P);

BTN.addEventListener("click", (e) => {
  HORLOGE.go_to_future_2(21, 28);
  HORLOGE.print_attributs();
});

/**
 * affiche l'heure de l'objet horloge dans une balise p
 */
function affiche() {
  P.textContent =
    HORLOGE.hour + " heures " + HORLOGE.minute + " m " + HORLOGE.seconde + " s";
  HORLOGE.seconde++;
  if (HORLOGE.seconde == 60) {
    HORLOGE.seconde = 0;
    HORLOGE.minute++;
  } else if (HORLOGE.minute == 60) {
    HORLOGE.minute = 0;
    HORLOGE.hour++;
  } else if (HORLOGE.hour == 24) {
    HORLOGE.hour = 0;
  }
}

setInterval(affiche, 1000);
