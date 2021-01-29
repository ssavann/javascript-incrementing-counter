const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200      /*You can change the '200' to '1000' if you wan a slower counter*/

        if(c < target){
            counter.innerText = ` ${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        }else{
            counter.innerText = target
        }
    }


    updateCounter()
})