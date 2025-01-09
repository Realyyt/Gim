'use client'

import { Cog, Cpu, Lightbulb, Zap, Microscope, Bot } from 'lucide-react';
import ServiceHero from './components/ServiceHero';
import ServiceSection from './components/ServiceSection';
import ServiceCard from './components/ServiceCard';



export default function CoreCompetenciesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="Our Services"
        subtitle="Comprehensive Engineering Solutions Beyond Machine Building"
        backgroundImage="/image/ship.jpg"
      />

      <ServiceSection
        title="Engineering Excellence"
        subtitle="Our expertise extends beyond machine building, encompassing comprehensive engineering solutions"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Cog,
              title: "Machine Building ",
              description: "Our machines deliver unparalleled precision for diverse cutting applications across aerospace, automotive, and manufacturing sectors.",
              features: [
                "Precision cutting systems",
                "Custom machine solutions",
                "Industry-specific adaptations",
                "Advanced control systems",
                "Performance optimization"
              ]
            },
            {
              icon: Cpu,
              title: "Industry Automation & Control",
              description: "Advanced PLC and SCADA programming for enhanced automation and control across manufacturing and processing industries.",
              features: [
                "PLC system integration",
                "SCADA implementation",
                "Process automation",
                "Safety systems",
                "Real-time monitoring"
              ]
            },
            {
              icon: Lightbulb,
              title: "Design & Development",
              description: "Comprehensive design services fortified with simulation modeling and analysis for optimized solutions.",
              features: [
                "Simulation-based design",
                "Rapid prototyping",
                "Performance optimization",
                "Cost reduction analysis",
                "Time-to-market improvement"
              ]
            },
            {
              icon: Microscope,
              title: "Electromagnetic & Plasma Research",
              description: "Development of custom plasma systems and vacuum-based technologies for advanced applications.",
              features: [
                "CVD systems",
                "Material synthesis",
                "Semiconductor manufacturing",
                "Plasma technology",
                "Vacuum systems"
              ]
            },
            { 
icon: Bot,
              title: "Embedded Engineering",
              description: "Custom sensor solutions and system integration for specific industrial applications.",
              features: [
                "Sensor development",
                "System integration",
                "Healthcare applications",
                "Manufacturing solutions",
                "Energy monitoring"
              ]
            },
            {
              icon: Zap,
              title: "High-Value Applications",
              description: "Creating substantial value across multiple high-demand industries through innovative solutions.",
              features: [
                "Precision cutting",
                "Clean processing",
                "Automation solutions",
                "R&D collaboration",
                "Prototype development"
              ]
            }
          ].map((competency, index) => (
            <ServiceCard
              key={index}
              icon={competency.icon}
              title={competency.title}
              description={competency.description}
              features={competency.features}
              delay={index * 0.1}
            />
          ))}
        </div>
      </ServiceSection>
      

      
      {/*<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-4 text-[#293241] text-center">Core Competencies</h2>
        <h3 className="text-2xl font-bold mb-4 text-[#293241] text-center">Unlocking Your Project&apos;s Full Potential</h3>
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-6">
              <Wrench className="h-12 w-12 text-[#1890d5] flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-[#293241]">Machine Building Excellence</h3>
                <p className="text-[#293241]/70 mb-6">
                  Our core strength lies in machine building, with our flagship Waterjet Series representing cutting-edge solutions for high-precision applications.
                </p>

                <div className="bg-[#ee6c4d]/10 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-[#293241] mb-3">Technology Leadership</h4>
                  <p className="text-[#293241]/70">
                    Our expertise extends beyond machine building, encompassing industry automation, programming for PLC and SCADA systems, simulation-based design, and embedded engineering.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Technical Expertise</h4>
                    <ul className="space-y-2">
                      {[
                        "Advanced machine design",
                        "Precision engineering",
                        "Custom solutions",
                        "Quality assurance",
                        "Innovation focus"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                          <span className="text-[#293241]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Industry Applications</h4>
                    <ul className="space-y-2">
                      {[
                        "Manufacturing excellence",
                        "Research institutions",
                        "Defense sector",
                        "Aerospace industry",
                        "Material processing"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                          <span className="text-[#293241]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-6">
              <Cpu className="h-12 w-12 text-[#1890d5] flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-[#293241]">Automation & Control Systems</h3>
                <p className="text-[#293241]/70 mb-6">
                  Through advanced programming for PLC and SCADA systems, we empower industries to achieve heightened automation and control.
                </p>

                <div className="bg-[#ee6c4d]/10 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-[#293241] mb-3">System Capabilities</h4>
                  <p className="text-[#293241]/70">
                    Our automation and control systems offer a range of capabilities, including PLC programming, SCADA integration, process automation, real-time monitoring, and system optimization.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">System Capabilities</h4>
                    <ul className="space-y-2">
                      {[
                        "PLC programming",
                        "SCADA integration",
                        "Process automation",
                        "Real-time monitoring",
                        "System optimization"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                          <span className="text-[#293241]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceSection
        title="Success Stories"
        subtitle="Real-world applications of our core competencies"
        isDark
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CaseStudyCard
            title="Aerospace Innovation"
            description="Advanced waterjet cutting system for composite aircraft components"
            image="/image/284ccf16900287ebcc60d2c3beced007.jpg"
            stats={[
              { label: "Precision", value: "±0.1mm" },
              { label: "Efficiency", value: "+40%" }
            ]}
          />
          <CaseStudyCard
            title="Automation Excellence"
            description="Complete factory automation system with real-time monitoring"
            image="/image/blast.jpeg"
            stats={[
              { label: "Productivity", value: "+65%" },
              { label: "ROI Time", value: "18 mo" }
            ]}
            delay={0.2}
          />
          <CaseStudyCard
            title="Research Partnership"
            description="Collaborative R&D project for next-gen manufacturing"
            image="/image/ship.jpg"
            stats={[
              { label: "Patents", value: "3" },
              { label: "Publications", value: "7" }
            ]}
            delay={0.4}
          />
        </div>
      </ServiceSection>*/}

      <ServiceSection
        title="Featured Projects"
        subtitle="Discover our recent success stories"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-2 h-64">
              <video 
                className="w-full h-64 object-cover"
                autoPlay 
                muted 
                loop
                playsInline
                controls
                preload="auto"
                onError={(e) => console.error('Video error:', e.currentTarget.error)}
              >
                <source src="/product/k.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img 
                src="/product/PID TUINING KIT.jpg" 
                alt="Project 1" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#293241] mb-2">PID tuning kit</h3>
              <div className="space-y-1 text-[#293241]/70">
                <p><span className="font-semibold">Client:</span> NIT warangal</p>
                <p></p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-2 h-64">
              <video 
                className="w-full h-64 object-cover"
                autoPlay 
                muted 
                loop
                playsInline
                controls
                preload="auto"
                onError={(e) => console.error('Video error:', e.currentTarget.error)}
              >
                <source src="/product/l.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img 
                src="/product/Optoporator.jpg" 
                alt="Project 2" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#293241] mb-2">Optoporator V2     </h3>
              <div className="space-y-1 text-[#293241]/70">
                <p><span className="font-semibold">Client:</span>  Dr.Santratuhin   </p>
                <p><span className="font-semibold">Company:</span> Universal Fabrication IIT Madras</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src="/product/Kiosk.jpg" 
              alt="Project 3" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#293241] mb-2"> Kiosk
              </h3>
              <div className="space-y-1 text-[#293241]/70">
                <p><span className="font-semibold">Client:</span> Mr.Anmol </p>
                <p><span className="font-semibold">Company:</span> Bridge healthcare an IIT based startup</p>
              </div>
            </div>
          </div>
        </div>
      </ServiceSection>
    </div>
  );
} 