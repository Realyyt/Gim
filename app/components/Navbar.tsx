'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navItems } from '../constants';


interface NavItem {
  title: string;
  description?: string;
  image?: string;
  icon?: React.ComponentType<{ className?: string }>;
  link?: string;
}



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = (item: string) => {
    if (!isMobile) {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      setActiveDropdown(item);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      dropdownTimeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 150); // Small delay to prevent immediate closing
    }
  };



  return (
    <nav className="fixed w-full bg-stone-200 backdrop-blur-[2px] z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/Guhan industrial and manufacturing solution_logo.png"
                alt="Guhan Industries Logo"
                width={80}
                height={42}
                className="h-12 w-auto"
              />
              <div className="hidden sm:block ml-4 border-l border-[#e0fbfc]/20 pl-4">
                <div className="text-[#0a4165] text-xs leading-tight font-bold">
                  GUHAN INDUSTRIAL<br />AND MANUFACTURING<br />SOLUTIONS PVT LTD
                </div>
              </div>
            </Link>
          </div>
          {/* Navigation Menu */}
          <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:justify-center lg:flex-1 
            absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-stone-200 lg:bg-transparent`}>
            <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 p-4 lg:p-0">
              <button 
                onClick={() => window.location.href = '/'} 
                className="w-full lg:w-auto px-3 py-2 text-sm font-bold text-[#0a4165] 
                  hover:bg-[#0a4165]/10 rounded-md transition text-left lg:text-center shadow-sm"
                style={{ textShadow: '1px 1px 1px rgba(255,255,255,0.5)' }}
              >
                Waterjet
              </button>

              <button 
                onClick={() => window.location.href = '/specs'} 
                className="w-full lg:w-auto px-3 py-2 text-sm font-bold text-[#0a4165] 
                  hover:bg-[#0a4165]/10 rounded-md transition text-left lg:text-center shadow-sm"
                style={{ textShadow: '1px 1px 1px rgba(255,255,255,0.5)' }}
              >
                Technical Specification
              </button>

              <button 
                onClick={() => window.location.href = '/materials-specs'} 
                className="w-full lg:w-auto px-3 py-2 text-sm font-bold text-[#0a4165] 
                  hover:bg-[#0a4165]/10 rounded-md transition text-left lg:text-center shadow-sm"
                style={{ textShadow: '1px 1px 1px rgba(255,255,255,0.5)' }}
              >
                Calculator
              </button>

              <button 
                onClick={() => window.location.href = '/services'} 
                className="w-full lg:w-auto px-3 py-2 text-sm font-bold text-[#0a4165] 
                  hover:bg-[#0a4165]/10 rounded-md transition text-left lg:text-center shadow-sm"
                style={{ textShadow: '1px 1px 1px rgba(255,255,255,0.5)' }}
              >
                Services
              </button>

              {Object.keys(navItems).map((item) => (
                <div 
                  key={item}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => isMobile && setActiveDropdown(activeDropdown === item ? null : item)}
                > 
                  <button 
                    className="w-full lg:w-auto px-3 py-2 text-sm font-bold text-[#0a4165] 
                      hover:bg-[#0a4165]/10 rounded-md transition flex items-center justify-between lg:justify-start shadow-sm"
                    style={{ textShadow: '1px 1px 1px rgba(255,255,255,0.5)' }}
                  >
                    {item}
                    <ChevronDown size={16} className={`ml-1 transform transition-transform ${activeDropdown === item ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeDropdown === item && (
                    <div 
                      className="fixed left-0 right-0 w-full bg-stone-200 shadow-lg z-50"
                      onMouseEnter={() => handleMouseEnter(item)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          {navItems[item as keyof typeof navItems].map((subItem: NavItem, index) => (
                            <Link 
                              key={index}
                              href={subItem.link || '#'}
                              className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-white/50 transition-colors"
                              onClick={() => {
                                setIsOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              <div className="relative w-full h-48 mb-4">
                                <Image
                                  src={subItem.image || ''}
                                  alt={subItem.title}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                              <h3 className="text-[#0a4165] font-bold text-lg mb-2">{subItem.title}</h3>
                              {subItem.description && (
                                <p className="text-sm text-[#0a4165]/80">{subItem.description}</p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              <button 
                onClick={() => window.location.href = '/contact'} 
                className="w-full lg:w-auto px-3 py-2 text-sm font-bold text-[#0a4165] 
                  hover:bg-[#0a4165]/10 rounded-md transition text-left lg:text-center shadow-sm"
                style={{ textShadow: '1px 1px 1px rgba(255,255,255,0.5)' }}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#0a4165] hover:bg-[#0a4165]/10 rounded-md transition shadow-sm"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}