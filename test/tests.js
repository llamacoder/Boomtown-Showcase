const expect = chai.expect

describe('gCompanies', function () {
  it('is an object', function () {
    expect(gCompanies).to.be.a('array')
  })

  describe('#getCompanyFromSrc', function () {
    it('should be a function', function () {
      expect(getCompanyFromSrc).to.be.a('function')
    })

    it('should return a company object', function () {
      expect(getCompanyFromSrc('./images/ccLogo.png')).to.deep.equal(
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
        }
      )
    })
  })
})
