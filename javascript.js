function age() {
    const bday = new Date(document.getElementById('bdate').value);
    const today = new Date();
    let age = today.getFullYear() - bday.getFullYear();
    let m = today.getMonth() - bday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < bday.getDate())) {
        age--;
    }
    document.getElementById('calc').value = age;
}