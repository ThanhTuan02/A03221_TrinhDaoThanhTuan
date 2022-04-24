let weight = parseInt(prompt('cannang'));
let height = parseInt(prompt('chieucao'));
let BMI = weight / (height^2);
if (BMI < 18.5) {
    document.write('Underweight');
} else if ( BMI < 25) {
    document.write('Nomarl');
} else if (BMI < 30) {
    document.write('Overweight');
} else {
    document.write('Obese');
}