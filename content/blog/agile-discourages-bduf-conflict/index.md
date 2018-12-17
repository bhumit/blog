---
title: Agile development discourages Big Design Up Front, is this a conflict with software architecture?
date: "2015-06-09T22:12:03.284Z"
---

On the surface there appears to be a conflict between software architecture and agile development. However, I believe this tension is unjustified and that architecture should be a core part of agile projects.

The conflict between agile and architecture stems from their different design approaches. Architects believe creating a “big design up front” will reduce the time and effort required to fix bugs[[^1]]. Proponents of agile argue that the BDUF approach “may encourage overdesign”[[^2]], adding unnecessary features and creating needless complexity. This violates YAGNI[[^11]] and
KISS[[^3]], two core XP[[^5]] principles.

There is certainly a tension between agile and BDUF “on the axis of adaptation versus anticipation”[[^6]]. However, I believe architecture should still play a role in agile projects. Craig Larman, voted one of the most *influential agile people*[[^4]], asserts that the “tension between agility and architecture might be a false dichotomy”[[^4]]. Martin Fowler describes architecture as something which “conveys a notion of the core elements of the system, the pieces that are difficult to change”[[^7]], and I agree with his belief that even in agile software projects “there is a role for a broad starting point architecture”[[^7]] . The emphasis here is on “broad”. To avoid over-specification, the design must be general enough to allow changes to be made once problems inevitably arise. Architecture must therefore take a “rough design up front”[[^8]] approach, doing “just enough upfront design to give [...] firm foundations for the project”[[^9]]. As I discovered in industry, the RDUF approach fits nicely into “sprint zero” of agile projects.

Kent Beck, one of the original signatories of the Agile Manifesto[[^10]], advises that “architecture is just as important in XP projects as it is in any software project”[[^6]]. I believe architecture can and should play a role in agile development, but care must be taken to avoid over-specification.



[^1]: http://www.joelonsoftware.com/articles/AardvarkSpec.html
[^2]: http://randomactsofarchitecture.com/2013/07/08/big-design-up-front-versus-emergent-design/
[^3]: http://en.wikipedia.org/wiki/KISS_principle
[^4]: https://www.valueflowquality.com/the-top-20-most-influential-agile-people/
[^5]: http://dl.acm.org/citation.cfm?id=318762
[^6]: http://ieeexplore.ieee.org/xpl/articleDetails.jsp?reload=true&arnumber=5420791
[^7]: http://martinfowler.com/articles/designDead.html
[^8]: http://www.taeuber.org/how-software-architecture-can-support-agility/
[^9]: https://leanpub.com/software-architecture-for-developers/read
[^10]: http://www.agilemanifesto.org/
[^11]: http://www.amazon.co.uk/Extreme-Programming-Installed-Kent-Beck/dp/0201708426

