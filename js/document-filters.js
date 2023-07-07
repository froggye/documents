/* Фильтры */

/* выбор одного варианта */
document.querySelectorAll('.dropdown-single').forEach(function (dropdownWrapper) {
    const dropdownBtn = dropdownWrapper.querySelector('.dropdown--button');
    const dropdownList = dropdownWrapper.querySelector('.dropdown--list');
    const dropdownItems = dropdownWrapper.querySelectorAll('.dropdown--list-item');
    const dropdownInput = dropdownWrapper.querySelector('.dropdown--input-hidden');

    // открыть-закрыть выпадающее меню
    dropdownBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        dropdownList.classList.toggle('visible');
    });

    dropdownItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            // выделить нажатый вариант
            dropdownItems.forEach(function (el) {
                el.classList.remove('active');
            })
            e.target.classList.add('active');
            if (this.dataset.value === "Не выбрано") dropdownBtn.classList.remove('has-filters');
            else dropdownBtn.classList.add('has-filters');
            dropdownInput.value = this.dataset.value;

            // dropdownBtn.classList.remove('active');
            // dropdownList.classList.remove('visible');
        });
    });

});

/* чекбоксы */
document.querySelectorAll('.dropdown-checkbox').forEach(function (dropdownWrapper) {
    const dropdownBtn = dropdownWrapper.querySelector('.dropdown--button');
    const dropdownList = dropdownWrapper.querySelector('.dropdown--list');
    const dropdownItems = dropdownWrapper.querySelectorAll('.dropdown--list-item');
    const clearButton =  dropdownWrapper.querySelector('.dropdown--text-button');

    // открыть-закрыть выпадающее меню
    dropdownBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        dropdownList.classList.toggle('visible');
    });

    dropdownItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {

            // выделить нажатый вариант
            // e.target.parentNode.classList.toggle('active');
            if (e.target.checked) {
                e.target.closest('li').classList.add('active');
            }
            else {
                e.target.closest('li').classList.remove('active');
            }

            // выделить фильтр если есть выбранные варианты
            let selected = false;

            dropdownItems.forEach(function (el) {
                let checkbox = el.querySelector('input[type="checkbox"]');
                if (checkbox.checked) {
                    selected = true;
                }
            });

            if (selected){
                dropdownBtn.classList.add('has-filters');
            } else {
                dropdownBtn.classList.remove('has-filters');
            }

            // dropdownBtn.classList.remove('active');
            // dropdownList.classList.remove('visible');
        });
    });

    clearButton.addEventListener('click', function () {
        dropdownItems.forEach(function (el) {
            let checkbox = el.querySelector('input[type="checkbox"]');
            if (checkbox.checked) {
                el.classList.remove('active');
                checkbox.checked = false;
            }
            // console.log(label);
        });

        dropdownBtn.classList.remove('has-filters');
    });

});

/* интервал дат */
document.querySelectorAll('.dropdown-datepicker').forEach(function (dropdownWrapper) {
    const dropdownBtn = dropdownWrapper.querySelector('.dropdown--button');
    const dropdownList = dropdownWrapper.querySelector('.dropdown--list');
    const dropdownItems = dropdownWrapper.querySelectorAll('.dropdown--date');
    const clearButton = dropdownWrapper.querySelector('.dropdown--text-button');

    // открыть-закрыть выпадающее меню
    dropdownBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        dropdownList.classList.toggle('visible');
    });


    clearButton.addEventListener('click', function () {
        dropdownItems.forEach(function (el) {
            el.value = '';
        });

        dropdownBtn.classList.remove('has-filters');
    });

});

/* очистить фильтры */
const clearAll = document.querySelector('.dropdown--clear');
clearAll.addEventListener('click', function () {
    document.querySelectorAll('.dropdown-single').forEach(function (dropdownWrapper) {
        const dropdownBtn = dropdownWrapper.querySelector('.dropdown--button');
        const dropdownItems = dropdownWrapper.querySelectorAll('.dropdown--list-item');
        const dropdownInput = dropdownWrapper.querySelector('.dropdown--input-hidden');

        dropdownBtn.classList.remove('has-filters');
        dropdownInput.value = '';

        dropdownItems.forEach(function (listItem) {
            listItem.classList.remove('active');
        });
        dropdownItems[0].classList.add('active');
    });

    document.querySelectorAll('.dropdown-checkbox').forEach(function (dropdownWrapper) {
        const dropdownBtn = dropdownWrapper.querySelector('.dropdown--button');
        const dropdownItems = dropdownWrapper.querySelectorAll('.dropdown--list-item');

        dropdownBtn.classList.remove('has-filters');

        dropdownItems.forEach(function (listItem) {
            listItem.classList.remove('active');
            let checkbox = listItem.querySelector('input[type="checkbox"]');
            checkbox.checked = false;
        });

    });

    document.querySelectorAll('.dropdown-datepicker').forEach(function (dropdownWrapper) {
        const dropdownBtn = dropdownWrapper.querySelector('.dropdown--button');
        const dropdownItems = dropdownWrapper.querySelectorAll('.dropdown--date');

        dropdownBtn.classList.remove('has-filters');
        dropdownItems.forEach(function (el) {
            el.value = '';
        });

    });
});