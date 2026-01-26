import figlet from 'figlet'
import color from 'colors'
figlet('Devit', function(err,data){
    if(err){
        console.log("Error generate ASCII")
        return;
    }
    console.log(color.rainbow(data));
})