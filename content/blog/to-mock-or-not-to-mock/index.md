---
title: jMock and Mockito
date: "2015-04-08T22:12:03.284Z"
---


Mocks are an important technique in TDD since they allow developers to verify interaction even when isolating. Isolated tests have big advantages, they are fast, exert design pressure and allow outside in design. Other test doubles like stubs and dummies allow [[^1]] isolation but make it impossible to test some kinds of behavior [[^2]]. Isolated tests have one big downside, because they do not integrate code units, bugs (called ‘`integration defects`’) can exist in the ‘cracks’ between units. This is exacerbated by mocks their more complicated nature leaves more scope for integration defects. This is often apparent in dynamic languages using mock objects, where a renaming introduces integration defects, but unit tests using mocks with the old name still pass [[^3]]. 

*Mockito* allows us to stub and verify only methods we find significant. Whereas *jMock* forces you to write expectations for all methods that are invoked, which is called “`Strict Expectation Recording`”. A chain of methods which leads to some sort of behaviour. Mockito makes the unit test much more concise and less verbose.

Using jMock allows us to maximize feedback about our design, which aids in the process of testdriving new features. The implementations of the new features should strictly follow the expectations of the JUnit test.

Both *jMock* and *Mockito*. *jMock* is ‘stricter’ than *Mockito*, for example, unexpected method calls are errors but both frameworks are equally powerful. They are both capable of enforcing the same behaviours, APIs in *Mockito* allow for stricter tests and vice versa. However the different default philosophies of the frameworks encourage different kinds of tests. *jMocks* approach encourages fine grained tests which specify exactly what happens. This makes the tests more brittle but also exerts greater design pressure on developers to avoid writing complex methods which call many mocked methods in the first place.

I found a larger problem was that *jMock* forces you to specify in advance what was going to happen. This seemed awkward to me, as it was more difficult to both, read and write [[^4]]. In contrast, *Mockito’s* assertions happen after the fact and can be interleaved within the test code to allow easy expression of temporal restrictions. Although *jMock* allows multiple ‘expectation’ blocks and has explicit partial ordering APIs these add significant boilerplate.

So *jMock* and *Mockito* are equally powerful but *Mockito’s* philosophy results in more readable and less fragile tests.

But...Ultimately, there is *“No Silver Bullet”*.

[^1]: http://www.destroyallsoftware.com/talks/boundaries
[^2]: http://www.martinfowler.com/bliki/TestDouble.html
[^3]: https://www.github.com/xaviershay/rspecfire
[^4]: http://www.jmock.org/oopsla2004.pdf
