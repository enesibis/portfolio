export type Lang = 'en' | 'tr'

const translations = {
  en: {
    nav: {
      links: ['About', 'Experience', 'Education', 'Skills', 'Projects', 'Contact'] as string[],
    },
    hero: {
      greeting: "Hi, I'm",
      subtitle: 'Software Engineer',
      bio: "Final-year Computer Engineering student graduating in June 2026. I build backend systems with Java, Spring Boot, and Go — and I'm equally passionate about data analytics (SQL Server, Power BI, Python) and blockchain. Currently interning at Çimko.",
      cv: 'CV',
    },
    experience: {
      label: "Where I've worked",
      title: 'Experience',
      current: 'Current',
      items: [
        {
          title: 'Data Analysis Intern',
          description: 'Contributing to data analysis projects using SQL Server, T-SQL, Power BI, and Python. Building dashboards, writing T-SQL scripts, and supporting end-to-end analytical workflows.',
        },
        {
          title: 'Java Developer Intern',
          description: 'Built an Agile project management web app with Java, Spring Security, and React. Implemented REST APIs, LDAP & Google OAuth 2.0 authentication, and agile features like sprint planning and burndown charts.',
        },
        {
          title: 'Java & SAP CX Developer Intern',
          description: 'Trained in Java, Spring Framework, and SAP Hybris for e-commerce systems. Worked with SOLR indexing, RESTful APIs, and MVC architecture in an Agile team.',
        },
        {
          title: 'Back End Developer Intern',
          description: 'Developed web application components for the Labsis platform (Demir Çelik Institute) using Go and Fiber, with MVC architecture and responsive front-end improvements.',
        },
        {
          title: 'Team Captain',
          description: 'Leading the Partech UGV team in Teknofest. Managing task distribution, team coordination, and contributing to software development and system integration.',
        },
        {
          title: 'Core Team Member',
          description: 'Organized tech & software events, coordinated tasks, and fostered team dynamics within the GDSC organization team.',
        },
      ],
    },
    education: {
      label: 'Academic background',
      title: 'Education',
      current: 'Current',
      items: [
        {
          degree: 'Computer Engineering',
          description: 'Final-year student graduating in June 2026. Focused on backend systems, data analytics, and blockchain technologies.',
        },
        {
          degree: 'Anatolian High School',
          description: 'Graduated with a focus on mathematics and sciences.',
        },
      ],
    },
    skills: {
      label: 'What I work with',
      title: 'Skills',
      groups: ['Backend', 'Frontend', 'Data & Analytics', 'Tools', 'Blockchain', 'Languages'],
      languages: ['Turkish — Native', 'English — Intermediate'],
    },
    projects: {
      label: "Things I've built",
      title: 'Projects',
      viewOnGithub: 'View on GitHub',
      items: [
        {
          subtitle: 'Real-time Crypto Tracker',
          description: 'Live cryptocurrency market platform streaming prices via Binance WebSocket → SSE with in-place UI updates. Features portfolio tracking, price alerts, watchlist, JWT auth, email verification, and role-based admin panel.',
        },
        {
          subtitle: 'Blockchain Food Traceability',
          description: 'AI-powered graduation project tracking products from farm to market on the Ethereum network via smart contracts. Unlike IBM Food Trust, integrates AI analysis and delivers a full native mobile experience.',
        },
        {
          subtitle: 'End-to-End Data Platform',
          description: 'Complete supply chain management system on SQL Server with 28+ tables, stored procedures for PO/Sales/Production workflows, automated inventory triggers, and 7 Power BI-optimized views with 12 months of sample data.',
        },
      ],
    },
    contact: {
      label: "What's next?",
      title: 'Get In Touch',
      description: "I'm currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi — feel free to reach out.",
      sayHello: 'Say Hello',
    },
    footer: {
      builtBy: 'Designed & built by Enes İbiş',
      visitors: 'visitors',
    },
  },
  tr: {
    nav: {
      links: ['Hakkında', 'Deneyim', 'Eğitim', 'Yetenekler', 'Projeler', 'İletişim'] as string[],
    },
    hero: {
      greeting: 'Merhaba, ben',
      subtitle: 'Yazılım Mühendisi',
      bio: 'Haziran 2026\'da mezun olacak son sınıf Bilgisayar Mühendisliği öğrencisiyim. Java, Spring Boot ve Go ile backend sistemler geliştiriyor; veri analitiği (SQL Server, Power BI, Python) ve blokzincir teknolojilerine de aynı tutkuyla yaklaşıyorum. Şu an Çimko\'da staj yapıyorum.',
      cv: 'CV İndir',
    },
    experience: {
      label: 'Çalıştığım Yerler',
      title: 'Deneyim',
      current: 'Devam Ediyor',
      items: [
        {
          title: 'Veri Analizi Stajyeri',
          description: 'SQL Server, T-SQL, Power BI ve Python kullanarak veri analizi projelerine katkıda bulunuyorum. Dashboard geliştirme, T-SQL scriptleri yazma ve uçtan uca analitik iş akışlarını destekleme.',
        },
        {
          title: 'Java Geliştirici Stajyeri',
          description: 'Java, Spring Security ve React ile Agile proje yönetim uygulaması geliştirdim. REST API\'ler, LDAP & Google OAuth 2.0 kimlik doğrulama, sprint planlama ve burndown chart gibi agile özellikleri uyguladım.',
        },
        {
          title: 'Java & SAP CX Geliştirici Stajyeri',
          description: 'E-ticaret sistemleri için Java, Spring Framework ve SAP Hybris eğitimi aldım. Agile ekipte SOLR indeksleme, RESTful API ve MVC mimarisi üzerine çalıştım.',
        },
        {
          title: 'Back End Geliştirici Stajyeri',
          description: 'Go ve Fiber kullanarak Labsis platformu (Demir Çelik Enstitüsü) için web uygulama bileşenleri geliştirdim. MVC mimarisi ve responsive frontend iyileştirmeleri.',
        },
        {
          title: 'Takım Kaptanı',
          description: 'Teknofest\'te Partech İnsansız Kara Aracı takımına liderlik ettim. Görev dağılımı, takım koordinasyonu ve yazılım geliştirme ile sistem entegrasyonuna katkı sağladım.',
        },
        {
          title: 'Çekirdek Ekip Üyesi',
          description: 'GDSC organizasyon ekibinde teknoloji ve yazılım etkinlikleri düzenledim, görevleri koordine ettim ve takım dinamiklerini güçlendirdim.',
        },
      ],
    },
    education: {
      label: 'Akademik Geçmiş',
      title: 'Eğitim',
      current: 'Devam Ediyor',
      items: [
        {
          degree: 'Bilgisayar Mühendisliği',
          description: 'Haziran 2026\'da mezun olacak son sınıf öğrencisi. Backend sistemler, veri analitiği ve blokzincir teknolojilerine odaklanıyor.',
        },
        {
          degree: 'Anadolu Lisesi',
          description: 'Matematik ve fen bilimlerine ağırlık veren Anadolu Lisesi programından mezun oldu.',
        },
      ],
    },
    skills: {
      label: 'Kullandığım Teknolojiler',
      title: 'Yetenekler',
      groups: ['Backend', 'Frontend', 'Veri & Analitik', 'Araçlar', 'Blokzincir', 'Diller'],
      languages: ['Türkçe — Ana Dil', 'İngilizce — Orta Seviye'],
    },
    projects: {
      label: 'Geliştirdiğim Projeler',
      title: 'Projeler',
      viewOnGithub: "GitHub'da Gör",
      items: [
        {
          subtitle: 'Gerçek Zamanlı Kripto Takip',
          description: 'Binance WebSocket → SSE üzerinden canlı kripto para fiyatları yayınlayan platform. Portföy takibi, fiyat alarmları, izleme listesi, JWT kimlik doğrulama, e-posta doğrulama ve rol tabanlı admin paneli.',
        },
        {
          subtitle: 'Blokzincir Gıda İzlenebilirliği',
          description: 'Ethereum ağında akıllı kontratlar aracılığıyla ürünleri çiftlikten pazara kadar takip eden, yapay zeka destekli mezuniyet projesi. IBM Food Trust\'tan farklı olarak AI analizi entegre eder ve tam native mobil deneyim sunar.',
        },
        {
          subtitle: 'Uçtan Uca Veri Platformu',
          description: "SQL Server üzerinde 28+ tablo, PO/Satış/Üretim iş akışları için stored procedure'ler, otomatik stok tetikleyicileri ve 12 aylık örnek veriyle 7 Power BI optimize görünüm içeren tam tedarik zinciri yönetim sistemi.",
        },
      ],
    },
    contact: {
      label: 'Sıradaki?',
      title: 'İletişime Geç',
      description: 'Yeni fırsatlara açığım. Bir sorunuz, proje fikriniz veya sadece merhaba demek istiyorsanız — çekinmeden ulaşın.',
      sayHello: 'Merhaba De',
    },
    footer: {
      builtBy: 'Tasarım & Geliştirme: Enes İbiş',
      visitors: 'ziyaretçi',
    },
  },
}

export default translations
