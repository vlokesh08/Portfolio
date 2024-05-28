import React from 'react';
import desc from "./ProDescription";

const AllProjectsPreview = () => {
  const [hoveredProject, setHoveredProject] = React.useState(null);

  const handleMouseEnter = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div>
      <div className="container flex justify-center">
        <h1 className="font-normal text-gray-300 text-3xl md:text-6xl lg:text-7xl mb-10 md:mb-15 lg:mb-25">
          All Projects <br></br>
        </h1>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 space-x-2 gap-5">
        {desc.map((project) => (
          <a
            key={project.id}
            href={`/project${project.route}`}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative', display: 'block' }}
          >
            <div style={{ position: 'relative' }}>
            
              <img src={project.imageUrl} alt={project.title} className="h-[350px]"></img>
              {hoveredProject === project.id && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#000',
                    fontSize: '1.5rem',
                  }}
                >
                  {project.title}
                </div>
              )}
            </div>
          </a>
        ))}
        
      </div>
    </div>
  );
};

export default AllProjectsPreview;