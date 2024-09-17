const s = 'Hello World!'
for (const c of s) {
  console.log(c)
}

// f()
var str = 'ssd'
const f = () => {
  console.log(str)
}

// users
// | id | name | email | age | registrationTime |

// orders
// | id | price | userId

// Task: Calculate total price for all user orders
// Expected: | id | name | total |
// Solution: SELECT u.id, u.name, SUM(o.price) AS total FROM orders AS o LEFT JOIN users AS u ON o.userId = u.id GROUP BY o.userId HAVING total > 1000;

// posts

// | id | payload | time | userId |

// GET /users/4321/posts?timeBefore=2020-10-13T09:10:32.306Z&limit=10&skip=10

// Response:
// {
//   total: Number
//   posts: [
//     {
//       postId: Number,
//       userId: Number,
//       userName: String,
//       payload: String,
//       time: DateISOString 
//     }
//   ]
// }
