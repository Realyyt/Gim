'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    title: "India's First Abrasive Waterjet Unveiled by IIT-M",
    excerpt: "An IIT Madras backed start-up has designed India's first abrasive waterjet machine that can cut combustible materials without generating heat. This game-changing technology, costing just one-third of market alternatives, is set to revolutionize semiconductor, aviation, and defence industries...",
    date: "2024-08-11",
    image: "/image/article1.jpg",
    externalUrl: "https://www.newindianexpress.com/cities/chennai/2024/Aug/11/indias-first-abrasive-waterjet-unveiled-by-iit-m-director",
    slug: "indias-first-abrasive-waterjet-unveiled-by-iit-m"
  }
  // Add more articles as needed
];

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-stone-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-[#293241]"
        >
          Latest Articles
        </motion.h1>

        <div className="flex justify-center">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-2xl"
            >
              <div className="relative h-96">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              <div className="p-6">
                <time className="text-sm text-gray-500">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                
                <h2 className="text-xl font-bold text-[#293241] mt-2 mb-3">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                
                {article.externalUrl ? (
                  <a 
                    href={article.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#ee6c4d] hover:text-[#ee6c4d]/80 font-semibold"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                ) : (
                  <Link 
                    href={`/learn-more/articles/${article.slug}`}
                    className="inline-flex items-center text-[#ee6c4d] hover:text-[#ee6c4d]/80 font-semibold"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
} 