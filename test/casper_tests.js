var casper = require('casper').create();

casper.start('http://127.0.0.1:3000/', function() {
    this.echo(this.getTitle(), 'INFO');
});

casper.run();
