function limitCheckboxSelection(checkbox) {
    const checkboxes = document.querySelectorAll('.enjoy input[type="checkbox"]');
    const checkedCheckboxes = Array.from(checkboxes).filter(cb => cb.checked);

    if (checkedCheckboxes.length > 4) {
        checkbox.checked = false;
    }
}