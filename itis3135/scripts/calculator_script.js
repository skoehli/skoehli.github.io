// Listen for key presses
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator_keys')

// Get whatever is displayed on the calculator screen
const display = document.querySelector('.calculator_screen')


keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent

    // Remove .is-depressed class from all keys
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))

    // Remove .is-depressed class from all keys
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
    
    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') 
    {
      key.classList.add('is-depressed')
      // Add custom attribute
      calculator.dataset.previousKeyType = 'operator'
    }
 }
})

const key = e.target
const action = key.dataset.action

const previousKeyType = calculator.dataset.previousKeyType


// If the key that was pressed doesn't have a data action attribute, then a number key was pressed
if (!action) 
{
    if(displayedNum === '0' || previousKeyType === 'operator')
    {
        // Replace the zero with the number of the key that was pressed
        display.textContent = keyContent
    }
    else
    {
        // Append the number of the key that was pressed to what is currently on the screen if
        // the number on the screen is non-zero
        display.textContent = displayedNum + keyContent
    }
    

}

// If the key that was pressed had any of the following data action
// attributes, then an operator key was pressed
if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide')
{
    // Make the key look different once it's pressed
    key.classList.add('is-depressed')

    // Store first number
    calculator.dataset.firstValue = displayedNum
    calculator.dataset.operator = action
}

// If key with decimal data attribute was clicked, it was the decimal key
if (action === 'decimal') 
{
    // Append a decimal to what is currently on the screen
    display.textContent = displayedNum + "."
}

// If key with clear data attribute was clicked, it was the clear key
if (action === 'clear') 
{
    // Revert all text on the screen to 0
    display.textContent = 0
} 

// If key with calculate data attribute was clicked, it was the equal key
if (action === 'calculate') 
{
    console.log('equal key!')
}



// Calculate function performs an operation between two numbers
const calculate = (n1, operator, n2) => {
    let result = ''
    
    // Compute depending on operator
    if (operator === 'add') 
    {
      result = parseFloat(n1) + parseFloat(n2)
    } 
    else if (operator === 'subtract') 
    {
      result = parseFloat(n1) - parseFloat(n2)
    } 
    else if (operator === 'multiply') 
    {
      result = parseFloat(n1) * parseFloat(n2)
    } 
    else if (operator === 'divide') 
    {
      result = parseFloat(n1) / parseFloat(n2)
    }
    
    return result
  }

