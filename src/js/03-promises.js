const form = document.querySelector(".form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  let delay = event.currentTarget.delay.valueAsNumber;
  const step = event.currentTarget.step.valueAsNumber;
  const amount = event.currentTarget.amount.valueAsNumber;

  for (let position = 1; position <= amount; position++) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delay += step;
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
