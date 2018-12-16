---
title: What is the difference between Behaviour-driven Development and Test-driven Development?
date: "2015-04-23T22:12:03.284Z"
---

![TDD](./tdd.png)

##Difference between TDD & BDD

According to Josh Davis, BDD is just TDD but with better guidelines which is meant, but not guaranteed, to eliminate issues that TDD might cause, for example, poor code organization, design practices, etc.[[^2]]

Before you read further, follow the links below for some basic resources to get you started on Behaviour-driven Development (BDD). I am assuming you already know about TDD.


#####Start by looking at some of:

* http://blog.mattwynne.net/2013/08/21/what-is-bdd-and-why-should-i-care-video/
* http://dannorth.net/introducing-bdd/
* http://gojko.net/2010/03/01/are-tools-necessary-for-acceptance-testing-or-are-they-just-evil/

##Misconceptions about BDD and TDD

1. **The client doesn’t care about testing.**
Acutally BDD is a specification-centric perspective, client doesn’t need to do anything with testing. But test is verification which is complex to understand and developers would care about it.

2. **The client doesn’t want to write the specifications.**
In BDD, heterogeneous people need advice from others who knows what they are doing to get a good solution. So the client just needs to provide the team information concerning the problem he/she wants to solve.

3. **You can achieve the same without a business readable Domain Specific Language (DSL).**
Writing in natural language is about improving communication within the team. So that the team can brainstorm together about the best path to transform a specification into business needs. It is driven to prevent communication gaps.[[^3]]

##Are Tests Specification?

TDD provides an interesting double-check mechanism.[[^4]] With TDD, every programmer states his/her intent twice; once in the unit test and once in the production code. Only if they match do we get a green bar.[[^5]] Whereas, combining Specification By Example with production code means that you have both things said quite differently, which increases their ability to find errors.[[^6]] Also the use of ubiquitous language helps describe the behaviour which ultimately helps building a shared understanding of the product.[[^7]]

##TDD/BDD as architectural tools? Any difference?

Both framework can help design in the small, avoid unintended complexity and build enough of an architecture to start writing code and then flesh out our architecture as the code evolves in order to prevent us from experiencing the folly of BDUF (Big Design Up Front).[[^8]]However, developing in a BDD way is not actually the only path to the well-formed architecture, since requirements drive architecture.[[^9]] The process of thinking about software architecture is really about putting some boundaries in place, inside which you can build your software using whatever xDD practices/principles you like.[[^10]] In this regard, they barely have any differences in terms of taking a role as architectural tools.

##Let's Conclude

BDD is a synthesis and refinement of practices stemming from TDD.[[^11]] BDD notations are closer to everyday language to understand, so that the project can fit the needs of users. According to Dreyfus model of skill acquisition [[^12]], When non-techincal people starts using BDD tools, the first stage is always to follow the existing processes, patterns, and tools. And the learner would be comfortable with the basics of BDD to understand the values and concepts. Whereas, TDD is difficult for non-developers understanding even the basic concepts. Thus, having a ubiquitous language by the means of specification, provides a better understanding of the product for all stakeholders.

Anyhow, I hope you enjoyed reading this. Cya next time!


[^1]: http://lostechies.com/derekgreer/2011/03/21/effective-tests-test-first/ "D. Greer, “Effective tests: Test first.”"
[^2]: https://joshldavis.com/2013/05/27/difference-between-tdd-and-bdd/ "J. Davis, “The difference between tdd and bdd.”"
[^3]: http://www.thoughtworks.com/insights/blog/3-misconceptions-about-bdd "N. Pufal and J. Vieira, “3 misconceptions about bdd.”"
[^4]: http://xp123.com/articles/2005/02/ "B. Wake, “Pattern patter: Anonymous subclass with instance initializer.”"
[^5]: http://accu.org/index.php/journals/1325 "A. Petersen, “Design in test-driven development.”"
[^6]: http://martinfowler.com/bliki/SpecificationByExample.html "M. Fowler, “Specification by example.”"
[^7]:  http://agilecoach.typepad.com/agile-coaching/2012/03/bdd-in-a-nutshell.html "R. Davies, “Bdd in a nutshell.”"
[^8]: http://www.infoq.com/presentations/TDD-BDD-as-Architectural-Tools "J. Kovacs, “Tdd/bdd as architectural tools.”"
[^9]: https://vimeo.com/user22258446/review/79092608/600e7bd650 "T. Gilb, “Software architecture - what is wrong with current software architecture methods: and 10 principles for improvement.”" 
[^10]: http://www.codingthearchitecture.com/2014/02/19/software_architecture_provides_boundaries_for_tdd_bdd_ddd_rdd_and_clean_code.html "S. Brown, “Software architecture provides boundaries for tdd, bdd..""
[^11]: http://guide.agilealliance.org/guide/bdd.html "A. Alliance, “Bdd.”"
[^12]: http://www.dtic.mil/cgi-bin/GetTRDoc?AD=ADA084551 "S. E. Dreyfus and H. L. Dreyfus, “A five-stage model of the mental activities involved in directed skill acquisition,”"