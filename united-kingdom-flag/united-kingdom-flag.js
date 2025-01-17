const canva = document.querySelector('canvas')
    const pincel = canva.getContext('2d')

    pincel.fillStyle = 'white'
    const minX = 0
    const minY = 0
    const maxX = 700
    const maxY = 350
    pincel.fillRect(minX, minY, maxX, maxY)
    pincel.fillStroke = 'black'
    pincel.strokeRect (minX, 0, maxX, maxY)

    const drawReds = (x, y, w, z) => {
        pincel.fillStyle = 'crimson'
        pincel.fillRect (x, y, w, z)
    }

    const drawTriangles = (a, b, c, d, e, f) => {
        pincel.fillStyle = 'darkblue'
        pincel.beginPath()
        pincel.moveTo(a, b)
        pincel.lineTo(c, d)
        pincel.lineTo(e, f)
        pincel.fill()
    }

drawReds(0.45*maxX, minY, 0.1*maxX, maxY)
drawReds(minX, 2/5*maxY, maxX, 0.2*maxY)

drawTriangles(minX, 0.1*maxY, minX, maxY/3, maxY*3/7, maxY/3)
drawTriangles(maxX, 0.1*maxY, maxX, maxY/3, 7/9*maxX, maxY/3)
drawTriangles(maxX, (2*maxY)/3, maxX, 0.9*maxY, 7/9*maxX, (2/3)*maxY)
drawTriangles(minX, (2*maxY)/3, minX, 0.9*maxY, maxY*3/7, (2/3)*maxY)

drawTriangles(0.12*maxX, minY, (15*maxX)/36, minY, (15*maxX)/36, 0.9*maxY/3)
drawTriangles(21/36*maxX, minY, 32/36*maxX, minY, 21/36*maxX, 0.9*maxY/3)
drawTriangles(21/36*maxX, maxY, 32/36*maxX, maxY, 21/36*maxX, 2.1*maxY/3)
drawTriangles(0.12*maxX, maxY, (15*maxX)/36, maxY, (15*maxX)/36, 2.1*maxY/3)
