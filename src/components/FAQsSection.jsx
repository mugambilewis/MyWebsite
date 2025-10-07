import React, { useState } from 'react';
import { FadeInWhenVisible } from './FadeInWhenVisible';

export function FAQsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'I offer a comprehensive range of services including mechanical engineering design (CAD/CAM), web development (React, TypeScript, Node.js), UI/UX design, brand strategy, and technical consulting. Whether you need engineering solutions, a modern web application, or complete brand identity, I can help bring your vision to life.',
      icon: '🔧',
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on scope and complexity. Small projects like landing pages or simple CAD models typically take 1-2 weeks. Medium-sized projects such as full websites or complex assemblies take 3-6 weeks. Large-scale projects involving multiple disciplines can take 2-3 months. I always provide detailed timelines during initial consultation.',
      icon: '⏱️',
    },
    {
      question: 'Do you work with clients remotely?',
      answer: 'Absolutely! I work with clients globally through video calls, project management tools, and collaborative platforms like Figma and GitHub. I maintain clear communication throughout the project lifecycle and ensure seamless collaboration regardless of location.',
      icon: '🌍',
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'I have experience across multiple industries including manufacturing, automation, tech startups, e-commerce, and creative agencies. My diverse skill set allows me to adapt to various sectors, from designing mechanical components to building scalable web applications and crafting compelling brand identities.',
      icon: '🎯',
    },
    {
      question: 'Can you handle both design and development?',
      answer: 'Yes! One of my unique strengths is bridging the gap between design and development. I can take a project from initial concept and Figma prototypes all the way through to fully functional, deployed applications. This ensures design consistency and reduces communication overhead.',
      icon: '⚡',
    },
    {
      question: 'What tools and technologies do you use?',
      answer: 'For engineering: SolidWorks, AutoCAD, Ansys, and Proteus. For web development: React, TypeScript, Tailwind CSS, and Node.js. For design: Figma, Adobe Creative Suite, and various prototyping tools. I continuously update my toolkit to leverage the latest industry-standard technologies.',
      icon: '🛠️',
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, I offer flexible support and maintenance packages for web applications and technical systems. This includes bug fixes, feature updates, performance optimization, and technical support. We can discuss ongoing arrangements that fit your needs and budget.',
      icon: '🤝',
    },
    {
      question: 'How do you handle project pricing?',
      answer: 'Pricing depends on project scope, complexity, and timeline. I offer both fixed-price packages for well-defined projects and hourly rates for ongoing work or consulting. After an initial consultation, I provide a detailed proposal with transparent pricing and deliverables. My goal is to deliver exceptional value for your investment.',
      icon: '💰',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 px-8 md:px-16" style={{backgroundColor: 'hsl(var(--muted)/0.3)'}}>
      <div className="max-w-[1440px] mx-auto">
        <FadeInWhenVisible delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Got questions? Here are answers to some of the most common inquiries about my services, process, and expertise.
            </p>
          </div>
        </FadeInWhenVisible>
				
				
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FadeInWhenVisible key={index} delay={0.05 * index}>
              <div className="group bg-background/60 backdrop-blur-sm rounded-xl border border-border/40 overflow-hidden transition-all duration-300 hover:shadow-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left transition-all duration-300 hover:bg-accent/20"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                      {faq.icon}
                    </div>
                    <h3 className="font-space font-semibold text-lg pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`text-2xl transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                  style={{
                    overflow: 'hidden',
                  }}
                >
                  <div className="px-6 pb-6 pl-20">
                    <div className="relative">
                      <div
                        className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"
                        style={{
                          animation: openIndex === index ? 'slideDown 0.3s ease-out' : 'none',
                        }}
                      />
                      <p className="text-foreground/70 leading-relaxed pl-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
				
        <FadeInWhenVisible delay={0.5}>
          <div className="text-center mt-12">
            <p className="text-foreground/60 mb-4">Still have questions?</p>
            <a href="#contact">
              <button className="px-8 py-3 rounded-xl border-2 border-border/40 bg-background/60 backdrop-blur-sm hover:bg-accent/80 transition-all duration-300 font-space font-semibold hover:scale-105">
                Get in Touch
              </button>
            </a>
          </div>
        </FadeInWhenVisible>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            height: 0;
          }
          to {
            height: 100%;
          }
        }
      `}</style>
    </section>
  );
}