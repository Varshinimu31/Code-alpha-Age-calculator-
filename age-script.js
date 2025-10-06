function calculateAge() {
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);
  const result = document.getElementById('result');

  if (!day || !month || !year) {
    result.innerText = '⚠️ Please enter a valid day, month, and year.';
    return;
  }

  if (month < 1 || month > 12) {
    result.innerText = '❌ Please enter a valid month (1 - 12).';
    return;
  }

  const currentYear = new Date().getFullYear();
  if (year < 1900 || year > currentYear) {
    result.innerText = '❌ Please enter a valid year.';
    return;
  }

  const daysInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > daysInMonth) {
    result.innerText = `❌ Please enter a valid day (1 - ${daysInMonth}) for month ${month}.`;
    return;
  }

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  if (birthDate > today) {
    result.innerText = '❌ Birth date cannot be in the future.';
    return;
  }

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  result.innerText = `🎉 You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;

}
