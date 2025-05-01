import { Clock, Code2, Calendar, Users } from "lucide-react";

export const INTERVIEW_CATEGORY = [
  { id: "upcoming", title: "Предстоящие интервью", variant: "outline" },
  { id: "completed", title: "Завершённые", variant: "secondary" },
  { id: "succeeded", title: "Успешные", variant: "default" },
  { id: "failed", title: "Неудачные", variant: "destructive" },
] as const;

export const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00",
  "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00",
  "16:30", "17:00",
];

export const QUICK_ACTIONS = [
  {
    id: "new-call",
    icon: Code2,
    title: "Новый звонок",
    description: "Начать мгновенный видеозвонок",
    color: "primary",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    id: "join-interview",
    icon: Users,
    title: "Присоединиться",
    description: "Войти по ссылке приглашения",
    color: "purple-500",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    id: "schedule",
    icon: Calendar,
    title: "Запланировать",
    description: "Назначить интервью на будущее",
    color: "blue-500",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    id: "recordings",
    icon: Clock,
    title: "Записи",
    description: "Просмотр прошлых интервью",
    color: "orange-500",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
  },
];

export const CODING_QUESTIONS: CodeQuestion[] = [
  {
    id: "two-sum",
    title: "Сумма двух чисел",
    description:
      "Дан массив целых чисел `nums` и целое число `target`. Верните индексы двух чисел, сумма которых равна `target`.\n\nПредполагается, что существует ровно одно решение, и один и тот же элемент нельзя использовать дважды.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Так как nums[0] + nums[1] == 9, возвращаем [0, 1]",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Напишите ваше решение здесь
  
}`,
      python: `def two_sum(nums, target):
    # Напишите ваше решение здесь
    pass`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Напишите ваше решение здесь
        
    }
}`,
    },
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Существует только одно правильное решение.",
    ],
  },
  {
    id: "reverse-string",
    title: "Разворот строки",
    description:
      "Напишите функцию, которая разворачивает строку. Входная строка передаётся как массив символов `s`.\n\nНеобходимо изменить массив на месте, используя O(1) дополнительной памяти.",
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    starterCode: {
      javascript: `function reverseString(s) {
  // Напишите ваше решение здесь
  
}`,
      python: `def reverse_string(s):
    # Напишите ваше решение здесь
    pass`,
      java: `class Solution {
    public void reverseString(char[] s) {
        // Напишите ваше решение здесь
        
    }
}`,
    },
  },
  {
    id: "palindrome-number",
    title: "Число-палиндром",
    description:
      "Дано целое число `x`. Верните `true`, если `x` является палиндромом, и `false` в противном случае.\n\nПалиндром — это число, которое читается одинаково слева направо и справа налево.",
    examples: [
      {
        input: "x = 121",
        output: "true",
        explanation: "121 читается одинаково в обе стороны.",
      },
      {
        input: "x = -121",
        output: "false",
        explanation: "Слева направо: -121, справа налево: 121-. Это не палиндром.",
      },
    ],
    starterCode: {
      javascript: `function isPalindrome(x) {
  // Напишите ваше решение здесь
  
}`,
      python: `def is_palindrome(x):
    # Напишите ваше решение здесь
    pass`,
      java: `class Solution {
    public boolean isPalindrome(int x) {
        // Напишите ваше решение здесь
        
    }
}`,
    },
  },
];

export const LANGUAGES = [
  { id: "javascript", name: "JavaScript", icon: "/javascript.png" },
  { id: "python", name: "Python", icon: "/python.png" },
  { id: "java", name: "Java", icon: "/java.png" },
] as const;

export interface CodeQuestion {
  id: string;
  title: string;
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: {
    javascript: string;
    python: string;
    java: string;
  };
  constraints?: string[];
}

export type QuickActionType = (typeof QUICK_ACTIONS)[number];
