import './styles.css';

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.refs = {
          timerId: document.querySelector('.timer-1'),
          days: document.querySelector('[data-value="days"]'),
          hours: document.querySelector('[ data-value="hours"]'),
          mins: document.querySelector('[data-value="mins"]'),
          secs: document.querySelector('[data-value="secs"]')
        };
        this.time = null;
        this.date = {
          days: null,
          hours: null,
          mins: null,
          secs: null,
        }
    }

    start() {
      this.timer();
  }
  
    timer() {
        setInterval(() => {
          const currentDate = Date.now()
          this.time = this.targetDate - currentDate;

          this.getDateToTimer()
          this.getValueToInterval()
        }, 1000);
  }

    getDateToTimer() {
        this.date.days = Math.floor(this.time / (1000 * 60 * 60 * 24));
        this.date.hours = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.date.mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
        this.date.secs = Math.floor((this.time % (1000 * 60)) / 1000);

  }
  
    getValueToInterval() {
        this.refs.days.textContent = this.date.days;
        this.refs.hours.textContent = this.date.hours;
        this.refs.mins.textContent = this.date.mins;
        this.refs.secs.textContent = this.date.secs; 
  }
}


const newTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

newTimer.start();