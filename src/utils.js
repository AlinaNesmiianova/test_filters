const makeCalc = (value, add) =>{
    value+=add
    if(value>255) value = 255
    if(value<0) value = 0
    return value;
}
export const makeBrignterBlackout = (imageData, value=-10) =>{
    let pixels = imageData.data;
    //if(value>128){
    //    for(var i = 0; i < pixels.length; i+=4){
    //        pixels[i] += value //red
    //        pixels[i+1] += value //green
    //        pixels[i+2] += value
    //   }
    //}
    //else{
    //    for(var i = 0; i < pixels.length; i+=4){
    //        pixels[i] += value //red
    //        pixels[i+1] += value //green
    //        pixels[i+2] += value
    //    }
    //}
    for(var i = 0; i < pixels.length; i+=4){
        pixels[i] = makeCalc(pixels[i], value) //red
        pixels[i+1] = makeCalc(pixels[i+1], value) //green
        pixels[i+2] = makeCalc(pixels[i+2], value) //blue
    }
    return imageData;
}