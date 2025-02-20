'use client'

import { Rocket, Factory, Diamond, Ship, Wind, Beaker, CheckCircle } from 'lucide-react';
import ServiceHero from '../components/ServiceHero';
import ServiceSection from '../components/ServiceSection';


export default function IndustryApplicationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="Industry Applications"
        subtitle="Advanced Waterjet Solutions Across Multiple Sectors"
        backgroundImage="/image/0efcba41aeefc83e6f1ebc905352a2ba.jpg"
      />

     

      {/* New Detailed Industry Applications Section */}
      <ServiceSection
        title="Industry Applications"
        subtitle="In-depth solutions and impact across sectors"
      >
        <div className="space-y-16">
          {/* Aeronautical & Defense */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-6">
              <Rocket className="h-12 w-12 text-[#1890d5] flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#293241]">Aeronautical Industries and Defense</h3>
                <p className="text-[#293241]/70 mb-6">
                  The increasing demand for aerospace platforms across Indian Defense Services, civil aviation, and composite manufacturing creates vast opportunities. Our waterjet cutting technology offers cutting-edge solutions for processing carbon fiber composites, integral to aviation, helicopter systems, rocket motors, satellite systems, and turbine engines.
                </p>
                
                <div className="bg-[#ee6c4d]/10 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-[#293241] mb-3">Defense Applications Impact</h4>
                  <p className="text-[#293241]/70">
                    Landmines remain a critical global challenge. Since 2001, over 1,776 Indian soldiers were affected during laying and removal operations. Our waterjet technology integrated with mobile robots provides safe, reliable methods for landmine clearance, protecting both military personnel and civilians.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Aerospace Capabilities</h4>
                    <ul className="space-y-2">
                      {[
                        "Heat-sensitive material processing",
                        "Precision component manufacturing",
                        "Satellite systems integration",
                        "Composite material handling",
                        "Zero thermal damage cutting"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                          <span className="text-[#293241]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Defense Solutions</h4>
                    <ul className="space-y-2">
                      {[
                        "Safe explosive disarmament",
                        "Remote-controlled operations",
                        "Landmine clearance systems",
                        "Precision cutting for armor",
                        "Environmental safety compliance"
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

          {/* Maritime & Offshore */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-6">
              <Ship className="h-12 w-12 text-[#1890d5] flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#293241]">Maritime and Offshore Operations</h3>
                <p className="text-[#293241]/70 mb-6">
                  Ship decommissioning at ports like Alang traditionally relies on manual labor, involving significant safety risks and environmental concerns. Our waterjet technology revolutionizes this process with precision, safety, and environmental sustainability.
                </p>
                <div className="bg-[#ee6c4d]/10 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-[#293241] mb-3">Ship Descaling Innovation</h4>
                  <p className="text-[#293241]/70">
                    Our waterjet descaling technology allows for maintenance during transit, addressing biofouling and corrosion without additional downtime. This proactive approach optimizes fuel efficiency and extends hull life while maintaining operational schedules.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Ship Decommissioning</h4>
                    <ul className="space-y-2">
                      {[
                        "Enhanced worker safety protocols",
                        "Environmental compliance",
                        "Efficient material recovery",
                        "Reduced hazardous exposure",
                        "Improved recycling processes"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                          <span className="text-[#293241]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Offshore Decommissioning</h4>
                    <ul className="space-y-2">
                      {[
                        "Platform dismantling",
                        "Pipeline removal",
                        "Subsea structure cutting",
                        "Environmental protection",
                        "Waste minimization"
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

          {/* Manufacturing & Processing */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-6">
              <Factory className="h-12 w-12 text-[#1890d5] flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#293241]">Manufacturing and Processing Industries</h3>
                <p className="text-[#293241]/70 mb-6">
                  Our advanced waterjet technology revolutionizes manufacturing processes across multiple sectors, offering precision cutting solutions for diverse materials while maintaining material integrity and reducing waste.
                </p>

                <div className="bg-[#ee6c4d]/10 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-[#293241] mb-3">Industry 4.0 Integration</h4>
                  <p className="text-[#293241]/70">
                    Our systems seamlessly integrate with Industry 4.0 frameworks, offering advanced automation, real-time monitoring, and quality control systems for enhanced manufacturing efficiency and productivity.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Sheet Metal Processing</h4>
                    <ul className="space-y-2">
                      {[
                        "Cold cutting technology",
                        "No heat-affected zones",
                        "Complex shape capabilities",
                        "Multi-layer cutting",
                        "Minimal material waste"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                          <span className="text-[#293241]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Glass & Stone Processing</h4>
                    <ul className="space-y-2">
                      {[
                        "Precision edge quality",
                        "Intricate design capability",
                        "Reduced material stress",
                        "Versatile thickness handling",
                        "Automated processing"
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

          {/* Research & Development */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-6">
              <Beaker className="h-12 w-12 text-[#1890d5] flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#293241]">Research and Development</h3>
                <p className="text-[#293241]/70 mb-6">
                  Supporting innovation through advanced waterjet technology, enabling research institutions and industries to push the boundaries of material processing and manufacturing capabilities.
                </p>

                <div className="bg-[#ee6c4d]/10 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-[#293241] mb-3">Innovation Impact</h4>
                  <p className="text-[#293241]/70">
                    Our R&D partnerships have led to breakthrough developments in material processing, contributing to advancements in aerospace, medical devices, and sustainable manufacturing technologies.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Research Capabilities</h4>
                    <ul className="space-y-2">
                      {[
                        "Advanced material testing",
                        "Process optimization studies",
                        "Custom solution development",
                        "Performance analysis",
                        "Technical documentation"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                          <span className="text-[#293241]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Collaborative Benefits</h4>
                    <ul className="space-y-2">
                      {[
                        "Industry partnerships",
                        "Academic collaborations",
                        "Prototype development",
                        "Technology transfer",
                        "Innovation support"
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

          {/* Renewable Energy */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-6">
              <Wind className="h-12 w-12 text-[#1890d5] flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#293241]">Renewable Energy Solutions</h3>
                <p className="text-[#293241]/70 mb-6">
                  Supporting the transition to sustainable energy through specialized waterjet solutions for maintenance, manufacturing, and end-of-life processing of renewable energy components.
                </p>
                <div className="bg-[#ee6c4d]/10 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-[#293241] mb-3">Sustainability Impact</h4>
                  <p className="text-[#293241]/70">
                    Our waterjet technology enables efficient recycling and repurposing of renewable energy components, supporting the circular economy while minimizing environmental impact in the energy sector.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Wind Energy Solutions</h4>
                    <ul className="space-y-2">
                      {[
                        "Turbine blade maintenance",
                        "Component dismantling",
                        "Precision repair work",
                        "Surface treatment",
                        "Life extension services"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                          <span className="text-[#293241]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Solar Industry Support</h4>
                    <ul className="space-y-2">
                      {[
                        "Panel processing",
                        "Material recycling",
                        "Component separation",
                        "Clean technology",
                        "Sustainable practices"
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
          {/* Diamond & Precious Materials */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-6">
              <Diamond className="h-12 w-12 text-[#1890d5] flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#293241]">Diamond and Precious Materials</h3>
                <p className="text-[#293241]/70 mb-6">
                  India is the major polishing and cutting hub for diamonds, processing about 91.67% of diamonds sold worldwide. The diamond processing industry is concentrated in Gujarat, accounting for 85% of India&apos;s diamond processing activities.
                </p>
                
                <div className="bg-[#ee6c4d]/10 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-[#293241] mb-3">Industry Impact</h4>
                  <p className="text-[#293241]/70">
                    As the third largest consumer of polished diamonds, India&apos;s diamond processing industry plays a crucial role in the global market. Our waterjet technology bridges the gap between high-end machinery and manual labor, enabling efficient and precise processing.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Processing Capabilities</h4>
                    <ul className="space-y-2">
                      {[
                        "Precision diamond cutting",
                        "Minimal material wastage",
                        "Complex shape processing",
                        "Quality optimization",
                        "Advanced cutting patterns"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                          <span className="text-[#293241]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Industry Benefits</h4>
                    <ul className="space-y-2">
                      {[
                        "Enhanced productivity",
                        "Cost-effective processing",
                        "Innovative design capability",
                        "Global market compliance",
                        "Sustainable practices"
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

          {/* Glass & Stone Processing */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-6">
              <Factory className="h-12 w-12 text-[#1890d5] flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#293241]">Glass and Stone Processing</h3>
                <p className="text-[#293241]/70 mb-6">
                  Our waterjet technology revolutionizes traditional glass and stone processing methods, offering unmatched precision and versatility while reducing labor dependency and improving safety standards.
                </p>
                
                <div className="bg-[#ee6c4d]/10 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-[#293241] mb-3">Processing Innovation</h4>
                  <p className="text-[#293241]/70">
                    By replacing conventional cutting methods, our technology addresses the industry&apos;s needs for precision, efficiency, and material optimization while ensuring environmental sustainability.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Glass Processing</h4>
                    <ul className="space-y-2">
                      {[
                        "Precision edge finishing",
                        "Complex design capability",
                        "Minimal material stress",
                        "Multi-thickness handling",
                        "Automated processing"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                          <span className="text-[#293241]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Stone Processing</h4>
                    <ul className="space-y-2">
                      {[
                        "Precise stone cutting",
                        "Intricate pattern creation",
                        "Reduced material waste",
                        "Enhanced productivity",
                        "Cost-effective solutions"
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

          {/* Sheet Metal & Allied Industries */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-6">
              <Factory className="h-12 w-12 text-[#1890d5] flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#293241]">Sheet Metal and Allied Industries</h3>
                <p className="text-[#293241]/70 mb-6">
                  With growing demand across aerospace, automotive, heavy machinery, and construction sectors, our waterjet cutting solutions provide unmatched performance in sheet metal processing.
                </p>
                
                <div className="bg-[#ee6c4d]/10 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-[#293241] mb-3">Industry Impact</h4>
                  <p className="text-[#293241]/70">
                    Our technology enables sustainable manufacturing practices with no hazardous emissions while maintaining the highest standards of precision and efficiency in metal processing.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Processing Capabilities</h4>
                    <ul className="space-y-2">
                      {[
                        "Low force cutting",
                        "Thick material processing",
                        "No heat affected zones",
                        "Complex shape cutting",
                        "Multi-layer processing"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                          <span className="text-[#293241]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#293241]">Industry Benefits</h4>
                    <ul className="space-y-2">
                      {[
                        "Environmental compliance",
                        "Material integrity",
                        "Reduced waste",
                        "Increased efficiency",
                        "Cost optimization"
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

          {/* Continue with other industries... */}
        </div>
      </ServiceSection>
    </div>
  );
}