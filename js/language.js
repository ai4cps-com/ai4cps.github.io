// js/language.js

const translations = {
    en: {
        heroDescHtml: 'We bring advanced AI capabilities to complex systems across <span>manufacturing, logistics, process industries, aerospace</span>, and beyond.',
        solutions: "Solutions",
        platform: "AI4CPS Platform",
        useCases: "Use Cases",
        ourApproach: "Our Approach",
        team: "Team",
        openSource: "Open Source",
        requestDemo: "Request a Demo",

        contactEmail: "contact@ai4cps.com",
        contactPhone: "+49 177 8717913",

        industrialAI: "INDUSTRIAL AI",
        heroTitleLine1: "Artificial Intelligence for",
        heroTitleLine2: "Cyber-Physical Systems",
        heroDesc: "We bring advanced AI capabilities to complex systems across <span>manufacturing, logistics,<br /> process industries, aerospace,</span> and beyond.",
        exploreSolutions: "Explore Solutions",
        heroFootPrefix: "Our key algorithmic solutions were developed within (K)ISS research project at",
        heroFootLink: "Helmut Schmidt University.",

        supportedBy: "SUPPORTED BY & TRUSTED PARTNERS",

        capabilities: "CAPABILITIES",
        aiForOps: "AI for Your Operations",
        opsScheduling: "Operations Scheduling",
        opsSchedulingDesc: "We use AI to optimize operational schedules, improve resource utilization, and enable contextualized, data-driven decision-making.",
        predictiveMaintenance: "Predictive Maintenance",
        predictiveMaintenanceDesc: "AI-driven condition monitoring helps predict failures, reduce downtime, and improve system reliability.",
        faultDetection: "Fault Detection & Diagnosis",
        faultDetectionDesc: "AI helps detect anomalies and identify root causes of system issues, enabling faster and more effective resolution.",
        paramOptimization: "Parameter Optimization",
        paramOptimizationDesc: "AI continuously analyzes system behavior to identify optimal parameter settings and improve operational performance.",
        reportingViz: "Reporting & Visualization",
        reportingVizDesc: "Advanced reporting, visualization, and LLM agents turn complex analysis into clear, actionable insights.",
        andMuchMore: "And much More",
        moreDescPrefix: "Access 30+ proven capabilities from our codebase—",
        moreDescHighlight: "<b>or get a tailored solution developed for your specific requirements.</b>",

        product: "PRODUCT",
        ai4cpsPlatform: "AI4CPS Platform",
        platformDesc: "A secure, on-premises platform combining advanced AI analysis, visualizations, dashboards, and LLM-powered interaction — with continuous and on-demand analysis of your operational data.",
        connectData: "Connect your operational data",
        connectDataDesc: "Integrate sensor measurements, controller variables, business, and other relevant sources for advanced AI4CPS analysis.",
        integrateKnowledge: "Integrate your experts’ knowledge",
        integrateKnowledgeDesc: "Combine the experience and domain knowledge of your practitioners with operational data to provide richer context for AI analysis.",

        useCasesLabel: "USE CASES",
        provenSuccess: "Proven Success in Industrial AI",
        diagnosisSystem: "Diagnosis System",
        diagnosisDesc: "Our software implements a sophisticated recomendation system for online analysis of system health and recomendation of system reconfiguration scenarios.",
        aerospace: "Aerospace",
        automation: "Automation",
        predictiveMaintenanceCase: "Predictive Maintenance",
        predictiveMaintenanceCaseDesc: "Our operational insights enabled smarter resource utilization and <b>extended maintenance intervals by up to 50%.</b>",
        aiScheduling: "AI-Based Scheduling",
        aiSchedulingDescPrefix: "Increased production throughput by ",
        aiSchedulingDescHighlight: "8.3%",
        aiSchedulingDescSuffix: " using AI-driven scheduling of industrial robots' actions and optimization based on article contexts.",
        manufacturing: "Manufacturing",
        paramOptimizationCase: "Parameter Optimization",
        paramOptimizationCaseDesc: "Data-driven parameter optimization <b>improved operational KPIs and supported smarter equipment investments, reducing unnecessary costs.</b>",

        testimonials: "TESTIMONIALS",
        trustedBy: "Trusted by Industry Leaders",
        airbusTestimonial: "\"Using AI4CPS, we enhanced diagnostics across our space systems, achieving measurable improvements in safety and reliability.\"",
        maxMustermann: "Max Mustermann",
        projectLeadAirbus: "Project Lead, Airbus DC",
        ebzTestimonial: "\"With AI4CPS, we gained real-time insight into production KPIs and automated detection of operational issues.\"",
        thomasWiebe: "Thomas Wiebe",
        productionLeadEbz: "Production Lead, eBZ GmbH",
        standDigitalTestimonial: "\"AI4CPS helped us modernize our infrastructure with a scalable Kubernetes-based architecture and reliable monitoring and data management.\"",
        zarkoMilovanovic: "Žarko Milovanović",
        ceoStandDigital: "CEO, Stand Digital",

        howWeWork: "how we work",
        strategicApproach: "Our Strategic Approach",
        fromDataToIntel: "From industrial data to operational intelligence",
        integrationProject: "Integration Project",
        timeline1: "1–2 MONTHS",
        integrationDesc: "Analysis of your systems, integration of relevant data sources, development of tailored AI models, and implementation into existing IT and OT infrastructures.",
        deployment: "Deployment of AI4CPS",
        timeline2: "<1 MONTH",
        deploymentDesc: "Our proprietary AI software AI4CPS is seamlessly integrated into your industrial environment and supports operational decision-making.",
        operatingModel: "Operating Model",
        timeline3: "LONG-TERM PARTNERSHIP",
        operatingModelDesc: "After successful implementation, fees are based solely on a transparent software license — predictable, scalable, and efficient in the long term.",

        ourTeam: "our team",
        peopleBehind: "The People Behind AI4CPS",
        teamDesc: "The people behind AI4CPS, combining expertise in AI, industrial systems, and software engineering.",
        milosName: "Miloš Milovanović",
        milosRole: "Founder & Managing Director",
        milosDesc: "Drives partnerships and market strategy, connecting industrial challenges with practical AI solutions.",
        nemanjaName: "Dr. Nemanja Hranisavljević",
        nemanjaRole: "Founder & CTO",
        nemanjaDesc: "Driving the development of AI solutions for cyber-physical systems and industrial data platforms.",
        teamStrongPrefix: "Our team is 5+ people strong and growing. We maintain close research collaborations with ",
        teamStrongHighlight: "Helmut Schmidt University",
        teamStrongSuffix: " and other leading industrial research institutions.",

        openSourceLabel: "OPEN SOURCE",
        advancingEcosystem: "Advancing the Ecosystem",
        openSourceDesc: "We actively contribute to open-source AI for CPS and collaborate with research institutions to develop and advance state-of-the-art algorithms.",
        ml4cpsDesc: "A Python package for learning and analysing hybrid dynamical systems, with a focus on cyber-physical systems.",
        ai4cpsOssDesc: "A Python framework for building dashboard applications and AI applications for cyber-physical systems",
        viewOnGithub: "VIEW ON GITHUB",

        requestDemoLabel: "request a demo",
        readyForDemo: "Ready for a 20-minute demo?",
        demoDesc: "Discover how AI4CPS can transform your industrial operations. Our experts will show you real-world applications tailored to your specific industry challenges.",
        liveWalkthrough: "Live platform walkthrough",
        customROI: "Custom ROI analysis",
        technicalQA: "Technical Q&A with engineers",
        buildSolution: "Let's build your solution",
        fillInfo: "Fill in the information below to get custom access parameters.",
        companyName: "Company name",
        emailAddress: "Email address",
        message: "Message",
        messagePlaceholder: "Tell us about your specific use case...",
        privacyPolicyPrefix: "I have read the ",
        privacyPolicyLink: "Privacy Policy.",
        submitDemo: "Request a Demo",
        contactWithin24: "We will contact you within 24 hours to schedule the demo.",

        footerDesc: "Artificial Intelligence for Cyber-Physical Systems",
        getInTouch: "GET IN TOUCH",
        linkedin: "LinkedIn",
        xing: "XING",
        copyright: "© 2026 AI4CPS BV. All rights reserved.",
        legalNotice: "Legal Notice",
        privacyPolicyFooter: "Privacy Policy"
    },

    de: {
        heroDescHtml: 'Wir bringen fortschrittliche KI-Fähigkeiten in komplexe Systeme in den Bereichen <span>Fertigung, Logistik, Prozessindustrie, Luft- und Raumfahrt</span> und darüber hinaus.',
        solutions: "Lösungen",
        platform: "AI4CPS Plattform",
        useCases: "Anwendungsfälle",
        ourApproach: "Unser Ansatz",
        team: "Team",
        openSource: "Open Source",
        requestDemo: "Demo anfordern",

        contactEmail: "contact@ai4cps.com",
        contactPhone: "+49 177 8717913",

        industrialAI: "INDUSTRIELLE KI",
        heroTitleLine1: "Künstliche Intelligenz für",
        heroTitleLine2: "Cyber-Physische Systeme",
        heroDesc: "Wir bringen fortschrittliche KI-Fähigkeiten in komplexe Systeme in den Bereichen Fertigung, Logistik, Prozessindustrie, Luft- und Raumfahrt und darüber hinaus.",
        exploreSolutions: "Lösungen entdecken",
        heroFootPrefix: "Unsere wichtigsten algorithmischen Lösungen wurden im Rahmen des (K)ISS-Forschungsprojekts an der",
        heroFootLink: "Helmut-Schmidt-Universität.",

        supportedBy: "UNTERSTÜTZT VON & VERTRAUTEN PARTNERN",

        capabilities: "FÄHIGKEITEN",
        aiForOps: "KI für Ihren Betrieb",
        opsScheduling: "Betriebsplanung",
        opsSchedulingDesc: "Wir nutzen KI, um Betriebsabläufe zu optimieren, die Ressourcennutzung zu verbessern und kontextbezogene, datengesteuerte Entscheidungen zu ermöglichen.",
        predictiveMaintenance: "Vorausschauende Wartung",
        predictiveMaintenanceDesc: "KI-gestützte Zustandsüberwachung hilft, Ausfälle vorherzusagen, Ausfallzeiten zu reduzieren und die Systemzuverlässigkeit zu verbessern.",
        faultDetection: "Fehlererkennung & Diagnose",
        faultDetectionDesc: "KI hilft, Anomalien zu erkennen und Grundursachen von Systemproblemen zu identifizieren, was eine schnellere und effektivere Lösung ermöglicht.",
        paramOptimization: "Parameteroptimierung",
        paramOptimizationDesc: "KI analysiert kontinuierlich das Systemverhalten, um optimale Parametereinstellungen zu identifizieren und die Betriebsleistung zu verbessern.",
        reportingViz: "Berichterstellung & Visualisierung",
        reportingVizDesc: "Fortschrittliche Berichterstellung, Visualisierung und LLM-Agenten verwandeln komplexe Analysen in klare, umsetzbare Erkenntnisse.",
        andMuchMore: "Und vieles mehr",
        moreDescPrefix: "Greifen Sie auf über 30 bewährte Fähigkeiten aus unserer Codebasis zu—",
        moreDescHighlight: "<b>oder erhalten Sie eine maßgeschneiderte Lösung für Ihre spezifischen Anforderungen.</b>",

        product: "PRODUKT",
        ai4cpsPlatform: "AI4CPS Plattform",
        platformDesc: "Eine sichere On-Premises-Plattform, die fortschrittliche KI-Analyse, Visualisierungen, Dashboards und LLM-gestützte Interaktion kombiniert — mit kontinuierlicher und bedarfsgesteuerter Analyse Ihrer Betriebsdaten.",
        connectData: "Verbinden Sie Ihre Betriebsdaten",
        connectDataDesc: "Integrieren Sie Sensormessungen, Controller-Variablen, Geschäftsdaten und andere relevante Quellen für fortschrittliche AI4CPS-Analysen.",
        integrateKnowledge: "Integrieren Sie das Wissen Ihrer Experten",
        integrateKnowledgeDesc: "Kombinieren Sie die Erfahrung und das Fachwissen Ihrer Praktiker mit Betriebsdaten, um einen reicheren Kontext für die KI-Analyse zu schaffen.",

        useCasesLabel: "ANWENDUNGSFÄLLE",
        provenSuccess: "Bewährter Erfolg in der industriellen KI",
        diagnosisSystem: "Diagnosesystem",
        diagnosisDesc: "Unsere Software implementiert ein hochentwickeltes Empfehlungssystem zur Online-Analyse des Systemzustands und zur Empfehlung von Szenarien für die Neukonfiguration des Systems.",
        aerospace: "Luft- und Raumfahrt",
        automation: "Automatisierung",
        predictiveMaintenanceCase: "Vorausschauende Wartung",
        predictiveMaintenanceCaseDesc: "Unsere betrieblichen Erkenntnisse <b>ermöglichten eine intelligentere Ressourcennutzung und verlängerten die Wartungsintervalle um bis zu 50%.</b>",
        aiScheduling: "KI-basierte Planung",
        aiSchedulingDescPrefix: "Steigerung des Produktionsdurchsatzes um ",
        aiSchedulingDescHighlight: "8,3%",
        aiSchedulingDescSuffix: " durch KI-gesteuerte Planung der Aktionen industrieller Roboter und Optimierung basierend auf Artikelkontexten.",
        manufacturing: "Fertigung",
        paramOptimizationCase: "Parameteroptimierung",
        paramOptimizationCaseDesc: "Datengesteuerte Parameteroptimierung verbesserte betriebliche KPIs und unterstützte intelligentere Geräteinvestitionen, wodurch unnötige Kosten reduziert wurden.",

        testimonials: "REFERENZEN",
        trustedBy: "Vertraut von Branchenführern",
        airbusTestimonial: "\"Mit AI4CPS haben wir die Diagnose in unseren Raumfahrtsystemen verbessert und messbare Verbesserungen bei Sicherheit und Zuverlässigkeit erzielt.\"",
        maxMustermann: "Max Mustermann",
        projectLeadAirbus: "Projektleiter, Airbus DC",
        ebzTestimonial: "\"Mit AI4CPS haben wir Echtzeiteinblicke in Produktions-KPIs und eine automatisierte Erkennung betrieblicher Probleme erhalten.\"",
        thomasWiebe: "Thomas Wiebe",
        productionLeadEbz: "Produktionsleiter, eBZ GmbH",
        standDigitalTestimonial: "\"AI4CPS hat uns geholfen, unsere Infrastruktur mit einer skalierbaren Kubernetes-basierten Architektur und zuverlässiger Überwachung und Datenverwaltung zu modernisieren.\"",
        zarkoMilovanovic: "Žarko Milovanović",
        ceoStandDigital: "Geschäftsführer, Stand Digital",

        howWeWork: "wie wir arbeiten",
        strategicApproach: "Unser strategischer Ansatz",
        fromDataToIntel: "Von industriellen Daten zur operativen Intelligenz",
        integrationProject: "Integrationsprojekt",
        timeline1: "1–2 MONATE",
        integrationDesc: "Analyse Ihrer Systeme, Integration relevanter Datenquellen, Entwicklung maßgeschneiderter KI-Modelle und Implementierung in bestehende IT- und OT-Infrastrukturen.",
        deployment: "Bereitstellung von AI4CPS",
        timeline2: "<1 MONAT",
        deploymentDesc: "Unsere proprietäre KI-Software AI4CPS wird nahtlos in Ihre industrielle Umgebung integriert und unterstützt die betriebliche Entscheidungsfindung.",
        operatingModel: "Betriebsmodell",
        timeline3: "LANGFRISTIGE PARTNERSCHAFT",
        operatingModelDesc: "Nach erfolgreicher Implementierung basieren die Gebühren ausschließlich auf einer transparenten Softwarelizenz — vorhersehbar, skalierbar und langfristig effizient.",

        ourTeam: "unser team",
        peopleBehind: "Die Menschen hinter AI4CPS",
        teamDesc: "Die Menschen hinter AI4CPS, die Expertise in KI, industriellen Systemen und Softwareentwicklung vereinen.",
        milosName: "Miloš Milovanović",
        milosRole: "Gründer & Geschäftsführer",
        milosDesc: "Treibt Partnerschaften und Marktstrategie voran und verbindet industrielle Herausforderungen mit praktischen KI-Lösungen.",
        nemanjaName: "Dr. Nemanja Hranisavljević",
        nemanjaRole: "Gründer & CTO",
        nemanjaDesc: "Treibt die Entwicklung von KI-Lösungen für cyber-physische Systeme und industrielle Datenplattformen voran.",
        teamStrongPrefix: "Unser Team umfasst über 5 Personen und wächst. Wir pflegen enge Forschungskooperationen mit der ",
        teamStrongHighlight: "Helmut-Schmidt-Universität",
        teamStrongSuffix: " und anderen führenden industriellen Forschungseinrichtungen.",

        openSourceLabel: "OPEN SOURCE",
        advancingEcosystem: "Das Ökosystem voranbringen",
        openSourceDesc: "Wir tragen aktiv zu Open-Source-KI für CPS bei und arbeiten mit Forschungseinrichtungen zusammen, um modernste Algorithmen zu entwickeln und voranzutreiben.",
        ml4cpsDesc: "Ein Python-Paket zum Lernen und Analysieren hybrider dynamischer Systeme mit Fokus auf cyber-physische Systeme.",
        ai4cpsOssDesc: "Ein Python-Framework zum Erstellen von Dashboard-Anwendungen und KI-Anwendungen für cyber-physische Systeme",
        viewOnGithub: "AUF GITHUB ANSEHEN",

        requestDemoLabel: "demo anfordern",
        readyForDemo: "Bereit für eine 20-minütige Demo?",
        demoDesc: "Entdecken Sie, wie AI4CPS Ihre industriellen Abläufe transformieren kann. Unsere Experten zeigen Ihnen reale Anwendungen, die auf Ihre spezifischen Branchenherausforderungen zugeschnitten sind.",
        liveWalkthrough: "Live-Plattform-Vorführung",
        customROI: "Individuelle ROI-Analyse",
        technicalQA: "Technische Fragen & Antworten mit Ingenieuren",
        buildSolution: "Lassen Sie uns Ihre Lösung entwickeln",
        fillInfo: "Füllen Sie die folgenden Informationen aus, um benutzerdefinierte Zugangsparameter zu erhalten.",
        companyName: "Firmenname",
        emailAddress: "E-Mail-Adresse",
        message: "Nachricht",
        messagePlaceholder: "Erzählen Sie uns von Ihrem spezifischen Anwendungsfall...",
        privacyPolicyPrefix: "Ich habe die ",
        privacyPolicyLink: "Datenschutzrichtlinie gelesen.",
        submitDemo: "Demo anfordern",
        contactWithin24: "Wir werden Sie innerhalb von 24 Stunden kontaktieren, um die Demo zu vereinbaren.",

        footerDesc: "Künstliche Intelligenz für Cyber-Physische Systeme",
        getInTouch: "KONTAKT AUFNEHMEN",
        linkedin: "LinkedIn",
        xing: "XING",
        copyright: "© 2026 AI4CPS BV. Alle Rechte vorbehalten.",
        legalNotice: "Impressum",
        privacyPolicyFooter: "Datenschutzrichtlinie"
    }
};

/* ------------------------------------------------------------------ */
/* Language indicator handling                                         */
/* ------------------------------------------------------------------ */

function updateLangIndicators(lang) {
    const pairs = new Set();
    document.querySelectorAll('.lang').forEach(span => {
        const parent = span.closest('p');
        if (parent) pairs.add(parent);
    });

    pairs.forEach(parent => {
        const spans = parent.querySelectorAll('.lang');
        if (spans.length < 2) return;
        spans[0].classList.toggle('active', lang === 'en');
        spans[1].classList.toggle('active', lang === 'de');
    });
}

/* ------------------------------------------------------------------ */
/* Text replacement                                                    */
/* ------------------------------------------------------------------ */

function updateTextNodes(el, newText) {
    const textNodes = Array.from(el.childNodes).filter(n => n.nodeType === Node.TEXT_NODE);
    if (textNodes.length === 0) {
        el.insertBefore(document.createTextNode(newText), el.firstChild);
        return;
    }
    textNodes[0].innerHTML = newText;
    for (let i = 1; i < textNodes.length; i++) {
        textNodes[i].innerHTML = '';
    }
}

function setLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] === undefined) return;

        if (el.children.length > 0 && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') {
            updateTextNodes(el, t[key]);
        } else {
            el.textContent = t[key];
        }
    });

    // ✅ NEW: innerHTML-based translations for elements with inline markup
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) {
            el.placeholder = t[key];
        }
    });

    updateLangIndicators(lang);
    document.documentElement.lang = lang;
}

/* ------------------------------------------------------------------ */
/* Click handlers                                                      */
/* ------------------------------------------------------------------ */

function initLanguageSwitcher() {
    const pairs = new Set();
    document.querySelectorAll('.lang').forEach(span => {
        const parent = span.closest('p');
        if (parent) pairs.add(parent);
    });

    pairs.forEach(parent => {
        const spans = parent.querySelectorAll('.lang');
        if (spans.length < 2) return;

        spans.forEach((el, index) => {
            el.style.cursor = 'pointer';
            el.addEventListener('click', function (e) {
                e.preventDefault();
                setLanguage(index === 0 ? 'en' : 'de');
            });
        });
    });

    updateLangIndicators('en');
}

/* ------------------------------------------------------------------ */
/* Boot                                                                */
/* ------------------------------------------------------------------ */

document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
