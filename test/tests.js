const expect = chai.expect

let company = {
    id: 800,
    name: "Good Company",
    logo: "./images/yaguaraLogo.png",
    tagLine: "Your Growth Management Platform",
    description: "Good Company aligns your team behind goals and gives individuals access to the data they need so they can be productive, proactive, and successful.",
    website: "goodcompany.com",
    founders: [
      { name: "Founder One",
        title: "CEO",
        photo: "../images/founder1.jpg",
        credentials: "Founder One is good at CEO things."
      },
      { name: "Founder Two",
        title: "CIO",
        photo: "../images/founder2.jpg",
        credentials: "Founder Two is good at CIO things."
      }
    ],
    email: "info@goodcompany.com",
    orientation: "hr",
    bgColor: "cyan darken-3",
    lgColor: "black",
    smColor: "orange"
};

let companyNoFounders = {
    id: 800,
    name: "Good Company",
    logo: "./images/yaguaraLogo.png",
    tagLine: "Your Growth Management Platform",
    description: "Good Company aligns your team behind goals and gives individuals access to the data they need so they can be productive, proactive, and successful.",
    website: "goodcompany.com",
    founders: [],
    email: "info@goodcompany.com",
    orientation: "hr",
    bgColor: "cyan darken-3",
    lgColor: "black",
    smColor: "orange"
};

let founderString = '<div class="z-depth-2 cyan darken-3 white-text detail-title">Founders</div>' +
                    '<div class="founder"><img class="circle" src="../images/founder1.jpg">' +
                    '<p>Founder One<br>CEO<br><br>Founder One is good at CEO things.' +
                    '</p></div><hr>' +
                    '<div class="founder"><img class="circle" src="../images/founder2.jpg">' +
                    '<p>Founder Two<br>CIO<br><br>Founder Two is good at CIO things.' +
                    '</p></div>';

let headerString = '<div class="z-depth-2 cyan darken-3 white-text detail-title">Good Company</div>' +
                   '<div class="company col s12 m6 l4"><img class="z-depth-2" src="./images/yaguaraLogo.png">' +
                   '</div><div class="z-depth-2"><p>Good Company aligns your team behind goals and gives ' +
                   'individuals access to the data they need so they can be productive, proactive, and successful.</div>'




'<div class="z-depth-2 cyan darken-3 white-text detail-title">Founders</div>' +
                    '<div class="founder"><img class="circle" src="../images/founder1.jpg">' +
                    '<p>Founder One<br>CEO<br><br>Founder One is good at CEO things.' +
                    '</p></div><hr>' +
                    '<div class="founder"><img class="circle" src="../images/founder2.jpg">' +
                    '<p>Founder Two<br>CIO<br><br>Founder Two is good at CIO things.' +
                    '</p></div>';

let footerString = '<div class="cyan darken-3 detail-web-bar ">' +
                   '<a id="web-button" href="http://goodcompany.com/" target="blank_" ' +
                   'class=" white-text waves-effect btn-flat">Visit Our Website</a>' +
                   '<a id="contact-button" href="mailto:info@goodcompany.com?Subject=Info%20About%20Your%20Company" ' +
                   'class=" white-text waves-effect btn-flat">Contact Us</a>';


describe('#makeFounderDivs', function() {
  it('is a function', function () {
    expect(makeFounderDivs).to.be.a('function')
  })

  it('should return a valid HTML string of founder data', function() {
    expect(makeFounderDivs(company)).to.equal(founderString)
  })
  it('should return an empty string if there are no founders', function() {
    expect(makeFounderDivs(companyNoFounders)).to.equal("")
  })
})

describe('#makeHTMLHdrDetail', function() {
  it('is a function', function () {
    expect(makeHTMLHdrDetail).to.be.a('function')
  })

  it('should return a valid HTML string of header data', function() {
    expect(makeHTMLHdrDetail(company)).to.equal(headerString)
  })
})

describe('#makeHTMLFooterDetail', function() {
  it('is a function', function () {
    expect(makeHTMLFooterDetail).to.be.a('function')
  })

  it('should return a valid HTML string of header data', function() {
    expect(makeHTMLFooterDetail(company)).to.equal(footerString)
  })
})
