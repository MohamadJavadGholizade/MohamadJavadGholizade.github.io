import { Glasses, Users, Laptop, Smartphone, Gamepad } from 'lucide-react';
import XrShooterPic from '../assets/XRShooterMultiplyer.png';

export const projects = {
  VR: [
    {
      id: "vr-training-simulator",
      title: "XR Shooter Multiplayer",
      category: "XR",
      //mainImage: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80",
      mainImage: XrShooterPic,
      videoUrl: "https://youtube.com/embed/-7qG4LFW_PU",
      previewImages: [
        "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&q=80"
      ],
      description: "Interactive multiplayer VR experience for virtual combat training and collaboration in real-world environments",
      longDescription: `Virtual Workspace Combat (VWC) is an innovative XR (Extended Reality) project designed to merge physical and virtual environments for a unique multiplayer VR experience. The project allows users to combine their real-world workspace with a dynamic VR battlefield, enabling them to engage in online combat with a partner in real time—all while staying connected to their physical surroundings.

VWC offers a cutting-edge experience that blends interactive 3D environments, real-time collaboration, and immersive gameplay. As the project is still in development, its features are evolving to provide a more refined and interactive experience.

The project features:
- Seamless integration between physical and virtual environments
- Multiplayer online battles with real-time interactions
- Immersive VR combat experience with customizable controls
- Realistic environmental interactions within XR
- Ongoing development with future updates to improve gameplay mechanics and user experience`,
      tags: ["Unity", "XR", "Multiplayer", "C#"],
      features: [
        "Immersive XR Integration",
        "Real-time Multiplayer Combat",
        "Virtual-Physical Interaction",
        "Dynamic Environmental Interactions",
        "Customizable VR Experience",
        "Ongoing Development & Updates"
      ],
      technologies: [
        "Unity Engine",
        "Auto Hand",
        "Netcode For GameObjects",
        "XR Interaction Toolkit",
        "Custom Physics Engine",
      ],
      gallery: [
        "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1622979135240-caa6648190b6?auto=format&fit=crop&q=80"
      ]
    },  {
      id: "vr-architectural-tour",
      title: "VR Architectural Tour",
      category: "VR",
      mainImage: "https://images.unsplash.com/photo-1627893205568-305a3c5e50fa?auto=format&fit=crop&q=80",
      previewImages: [
        "https://images.unsplash.com/photo-1613544731857-9b6ea376b5c4?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1603201441446-bd176bfbb62c?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1624289767531-78d85ba1e98e?auto=format&fit=crop&q=80"
      ],
      description: "Immersive VR experience for architectural visualization",
      longDescription: `A VR application that allows architects and clients to walk through buildings before they are built. This experience enhances design feedback and decision-making.

Features:
- High-quality 3D models
- Interactive elements
- Day & night cycle simulation
- Multi-user collaboration
- Realistic lighting and textures`,
      tags: ["Unity", "VR", "Architectural Visualization", "C#"],
      features: [
        "Immersive Walkthroughs",
        "Photorealistic Rendering",
        "Real-time Collaboration",
        "Environment Customization",
        "Interactive Objects"
      ],
      technologies: [
        "Unity Engine",
        "Oculus SDK",
        "Unreal Engine",
        "Ray Tracing",
        "HDRP"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1627893205568-305a3c5e50fa?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1613544731857-9b6ea376b5c4?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1603201441446-bd176bfbb62c?auto=format&fit=crop&q=80"
      ]
    },
    {
      id: "vr-healthcare-training",
      title: "VR Healthcare Training",
      category: "VR",
      mainImage: "https://images.unsplash.com/photo-1555431189-0fabf4e2d042?auto=format&fit=crop&q=80",
      previewImages: [
        "https://images.unsplash.com/photo-1597300631761-29c27850c4b5?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1581092143524-1e1276a1c30c?auto=format&fit=crop&q=80"
      ],
      description: "VR-based training for healthcare professionals",
      longDescription: `This VR application allows medical students and professionals to practice procedures in a simulated environment, reducing risks and improving skills.

Features:
- Accurate anatomical models
- Interactive procedures
- Emergency scenario training
- Multi-user collaboration
- Performance analytics`,
      tags: ["Unity", "VR", "Healthcare", "C#"],
      features: [
        "High-detail Anatomy Models",
        "Realistic Simulations",
        "Guided Training Modules",
        "Emergency Response Scenarios",
        "Multi-user Support"
      ],
      technologies: [
        "Unity Engine",
        "Oculus SDK",
        "Leap Motion",
        "VR Hands Interaction"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1555431189-0fabf4e2d042?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1597300631761-29c27850c4b5?auto=format&fit=crop&q=80"
      ]
    },
    {
      id: "vr-medical-simulator",
      title: "VR Medical Training",
      category: "VR",
      mainImage: "https://images.unsplash.com/photo-1581091012184-7ba3148dc9b1?auto=format&fit=crop&q=80",
      previewImages: [
        "https://images.unsplash.com/photo-1603398938378-9dfb9fd0f272?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
      ],
      description: "VR-based medical training simulator for doctors and students.",
      longDescription: "A fully immersive VR experience designed for medical professionals to practice surgeries and emergency response training in a risk-free environment.",
      tags: ["Unity", "VR", "Healthcare", "Simulation"],
      features: [
        "Realistic Medical Scenarios",
        "Haptic Feedback Integration",
        "Collaborative Multi-user Training",
        "AI-based Patient Responses"
      ],
      technologies: [
        "Unity Engine",
        "Oculus SDK",
        "Haptic Gloves",
        "AI Simulation"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1581091012184-7ba3148dc9b1?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1603398938378-9dfb9fd0f272?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
      ]
    }
  ],
  Multiplayer: [
    {
      id: "multiplayer-battle-arena",
      title: "Multiplayer Battle Arena",
      category: "Multiplayer",
      mainImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
      previewImages: [
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80"
      ],
      description: "Real-time multiplayer game with matchmaking system",
      longDescription: `A high-octane multiplayer battle arena game that supports up to 100 players simultaneously. Features advanced matchmaking, real-time combat, and sophisticated networking architecture.

Key aspects include:
- Advanced matchmaking system
- Real-time combat mechanics
- Player progression system
- Competitive ranking
- Custom game modes
- Tournament support`,
      tags: ["Unity", "Photon", "Multiplayer", "C#"],
      features: [
        "Real-time Combat",
        "Advanced Matchmaking",
        "Player Rankings",
        "Custom Game Modes",
        "Tournament System",
        "Social Features"
      ],
      technologies: [
        "Unity Engine",
        "Photon Network",
        "PlayFab",
        "Mirror Networking",
        "AWS GameLift"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80"
      ]
    }
  ],
  AR: [
    {
      id: "ar-educational-app",
      title: "AR Educational App",
      category: "AR",
      mainImage: "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?auto=format&fit=crop&q=80",
      previewImages: [
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80"
      ],
      description: "Interactive AR learning experience for children",
      longDescription: `An innovative augmented reality educational application designed to make learning engaging and interactive for children. The app brings textbooks to life through AR technology.

Educational features:
- Interactive 3D models
- Animated learning content
- Quiz and assessment system
- Progress tracking
- Parent dashboard
- Offline content support`,
      tags: ["Unity", "AR", "Vuforia", "C#"],
      features: [
        "3D Model Visualization",
        "Interactive Learning",
        "Progress Tracking",
        "Offline Support",
        "Parent Dashboard",
        "Custom Content Creation"
      ],
      technologies: [
        "Unity Engine",
        "Vuforia",
        "ARCore",
        "ARKit",
        "Firebase"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1503437313881-503a91226402?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80"
      ]
    }
  ],
  Mobile: [
    {
      id: "hypercasual-mobile-game",
      title: "Hypercasual Mobile Game",
      category: "Mobile",
      mainImage: "https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&q=80",
      previewImages: [
        "https://images.unsplash.com/photo-1533236897111-3e94666b2edf?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80"
      ],
      description: "Addictive mobile game with monetization",
      longDescription: `A highly engaging hypercasual mobile game designed for quick play sessions and maximum retention. Features innovative gameplay mechanics and sophisticated monetization strategies.

Game features:
- One-touch controls
- Progressive difficulty
- Daily challenges
- Achievement system
- Social sharing
- Leaderboards`,
      tags: ["Unity", "Mobile", "Ads", "C#"],
      features: [
        "Simple Controls",
        "Progressive Difficulty",
        "Daily Challenges",
        "Social Features",
        "Achievements",
        "Global Leaderboards"
      ],
      technologies: [
        "Unity Engine",
        "AdMob",
        "Firebase Analytics",
        "Unity Ads",
        "GameAnalytics"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1533236897111-3e94666b2edf?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80"
      ]
    }
  ],
  Enterprise: [
    {
      id: "enterprise-simulation",
      title: "Enterprise Training Simulation",
      category: "Enterprise",
      mainImage: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80",
      previewImages: [
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
      ],
      description: "Enterprise-grade simulation for corporate training",
      longDescription: `A comprehensive enterprise simulation platform designed for corporate training and skill development. This solution provides realistic scenarios for employee training in a safe, virtual environment.

Platform features:
- Custom scenario creation
- Performance analytics
- Multi-user training
- Progress tracking
- Administrative dashboard
- Certification system`,
      tags: ["Unity", "Enterprise", "Simulation", "C#"],
      features: [
        "Custom Scenarios",
        "Analytics Dashboard",
        "Multi-user Support",
        "Progress Tracking",
        "Certification System",
        "Admin Controls"
      ],
      technologies: [
        "Unity Engine",
        "Azure Cloud",
        "ML.NET",
        "Power BI",
        "Active Directory"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
      ]
    },
  ]
};

export const categoryIcons = {
  VR: Glasses,
  Multiplayer: Users,
  AR: Laptop,
  Mobile: Smartphone,
  Enterprise: Gamepad
};