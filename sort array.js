console.log('22-array-filter-sort-map');

const studentsArray = [
  { name: 'lakshman', year: 2019, ranking: 4 },
  { name: 'siva', year: 2019, ranking: 5 },
  { name: 'hemanth', year: 2018, ranking: 4 },
  { name: 'naveen', year: 2019, ranking: 7 },
  { name: 'charan', year: 2017, ranking: 3 },
]

console.log('Higest Rank Holders:',
  studentsArray
    .filter(student => student.year === 2019 && student.ranking >= 5)
    .sort((n1, n2) => n1.ranking - n2.ranking)
    .reverse()
    .map(student => student.name)
);