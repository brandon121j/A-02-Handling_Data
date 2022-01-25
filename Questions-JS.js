const userData = [
	{
		id: '111',
		name: 'Peter',
		favorites: {
			food: ['burgers', 'pizza'],
			activites: ['basketball', 'baseball'],
		},
	},
	{
		id: '222',
		name: 'John',
		favorites: {
			food: ['burgers', 'tacos'],
			activites: ['football', 'golf'],
		},
	},
	{
		id: '333',
		name: 'Mary',
		favorites: {
			food: ['pizza', 'tacos', 'fried chicken'],
			activites: ['volleyball', 'softball'],
		},
	},
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const answer = userData.map((item) => {
	return { id: item.id, favoriteFoods: item.favorites.food.length };
});
console.log('Question 5: ', answer);

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const final = userData.reduce((accumulator, user) => {
	const iterator = user.favorites.food;

	iterator.forEach((item) => {
		switch (item) {
			case 'pizza':
				accumulator.push(user.name);
				break;
		}
	});
	return accumulator;
}, []);

console.log('Question 6: ', final);

// 7. Show us an example of a switch statement being used

const last = userData.reduce((accumulator, people) => {
  const favFood = people.favorites.food;

  favFood.forEach((person) => {
    switch(person) {
      case 'burgers':
        accumulator.push(`${people.name} likes to eat burgers`);
        break;
      case 'pizza':
        accumulator.push(`${people.name} likes to eat pizza`);
        break;
      case 'tacos':
        accumulator.push(`${people.name} likes to eat tacos`);
        break;
    }
  })

  return accumulator;
}, [])

console.log('Question 7: ', last);