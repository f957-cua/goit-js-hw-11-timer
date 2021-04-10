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
        }
    }

    timer() {
        setInterval(() => {
        const currentDate = Date.now()
        const time = this.targetDate - currentDate;

        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);

        this.refs.days.textContent = days;
        this.refs.hours.textContent = hours;
        this.refs.mins.textContent = mins;
        this.refs.secs.textContent = secs;           
        }, 1000);
    }
}

const newTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

newTimer.timer();