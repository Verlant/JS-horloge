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
   * ajoute 21 minute et 28 secondes aux attributs de l'objet Horloge
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

BTN.addEventListener("click", (e) => {
  HORLOGE.go_to_future(21, 28);
});
console.log(BTN);
