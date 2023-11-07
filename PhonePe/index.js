    const paymentGateway = {
      processPayment: (amount) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (amount <= 50) {
              reject();
            } else {
              resolve();
            }
          }, 2000);
        });
      },
    };

    document.getElementById('payButton').addEventListener('click', () => {
      const amount = parseInt(document.getElementById('amount').value);

      document.getElementById('payButton').style.display = 'none';
      document.querySelector('.processing').style.display = 'block';
      document.querySelector('.processing-circle').style.display = 'inline-block';

      paymentGateway.processPayment(amount)
        .then(() => {
          document.querySelector('.processing').style.display = 'none';
          document.querySelector('.success').style.display = 'block';
        })
        .catch(() => {
          document.querySelector('.processing').style.display = 'none';
          document.querySelector('.failure').style.display = 'block';
        });
    });
  </script>