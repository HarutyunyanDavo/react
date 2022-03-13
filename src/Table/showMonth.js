

export default function showMonth () {

    let date = new Date().getMonth()

    switch(date){
        case 0:
            date = "Январь"
            break;
        case 1:
            date = "Февраль"
            break;
        case 2:
            date = "Март"
            break;
        case 3:
            date = "Апрель"
            break;
        case 4:
            date = "Май"
            break;
        case 5:
            date = "Июнь"
            break;  
        case 6:
            date = "Июль"
            break;
        case 7:
            date = "Август"
            break;
        case 8:
            date = "Сентябрь"
            break;
        case 9:
            date = "Октябрь"
            break;
        case 10:
            date = "Ноябрь"
            break;
        case 11:
            date = "Декабрь"
            break;   
    }
    return date
}