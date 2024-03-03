const delayedColorChange = (newColor, delay, doNext) => {
    
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay);

    console.log('Next Execution => ', newColor);
}

const callbackhell = () => {

    // hell starts

    delayedColorChange('red', 1000, () => {
        delayedColorChange('orange', 1000, () => {
            delayedColorChange('yellow', 1000, () => {
                delayedColorChange('green', 1000, () => {
                    delayedColorChange('blue', 1000, () => {
                        delayedColorChange('indigo', 1000, () => {
                            delayedColorChange('violet', 1000, () => {
                                // hell ends
                            })
                        })
                    })
                })
            })
        })
    });

};

callbackhell();