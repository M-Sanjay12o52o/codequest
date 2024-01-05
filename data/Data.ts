interface QuestionsType {
  problemId: number;
  name: string;
  question: string;
  tags: string[];
}

export const Questions: QuestionsType[] = [
  {
    problemId: 1,
    name: "Two Sum",
    question:
      "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    tags: ["Array", "Hash Table"],
  },
  {
    problemId: 2,
    name: "Reverse String",
    question: "Write a function that reverses a string.",
    tags: ["String"],
  },
  {
    problemId: 3,
    name: "Palindrome Checker",
    question:
      "Write a function that checks whether a given string is a palindrome.",
    tags: ["String", "Palindrome"],
  },
  {
    problemId: 4,
    name: "FizzBuzz",
    question:
      'Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".',
    tags: ["Algorithm"],
  },
  {
    problemId: 5,
    name: "FizzBuzz",
    question:
      'Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".',
    tags: ["Algorithm"],
  },
  {
    problemId: 6,
    name: "FizzBuzz",
    question:
      'Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".',
    tags: ["Algorithm"],
  },
  {
    problemId: 7,
    name: "FizzBuzz",
    question:
      'Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".',
    tags: ["Algorithm"],
  },
  {
    problemId: 8,
    name: "FizzBuzz",
    question:
      'Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".',
    tags: ["Algorithm"],
  },
];

type Submission = {
  user: string;
  username: string;
  problemNumber: string;
  timeSince: string;
  status: string;
};

export const submissionData: Submission[] = [
  {
    user: "John Doe",
    username: "johndoe123",
    problemNumber: "#5",
    timeSince: "10 minutes ago",
    status: "Solved",
  },
  {
    user: "Jane Smith",
    username: "jsmith22",
    problemNumber: "#10",
    timeSince: "1 hour ago",
    status: "Not solved",
  },
  {
    user: "Alice Johnson",
    username: "alicej",
    problemNumber: "#3",
    timeSince: "30 minutes ago",
    status: "Not solved",
  },
  {
    user: "Bob Smith",
    username: "bobsmith99",
    problemNumber: "#8",
    timeSince: "2 hours ago",
    status: "Solved",
  },
  {
    user: "Eva Brown",
    username: "evabrown22",
    problemNumber: "#12",
    timeSince: "1 day ago",
    status: "Not solved",
  },
  {
    user: "Michael Williams",
    username: "michaelw",
    problemNumber: "#6",
    timeSince: "5 minutes ago",
    status: "Solved",
  },
  {
    user: "Sophia Clark",
    username: "sophia.c",
    problemNumber: "#15",
    timeSince: "3 hours ago",
    status: "Not solved",
  },
];

export default submissionData;
