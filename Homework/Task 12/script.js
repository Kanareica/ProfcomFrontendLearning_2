var cat = {
    sleepCheck: false,
    calories: 100,
    eat: function (volume) {
        this.calories += volume;
        alert('Cat eats something');
    },
    sleep: function () {
        if (this.calories > 1000 && !this.sleepCheck) {
            alert('Cat is sleeping now');
            this.calories -= 100;
            this.sleepCheck = true;
        } else if (!this.sleepCheck) {
            alert('Не буди кису');
        } else {
            alert('Cat wants to eat something');
        }
    },
    wakeUp: function () {
        if (this.sleepCheck) {
            alert('Cat woke up');
            alert('Cat wants to eat something');
            this.sleepCheck = false;
        } else {
            alert('Cat isn`t sleeping. Cat wants to eat something');
        }
    }
}

cat.eat(1100);
cat.sleep();
cat.wakeUp();
cat.sleep();
cat.sleep();
cat.wakeUp();
cat.sleep();
cat.wakeUp();
cat.wakeUp();
