let employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
let command = [];

employers.forEach(item => {if(item.trim() !== '') command.push(item)})

for (let i = 0; i < command.length; i++) {
	command[i] = command[i].toLowerCase().trim();
	command[i] = command[i][0].toUpperCase() + command[i].slice(1);
}

let data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const calcCash = (own, ...arg) => {
	own = own || 0;
	let everyCash = arg[0];
	return own + everyCash.reduce((sum, current) => sum + current, 0)
}

const lesson = calcCash(null, data.cash);

const makeBusiness = (director, teacher, allModule, gang, course) => {
	teacher = teacher || 'Максим';
	let sumTech = data.react.concat(data.add, 'и другие');
	console.log(`Стартуем новый курс: ${course}. Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
Команда Академии: ${gang}.
Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!
Технологии которые мы изучим: ${sumTech.join(', ')}`);
}

makeBusiness.apply(null, ['Артем', null, lesson, command, nameCourse]);
