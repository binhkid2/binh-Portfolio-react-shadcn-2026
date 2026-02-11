import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      greeting: "Hello 👋, I'm Duc Binh",
      introduction:
        "I'm an Information Systems student who loves programming, especially Web Development. I'm committed to improving my skills and knowledge to keep up with the latest technology.",
      resume: "Resume",
      education: "Education",
      educationCards: [
        {
          title: "VietNam education",
          institution: "",
          duration: "~2018",
          description:
            "Growing up in Vietnam, I completed my educational journey by graduating from high school. A few years later, I began studying abroad in Japan.",
        },
        {
          title: "Japanese Language",
          institution: "Tokyo Japanese Academy",
          duration: "2018 - 2020",
          description:
            "When I first came to Japan, I lived in 足立区 and studied Japanese in Tokyo Japanese Academy (品川区). Upon graduating, I received the N3 certification here.",
        },
        {
          title: "IT Web Development",
          institution: "中央情報専門学校",
          duration: "2020 - 2022",
          description:
            "I studied web development at 中央情報専門学校, a well-regarded Senmon school in Saitama. For my final project, I created a web-based to-do list and note application. I also learned how to build responsive, scalable, and secure web apps.",
        },
        {
          title: "Freelancer",
          institution: "VietNam",
          duration: "2022 - 2024",
          description:
            "I returned to Vietnam and started working as a freelancer, which allows me to pursue my passion for traveling.",
        },
        {
          title: "International College",
          institution: "ディライトグローバル専門学校",
          duration: "2025 - Present",
          description:
            "Currently studying at Delight Global College. Gaining international perspective and skills to enhance my professional career. ",
        },
      ],
      projectIntro:
        "I've worked on several projects, primarily focused on frontend development. However, I also have a strong passion for backend development and enjoy working on both sides of the stack.",
      projectsTitle: "Projects",
      projectCards: [
        {
          title: "Rubito",
          description:
            "Rubito is an AI-powered platform designed specifically for foreigners living in Japan. It design to helps user learn Japanese easier,get access to local news, entertainment, and cultural tips,Connect with other expats, build community, and share experiences.(As of February 2026, this app is still in development.)",
          image:
            "https://res.cloudinary.com/yenvietsoft/image/upload/v1770821022/Portfolio/Screenshot_2026-02-11_at_23.42.47_zy5wpm.png",
          isFeatured: true,
          url: "https://rubito.jp",
          github:null
        },
        {
          title: "Lac Chinh",
          description:`LacChinh.com is a Vietnam-based web development and software company.The website has landing page,AI feature demo page. It support Internationalization (i18n) for 3 language :japanese,vietnamese,english.`,
          image:
            "https://res.cloudinary.com/yenvietsoft/image/upload/v1770821414/Portfolio/Screenshot_2026-02-11_at_23.50.04_olz5xk.png",
          isFeatured: true,
          url: "https://lacchinh.com",
           github:null
        },
        {
          title: "Portfolio",
          description: "All Free AI tools (created by SvelteKit only)",
          image:
            "https://res.cloudinary.com/yenvietsoft/image/upload/v1770821355/Portfolio/Screenshot_2026-02-11_at_23.48.55_f0ipoz.png",
          isFeatured: true,
          url: "https://portfolio-react.rubito.jp",
           github:null
        },
        {
          title: "Full Stack Blog Nextjs & Nestjs",
          description:
            "A full‑stack app with Next.js frontend and a Nest js backend ,postgress as database.It supports:Email/password login,Magic‑link login,Google OAuth login JWT‑based session with refresh tokens Role‑based access control (ADMIN, MANAGER, MEMBER),blog posts CRUD with strict permissions",
          image:
            "https://res.cloudinary.com/yenvietsoft/image/upload/v1770821622/Portfolio/Screenshot_2026-02-11_at_23.53.29_n96m1f.png",
          isFeatured: false,
          url: "https://fullstack-nestjs-nextjs.rubito.jp",
            github:null
        },
        {
          title: "Full Stack Blog Fastify+Htmx",
          description:
            "Similar to project Fullstack Nextjs & NestJs but using simplier tech stack. Using Fastify and htmx,using nosql mongo db as database.It also deploy using dokploy in vps xserver.ne.jp",
          image:
            "https://res.cloudinary.com/yenvietsoft/image/upload/v1770821760/Portfolio/Screenshot_2026-02-11_at_23.55.50_eltmaf.png",
          isFeatured: false,
          url: "https://fullstack-fastify-htmx.rubito.jp",
            github:null
        }, 
      ],
      contact: {
        pageTitle: "Contact Me",
        sendMessage: "Send Me a Message",
        contactInfo: "Contact Information",
        connectWithMe: "Connect With Me",
        formInstructions:
          "I'd love to hear from you! Fill out the form below to get in touch.",
        labels: {
          name: "Name",
          email: "Email",
          message: "Message",
          submit: "Send Message",
        },
        placeholders: {
          name: "Your Name",
          email: "your@email.com",
          message: "Your message here...",
        },
        toast: {
          success: "Your message has been sent successfully.",
          error: "There was an error sending your message. Please try again.",
        },
      },
      nav: {
        about: "About",
        projects: "Projects",
        contact: "Contact me",
        myAccount: "My Account",
        profile: "Profile",
        logout: "Log Out",
      },
      footer: {
        name: "Duc Binh",
        role: "FullStack Engineer",
        quickLinks: "Quick Links",
        home: "Home", // Added translation key
        projects: "Projects", // Added translation key
        about: "About", // Added translation key
        contact: "Contact", // Added translation key
        stayUpdated: "Stay Updated",
        subscribeMessage:
          "Subscribe to my newsletter for the latest updates and articles.",
        emailPlaceholder: "Enter your email",
        subscribe: "Subscribe",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        cookiePolicy: "Cookie Policy",
      },
      about: {
        title: "About Me",
        whoIAm: "Who I Am",
        description:
          "Hello! I'm Duc Binh, a passionate Full Stack IT Web Developer. I specialize in creating comprehensive web solutions, from intuitive front-end interfaces to robust back-end systems.",
        journey:
          "My journey in web development began with a fascination for both the visual and technical aspects of websites. This curiosity evolved into a deep passion for crafting full-stack solutions that not only look great but also perform efficiently.",
        freelanceExperience:
          "As a freelancer, I've had the opportunity to work on diverse projects, each presenting unique challenges that have helped me grow as a developer. I'm constantly learning and adapting to new technologies to ensure I can provide the best solutions for my clients.",
        skills: "Skills",
        quickInfo: "Quick Info",
        name: "Duc Binh",
        location: "Vietnam",
        role: "Full Stack IT Web Developer",
        experience: "Freelance Web Development",
        interests: "AI, Web Development, Open Source",
        connect: "Connect with me:",
        workExperience: "Work Experience",
        freelance: "Freelance Web Developer",
        freelancePeriod: "2020 - Present",
        freelanceTasks: [
          "Developed custom web applications for various clients",
          "Created responsive and user-friendly interfaces",
          "Implemented back-end solutions using Node.js and databases",
          "Collaborated with clients to understand and meet their specific needs",
        ],
        resume: "Resume",
      },
    },
  },
  jp: {
    translation: {
      greeting: "こんにちは 👋,ライ・ドゥック・ビン と申します",
      introduction:
        "情報システムの学生で、特にWeb開発に熱心です。最新の技術に追いつくためにスキルと知識を向上させることに専念しています。",
      resume: "履歴書",
      education: "教育",
      educationCards: [
        {
          title: "ベトナム教育",
          institution: "",
          duration: "~2018",
          description:
            "ベトナムで成長し、高校を卒業しました。その数年後、日本で留学を始めました。",
        },
        {
          title: "日本語",
          institution: "東京日本アカデミー",
          duration: "2018 - 2020",
          description:
            "日本に初めて来たとき、足立区に住み、品川区の東京日本アカデミーで日本語を学びました。卒業後、N3の資格を取得しました。",
        },
        {
          title: "ITウェブ開発",
          institution: "中央情報専門学校",
          duration: "2020 - 2022",
          description:
            "埼玉にある評価の高い専門学校である中央情報専門学校でウェブ開発を学びました。最終プロジェクトでは、ウェブベースのTo-Doリストとメモアプリを作成しました。また、レスポンシブでスケーラブルでセキュアなウェブアプリの構築方法を学びました。",
        },
        {
          title: "フリーランサー",
          institution: "ベトナム",
          duration: "2022年 - 2025年",
          description:
            "ベトナムに帰国後、フリーランスとして働き始めました。これにより、旅行への情熱を追求することができました。",
        },
        {
          title: "インターナショナルカレッジ",
          institution: "ディライトグローバル専門学校",
          duration: "2025年 - 現在",
          description:
            "現在、ディライトグローバル専門学校で学んでいます。国際的な視野とスキルを身につけ、将来のキャリアに活かしています。",
        },
      ],
      projectIntro:
        "いくつかのプロジェクトに取り組んできましたが、主にフロントエンド開発に重点を置いています。しかし、バックエンド開発にも強い情熱があり、スタックの両側で作業するのが好きです。",
      projectsTitle: "プロジェクト",
      projectCards: [
  {
    "title": "Rubito",
    "description": "Rubitoは、日本に住む外国人向けに特化したAI搭載プラットフォームです。ユーザーがより簡単に日本語を学べるようサポートし、ローカルニュースやエンターテインメント、文化的な情報へアクセスできます。さらに、他の在日外国人とつながり、コミュニティを築き、体験を共有することも可能です。（2026年2月現在、本アプリは開発中です。）",
    "image": "https://res.cloudinary.com/yenvietsoft/image/upload/v1770821022/Portfolio/Screenshot_2026-02-11_at_23.42.47_zy5wpm.png",
    "isFeatured": true,
    "url": "https://rubito.jp",
    "github": null
  },
  {
    "title": "Lac Chinh",
    "description": "LacChinh.comは、ベトナムを拠点とするWeb開発・ソフトウェア企業です。本サイトにはランディングページおよびAI機能のデモページが含まれています。また、日本語・ベトナム語・英語の3言語に対応した国際化（i18n）をサポートしています。",
    "image": "https://res.cloudinary.com/yenvietsoft/image/upload/v1770821414/Portfolio/Screenshot_2026-02-11_at_23.50.04_olz5xk.png",
    "isFeatured": true,
    "url": "https://lacchinh.com",
    "github": null
  },
  {
    "title": "Portfolio",
    "description": "SvelteKitのみで構築された、すべて無料のAIツール集です。",
    "image": "https://res.cloudinary.com/yenvietsoft/image/upload/v1770821355/Portfolio/Screenshot_2026-02-11_at_23.48.55_f0ipoz.png",
    "isFeatured": true,
    "url": "https://portfolio-react.rubito.jp",
    "github": null
  },
  {
    "title": "Full Stack Blog Nextjs & Nestjs",
    "description": "Next.jsフロントエンドとNestJSバックエンドで構築されたフルスタックアプリケーションです。データベースにはPostgreSQLを使用しています。メール／パスワードログイン、マジックリンクログイン、Google OAuthログイン、JWTベースのセッション管理（リフレッシュトークン対応）、ロールベースアクセス制御（ADMIN / MANAGER / MEMBER）、厳格な権限制御付きブログ投稿CRUD機能をサポートしています。",
    "image": "https://res.cloudinary.com/yenvietsoft/image/upload/v1770821622/Portfolio/Screenshot_2026-02-11_at_23.53.29_n96m1f.png",
    "isFeatured": false,
    "url": "https://fullstack-nestjs-nextjs.rubito.jp",
    "github": null
  },
  {
    "title": "Full Stack Blog Fastify+Htmx",
    "description": "Fullstack Nextjs & NestJsプロジェクトと同様の機能を持ちながら、よりシンプルな技術スタックを採用しています。Fastifyとhtmxを使用し、データベースにはNoSQLのMongoDBを採用しています。また、xserver.ne.jpのVPS環境にDokployを使用してデプロイしています。",
    "image": "https://res.cloudinary.com/yenvietsoft/image/upload/v1770821760/Portfolio/Screenshot_2026-02-11_at_23.55.50_eltmaf.png",
    "isFeatured": false,
    "url": "https://fullstack-fastify-htmx.rubito.jp",
    "github": null
  }
],
      contact: {
        pageTitle: "お問い合わせ",
        sendMessage: "メッセージを送信",
        contactInfo: "連絡先情報",
        connectWithMe: "私とつながる",
        formInstructions:
          "お気軽にご連絡ください！以下のフォームに記入してください。",
        labels: {
          name: "お名前",
          email: "メールアドレス",
          message: "メッセージ",
          submit: "送信",
        },
        placeholders: {
          name: "お名前",
          email: "example@email.com",
          message: "メッセージを入力してください...",
        },
        toast: {
          success: "メッセージが正常に送信されました。",
          error:
            "メッセージの送信中にエラーが発生しました。再試行してください。",
        },
      },
      nav: {
        about: "約",
        projects: "プロジェクト",
        contact: "お問い合わせ",
        myAccount: "マイアカウント",
        profile: "プロフィール",
        logout: "ログアウト",
      },
      footer: {
        name: "ドゥック・ビン",
        role: "フルスタックエンジニア",
        quickLinks: "クイックリンク",
        home: "ホーム", // Added translation key
        projects: "プロジェクト", // Added translation key
        about: "約", // Added translation key
        contact: "連絡先", // Added translation key
        stayUpdated: "最新情報を受け取る",
        subscribeMessage:
          "最新の更新情報や記事を受け取るために、ニュースレターに登録してください。",
        emailPlaceholder: "メールアドレスを入力してください",
        subscribe: "登録する",
        privacyPolicy: "プライバシーポリシー",
        termsOfService: "利用規約",
        cookiePolicy: "クッキーポリシー",
      },
      about: {
        title: "私について",
        whoIAm: "私が誰か",
        description:
          "こんにちは！私はドゥック・ビン、情熱的なフルスタックITウェブ開発者です。私は直感的なフロントエンドインターフェースから堅牢なバックエンドシステムまで、包括的なウェブソリューションの作成を専門としています。",
        journey:
          "ウェブ開発の旅は、ウェブサイトの視覚的および技術的側面の両方に魅了されたことから始まりました。この好奇心は、見た目が良いだけでなく、効率的に動作するフルスタックソリューションを作成することへの深い情熱に進化しました。",
        freelanceExperience:
          "フリーランスとして、私は多様なプロジェクトに取り組む機会を得ました。それぞれが独自の課題を提示し、私が開発者として成長するのに役立ちました。私は常に学び、新しい技術に適応し、クライアントに最良のソリューションを提供できるよう努めています。",
        skills: "スキル",
        quickInfo: "簡単な情報",
        name: "ドゥック・ビン",
        location: "ベトナム",
        role: "フルスタックITウェブ開発者",
        experience: "フリーランスウェブ開発",
        interests: "AI、ウェブ開発、オープンソース",
        connect: "私とつながる:",
        workExperience: "職務経歴",
        freelance: "フリーランスウェブ開発者",
        freelancePeriod: "2020 - 現在",
        freelanceTasks: [
          "さまざまなクライアントのためにカスタムウェブアプリケーションを開発",
          "レスポンシブでユーザーフレンドリーなインターフェースを作成",
          "Node.jsとデータベースを使用したバックエンドソリューションを実装",
          "クライアントと協力して、特定のニーズを理解し、満たす",
        ],
        resume: "履歴書",
      },
    },
  },
};

// Fetch preferred language from localStorage, falling back to "en" if not set
const savedLanguage = localStorage.getItem("preferredLang") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage, // Initialize with saved language or "en"
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
