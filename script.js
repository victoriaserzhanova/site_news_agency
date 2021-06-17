console.log("script");
    let inputElementTop = document.getElementById('auto-number-top');
    let btnTop = document.getElementById('CalcTop');
    let inputElementBottom = document.getElementById('auto-number-bottom');
    let btnBottom = document.getElementById('CalcBottom');
    
    const stNum = new RegExp('^[1234567890]$');
    const st = new RegExp('^[АаВвЕеКкМмНнОоРрСсТтУуХхAaBbCcEeKkMmOoPpTtXxYyHh]$');

    // Перевод из кириллицы в латиницу
    function transliterate(number) {
        number.forEach((element, index) => {
            switch (element) {
                case 'А': number[index] = 'A'; break 
                case 'О': number[index] = 'O'; break 
                case 'Р': number[index] = 'P'; break 
                case 'С': number[index] = 'C'; break 
                case 'Т': number[index] = 'T'; break 
                case 'Е': number[index] = 'E'; break 
                case 'Н': number[index] = 'H'; break 
                case 'М': number[index] = 'M'; break 
                case 'В': number[index] = 'B'; break 
                case 'Х': number[index] = 'X'; break 
                default: element
            }
        });
    }      

    function getInputElementValue(event) {
        let inputElement = event.target;
        let newVal = inputElement.value.toUpperCase();
        if (newVal.length <= 1) {
            if (st.test(event.data)) { inputElement.value = newVal }
            else { inputElement.value = '' }
        } else if (newVal.length >= 2 && newVal.length <= 4) {
            if (stNum.test(event.data)) {
                inputElement.value = newVal
    
            } else {
                inputElement.value = newVal.slice(0, -1)
            }
        } else if (newVal.length >= 5 && newVal.length <= 6) {
            if (st.test(event.data)) {
                inputElement.value = newVal
            } else { 
                inputElement.value = newVal.slice(0, -1) 
            }
        } else if (newVal.length >= 7 && newVal.length <= 9) {
            if (stNum.test(event.data)) {
                inputElement.value = newVal
            } else { 
                inputElement.value = newVal.slice(0, -1) 
            }
        } else { inputElement.value = newVal.slice(0, -1) }        
    }

    inputElementTop.addEventListener('input', getInputElementValue); 

    btnTop.addEventListener('click', function () {
        let text = inputElementTop.value;
        let textArray = text.split('');
    
        transliterate(textArray);
        textArray = textArray.join('')
    
        // text = text.replace(/\s/g, '');
        textArray = textArray.replace(/\s/g, '');
        console.log(textArray);
        let URL = 'https://www.ingos.ru/auto/osago/agreement/vehicle/?number=';
        document.location.href = `${URL}${textArray}`;
    });
    
    inputElementBottom.addEventListener('input', getInputElementValue); 

    btnBottom.addEventListener('click', function () {
        let text = inputElementBottom.value;
        let textArray = text.split('');
    
        transliterate(textArray);
        textArray = textArray.join('')
    
        // text = text.replace(/\s/g, '');
        textArray = textArray.replace(/\s/g, '');
        console.log(textArray);
        let URL = 'https://www.ingos.ru/auto/osago/agreement/vehicle/?number=';
        document.location.href = `${URL}${textArray}`;
    });
