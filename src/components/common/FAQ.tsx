import React from 'react';

/**
 * FAQ component displaying frequently asked questions.
 * 
 * @returns {JSX.Element} The rendered FAQ component.
 */
const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'What is this tool?',
      answer: 'This tool helps you manage your configurations and DCNs.'
    },
    {
      question: 'How do I upload a configuration?',
      answer: 'Go to the ConfigUpload page and select a file to upload.'
    },
    // Add more FAQs as needed
  ];

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
