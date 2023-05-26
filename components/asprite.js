import React, { useRef, useEffect,useCallback  } from 'react'
import idleSheet from "../public/images/idleSheet.png"

const Asprite = () => {

    const canvasRef = useRef(null);

//     const animate = (ctx) => {
//         // const CANAVAS_WIDTH = 600;
//         // const CANAVAS_HEIGTH = 600;

//         const playerImage = new Image();
//         playerImage.src = idleSheet;


//         ctx.clearRect(0, 0 , 600, 600 );

//         // ctx.fillRect(100,50,100,100);
//         ctx.drawImage(playerImage,50,50 );
//         requestAnimationFrame(animate);
//     }

//     useEffect(() => {
//     const canvas = canvasRef.current
//     const context = canvas.getContext('2d')

//     animate(context);
  
//   }, [animate])

const draw = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const canvasId = document.getElementById('canvas');

    const CANAVAS_WIDTH = canvasId.width = 55
    const CANAVAS_HEIGTH = canvasId.height = 80

    const spriteWidth = 50
    const spriteHeight = 70

    const playerImage = new Image()
    playerImage.src = "/images/idleSheet.png"

    ctx.clearRect(0, 0, CANAVAS_WIDTH, CANAVAS_HEIGTH)

    ctx.drawImage(playerImage, 4 * spriteWidth ,0 , spriteWidth , spriteHeight ,0,0,spriteWidth, spriteHeight)


    requestAnimationFrame(draw)
  }, [])
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    

      draw()
   
    
    
  }, [draw])




    return <canvas className='' id='canvas' ref={canvasRef} />
};

export default Asprite;