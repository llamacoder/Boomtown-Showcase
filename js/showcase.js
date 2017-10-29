document.addEventListener("DOMContentLoaded", function() {

gCompanies = [];

initCompanies();

function initCompanies() {
  gCompanies.push(
  { id: 1,
    name: "ChargaCard",
    logo: "http://lorempixel.com/output/abstract-q-c-140-75-5.jpg",
    tagLine: "Changing the Face of Money",
    description: "ChargaCard is a store-issued credit card that allows customers to pay in installments. Our objective is to empower online shoppers, especially the 70% of millennials without credit scores and limited access to credit, with an alternative financing solution. Unlike the competition which offers third-party financing, ChargaCard empowers online stores to build a recurring financial relationship with their customers, get repeat business, increase brand loyalty, and grow their business through the ChargaNetwork.",
    website: "https://www.chargacard.com/",
    founders: [
      { name: "John Eagleton",
        title: "CTO",
        photo: "http://lorempixel.com/output/people-q-c-50-50-4.jpg",
        credentials: "John is the technical guru for the company.  He has been doing technical things forever and is really good at them."
      },
      { name: "Maria Nosikova",
        title: "CEO",
        photo: "http://lorempixel.com/output/people-q-c-50-50-1.jpg",
        credentials: "Maria knows all about finance and is really good at it."
      }
    ],
    orientation: "hl",
    bgColor: "darkBlue",
    lgColor: "white",
    smColor: "lightGrey"
  });

  gCompanies.push(
  { id: 2,
    name: "DiagnosisAI",
    logo: "http://lorempixel.com/output/abstract-q-c-140-75-6.jpg",
    tagLine: "Technology Advancing Medical Care",
    description: "DiagnosisAI guides patients through complicated surgeries using artificial intelligence to provide patients directed reminders, answers to questions, diagnoses, and recommended treatments while maximizing clinic reimbursements using data analytics. DiagnosisAI aims to be at the heart of the future connected medical experience.",
    website: "http://www.diagnosisai.com/",
    founders: [
      { name: "John Eagleton",
        title: "CTO",
        photo: "http://lorempixel.com/output/people-q-c-50-50-4.jpg",
        credentials: "John is the technical guru for the company.  He has been doing technical things forever and is really good at them."
      },
      { name: "Maria Nosikova",
        title: "CEO",
        photo: "http://lorempixel.com/output/people-q-c-50-50-1.jpg",
        credentials: "Maria knows all about finance and is really good at it."
      }
    ],
    orientation: "hr",
    bgColor: "lightGrey",
    lgColor: "darkBlue",
    smColor: "lightBlue"
  });

  gCompanies.push(
  { id: 3,
    name: "Fanboard",
    logo: "http://lorempixel.com/output/abstract-q-c-140-75-12.jpg",
    tagLine: "Augmenting the Fan Experience",
    description: "The number one goal of Fanboard is to create a better fan experience, to turn a mobile device into an enhancing lense that can transform the everyday into interactive moments. Fanboard's immersive products attract fans to their favorite team's native app. This is extremely powerful for the franchise. Engagement here creates connection with the team's brand and provides the opportunity to connect fans to team sponsors.",
    website: "http://fanboard.co/",
    founders: [
      { name: "John Eagleton",
        title: "CTO",
        photo: "http://lorempixel.com/output/people-q-c-50-50-4.jpg",
        credentials: "John is the technical guru for the company.  He has been doing technical things forever and is really good at them."
      },
      { name: "Maria Nosikova",
        title: "CEO",
        photo: "http://lorempixel.com/output/people-q-c-50-50-1.jpg",
        credentials: "Maria knows all about finance and is really good at it."
      }
    ],
    orientation: "hl",
    bgColor: "black",
    lgColor: "orange",
    smColor: "white"
  });

  gCompanies.push(
  { id: 4,
    name: "Hygge",
    logo: "http://lorempixel.com/output/abstract-q-c-140-75-7.jpg",
    tagLine: "OPO:  The Outlet, Perfected",
    description: "Hygge (pronounced HUE-guh) is the Danish culture of coziness and beauty in everyday moments, and the inspiration behind Hygge Power. By transforming the everyday outlet, we’re transforming how people feel about and use power. And OPO is just the beginning.",
    website: "https://www.hyggepower.com/",
    founders: [
      { name: "John Eagleton",
        title: "CTO",
        photo: "http://lorempixel.com/output/people-q-c-50-50-4.jpg",
        credentials: "John is the technical guru for the company.  He has been doing technical things forever and is really good at them."
      },
      { name: "Maria Nosikova",
        title: "CEO",
        photo: "http://lorempixel.com/output/people-q-c-50-50-1.jpg",
        credentials: "Maria knows all about finance and is really good at it."
      }
    ],
    orientation: "hr",
    bgColor: "lightGrey",
    lgColor: "black",
    smColor: "orange"
  });

  gCompanies.push(
  { id: 5,
    name: "Simor",
    logo: "http://lorempixel.com/output/abstract-q-c-140-75-8.jpg",
    tagLine: "Honoring the Intuitive Mind",
    description: "Albert Einstein once said the intuitive mind is a sacred gift and the rational mind is a faithful servant. We have created a society that honors the servant and has forgotten the gift. Simor aims to honor the sacred gift by connecting you intellectually.",
    website: "https://www.simor.org/",
    founders: [
      { name: "John Eagleton",
        title: "CTO",
        photo: "http://lorempixel.com/output/people-q-c-50-50-4.jpg",
        credentials: "John is the technical guru for the company.  He has been doing technical things forever and is really good at them."
      },
      { name: "Maria Nosikova",
        title: "CEO",
        photo: "http://lorempixel.com/output/people-q-c-50-50-1.jpg",
        credentials: "Maria knows all about finance and is really good at it."
      }
    ],
    orientation: "hl",
    bgColor: "lightGreen",
    lgColor: "black",
    smColor: "white"
  });

  gCompanies.push(
  { id: 6,
    name: "True Sync Media",
    logo: "http://lorempixel.com/output/abstract-q-c-140-75-9.jpg",
    tagLine: "Video Networks By Design",
    description: "Promote your latest specials and new food items. Blend your messaging with our award winning content and get noticed! Create the message once and distribute the message across all locations instantly. Replace TV on mute with engaging content that gets noticed. No longer will you promote competitors on TVs at your location.",
    website: "https://truesyncmedia.com/",
    founders: [
      { name: "John Eagleton",
        title: "CTO",
        photo: "http://lorempixel.com/output/people-q-c-50-50-4.jpg",
        credentials: "John is the technical guru for the company.  He has been doing technical things forever and is really good at them."
      },
      { name: "Maria Nosikova",
        title: "CEO",
        photo: "http://lorempixel.com/output/people-q-c-50-50-1.jpg",
        credentials: "Maria knows all about finance and is really good at it."
      }
    ],
    orientation: "hr",
    bgColor: "black",
    lgColor: "white",
    smColor: "lightGrey"
  });

  gCompanies.push(
  { id: 7,
    name: "Welto",
    logo: "http://lorempixel.com/output/abstract-q-c-140-75-10.jpg",
    tagLine: "Pay Bills with Cryptocurrency",
    description: "Helto is a blockchain-enabled bill and personal finance management platform that allows bitcoin owners to directly pay bills without dealing with exchanges and mismatched currencies.",
    website: "http://welto.io/",
    founders: [
      { name: "John Eagleton",
        title: "CTO",
        photo: "http://lorempixel.com/output/people-q-c-50-50-4.jpg",
        credentials: "John is the technical guru for the company.  He has been doing technical things forever and is really good at them."
      },
      { name: "Maria Nosikova",
        title: "CEO",
        photo: "http://lorempixel.com/output/people-q-c-50-50-1.jpg",
        credentials: "Maria knows all about finance and is really good at it."
      }
    ],
    orientation: "hl",
    bgColor: "black",
    lgColor: "white",
    smColor: "orange"
  });

  gCompanies.push(
  { id: 8,
    name: "Yaguara",
    logo: "http://lorempixel.com/output/abstract-q-c-140-7511.jpg",
    tagLine: "Your Growth Management Platform",
    description: "Yaguara aligns your team behind goals and gives individuals access to the data they need so they can be productive, proactive, and successful.",
    website: "https://yaguara.co/",
    founders: [
      { name: "John Eagleton",
        title: "CTO",
        photo: "http://lorempixel.com/output/people-q-c-50-50-4.jpg",
        credentials: "John is the technical guru for the company.  He has been doing technical things forever and is really good at them."
      },
      { name: "Maria Nosikova",
        title: "CEO",
        photo: "http://lorempixel.com/output/people-q-c-50-50-1.jpg",
        credentials: "Maria knows all about finance and is really good at it."
      }
    ],
    orientation: "hr",
    bgColor: "white",
    lgColor: "black",
    smColor: "orange"
  });

}




});
