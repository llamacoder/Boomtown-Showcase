document.addEventListener("DOMContentLoaded", function() {

gCompanies = [];
gFavs = {};

initFavs();
initCompanies();
addFavListeners();

function initCompanies() {
  //  initialize data for all the companies
  initCompanyData();

  //  update the UI with all the companies
  for (var i = 0; i < gCompanies.length; i++) {
    addCompanyToUI(gCompanies[i]);
  }
}

function addCompanyToUI(company) {
  //  build up the html string to add a company
  let htmlStr = '<div class="col s12 m6 l4">' +
      '<img class="z-depth-2" src="' + company["logo"] +
      '">' + '<a class="fav-button btn-floating waves-effect waves-light ';
  gFavs[company["logo"]] === undefined ||
  gFavs[company["logo"]] === false ? htmlStr += " grey " : htmlStr += " red ";
  htmlStr += '"><i class="tiny material-icons">favorite</i></a>' +
      '</div>';
  $(".company-row").append(htmlStr);
}

function initFavs() {
  gFavs = JSON.parse(localStorage.getItem("BoomtownFavs"));
  if (gFavs === null) {
    gFavs = {};
  }
}

function addFavListeners() {
  $(".fav-button").click(function(event) {
    toggleFavState(event.target);
  });
}

//  Update fav status after user click
function toggleFavState(i) {
  //  get parent a and toggle its color
  let a = $(i).parent();
  a.toggleClass("grey");
  a.toggleClass("red");
  // get assoc'd img and toggle its state in local storage
  let srcVal = a.parent().find("img").attr("src");
  gFavs[srcVal] = !gFavs[srcVal];
  storeBoomtownFavs();
}

function storeBoomtownFavs() {
  localStorage.setItem("BoomtownFavs", JSON.stringify(gFavs));
}

function initCompanyData() {
  gCompanies.push(
  { id: 1,
    name: "ChargaCard",
    logo: "./images/ccLogo.png",
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
    logo: "./images/diagnosisAILogo.png",
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
    logo: "./images/fanboardLogo.png",
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
    logo: "./images/hyggeLogo.png",
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
    logo: "./images/simorLogo.png",
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
    logo: "./images/trueSyncLogo.png",
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
    logo: "./images/weltoLogo.png",
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
    logo: "./images/yaguaraLogo.png",
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
