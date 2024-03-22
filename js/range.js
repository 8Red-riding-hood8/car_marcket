const minRangeInput = document.querySelector('.min');
const maxRangeInput = document.querySelector('.max');
const minNumberInput = document.querySelector('input[name="min"]');
const maxNumberInput = document.querySelector('input[name="max"]');
minRangeInput.addEventListener('input', function() {
    minNumberInput.value = minRangeInput.value;
});
maxRangeInput.addEventListener('input', function() {
    maxNumberInput.value = maxRangeInput.value;
});
minNumberInput.addEventListener('input', function() {
    minRangeInput.value = minNumberInput.value;
});
maxNumberInput.addEventListener('input', function() {
    maxRangeInput.value = maxNumberInput.value;
});