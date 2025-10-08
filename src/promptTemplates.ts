// GPT prompt templates (for reuse)
// Maintain consistent prompt templates for generating quizzes in GIFT format.

export function getGiftPrompt(policyText: string) {
  return `
You are an expert cybersecurity instructional designer specializing in Security Awareness Training and LMS-based quiz development.

Based on the following company security policy, generate **100 engaging and interactive quiz questions**. The questions should help employees understand and remember security concepts. 

**Policy Content**
${policyText}

**Content Requirements**
- Topic Coverage:
  - General Security Topics: Phishing, password management, social engineering, and data protection
  - Advanced Security Topics: OWASP Top 10, SANS Top 25, secure coding practices, and recent security incidents
  - Company-Specific Topics: Use the attached company security policies, ensuring that ~20% of the questions are based on these policies
- Avoid using employee role-based scenarios; instead, use neutral and realistic examples
- Cover multiple difficulty levels: Easy, Medium, Hard

**Format and Output**
- Output all questions in Moodle-compatible GIFT format
- Include a diverse mix of question styles:
  - Multiple Choice
  - True/False
  - Scenario-Based
  - Spot the Mistake
  - Mini-Stories
  - Time-Based
  - Feedback-Driven
  - Ordering/Sequencing
  - Odd One Out
  - Fill-in-the-Blank
  - Hotspot/Image-Based (describe image context in text)
  - "What If…" Scenarios
  - Logic Puzzles
  - Comparison/Swipe
  - Ethical Dilemmas
  - Data Path/Flow Questions

**GIFT Structure for Each Question**
::Question ID 001::
[Category: Security Awareness]
[Difficulty: Easy/Medium/Hard]
[Complexity Score: X/10]
[Weightage: X points]

Question text...

{
~Option A
=Correct Option
~Option C
~Option D
}

[Explanation: Provide a short, clear explanation.]

Separate questions with a blank line for easy import.
`;
}
