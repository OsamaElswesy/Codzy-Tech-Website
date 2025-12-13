const coursesData = {
    kids: [
        {
            id: 'scratch-programming',
            title: 'Scratch Programming',
            title_ar: 'برمجة سكراتش',
            slug: 'scratch-programming',
            category: 'Kids & Teens (12-18)',
            duration: '16 Meetings',
            duration_ar: '١٦ حصة',
            description: 'A fun, game-based introduction to programming logic for creative minds.',
            description_ar: 'مقدمة ممتعة قائمة على الألعاب لتعلم منطق البرمجة للعقول المبدعة.',
            curriculum: [
                'Introduction to Logic & Creativity',
                'Game-based learning fundamentals',
                'Motion, Loops, Conditions, Variables',
                'Storytelling & Animation techniques',
                'Building interactive characters',
                'Final Project: Complete Game Development'
            ],
            curriculum_ar: [
                'مقدمة في المنطق والإبداع',
                'أساسيات التعلم القائم على الألعاب',
                'الحركة، التكرار، الشروط، المتغيرات',
                'تقنيات السرد القصصي والتحريك',
                'بناء شخصيات تفاعلية',
                'المشروع النهائي: تطوير لعبة كاملة'
            ],
            projects: ['Interactive Story', 'Maze Game', 'Final Complete Game'],
            projects_ar: ['قصة تفاعلية', 'لعبة المتاهة', 'لعبة كاملة نهائية'],
            outcomes: [
                'Master basic programming concepts',
                'Enhanced logical thinking',
                'Creative problem solving skills',
                'Course Certification'
            ],
            outcomes_ar: [
                'إتقان مفاهيم البرمجة الأساسية',
                'تعزيز التفكير المنطقي',
                'مهارات حل المشكلات الإبداعي',
                'شهادة إتمام الدورة'
            ],
            icon: 'puzzle',
            level: 'Beginner',
            level_ar: 'مبتدئ',
            price: 'Contact for Pricing'
        },
        {
            id: 'python-programming',
            title: 'Python Programming',
            title_ar: 'برمجة بايثون',
            slug: 'python-programming',
            category: 'Kids & Teens (12-18)',
            duration: '16 Meetings',
            duration_ar: '١٦ حصة',
            description: 'Master the language of the future with a logic-first approach.',
            description_ar: 'احترف لغة المستقبل مع نهج يركز على المنطق أولاً.',
            curriculum: [
                'Logic-first programming approach',
                'Variables, Loops, Conditions',
                'Functions, Lists, Dictionaries',
                'Object-Oriented Programming (OOP) Basics',
                'File Handling & Data Management',
                'HackerRank Problem Solving'
            ],
            curriculum_ar: [
                'نهج البرمجة القائم على المنطق',
                'المتغيرات، التكرار، الشروط',
                'الدوال، القوائم، القواميس',
                'أساسيات البرمجة كائنية التوجه (OOP)',
                'التعامل مع الملفات وإدارة البيانات',
                'حل المشكلات عبر HackerRank'
            ],
            projects: ['Tic-Tac-Toe', 'Calculator', 'Data Analyzer'],
            projects_ar: ['لعبة إكس أو', 'آلة حاسبة', 'محلل بيانات'],
            outcomes: [
                'Strong command of Python syntax',
                'Ability to solve algorithmic problems',
                'Preparation for advanced coding',
                'Two Exams + Certification'
            ],
            outcomes_ar: [
                'تمكن قوي من لغة بايثون',
                'القدرة على حل المشكلات الخوارزمية',
                'التحضير للبرمجة المتقدمة',
                'امتحانين + شهادة'
            ],
            icon: 'snake',
            level: 'Intermediate',
            level_ar: 'متوسط',
            price: 'Contact for Pricing'
        },
        {
            id: 'javascript-programming',
            title: 'JavaScript Programming',
            title_ar: 'برمجة جافا سكريبت',
            slug: 'javascript-programming',
            category: 'Kids & Teens (12-18)',
            duration: '16 Meetings',
            duration_ar: '١٦ حصة',
            description: 'Dive into the web\'s most popular language with a focus on problem solving.',
            description_ar: 'غص في لغة الويب الأكثر شهرة مع التركيز على حل المشكلات.',
            curriculum: [
                'Variables, Conditions, Loops',
                'Arrays, Objects, Functions',
                'Stack & Queue Logic',
                'Debugging & Error Handling',
                'HackerRank Challenges',
                'Game Logic Implementation'
            ],
            curriculum_ar: [
                'المتغيرات، الشروط، التكرار',
                'المصفوفات، الكائنات، الدوال',
                'منطق الطابور والمكدس (Stack & Queue)',
                'تتبع الأخطاء وإصلاحها',
                'تحديات HackerRank',
                'تطبيق منطق الألعاب'
            ],
            projects: ['X/O (Tic-Tac-Toe) Game', 'Interactive Todo List'],
            projects_ar: ['لعبة إكس أو', 'قائمة مهام تفاعلية'],
            outcomes: [
                'Deep understanding of JS fundamentals',
                'Browser interaction basics',
                'Critical debugging skills',
                'Certification'
            ],
            outcomes_ar: [
                'فهم عميق لأساسيات JS',
                'أساسيات التفاعل مع المتصفح',
                'مهارات تتبع الأخطاء النقدية',
                'شهادة'
            ],
            icon: 'code',
            level: 'Intermediate',
            level_ar: 'متوسط',
            price: 'Contact for Pricing'
        }
    ],
    pro: [
        {
            id: 'web-development',
            title: 'Web Development',
            title_ar: 'تطوير الويب',
            slug: 'web-development',
            category: 'Students & Professionals',
            duration: '20 Meetings',
            duration_ar: '٢٠ حصة',
            description: 'Build modern, responsive websites from scratch with HTML, CSS, and JS.',
            description_ar: 'ابنِ مواقع ويب حديثة ومتجاوبة من الصفر باستخدام HTML, CSS, JS.',
            curriculum: [
                'Frontend Fundamentals (HTML5/CSS3)',
                'Responsive Design principles',
                'Flexbox & Grid Layouts',
                'JavaScript DOM Manipulation',
                'APIs & Local Storage',
                'Animations & UI Effects'
            ],
            curriculum_ar: [
                'أساسيات الواجهة الأمامية (HTML5/CSS3)',
                'مبادئ التصميم المتجاوب',
                'تخطيطات Flexbox & Grid',
                'التعامل مع JavaScript DOM',
                'الواجهات البرمجية (APIs) والتخزين المحلي',
                'الرسوم المتحركة وتأثيرات الواجهة'
            ],
            projects: ['Personal Portfolio Website', 'Landing Page', 'Weather App'],
            projects_ar: ['موقع معرض أعمال شخصي', 'صفحة هبوط', 'تطبيق طقس'],
            outcomes: [
                'Ability to build any static website',
                'Responsive layout mastery',
                'Portfolio-ready projects',
                'Exam + Final Project'
            ],
            outcomes_ar: [
                'القدرة على بناء أي موقع ثابت',
                'إتقان التخطيط المتجاوب',
                'مشاريع جاهزة لمعرض الأعمال',
                'امتحان + مشروع نهائي'
            ],
            icon: 'globe',
            level: 'Beginner to Pro',
            level_ar: 'من مبتدئ لمحترف',
            price: 'Contact for Pricing'
        },
        {
            id: 'react-bootstrap',
            title: 'React & Bootstrap',
            title_ar: 'رياكت وبوتستراب',
            slug: 'react-bootstrap',
            category: 'Students & Professionals',
            duration: '20 Meetings',
            duration_ar: '٢٠ حصة',
            description: 'Level up to modern frontend development with React.js ecosystem.',
            description_ar: 'ارتقِ إلى تطوير الواجهات الأمامية الحديثة مع بيئة عمل React.js.',
            curriculum: [
                'React Fundamentals & Hooks',
                'JSX, Components, Props, State',
                'Routing (React Router) & Context API',
                'Redux Toolkit for State Management',
                'Authentication & API Integration',
                'Bootstrap UI Systems',
                'Deployment (Vercel/Netlify)'
            ],
            curriculum_ar: [
                'أساسيات React و Hooks',
                'JSX, المكونات, Props, State',
                'التوجيه (React Router) و Context API',
                'Redux Toolkit لإدارة الحالة',
                'المصادقة وربط الـ API',
                'أنظمة واجهة Bootstrap',
                'النشر (Vercel/Netlify)'
            ],
            projects: ['E-commerce Dashboard', 'Social Feed', 'Final React App'],
            projects_ar: ['لوحة تحكم متجر إلكتروني', 'تغذية اجتماعية', 'تطبيق React نهائي'],
            outcomes: [
                'Professional React Developer skills',
                'State Management mastery',
                'Full SPA development capability',
                'Final Exam + Certification'
            ],
            outcomes_ar: [
                'مهارات مطور React محترف',
                'إتقان إدارة الحالة',
                'القدرة على بناء تطبيقات صفحة واحدة (SPA)',
                'امتحان نهائي + شهادة'
            ],
            icon: 'atom',
            level: 'Advanced',
            level_ar: 'متقدم',
            price: 'Contact for Pricing'
        },
        {
            id: 'ai-machine-learning',
            title: 'AI & Machine Learning',
            title_ar: 'الذكاء الاصطناعي وتعلم الآلة',
            slug: 'ai-machine-learning',
            category: 'Students & Professionals',
            duration: '20 Meetings',
            duration_ar: '٢٠ حصة',
            description: 'Step into the future with AI, Deep Learning, and Neural Networks.',
            description_ar: 'ادخل المستقبل مع الذكاء الاصطناعي، التعلم العميق، والشبكات العصبية.',
            curriculum: [
                'AI, ML & Deep Learning Concepts',
                'Python for Machine Learning',
                'Data Analysis & Visualization',
                'Linear & Logistic Regression',
                'Classification & Clustering',
                'Neural Networks (TensorFlow/Keras)',
                'NLP & Computer Vision basics',
                'Model Deployment (FastAPI/Flask)'
            ],
            curriculum_ar: [
                'مفاهيم الذكاء الاصطناعي وتعلم الآلة',
                'بايثون لتعلم الآلة',
                'تحليل البيانات وتصورها',
                'الانحدار الخطي واللوجستي',
                'التصنيف والتجميع',
                'الشبكات العصبية (TensorFlow/Keras)',
                'أساسيات NLP والرؤية الحاسوبية',
                'نشر النماذج (FastAPI/Flask)'
            ],
            projects: ['Price Predictor', 'Image Classifier', 'Final AI Presentation'],
            projects_ar: ['متنبأ الأسعار', 'مصنف الصور', 'عقد تقديمي نهائي'],
            outcomes: [
                'Understanding of ML limitations and capabilities',
                'Ability to train and deploy models',
                'Data Science roadmap usage',
                'Final Project Presentation'
            ],
            outcomes_ar: [
                'فهم إمكانيات وحدود تعلم الآلة',
                'القدرة على تدريب ونشر النماذج',
                'استخدام خارطة طريق علوم البيانات',
                'عرض المشروع النهائي'
            ],
            icon: 'brain',
            level: 'Advanced',
            level_ar: 'متقدم',
            price: 'Contact for Pricing'
        }
    ]
};

// Export for usage if using modules, or just global variable for simple include
if (typeof module !== 'undefined') module.exports = coursesData;
