
$(window).on('load', function () {
    let num1 = $('#num1') //firs field with namber
    let num2 = $('#num2')  //second field with namber
    let numbers = $('.number') //block with all numbers
    let focus = 1
    let btn = $('.button')
    let result = $('#result')
    let operatorBtns = $('.operator__btn')
    let operatorWrapper = $('.operatator')
    let operator = undefined

    num1.focus() // automaticli made firs field in focus

    //set focus for field number 1
    num1.on('click', () =>{
        focus = 1
        console.log('focus: ', focus);
    })
    //set focus for field number 2
    num2.on('click', () =>{
        focus = 2
    })

    //always keep focus on field number 1 or field number 2
    $('body').on('click', () =>{
        setFocus()
    })

    //add listenr for operator buttons
    operatorBtns.on('click', (e) =>{
        e.target.getAttribute('data-action')
        operator = e.currentTarget.getAttribute('data-action')
        console.log('operator: ', operator);
        switch (operator) {
            case "addition":
                operatorWrapper.html(`
                <svg  width="3em" height="3em" viewBox="0 0 16 16" class="math_act bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                `) 
            break
            case "subtraction":
                operatorWrapper.html(`
                <svg width="3em" height="3em" viewBox="0 0 16 16" class="math_act bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                </svg>
                `) 
            break
            case "multiplication":
                operatorWrapper.html(`
                <svg width="3em" height="3em" viewBox="0 0 16 16" class="math_act bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                `) 
            break
            case "division":
                operatorWrapper.html(`
                <svg width="3em" height="3em" viewBox="0 0 16 16" class="math_act bi bi-slash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
                `) 
            break

        }
    })
    



    //get all number-button and add onClick
    numbers.on('click', (e) =>{
        let num = e.target.getAttribute('data-num')
        console.log('num: ', num);
        if(focus === 1) {
            num1.val().length <= 4
            ? num1.val(num1.val() + num)
            : null
        } else {
            num2.val().length <= 4 
            ? num2.val(num2.val() + num)
            : null
        }
    })

    //calculate
    btn.on('click', () =>{
        switch(operator){
            case undefined:
                console.log('w');
            case "addition":
                result.val(addition(num1.val(), num2.val()))
            break
            case "subtraction":
                result.val(subtraction(num1.val(), num2.val()))
            break
            case "multiplication":
                result.val(multiplication(num1.val(), num2.val()))
            break
            case "division":
                result.val(division(num1.val(), num2.val()))
            break
        }
    })



    //---------------FUNCTIONS------------------

    function addition(first, second) {
        return +first + +second
    }
    function subtraction(first, second) {
        return first - second
    }
    function multiplication(first, second) {
        return first * second
    }
    function division(first, second) {
        return first / second
    }
    function setFocus() {
        focus === 1 ? num1.focus() : num2.focus()
    }
   
 });