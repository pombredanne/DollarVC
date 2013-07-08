var Content =
{
    Perks: {
        'Networks': [
        {
            title: 'Thiel Fellowship',
            link: 'http://www.thielfellowship.org',
            content: 'DollarVC was started by Thiel Fellows, and we have access to the entire mentorship network of 250 successful founders, VCs and fellows. Gain intros, expertise and funds as a portfilio company.',
            perks: [{
                icon: 'bitbucket',
                text: 'I know the founder of bitbucket'
            }, 'perk', 'perk']
        },
        {
            title: 'Linkless Test',
            content: 'Test.',
            perks: []
        }],
        'Discounts & Deals': [ //partnerships? 
        {
            title: 'Amazon Web Services (AWS)',
            link: 'http://www.aws.amazon.com',
            content: '',
            perks: []
        }],
        'Venture Capital': [
        {
            title: 'XSeedCapital',
            link: 'http://www.xseedcap.com/',
            content: '',
            perks: []
        }]
    }
}

var Perks = Content.Perks;

ko.applyBindings(Content);