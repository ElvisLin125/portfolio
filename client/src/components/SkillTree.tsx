import { useState } from 'react';
import { motion } from 'framer-motion';

interface SkillNode {
  id: string;
  name: string;
  category: string;
  level: number;
  x: number;
  y: number;
  dependencies?: string[];
}

const SKILLS: SkillNode[] = [
  // Root skills
  { id: 'frontend', name: 'Frontend', category: 'core', level: 0, x: 50, y: 15 },
  { id: 'backend', name: 'Backend', category: 'core', level: 0, x: 50, y: 70 },
  
  // Frontend branch
  { id: 'react', name: 'React', category: 'frontend', level: 1, x: 20, y: 35, dependencies: ['frontend'] },
  { id: 'ts', name: 'TypeScript', category: 'frontend', level: 1, x: 50, y: 35, dependencies: ['frontend'] },
  { id: 'styling', name: 'CSS', category: 'frontend', level: 1, x: 80, y: 35, dependencies: ['frontend'] },
  
  // Backend branch
  { id: 'java', name: 'Java', category: 'backend', level: 1, x: 20, y: 85, dependencies: ['backend'] },
  { id: 'db', name: 'PostgreSQL', category: 'backend', level: 1, x: 80, y: 85, dependencies: ['backend'] },
  
  // Advanced
  { id: 'fullstack', name: 'Full Stack', category: 'advanced', level: 2, x: 50, y: 52, dependencies: ['react', 'java'] },
];

const getDriftAnimation = (id: string) => {
  const seed = id.charCodeAt(0);
  return {
    x: [0, Math.sin(seed) * 8, 0],
    y: [0, Math.cos(seed) * 8, 0],
  };
};

export function SkillTree() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getSkillConnections = (skillId: string) => {
    return SKILLS
      .filter(s => s.dependencies?.includes(skillId))
      .map(s => ({
        fromX: SKILLS.find(skill => skill.id === skillId)?.x || 0,
        fromY: SKILLS.find(skill => skill.id === skillId)?.y || 0,
        toX: s.x,
        toY: s.y,
      }));
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {/* Skill connections */}
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.3)" />
          </linearGradient>
        </defs>

        {SKILLS.map((skill) =>
          getSkillConnections(skill.id).map((conn, idx) => (
            <line
              key={`line-${skill.id}-${idx}`}
              x1={conn.fromX}
              y1={conn.fromY}
              x2={conn.toX}
              y2={conn.toY}
              stroke="url(#connectionGradient)"
              strokeWidth="0.3"
              opacity={hoveredSkill === skill.id ? 0.6 : 0.2}
              style={{ transition: 'opacity 0.3s' }}
            />
          ))
        )}
      </svg>

      <div className="relative w-full h-full">
        {SKILLS.map((skill) => {
          const isHovered = hoveredSkill === skill.id;
          const driftAnimation = getDriftAnimation(skill.id);

          return (
            <motion.div
              key={skill.id}
              className="absolute"
              style={{
                left: `${skill.x}%`,
                top: `${skill.y}%`,
                // transform: 'translate(-50%, -50%)',
              }}
              animate={driftAnimation}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <motion.div
                animate={isHovered ? { x: [0, 4, -4, 0], y: [0, -4, 4, 0] } : {}}
                transition={{
                  duration: 0.6,
                  repeat: isHovered ? Infinity : 0,
                  ease: 'easeInOut',
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-3 py-2 md:px-4 md:py-2 rounded-full font-sans text-xs md:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                    isHovered
                      ? 'bg-white text-black shadow-lg shadow-white/50'
                      : 'bg-white/20 text-white/70 hover:bg-white/30'
                  }`}
                >
                  {skill.name}

                  {/* Glow effect */}
                  {isHovered && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white/20 -z-10"
                      animate={{ scale: [1, 1.3] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      style={{ pointerEvents: 'none' }}
                    />
                  )}
                </motion.button>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
