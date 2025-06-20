
import { Calendar, Award, ExternalLink, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ExperienceSection = () => {
  const handleViewCredential = (certName: string) => {
    // This will be implemented once you upload the PDFs
    console.log(`View credential for: ${certName}`);
    alert(`View credential functionality will be implemented once PDFs are uploaded for: ${certName}`);
  };

  const certifications = [
    {
      organization: "CS50 x Harvard",
      period: "Dec 2024 – May 2025",
      courses: [
        "CS50's Introduction to Computer Science",
        "Python Programming", 
        "Databases with SQL",
        "Web Programming with Python and JavaScript"
      ],
      type: "Educational Program",
      color: "from-red-600 to-red-700",
      profileImage: "https://camo.githubusercontent.com/2485cdb92cc1563cb21703bd1dc5474a727cd17b4d8243b27b9906468ec4e945/68747470733a2f2f676f6f2e676c2f6d4a774e5543"
    },
    {
      organization: "TCS",
      program: "Young Professional Batch-2",
      period: "Feb 2025 – Apr 2025",
      courses: [
        "Communication Skills",
        "Financial Literacy",
        "Business Etiquette", 
        "Digital Literacy Skills"
      ],
      type: "Professional Development",
      color: "from-blue-600 to-blue-700"
    },
    {
      organization: "ServiceNow",
      program: "Micro-Certifications",
      period: "Feb 2025 – Apr 2025",
      courses: [
        "Flow Designer – Feb 2025",
        "UI Builder – Apr 2025"
      ],
      type: "Technical Certification",
      color: "from-green-600 to-green-700",
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9azji1P3eHGE-4K5f_uogVJk8glXpar_cg&s"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience & Certifications
          </h2>
          
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                          {cert.profileImage ? (
                            <img 
                              src={cert.profileImage} 
                              alt={`${cert.organization} logo`}
                              className="w-full h-full object-contain p-1 filter grayscale"
                            />
                          ) : (
                            <Award className="h-6 w-6 text-gray-600" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">{cert.organization}</h3>
                          {cert.program && <p className="text-gray-600 font-medium">{cert.program}</p>}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">{cert.period}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cert.color} text-white`}>
                          {cert.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    {cert.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{course}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      onClick={() => handleViewCredential(cert.organization)}
                      variant="outline"
                      className="flex items-center space-x-2"
                    >
                      <Eye className="h-4 w-4" />
                      <span>View Credential</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Continuous Learning Journey</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                I believe in continuous learning and staying updated with the latest technologies and industry trends. 
                These certifications represent my commitment to professional growth and technical excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
