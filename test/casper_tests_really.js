casper.test.begin('Test Boomtown Site', 1, function suite(test) {
    casper.start("../index.html", function() {
        test.assertTitle("Boomtown Showcase", "title is correct");
        if (this.exists('.company-row')) {
          this.echo('the company row exists');
        } else {
          this.echo('the company row does not exist');
        }
        if (this.exists('.company')) {
          this.echo('the company exists');
        } else {
          this.echo('the company does not exist');
        }

        // this.click('.company-row')
        // test.assertEquals(this.fetchText('#text'), "BOO!")
    });
    casper.run(function() {
        test.done();
    });
});
