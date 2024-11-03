import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: "Who can participate?",
      answer: "The competition is open to all school and college students. Teams must consist of 2 members from the same institution."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation is completely free of charge."
    },
    {
      question: "How do we register?",
      answer: "Register through the online form before November 14, 2024. Multiple teams from the same institution can participate."
    },
    {
      question: "What is the competition format?",
      answer: "The competition has district-level preliminary rounds followed by state finals for qualifying teams."
    }
  ];

  return (
    <div id="faq" className="py-24 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
          <p className="text-gray-400 mt-4">Find answers to common questions</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-2 text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}