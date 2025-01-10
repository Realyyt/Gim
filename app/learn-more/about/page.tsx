'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin, FaUserCircle } from 'react-icons/fa';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Guhan G',
      role: 'Founder & Director',
      image: '/team/Guhan - Founder & Director.png',
      linkedin: 'https://www.linkedin.com/in/guhan-gunasekaran-25882657/'
    },
    {
      name: 'Vairamuthu R',
      role: 'Co-Founder & Director',
      image: '/team/R. Viramuthu Co founder & Director.png',
      linkedin: 'https://www.linkedin.com/in/vairamuthu-r-306922200/'
    },
    {
      name: 'Syed Jamaldeen K',
      role: 'Director',
      image: '',
      linkedin: '#'
    },
    {
      name: 'Srikanth R',
      role: 'CTO',
      image: '',
      linkedin: 'https://www.linkedin.com/in/srikanth-ramasubramanian-b3b0a7203/'
    }
  ];

  console.log('Team Members:', teamMembers.map(member => ({
    name: member.name,
    hasImage: Boolean(member.image)
  })));

  const advisors = [
    {
      name: 'Prof. TM Muruganandam',
      role: 'IIT MADRAS',
      image: '/team/Muruganandam.jpg',
      linkedin: 'https://www.linkedin.com/in/muruganandam-t-m-733253216/'
    },
    {
      name: 'Prof. Satyanarayana Sheshadri',
      role: 'IIT MADRAS',
      image: '/team/Satya seshadri.png',
      linkedin: 'https://www.linkedin.com/in/satyaseshadri/'
    },
    {
      name: 'Prof. N Ramesh Babu',
      role: 'IIT MADRAS',
      image: '/team/Ramesh babu.jpg',
      linkedin: 'https://www.linkedin.com/in/ramesh-babu-n-874b491b5/'
    },
    {
      name: 'Prof. Sathyan',
      role: 'IIT MADRAS',
      image: '/team/sathyan subbaiya.png',
      linkedin: 'https://www.linkedin.com/in/sathyansubbiah/'
    }
  ];

  const galleryConfig = {
    'Coimbatore Expo': 4,
    'IIT Madras': 5,
    'Madurai Expo': 4,
    'Infrastructure': 10
  };

  return (
    <main className="min-h-screen bg-stone-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-[#293241]"
        >
          About GIMS
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-[#293241] mb-6">Our Story</h2>
            <p className="text-gray-700">
               Guhan Industrial and Manufacturing Solutions Pvt. Ltd. (GIMS) is an advanced technology startup specializing in the design, development, and production of high-performance machine tools. With our core strength in machine building, our flagship Waterjet Series is a game-changing solution for high-precision, efficient cutting applications across multiple sectors. In addition to our proprietary machines, we offer a spectrum of engineering services, making GIMS an invaluable partner for industries ranging from manufacturing and research institutions to small and medium-sized enterprises (SMEs) and startups.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-[300px] rounded-lg overflow-hidden"
          >
            <div className="relative h-[300px]">
              <Image
                src="/gims1.png"
                alt="GIMS Facility"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-16 text-[#293241]"
        >
          Our Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg text-center h-auto"
            >
              <div className="relative h-80 w-64 mx-auto mb-4 flex items-center justify-center">
                {member.image && member.image !== '' ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain rounded-lg"
                  />
                ) : (
                  <FaUserCircle className="w-48 h-48 text-gray-400" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-[#293241]">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 hover:text-blue-800"
              >
                <FaLinkedin size={24} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Advisors Section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center my-16 text-[#293241]"
        >
          Faculty Advisors/Mentors
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisors.map((advisor, index) => (
            <motion.div
              key={advisor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg text-center h-auto"
            >
              <div className="relative h-80 w-64 mx-auto mb-4">
                <Image
                  src={advisor.image}
                  alt={advisor.name}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#293241]">{advisor.name}</h3>
              <p className="text-gray-600 mb-4">{advisor.role}</p>
              <a
                href={advisor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 hover:text-blue-800"
              >
                <FaLinkedin size={24} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Gallery Section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center my-16 text-[#293241]"
        >
          Gallery
        </motion.h2>

        {/* Gallery Categories */}
        <div className="space-y-12">
          {Object.entries(galleryConfig).map(([category, itemCount], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-[#293241] mb-6">{category}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(itemCount)].map((_, item) => {
                  const imagePath = category === 'Inauguration' 
                    ? `/gallery/inauguration/${item + 1}.jpg`
                    : `/gallery/${category.toLowerCase().replace(/\s+/g, '-')}/${item + 1}.jpg`;

                  return (
                    <motion.div
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
                    >
                      <Image
                        src={imagePath}
                        alt={`${category} ${item + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inauguration Section */}
        <section className="bg-white rounded-lg p-6 shadow-lg mt-12">
          <h3 className="text-2xl font-semibold text-[#293241] mb-6">Inauguration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src="/gallery/inauguration/im2.jpg"
                alt="Inauguration Image 1"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src="/gallery/inauguration/im1.jpg"
                alt="Inauguration Image 2"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src="/gallery/inauguration/im3.jpg"
                alt="Inauguration Image 3"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src="/gallery/inauguration/im4.jpg"
                alt="Inauguration Image 4"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src="/gallery/inauguration/im5.jpg"
                alt="Inauguration Image 5"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src="/gallery/inauguration/im6.jpg"
                alt="Inauguration Image 6"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
} 