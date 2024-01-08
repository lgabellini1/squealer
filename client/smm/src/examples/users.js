export const USERS_TEST = [
	{
	  username: "smmPippo",
	  isSmm: true,
	  smm: null,
	  email: "smmPippo@gmail.com",
	  password: "imapippo",
	  vips: ["Amy", "Emily"],
	  remainingCharacters: [
		[1000, 100], // day: total characters, used characters
		[7000, 1000], // week: total characters, used characters
		[30000, 4000] // month: total characters, used characters
	  ]
	},
	{
	  username: "plutO",
	  isSmm: true,
	  smm: null,
	  email: "pluto0@gmail.com",
	  password: "mypass",
	  vips: ["John", "Ethan"],
	  remainingCharacters: [
		[1000, 150],
		[7000, 1500],
		[30000, 4500]
	  ]
	},
	{
	  username: "TopoPippo1",
	  isSmm: true,
	  smm: null,
	  email: "TopoPippone@yahoo.it",
	  password: "1234",
	  vips: ["John1"],
	  remainingCharacters: [
		[1000, 200],
		[7000, 2000],
		[30000, 5000]
	  ]
	},
	{
	  username: "Amy",
	  isSmm: false,
	  smm: "smmPippo",
	  email: "amy@gmail.com",
	  password: "amy123",
	  remainingCharacters: [
		[1000, 200],
		[7000, 1500],
		[30000, 5000]
	  ]
	},
	{
	  username: "Emily",
	  isSmm: false,
	  smm: "smmPippo",
	  email: "emily@gmail.com",
	  password: "emily123",
	  remainingCharacters: [
		[1000, 300],
		[7000, 2000],
		[30000, 6000]
	  ]
	},
	{
	  username: "John",
	  isSmm: false,
	  smm: "plutO",
	  email: "john@gmail.com",
	  password: "john123",
	  remainingCharacters: [
		[1000, 400],
		[7000, 3000],
		[30000, 7000]
	  ]
	},
	{
	  username: "John1",
	  isSmm: false,
	  smm: "TopoPippo1",
	  email: "john1@gmail.com",
	  password: "john1123",
	  remainingCharacters: [
		[1000, 400],
		[7000, 3000],
		[30000, 7000]
	  ]
	},
	{
	  username: "Ethan",
	  isSmm: false,
	  smm: "plutO",
	  email: "ethan@gmail.com",
	  password: "ethan123",
	  remainingCharacters: [
		[1000, 500],
		[7000, 3500],
		[30000, 7500]
	  ]
	},
  ];