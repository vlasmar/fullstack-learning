const person = {
    name: 'Maria Anna Vlasopoulou',
    job: 'Web Developer',
    email: 'vlasopoulou.m@gmail.com',
    phone: '+49 1633 654895'
}

const avatar = document.getElementById('avatar');
const name = document.getElementById('name');
const subtitle = document.getElementById('subtitle');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

const getInitials = (fullname) => {
    const nameArray = fullname.split(' ');
    const initialsArray = [];
    for (const name of nameArray) {
        initialsArray.push(name[0]);
    }
    return initialsArray.join('');
}

avatar.textContent = getInitials(person.name);
name.textContent = person.name;
subtitle.textContent = person.job;
email.textContent = person.email;
phone.textContent = person.phone;