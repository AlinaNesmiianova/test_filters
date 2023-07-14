import {useEffect, useRef} from "react"

const Canvas = (props) => {
    const canvasRef = useRef() //это используем для получения ссылки на canvas

    useEffect (() => { //отрисовывается компонент
        if(canvasRef.current){
            const canvas = canvasRef.current.getContext('2d') //получили контекст

            const image = new Image() //создали объект типа image
            image.onload = function (){ //прописали для него функцию onload
                canvas.drawImage(image, 0, 0) //загрузка картинки передаем в нее в картинку и откуда рисовать
                                            //здесь из верхнего левого угла
            };
            image.src = props.image //после загрузки картинки передаем ее в canvas
                                    //отправляем в функцию, которую получаем через props
        }
    }, [])
    const onProcessClick = () =>{ //обработка картинки
        const canvas = canvasRef.current.getContext('2d') //через ref у canvas получаем контекст
        const image = canvas.getImageData(0, 0, 1157, 677) //достаем информацию о картинке (пиксели, свойства - высота, ширина,)
                                                    //с нулевого пикселя по последний
        const newImage = props.processImage(image) //применение фильтра (см. App.jsx)
        canvas.putImageData(newImage, 0, 0)
    }
    
    return (
        <>
            <canvas ref={canvasRef} width={1157} height={677}/> 
            <button onClick={onProcessClick}>Обработать</button>
            
        </>
    )
}

export default Canvas //поэтому не нужны {} в import 
                    //(импортирование по умолчанию - импортирует только нечто по имени Canvas)
                    //иначе импортируем все из файла, что в {}