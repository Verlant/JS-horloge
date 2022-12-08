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

const today = new Date();
today_hour = today.getHours();
today_minute = today.getMinutes();
today_seconde = today.getSeconds();

const horloge = new Horloge(today_hour, today_minute, today_seconde);

const btn = document.createElement("button");
document.body.append(btn);
btn.textContent =
  "21 minutes et 28 secondes plus tard (pas le film sur les zombies)";

btn.addEventListener("click", (e) => {
  horloge.go_to_future(21, 28);
});
