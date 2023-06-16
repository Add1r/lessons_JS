// Задача
/*
З клавіатури вводиться вік людини. Вивести на екран ким він є
(дитиною у садочку, школярем, студентом, працівником, пенсіонером).
*/
const earlyChildAge = 2;
const earlySchoolboyAge = 7;
const earlyStudentAge = 18;
const earlyWorkerAge = 24;
const earlyPensionerAge = 65;
const ageLimit = 125;
let result;
// Перший крок отримуємо від людини.
let userAge = parseInt(prompt(`Вкажіть скільки вам років`, 18));
// Крок другий порівняти судячи з віку ким є людина
if (userAge >= earlyChildAge && userAge < earlySchoolboyAge)
  result = `<p>Ви є дитиною у садочку</p>`;
else if (userAge >= earlySchoolboyAge && userAge < earlyStudentAge)
  result = `<p>Ви є школярем</p>`;
else if (userAge >= earlyStudentAge && userAge < earlyWorkerAge)
  result = `<p>Ви є студентом</p>`;
else if (userAge >= earlyWorkerAge && userAge < earlyPensionerAge)
  result = `<p>Ви є працівником</p>`;
else if (userAge >= earlyPensionerAge && userAge < ageLimit)
  result = `<p>Ви є пенсіонером</p>`;
else
  result = `<p>Або ж ви недоросли ще навіть до садочку, або ж попадете у книгу рекордів Гіннеса як людина котра живе дуже довго ;)</p>`;
// Вивід результату
document.getElementById("b_res").innerHTML = result;
