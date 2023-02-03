var timers = document.querySelector('.timer-container').children

        var interval

        var lowestIndex = 0
        var highestIndex = 3

        function resetInterval(index = null) {
            clearInterval(interval)
            interval = null

            document.querySelector('[data-input]').value = getSum() 
        }

        function getSum() {
            let value = 0;

            for (let index = 0; index < timers.length; index++) {
                const element = timers[index];
                
                let span = element.querySelector('span')
                value += parseInt(span.innerHTML.toString())
            }

            return value
        }

        document.querySelectorAll('.timer-start').forEach(elem => {
            elem.addEventListener('click', function(e) {
                let parentElement = e.target.parentElement
                let index = parentElement.getAttribute('data-timer')

                resetInterval(index)
                
                interval = setInterval(() => {
                    let span = parentElement.querySelector('span')

                    span.innerText = parseInt(span.innerHTML.toString()) + 1
                }, 1000);

            });
        })

        document.querySelectorAll('.timer-stop').forEach(elem => {
            elem.addEventListener('click', function (e) {
                resetInterval()
            });
        })
        
        document.querySelectorAll('.timer-reset').forEach(elem => {
            elem.addEventListener('click', function (e) {                
                let parentElement = e.target.parentElement
                let index = parentElement.getAttribute('data-timer')

                let span = parentElement.querySelector('span')
                
                span.innerText = 0

                resetInterval(index)
            });
        })