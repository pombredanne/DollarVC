var Content =
{
    Perks: {
        'Network & Outreach': [
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
            title: 'Sandbox Industries',
            content: 'Sandbox Industries create, invest in and explore new businesses. They search for ideas with the potential to change markets, leveraging our expertise, resources, and experience to grow successful companies through collaboration and knowledge sharing. Sandbox represents a new model of business development -- one that helps rather than harasses entrepreneurs -- and is redefining the way great ideas are generated and transformed into successful companies.',
            link: 'http://www.sandboxindustries.com',
            perks: []
        },
        {
            title: 'Apprentice UK Network',
            content: 'Hommie this is a TV show.',
            perks: []
        },
        {
            title: 'Linkless Test',
            content: 'Test.',
            perks: []
        }],
        'Advisory & Domain': [
        {
            title: ''
        }],
        'Founder Deals': [ //discounts and deals?
        {
            title: 'Amazon Web Services (AWS)',
            link: 'http://www.aws.amazon.com',
            content: '',
            perks: ['$10,000 EC2 Credits', 'bca']
        },
        {
            title: 'Sendgrid',
            link: 'http://www.aws.amazon.com',
            content: '',
            perks: ['$10,000 EC2 Credits', 'bca']
        },
        {
            title: 'Twillio',
            link: 'http://www.aws.amazon.com',
            content: '',
            perks: ['$10,000 EC2 Credits', 'bca']
        }],
        'Venture Capital': [
        {
            title: 'XSeed Capital',
            link: 'http://www.xseedcap.com/',
            content: 'Founded in 2006 as one of the pioneers of the new venture industry, XSeed Capital works with entrepreneurs to build differentiated technology startups that dramatically change markets. We are serial entrepreneurs who appreciate the dedication, passion, anxiety and sleepless nights it takes to build something valuable from scratch.<br/><br/> With $110 million under management, we make our initial investment commitments at the seed stage and continue to support our portfolio companies through multiple investment rounds. But we provide more than capital: We work hard to support our entrepreneurs.',
            perks: ['Seed Stage', 'Capital Source', { icon: 'dollar', text: '$110 Million Fund' }]
        }],
        'Legal Probono': [
        {
            title: ''
        }],
        'Events & Hackathons': [
        {
            title: ''
        }],
        'Lifestyle': [
        {
            title: 'Streem.io'
        }],
        'Memberships': [
        {
            title: 'FoundersCard'
        }]
    }
}

// mailing lists - Question Pool, Usage -
// Topic: Industry
// Question
// 

var Perks = Content.Perks;

ko.applyBindings(Content);