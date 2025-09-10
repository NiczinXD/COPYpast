document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const buttonSave = document.getElementById('button_salvar');  
    const lista = document.getElementById('lista-copias');       

    let copy = [];

    function saveCopy() {
        localStorage.setItem('copy', JSON.stringify(copy));
    }

    function showSavedCopies() {
        const savedCopies = JSON.parse(localStorage.getItem('copy'));
        if (savedCopies) {
            copy = savedCopies;
            showCopies();
        }
    }

    function showCopies() {
        lista.innerHTML = '';
        copy.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            lista.appendChild(li);

            
            const copyButton = document.createElement('button');
            copyButton.textContent = 'Copy';
            copyButton.classList.add('copy_button');
            copyButton.addEventListener('click', () => copyToClipboard(item));
            li.appendChild(copyButton);
            
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Delete';
            removeButton.classList.add('remove_button');
            removeButton.addEventListener('click', () => removeCopy(item));
            li.appendChild(removeButton);
            
            if(item === 'voceNãoVaiAcharIsso111'){
                const easterEggPageLink = document.createElement('a');
                easterEggPageLink.href = 'easter.html';
                easterEggPageLink.textContent = 'Easter Egg!';
                li.appendChild(easterEggPageLink);
                li.removeChild(copyButton);
                li.appendChild(removeButton);
            }

            if(item === 'bazinga!'){
                const img = document.getElementById('bazinga!!!');
                img.hidden = false;

                setTimeout(() => {
                    img.hidden = true;
                }, 8000);
            }

            if(item === '18/07/2012'){
                const img = document.getElementById('18/07/2012');
                img.hidden = false;

                setTimeout(() => {
                    img.hidden = true;
                }, 8000);
            }

            if(item === 'Jurassic Park'){
                const img = document.getElementById('JP3');
                img.hidden = false;

                setTimeout(() => {
                    img.hidden = true;
                }, 8000);
            }

            if(item === 'corinthians vs flamengo'){
                const img = document.getElementById('corinthians_vs_flamengo');
                img.hidden = false;

                setTimeout(() => {
                    img.hidden = true;
                }, 8000);
            }
        });
    }

    buttonSave.addEventListener('click', function() {
        const newCopy = input.value.trim();
        if (newCopy) {
            copy.push(newCopy);
            input.value = '';
            saveCopy();
            showCopies();
        }
    });

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('copiado');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }

    function removeCopy(removedCopy) {
        copy = copy.filter(copy => copy !== removedCopy);
        saveCopy(copy);
        showCopies();
    }

    showSavedCopies();
});