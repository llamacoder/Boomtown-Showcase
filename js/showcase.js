document.addEventListener("DOMContentLoaded", function() {

gCompanies = [];
gFavs = {};

initFavs();
initCompanies();
addFavListeners();
addCompanyListeners();

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
  let htmlStr = '<div class="company col s12 m6 l4">' +
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

function addCompanyListeners() {
  $(".company").click(function(event) {
    //  target is the img, so grab the src and look up the assoc'd company
    let co = getCompanyFromSrc($(event.target).attr("src"));
    if (co !== null) {
      showCompanyDetails(co);
    }
  });
}

function getCompanyFromSrc(str) {
  for (var i = 0; i < gCompanies.length; i++) {
    if (gCompanies[i].logo === str) {
      return gCompanies[i];
    }
  }
  return null;
}

function showCompanyDetails(company) {
  //  set up the new company data on the detail panel and show it
  let $detail = $("#detail-panel");
  $detail.empty();
  let htmlStr = '<div class="z-depth-2 ' + company.bgColor + ' white-text detail-title">' +
                company.name + '</div>';
  htmlStr += '<div class="company col s12 m6 l4">' +
      '<img class="z-depth-2" src="' + company["logo"] +
      '">' +
      '</div>' +
      '<div class="z-depth-2"><p>' + company.description + "</div>";
  htmlStr += '<div class="z-depth-2 ' + company.bgColor + ' white-text detail-title">Founders</div>';
  htmlStr += '<div class="founder">' +
             '<img class="circle" src="' + company.founders[0].photo + '">' +
             '<p>' + company.founders[0].name + '<br>' +
             company.founders[0].title + '<br><br>' +
             company.founders[0].credentials + '</p>' +
             '</div>';
  htmlStr += '<hr>';
  htmlStr += '<div class="founder">' +
            '<img class="circle" src="' + company.founders[1].photo + '">' +
            '<p><b>' + company.founders[1].name + '</b><br>' +
            company.founders[1].title + '<br><br>' +
            company.founders[1].credentials + '</p>' +
            '</div>';
  htmlStr += '<div class="' + company.bgColor +
             ' detail-web-bar ">' +
             '<a id="web-button" href="http://' + company.website + '/" target="blank_" class=" white-text waves-effect btn-flat">Visit Our Website</a>' +
             '<a id="contact-button" href="mailto:' + company.email +
             '?Subject=Info%20About%20Your%20Company" class=" white-text waves-effect btn-flat">Contact Us</a>';


  $detail.append(htmlStr);

  $.fancybox.open($('#detail-panel'), {showCloseButton:false});
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
    website: "www.chargacard.com",
    founders: [
      { name: "Maria Nosikova",
        title: "CEO",
        photo: "../images/CMariaNosikova.jpg",
        credentials: "Maria knows all about finance and is really good at it."
      },
      { name: "John Eagleton",
        title: "CTO",
        photo: "../images/CJohnEagleton.jpg",
        credentials: "John is the technical guru for the company.  He has been doing technical things forever and is really good at them."
      }
    ],
    email: "info@chargacard.com",
    orientation: "hl",
    bgColor: "teal lighten-2",
    lgColor: "white",
    smColor: "lightGrey"
  });

  gCompanies.push(
  { id: 2,
    name: "DiagnosisAI",
    logo: "./images/diagnosisAILogo.png",
    tagLine: "Technology Advancing Medical Care",
    description: "DiagnosisAI guides patients through complicated surgeries using artificial intelligence to provide patients directed reminders, answers to questions, diagnoses, and recommended treatments while maximizing clinic reimbursements using data analytics. DiagnosisAI aims to be at the heart of the future connected medical experience.",
    website: "www.diagnosisai.com",
    founders: [
      { name: "Dr. Omeed Saghafi",
        title: "CEO",
        photo: "../images/DOmeedSaghafi.jpg",
        credentials: "As a practicing Emergency Physician, Dr. Saghafi has experienced the increasing need for easy and affordable access to healthcare firsthand. He works at several private hospitals in Denver, Colorado and is a Clinical Instructor at the University of Colorado. He received a BS in Bioengineering and MD from the University of California, San Diego. He completed a residency in Emergency Medicine at Denver Health Medical Center, and is a MBA candidate at the University of Colorado."
      },
      { name: "Dr. Henry Duong",
        title: "CTO",
        photo: "../images/DHenryDuong.jpg",
        credentials: "Frustrated with the slow adoption of new technologies in healthcare, Dr. Duong focuses his energy on the intersection of technology and medicine. After completing medical school, Dr. Duong created a gig-based telemedicine startup called DimeDoc, providing affordable access to healthcare professionals using a similar model to Fiverr.com. He eventually sold the underlying platform code and remains involved in researching the latest technologies in the medical space. Dr. Duong also researches, edits, reviews, and writes medical literature for several companies around the world."
      }
    ],
    email: "info@diagnosisai.com",
    orientation: "hr",
    bgColor: "light-blue lighten-4",
    lgColor: "darkBlue",
    smColor: "lightBlue"
  });

  gCompanies.push(
  { id: 3,
    name: "Fanboard",
    logo: "./images/fanboardLogo.png",
    tagLine: "Augmenting the Fan Experience",
    description: "The number one goal of Fanboard is to create a better fan experience, to turn a mobile device into an enhancing lense that can transform the everyday into interactive moments. Fanboard's immersive products attract fans to their favorite team's native app. This is extremely powerful for the franchise. Engagement here creates connection with the team's brand and provides the opportunity to connect fans to team sponsors.",
    website: "fanboard.co",
    founders: [
      { name: "Morgan Drake",
        title: "CEO",
        photo: "../images/FMorganDrake.png",
        credentials: "Morgan knows all about media, content, sports, and financial stuff and is really good at it."
      },
      { name: "Vladimir Cezar",
        title: "Technical Co-Founder",
        photo: "../images/FVladimirCezar.jpg",
        credentials: "Vladimir knows all about technology and is really good at it."
      }
    ],
    email: "info@fanboard.co",
    orientation: "hl",
    bgColor: "orange darken-4",
    lgColor: "orange",
    smColor: "white"
  });

  gCompanies.push(
  { id: 4,
    name: "Hygge",
    logo: "./images/hyggeLogo.png",
    tagLine: "OPO:  The Outlet, Perfected",
    description: "Hygge (pronounced HUE-guh) is the Danish culture of coziness and beauty in everyday moments, and the inspiration behind Hygge Power. By transforming the everyday outlet, we’re transforming how people feel about and use power. And OPO is just the beginning.",
    website: "www.hyggepower.com",
    founders: [
      { name: "Caleb Scalf",
        title: "CTO",
        photo: "../images/HCalebScalf.jpg",
        credentials: "Caleb is the vision guru for the company.  He has been doing visionary things forever and is really good at them."
      },
      { name: "David Delcourt",
        title: "CTO",
        photo: "../images/HDavidDelcourt.jpg",
        credentials: "David knows all about technology and has been doing it for a long time and is really good at it."
      },
      { name: "Mark Mietus",
        title: "CFO",
        photo: "../images/HMarkMietus.jpg",
        credentials: "Mark knows all about finance and has been doing it for a long time and is really good at it."
      },
      { name: "Max Lewin",
        title: "CIO",
        photo: "../images/HMaxLewin.jpg",
        credentials: "Max knows all about information and has been doing it for a long time and is really good at it."
      }
    ],
    email: "info@hyggepower.com",
    orientation: "hr",
    bgColor: "orange darken-4",
    lgColor: "black",
    smColor: "orange"
  });

  gCompanies.push(
  { id: 5,
    name: "Simor",
    logo: "./images/simorLogo.png",
    tagLine: "Honoring the Intuitive Mind",
    description: "Albert Einstein once said the intuitive mind is a sacred gift and the rational mind is a faithful servant. We have created a society that honors the servant and has forgotten the gift. Simor aims to honor the sacred gift by connecting you intellectually.",
    website: "www.simor.org",
    founders: [
      { name: "Alireza Mohammadrezabeig",
        title: "CEO",
        photo: "../images/SAlirezaMohammadrezabeig.jpg",
        credentials: "Alireza knows all about CEO stuff and is really good at it."
      },
      { name: "Alireza Asadi",
        title: "CTO",
        photo: "../images/SAlirezaAsadi.jpg",
        credentials: "Alireza is the technical guru for the company.  He has been doing technical things forever and is really good at them."
      }
    ],
    email: "info@simor.org",
    orientation: "hl",
    bgColor: "light-blue darken-2",
    lgColor: "black",
    smColor: "white"
  });

  gCompanies.push(
  { id: 6,
    name: "True Sync Media",
    logo: "./images/trueSyncLogo.png",
    tagLine: "Video Networks By Design",
    description: "Promote your latest specials and new food items. Blend your messaging with our award winning content and get noticed! Create the message once and distribute the message across all locations instantly. Replace TV on mute with engaging content that gets noticed. No longer will you promote competitors on TVs at your location.",
    website: "truesyncmedia.com",
    founders: [
      { name: "Scott Davis",
        title: "CEO",
        photo: "../images/TScottDavis.jpg",
        credentials: "John is the technical guru for the company.  He has been doing technical things forever and is really good at them."
      },
      { name: "Mark Larson",
        title: "CTO",
        photo: "http://lorempixel.com/output/people-q-c-50-50-1.jpg",
        credentials: "Maria knows all about technology and is really good at it."
      }
    ],
    email: "info@truesyncmedia.com",
    orientation: "hr",
    bgColor: "red",
    lgColor: "white",
    smColor: "lightGrey"
  });

  gCompanies.push(
  { id: 7,
    name: "Welto",
    logo: "./images/weltoLogo.png",
    tagLine: "Pay Bills with Cryptocurrency",
    description: "Helto is a blockchain-enabled bill and personal finance management platform that allows bitcoin owners to directly pay bills without dealing with exchanges and mismatched currencies.",
    website: "welto.io",
    founders: [
      { name: "Alex Pashkevych",
        title: "CEO",
        photo: "../images/WAlexPashkevych.png",
        credentials: "Alex is the vision guru for the company.  He has been doing visionary things forever and is really good at them."
      },
      { name: "Dmitriy Sazonov",
        title: "CTO",
        photo: "../images/WDima.jpg",
        credentials: "Dmitriy knows all about technical stuff and has been doing it for a long time and is really good at it."
      },
      { name: "Gene Chytakh",
        title: "CIO",
        photo: "../images/WGene.jpg",
        credentials: "Gene knows all about information stuff and has been doing it for a long time and is really good at it."
      }
    ],
    email: "info@welto.io",
    orientation: "hl",
    bgColor: "orange darken-4",
    lgColor: "white",
    smColor: "orange"
  });

  gCompanies.push(
  { id: 8,
    name: "Yaguara",
    logo: "./images/yaguaraLogo.png",
    tagLine: "Your Growth Management Platform",
    description: "Yaguara aligns your team behind goals and gives individuals access to the data they need so they can be productive, proactive, and successful.",
    website: "yaguara.co",
    founders: [
      { name: "Jonathan Smalley",
        title: "CEO",
        photo: "../images/YJonathanSmalley.jpg",
        credentials: "Jonathan is the vision guru for the company.  He has been doing visionary things forever and is really good at them."
      },
      { name: "Patrick Williamson",
        title: "CIO",
        photo: "../images/YPatrickWilliamson.jpg",
        credentials: "Patrick is the information guru for the company.  He has been doing information things forever and is really good at them."
      },
      { name: "Chad Nickell",
        title: "CTO",
        photo: "../images/YChadNickell.jpg",
        credentials: "Chad knows all about technical things and has been doing them for a really long time and is really good at it."
      }
    ],
    email: "info@yaguara.co",
    orientation: "hr",
    bgColor: "cyan darken-3",
    lgColor: "black",
    smColor: "orange"
  });

}




});
