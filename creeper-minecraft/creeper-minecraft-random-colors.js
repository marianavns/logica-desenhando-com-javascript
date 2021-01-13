const canvas = document.querySelector('canvas')
    const pincel = canvas.getContext('2d')
    const minX = 0
    const minY = 0
    const maxX = 500
    const maxY = 500

    const colorsRandom = ['limegreen', 'palegreen', 'lightgreen', 'springgreen', 'forestgreen', 'palegreen']

    const colorFace = 'black'

    const drawRect = (x, y, color) => {
        pincel.fillStyle = color
        pincel.fillRect(x, y, 0.1*maxX, 0.1*maxY)
    }

    getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    const drawLine = (y) => {
        for (let x = minX; x <= 0.9*maxX; x+=0.1*maxX)
        
        if ((x == 0.2*maxX || x == 0.3*maxX || x == 0.6*maxX || x == 0.7*maxX) && (y == 0.2*maxY || y == 0.3*maxY)){
            drawRect(x, y, colorFace)
        } else {
            if ((x == 0.4*maxX || x == 0.5*maxX) && (y == 0.4*maxY)) {
                drawRect(x, y, colorFace)
            } else {
                if (x >= 0.3*maxX && x <= 0.6*maxX && y >= 0.5*maxY && y <= 0.6*maxY) {
                drawRect(x, y, colorFace) 
                } else {
                    if ((x == 0.3*maxX || x == 0.6*maxX) && y == 0.7*maxY) {
                    drawRect(x, y, colorFace) 
                    } else {
                     drawRect(x, y, colorsRandom[getRandomNumber(0, 6)]) 
                    }
                }
            }
        }
    }

const drawCreeper = (line) => {
    for (let contador = 0; contador <= 450; contador = contador + 50)
    drawLine(contador)
}

drawCreeper()

